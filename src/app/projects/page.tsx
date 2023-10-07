import { useEffect } from "react"
import { getServerSession } from "next-auth"

import { prisma } from "@/lib/db"
import { authOptions } from "@/lib/nextauth"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"


const Projects = async () => {
    const session = await getServerSession(authOptions)
    console.log("Projects", session?.user)

    const allProjects = await prisma.project.findMany({
        where: {
            uploaderId: session?.user.id
        }
    });
    console.log(allProjects)


    return (
        <section className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-5xl font-bold">Projects</h1>

            <div>
                {allProjects.length <= 0 ? (
                    <h1>No projects</h1>
                ) : (
                    allProjects.map((data) => (
                        <Card>
                            <CardHeader>
                                <CardTitle>{data.title}</CardTitle>
                            </CardHeader>

                            <CardContent>
                                <CardDescription>{data.description}</CardDescription>
                            </CardContent>

                            <CardFooter>
                                Github: {data.github_link}
                                Made by: {data.owner_name}
                            </CardFooter>
                        </Card>
                    ))
                )}
            </div>
        </section>
    )
}

export default Projects;