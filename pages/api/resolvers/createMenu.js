import { PrismaClient } from '@prisma/client'
import md5 from 'md5'

const prisma = new PrismaClient();

async function createMenu(parent, args, context, info) {

    const menu = await prisma.Menu.create({
        data: {
            ...args
        },
    })

    return menu;
}

export default createMenu;