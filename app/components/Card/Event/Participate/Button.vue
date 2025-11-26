<script setup lang="ts">
import { ref } from 'vue'
import type { IEvent } from '~/types/event'

const props = defineProps<{
  className?: string
  mySlug?: string
  event?: IEvent
}>()

const { t } = useI18n()

const open = ref(false)

// static example:
const eventData = ref({
  ended: false,
  is_participating: false,
  register_link: '',
})

// static user state
const profile = ref({
  status: 'inactive',
})

function handleClick() {
  if (profile.value.status === 'active') {
    eventData.value.is_participating = true
  } else {
    open.value = true
  }
}
</script>

<template>
  <div v-if="!eventData.ended" class="flex w-full justify-end pt-5">
    <button
      v-if="!eventData.is_participating && profile.status === 'inactive'"
      :class="`text-lg w-full ${props.className || ''}`"
      @click="handleClick"
    >
      <span class="inline-flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M18 20v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2m6-11a4 4 0 118 0 4 4 0 01-8 0z"
          />
        </svg>
        {{ t('Events.participate') }}
      </span>
    </button>

    <button
      v-else
      class="cursor-default bg-green-500 text-lg text-white px-4 py-2 rounded-md"
    >
      {{ t('Events.applied') }}
    </button>
  </div>

  <div
    v-if="open"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
  >
    <div class="bg-white max-w-lg w-full rounded-xl p-6">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold">
          {{ t('Events.participate') }}
        </h2>
        <button @click="open = false">✕</button>
      </div>

      <div>
        <p class="text-sm opacity-70">
          Static modal — form o‘rniga matn qo‘yildi.
        </p>
      </div>
    </div>
  </div>
</template>
