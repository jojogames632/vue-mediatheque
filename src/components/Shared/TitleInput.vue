<template>
	<input 
	type="text"
	class="block border border-grey-light w-full p-3 rounded mb-4 border-l-8"
	:class="border_signal"
	name="title"
	v-model="title.value"
	placeholder="Titre" 
	@input="titleVerif" />
	<div v-if="title.error" class="text-red-500 text-left p-3 pt-0">
		{{ title.error }}
	</div>
</template>

<script>
export default {
	props: ['title', 'titleVerif'],
	computed: {
		border_signal() {
			return {	'border-l-red-500': this.title.error,
						'border-l-green-500': !this.title.error && this.title.dirty }
		}
	}
}
</script>

<style>

</style>