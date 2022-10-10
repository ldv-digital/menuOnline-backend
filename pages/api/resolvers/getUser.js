import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function getUser(parent, args, context, info) {
    const id = parseInt(args.id);

    const [users] = await prisma.user.findMany({
        where: { id }
    })

    return users;
}
export default getUser;