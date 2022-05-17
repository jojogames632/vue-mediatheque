<template>
	<div class="md:flex">
		<div class="w-[100vw] md:w-[35vw] lg:w-[22vw] xl:w-[16vw]">
			<SideNav />
		</div>
		<div class="md:w-[65vw] lg:w-[78vw]">
			<input
				type="text"
				placeholder="Rechercher un livre..."
				class="border border-gray-300 rounded mt-6 text-center mx-auto"
				/>
		</div>
	</div>
</template>

<script>
import SideNav from '../components/Shared/SideNav.vue'

export default {
	components: {
		SideNav
	}
}
</script>

<style>

</style>