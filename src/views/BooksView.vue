<template>
	  <div class="h-full mt-[65px] md:flex">
			<transition name="move">
				<div v-if="$store.state.isSideNavOpen" class="w-[100vw] md:w-[27vw] lg:w-[22vw] xl:w-[16vw]">
					<SideNav />
				</div>
			</transition>
			<div :class="page_width">
				<input
					type="search"
					placeholder="Rechercher un livre..."
					class="border border-gray-300 rounded mt-6 text-center"
					v-model="search"
				/>
			
			<div class="lg:flex w-full">
				<TypeFilters :currentType="currentType" @type-selected="selectType"/>

				<div v-if="filteredBooks.length" class="grid grid-cols-1 lg:grid-cols-2 gap-3">
					<transition-group name="list">
						<Book v-for="book in filteredBooks" :key="book.id" :book="book" />
					</transition-group>
				</div>
				<div v-else class="mt-40 text-center w-full">{{ bookMessage }}</div>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { computed, onMounted } from '@vue/runtime-core'
import SideNav from '../components/Shared/SideNav.vue'
import Book from '../components/Shared/Book.vue'
import TypeFilters from '../components/Shared/TypeFilters.vue'
import axiosInstance from '../services/api'

export default {
	components: {
		SideNav,
		Book,
		TypeFilters
	},
	setup() {

		const store = useStore()
		const router = useRouter()

		const books = ref([])
		const bookMessage = ref('Aucun livre ne correspond à votre recherche')

		const user = computed(() => {
			return store.state.user
		})

		onMounted(() => {
			if (user.id == -1) {
				router.push('/login')
				return
			}

			axiosInstance.defaults.headers.common['Authorization'] = store.state.user.token

			axiosInstance.get('/books')
			.then(res => {
				books.value = res.data.data
			})
			.catch(_ => {
				bookMessage.value = '😵 Impossible de charger les livres depuis l\'API 😵'				
			})
		})

		const search = ref('')
		const currentType = ref('')

		const page_width = computed(() => {
      return { 'md:w-[73vw] lg:w-[78vw] xl:w-[84vw]': store.state.isSideNavOpen, 'w-[100vw]': !store.state.isSideNavOpen }
    })

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

		return { search, currentType, books, bookMessage, filteredBooks, page_width, selectType }
	}
}
</script>

<style>
	.list-enter-active {
		transition: all 0.6s ease;
	}
	.list-enter-from {
		opacity: 0;
		transform: translateX(50px);
	}

	.move-enter-from {
    transform: translateX(-200px);
    opacity: 0.3;
	}

	.move-enter-active {
		transition: all 0.3s linear;
	}

	.move-leave-to {
		transition: all 0.3s linear;
    transform: translateX(-200px);
    opacity: 0.3;
  }
</style>