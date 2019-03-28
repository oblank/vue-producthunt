const { RESTDataSource } = require('apollo-datasource-rest');

class ProductHuntAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.PRODUCT_HUNT_API_URL;
  }

  willSendRequest(request) {
    request.headers.set(
      'Authorization',
      'Bearer ' + process.env.PRODUCT_HUNT_DEVELOPER_TOKEN
    )
  }

  async getProducts(daysAgo) {
    const query = daysAgo ? `posts?days_ago=${daysAgo}` : 'posts'
    return this.get(query);
  }
}

module.exports = ProductHuntAPI
