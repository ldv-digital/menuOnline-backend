import { PrismaClient } from '@prisma/client'
import md5 from 'md5'

const prisma = new PrismaClient();

async function updateUser(parent, args, context, info) {

    const userId = parseInt(context?.idUserToken);
    if (!userId) return [];

    const pass = md5(args.pass);

    const user = await prisma.user.update({
        where: {
            id: userId,
        },
        data: {
            ...args,
            pass
        },
    })

    return user;
}

export default updateUser;