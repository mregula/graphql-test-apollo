import Db from '../../db/db';
import CommentType from './CommentType';

import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from 'graphql';

const ProductType = new GraphQLObjectType({
  name: 'Product',
  description: 'This represents a Product',
  fields: () => ({ //arrow function which returns object with fields
    id: {
      type: GraphQLInt,
      /*resolve(product) {
        return product.id
      }*/
    },
    name: {
      type: GraphQLString,
      /*resolve(product) {
        return product.name
      }*/
    },
    sku: {
      type: GraphQLString,
      /*resolve(product) {
        return product.sku
      }*/
    },
    comments: {
      type: new GraphQLList(CommentType),
      /*args: {
        likes: {
          type: new GraphQLList(GraphQLString)
        }
      },*/
      resolve(parentValue, args) {
        return Db.models.comment.findAll({where: {...args, productId: parentValue.id}});
        //return parentValue.getContents(); //parentValue is an instance of
      }
    }
  })
});

export default ProductType;