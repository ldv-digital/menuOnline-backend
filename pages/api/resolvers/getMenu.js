
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function getMenu() {

    const [users] = await prisma.user.findMany({
        where: { name: 'bob' }
    })

    return users;
}


export default getMenu();