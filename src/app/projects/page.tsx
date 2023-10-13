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
import { revalidatePath } from "next/cache"


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
            <h1 className="text-6xl font-bold text-amber-400"><span className="underline">Projects</span> 📔</h1>

            {allProjects.length <= 0 ? (
                <h1>No projects</h1>
            ) : (
                <div className="flex flex-row items-center justify-center mt-20 gap-7 flex-wrap">
                    {allProjects.map((project: Project) => (
                        <Link key={project.id} href={`/projects/${project.id}`}>
                            <Card className="max-w-md transition-all duration-300 hover:scale-105 hover:border hover:border-black dark:hover:border-white">
                                <CardHeader>
                                    <CardTitle className="text-3xl underline">{project.title}</CardTitle>
                                    <CardDescription className="text-lg leading-snug">{project.description}</CardDescription>
                                </CardHeader>

                                <CardContent>
                                    <p className="text-gray-500 dark:text-gray-300 font-bold">Owner / Developer -</p>
                                    <p className="text-lg italic underline">{project.owner_name}</p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            )}
        </section>
    )
}