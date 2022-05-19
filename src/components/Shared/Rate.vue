<template>
	<input
		ref="input"
		type="range" 
		step="0.1"
		min="0"
		max="5"
		class="border mr-3 bg-red-300" 
		v-model="rating" />
	<span>{{ rating }}</span>
	<button 
		type="button" 
		class="ml-3 p-2 rounded bg-lime-200 text-sm hover:bg-lime-500 hover:cursor-pointer" @click="rateBook">Noter</button>
</template>

<script>
export default {
	data() {
		return {
			rating: 5
		}
	},
	emits: ['rate-book'],
	methods: {
		rateBook() {
			this.$emit('rate-book', this.rating)
		}
	}
}
</script>