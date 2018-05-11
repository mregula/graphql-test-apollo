import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class CommentList extends Component {

  onLike = (id, likes) => {
    this.props.mutate({
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        likeComment: {
          id: id,
          __typename: 'CommentType',
          likes: ++likes
        }
      }
    })
  }

  renderComments = () => {
    return  this.props.comments.map(({id, content, likes}) => {
      return (
          <li key={id} className="collection-item">
            {content}
              <div className="vote-box">
              <i
                  className="material-icons"
                  onClick={() => this.onLike(id, likes)}
              >
                thumb_up
              </i>
              {likes}
            </div>
          </li>
      )
    });
  }

  render() {
    return (
        <ul className="collection">
          {this.renderComments()}
        </ul>
    )
  }
}

const mutation = gql`
  mutation LikeComment($id: Int) {
    likeComment(id: $id) {
      id
      likes
    }
  }
`;

export default graphql(mutation)(CommentList);