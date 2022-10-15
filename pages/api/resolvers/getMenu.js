import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function getMenu(parent, args, context, info) {
    const id = parseInt(args.id);

    const [menu] = await prisma.Menu.findMany({
        where: { id }
    })

    return menu;
}
export default getMenu;