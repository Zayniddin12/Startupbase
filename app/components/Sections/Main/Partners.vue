<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Keyboard, EffectCoverflow, Parallax } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'

// i18n (next-intl o‘rniga nuxt/i18n)
const { t } = useI18n()

// API o‘rniga static data
const data = {
  results: [
    {
      id: 1,
      fullname: 'Central Asia Association for AI',
      short_description:
        'AICA’da biz Markaziy Osiyo mintaqasidagi sun’iy intellekt faollari guruhimiz. Assotsiatsiyamiz tarkibiga O‘zbekistonning turli sohalarida, jumladan, startaplar, jamoalar, venchur fondlari, sun’iy intellekt kompaniyalari va boshqa sohalarda faol ishtirok etayotgan fidoyi insonlar kiradi. AICAda biz ta’lim, startaplarni tezlashtirish, moliyalashtirish, hamjamiyatlar, huquqiy va investitsiya maslahatlari kabi sohalardagi sa’y-harakatlarni uyg‘un ekotizim - taraqqiyotning yagona kuchli oqimini yaratish uchun birlashtirishni maqsad qilganmiz. Bundan tashqari, bizning vazifamiz nafaqat sanoat integratsiyasi, balki asrlar davomida tarixiy, madaniy va iqtisodiy jihatdan bog‘langan butun mintaqani birlashtirishni maqsad qilganmiz.',
      industry: ['Ijtimoiy tarmoqlar va aloqa vositalari', 'IT'],
      photo: '/images/partner1.jpg',
    },
    {
      id: 2,
      fullname: 'Central Asia Association for AI',
      short_description:
        'AICA’da biz Markaziy Osiyo mintaqasidagi sun’iy intellekt faollari guruhimiz. Assotsiatsiyamiz tarkibiga O‘zbekistonning turli sohalarida, jumladan, startaplar, jamoalar, venchur fondlari, sun’iy intellekt kompaniyalari va boshqa sohalarda faol ishtirok etayotgan fidoyi insonlar kiradi. AICAda biz ta’lim, startaplarni tezlashtirish, moliyalashtirish, hamjamiyatlar, huquqiy va investitsiya maslahatlari kabi sohalardagi sa’y-harakatlarni uyg‘un ekotizim - taraqqiyotning yagona kuchli oqimini yaratish uchun birlashtirishni maqsad qilganmiz. Bundan tashqari, bizning vazifamiz nafaqat sanoat integratsiyasi, balki asrlar davomida tarixiy, madaniy va iqtisodiy jihatdan bog‘langan butun mintaqani birlashtirishni maqsad qilganmiz.',
      industry: ['Ijtimoiy tarmoqlar va aloqa vositalari'],
      photo:
        'https://startupbase.uz//media/photos/photo_2024-12-13_16-39-28.jpg',
    },
    {
      id: 3,
      fullname: 'Central Asia Association for AI',
      short_description:
        'AICA’da biz Markaziy Osiyo mintaqasidagi sun’iy intellekt faollari guruhimiz. Assotsiatsiyamiz tarkibiga O‘zbekistonning turli sohalarida, jumladan, startaplar, jamoalar, venchur fondlari, sun’iy intellekt kompaniyalari va boshqa sohalarda faol ishtirok etayotgan fidoyi insonlar kiradi. AICAda biz ta’lim, startaplarni tezlashtirish, moliyalashtirish, hamjamiyatlar, huquqiy va investitsiya maslahatlari kabi sohalardagi sa’y-harakatlarni uyg‘un ekotizim - taraqqiyotning yagona kuchli oqimini yaratish uchun birlashtirishni maqsad qilganmiz. Bundan tashqari, bizning vazifamiz nafaqat sanoat integratsiyasi, balki asrlar davomida tarixiy, madaniy va iqtisodiy jihatdan bog‘langan butun mintaqani birlashtirishni maqsad qilganmiz.',
      industry: ['Ijtimoiy tarmoqlar va aloqa vositalari'],
      photo:
        'https://startupbase.uz//media/photos/photo_2024-12-13_16-39-28.jpg',
    },
    {
      id: 3,
      fullname: 'Central Asia Association for AI',
      short_description:
        'AICA’da biz Markaziy Osiyo mintaqasidagi sun’iy intellekt faollari guruhimiz. Assotsiatsiyamiz tarkibiga O‘zbekistonning turli sohalarida, jumladan, startaplar, jamoalar, venchur fondlari, sun’iy intellekt kompaniyalari va boshqa sohalarda faol ishtirok etayotgan fidoyi insonlar kiradi. AICAda biz ta’lim, startaplarni tezlashtirish, moliyalashtirish, hamjamiyatlar, huquqiy va investitsiya maslahatlari kabi sohalardagi sa’y-harakatlarni uyg‘un ekotizim - taraqqiyotning yagona kuchli oqimini yaratish uchun birlashtirishni maqsad qilganmiz. Bundan tashqari, bizning vazifamiz nafaqat sanoat integratsiyasi, balki asrlar davomida tarixiy, madaniy va iqtisodiy jihatdan bog‘langan butun mintaqani birlashtirishni maqsad qilganmiz.',
      industry: ['Ijtimoiy tarmoqlar va aloqa vositalari'],
      photo:
        'https://startupbase.uz//media/photos/photo_2024-12-13_16-39-28.jpg',
    },
    {
      id: 3,
      fullname: 'Central Asia Association for AI',
      short_description:
        'AICA’da biz Markaziy Osiyo mintaqasidagi sun’iy intellekt faollari guruhimiz. Assotsiatsiyamiz tarkibiga O‘zbekistonning turli sohalarida, jumladan, startaplar, jamoalar, venchur fondlari, sun’iy intellekt kompaniyalari va boshqa sohalarda faol ishtirok etayotgan fidoyi insonlar kiradi. AICAda biz ta’lim, startaplarni tezlashtirish, moliyalashtirish, hamjamiyatlar, huquqiy va investitsiya maslahatlari kabi sohalardagi sa’y-harakatlarni uyg‘un ekotizim - taraqqiyotning yagona kuchli oqimini yaratish uchun birlashtirishni maqsad qilganmiz. Bundan tashqari, bizning vazifamiz nafaqat sanoat integratsiyasi, balki asrlar davomida tarixiy, madaniy va iqtisodiy jihatdan bog‘langan butun mintaqani birlashtirishni maqsad qilganmiz.',
      industry: ['Ijtimoiy tarmoqlar va aloqa vositalari'],
      photo:
        'https://startupbase.uz//media/photos/photo_2024-12-13_16-39-28.jpg',
    },
    {
      id: 3,
      fullname: 'Central Asia Association for AI',
      short_description:
        'AICA’da biz Markaziy Osiyo mintaqasidagi sun’iy intellekt faollari guruhimiz. Assotsiatsiyamiz tarkibiga O‘zbekistonning turli sohalarida, jumladan, startaplar, jamoalar, venchur fondlari, sun’iy intellekt kompaniyalari va boshqa sohalarda faol ishtirok etayotgan fidoyi insonlar kiradi. AICAda biz ta’lim, startaplarni tezlashtirish, moliyalashtirish, hamjamiyatlar, huquqiy va investitsiya maslahatlari kabi sohalardagi sa’y-harakatlarni uyg‘un ekotizim - taraqqiyotning yagona kuchli oqimini yaratish uchun birlashtirishni maqsad qilganmiz. Bundan tashqari, bizning vazifamiz nafaqat sanoat integratsiyasi, balki asrlar davomida tarixiy, madaniy va iqtisodiy jihatdan bog‘langan butun mintaqani birlashtirishni maqsad qilganmiz.',
      industry: ['Ijtimoiy tarmoqlar va aloqa vositalari'],
      photo:
        'https://startupbase.uz//media/photos/photo_2024-12-13_16-39-28.jpg',
    },
  ],
}
</script>

<template>
  <section>
    <div class="container relative z-[5] py-10 px-4 md:py-20">
      <h2 class="mb-10 text-[50px] text-[#00000] font-semibold">
        {{ t('Profile.partner') }}
      </h2>

      <Swiper
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
          v-for="(partner, idx) in data.results"
          :key="'partner-' + idx"
          class="startupSlider my-10"
        >
          <CardPartner
            class="w-full max-w-full"
            :id="partner.id"
            :title="partner.fullname"
            :text="partner.short_description"
            :industries="partner.industry"
            :photo="partner.photo"
            partner="partner"
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
