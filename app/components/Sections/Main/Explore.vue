<script setup lang="ts">
import { ref, onMounted } from 'vue'
import uzbMap from '@/assets/images/uzbMap.svg'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
const { t } = useI18n()

const tooltipText = ref('')
const tooltipVisible = ref(false)
const tooltipX = ref(0)
const tooltipY = ref(0)

onMounted(() => {
  const svgEl = document.querySelector('#uzb-map') as SVGElement
  if (!svgEl) return

  const paths = svgEl.querySelectorAll('path')

  paths.forEach((p) => {
    const originalFill = p.getAttribute('fill')
    const regionName = p.getAttribute('id') || 'Unknown region'

    p.addEventListener('mouseenter', (e) => {
      tooltipText.value = regionName
      tooltipVisible.value = true

      p.setAttribute('fill', '#ffffff')
    })

    p.addEventListener('mousemove', (e: MouseEvent) => {
      tooltipX.value = e.clientX + 15
      tooltipY.value = e.clientY + 15
    })

    p.addEventListener('mouseleave', () => {
      tooltipVisible.value = false
      p.setAttribute('fill', originalFill || '')
    })
  })
})
</script>

<template>
  <div class="relative">
    <div
      class="container grid lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-16 sm:pb-52 lg:pt-16 lg:pb-48"
    >
      <div class="space-y-4">
        <h3 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          {{ t('explore_global_map_title') }}
        </h3>

        <p class="text-lg text-gray-600 leading-relaxed">
          {{ t('explore_global_map_description') }}
        </p>

        <BaseButton
          :text="t('explore_more')"
          class="mt-6 px-8 py-4 rounded-lg!"
        />
      </div>

      <uzbMap id="uzb-map" class="cursor-pointer" />
    </div>

    <!-- Tooltip (absolute) -->
    <Tooltip v-if="tooltipVisible">
      <TooltipTrigger />
      <TooltipContent
        :style="{ top: tooltipY + 'px', left: tooltipX + 'px' }"
        class="fixed pointer-events-none"
      >
        {{ tooltipText }}
      </TooltipContent>
    </Tooltip>
  </div>
</template>
