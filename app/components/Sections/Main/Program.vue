<script setup lang="ts">
const props = defineProps<{
  className?: string
}>()

const { t } = useI18n()

const classes = props.className ? props.className : ''
</script>

<template>
  <div :class="classes">
    <div class="container relative mt-6 xs:px-5 lg:mt-12 lg:py-10 lg:pb-20">
      <Card class="rounded-[16px] border-none shadow-md">
        <CardContent
          class="flex items-center justify-between !p-0 max-md:flex-col-reverse"
        >
          <!-- LEFT TEXT AREA -->
          <div
            class="p-6 md:max-w-[450px] lg:max-w-[550px] lg:p-12 xl:max-w-[720px] 2xl:max-w-[900px]"
          >
            <h2
              class="text-2xl font-bold text-[#1A1D1F] xl:text-4xl 2xl:text-5xl"
            >
              {{ t('DigitalStartupProgram.ProgramDSP') }}
            </h2>

            <p
              class="mt-3 pr-6 text-base font-normal text-[#1A1D1F] xl:mt-6 xl:text-lg 2xl:text-2xl"
            >
              {{ t('DigitalStartupProgram.DPSDescription') }}
            </p>

            <NuxtLink
              to="/digital-startups-program"
              class="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-3 inline-flex h-10 shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-[40px] border-2 border-transparent bg-[#7DBA28] px-4 py-2 text-sm font-medium text-white outline-none transition-all hover:bg-[#7DBA28]/90 focus-visible:ring active:scale-95 disabled:pointer-events-none disabled:opacity-50 xl:mt-6 2xl:text-lg"
            >
              {{ t('DigitalStartupProgram.More') }}
            </NuxtLink>
          </div>

          <!-- RIGHT IMAGE -->
          <img
            src="/images/CreateBigProjectWithItPark.png"
            alt="Digital Startups Program"
            class="h-screen max-h-[300px] object-cover object-center max-md:w-screen max-md:rounded-t-[16px] sm:max-h-[380px] md:rounded-r-[16px] xl:w-[457px] 2xl:max-h-[480px] 2xl:min-w-[550px]"
          />
        </CardContent>
      </Card>
    </div>
  </div>
</template>
