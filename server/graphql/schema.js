import {
  GraphQLSchema
} from 'graphql';

import RootQuery from './Queries/RootQuery';
import RootMutation from './Mutations/RootMutation';

const Schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});

export default Schema;