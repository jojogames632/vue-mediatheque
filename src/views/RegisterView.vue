<template>
  <div class="bg-grey-lighter">
		<div class="container max-w-sm mx-auto flex flex-col items-center justify-center px-2">
			<form @submit.prevent="submit" class="bg-white px-6 py-8 rounded shadow-md w-96">
				<h1 class="mb-8 text-3xl text-center">Sign up</h1>

				<EmailInput :email="email" :emailVerif="emailVerif" />
				<PasswordInput :password="password" :passwordVerif="passwordVerif" />
				<PasswordConfirmInput :passwordConfirm="passwordConfirm" :passwordConfirmVerif="passwordConfirmVerif" />

				<SubmitButton :isFormValid="isFormValid" />

			</form>

			<div class="mt-6">Already have an account? 
				<router-link :to="{ name: 'home' }" class="no-underline border-b border-green-500 text-green-500">
						Log in
				</router-link>.
			</div>
			
		</div>
</div>
</template>

<script>
import { computed, ref } from 'vue'
import router from '@/router'
import EmailInput from '../components/RegisterView/EmailInput.vue'
import PasswordInput from '../components/RegisterView/PasswordInput.vue'
import PasswordConfirmInput from '../components/RegisterView/PasswordConfirmInput.vue'
import SubmitButton from '../components/RegisterView/SubmitButton.vue'

export default {
	name: "Login",
	components: { 
		EmailInput,
		PasswordInput,
		PasswordConfirmInput,
		SubmitButton
	},
	setup() {
		const email = ref({
			value: '',
			dirty: false,
			error: '',
		})

		const password = ref({
			value: '',
			dirty: false,
			error: '',
		})

		const passwordConfirm = ref({
			value: '',
			dirty: false,
			error: '',
		})

		const isFormValid = computed(() => (!email.value.error && !password.value.error && !passwordConfirm.value.error 
										 									&& email.value.dirty && password.value.dirty && passwordConfirm.value.dirty))

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
			// verif confirm password too
			passwordConfirmVerif()
		}

		const passwordConfirmVerif = () => {
			if (passwordConfirm.value.value !== password.value.value) { 
				passwordConfirm.value.error = 'Les mots de passes ne correspondent pas'
			}
			else {
				passwordConfirm.value.error = ''
			}
			passwordConfirm.value.dirty = true
		}

		const submit = () => {
			// check in database for unique email /!\ ******************************************** TODO
			if (isFormValid) {
				router.push('/')
			}
		}

		return {
			email,
			password, 
			passwordConfirm,
			isFormValid,
			emailVerif,
			passwordVerif,
			passwordConfirmVerif,
			submit,
		}
	}
}
</script>