import { PrismaClient } from '@prisma/client'
import md5 from 'md5'

const prisma = new PrismaClient();

async function updateUser(parent, args, context, info) {

    const userId = parseInt(context?.idUserToken);
    if (!userId) return [];

    const passEncrypted = (args?.pass && uemail != undefined ? md5(args.pass) : false);
    let data = { ...args };

    if (passEncrypted) {
        data.pass = passEncrypted;
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