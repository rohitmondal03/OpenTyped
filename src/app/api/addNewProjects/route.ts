import { NextRequest, NextResponse } from "next/server";
import { Project } from "@prisma/client";

import { prisma } from "@/lib/db";


export async function POST(request: NextRequest) {
    const body: Project = await request.json();

    const { owner_name, title, description, github_link, userId } = body

    const data= await prisma.project.create({
        data:{
            owner_name,
            title,
            description ,
            github_link,
            userId
        }
    })

    if (data) {
        return NextResponse.json(500, {})
    }
}