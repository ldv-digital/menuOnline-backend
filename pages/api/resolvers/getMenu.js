import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function getMenu(parent, args, context, info) {
    
    const userId = context?.idUserToken;
    if (!userId) return [];
    
    const id = parseInt(args.id);

    const [menu] = await prisma.$queryRawUnsafe(
        'SELECT * FROM Menu WHERE (id = ? AND userId = ?)',
        id,
        userId
      )

    return menu;
}
export default getMenu;