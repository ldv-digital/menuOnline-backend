import { ApolloServer } from "apollo-server-micro";
import getMenu from './resolvers/getMenu'
import getUser from './resolvers/getUser'
import typeDefs from './typeDefs'


const resolvers = {
    Query: {
        getUser: () => {
            return getUser;
        },
        getMenu: () => {
            return getMenu;
        },
    },
};

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
});

const startServer = apolloServer.start();

export default async function handler(req, res) {


    // const user = await prisma.user.create({
    //     data: {
    //       name: 'Bob',
    //       email: 'bob@prisma.io',
    //       posts: {
    //         create: {
    //           title: 'Hello World',
    //         },
    //       },
    //     },
    //   })
    //   console.log(user)



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