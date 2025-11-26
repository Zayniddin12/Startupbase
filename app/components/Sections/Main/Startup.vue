<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="relative z-1">
    <div class="container py-10 xs:px-5">
      <h2 class="text-3xl font-bold max-sm:text-center mb-6">
        {{ t('Home.Startups.title') }}
      </h2>

      <SliderStartup />

      <div class="relative z-3 flex justify-center mt-6">
        <NuxtLink to="/startups">
          <Button
            class="w-full md:w-auto px-6 py-3 rounded-xl bg-[#7DBA28] text-white font-medium hover:bg-[#6aa223] transition-all"
          >
            <p class="text-base">
              {{ t('Home.Investors.all_investors') }}
            </p>
          </Button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
