<template>
	<button
		type="submit"
		:disabled="!isFormValid"
		class="w-full text-center py-3 rounded text-white hover:bg-green-700 focus:outline-none my-1"
		:class="{ 'bg-gray-300': !isFormValid, 'bg-green-500': isFormValid }"
	>Create Account</button>
</template>

<script>
export default {
	props: ['isFormValid']
}
</script>

<style>

</style>