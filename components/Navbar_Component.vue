<template lang="pug">
  nav.navbar.grid.content-center.justify-items-start.text-white.text-lg.h-14
    .container.mx-auto.lg_px-4
      .navbar-start.sm_hidden
        //- Мобильное меню
        .dropdown
          .btn.btn-ghost.sm_hidden(tabindex="0", role="button")
            svg.h-5.w-5(xmlns="http://www.w3.org/2000/svg", fill="none", viewBox="0 0 24 24", stroke="currentColor")
              path(stroke-linecap="round", stroke-linejoin="round", stroke-width="2", d="M4 6h16M4 12h8m-8 6h16")
          ul.menu.menu-sm.dropdown-content.w-52.p-2(class="z-[1]")
            li
              a Item 1
            li
              a Parent
              ul.p-2
                li
                  a Submenu 1
                li
                  a Submenu 2
            li
              a Item 3
        //- Заголовок страницы
      .navbar-center.hidden.lg_flex
        //- Основное меню
        NuxtLink(to="/").flex.items-center
          .site-logo.hidden.sm_block
            img(src="/assets/images/logo.png" alt="SKSAVIA").mr-6.max-h-14
          NuxtLink.nav_link.transition-colors.duration-500.ease-out(to="/")
            |	Главная
          NuxtLink.nav_link.transition-colors.duration-500.ease-out(to="/MotorsPage", class="sm:px-3")
            |	Каталог
          NuxtLink.nav_link.transition-colors.duration-500.ease-out.contacts(to="/ContactsPage")
            |	Контакты
      .navbar-end.grid.justify-self-end
        //- Правая часть меню
        ThemeSwitcher_Component
</template>

<style scoped lang="sass">
// ul
//   @apply bg-accent text-neutral-content rounded-box rounded-t-none

nav
  background-color: #2490C5
  filter: contrast(2)
  filter: brightness(.9)

.nav_link:not(:last-child), .contacts
  padding: 14px 17px
  background-color: none

.nav_link
  text-align: center
  text-shadow: 1px 1px 2px black
  &:hover
    background-color: #1e78a4
</style>