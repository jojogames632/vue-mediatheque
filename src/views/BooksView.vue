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
				<TypeFilters :currentType="currentType" @type-selected="selectType"/>

				<div class="grid grid-cols-1 lg:grid-cols-2">
					<Book v-for="book in filteredBooks" :key="book.id" :book="book" />
				</div>
			</div>

		</div>
	</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import SideNav from '../components/Shared/SideNav.vue'
import Book from '../components/Shared/Book.vue'
import TypeFilters from '../components/Shared/TypeFilters.vue'

export default {
	components: {
		SideNav,
		Book,
		TypeFilters
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

		return { search, currentType, books, filteredBooks, selectType }
	}
}
</script>

<style>

</style>