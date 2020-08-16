<template>
  <div>
    <div v-if="isLoggedIn" class="image-container">
      <ul>
        <img v-for="image in allImages" :key="image.id" :src="image.link" />
      </ul>
    </div>
    <h2 v-else>Please Login to get Started!</h2>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ImageList',
  computed: mapGetters(['allImages', 'isLoggedIn']),
  created() {
    return this.fetchImages()
  },
  methods: mapActions(['fetchImages']),
}
</script>

<style lang="css" scoped>
.image-container {
  column-count: 3;
  column-gap: 0;
}
img {
  max-width: 100%;
  padding: 5px;
}
</style>
