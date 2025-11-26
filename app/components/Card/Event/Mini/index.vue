<script setup lang="ts">
import type { IEvent } from '~/types/event'
import { format } from 'date-fns'
import { uz, ru, enGB } from 'date-fns/locale'

type Props = {
  data?: IEvent
}

const props = defineProps<Props>()

const { t, locale } = useI18n()

const loc = computed(() =>
  locale.value === 'uz' ? uz : locale.value === 'ru' ? ru : enGB
)
</script>

<template>
  <NuxtLink
    :to="`/events/${props.data?.slug}`"
    class="flex w-full items-center gap-x-6 max-sm:mb-8 max-sm:flex-col sm:mb-4"
  >
    <div
      class="relative mx-auto aspect-[4/3] w-full sm:mx-0 sm:max-h-[200px] sm:max-w-[270px] md:max-h-[190px] md:max-w-[240px] xl:min-w-[240px]"
    >
      <img
        :src="props.data?.image"
        :alt="'image - ' + props.data?.slug"
        class="absolute inset-0 h-full w-full rounded-[18px] object-cover"
      />
    </div>

    <div class="flex flex-col gap-y-2">
      <h4
        class="mt-5 font-normal sm:my-0 sm:mb-4 text-[22px] leading-snug line-clamp-3 font-ruberoid"
      >
        {{ props.data?.title }}
      </h4>

      <p class="mt-1 text-[12px] font-medium lg:text-sm">
        {{ props.data?.location }}
      </p>

      <div
        class="mt-1 w-fit rounded-[18px] border border-black px-3 py-1 text-[12px] font-medium lg:text-sm"
      >
        {{
          props.data?.is_online
            ? t('ProgramsPage.online')
            : t('ProgramsPage.offline')
        }}
      </div>

      <div class="flex items-center">
        <p class="text-[14px] font-medium">
          {{
            props.data?.date && format(props.data.date, 'dd', { locale: loc })
          }}
        </p>

        <div class="px-[2px]" />

        <p class="text-[14px] font-medium uppercase">
          {{
            props.data?.date && format(props.data.date, 'MMMM', { locale: loc })
          }}
        </p>
      </div>
    </div>
  </NuxtLink>
</template>
