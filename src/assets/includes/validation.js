import {
	required,
	min,
	max,
	alpha_spaces as alphaSpaces,
	email, confirmed
} from '@vee-validate/rules';
import {
	Form as VeeForm,
	Field as VeeField,
	defineRule,
	ErrorMessage,
	configure,
} from 'vee-validate';

export default {
	install(app) {
		app.component('VeeForm', VeeForm);
		app.component('VeeField', VeeField);
		app.component('ErrorMessage', ErrorMessage);

		defineRule('required', required);
		defineRule('min', min);
		defineRule('max', max);
		defineRule('alpha_spaces', alphaSpaces);
		defineRule('email', email);
		defineRule('passwords_mismatch', confirmed);

		configure({
			generateMessage: (ctx) => {
				const messages = {
					required: `Le champs ${ctx.field} est requis.`,
					min: `Ce champs est trop court.`,
					max: `100 caractères maximum.`,
					alpha_spaces: `Le champs ${ctx.field} doit contenir uniquement des lettres ou des espaces.`,
					email: `Entrez une adresse email valide.`,
					passwords_mismatch: `Les mots de passes ne correspondent pas.`,
				}

				const message = messages[ctx.rule.name] 
					? messages[ctx.rule.name] 
					: `Le champs ${ctx.field} est invalid.`;

				return message;
			},
			validateOnInput: false,
		});
	},
};