<template>
  <div :class="baseClass + (className ? ' ' + className : '')" @click="onClick">
    <!-- IMAGE -->
    <div class="relative aspect-[16/13]">
      <img
        :src="image"
        alt="News Image"
        class="max-h-[300px] rounded-[30px] p-5 object-cover w-full"
      />
    </div>

    <!-- CONTENT -->
    <div class="flex min-h-[200px] flex-col justify-between p-5 pt-0">
      <div class="flex gap-2">
        <div class="h-8 min-w-[3px] max-w-[3px] bg-[#7DBA28]"></div>

        <h2
          :class="
            'line-clamp-4 text-lg font-medium xl:text-[25px] leading-8' +
            (titleClassName ? ' ' + titleClassName : '')
          "
        >
          {{ title }}
        </h2>
      </div>

      <div class="flex flex-col items-end justify-end">
        <Button
          :class="
            'absolute bottom-5 rounded-[18px] text-center text-base font-normal px-5 py-0.5' +
            (btnClassName ? ' ' + btnClassName : '')
          "
        >
          {{ t('Home.News.more') }}
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '#i18n'

const props = defineProps({
  title: String,
  hashtag: Array,
  image: String,
  slug: String,
  titleClassName: String,
  className: String,
  btnClassName: String,
  onClick: Function,
})

const { t } = useI18n()

const baseClass =
  'relative w-full border border-gray-200 shadow-md overflow-hidden rounded-[18px] min-h-[500px] max-w-[450px] bg-white'
</script>
