<template lang="pug">
//- Начальный файл приложения

//- Разметка написана на языке Pug. Синтаксис Pug достаточно прост: 
//- Он не имеет угловых скобок и закрывающих тегов. Вложенность элементов определяется отступом.
//- Классы CSS задаются через точку. Идентификаторы — через решетку. Атрибуты — в круглых скобках.
//- Текст элемента указывается через пробел, после символа | или после точки

//- Стили указаны инлайново (в самом теге) с помощью css-фреймворка Tailwind
  см. документацию на https://tailwindcss.com/ или на https://tailwindcss.ru/

.main
  //- Шаблон разметки (из папки layouts, по умолчанию default.vue):
  NuxtLayout
    //- Страницы из папки pages, вначале загружается страница index.vue:
    NuxtPage
    //- Компонент из папки components (кнопка "Наверх страницы"):
  ScrollToTop_Component.transparent-50
  //- ThemeSwitcher_Component.invisible.md_visible.fixed.bottom-3.right-3
</template>

<style lang="sass">
.main
  background-image: url("/assets/images/background.jpg")
</style>

<script setup>
import {useProductStore} from '~/stores/products'
const productStore = useProductStore()
productStore.fill()
</script>
