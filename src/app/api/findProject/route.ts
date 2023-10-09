import { NextRequest, NextResponse } from "next/server";
import { Project } from "@prisma/client";

import { prisma } from "@/lib/db";


export async function POST(request: NextRequest) {
    const { userId: id } = await request.json();

    const data: Project = await prisma.project.findUniqueOrThrow({
        where: {
            id: id
        }
    })

    const {title, description, github_link, userId, owner_name}= data

    console.log(data)
    return NextResponse.json({title, description, github_link, userId, owner_name});
}