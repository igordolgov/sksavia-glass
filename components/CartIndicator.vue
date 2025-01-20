<template lang="pug">
.cart-indicator
  nuxt-link(to="/cart" :class="{ disabled: cartItems.length < 1 }").relative
    .absolute.-top-3.-right-4.h-5.w-5.bg-red-500.text-white.rounded-full.text-xs.mx-0.text-center.justify-center.justify-content-center.flex-col.border(
      v-if="cartItems.length") {{ cartItems.length }}
    Icon(name="material-symbols:shopping-cart-outline-rounded").w-6.h-6
</template>

<style lang="sass">
.disabled
  pointer-events: none
</style>

<script setup>
import { useCartStore } from '~~/stores/cart'
const cartStore = useCartStore()
const cartItems = computed( () => {
  return cartStore.items
} )
</script>
