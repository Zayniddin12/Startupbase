<script setup lang="ts">
interface Props {
  title: string
  subTitle: string
  text?: string
  industries: { id: string | number; name: string }[]
  stages: string[]
  photo: string | null
  className?: string
  id: string | number
}

const props = defineProps<Props>()
</script>

<template>
  <div
    class="flex direction-reverse min-h-[400px] lg:min-h-[500px] cursor-pointer w-full flex-col gap-8 rounded-[20px] border bg-white p-5 md:max-w-[30%] lg:max-w-[23%]"
  >
    <!-- PHOTO -->
    <div
      v-if="props.photo"
      class="flex items-center overflow-hidden rounded-[20px] bg-[rgb(239,239,239)]"
      style="width: 150px; height: 150px"
    >
      <img
        :src="props.photo"
        :alt="props.title"
        class="w-full h-full object-contain p-2 rounded-[20px]"
      />
    </div>
    <div
      v-else
      class="w-[150px] h-[150px] rounded-[20px] bg-[rgb(239,239,239)]"
    />

    <!-- TEXT -->
    <div class="flex flex-col gap-5">
      <div>
        <h3 class="text-lg font-bold truncate">{{ props.title }}</h3>
        <p class="text-[#4D4D4D]">{{ props.subTitle }}</p>
      </div>
      <p class="truncate-5-lines">{{ props.text }}</p>
    </div>

    <!-- TOOLTIP SECTION -->
    <div class="mt-auto flex items-end justify-between">
      <!-- INDUSTRY TOOLTIP -->
      <el-tooltip effect="light" class="text-sm lowercase" placement="top">
        <template #content>
          <div class="flex flex-col gap-2">
            <p v-for="(industry, index) in props.industries" :key="index">
              {{ industry }}
            </p>
          </div>
        </template>
        <span>
          #{{ props.industries[0] + (props.industries[0] > 12 ? '...' : '') }}
        </span>
      </el-tooltip>

      <!-- STAGE TOOLTIP -->
      <el-tooltip
        class="rounded bg-slate-100 px-6 py-0.5 text-sm"
        effect="light"
        placement="top"
      >
        <template #content>
          <div class="flex flex-col gap-2">
            <p v-for="stage in props.stages" :key="stage">{{ stage }}</p>
          </div>
        </template>
        <span>{{ props.stages[0] }}</span>
      </el-tooltip>
    </div>
  </div>
</template>
