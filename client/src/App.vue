<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
html, body {
    background-color: $background;
}

#app {
  font-family: $font-family;
  text-align: center;
  margin-top: 35px;
}

.container {
  max-width: 980px;
  margin: 0 auto;
}
</style>
