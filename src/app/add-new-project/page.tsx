import { getAuthSession } from "@/lib/nextauth"
import { redirect } from "next/navigation";

import AddNewProjectLayout from "./add-new-project-layout";
import AddNewProjectForm from "./add-project-from";

export default async function Page() {
    const session = await getAuthSession();

    // get user
    const user = session?.user;

    // console.log(user)
    if (!user) {
        redirect("/api/auth/signin")
    }

    return (
        <AddNewProjectLayout>
            <AddNewProjectForm />
        </AddNewProjectLayout>
    )
}