import Db from "../../db/db";
import CommentType from "../Types/CommentType";

import {
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from 'graphql';

export const CommentsQuery = {
  type: new GraphQLList(CommentType),
  args: {
    id: {
      type: new GraphQLList(GraphQLInt),
    },
    content: {
      type: GraphQLString
    },
    likes: {
      type: GraphQLInt
    },
  },
  resolve(parentValue, args) {
    return Db.models.comment.findAll({where: args});
  }
};

export const CommentQuery = {
  type: CommentType,
  args: {
    id: {
      type: GraphQLInt,
    }
  },
  resolve(parentValue, args) {
    return Db.models.comment.findOne({where: args});
  }
};