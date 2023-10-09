import Link from "next/link"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { Project } from "@prisma/client"

import { prisma } from "@/lib/db"
import { authOptions } from "@/lib/nextauth"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"


const Projects = async () => {
    const session = await getServerSession(authOptions)

    const allProjects = await prisma.project.findMany();

    if (!session) {
        redirect("/api/auth/signin")
    }


    return (
        <section className="flex flex-col items-center justify-center py-20">
            <h1 className="text-6xl font-bold text-amber-500 underline">Projects</h1>

            {allProjects.length <= 0 ? (
                <h1>No projects</h1>
            ) : (
                <div className="flex flex-row items-center justify-center mt-20 px-16 gap-7 flex-wrap">
                    {allProjects.map((project: Project) => (
                        <Link href={`/projects/${project.id}`} key={project.id}>
                            <Card className="max-w-md transition-all duration-300 hover:scale-110 hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black">
                                <CardHeader>
                                    <CardTitle className="text-3xl underline">{project.title}</CardTitle>
                                    <CardDescription className="text-lg leading-snug">{project.description}</CardDescription>
                                </CardHeader>

                                <CardContent>
                                    <p>Owner / Developer: {project.owner_name}</p>
                                </CardContent>

                                <Link href={project.github_link} className="underline text-xl">
                                    <CardFooter>
                                        Github Link 🔗
                                    </CardFooter>
                                </Link>
                            </Card>
                        </Link>
                    ))}
                </div>
            )}
        </section>
    )
}

export default Projects;