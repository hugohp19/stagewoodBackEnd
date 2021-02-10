const { ApolloServer } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { getUserId } = require('./src/utils');
const Query = require('./src/resolvers/Query');
const Mutation = require('./src/resolvers/Mutation');
const User = require('./src/resolvers/User');
const fs = require('fs');
const path = require('path');


const resolvers = {
  Query,
  Mutation,
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, './src/schema.graphql'),
    'utf8'
  ),
  resolvers,
  introspection: true,
  playground: true,
  context: ({ req }) => {
    return {
      ...req,
      prisma,
      userId:
        req && req.headers.authorization
          ? getUserId(req)
          : null
    };
  }
});

const port = process.env.PORT || 4000;

server
  .listen(port, () => {
    console.log(`Express server is up on port ${port}`)});
  
  //   .then(({ url }) =>
  //   console.log(`Server is running on ${url}`)
  // );