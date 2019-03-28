<template>
  <section class="stats" v-if="this.$store.state.products.length">
    <stat label="posts" :count="posts"/>
    <stat label="votes" :count="votes"/>
    <stat label="comments" :count="comments"/>
    <stat label="makers" :count="makers"/>
  </section>
</template>

<script>
import Stat from './Stat.vue'

export default {
  components: {
    Stat,
  },
  computed: {
    posts() {
      return this.$store.state.products.length
    },
    votes() {
      return this.$store.state.products.reduce((result, product) => result + product.votes_count, 0)
    },
    comments() {
      return this.$store.state.products.reduce((result, product) => result + product.comments_count, 0)
    },
    makers() {
      return this.$store.state.products.reduce((result, product) => result + product.makers_count, 0)
    },
  },
}
</script>

<style lang="scss" scoped>
.stats {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 28px 0 40px;
}
</style>
