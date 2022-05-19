<template>
	<div class="grid grid-cols-3 lg:grid-cols-1 gap-x-6 text-sm mt-6 max-h-60 m-2 xl:m-8">
		<div
			class="mb-4 p-2 rounded cursor-pointer hover:bg-lime-300"
			v-for="(type, index) in types" 
			:class="{ 'bg-lime-200': currentType === type }"
			:key="index" 
			@click="selectType(type)">
			{{ type }}
		</div>
	</div>
</template>

<script>
export default {
	props: ['currentType'],
	data() {
		return {
			types: [
				'Développement personnel',
				'Spiritualité',
				'Alimentation',
				'Finance',
				'Productivité'
			]
		}
	},
	methods: {
		selectType(type) {
			this.$emit('type-selected', type)
		}
	}
}
</script>