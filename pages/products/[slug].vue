<template lang="pug">
head
  title SKSAVIA - {{ product.name }}

.breadcrumbs.px-3.py-1
  NuxtLink(to="javascript:history.back()").breadcrumb-item {{ product.category }} /&nbsp;
  span.font-semibold {{ product.name }}

.block.sm_grid.grid-cols-12.my-0.sm_pr-4
  .product-picture.sm_col-span-9.lg_col-span-10
    swiper-container(ref="containerRef" :init="false").my-0.rounded-xl
      swiper-slide(v-for="item in product.images", :key="item.id").flex.place-self-center.justify-center.swiper-slide
        .swiper-zoom-container
          NuxtImg(fit="contain" :src="item.src" loading="lazy" format="webp" placeholder).select-none.h-full.object-contain.inline-block
        //- Затемнение (градиент) для элементов пагинации
        .absolute.inset-0.bg-gradient-to-b.from-transparent.to-neutral-700.opacity-50.h-auto(class="from-80%")
        button.absolute.bottom-3.right-3.bg-red-600.hover_bg-green-800.border-none(v-if="product.quantity > 0"
          @click.once="cartStore.addItem(product)").px-3.pt-3.pb-1.text-white.rounded-lg
            Icon(name="material-symbols:shopping-cart-outline-rounded").w-7.h-7
  .description.sm_col-span-3.lg_col-span-2.ml-4.mt-2
    p.mr-2 {{ product.description }}
    p(v-if="product.quantity > 0") Кол-во: {{ product.quantity }} шт.
    p(v-else).text-red-500.font-semibold НЕТ В НАЛИЧИИ!
    p {{ product.condition }}
    p.mb-4 {{ Intl.NumberFormat("ru").format(product.price) }} &#8381;
</template>

<style lang="sass" scoped>
swiper-container
  border: 2px solid rgba(255, 255, 255, 0.3)
  height: calc(64vh)

@media (min-width: 432px)
  swiper-container, swiper-slide
    height: calc(100vh - 88px)

.swiper-slide
  background: rgba(255, 255, 255, 0.1)
</style>

<script setup lang="ts">
import {useProductStore} from '~~/stores/products'
import {useCartStore} from '~~/stores/cart'
const productStore = useProductStore()
const cartStore = useCartStore()
const route = useRoute()

const containerRef = ref(null)
const swiper = useSwiper(containerRef, {
  //- Transition effects: 'slide', 'fade', 'cube', 'coverflow', 'flip', 'creative', 'cards'
  effect: `slide`,
  navigation: true,
  keyboard: true,
  mousewheel: true,
  zoom: true,
  pagination: {
    type: 'bullets',
    clickable: true
  },
  loop: true,
  // autoplay: {
  //   delay: 6000,
  //   disableOnInteraction: true,
  //   pauseOnMouseEnter: true
  // },
})

const product = computed( () => {
  return productStore.products.find( product => {
    return product.slug === route.params.slug
  } )
} )

const category = product.category

async function addToCart () {
  await cartStore.addToCart( {
    id: product.value.id,
    name: product.value.name,
    price: product.value.price,
    currency: 'rub',
    stripePriceId: product.value.stripePriceId
  } )
}
</script>