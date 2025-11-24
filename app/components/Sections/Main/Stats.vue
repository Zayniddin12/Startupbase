<script setup lang="ts">
import { formatNumber } from '~/utils/index'

// i18n
const { t } = useI18n()

const stats = {
  startups: 1250,
  total_investment: 18000000,
  investors: 420,
  events: 85,
  accelerators: 32,
}

const StatsList = [
  {
    title: formatNumber(stats.startups),
    subtle: t('Home.MainStatsSection.startups'),
    href: '/startups',
  },
  {
    title: formatNumber(stats.total_investment),
    subtle: t('Home.MainStatsSection.investments'),
    href: '#',
  },
  {
    title: formatNumber(stats.investors),
    subtle: t('Home.MainStatsSection.investors'),
    href: '/investors',
  },
  {
    title: formatNumber(stats.events),
    subtle: t('Home.MainStatsSection.events'),
    href: '/events',
  },
  {
    title: formatNumber(stats.accelerators),
    subtle: t('Home.MainStatsSection.accelerators-and-incubators'),
    href: '/programs',
  },
]
</script>

<template>
  <div id="statistics">
    <div class="container relative z-[2] mt-12 py-5 xs:px-5">
      <div
        class="flex items-center justify-center max-sm:flex-col sm:flex-wrap sm:gap-6 md:gap-10 xl:justify-between"
      >
        <CardStats
          v-for="(item, idx) in StatsList"
          :key="`stat-${idx}`"
          :title="item.title"
          :subtitle="item.subtle"
          :href="item.href"
        />
      </div>
    </div>
  </div>
</template>
