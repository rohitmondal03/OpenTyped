import { getAuthSession } from "@/lib/nextauth"
import { redirect } from "next/navigation";

export default async function AddNewProjectLayout({children} : {children: any}) {
    const session = await getAuthSession();

    // get user
    const user = session?.user;

    // console.log(user)
    if (!user) {
        redirect("/projects")
    }

    return (
        <section>
            {children}
        </section>
    )
}