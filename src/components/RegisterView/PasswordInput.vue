<template>
	<input 
	type="password"
	class="block border border-grey-light w-full p-3 rounded mb-4 border-l-8"
	:class="{ 'border-l-red-500': password.error,
						'border-l-green-500': !password.error && password.dirty }"
	name="password"
	v-model="password.value"
	placeholder="Password" 
	@input="passwordVerif" />
	<div v-if="password.error" class="text-red-500 text-left p-3 pt-0">
		{{ password.error }}
	</div>
</template>

<script>
export default {
	props: ['password', 'passwordVerif']
}
</script>