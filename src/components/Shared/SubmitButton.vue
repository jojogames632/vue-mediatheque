<template>
	<button
		type="submit"
		:disabled="!isFormValid"
		class="w-full text-center py-3 rounded text-white focus:outline-none my-1"
		:class="valid_button"
	>{{ label }}</button>
</template>

<script>
export default {
	props: ['isFormValid', 'label'],
	computed: {
		valid_button() {
			return { 'bg-gray-300': !this.isFormValid, 'bg-green-500': this.isFormValid, 'hover:bg-green-700': this.isFormValid }
		}
	}
}
</script>

<style>

</style>