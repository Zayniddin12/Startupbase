<script setup lang="ts">
const { t } = useI18n()

const data = [
  {
    title: t('Home.RoleSection.StratupsTitle'),
    icon: '/images/Rocket_3D.png',
    desc: t('Home.RoleSection.StartupsDesc'),
    href: '/startups',
  },
  {
    title: t('Home.RoleSection.InvestorsTitle'),
    icon: '/images/Investors_3D.png',
    desc: t('Home.RoleSection.InvestorsDesc'),
    href: '/investors',
  },
  {
    title: t('Home.RoleSection.PartnersTitle'),
    icon: '/images/Partners 3D.png',
    desc: t('Home.RoleSection.PartnersDesc'),
    href: '/resources?tab=partner',
  },
]
</script>

<template>
  <div
    class="container relative grid grid-cols-1 gap-5 py-10 xs:px-5 sm:grid-cols-2 xl:grid-cols-3"
  >
    <CardRole
      v-for="(item, idx) in data"
      :key="'roles-' + idx"
      :title="item.title"
      :icon="item.icon"
      :desc="item.desc"
      :href="item.href"
    />
  </div>
</template>
