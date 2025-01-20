<template lang="pug">
aside.text-md.sm_text-lg.-mt-4.sm_-mt-1
	ul.products-list.my-1
		li.list-items.flex.w-48.font-thin.sm_flex-col.text-white
			NuxtLink(to="/MotorsPage").products-link
				| Моторы
				.hidden.sm_inline-block &nbsp;({{ products.filter(item => item.category == "Моторы").length }})
			NuxtLink(to="/PropellersPage").products-link
				| Пропеллеры
				.hidden.sm_inline-block &nbsp;({{ products.filter(item => item.category == "Пропеллеры").length }})
			NuxtLink(to="/StartersPage").products-link
				| Стартеры
				.hidden.sm_inline-block &nbsp;({{ products.filter(item => item.category == "Стартеры").length }})
</template>

<style scoped lang="sass">
aside
  @apply sm_h-full sticky top-0 pb-px

.router-link-exact-active
  background: rgba(255, 255, 255, 0.1)
  border: 1px solid rgba(255, 255, 255, 0.3)

.products-link
  @apply mr-4 px-3 py-2 sm_py-1 rounded-lg relative
</style>

<script setup>
import { useProductStore } from '~/stores/products'
const productStore = useProductStore()
const products = productStore.products
productStore.fill()
</script>
