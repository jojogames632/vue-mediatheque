<template>
	<input 
	type="text"
	class="block border border-grey-light w-full p-3 rounded mb-4 border-l-8"
	:class="border_signal"
	name="author"
	v-model="author.value"
	placeholder="Auteur" 
	@input="authorVerif" />
	<div v-if="author.error" class="text-red-500 text-left p-3 pt-0">
		{{ author.error }}
	</div>
</template>

<script>
export default {
	props: ['author', 'authorVerif'],
	computed: {
		border_signal() {
			return { 'border-l-red-500': this.author.error,
						'border-l-green-500': !this.author.error && this.author.dirty }
		}
	},
}
</script>

<style>

</style>