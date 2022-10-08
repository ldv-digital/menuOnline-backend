import { gql, ApolloServer } from "apollo-server-micro";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()




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


async function teste() {
    const users = await prisma.user.findMany({
        // Returns all user fields
        include: {
            posts: {
                select: {
                    title: true,
                },
            },
        },
    })

    return users.name??'teste'
}



const testeGraphql = {
    id: "getLuan 123",
    teste: teste()
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