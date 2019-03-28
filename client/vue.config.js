module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/_fonts.scss";
          @import "@/assets/scss/_variables.scss";
        `
      }
    }
  }
};
