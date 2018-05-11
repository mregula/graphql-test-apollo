import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchProducts';

class ProductList extends Component {

  onProductDelete = (id) => {
    this.props.mutate({
      variables: {id}
    })
        .then(() => this.props.data.refetch());
  }

  renderProducts() {
    return this.props.data.products.map(({id, name}) => {
      return (
          <li key={id} className="collection-item">
            <Link to={`products/${id}`}>
              {name}
            </Link>
            {/*<i
                className="material-icons"
                onClick={() => this.onProductDelete(id)}
            >delete</i>*/}
          </li>
      );
    });
  }

  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <ul className="collection">
          {this.renderProducts()}
        </ul>
        <Link
            to="/products/new"
            className="btn-floating btn-large red right"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    )
  }
}

const mutation = gql`
  mutation DeleteProduct($id: ID) {
    deleteProduct(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(
  graphql(query)(ProductList)
);