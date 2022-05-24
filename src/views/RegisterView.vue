<template>
  <div class="mt-12">
		<div class="container max-w-sm mx-auto flex flex-col items-center justify-center px-2">
			<div class="text-center rounded font-bold p-5 mb-4" 
				v-if="reg_show_alert"
				:class="reg_alert_variant">
				{{ reg_alert_msg }}
			</div>
			<vee-form 
				@submit="register" 
				:validation-schema="schema"
				class="bg-white px-6 py-8 rounded shadow-md w-96"
			>
				<h1 class="mb-8 text-3xl text-center">Inscription</h1>
					<vee-field 
						type="text"
						class="block border border-grey-light w-full p-3 rounded mb-4 border-l-8"
						name="email"
						placeholder="Email" /> 
					<ErrorMessage class="text-red-600 " name="email" />

					<vee-field 
						type="password"
						class="block border border-grey-light w-full p-3 rounded mb-4 border-l-8"
						name="password"
						placeholder="Mot de passe" /> 
					<ErrorMessage class="text-red-600" name="password" />

					<vee-field 
						type="password"
						class="block border border-grey-light w-full p-3 rounded mb-4 border-l-8"
						name="confirm_password"
						placeholder="Confirmation du mot de passe" />
					<ErrorMessage class="text-red-600" name="confirm_password" />

					<button
						type="submit" :disabled="reg_in_submission"
						class="w-full text-center py-3 rounded focus:outline-none my-1 bg-lime-200"
						:class="{ 'bg-gray-200': reg_in_submission }"
					>
						Création du compte
					</button>

			</vee-form>

			<div class="mt-6">Déjà un compte ?
				<router-link :to="{ name: 'login' }" class="no-underline border-b border-green-500 text-green-500">
						Connexion
				</router-link>.
			</div>
			
		</div>
</div>
</template>

<script>

export default {
	name: "Register",
	data() {
		return {
			schema: {
				email: 'required|min:3|max:100|email',
				password: 'required|min:6|max:100|alpha_spaces',
				confirm_password: 'passwords_mismatch:@password'
			},
			reg_in_submission: false,
			reg_show_alert: false,
			reg_alert_variant: 'bg-blue-500',
			reg_alert_msg: 'Patientez, création de votre compte...',
		}
	},
	methods: {
		register(values) {
			this.reg_show_alert = true;
			this.reg_in_submission = true;
			this.reg_alert_variant = 'bg-blue-500';
			this.reg_alert_msg = 'Patientez, création de votre compte...';

			this.reg_alert_variant = 'bg-lime-200';
			this.reg_alert_msg = 'Succès ! Votre compte a bien été créé.';
			console.log(values);
		},
	},
}
</script>