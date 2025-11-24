<script setup lang="ts">
const props = defineProps<{
  icon: string
  title: string
  desc: string
  href: string
}>()

const { t } = useI18n()
const link = computed(() => props.href || '#')
</script>

<template>
  <div
    class="relative flex w-full flex-col items-start gap-5 rounded-[20px] border border-gray-200 bg-white p-8 shadow-md sm:h-[550px]"
  >
    <NuxtLink :to="link" class="relative w-full h-full">
      <!-- ICON -->
      <img
        :src="props.icon"
        alt="card icon"
        class="h-[150px] w-auto 2xl:h-[220px]"
      />

      <!-- TITLE -->
      <h3 class="mt-5 uppercase text-black text-lg font-bold">
        {{ props.title }}
      </h3>

      <!-- DESCRIPTION -->
      <p class="mt-3 pb-10 text-sm text-gray-700">
        {{ props.desc }}
      </p>

      <!-- MORE BUTTON -->
      <div class="flex justify-end">
        <p
          class="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive absolute bottom-5 right-5 flex h-10 shrink-0 cursor-pointer items-end justify-center gap-2 whitespace-nowrap rounded-[40px] border-2 border-transparent bg-[#7DBA28] px-4 py-2 text-sm font-medium text-white outline-none transition-all hover:bg-[#7DBA28]/90 focus-visible:ring active:scale-95 disabled:pointer-events-none disabled:opacity-50"
        >
          {{ t('Home.RoleSection.moreBtn') }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>
