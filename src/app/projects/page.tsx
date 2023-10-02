import { prisma } from "@/lib/db"
import { authOptions } from "@/lib/nextauth"
import { getServerSession } from "next-auth"
import { useEffect } from "react"

const Projects = async () => {
    const session = await getServerSession(authOptions)

    const data = await prisma.project.findMany();
    console.log(data)


    console.log("Projects", session?.user)

    return (
        <section>
            Projects
        </section>
    )
}

export default Projects;