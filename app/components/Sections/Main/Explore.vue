<template>
  <div
    class="container grid lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-16 sm:pb-52 lg:pt-16 lg:pb-48"
  >
    <div class="space-y-4x">
      <h3
        class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4"
      >
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
    <img src="/images/uzbMap.svg" alt="map" />
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n()
</script>
