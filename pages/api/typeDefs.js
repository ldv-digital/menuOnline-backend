import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type User {
    id: ID
    teste: String
  }

  type Query {
    getUser: User
    getMenu: User
  }
`;
export default typeDefs;