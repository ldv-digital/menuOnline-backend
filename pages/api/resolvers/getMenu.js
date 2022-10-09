
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function teste() {


    const users = await prisma.user.findMany({
        // Returns all user fields
        include: {
            posts: {
                select: {
                    title: true,
                },
            },
        },
    })


    return users[0].name??'teste'
}



const getMenu = {
    id: "getLuan 123",
    teste: teste()
}

export default getMenu;