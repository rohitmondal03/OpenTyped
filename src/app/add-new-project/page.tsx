import { Metadata } from "next";
import { redirect } from "next/navigation";

import { getAuthSession } from "@/lib/nextauth"
import AddNewProjectLayout from "./add-new-project-layout";
import AddNewProjectForm from "./add-project-from";


export const metadata: Metadata= ({
    title: "Add Project || OpenTyped",
    description: "Add a new project to OpenTyped.",
    keywords: ["open source", "opentyped", "projects of opentyped", "add projects in opentyped"],
    robots: "index, follow",
})

export default async function Page() {
    const session = await getAuthSession();

    // get user
    const user = session?.user;

    if (!user) {
        redirect("/api/auth/signin")
    }

    return (
        <AddNewProjectLayout>
            <AddNewProjectForm />
        </AddNewProjectLayout>
    )
}