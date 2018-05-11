import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchProduct from '../queries/fetchProduct';
import CommentList from './CommentList';
import CommentCreate from './CommentCreate';

class ProductDetail extends Component {
  render() {
    const { product } = this.props.data;
    if (!product) {
      return <div>Loading...</div>;
    }

    return(
      <div>
        <Link to="/">Back</Link>
        <h3>{product.name}</h3>
        <h4>Comments:</h4>
        <CommentList comments={product.comments} />
        <CommentCreate productId={this.props.params.id}/>
      </div>
    );
  }
}

export default graphql(fetchProduct, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(ProductDetail);
