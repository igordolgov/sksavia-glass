<template lang="pug">
//- Разметка по умолчанию
.default-layout.relative
	.h-screen
		TheHeader_Component
		main.mx-auto.xl_container
			NuxtPage
		//- ThemeSwitcher_Component.invisible.md_visible.absolute.bottom-3.right-3
</template>

<style lang="sass" scoped>
main
	min-height: calc(100% - 56px)
</style>
