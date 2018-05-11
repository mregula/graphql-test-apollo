import gql from 'graphql-tag';

export default gql`
  query ProductQuery($id: Int!) {
    product(id: $id){
      id
      name
      sku
      comments {
        id
        content
        likes
      }
    }
  }
`;