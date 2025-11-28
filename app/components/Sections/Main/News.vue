<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Keyboard, EffectCoverflow, Parallax } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'

// i18n (next-intl o‘rniga nuxt/i18n)
const { t } = useI18n()

// API o‘rniga static data
const newsList = [
  {
    title:
      'Startup Base haftalik Startup Advice sessiyasida 100 dan ortiq ishtirokchi qatnashdi',
    image: 'https://startupbase.uz//media/news/WEB_105.png',
    tags: ['yangilik', 'dunyo'],
    slug: 'news-1',
  },
  {
    title:
      'Startup Base haftalik Startup Advice sessiyasida 100 dan ortiq ishtirokchi qatnashdi',
    image: 'https://startupbase.uz//media/news/WEB_105.png',
    tags: ['tech'],
    slug: 'news-2',
  },
  {
    title:
      'Startup Base haftalik Startup Advice sessiyasida 100 dan ortiq ishtirokchi qatnashdi',
    image: 'https://startupbase.uz//media/news/WEB_105.png',
    tags: ['sport'],
    slug: 'news-3',
  },
]

const breakpoints = {
  1280: { slidesPerView: 3 },
  1024: { slidesPerView: 2.5 },
  768: { slidesPerView: 2 },
  640: { slidesPerView: 1.2 },
  430: { slidesPerView: 1.2 },
  0: { slidesPerView: 1 },
}
</script>

<template>
  <section>
    <div class="container relative z-[5] py-10 px-4 md:py-20">
      <h2 class="mb-10 text-[50px] text-[#00000] font-semibold">
        {{ t('Home.News.title') }}
      </h2>

      <Swiper
        :slidesPerView="4"
        :spaceBetween="'20px'"
        :centeredSlides="true"
        :loopFillGroupWithBlank="true"
        :centeredSlidesBounds="true"
        :breakpoints="breakpoints"
        class="mySwiper"
      >
        <SwiperSlide
          v-for="(news, idx) in newsList"
          :key="'news-' + idx"
          class="startupSlider my-10"
        >
          <CardNews
            :title="news.title"
            :image="news.image"
            :hashtag="news.tags"
            :slug="news.slug"
            btnClassName="w-auto"
          />
        </SwiperSlide>
      </Swiper>

      <div class="relative z-[3] mt-10 flex justify-center">
        <NuxtLinkLocale to="/resources?tab=partner">
          <Button>
            <span class="text-lg font-semibold">
              {{ t('Home.Investors.all_investors') }}
            </span>
          </Button>
        </NuxtLinkLocale>
      </div>
    </div>
  </section>
</template>

<style scoped>
.startupSlider {
  transition: transform 0.3s ease;
}
.mySwiper .swiper-slide {
  transform: scale(1);
  transition: transform 0.4s ease;
}

.mySwiper .swiper-slide-active {
  transform: scale(1.06);
  z-index: 10;
}
</style>
