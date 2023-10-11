import Link from "next/link"
import { getServerSession } from "next-auth"
import { Project } from "@prisma/client"

import { prisma } from "@/lib/db"
import { authOptions } from "@/lib/nextauth"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"


export default async function Projects ()  {
    const session = await getServerSession(authOptions)

    // find all projects
    const allProjects = await prisma.project.findMany();


    return (
        <section className="flex flex-col items-center justify-center py-20">
            <h1 className="text-6xl font-bold text-amber-500 underline">Projects</h1>

            {allProjects.length <= 0 ? (
                <h1>No projects</h1>
            ) : (
                <div className="flex flex-row items-center justify-center mt-20 gap-7 flex-wrap">
                    {allProjects.map((project: Project) => (
                        <Link key={project.id} href={`/projects/${project.id}`}>
                            <Card className="max-w-md transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black">
                                <CardHeader>
                                    <CardTitle className="text-3xl underline">{project.title}</CardTitle>
                                    <CardDescription className="text-lg leading-snug">{project.description}</CardDescription>
                                </CardHeader>

                                <CardContent>
                                    <p>Owner / Developer: {project.owner_name}</p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            )}
        </section>
    )
}