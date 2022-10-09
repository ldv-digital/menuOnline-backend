import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function createUser(parent, args, context, info) {

    const pass = args.pass;

    const user = await prisma.user.create({
        data: {
            ...args,
            pass
        },
    })

    return user;
}

export default createUser;