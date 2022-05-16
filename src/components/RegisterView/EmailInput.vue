<template>
	<input 
	type="text"
	class="block border border-grey-light w-full p-3 rounded mb-4 border-l-8"
	:class="{	'border-l-red-500': email.error,
						'border-l-green-500': !email.error && email.dirty }"
	name="email"
	v-model="email.value"
	placeholder="Email" 
	@input="emailVerif" />
	<div v-if="email.error" class="text-red-500 text-left p-3 pt-0">
		{{ email.error }}
	</div>
</template>

<script>
export default {
	props: ['email', 'emailVerif'],
	setup() {

	}	
}
</script>

<style>

</style>