import { gql, ApolloServer } from "apollo-server-micro";

const typeDefs = gql`
  type User {
    id: ID
    teste: String
  }

  type Query {
    getUser: User
    getLuan: User
  }
`;


const testeGraphql = {
    id: "getLuan 123",
    teste: "getLuan 123"
}

const resolvers = {
    Query: {
        getUser: () => {
            return {
                id: "Teste 123",
                teste: "Teste 123",
            };
        },
        getLuan: () => {
            return testeGraphql;
        },
    },
};

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
});

const startServer = apolloServer.start();

export default async function handler(req, res) {

    await startServer;
    await apolloServer.createHandler({
        path: "/api/graphql",
    })(req, res);
}

export const config = {
    api: {
        bodyParser: false,
    },
};