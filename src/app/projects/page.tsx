import { Metadata } from "next"
import Link from "next/link"
import { Project } from "@prisma/client"

import { prisma } from "@/lib/db"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"


export const metadata: Metadata = ({
    title: "Projects || Opentyped",
    description: "",
    keywords: ["open source", "opentyped", "projects of opentyped"],
    robots: "index, follow",
})


export default async function Projects() {

    // find all projects
    const allProjects = await prisma.project.findMany();


    return (
        <section className="flex flex-col items-center justify-center py-20">
            <h1 className="text-center text-5xl md:text-6xl font-bold text-amber-400">
                <span className="underline">Projects</span>
            </h1>

            {allProjects.length <= 0 ? (
                <h1>No projects</h1>
            ) : (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 items-center mt-10 md:mt-20 gap-7 px-3 sm:px-5">
                    {allProjects.map((project: Project) => (
                        <Link key={project.id} href={`/projects/${project.id}`}>
                            <Card className="max-w-md border-black dark:border-zinc-300 transition-all duration-300 ease-out hover:scale-110 hover:shadow-zinc-900 hover:dark:shadow-zinc-400 hover:shadow-[0px_0px_30px]">
                                <CardHeader>
                                    <CardTitle className="text-3xl underline">{project.title}</CardTitle>
                                    <CardDescription className="text-lg leading-snug">{project.description}</CardDescription>
                                </CardHeader>

                                <CardContent>
                                    <p className="text-gray-500 dark:text-gray-300 font-bold">Owner / Developer -</p>
                                    <p className="text-lg underline font-bold">{project.owner_name}</p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            )}
        </section>
    )
}