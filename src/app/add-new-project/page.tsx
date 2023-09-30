import { redirect } from "next/navigation";
import { DefaultSession } from "next-auth";

import { getAuthSession } from "@/lib/nextauth";


export default async function AddNewProject() {
    const session: DefaultSession | null = await getAuthSession();

    // get user
    const user = session?.user;
    // console.log(user)

    if (!user) redirect("/api/auth/signin")

    return (
        <>
            signed in, now work forward
        </>
    )
}