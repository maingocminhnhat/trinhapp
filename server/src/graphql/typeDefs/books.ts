import { gql } from 'apollo-server-express';

const bookDefs = gql`
  type Book {
    title: String,
    author: String
  }

  type Query {
    books: [Book]
  }
`

export { bookDefs };
