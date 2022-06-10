<template>
	<div class="mt-[65px]">
		<div class="container max-w-sm mx-auto flex flex-col items-center justify-center px-2">
			<div 
				class="text-center font-bold p-4 mb-4 mt-6" 
				v-if="login_show_alert"
				:class="login_alert_variant">
				{{ login_alert_msg }}
			</div>
			<vee-form 
				@submit="login" 
				:validation-schema="schema" 
				class="bg-white px-6 py-8 rounded shadow-md w-96"
				:class="{ 'mt-12': !login_show_alert }"
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
						type="submit" :disabled="login_in_submission"
						class="w-full text-center py-3 rounded focus:outline-none my-1 bg-lime-200"
						:class="{ 'bg-gray-200': login_in_submission }"
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
	name: "Login",
	mounted() {
		if (this.$store.state.user.id != -1) {
			this.$router.replace('/books')
		}
	},
	data() {
		return {
			schema: {
				email: 'required|email',
				password: 'required|min:6|max:32',
			},
			login_in_submission: false,
			login_show_alert: false,
			login_alert_variant: 'bg-blue-300',
			login_alert_msg: 'Connexion en cours...',
		}
	},
	methods: {
		login(values) {
			this.login_show_alert = true;
			this.login_in_submission = true;
			this.login_alert_variant = 'bg-blue-300';
			this.login_alert_msg = 'Patientez, connexion en cours...';

			this.$store.dispatch('login', values)
			.then(_ => {
				this.login_alert_variant = 'bg-lime-200';
				this.login_alert_msg = 'Succès ! Vous êtes connecté.';
				this.$router.push('/books')
			})
			.catch(error => {
				this.login_in_submission = false;
				this.login_alert_variant = 'bg-red-300';
				this.login_alert_msg = error.response.data.message;
				return;
			})
		}
	},
}
</script>

<style>

</style>