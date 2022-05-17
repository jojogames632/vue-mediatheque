<template>
	<div class="shadow-md w-full p-3 mb-3 flex flex-col items-center">
		<h2 class="font-bold my-4">{{ book.title }}</h2>
		<div class="flex w-96 lg:w-[33vw] xl:w-[35vw] 2xl:w-[28vw] lg:p-6 xl:p-12">
			<div>
				<img :src="require(`@/assets/img/${book.image}`)" alt="book image" class="h-60 lg:h-32 xl:h-40 2xl:h-60 object-contain" />
			</div>
			<div class="flex flex-col text-left justify-between ml-3 lg:text-sm w-52">
				<p>{{ book.author }}</p>
				<p class="whitespace-nowrap">{{ book.type }}</p>
				<p>{{ book.pageNumber }} pages</p>
				<p>⭐⭐️⭐️⭐️⭐️ &nbsp; 4.7/5</p>
				<p v-if="!isRated" class="items-center flex">
					<input 
						type="range" 
						step="0.1"
						min="0"
						max="5"
						placeholder="Évaluez ce livre..."
						class="border mr-3" 
						v-model="rating" />
					<span>{{ rating }}</span>
					<button 
						type="button" 
						class="ml-3 p-2 rounded bg-lime-200 text-sm hover:bg-lime-500 hover:cursor-pointer" @click="rateBook(book)">Noter</button>
				</p>
				<p v-else class="text-sm">Vous avez noté ce livre {{ rating }} étoiles</p>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from '@vue/reactivity'

export default ({
	props: ['book'],
	components: {
		
	},
	setup() {
		const rating = ref(5)
		const isRated = ref(false)

		const rateBook = (book) => {
			console.log(`Vous avez noté le livre ${book.title} ${rating.value} étoiles`)
			isRated.value = true
		}
		
		return { rating, isRated, rateBook }
	}
})
</script>

<style>

</style>