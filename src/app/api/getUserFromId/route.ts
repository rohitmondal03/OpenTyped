import { NextRequest, NextResponse } from "next/server";
import { User } from "@prisma/client";

import { prisma } from "@/lib/db";


export async function POST(request: NextRequest) {
    const { userId } = await request.json();

    const data: User = await prisma.user.findUnique({
        where: {
            id: userId
        }
    }) as User

    return new NextResponse(data.name);
}