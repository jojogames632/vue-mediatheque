<template>
	<select class="border rounded self-start">
		<option value="" disabled>Genre</option>
		<option v-for="type in types" :key="type">{{ type }}</option>
	</select>
	<div v-if="type.error" class="text-red-500 text-left p-3 pt-0">
		{{ type.error }}
	</div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
	props: {
		type: Object,
	},
	setup() {
		const types = ref([
			'Développement personnel',
			'Spiritualité',
			'Alimentation',
			'Finance',
			'Productivité'
		])

		return { types }
	}	
}
</script>

<style>

</style>