<template>
	<div class="md:border-r">
		<div class="h-96 max-h-48 md:max-h-[16rem] book-background bg-cover bg-center"></div>
		<div>
			<router-link to="/" class="flex items-center text-lg font-bold p-3 border-b hover:bg-lime-300">
				<svg class="w-9 h-9 mr-4 text-green-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
				Accueil
			</router-link>
			<router-link to="/api/books" class="flex items-center text-lg font-bold p-3 border-b hover:bg-lime-300">
				<svg class="w-9 h-9 mr-4 text-green-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path></svg>
				Livres
			</router-link>
			<router-link to="/api/add-book" class="flex items-center text-lg font-bold p-3 border-b hover:bg-lime-300">
				<svg class="w-9 h-9 mr-4 text-green-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path></svg>
				Ajouter un livre
			</router-link>
			<router-link to="/api/profil" class="flex items-center text-lg font-bold p-3 border-b hover:bg-lime-300">
				<svg class="w-9 h-9 mr-4 text-green-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
				Profil
			</router-link>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped>
	.router-link-exact-active {
		background: #D9F99D;
	}
	.book-background {
		background-image: url('../../assets/img/book-image.jpg');
	}
</style>