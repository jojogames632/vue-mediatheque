<template>
	<nav class="flex border-b border-b-green-700 fixed top-0 w-full bg-white z-10">
		<div class="flex-1 text-left hidden md:block">Médiathèque</div>
		<div class="flex-1 flex justify-between text-left">
			<router-link to="/">Accueil</router-link>
			<div>
				<router-link to="/register" class="mr-12">Inscription</router-link>
				<router-link to="/login">Connexion</router-link>
			</div>
		</div>
  </nav>
</template>