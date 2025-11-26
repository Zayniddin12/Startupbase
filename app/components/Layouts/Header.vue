<template>
  <div class="bg-white sticky top-0 left-0 z-[999]">
    <div class="container xs:pt-5 py-3 flex-center-between">
      <img
        class="max-lg:h-10 max-md:h-8"
        src="https://startupbase.uz/_next/static/media/logo-black.3f5117bd.svg"
      />

      <nav class="lg:flex hidden flex-center gap-3">
        <div v-for="item in navbarMenu" :key="item.label">
          <el-dropdown
            v-if="item.children"
            @command="goToPage"
            class="my-4"
            type="primary"
          >
            <div
              class="flex items-center gap-1 cursor-pointer rounded-[16px] gap-x-1 hover:text-[#7DBA28] px-1.5 text-[15px]! font-semibold transition-all 2xl:px-3 lg:text-[17.5px] outline-none ring-0 text-[#676E76]"
            >
              {{ item.label }}
              <el-icon class="el-icon--right">
                <el-icon-arrow-down class="text-base font-bold" />
              </el-icon>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  v-for="child in item.children"
                  :key="child.path"
                  :command="child.path"
                  >{{ child.label }}</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>

          <NuxtLink
            v-else
            to=""
            class="cursor-pointer text-gray-700 hover:text-green-600"
          >
            {{ item.label }}
          </NuxtLink>
        </div>
      </nav>
      <div class="lg:flex flex-center hidden gap-2">
        <BaseLang />
        <BaseSearchBtn />
        <BaseButton
          class="w-full"
          :text="$t('Header.login')"
          mainClass="px-3 gap-2!"
        >
          <template #suffix>
            <img src="/icons/enter.svg" class="rotate-90 size-6" />
          </template>
        </BaseButton>
      </div>
      <img
        class="lg:hidden block cursor-pointer transition-300"
        src="/icons/burger.svg"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { navbarMenu } from '@/data/header'

const router = useRouter()

function goToPage(path: string) {
  router.push(path)
}
</script>
