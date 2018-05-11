import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link, hashHistory } from 'react-router';
import query from '../queries/fetchProducts';

class ProductCreate extends Component {
  state = {
    name: ''
  }

  onSubmit = (event) => {
    event.preventDefault(); //prevent submitting form to the backend

    this.props.mutate({
      variables: {
        name: this.state.name
      },
      refetchQueries:[{ query }]
    }).then(() => {
      return hashHistory.push('/');
    });
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a New Product</h3>
        <form onSubmit={this.onSubmit}>
          <label>Product Name:</label>
          <input onChange={event => this.setState({name: event.target.value})} value={this.state.name} />
        </form>
      </div>
    );
  }
}

const mutation = gql `
  mutation AddProduct($name: String!) {
    addProduct(name: $name) {
      id
      name
    }
  }
`;

export default graphql(mutation)(ProductCreate);