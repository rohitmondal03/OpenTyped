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

export const dynamic = "auto"
export const revalidate = "true"


export const metadata: Metadata = ({
  title: "Projects || Opentyped",
  description: "List of all projects in Opentyped",
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
        <h1 className="h-[50vh] text-xl flex items-center justify-center">No projects</h1>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 items-center mt-10 md:mt-20 gap-7 px-3 sm:px-5">
          {allProjects.map((project: Project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <Card className="max-w-md text-center rounded-xl xs:text-left border-2 border-black dark:border-zinc-300 sm:dark:border-zinc-300 sm:transition-all sm:duration-300 sm:ease-out sm:shadow-zinc-900 sm:dark:shadow-zinc-200 sm:shadow-[10px_10px_5px] sm:-translate-x-2 sm:-translate-y-2 sm:hover:scale-100 hover:translate-x-0 hover:translate-y-0 hover:shadow-[0px_0px_20px] hover:round">
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