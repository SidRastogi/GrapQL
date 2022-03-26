import { createServer } from '@graphql-yoga/node';

const server = createServer({
  schema: {
    typeDefs: /* GraphQL */ `
      type Query {
        helloWorld: String
      }
    `,
    resolvers: {
      Query: {
        helloWorld: () => 'Hello Hello Hello',
      },
    },
  },
});

server.start();
