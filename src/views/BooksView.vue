<template>
	  <div class="md:flex">
    <div v-if="$store.state.isSideNavOpen" class="w-[100vw] md:w-[27vw] lg:w-[22vw] xl:w-[16vw]">
      <SideNav />
    </div>
		<div :class="page_width">
			<input
				type="search"
				placeholder="Rechercher un livre..."
				class="border border-gray-300 rounded mt-6 text-center"
				v-model="search"
				/>
			
			<div class="lg:flex justify-between">
				<div class="grid grid-cols-3 lg:grid-cols-1 gap-x-6 text-sm mt-6 max-h-60 m-2 xl:m-8">
					<div
						class="mb-4 p-2 rounded cursor-pointer"
						v-for="(type, index) in types" 
						:class="{ 'bg-lime-200': currentType === type }"
						:key="index" 
						@click="selectType(type)">
						{{ type }}
					</div>
				</div>

				<div class="grid grid-cols-1 lg:grid-cols-2">
					<Book v-for="book in filteredBooks" :key="book.id" :book="book" />
				</div>
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
	computed: {
    page_width() {
      return { 'md:w-[73vw] lg:w-[78vw] xl:w-[84vw]':  this.$store.state.isSideNavOpen, 'w-[100vw]': !this.$store.state.isSideNavOpen }
    }
  },
	setup() {

		const books = ref([
			{id: 1, title: 'Pouvoir illimité', author: 'Anthony Robbins', pageNumber: 512, type: 'Développement personnel', image: 'pouvoir-illimite.jpg'},
			{id: 2, title: 'Pouvoir illimité', author: 'Anthony Robbins', pageNumber: 512, type: 'Spiritualité', image: 'pouvoir-illimite.jpg'},
			{id: 3, title: 'Pouvoir illimité', author: 'Anthony Robbins', pageNumber: 512, type: 'Développement personnel', image: 'pouvoir-illimite.jpg'},
			{id: 4, title: 'Pouvoir illimité', author: 'Anthony Robbins', pageNumber: 512, type: 'Développement personnel', image: 'pouvoir-illimite.jpg'},
			{id: 5, title: 'Pouvoir illimité', author: 'Anthony Robbins', pageNumber: 512, type: 'Productivité', image: 'pouvoir-illimite.jpg'},
			{id: 6, title: 'Pouvoir illimité', author: 'Anthony Robbins', pageNumber: 512, type: 'Productivité', image: 'pouvoir-illimite.jpg'},
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