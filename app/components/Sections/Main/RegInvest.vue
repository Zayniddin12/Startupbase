<script setup lang="ts">
const { t } = useI18n()

const data = [
  {
    id: 1,
    name: 'IT Park Ventures',
    investor_type: 'venture',
    description:
      'IT Park Ventures - IT Park Uzbekistan qoshidagi venchur fondi bo‘lib, mahalliy startaplarni qo‘llab-quvvatlashga qaratilgan.',
    industries: ['Tech', 'Finance'],
    stages: ['Seed', 'Series A'],
    photo: '/icons/basicLogo.png',
  },
  {
    id: 2,
    name: 'IT Park Ventures',
    investor_type: 'venture',
    description:
      'IT Park Ventures - IT Park Uzbekistan qoshidagi venchur fondi bo‘lib, mahalliy startaplarni qo‘llab-quvvatlashga qaratilgan.',
    industries: ['Health', 'Education'],
    stages: ['Seed', 'Series B'],
    photo: '/icons/basicLogo.png',
  },
  {
    id: 3,
    name: 'IT Park Ventures',
    investor_type: 'venture',
    description:
      'IT Park Ventures - IT Park Uzbekistan qoshidagi venchur fondi bo‘lib, mahalliy startaplarni qo‘llab-quvvatlashga qaratilgan.',
    industries: ['Retail', 'Tech'],
    stages: ['Series A', 'Series B'],
    photo: '/icons/basicLogo.png',
  },
  {
    id: 4,
    name: 'IT Park Ventures',
    investor_type: 'venture',
    description:
      'IT Park Ventures - IT Park Uzbekistan qoshidagi venchur fondi bo‘lib, mahalliy startaplarni qo‘llab-quvvatlashga qaratilgan.',
    industries: ['Finance', 'Real Estate'],
    stages: ['Seed', 'Series A'],
    photo: '/icons/basicLogo.png',
  },
]
</script>

<template>
  <div class="container relative z-[5] py-10 xs:px-5 md:py-20">
    <!-- TITLE -->
    <h2 class="text-3xl font-bold max-sm:text-center">
      {{ t('Header.investors') }}
    </h2>

    <!-- INVESTORS GRID -->
    <div class="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      <CardInvestors
        v-for="investor in data.slice(0, 4)"
        :key="investor.id"
        class="w-full max-w-full md:max-w-full lg:max-w-full"
        :id="investor.id"
        :title="investor.name"
        :subTitle="investor.investor_type"
        :text="investor.description"
        :industries="investor.industries"
        :stages="investor.stages"
        :photo="investor.photo"
      />
    </div>

    <!-- NO INVESTORS -->
    <div
      v-if="data.length === 0"
      class="flex h-full items-center justify-center"
    >
      <p class="py-5 text-center font-bold text-lg">
        {{ t('Home.NoInvestors') }}
      </p>
    </div>

    <!-- SEE MORE BUTTON -->
    <div class="relative z-[3] mt-10 flex justify-center">
      <BaseButton class="w-full text-center md:w-auto">
        <p class="text-base font-medium">
          {{ t('Home.Investors.all_investors') }}
        </p>
      </BaseButton>
    </div>
  </div>
</template>
