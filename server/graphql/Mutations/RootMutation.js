import ProductType from '../Types/ProductType';
import Db from '../../db/db';

import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLObjectType,
  GraphQLEnumType,
  GraphQLInt
} from 'graphql';
import CommentType from "../Types/CommentType";

const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  description: 'This is a root mutation',
  fields: () => {
    return {
      addProduct: {
        type: ProductType, //type of data which will return resolve function
        args: {
          name: {type: new GraphQLNonNull(GraphQLString)},
          sku: {type: GraphQLString}
        },
        resolve(parentValue, args) {
          return Db.models.product.create({...args});
        }
      },
      addComment: {
        type: ProductType,
        args: {
          content: {type: new GraphQLNonNull(GraphQLString)},
          productId: {type: new GraphQLNonNull(GraphQLInt)}
        },
        resolve(parentValue, args) {
          Db.models.comment.create({...args, likes: 0});
          return Db.models.product.findOne({where: { id: args.productId } });
        }
      },
      likeComment: {
        type: CommentType,
        args: { id: { type: GraphQLInt } },
        resolve(parentValue, { id }) {
          return Db.models.comment.update({ likes: Db.literal('likes + 1') }, { where: { id: id } }).then(() => {
            return Db.models.comment.findOne({where: { id: id } });
          });
        }
      }
    }
  }
});

export default RootMutation;