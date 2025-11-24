<template>
  <div :class="['p-6 pt-0', className]">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{ className?: string }>()
</script>
