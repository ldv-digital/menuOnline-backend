import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function isValidToken(token) {

    token = token.replace(/^Bearer\s/, '');
   
    const [isToken] = await prisma.AccessToken.findMany({
        where: { token }
    })


    console.log(isToken.createdAt);

    return isToken;
}
export default isValidToken;