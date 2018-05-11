import { ProductQuery, ProductsQuery } from './ProductsQuery';
import { CommentQuery, CommentsQuery } from './CommentsQuery';

import {
  GraphQLObjectType,
} from 'graphql';

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: "This is a root query",
  fields: () => {
    return {
      products: ProductsQuery,
      product: ProductQuery,
      comments: CommentsQuery,
      comment: CommentQuery
    }
  }
});

export default RootQuery;