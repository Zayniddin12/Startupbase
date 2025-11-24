<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

interface Props {
  className?: string
}

const props = defineProps<Props>()

const open = ref(false)

function close() {
  open.value = false
}
</script>

<template>
  <div>
    <button
      @click="open = true"
      class="group relative flex-center size-10 rounded-full border border-[#E6E9EC] bg-white text-[#7DBA28] shadow-sm transition-all duration-300 ease-in-out hover:w-32 hover:bg-[#a0e53e]"
    >
      <div class="flex-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="lucide lucide-search size-5 shrink-0 transition-colors duration-300 ease-in-out group-hover:text-white mr-1 mb-1"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <span
          class="overflow-hidden whitespace-nowrap text-xs font-medium opacity-0 max-w-0 transition-all duration-300 ease-in-out group-hover:ml-2 group-hover:opacity-100 group-hover:max-w-[80px] group-hover:text-white"
          aria-hidden="true"
        >
          CTRL + K
        </span>
      </div>
    </button>
    <Modal
      :show="open"
      :title="$t('search')"
      body-class="!max-w-[378px] !overflow-visible"
      class="logOut !w-[378px]"
      title-style="logout_title"
      @close="close"
    />
  </div>
</template>
