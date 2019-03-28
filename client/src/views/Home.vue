<template>
  <div>
    <headline/>
    <date/>
    <stats/>
    <products/>
  </div>
</template>

<script>
import Headline from '../components/Headline.vue'
import Date from '../components/Date.vue'
import Stats from '../components/Stats.vue'
import Products from '../components/Products.vue'

export default {
  name: 'home',
  components: {
    Headline,
    Date,
    Stats,
    Products,
  },
}
</script>
