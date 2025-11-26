<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Keyboard, EffectCoverflow, Parallax } from 'swiper/modules'
import 'swiper/css'

// STATIC DATA
const startups = [
  {
    id: 1,
    name: 'Tech Vision',
    description: 'AI-based analytics solution for enterprises.',
    image: '/images/startups/startup1.jpg',
    logo: '/images/logos/logo1.png',
    industry: { name: 'Artificial Intelligence' },
    stage: 'idea',
  },
  {
    id: 1,
    name: 'Tech Vision',
    description: 'AI-based analytics solution for enterprises.',
    image: '/images/startups/startup1.jpg',
    logo: '/images/logos/logo1.png',
    industry: { name: 'Artificial Intelligence' },
    stage: 'idea',
  },
  {
    id: 1,
    name: 'Tech Vision',
    description: 'AI-based analytics solution for enterprises.',
    image: '/images/startups/startup1.jpg',
    logo: '/images/logos/logo1.png',
    industry: { name: 'Artificial Intelligence' },
    stage: 'idea',
  },
  {
    id: 2,
    name: 'Green Future',
    description: 'Eco-friendly smart energy startup.',
    image: '/images/startups/startup2.jpg',
    logo: '/images/logos/logo2.png',
    industry: { name: 'Energy' },
    stage: 'mvp',
  },
  {
    id: 3,
    name: 'FarmTech',
    description: 'Automated farming platform for rural areas.',
    image: '/images/startups/startup3.jpg',
    logo: '/images/logos/logo3.png',
    industry: { name: 'AgroTech' },
    stage: 'scale',
  },
  {
    id: 4,
    name: 'Medico',
    description: 'Healthcare appointment automation.',
    image: '/images/startups/startup4.jpg',
    logo: '/images/logos/logo4.png',
    industry: { name: 'HealthTech' },
    stage: 'idea',
  },
]
</script>

<template>
  <!-- EMPTY CASE -->
  <h1 v-if="startups.length === 0" class="py-5 text-center text-xl md:text-2xl">
    No startups
  </h1>

  <!-- SLIDER -->
  <Swiper
    v-else
    spaceBetween="20"
    class="w-full py-5"
    :keyboard="{ enabled: true }"
    :modules="[Keyboard]"
    :centered-slides="true"
    :slides-per-view="5"
    :loop="true"
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
</template>
