<script setup lang="ts">
interface TagType {
  href?: string
  left?: string
  top?: string
  label: string
}

interface HeroTagProps {
  className?: string
  tag: TagType
  isTag: boolean
}
const props = defineProps<HeroTagProps>()

// Shartli class
const showTag = props.isTag ? 'opacity-100 scale-100' : ''
</script>

<template>
  <NuxtLinkLocale :to="props.tag.href || '#!'">
    <BaseButton
      variant="clear"
      class="text-center w-fit! bg-white/90 border-[#E5E7EA] md:p-3 max-xl:border-2 rounded-2xl xl:rounded-2xl text-black xl:shadow-md z-10 hover:z-50 xl:hover:shadow-lg transform transition-all duration-1000 ease-out cursor-pointer xl:w-full opacity-100 scale-100"
    >
      <p
        class="font-bold text-gray-800 max-sm:text-sm max-[360px]:text-[12px] max-[320px]:text-[11px] sm:text-[18px] md:text-[24px] xl:text-[30px]"
      >
        {{ props.tag.label }}
      </p>
    </BaseButton>
  </NuxtLinkLocale>
</template>
