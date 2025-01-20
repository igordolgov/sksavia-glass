<template lang="pug">
head
  title SKSAVIA - Моторы

.motors-page
  .h-full.flex-row.sm_flex.p-4.pb-0
    Menu_Component.menu-component
    .page-grid
      div(v-for="(product, index) in products" :key="'product '+index")
        Preview_Component(:product="product").preview-component
</template>

<style lang="sass">
.page-grid
  @apply grid grid-cols-2 sm_grid-cols-3 lg_grid-cols-5 xl_grid-cols-6 gap-4 h-fit pb-4
</style>

<script setup>
import { useProductStore } from '~/stores/products'
const productStore = useProductStore()
const products = productStore.products.filter( item => item.category == "Моторы" )
productStore.fill()
</script>
