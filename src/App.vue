<template>
  <nav class="flex border-b border-b-green-700 mb-16">
    <div class="flex-1 text-left hidden md:block">Médiathèque</div>
    <div class="flex-1 flex justify-between text-left">
      <router-link to="/">Accueil</router-link>
      <div>
        <router-link to="/register" class="mr-12">Inscription</router-link>
        <router-link to="/login">Connexion</router-link>
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 20px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
