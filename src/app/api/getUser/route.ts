import { NextRequest, NextResponse } from "next/server";
import { Session } from "next-auth";

import { getAuthSession } from "@/lib/nextauth";


export async function GET() {
    const session: Session | null = await getAuthSession();

    // Get user
    const user: Session["user"] | undefined = session?.user;

    return NextResponse.json(user)
}