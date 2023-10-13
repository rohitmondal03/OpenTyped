import Link from "next/link";
import { GithubIcon } from "lucide-react";

import { prisma } from "@/lib/db";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator";
import LoadingState from "@/components/loading-state";


export default async function SingleProjectPage(
    { params }: { params: { slug: string } }
) {
    const { slug } = params;

    const project = await prisma.project.findUnique({
        where: {
            id: slug
        }
    })

    if (!project) {
        return (
            <div className="flex items-center justify-center my-48 space-x-4">
                <LoadingState />
            </div>
        )
    }

    return (
        <Card className="w-[40vw] mx-auto my-24">
            <CardHeader>
                <CardTitle className="text-center text-4xl">{project?.title}</CardTitle>
                <CardDescription className="text-lg text-center">{project?.description}</CardDescription>
            </CardHeader>

            <Separator className="my-7" />

            <CardContent className="flex flex-row items-center justify-between">
                <div>
                    <h1 className="text-muted-foreground">Uploaded by:</h1>
                    <p className="text-lg ">username_here_</p>
                </div>

                <Link
                    href={`${project?.github_link}`}
                    target="_blank"
                    className="flex gap-x-2 items-center text-lg underline"
                >
                    Github Link <GithubIcon />
                </Link>
            </CardContent>
        </Card>
    )
}


export async function generateStaticParams() {
    const projects = await prisma.project.findMany();

    return projects.map((project) => ({
        slug: project.id
    }))
}