import './style/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ApolloClient from 'apollo-client'; //make requests to GraphQL, store data etc...
import { ApolloProvider } from 'react-apollo'; //glue layer between React and GraphQL data

import App from './components/App';
import ProductList from './components/ProductList';
import ProductCreate from './components/ProductCreate';
import ProductDetail from './components/ProductDetail';

const client = new ApolloClient({
  dataIdFromObject: o => o.id //identifies every peace of data in apollo store (every piece of data is passed through this function)
});

const Root = () => {
  return (
      <ApolloProvider client={client}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={ProductList}/>
            <Route path="products/new" component={ProductCreate} />
            <Route path="products/:id" component={ProductDetail} />
          </Route>
        </Router>
      </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
