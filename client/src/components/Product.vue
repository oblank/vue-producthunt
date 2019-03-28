<template>
  <a :href="product.redirect_url" class="card" target="_blank">
    <div class="card-header" :style="{ 'background-image': 'url(' + product.screenshot_url + ')' }"/>
    <div class="card-body">
      <h2 v-text="product.name"/>
      <span v-text="product.votes_count + ' upvotes'"/>
      <p v-text="product.tagline"/>
    </div>
  </a>
</template>

<script>
export default {
  name: 'product',
  props: {
    product: Object,
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0,0,0,.15);
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }

  .card-header {
    background-size: cover;
    height: 140px;
  }

  .card-body {
    padding: 20px 25px;

    h2 {
      margin: 0 0 6px;
      color: $primary;
      font-size: 20px;
      font-weight: 500;
      line-height: 1.3;
      letter-spacing: -.2px;
    }

    span {
      color: #5B5B5B;
      font-size: 13px;
    }

    p {
      margin: 20px 0 10px;
      color: #333;
      font-size: 16px;
      line-height: 1.4;
    }
  }
}
</style>
