<script setup lang="ts">
interface Props {
  className?: string
  title: string | number
  subtitle: string
  href: string
}

const props = defineProps<Props>()

// cn replacement
const classes = props.className
  ? props.className +
    ' h-32 sm:h-36 lg:h-48 max-w-[300px] select-none items-center justify-between font-bold text-black'
  : 'h-32 sm:h-36 lg:h-48 max-w-[300px] select-none items-center justify-between font-bold text-black'
</script>

<template>
  <div :class="classes">
    <NuxtLink :to="href">
      <div class="h-full max-sm:text-center flex flex-col items-center">
        <p
          class="items-center text-5xl lg:text-[90px] font-extrabold leading-tight"
        >
          {{ title }}
        </p>
        <p class="text-center text-2xl lg:text-[29px]">
          {{ subtitle }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>
