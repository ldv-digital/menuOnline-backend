import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function createMenu(parent, args, context, info) {

    const userId = String(context?.idUserToken);
    if (!userId) return [];
    
    const menu = await prisma.Menu.create({
        data: {
            ...args,
            userId
        },
    })

    return menu;
}

export default createMenu;