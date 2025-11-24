<template>
  <div class="container mx-auto text-center lg:w-1/2">
    <p
      class="mt-12 text-[clamp(16px,2.8vw,24px)] leading-[clamp(20px,3.8vw,30px)] font-normal"
    >
      {{ t('Home.platform_descriptions') }}
    </p>
    <p
      variant="description"
      class="my-8 text-[clamp(16px,2.8vw,24px)] leading-[clamp(20px,3.8vw,30px)] font-normal"
    >
      {{ t('Home.present_startup') }}
    </p>

    <BaseButton class="greenGradient px-6 py-3 text-lg font-bold mx-auto px-4">
      {{ t('Home.HeroSection.join') }}
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n() // Nuxt 3 / Vue I18n uchun translation hook
</script>
