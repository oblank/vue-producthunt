<template>
  <section class="products container">
    <product
      v-for="product in products"
      :product="product"
      :key="product.id"
    />
  </section>
</template>

<script>
import gql from 'graphql-tag'
import Product from './Product.vue'

export default {
  components: {
    Product
  },
  watch: {
    date() {
      // Load products of the day
      this.$apollo.queries.getProducts.refetch()
    }
  },
  apollo: {
    products: {
      query: gql`query getProducts($daysAgo: Int) {
        products(daysAgo: $daysAgo) {
          id
          name
          tagline
          votes_count
          comments_count
          makers_count
          screenshot_url
          redirect_url
        }
      }`,
      variables () {
        return {
          daysAgo: parseInt(this.$store.state.date),
        }
      },
      result(products) {
        // Save products in Vuex
        this.$store.commit('changeProducts', products)
      },
    }
  }
}
</script>

<style lang="scss" scoped>
.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(313px, auto));
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-bottom: 35px;
}
</style>
