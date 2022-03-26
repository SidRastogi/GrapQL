import { makeExecutableSchema } from '@graphql-tools/schema';
import {
  typeDefs as scalarTypeDefs,
  resolvers as scalarResolvers,
} from 'graphql-scalars';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

export default makeExecutableSchema({
  typeDefs: [scalarTypeDefs, typeDefs],
  resolvers: [scalarResolvers, resolvers],
});
