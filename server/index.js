require('dotenv').config()

const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')
const ProductHuntAPI = require('./graphql/ProductHunt')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      productHuntAPI: new ProductHuntAPI()
    }
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
