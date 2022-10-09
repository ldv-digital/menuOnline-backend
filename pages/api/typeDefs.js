import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type User {
    id: ID
    email: String
  }

  type login {
    email: String
    pass: String
    token: String
  }

  type Query {
    getUser(id: ID): User
    getMenu: User
  }

  type Mutation {
    getLogin(email: String, pass: String): login
  }
`;
export default typeDefs;