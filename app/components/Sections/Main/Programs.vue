<script setup lang="ts">
import { useI18n } from '#imports'

const { t } = useI18n()

const DATA = [
  {
    icon: '/images/uzb-map.png',
    title: t('Home.ProgramsCards.LocalTitle'),
    subtitle: t('Home.ProgramsCards.LocalDesc'),
    href: '/programs?tab=local',
  },
  {
    icon: '/images/world-map.png',
    title: t('Home.ProgramsCards.InternationTitle'),
    subtitle: t('Home.ProgramsCards.InternationDesc'),
    href: '/programs?tab=international',
  },
  {
    icon: '/images/puzzle.png',
    title: t('Home.ProgramsCards.SupportTitle'),
    subtitle: t('Home.ProgramsCards.SupportDesc'),
    href: '/programs?tab=support-programs',
  },
]
</script>

<template>
  <div class="container relative z-5 py-10 xs:px-5 md:py-20">
    <h2 class="mb-10 text-[50px] font-semibold max-sm:text-center">
      {{ t('Home.ProgramsCards.Title') }}
    </h2>

    <div class="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
      <NuxtLink
        v-for="(program, idx) in DATA"
        :key="program.title + idx"
        :to="program.href"
      >
        <div
          class="h-full max-h-[500px] min-h-[380px] rounded-2xl bg-white px-10 pb-14 pt-5"
        >
          <img :src="program.icon" :alt="program.title" class="mb-5" />

          <div class="flex gap-2">
            <div
              class="h-7 min-w-[3px] max-w-[3px] bg-[#7DBA28] sm:h-9 xl:h-9"
            ></div>

            <div>
              <h3 class="mb-5 text-2xl font-semibold">
                {{ program.title }}
              </h3>

              <p class="text-gray-600 leading-relaxed">
                {{ program.subtitle }}
              </p>
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
