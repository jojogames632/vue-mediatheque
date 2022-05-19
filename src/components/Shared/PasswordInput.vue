<template>
	<input 
	type="password"
	class="block border border-grey-light w-full p-3 rounded mb-4 border-l-8"
	:class="border_signal"
	name="password"
	v-model="password.value"
	placeholder="Mot de passe" 
	@input="passwordVerif" />
	<div v-if="password.error" class="text-red-500 text-left p-3 pt-0">
		{{ password.error }}
	</div>
</template>

<script>
export default {
	props: {
		password: Object, 
		passwordVerif: Function
	},
	computed: {
		border_signal() {
			return { 'border-l-red-500': this.password.error,
						'border-l-green-500': !this.password.error && this.password.dirty }
		}
	}
}
</script>