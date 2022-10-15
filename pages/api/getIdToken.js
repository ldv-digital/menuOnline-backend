import { PrismaClient } from '@prisma/client'

function timeDiffMinutes(date1, date2) {
    const me = process.env.TOKEN_LIFE_MINUTES;
    const ms = Math.abs(date1 - date2);
    const m = (ms / 60000) % 60;
    if (parseInt(m) > parseInt(me)) {
        return false;
    }

    return true;
}

async function getIdToken(token) {
    if (!token) return false;

    const prisma = new PrismaClient();
    token = token.replace(/^Bearer\s/, '');
    const dateNow = Date.now();
    const [isToken] = await prisma.AccessToken.findMany({
        where: { token },
        orderBy: {
            id: 'desc',
        },
    })

    if (timeDiffMinutes(dateNow, new Date(isToken?.createdAt).getTime())) {
        return isToken?.idUser;
    }

    return '';
}

export default getIdToken;