<template lang="pug">
head
  title SKSAVIA - Корзина
.cart-page
  .container-lg.sm_px-4
    .cart-full.mx-auto.text-white.bg-transparent(v-if="!cartStore.isEmpty" class="md_w-3/4 lg_w-2/4")
      h1.py-2.text-xl.text-center.font-thin
        | Корзина
        div
          table.table.table-auto.mx-auto.w-full.mt-2.text-sm.sm_text-md
            thead.border-y-2.uppercase
              tr.text-center.text-white.font-thin
                th.px-3 Название
                  span.font-normal &nbsp;/ Цена
                th Кол-во
                th.px-3 Сумма
                th
            tbody.border-y-2.px-3.py-2.sm_px-4(v-for="item in cartStore.items" :key="item.id")
              tr
                td.pl-4.pr-3.py-1.md_text-md.text-left.font-semibold {{item.name}}&nbsp;
                  span.font-light.span-size.block.sm_inline / {{Intl.NumberFormat("ru").format(item.price)}} &#8381;
                td.py-3.flex.justify-center
                  button(@click="cartStore.decrement(item)").px-2.m-0
                    | -
                  span {{item.amount}}
                  button(@click="cartStore.increment(item)").pr-3.pl-2.m-0
                    | +
                td.p-0.py-2.text-center {{Intl.NumberFormat("ru").format(item.price * item.amount)}} &#8381;
                td(@click="cartStore.clearItem(item.name)")
                  svg.w-6.h-6.mx-auto.cursor-pointer(fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg")
                    path(fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd")
      .total.flex-col.sticky.z-10.inset-x-0.bottom-1.ml-auto.mt-1.mr-3.sm_mr-0.px-4.py-2.border.rounded-lg(class="w-[250px]")
        .flex.justify-between
          .shipping Сумма доставки:
          span(class="pr-[2px]") {{Intl.NumberFormat("ru").format(cartStore.shipping)}} &#8381;
        .flex.justify-between
          .summary.font-bold Итого:
          span {{Intl.NumberFormat("ru").format(cartStore.total)}} &#8381;
    .cart-empty(v-else="").my-auto.text-center.text-4xl.grid.place-items-center Корзина пуста
</template>

<style lang="sass">
table td, th
  font-weight: 500

.span-size
  font-size: smaller

.cart-empty
  min-height: calc(100vh - 90px)

.total
  color: black
  opacity: 85%
  background-color: #fde68a
</style>

<script setup>
import { useCartStore } from '~/stores/cart'
const cartStore = useCartStore()
</script>