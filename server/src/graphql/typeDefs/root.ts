import { gql } from "apollo-server-express";

const rootDefs = gql`
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }

  type Subscription {
    _: String
  }
`;

export { rootDefs }
