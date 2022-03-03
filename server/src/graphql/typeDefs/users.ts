import { gql } from "apollo-server-express";


const userDefs = gql`
  type User {
    username: String
    email: String
    password: String
    avatar: String
    token: String
  }

  input RegisterInput {
    username: String
    email: String
    password: String
    avatar: String
  }

  input LoginInput {
    email: String
    password: String
  }

  extend type Query {
    User: User
  }

  extend type Mutation {
    registerUser(RegisterInput: RegisterInput): User
  }
`

export { userDefs }
