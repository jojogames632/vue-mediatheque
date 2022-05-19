<template>
	<input 
		type="password"
		class="block border border-grey-light w-full p-3 rounded mb-4 border-l-8"
		:class="border_signal"
		name="password_confirm"
		v-model="passwordConfirm.value"
		placeholder="Confirmation du mot de passe" 
		@input="passwordConfirmVerif" />
	<div v-if="passwordConfirm.error" class="text-red-500 text-left p-3 pt-0">
		{{ passwordConfirm.error }}
	</div>
</template>

<script>
export default {
	props: ['passwordConfirm', 'passwordConfirmVerif'],
	computed: {
		border_signal() {
			return {'border-l-red-500': this.passwordConfirm.error,
							'border-l-green-500': !this.passwordConfirm.error && this.passwordConfirm.dirty }
		}
	}
}
</script>

<style>

</style>