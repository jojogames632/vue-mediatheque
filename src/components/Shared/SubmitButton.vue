<template>
	<button
		type="submit"
		:disabled="!isFormValid"
		class="w-full text-center py-3 rounded text-white focus:outline-none my-1"
		:class="{ 'bg-gray-300': !isFormValid, 'bg-green-500': isFormValid, 'hover:bg-green-700': isFormValid }"
	>{{ label }}</button>
</template>

<script>
export default {
	props: ['isFormValid', 'label']
}
</script>

<style>

</style>