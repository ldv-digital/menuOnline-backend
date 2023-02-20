import { PrismaClient } from '@prisma/client'
import md5 from 'md5'

const prisma = new PrismaClient();

async function updateUser(parent, args, context, info) {
    let data = {};
    const userId = parseInt(context?.idUserToken);
    if (!userId) return [];

    const passEncrypted = (args?.pass && args?.pass != undefined ? md5(args.pass) : false);


    if (args?.pass) {
        data.pass = md5(args.pass);
    }

    if (args?.email) {
        data.email = args.email;
    }

    if (args?.name) {
        data.name = args.name;
    }

    const user = await prisma.user.update({
        where: {
            id: userId,
        },
        data,
    })

    return user;
}

export default updateUser;