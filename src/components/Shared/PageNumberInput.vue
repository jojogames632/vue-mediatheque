<template>
	<input 
	type="number"
	class="block border border-grey-light w-full p-3 rounded mb-4 border-l-8"
	:class="border_signal"
	name="pageNumber"
	v-model="pageNumber.value"
	placeholder="Nombre de pages" 
	@input="pageNumberVerif" />
	<div v-if="pageNumber.error" class="text-red-500 text-left p-3 pt-0">
		{{ pageNumber.error }}
	</div>
</template>

<script>
export default {
	props: ['pageNumber', 'pageNumberVerif'],
	computed: {
		border_signal() {
			return {	'border-l-red-500': this.pageNumber.error,
						'border-l-green-500': !this.pageNumber.error && this.pageNumber.dirty }
		}
	}
}
</script>

<style>

</style>