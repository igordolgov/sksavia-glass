<template lang="pug">
.product-preview.h-full.font-thin.pb-2.rounded-xl.border.border-transparent.hover_rounded-xl.hover_border-gray-500.preview
  NuxtLink(:to="`products/${product.slug}`")
    img.object-contain.aspect-square.rounded-xl(:src="image" :alt="`${product.name}'s image`").preview
    .p-2.pb-0.text-sm.text-white
      h5.truncate(class="max-h-[20px]") {{ product.name }}
      p(v-if="product.quantity < 1").font-normal Нет в наличии
      p(v-else) {{ Intl.NumberFormat("ru").format(product.price) }} &#8381;
</template>

<style lang="sass">
.preview
  background: rgba(255, 255, 255, 0.2)
  border: 1px solid rgba(255, 255, 255, 0.3)
  border-radius: 14px
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1)

.img-preview
  background: rgba(255, 255, 255, 0.2)
</style>

<script setup>
const props = defineProps( {
  product: {
    type: Object,
    required: true
  }
} )
const image = useAssets( `/assets/images/products/${props.product.image}` )
import {useProductStore} from '~/stores/products'
import {useCartStore} from '~~/stores/cart'
const productStore = useProductStore()
const products = productStore.products
const cartStore = useCartStore()
productStore.fill()
</script>
