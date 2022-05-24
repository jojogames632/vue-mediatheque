<template>
	<div class="mt-12">
		<div class="container max-w-sm mx-auto flex flex-col items-center justify-center px-2">
			<vee-form 
				@submit="login" 
				:validation-schema="schema" 
				class="bg-white px-6 py-8 rounded shadow-md w-96"
			>
				<h1 class="mb-8 text-3xl text-center">Connexion</h1>
					<vee-field 
						type="text"
						class="block border border-grey-light w-full p-3 rounded mb-4 border-l-8"
						name="email"
						placeholder="Email" />
					<ErrorMessage class="text-red-600" name="email" />

					<vee-field 
						type="password"
						class="block border border-grey-light w-full p-3 rounded mb-4 border-l-8"
						name="password"
						placeholder="Mot de passe" />
					<ErrorMessage class="text-red-600" name="password" />

					<button
						type="submit"
						class="w-full text-center py-3 rounded text-white focus:outline-none my-1 bg-green-300"
					>
						Connexion
					</button>

				<div class="mt-6">Pas de compte ?
					<router-link :to="{ name: 'register' }" class="no-underline border-b border-green-500 text-green-500">
							Créer un compte
					</router-link>.
				</div>

			</vee-form>
		</div>
	</div>
</template>

<script>

export default {
	components: {

	},
	data() {
		return {
			schema: {
				email: 'required|min:3|max:100|email',
				password: 'required|min:6|max:100|alpha_spaces',
			},
		}
	},
	methods: {
		login() {
			console.log('login in');
		}
	},
}
</script>

<style>

</style>