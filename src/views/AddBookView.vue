<template>
	<div class="mt-[65px] md:flex">
		<transition name="move">
      <div v-if="$store.state.isSideNavOpen" class="w-[100vw] md:w-[27vw] lg:w-[22vw] xl:w-[16vw]">
        <SideNav />
      </div>
    </transition>
		<div class="md:w-[73vw] lg:w-[78vw] xl:w-[84vw]">

			<div 
				class="text-center font-bold p-4 mt-6"
				:class="alert_msg_color" 
				v-if="alert_msg"
			>
				{{ alert_msg }}
			</div>

			<vee-form 
				@submit="addBook"
				:validation-schema="schema"
				class="bg-white px-6 py-8 rounded shadow-md w-96 mx-auto mt-12"
			>
				
				<h1 class="text-xl font-bold mb-6">Ajouter un livre</h1>

				<vee-field
					type="text"
					class="block border border-grey-light w-full p-3 rounded mb-4 border-l-8"
					name="title"
					placeholder="Titre"  
				/>
				<ErrorMessage class="text-red-600" name="title" />

				<vee-field
					type="text"
					class="block border border-grey-light w-full p-3 rounded mb-4 border-l-8"
					name="author"
					placeholder="Auteur" 
				/>
				<ErrorMessage class="text-red-600" name="author" />

				<vee-field 
					type="number"
					class="block border border-grey-light w-full p-3 rounded mb-4 border-l-8"
					name="pageNumber"
					placeholder="Nombre de pages" 
				/>
				<ErrorMessage class="text-red-600" name="pageNumber" />

				<vee-field 
					type="url"
					class="block border border-grey-light w-full p-3 rounded mb-4 border-l-8"
					name="image"
					placeholder="URL de l'image" 
				/>
				<ErrorMessage class="text-red-600" name="image" />

				<vee-field name="type" as="select" class="border rounded self-start">
					<option value="" disabled>Genre</option>
					<option v-for="type in types" :key="type" :value="type">{{ type }}</option>
				</vee-field>

				<button
					type="submit"
					class="w-full mx-auto text-center py-3 rounded focus:outline-none my-1 bg-lime-200 mt-6"
				>
					Ajouter
				</button>

			</vee-form>
		</div>
	</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import SideNav from '../components/Shared/SideNav.vue'
import axiosInstance from '../services/api'
import { computed, onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
	components: {
		SideNav,
	},
	setup() {
		const store = useStore()
		const router = useRouter()

		const userId = computed(() => {
			return store.state.user.id
		})

		onMounted(() => {
			if (userId == -1) {
				router.push('/login')
				return
			}
		})

		const types = ref([
			'Développement personnel',
			'Spiritualité',
			'Alimentation',
			'Finance',
			'Productivité'
		])
		const schema = ref({
			title: 'required|min:3|max:100',
			author: 'required|min:3|max:100',
			pageNumber: 'required|min_value:20|max_value:10000',
			image: 'required|url',
		})
		const alert_msg = ref('')
		const alert_msg_color = ref('bg-red-200')

		const addBook = (values) => {
			console.log(values)
			axiosInstance.post('/books', values)
			.then(_ => {
				alert_msg_color.value = 'bg-lime-200'
				alert_msg.value = 'Le livre a bien été ajouté'
			})
			.catch(error => {
				console.log(error)
				alert_msg.value = error.response.data.message
			})
		}

		return {
			types,
			schema,
			alert_msg,
			alert_msg_color,
			userId,
			addBook,
		}
	}
}
</script>

<style>
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