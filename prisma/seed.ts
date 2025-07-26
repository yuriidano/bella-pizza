import { hashSync } from "bcrypt-ts";

import { prisma } from "./prisma-client";
import { categories, ingredients, products } from "./constants";



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

    await prisma.ingridient.createMany({
        data: ingredients
    })

    await prisma.product.createMany({
        data: products
    })

    const pizza1 = await prisma.product.create({
        data: {
            name: "Pepperoni fresh",
            imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp',
            categoryId: 1,
            ingridient: {
                connect: ingredients.slice(0, 5)
            }
        }
    })

    const pizza2 = await prisma.product.create({
        data: {
            name: "Cheese",
            imageUrl: 'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
            categoryId: 1,
            ingridient: {
                connect: ingredients.slice(5, 10)
            }
        }
    })

    const pizza3 = await prisma.product.create({
        data: {
            name: "Chorizo fresh",
            imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp',
            categoryId: 1,
            ingridient: {
                connect: ingredients.slice(10, 40)
            }
        }
    })

    await prisma.productItem.createMany({
        data: [
            //pizza Pepperoni fresh
            {productId: pizza1.id, pizzaType: 1, size: 20, price: 245},
            {productId: pizza1.id, pizzaType: 2, size: 30, price: 345},
            {productId: pizza1.id, pizzaType: 2, size: 40, price: 564},

             //pizza Pepperoni fresh
            {productId: pizza2.id, pizzaType: 1, size: 20, price: 245},
            {productId: pizza2.id, pizzaType: 1, size: 30, price: 345},
            {productId: pizza2.id, pizzaType: 1, size: 40, price: 564},
            {productId: pizza2.id, pizzaType: 2, size: 20, price: 345},
            {productId: pizza2.id, pizzaType: 2, size: 30, price: 532},
            {productId: pizza2.id, pizzaType: 2, size: 40, price: 786},

             //pizza Pepperoni fresh
            {productId: pizza3.id, pizzaType: 1, size: 20, price: 245},
            {productId: pizza3.id, pizzaType: 2, size: 30, price: 345},
            {productId: pizza3.id, pizzaType: 2, size: 40, price: 344},

            //other products
            {productId: 1, price: 156},
            {productId: 2, price: 135},
            {productId: 3, price: 187},
            {productId: 4, price: 124},
            {productId: 5, price: 174},
            {productId: 6, price: 211},
            {productId: 7, price: 312},
            {productId: 8, price: 233},
            {productId: 9, price: 231},
            {productId: 10, price: 345},
            {productId: 11, price: 412},
            {productId: 12, price: 277},
            {productId: 13, price: 325},
            {productId: 14, price: 432},
            {productId: 15, price: 233},
            {productId: 16, price: 234},
            {productId: 17, price: 432}
        ]   
    })

}

async function doun() {
    //повністю очищає таблицю User, видаляючи всі записи.  обнуляє значення автоінкрементних полів. видаляє всі залежні записи в інших таблицях, якщо є зовнішні ключі
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`; 
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`; 
    await prisma.$executeRaw`TRUNCATE TABLE "Ingridient" RESTART IDENTITY CASCADE`; 
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`; 
    await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`; 
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