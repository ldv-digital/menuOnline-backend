import { ApolloServer } from "apollo-server-micro";
import getIdToken from './getIdToken';
import getMenu from './resolvers/getMenu';
import getLogin from './resolvers/getLogin';
import createUser from './resolvers/createUser';
import updateUser from './resolvers/updateUser';
import createMenu from './resolvers/createMenu';
import deleteMenu from './resolvers/deleteMenu';
import updateMenu from './resolvers/updateMenu';
import listMenu from './resolvers/listMenu';
import getUser from './resolvers/getUser';
import typeDefs from './typeDefs';
import NextCors from 'nextjs-cors';

const resolvers = {
    Query: {
        getUser: (parent, args, context, info) => {
            return getUser(parent, args, context, info);
        },
        getMenu: (parent, args, context, info) => {
            return getMenu(parent, args, context, info);
        },
        listMenu: (parent, args, context, info) => {
            return listMenu(parent, args, context, info);
        },
    },
    Mutation: {
        getLogin: (parent, args, context, info) => {
            return getLogin(parent, args, context, info);
        },
        createUser: (parent, args, context, info) => {
            return createUser(parent, args, context, info);
        },
        updateUser: (parent, args, context, info) => {
            return updateUser(parent, args, context, info);
        },
        createMenu: (parent, args, context, info) => {
            return createMenu(parent, args, context, info);
        },
        updateMenu: (parent, args, context, info) => {
            return updateMenu(parent, args, context, info);
        },
        deleteMenu: (parent, args, context, info) => {
            return deleteMenu(parent, args, context, info);
        },
    },
};

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
        const token = req.headers.authorization || '';
        const idUserToken = await getIdToken(token);

        return { idUserToken };
    },
});

const startServer = apolloServer.start();

export default async function handler(req, res) {

    await NextCors(req, res, {
        methods: ['POST'],
        origin: '*',
        optionsSuccessStatus: 200,
    });

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