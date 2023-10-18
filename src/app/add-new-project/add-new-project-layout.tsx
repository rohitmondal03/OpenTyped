import { redirect } from "next/navigation";

import { getAuthSession } from "@/lib/nextauth"


export default async function AddNewProjectLayout({children} : {children: any}) {
    const session = await getAuthSession();

    // get user
    const user = session?.user;

    if (!user) {
        redirect("/projects")
    }

    return (
        <section>
            {children}
        </section>
    )
}