<template>
	<nav class="flex border-b border-b-green-700 fixed top-0 w-full bg-white z-10">
		<div>
			<svg class="w-6 h-6 text-green-600 mr-6 hover:cursor-pointer" @click="toggleSideNav" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
		</div>
		<div class="flex-1 text-left hidden md:block">Médiathèque</div>
		<div class="flex-1 flex justify-between text-left">
			<div class="flex">
				<img :src="avatar" alt="avatar" class="w-6 rounded-full mr-4" />
				{{ email }}
			</div>
			<span class="hover:cursor-pointer" @click="logout">Déconnexion</span>
		</div>
  </nav>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
	methods: {
		...mapMutations(['toggleSideNav']),
		logout() {
			this.$store.commit('logout')
			this.$router.push('/login')
		}
	},
	computed: {
		email() {
			return this.$store.state.user.email
		},
		avatar() {
			return this.$store.state.user.avatar
		}
	}
}
</script>