<template>
	<div class="flex flex-col justify-between shadow-md bg-gray-50 h-80 p-8 max-w-md mx-auto lg:h-[40vh] lg:max-w-lg">
		<h2 class="font-bold text-lg lg:text-xl">{{ title }}</h2>
		<slot></slot>
		<p class="text-md lg:text-xl">{{ description }}</p>
	</div>
</template>

<script>

export default {
	props: {
		title: String, 
		description: String
	}
}
</script>

<style>

</style>