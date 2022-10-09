import { PrismaClient } from '@prisma/client'
import md5 from 'md5'

const prisma = new PrismaClient();

async function createUser(parent, args, context, info) {

    const pass = md5(args.pass);

    const user = await prisma.user.create({
        data: {
            ...args,
            pass
        },
    })

    return user;
}

export default createUser;