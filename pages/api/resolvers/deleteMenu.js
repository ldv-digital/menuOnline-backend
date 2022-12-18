import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function deleteMenu(parent, args, context, info) {
    let menu = { status: 0, message: "Error ao deletar" };
    const userId = parseInt(context?.idUserToken);
    const id = parseInt(args?.id);

    try {
        if (!userId) return [];

        const { count } = await prisma.Menu.deleteMany({
            where: { id, userId }
        })

        if (parseInt(count)) {
            menu.status = 1;
            menu.message = "Menu deletado com sucesso!";
        }
    }
    catch (err) {
        menu.message = err;
    }

    return menu;
}

export default deleteMenu;