<script setup lang="ts">
import { useRouter, useRuntimeConfig } from '#imports'
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from '@/components/ui/tooltip'

interface Props {
  bgImage?: string | null
  logo: string
  title: string
  description: string
  industry: string
  stage: string
  id: string | number
  isAuth?: any
}

const props = defineProps<Props>()

const router = useRouter()
const config = useRuntimeConfig()

const getTruncatedText = (text: string, maxLength = 12) =>
  text.length > maxLength ? text.slice(0, maxLength) + '...' : text

const handleOnClick = (id: string | number) => {
  router.push(`/startups/${id}`)
}
</script>

<template>
  <div
    @click="handleOnClick(props.id)"
    class="relative min-h-[530px] w-full cursor-pointer overflow-hidden rounded-[20px] border bg-white p-5"
  >
    <div class="z-[1] flex h-full flex-col items-center justify-end gap-8">
      <img
        :src="config.public.baseURL + props.logo"
        :alt="props.title"
        class="h-[150px] w-auto object-contain m-auto rounded-xl"
        loading="lazy"
      />

      <div class="text-black text-center">
        <h3 class="font-bold text-xl line-clamp-2">
          {{ props.title }}
        </h3>

        <p class="text-sm mt-4 leading-5 line-clamp-6 min-h-[100px]">
          {{ props.description }}
        </p>
      </div>
    </div>

    <!-- Bottom section -->
    <div
      class="absolute bottom-5 left-5 right-5 flex items-end justify-between"
    >
      <!-- Stage tooltip -->
      <TooltipProvider>
        <Tooltip v-if="props.stage">
          <TooltipTrigger>
            <span class="px-6 py-0.5 rounded bg-slate-100 text-sm">
              {{ getTruncatedText(props.stage, 10) }}
            </span>
          </TooltipTrigger>

          <TooltipContent side="top" class="text-xs">
            {{ props.stage }}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <!-- Industry tooltip -->
      <TooltipProvider>
        <Tooltip v-if="props.industry">
          <TooltipTrigger>
            <span class="lowercase text-sm">
              {{ getTruncatedText(props.industry, 12) }}
            </span>
          </TooltipTrigger>

          <TooltipContent side="top" class="text-xs">
            {{ props.industry }}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </div>
</template>
