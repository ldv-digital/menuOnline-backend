import { PrismaClient } from '@prisma/client'
import md5 from 'md5'

const prisma = new PrismaClient();

async function createUser(parent, args, context, info) {

    let response = null;

    try {

        if (!args.pass) {
            return null;
        }

        const pass = md5(args.pass);
        const user = await prisma.user.create({
            data: {
                ...args,
                pass
            },
        });

        if (!user?.name) {
            return null;
        }

        const dateNow = Date.now();
        const token = md5(dateNow);
        const idUser = user.id;
        await prisma.AccessToken.create({ data: { token, idUser } });

        response = {
            ...user,
            token
        }

    } catch (err) {
        console.log(err);
        return response;
    }

    return response;
}

export default createUser;