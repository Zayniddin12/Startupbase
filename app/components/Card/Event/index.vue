<script setup lang="ts">
import type { IEvent } from '@/types/event'
import { format } from 'date-fns'
import { enGB, ru, uz } from 'date-fns/locale'

type Props = {
  data?: IEvent[] | undefined
}

const props = defineProps<Props>()

const { t, locale } = useI18n()

const slug = props.data && props.data[0]?.slug

const loc = computed(() =>
  locale.value === 'uz' ? uz : locale.value === 'ru' ? ru : enGB
)
</script>

<template>
  <div
    class="flex flex-col justify-between rounded-[19px] bg-white px-[19px] py-[21px] max-md:px-3.5 max-md:py-3 max-sm:p-3 xl:min-w-[700px]"
  >
    <template v-if="props.data && props.data.length > 0 && props.data[0]">
      <NuxtLink :to="`/events/${slug}`">
        <div>
          <div class="relative aspect-[4/3] w-full">
            <img
              :src="props.data[0].image"
              alt="props.data[0].title"
              class="rounded-[12px]"
              loading="lazy"
              sizes="sm:100vw md:700px"
            />
          </div>

          <p class="mt-6 text-[16px] sm:text-[18px] md:text-[24px]">
            {{ props.data[0].title }}
          </p>
        </div>
      </NuxtLink>

      <p class="mt-1 text-gray-700">
        {{ props.data[0].location }}
      </p>

      <p class="mt-1 rounded-[18px]">
        {{
          props.data[0].is_online
            ? t('ProgramsPage.online')
            : t('ProgramsPage.offline')
        }}
      </p>

      <div class="mt-5 flex justify-between max-sm:flex-col sm:items-center">
        <div class="flex items-center sm:min-w-[300px] md:min-w-[300px]">
          <img
            src="/icons/calendar.svg"
            alt="calendar icon"
            class="me-2 sm:w-[18px] md:w-[22px] xl:w-[25px]"
          />

          <p
            class="text-sm font-bold sm:text-[16px] md:text-[16px] lg:text-[25px] xl:text-[25px]"
          >
            {{
              format(props.data[0].date, 'd MMMM', {
                locale: loc,
              })
            }}

            <template v-if="props.data[0].date_end">
              -
              {{
                format(props.data[0].date_end, 'd MMMM', {
                  locale: loc,
                })
              }}
            </template>
          </p>
        </div>

        <CardEventParticipateButton :mySlug="slug" />
      </div>
    </template>

    <div v-else class="flex items-center justify-center">
      <p>{{ t('Home.NoEvents') }}</p>
    </div>
  </div>
</template>
