import { authOptions } from "@/lib/nextauth"
import { getServerSession } from "next-auth"

const Projects= async () => {
    const session= await getServerSession(authOptions)

    console.log(session?.user)

    return (
        <section>
            Projects
        </section>
    )
}

export default Projects;