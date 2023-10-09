import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/db";
import { Project } from "@prisma/client";


export async function POST(request: NextRequest) {
    const body: Project = await request.json();

    const { owner_name, title, description, github_link, userId } = body

    await prisma.project.create({
        data:{
            owner_name,
            title,
            description ,
            github_link,
            userId
        }
    })
}