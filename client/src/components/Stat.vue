<template>
  <div class="stat">
    <p class="count" v-text="count"></p>
    <p class="label" v-text="label"></p>
  </div>
</template>

<script>
export default {
  name: 'stat',
  props: {
    count: Number,
    label: String
  }
}
</script>

<style lang="scss" scoped>
.stat {
  margin: 0 10px;

  .count {
    margin: 0 0 2px;
    color: $primary;
    font-size: 20px;
    font-weight: 500;
  }

  .label {
    margin: 0;
    color: $secondary;
    font-size: 13px;
    text-transform: uppercase;
  }
}
</style>
