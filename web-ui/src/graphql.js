import { gql } from "@apollo/client";

export const CREATE_BOOK_MUTATION = gql`
  mutation Mutation($title: String, $year: Int) {
    create(title: $title, year: $year) {
      id
      title
      year
    }
  }
`;

export const BOOKS_QUERY = gql`
  query Books {
    books {
      title
      year
      id
    }
  }
`;
export const DELETE_BOOK_MUTATION = gql`
  mutation Mutation($id: ID) {
    delete(id: $id)
  }
`;
export const EDIT_BOOK_MUTATION = gql`
  mutation Mutation($id: ID, $title: String, $year: Int) {
    edit(id: $id, title: $title, year: $year) {
      id
      title
      year
    }
  }
`;
