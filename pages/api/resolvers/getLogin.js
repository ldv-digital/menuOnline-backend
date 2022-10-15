import { PrismaClient } from '@prisma/client'
import md5 from 'md5'

const prisma = new PrismaClient();

async function getLogin(parent, args, context, info) {

    let getLogin = {
        "token": null,
        "email": null,
        "name": null
    }

    const { email, pass } = args;

    const [users] = await prisma.user.findMany({
        where: { email }
    })

    const dateNow = Date.now();

    const token = (users?.pass == md5(pass) ? md5(dateNow) : null);

    if (token) {
        const idUser = users.id;
        await prisma.AccessToken.deleteMany({ where: { idUser } })
        await prisma.AccessToken.create({ data: { token, idUser } })
        getLogin = {
            ...users,
            token
        }
    }

    return getLogin;
}
export default getLogin;