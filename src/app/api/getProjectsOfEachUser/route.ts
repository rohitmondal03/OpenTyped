import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/db";


export async function POST(request: NextRequest) {
    const {userId: id} = await request.json();

    const data= await prisma.project.findMany({
        where: {
            userId: id
        }
    })

    return NextResponse.json({data})
}