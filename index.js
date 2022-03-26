import { createServer } from '@graphql-yoga/node';
import db from './src/db';

import schema from './src/schema';
const server = createServer({
  schema,
  context: {
    db,
  },
});

server.start();
