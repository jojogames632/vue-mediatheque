<template>
	<div class="shadow-md h-76 w-full p-3 mb-3">
		<h2 class="font-bold my-4">{{ book.title }}</h2>
		<div class="flex">
			<div>
				<img :src="require(`@/assets/img/${book.image}`)" alt="book image" class="h-60" />
			</div>
			<div class="flex flex-col text-left justify-between ml-3 py-4">
				<p>{{ book.title }}</p>
				<p>{{ book.type }}</p>
				<p>{{ book.pageNumber }} pages</p>
				<p>⭐⭐️⭐️⭐️⭐️ &nbsp; 4.7/5</p>
				<p>Évaluer ce livre</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['book']
}
</script>

<style>

</style>