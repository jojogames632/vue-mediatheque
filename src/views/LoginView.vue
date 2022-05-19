<template>
	<div class="mt-12">
		<div class="container max-w-sm mx-auto flex flex-col items-center justify-center px-2">
			<form @submit.prevent="submit" class="bg-white px-6 py-8 rounded shadow-md w-96">
				<h1 class="mb-8 text-3xl text-center">Connexion</h1>

				<EmailInput :email="email" :emailVerif="emailVerif" />
				<PasswordInput :password="password" :passwordVerif="passwordVerif" />

				<SubmitButton :isFormValid="isFormValid" :label="'Connexion'" />

				<div class="mt-6">Pas de compte ?
					<router-link :to="{ name: 'register' }" class="no-underline border-b border-green-500 text-green-500">
							Créer un compte
					</router-link>.
				</div>

			</form>
		</div>
	</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import EmailInput from '../components/Shared/EmailInput.vue'
import PasswordInput from '../components/Shared/PasswordInput.vue'
import SubmitButton from '../components/Shared/SubmitButton.vue'
import router from '@/router'

export default {
	components: {
		EmailInput,
		PasswordInput,
		SubmitButton
	},
	setup() {
		const email = ref({
			value: '',
			dirty: false,
			error: ''
		})

		const password = ref({
			value: '',
			dirty: false,
			error: ''
		})

		const isFormValid = computed(() => (!email.value.error && !password.value.error
										 									&& email.value.dirty && password.value.dirty))

		const emailVerif = () => {
			let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
			if (!email.value.value) { 
				email.value.error = 'L\'adresse email est requise'
			}
			else if (!email.value.value.match(regexEmail)) {
				email.value.error = 'L\'adresse email n\'est pas valide'
			}
			else {
				email.value.error = ''
			}
			email.value.dirty = true
		}

		const passwordVerif = () => {
			if (password.value.value.length < 6) { 
				password.value.error = 'Le mot de passe doit contenir 6 caractères minimum'
			}
			else {
				password.value.error = ''
			}
			password.value.dirty = true
		}

		const submit = () => {
			if (isFormValid) {
				router.push('/')
			}
		}

		return { 
			email, 
			password, 
			isFormValid,
			emailVerif,
			passwordVerif,
			submit,
		}
	}
}
</script>

<style>

</style>