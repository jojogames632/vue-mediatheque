<template>
	<div class="md:flex">
		<div class="w-[100vw] md:w-[35vw] lg:w-[22vw] xl:w-[16vw]">
			<SideNav />
		</div>
		<div class="md:w-[65vw] lg:w-[78vw]">
			<input
				type="text"
				placeholder="Rechercher un livre..."
				class="border border-gray-300 rounded mt-6 text-center"
				v-model="search"
				/>
			
			<div class="grid grid-cols-3 md:grid-cols-1 text-sm mt-6">
				<div 
					class="mb-4 p-2 rounded"
					v-for="(type, index) in types" 
					:class="{ 'bg-lime-200': currentType === type }"
					:key="index" 
					@click="selectType(type)">
					{{ type }}
				</div>
			</div>

		</div>
	</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import SideNav from '../components/Shared/SideNav.vue'

export default {
	components: {
		SideNav
	},
	setup() {
		const search = ref('')
		const types = ref([
			'Développement personnel',
			'Spiritualité',
			'Alimentation',
			'Finance',
			'Productivité'
		])
		const currentType = ref('')

		const selectType = (type) => {
			currentType.value = type === currentType.value ? '' : type
		}

		return { search, types, currentType, selectType }
	}
}
</script>

<style>

</style>