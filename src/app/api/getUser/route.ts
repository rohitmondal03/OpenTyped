import { Session } from "next-auth";
import { NextResponse } from "next/server";

import { getAuthSession } from "@/lib/nextauth";


export async function GET() {
    const session: Session= await getAuthSession() as Session;

    return NextResponse.json(session.user)
}