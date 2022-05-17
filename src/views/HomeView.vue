<template>
  <div class="md:flex">
    <div v-if="$store.state.isSideNavOpen" class="w-[100vw] md:w-[27vw] lg:w-[22vw] xl:w-[16vw]">
      <SideNav />
    </div>
    <div :class="{ 'md:w-[73vw] lg:w-[78vw] xl:w-[84vw]':  $store.state.isSideNavOpen, 'w-[100vw]': !$store.state.isSideNavOpen }">
      <img src="../assets/img/book-image.jpg" alt="book" class="max-h-[40vh] w-full object-cover mb-12" />
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0">
        <Card :title="'Découvrez des livres inspirants'" :description="'Explorez notre médiathèque remplie de dizaines de livres de genres différents qui sauront satisfaire vos désirs de savoir.'">
          <svg class="w-16 h-16 text-green-700 mx-auto my-8 lg:w-24 lg:h-24" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </Card>
        <Card :title="'Ajoutez les livres que vous aimez'" :description="'Vous ne trouvez pas votre livre préféré ? Ajoutez-le, et faites en profiter les autres.'">
          <svg class="w-16 h-16 text-green-700 mx-auto my-8 lg:w-24 lg:h-24" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path></svg>
          </Card>
        <Card :title="'Évaluez les livres'" :description="'Chaque livre peut être évalué par chaque utilisateur. Une moyenne est ensuite calculée afin de repérer les bests-sellers'">
          <svg class="w-16 h-16 text-green-700 mx-auto my-8 lg:w-24 lg:h-24" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Shared/Card.vue'
import SideNav from '../components/Shared/SideNav.vue'

export default {
  name: 'HomeView',
  components: {
    Card,
    SideNav
  }
}
</script>
