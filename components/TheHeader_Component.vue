<template lang="pug">
header.flex.text-lg.h-14.font-thin(class="bg-[#2490C5]").preview
	.container.mx-auto.lg_px-4
		.flex.items-center.justify-between
			NuxtLink(to="/").flex.items-center
				.site-logo.hidden.sm_block
					img(src="/assets/images/logo.png" alt="SKSAVIA").mr-6.max-h-14
				NuxtLink.nav_link(to="/")
					|	Главная
				NuxtLink.nav_link(to="/MotorsPage", class="sm:px-3")
					|	Каталог
				NuxtLink.nav_link.contacts(to="/ContactsPage")
					|	Контакты
			CartIndicator.mt-2.pr-6
</template>

<style scoped lang="sass">
header
	color: white

.nav_link:not(:last-child), .contacts
	padding: 14px 16px
	background-color: none

.nav_link
	text-align: center
	&:hover
		background-color: #1e78a4
</style>