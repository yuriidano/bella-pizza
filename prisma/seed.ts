import { hashSync } from "bcrypt-ts";

import { prisma } from "./prisma-client";
import { categories } from "./constants";



async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: 'User', 
                email: 'ccc', 
                password: hashSync('111111', 10),
                verified: new Date(),
                role: "USER"
            },
                        {
                fullName: 'Admin', 
                email: 'ccc', 
                password: hashSync('111111', 10), 
                verified: new Date(),
                role: "ADMIN"
            }
        ]
    })
    await prisma.category.createMany({
        data: categories
    })
    
}

async function doun() {
     //повністю очищає таблицю User, видаляючи всі записи.  обнуляє значення автоінкрементних полів. видаляє всі залежні записи в інших таблицях, якщо є зовнішні ключі
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`; 
}

async function main() {
    try {
       doun()
       up() 
    } catch (e) {
        console.log(e);
    }
    
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })