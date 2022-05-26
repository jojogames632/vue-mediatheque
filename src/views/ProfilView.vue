<template>
	<div class="md:flex mt-[65px]">
		<div v-if="$store.state.isSideNavOpen" class="w-[100vw] md:w-[27vw] lg:w-[22vw] xl:w-[16vw]">
			<SideNav />
		</div>
		<div class="md:w-[73vw] lg:w-[78vw] xl:w-[84vw]">
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