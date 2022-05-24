<template>
	<nav class="flex border-b border-b-green-700">
		<div>
			<svg class="w-6 h-6 text-green-600 mr-6 hover:cursor-pointer" @click="toggleSideNav" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
		</div>
		<div class="flex-1 text-left hidden md:block">Médiathèque</div>
		<div class="flex-1 flex justify-between text-left">
			Jojogames@free.fr
			<div>
				<router-link to="">Déconnexion</router-link>
			</div>
		</div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	methods: {
		...mapActions(['toggleSideNav'])
	}
}
</script>