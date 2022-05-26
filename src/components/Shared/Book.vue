<template>
	<div class="shadow-md w-full p-3 mb-3 flex flex-col items-center">
		<h2 class="font-bold my-4">{{ book.title }}</h2>
		<div class="flex w-96 lg:w-[33vw] xl:w-[35vw] 2xl:w-[35vw] lg:p-6 xl:px-12">
			<div>
				<img :src="book.image" alt="book image" class="h-60 lg:h-32 xl:h-40 2xl:h-60 object-contain" />
			</div>
			<div class="flex flex-col text-left justify-between ml-3 lg:text-sm w-52">
				<p>{{ book.author }}</p>
				<p class="whitespace-nowrap">{{ book.type }}</p>
				<p>{{ book.pageNumber }} pages</p>
				<p>⭐⭐️⭐️⭐️⭐️ &nbsp; 4.7/5</p>
				<p v-if="!isRated" class="items-center flex">
					<Rate @rate-book="rateBook" />
				</p>
				<p v-else class="text-sm">Vous avez noté ce livre {{ note }} étoiles</p>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import Rate from './Rate.vue'

export default ({
	props: {
		book: Object
	},
	components: {
		Rate
	},
	setup() {
		const note = ref(5)
		const isRated = ref(false)

		const rateBook = (rating) => {
			note.value = rating
			isRated.value = true
		}
		
		return { note, isRated, rateBook }
	}
})
</script>

<style>

</style>