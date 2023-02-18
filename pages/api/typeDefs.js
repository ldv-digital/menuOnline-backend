import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type User {
    id: ID
    email: String
    pass: String
    name: String
  }

  type login {
    email: String
    name: String
    pass: String
    token: String
  }

  type Menu {
    id: String
    userId: String
    urlLogo: String
    urlMenu: String
    nameStore: String
    isActive: String
    createdAt: String
  }

  type User {
    email: String
    pass: String
    name: String
  }

  type Return {
    status: String
    message: String
  }

  type Query {
    getUser: User
    getMenu(id: ID): Menu
  }

  type Mutation {
    getLogin(email: String, pass: String): login
    createUser(email: String, pass: String, name: String): login
    updateUser(email: String, pass: String, name: String): User
    createMenu(urlLogo: String, urlMenu: String, nameStore: String, isActive: String, createdAt: String): Menu
    updateMenu(id: String, urlLogo: String, urlMenu: String, nameStore: String, isActive: String, createdAt: String): Menu
    deleteMenu(id: String): Return
  }
`;

export default typeDefs;