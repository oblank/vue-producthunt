// A map of functions which return data for the schema.
module.exports = {
  Query: {
    products: async (_source, { daysAgo }, { dataSources }) => {
      const result = await dataSources.productHuntAPI.getProducts(daysAgo)
      return result.posts.map(product => ({
        ...product,
        screenshot_url: product.screenshot_url['850px'],
        makers_count: product.makers.length
      }))
    }
  }
}
