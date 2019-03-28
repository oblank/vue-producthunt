const { gql } = require('apollo-server')

// The GraphQL schema
module.exports = gql`
  type Query {
    products(daysAgo: Int): [Product]
  }
  type Product {
    id: ID!
    name: String!
    tagline: String
    votes_count: Int
    comments_count: Int
    makers_count: Int
    makers: [Maker]
    screenshot_url: String
    redirect_url: String
  }
  type Maker {
    id: ID!
  }
`;
