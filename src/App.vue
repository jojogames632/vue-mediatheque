<template>
  <component :is="componentName"></component>
  <router-view class="font-[Montserrat]"/>
  <Footer />
</template>

<script>
import PublicNav from './components/Shared/PublicNav.vue'
import ProtectedNav from './components/Shared/ProtectedNav.vue'
import Footer from './components/Shared/Footer.vue'

export default {
  components: {
    PublicNav,
    ProtectedNav,
    Footer
  },
  computed: {
    componentName() {
      return this.$store.state.user.id > 0 ? ProtectedNav : PublicNav
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin-bottom: 85px;
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
