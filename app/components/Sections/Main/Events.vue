<script setup lang="ts">
import type { IPagination } from '~/types/index.ts'
import type { IEvent } from '~/types/event'

const { t } = useI18n()

const data: IPagination<IEvent> = {
  count: 4,
  next: null,
  previous: null,
  results: [
    {
      title: 'International Tech Summit',
      image: 'https://picsum.photos/600/400?random=1',
      location: 'Andijan, Boburshokh Street, 2A (Digital City building)',
      date: '2025-12-01',
      short_description: 'The biggest tech event of the year.',
    },
    {
      title: 'Frontend Developers Meetup',
      image: 'https://picsum.photos/600/400?random=2',
      date: '2025-12-10',
      short_description: 'Vue / Nuxt best practices 2025.',
    },
    {
      title: 'AI & ML Workshop',
      image: 'https://picsum.photos/600/400?random=3',
      location: 'Andijan, Boburshokh Street, 2A (Digital City building)',
      date: '2025-12-15',
      short_description: 'Hands-on GPT model training.',
    },
    {
      title: 'Startup Pitch Day',
      image: 'https://picsum.photos/600/400?random=4',
      date: '2026-01-08',
      short_description: 'Pitch your startup idea.',
    },
    {
      title: 'AI & ML Workshop',
      image: 'https://picsum.photos/600/400?random=3',
      date: '2025-12-15',
      short_description: 'Hands-on GPT model training.',
    },
    {
      title: 'Startup Pitch Day',
      image: 'https://picsum.photos/600/400?random=4',
      date: '2026-01-08',
      short_description: 'Pitch your startup idea.',
    },
  ],
}
</script>

<template>
  <div class="container relative py-10 xs:px-5 lg:pb-20">
    <h2
      class="relative z-[2] font-semibold text-[50px] font-ruberoid max-sm:text-center"
    >
      {{ t('Home.EventsSection.EventTitle') }}
    </h2>

    <div
      class="mt-10 flex min-h-[600px] justify-between max-xl:flex-col max-sm:gap-10 sm:gap-5 lg:gap-10"
    >
      <div class="flex w-full flex-col">
        <h3 class="font-medium text-black text-[38px] max-sm:text-center">
          {{ t('Home.EventsSection.FutureEventsTitle') }}:
        </h3>

        <div class="mt-10 flex h-full flex-col justify-between gap-2">
          <div>
            <template v-if="data.results.length > 0">
              <LazyCardEventMini
                v-for="(event, idx) in data.results.slice(0, 3)"
                :key="idx"
                :data="event"
              />
            </template>

            <div v-else class="flex items-center justify-center">
              <p>{{ t('Home.NoEvents') }}</p>
            </div>
          </div>

          <div class="relative z-[3] flex sm:justify-end">
            <Button
              class="greenGradient font-ruberoid font-normal rounded-[55px] px-7 text-base sm:text-lg lg:text-[20px] text-white w-full text-center md:w-auto"
              href="/events"
            >
              <p>
                {{ t('Home.Calendar.all-events') }}
              </p>
            </Button>
          </div>
        </div>
      </div>

      <div class="flex w-full flex-col">
        <h3 class="font-medium text-black text-[38px] max-sm:text-center">
          {{ t('Home.EventsSection.FutureEventsTitle') }}:
        </h3>

        <div class="mt-10 flex h-full flex-col justify-between gap-2">
          <div>
            <template v-if="data.results.length > 0">
              <LazyCardEventMini
                v-for="(event, idx) in data.results.slice(1, 4)"
                :key="idx"
                :data="event"
              />
            </template>

            <div v-else class="flex items-center justify-center">
              <p>{{ t('Home.NoEvents') }}</p>
            </div>
          </div>

          <div class="relative z-[3] flex sm:justify-end">
            <Button
              class="greenGradient font-ruberoid font-normal rounded-[55px] px-7 text-base sm:text-lg lg:text-[20px] text-white w-full text-center md:w-auto"
              href="/events"
            >
              {{ t('Home.Calendar.all-events') }}
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
