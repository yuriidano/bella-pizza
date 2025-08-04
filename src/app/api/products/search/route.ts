import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma-client";


export async function GET (req: NextRequest) {
    
    const query = req.nextUrl.searchParams.get('query') || '';


    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: query,  // поверне всі об'єкти в яких є введене значення працює як метод include
                mode: 'insensitive' // регістр не важлливий
            }
        },
        take: 5
    })

    return NextResponse.json(products)
}

