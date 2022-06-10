<template>
	<div class="md:flex mt-[65px]">
		<div v-if="$store.state.isSideNavOpen" class="w-[100vw] md:w-[27vw] lg:w-[22vw] xl:w-[16vw]">
			<SideNav />
		</div>
		<div class="md:w-[73vw] lg:w-[78vw] xl:w-[84vw]">
			<h1 class="text-3xl font-bold my-6">Profil</h1>
			<vee-form 
				class="w-1/3 mx-auto"
				@submit="updateProfil"
				:validation-schema="schema"
			>

				<label for="email" class="sr-only">Email</label>
				<vee-field
					type="text"
					name="email"
					id="email"
					class="block border border-grey-light w-full p-3 rounded mb-4 border-l-8"
					:placeholder="email" />
				<ErrorMessage class="text-red-600" name="email" />

				<label for="avatar" class="sr-only">Avatar</label>
				<vee-field
					type="url"
					name="avatar"
					id="avatar"
					class="block border border-grey-light w-full p-3 rounded mb-4 border-l-8"
					:placeholder="not_empty_avatar" />
				<ErrorMessage class="text-red-600" name="avatar" />

				<button
					type="submit"
					class="block mx-auto bg-lime-200 rounded px-5 py-3 shadow mt-6 hover:bg-lime-300"
				>
					Sauvegarder
				</button>

			</vee-form>
		</div>
	</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { computed, onMounted } from '@vue/runtime-core'
import SideNav from '../components/Shared/SideNav.vue'
import axiosInstance from '../services/api'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
	components: {
		SideNav
	},
	setup() {
		const store = useStore()
		const router = useRouter()

		const userId = computed(() => {
			return store.state.user.id
		})
		const not_empty_avatar = computed(() => {
			return avatar.value ?? 'Avatar (url)'
		})
		const email = ref('')
		const avatar = ref('')

		onMounted(() => {
			if (userId == -1) {
				router.push('/login')
				return
			}

			axiosInstance.get('/users/' + userId.value)
			.then(res => {
				email.value = res.data.data.email
				avatar.value = res.data.data.avatar
			})
			.catch(error => {
				console.log(error)
			})
		})

		const schema = ref({
			email: 'required|email|min:5|max:100',
			avatar: 'required|url'
		})

		const updateProfil = (values) => {
			axiosInstance.patch(`/users/${userId.value}`, values)
			.then(res => {
				console.log(res)
				router.push('/profil')
			})
			.catch(err => {
				alert(err)
			})
		}

		return { 
			schema,
			email,
			avatar,
			userId,
			not_empty_avatar,
			updateProfil 
		}
	},
}
</script>

<style>

</style>