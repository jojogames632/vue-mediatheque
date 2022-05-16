<template>
	<input 
		type="password"
		class="block border border-grey-light w-full p-3 rounded mb-4 border-l-8"
		:class="{ 'border-l-red-500': passwordConfirm.error,
							'border-l-green-500': !passwordConfirm.error && passwordConfirm.dirty }"
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
	props: ['passwordConfirm', 'passwordConfirmVerif']
}
</script>

<style>

</style>