import Link from "next/link"
import { getServerSession } from "next-auth"
import { Project } from "@prisma/client"

import { prisma } from "@/lib/db"
import { authOptions } from "@/lib/nextauth"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"


const Projects = async () => {
    const session = await getServerSession(authOptions)
    console.log("Projects", session?.user)

    const allProjects = await prisma.project.findMany();
    console.log("Projects lists in db", allProjects)


    return (
        <section className="flex flex-col items-center justify-center py-32">
            <h1 className="text-5xl font-bold">Projects</h1>

            {allProjects.length <= 0 ? (
                <h1>No projects</h1>
            ) : (
                <div className="flex flex-row items-center mt-20 px-24 gap-7 flex-wrap">
                    {allProjects.map((project: Project) => (
                        <Card key={project.id} className="w-fit">
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription>{project.description}</CardDescription>
                            </CardHeader>

                            <CardContent>
                                <p>Owner: {project.owner_name}</p>
                            </CardContent>

                            <CardFooter>
                                <Link href={project.github_link} className="text-muted-foreground underline">Gihub Link</Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            )}
        </section>
    )
}

export default Projects;