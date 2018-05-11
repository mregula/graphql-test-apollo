import Db from '../../db/db';
import ProductType from './ProductType';

import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} from 'graphql';

const CommentType = new GraphQLObjectType({
  name: 'Comment',
  description: 'This is a comment of the product',
  fields: () => ({
    id: {
      type: GraphQLInt,
      /*resolve(parentValue) {
        return parentValue.id
      }*/
    },
    content: {
      type: GraphQLString,
      /*resolve(parentValue) {
        return parentValue.contentType;
      }*/
    },
    likes: {
      type: GraphQLInt
    },
    product: {
      type: ProductType,
      resolve(parentValue, args) {
        return Db.models.product.findOne({where: {id: parentValue.productId}});
      }
    }
  })
});

export default CommentType;