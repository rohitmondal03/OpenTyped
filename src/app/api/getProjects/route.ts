import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/db";


export async function GET() {
    const data = await prisma.project.findMany();

    return NextResponse.json(data);
}