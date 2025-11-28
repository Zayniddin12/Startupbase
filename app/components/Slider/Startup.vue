<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

// STATIC DATA
const startups = [
  {
    id: 1,
    name: 'Tech Vision',
    description:
      'Diip.uz is an innovative logistics platform revolutionizing the trucking industry by connecting load owners, truck owners, and dispatchers through an all-in-one ecosystem. With features like real-time tracking, financial analytics, and automated load recommendations, Diip.uz simplifies logistics operations, enhances trust, and maximizes profitability.\n' +
      '\n' +
      'We bridge the gap between fragmented markets, offering verified users, seamless communication, and dynamic pricing systems. By leveraging cutting-edge technology and data-driven insights, Diip.uz delivers efficiency, transparency, and scalability for the logistics industry across Central Asia and beyond.',
    image: '/icons/basicLogo.png',
    logo: '/icons/basicLogo.png',
    industry: { name: 'Artificial Intelligence' },
    stage: 'idea',
  },
  {
    id: 1,
    name: 'Tech Vision',
    description:
      'Diip.uz is an innovative logistics platform revolutionizing the trucking industry by connecting load owners, truck owners, and dispatchers through an all-in-one ecosystem. With features like real-time tracking, financial analytics, and automated load recommendations, Diip.uz simplifies logistics operations, enhances trust, and maximizes profitability.\n' +
      '\n' +
      'We bridge the gap between fragmented markets, offering verified users, seamless communication, and dynamic pricing systems. By leveraging cutting-edge technology and data-driven insights, Diip.uz delivers efficiency, transparency, and scalability for the logistics industry across Central Asia and beyond.',
    image: '/icons/basicLogo.png',
    logo: '/icons/basicLogo.png',
    industry: { name: 'Artificial Intelligence' },
    stage: 'idea',
  },
  {
    id: 1,
    name: 'Tech Vision',
    description: 'AI-based analytics solution for enterprises.',
    image: '/icons/basicLogo.png',
    logo: '/icons/basicLogo.png',
    industry: { name: 'Artificial Intelligence' },
    stage: 'idea',
  },
  {
    id: 2,
    name: 'Green Future',
    description:
      'Diip.uz is an innovative logistics platform revolutionizing the trucking industry by connecting load owners, truck owners, and dispatchers through an all-in-one ecosystem. With features like real-time tracking, financial analytics, and automated load recommendations, Diip.uz simplifies logistics operations, enhances trust, and maximizes profitability.\n' +
      '\n' +
      'We bridge the gap between fragmented markets, offering verified users, seamless communication, and dynamic pricing systems. By leveraging cutting-edge technology and data-driven insights, Diip.uz delivers efficiency, transparency, and scalability for the logistics industry across Central Asia and beyond.Eco-friendly smart energy startup.',
    image: '/icons/basicLogo.png',
    logo: '/icons/basicLogo.png',
    industry: { name: 'Energy' },
    stage: 'mvp',
  },
  {
    id: 3,
    name: 'FarmTech',
    description: 'Automated farming platform for rural areas.',
    image: '/icons/basicLogo.png',
    logo: '/icons/basicLogo.png',
    industry: { name: 'AgroTech' },
    stage: 'scale',
  },
  {
    id: 4,
    name: 'Medico',
    description: 'Healthcare appointment automation.',
    image: '/icons/basicLogo.png',
    logo: '/icons/basicLogo.png',
    industry: { name: 'HealthTech' },
    stage: 'idea',
  },
]

const swiper = ref(null)
</script>

<template>
  <Swiper
    v-if="startups.length"
    :slidesPerView="5"
    :spaceBetween="'20px'"
    :centeredSlides="true"
    :loopFillGroupWithBlank="true"
    :centeredSlidesBounds="true"
    :breakpoints="{
      1280: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2.5,
      },
      640: {
        slidesPerView: 2,
      },
      430: {
        slidesPerView: 1.2,
      },
      0: {
        slidesPerView: 1,
      },
    }"
    class="mySwiper"
  >
    <SwiperSlide
      v-for="startup in startups"
      :key="'startup-' + startup.id"
      class="startupSlider my-10"
    >
      <CardStartup
        :id="startup.id"
        :bgImage="startup.image"
        :logo="startup.logo"
        :title="startup.name"
        :description="startup.description"
        :industry="startup.industry.name"
        :stage="startup.stage"
        :isAuth="false"
      />
    </SwiperSlide>
  </Swiper>

  <h1 v-else class="py-5 text-center text-xl md:text-2xl">No startups</h1>
</template>

<style>
.mySwiper .swiper-slide {
  transform: scale(1);
  transition: transform 0.4s ease;
}

.mySwiper .swiper-slide-active {
  transform: scale(1.09);
  z-index: 10;
}
</style>
