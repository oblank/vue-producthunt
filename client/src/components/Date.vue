<template>
  <select
    v-model="date"
    @change="onChange($event)"
  >
    <option
      v-for="(date, index) in dates"
      :key="index"
      :value="index"
      v-text="date"
    />
  </select>
</template>

<script>
export default {
  data() {
    return {
      date: 0,
    }
  },
  computed: {
    dates() {
      // Create list of dates
      const dates = [
        'Today',
        'Yesterday',
      ]

      for (let i = 2; i <= 30; i++) {
        dates.push(i + ' days ago');
      }

      return dates
    }
  },
  methods: {
    onChange(event) {
      // Date changed
      this.$store.commit('changeDate', event.target.value)
    }
  }
}
</script>
