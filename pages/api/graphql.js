import { ApolloServer } from "apollo-server-micro";
import getMenu from './resolvers/getMenu'
import getLogin from './resolvers/getLogin'
import createUser from './resolvers/createUser'
import getUser from './resolvers/getUser'
import typeDefs from './typeDefs'


const resolvers = {
    Query: {
        getUser: (parent, args, context, info) => {
            return getUser(parent, args, context, info);
        },
        getMenu: () => {
            return getMenu;
        },
    },
    Mutation: {
        getLogin: (parent, args, context, info) => {
            return getLogin(parent, args, context, info);
        },
        createUser: (parent, args, context, info) => {
            return createUser(parent, args, context, info);
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