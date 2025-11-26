<template>
  <div
    class="w-full absolute top-0 left-0 h-screen z-50 flex flex-col justify-between transition-all duration-300 bg-white pl-4"
  >
    <div>
      <div class="py-2 md:py-4 flex items-center pr-4">
        <div class="flex items-center gap-x-3">
          <div @click="$emit('closeMobileHeader')">
            <i class="icon-close text-blue cursor-pointer"> </i>
          </div>
        </div>
        <BaseButton
          v-if="Object!.keys(store.user).length"
          id="yourElementId"
          :text="$t('login')"
          class="ml-auto max-w-[140px] w-full text-sm"
          variant="secondary"
          @click="login"
        />
      </div>
      <BaseLang class="mt-6" list-style="w-[100px]!" />
      <ul class="mt-6">
        <li
          v-for="(item, idx) of menuStore.menu"
          :key="idx"
          @click="openChildMenu(item)"
        >
          <div class="flex items-center justify-between pr-4">
            <NuxtLink
              :to="'/' + item?.slug"
              class="text-dark text-base font-medium leading-130! transition-colors duration-300 hover:text-blue"
              >{{ item.name }}
            </NuxtLink>
            <span
              :class="{ 'rotate-180': activeMenuId === item.id }"
              class="icon-chevron flex-shrink-0 ml-1 transition-300"
            ></span>
          </div>
        </li>
      </ul>
    </div>
    <Transition name="from-left">
      <LayoutsMobileHeader
        v-if="isShown"
        @close-mobile-header="onCloseMobileHeader"
      />
    </Transition>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['closeMobileHeader'])

const { $event } = useNuxtApp()

const activeMenuId = ref<number>()
const route = useRoute()
const isShown = ref(false)
const login = () => {
  if (Object!.keys(store.user).length) {
    return $event('open-auth', 'login')
  }
}

// watch route
watch(
  () => route.path,
  () => {
    emit('closeMobileHeader')
  }
)
</script>

<style scoped></style>
