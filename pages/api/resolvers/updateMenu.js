import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function updateMenu(parent, args, context, info) {
    const userId = parseInt(context?.idUserToken);
    const id = parseInt(args?.id);
    delete args?.id

    if (!userId) return [];

    await prisma.menu.updateMany({
        where: {
            id,
            userId,
        },
        data: {
            ...args
        },
    })

    const [menu] = await prisma.Menu.findMany({
        where: { id, userId }
    })

    if (!menu) return [];

    return menu;
}

export default updateMenu;