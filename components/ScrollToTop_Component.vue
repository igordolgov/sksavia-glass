<template lang="pug">
button.back-top.hidden.fixed.bottom-10.right-2.z-20.cursor-pointer.opacity-40(@click='backTop')
	Icon(name="material-symbols:arrow-circle-up" size="60px")
</template>

<script>
export default {
	name: 'back-top',
	data () {
		return {
			isActive: false
		}
	},
	methods: {
		backTop () {
			window.scrollTo( { top: 0, behavior: 'smooth' } )
		},
		handleScroll () {
			const backTop = document.querySelector( '.back-top' )
			if ( window.pageYOffset > 200 ) {
				backTop.classList.add( 'active' )
			} else {
				backTop.classList.remove( 'active' )
			}
		}
	},
	mounted () {
		window.addEventListener( 'scroll', this.handleScroll )
	}
}
</script>

<style lang="sass">
	.back-top.active
		display: block
</style>