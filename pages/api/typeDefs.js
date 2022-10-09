import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type User {
    id: ID
    email: String
  }

  type login {
    email: String
    name: String
    pass: String
    token: String
  }

  type createUser {
    email: String
    pass: String
    name: String
  }

  type Query {
    getUser(id: ID): User
    getMenu: User
  }

  type Mutation {
    getLogin(email: String, pass: String): login
    createUser(email: String, pass: String, name: String): createUser
  }
`;
export default typeDefs;