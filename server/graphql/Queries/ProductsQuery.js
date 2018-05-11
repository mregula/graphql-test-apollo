import Db from '../../db/db';
import ProductType from '../Types/ProductType';

import {
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull
} from 'graphql';

export const ProductsQuery = {
  type: new GraphQLList(ProductType),
  args: {
    id: {
      type: new GraphQLList(GraphQLInt),
    },
    name: {
      type: GraphQLString
    }
  },
  resolve(parentValue, args) {
    return Db.models.product.findAll({where: args});
  }
};

export const ProductQuery = {
  type: ProductType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
  resolve(parentValue, args) {
    return Db.models.product.findOne({where: args});
  }
};