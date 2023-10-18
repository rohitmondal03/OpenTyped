import { redirect } from "next/navigation";
import { ReactNode } from "react";

import { getAuthSession } from "@/lib/nextauth"


export default async function AddNewProjectLayout(
    { children }: { children: ReactNode }
) {
    const session = await getAuthSession();

    // get user
    const user = session?.user;

    if (!user) {
        redirect("/api/auth/signin")
    }

    return (
        <section>
            {children}
        </section>
    )
}