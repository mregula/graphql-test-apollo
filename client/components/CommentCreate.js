import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class CommentCreate extends Component {

  state = {
    content: ''
  }

  onSubmit = (event) => {
    event.preventDefault();

    this.props.mutate({
      variables: {
        content: this.state.content,
        productId: this.props.productId
      }
    }).then(() => this.setState({content: ""}));
  }

  render() {
    return (
    <form onSubmit={this.onSubmit}>
      <label>Add a comment</label>
      <input
          value={this.state.content}
          onChange={ event => this.setState({content: event.target.value }) }
      />
    </form>);
  }
}

const mutation = gql`
  mutation addComment($content: String!, $productId: Int!){
    addComment(content: $content, productId: $productId){
      id
      name
      comments {
        id
        content
        likes
      }
    }
  }
`;

export default graphql(mutation)(CommentCreate);