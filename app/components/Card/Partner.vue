<script setup lang="ts">
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const props = defineProps({
  title: String,
  text: String,
  industries: Object,
  photo: String,
  className: String,
  id: [String, Number],
  partner: String,
})
</script>

<template>
  <NuxtLinkLocale
    :to="`/resources/${partner}/${id}`"
    class="flex direction-reverse min-h-[350px] lg:min-h-[400px] cursor-pointer w-full flex-col gap-8 rounded-[20px] border bg-white p-5"
    :class="className ? className : ''"
  >
    <!-- IMAGE -->
    <div
      v-if="photo"
      class="flex size-[150px] items-center overflow-hidden rounded-[20px]"
    >
      <img
        :src="photo"
        :alt="title"
        class="rounded-[20px] object-cover !object-top size-full"
      />
    </div>

    <!-- TITLE + TEXT -->
    <div class="flex flex-col gap-5">
      <h3 class="text-lg font-semibold truncate">
        {{ title }}
      </h3>

      <p class="text-sm text-gray-600 line-clamp-3 min-h-[80px]">
        {{ text }}
      </p>
    </div>

    <!-- INDUSTRY -->
    <div class="mt-auto flex items-end justify-between">
      <TooltipProvider>
        <Tooltip v-if="industries">
          <TooltipTrigger
            class="text-sm lowercase overflow-hidden line-clamp-1"
          >
            #{{ industries[0] }}
          </TooltipTrigger>

          <TooltipContent>
            {{ industries[0] }}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </NuxtLinkLocale>
</template>
