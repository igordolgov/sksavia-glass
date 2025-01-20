<template lang="pug">
head
  title SKSAVIA - Стартеры
  
.starters-page
  .flex-row.sm_flex.p-4.pb-0
    Menu_Component.menu-component
    .page-grid
      div(v-for="(product, index) in products" :key="'product '+index")
        Preview_Component(:product="product").preview-component
</template>

<script setup>
import { useProductStore } from '~/stores/products'
const productStore = useProductStore()
const products = productStore.products.filter(item => item.category == "Стартеры")
productStore.fill()
</script>
