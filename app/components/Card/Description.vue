<template>
  <div :class="['text-sm text-neutral-500 dark:text-neutral-400', className]">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{ className?: string }>()
</script>
