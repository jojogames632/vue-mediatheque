<template>
	<div class="md:flex">
		<div class="w-[100vw] md:w-[35vw] lg:w-[22vw] xl:w-[16vw]">
			<SideNav />
		</div>
		<div class="md:w-[65vw] lg:w-[78vw]">
			<input
				type="search"
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

			<div class="grid grid-cols-1 md:grid-cols-2">
				<Book v-for="book in filteredBooks" :key="book.id" :book="book" />
			</div>

		</div>
	</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import SideNav from '../components/Shared/SideNav.vue'
import Book from '../components/Shared/Book.vue'
import { computed } from '@vue/runtime-core'

export default {
	components: {
		SideNav,
		Book
	},
	setup() {

		const books = ref([
			{id: 1, title: 'Pouvoir illimité', author: 'Anthony Robbins', pageNumber: 512, type: 'Développement personnel', image: 'pouvoir-illimite.jpg'},
			{id: 1, title: 'Pouvoir illimité', author: 'Anthony Robbins', pageNumber: 512, type: 'Spiritualité', image: 'pouvoir-illimite.jpg'},
			{id: 1, title: 'Pouvoir illimité', author: 'Anthony Robbins', pageNumber: 512, type: 'Développement personnel', image: 'pouvoir-illimite.jpg'},
			{id: 1, title: 'Pouvoir illimité', author: 'Anthony Robbins', pageNumber: 512, type: 'Développement personnel', image: 'pouvoir-illimite.jpg'},
			{id: 1, title: 'Pouvoir illimité', author: 'Anthony Robbins', pageNumber: 512, type: 'Productivité', image: 'pouvoir-illimite.jpg'},
			{id: 1, title: 'Pouvoir illimité', author: 'Anthony Robbins', pageNumber: 512, type: 'Productivité', image: 'pouvoir-illimite.jpg'},
		])
		const search = ref('')
		const currentType = ref('')
		const types = ref([
			'Développement personnel',
			'Spiritualité',
			'Alimentation',
			'Finance',
			'Productivité'
		])

		const filteredBooks = computed(() => {
			if (currentType.value === '') {
				if (search.value.trim() === '') {
					// no filter
					return books.value;
				}
				else {
					// search filter
					return books.value.filter(book => book.title.toLowerCase().includes(search.value.toLowerCase()))
				}
			}
			else {
				if (search.value.trim() === '') {
					// type filter
					return books.value.filter(book => book.type === currentType.value)
				}
				else {
					// search + type filter
					return books.value.filter(book => book.type === currentType.value && book.title.toLowerCase().includes(search.value.toLowerCase()))
				}
			}
		})

		const selectType = (type) => {
			currentType.value = type === currentType.value ? '' : type
		}

		return { search, types, currentType, books, filteredBooks, selectType }
	}
}
</script>

<style>

</style>