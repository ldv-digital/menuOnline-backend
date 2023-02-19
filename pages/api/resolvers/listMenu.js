import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function listMenu(parent, args, context, info) {
    const userId = parseInt(context?.idUserToken);
    if (!userId) return [];
    
    const users = await prisma.Menu.findMany({
        where: { userId }
    })

    return users;
}
export default listMenu;