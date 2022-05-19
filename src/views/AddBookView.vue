<template>
	<div class="md:flex">
		<div v-if="$store.state.isSideNavOpen" class="w-[100vw] md:w-[27vw] lg:w-[22vw] xl:w-[16vw]">
			<SideNav />
		</div>
		<div class="md:w-[73vw] lg:w-[78vw] xl:w-[84vw]">
			<h1 class="text-xl font-bold my-6">Ajouter un livre</h1>
			<form>
				<TitleInput :title="title" :titleVerif="titleVerif" />
				<AuthorInput :author="author" :authorVerif="authorVerif" />
				<PageNumberInput :pageNumber="pageNumber" :pageNumberVerif="pageNumberVerif" />
				<TypesSelect :type="type" />
			</form>
		</div>
	</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import SideNav from '../components/Shared/SideNav.vue'
import TitleInput from '../components/Shared/TitleInput.vue'
import AuthorInput from '../components/Shared/AuthorInput.vue'
import PageNumberInput from '../components/Shared/PageNumberInput.vue'
import TypesSelect from '../components/Shared/TypesSelect.vue'

export default {
	components: {
		SideNav,
		TitleInput,
		AuthorInput,
		PageNumberInput,
		TypesSelect
	},
	setup() {
		const types = ref([
			'Développement personnel',
			'Spiritualité',
			'Alimentation',
			'Finance',
			'Productivité'
		])

		const title = ref({
			value: '',
			dirty: false,
			error: ''
		})

		const author = ref({
			value: '',
			dirty: false,
			error: ''
		})

		const pageNumber = ref({
			value: '',
			dirty: false,
			error: ''
		})

		const type = ref({
			value: '',
			dirty: false,
			error: ''
		})

		const image = ref({
			value: '',
			dirty: false,
			error: ''
		})

		const titleVerif = () => {
			if (title.value.value.length < 3 || title.value.value.length > 100) {
				title.value.error = 'Le titre doit contenir entre 3 et 100 caractères'
			}
			else {
				title.value.error = ''
			}
			title.value.dirty = true
		}

		const authorVerif = () => {
			if (author.value.value.length < 3 || author.value.value.length > 100) {
				author.value.error = 'Le nom de l\'auteur doit contenir entre 3 et 100 caractères'
			}
			else {
				author.value.error = ''
			}
			author.value.dirty = true
		}

		const pageNumberVerif = () => {
			if (pageNumber.value.value < 20 || pageNumber.value.value > 5000) {
				pageNumber.value.error = 'Le nombre de pages doit être compris entre 20 et 5000'
			}
			else {
				pageNumber.value.error = ''
			}
			pageNumber.value.dirty = true
		}

		return {
			title,
			author,
			pageNumber,
			type,
			image,
			titleVerif,
			authorVerif,
			pageNumberVerif,
		}
	}
}
</script>

<style>

</style>