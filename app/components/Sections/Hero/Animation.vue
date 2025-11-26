<template>
  <div ref="containerRef">
    <div>
      <div class="relative overflow-hidden">
        <div
          class="absolute left-0 top-[-50%] h-[200%] w-full bg-[url('/images/BGHero.png')] bg-contain bg-center bg-no-repeat xl:block hidden"
        />
        <SectionsHeroContent ref="containerRef" class="hidden xl:block">
          <template #content>
            <div
              class="absolute left-1/2 top-1/3 z-40 w-auto -translate-x-1/2 -translate-y-1/2 opacity-85 shadow-gray-300 duration-300 ease-in-out hover:scale-105 max-[540px]:min-w-[285px] xl:left-1/2 xl:top-1/2 min-[1280px]:min-w-[700px]"
            >
              <div
                class="flex w-full items-center gap-4 rounded-[40px] bg-white max-sm:p-4 sm:p-6"
              >
                <img
                  :src="BasicLogo"
                  alt="png"
                  class="h-[30px] w-[40px] sm:h-[50px] sm:w-[70px] xl:h-auto xl:w-[120px]"
                />
                <h1
                  class="select-none font-bold transition-colors duration-200 hover:text-[#7DBA28] max-sm:text-[30px] sm:text-[30px] md:text-[45px] lg:text-[60px] xl:text-[80px]"
                >
                  Startupbase
                </h1>
              </div>
            </div>
          </template>

          <template #contentTags>
            <div>
              <div
                v-for="(tag, index) in tags"
                :key="index"
                :ref="(el) => (tagRefs[index] = el)"
                :style="{
                  left: tag.left,
                  top: tag.top,
                  animationDelay: `${index * 650}ms`,
                }"
                class="absolute z-10 rounded-2xl border-[#7DBA28] bg-white/90 px-4 py-2 text-black opacity-0 shadow-md transition-all duration-1000 ease-out hover:z-50 hover:scale-[1.3]! hover:border hover:shadow-lg max-xl:hidden"
                :class="showTags ? 'scale-100 opacity-100' : ''"
              >
                <p class="font-bold text-gray-800 xl:text-xl 2xl:text-[32px]">
                  {{ tag.label }}
                </p>
              </div>
            </div>
          </template>
        </SectionsHeroContent>

        <SectionsHeroContent
          class="xl:hidden max-w-[1000px] mx-auto max-sm:pt-0 max-md:pt-12 max-xl:pt-32"
        >
          <template #contentTagsTop>
            <div
              class="flex gap-4 items-center justify-center flex-wrap mb-4 select-none"
            >
              <div class="h-[2px] w-full" />
              <SectionsHeroTag
                v-for="(tag, index) in top"
                :key="index"
                :tag="tag"
                :isTag="showTags"
              />
            </div>
          </template>
          <template #content>
            <div
              class="mx-auto my-6 flex w-full items-center justify-center px-4"
            >
              <div
                class="flex items-center gap-4 rounded-2xl sm:rounded-3xl xl:rounded-[40px] bg-white p-6 xl:shadow-lg max-xl:border-2 max-sm:p-4 sm:p-6"
              >
                <img
                  :src="BasicLogo"
                  alt="png"
                  class="h-[30px] w-[40px] sm:h-[50px] sm:w-[70px] xl:h-auto xl:w-[120px]"
                />
                <h1
                  class="select-none font-bold transition-colors duration-200 hover:text-[#7DBA28] max-sm:text-[30px] sm:text-[30px] md:text-[45px] lg:text-[60px] xl:text-[80px]"
                >
                  Startupbase
                </h1>
              </div>
            </div>
          </template>

          <template #contentTags>
            <div
              class="flex gap-4 items-center justify-center flex-wrap mt-4 select-none"
            >
              <div class="h-[2px] w-full" />
              <SectionsHeroTag
                v-for="(tag, index) in bottom"
                :key="index"
                :tag="tag"
                :isTag="showTags"
              />
            </div>
          </template>
        </SectionsHeroContent>
      </div>

      <SectionsHeroFooter />
    </div>
  </div>
</template>
<script setup lang="ts">
import BasicLogo from '/icons/basicLogo.png'
import { useTagList } from '@/data/tagList.ts'

const containerRef = ref<HTMLElement | null>(null)
const tagRefs: any = ref<(HTMLElement | null)[]>([])
const showTags = ref(true)

const { data, resources, programs, stages } = useTagList()
const tags = ref([...data, ...resources, ...programs, ...stages])
const tagsforMobile = [...data, ...resources, ...programs, ...stages]
const middle = Math.ceil(tagsforMobile.length / 2)

const top = tagsforMobile.slice(0, middle)
const bottom = tagsforMobile.slice(middle)
// Positions for animation
const positions: any = reactive(tags.value.map(() => ({ x: 0, y: 0 })))
const targetOffsets: any = reactive(tags.value.map(() => ({ x: 0, y: 0 })))
const movementCoefficients = reactive(
  tags.value.map(() => ({
    x: 1 + Math.random() * 3,
    y: 1 + Math.random() * 3,
  }))
)

let animationFrameId: number | undefined

function updatePositions() {
  tagRefs.value.forEach((tagEl, index) => {
    if (!tagEl) return
    positions[index].x += (targetOffsets[index].x - positions[index].x) * 0.05
    positions[index].y += (targetOffsets[index].y - positions[index].y) * 0.05
    tagEl.style.transform = `translate(${positions[index].x}px, ${positions[index].y}px)`
  })
  animationFrameId = requestAnimationFrame(updatePositions)
}

function handleMouseMove(e: MouseEvent) {
  const container = containerRef.value
  if (!container) return
  const { width, height, left, top } = container.getBoundingClientRect()
  const offsetX = (e.clientX - left - width / 2) / (width / 2)
  const offsetY = (e.clientY - top - height / 2) / (height / 2)

  tagRefs.value.forEach((_, index) => {
    const coeff: any = movementCoefficients[index]
    targetOffsets[index].x = -offsetX * 70 * coeff.x
    targetOffsets[index].y = -offsetY * 70 * coeff.y
  })
}

onMounted(() => {
  if (showTags.value) {
    window.addEventListener('mousemove', handleMouseMove)
    updatePositions()
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  if (animationFrameId !== undefined) {
    cancelAnimationFrame(animationFrameId)
  }
})
</script>
