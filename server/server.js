import express from 'express';
import expressGraphQL from 'express-graphql';
import schema from './graphql/schema';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
  schema, //schema: schema - ES6 syntax
  graphiql: true,
  pretty: true //If true, any JSON response will be pretty-printed.
}));

import webpackMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.js';
app.use(webpackMiddleware(webpack(webpackConfig)));

app.listen(4000, () => {
  console.log("LISTENING");
});