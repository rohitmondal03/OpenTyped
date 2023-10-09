"use client"

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"

import { Project, User } from "@prisma/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";


export default function ProjectPage() {
    const [project, setProject] = useState<Project>();
    // const [user, setUser]= useState<User>();
    const params = useParams();

    // get project ID
    const projectId: string = params.id as string;


    useEffect(() => {
        async function getProjectDetails() {
            const response = await fetch("/api/findProject", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: projectId
                })
            })
            const projectsDetails = await response.json();
            setProject(projectsDetails)
        }

        getProjectDetails();
    }, [projectId])


    // useEffect(() => {
    //     async function getUser() {
    //         const response= await fetch("/api/getUser",  {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify({
    //                 id : project?.userId
    //             })
    //         })
    //         const user: User= await response.json();
    //         console.log(user.name)
    //         setUser(user)
    //     }
    // }, [])


    return (
        <section className="py-20">
            <Card className="w-[30vw] m-auto text-center">
                <CardHeader>
                    <CardTitle className="text-3xl">Project Title: {project?.title}</CardTitle>
                    <CardDescription>{project?.description}</CardDescription>
                </CardHeader>

                <Separator orientation="horizontal" className="h-[1px] my-5" />

                <CardContent className="space-y-3">
                    <Link
                        href={`${project?.github_link}`}
                        target="_blank"
                        className="underline text-xl"
                    >
                        Github Link 🔗
                    </Link>

                    <h1>Project Owner: {project?.owner_name}</h1>
                </CardContent>
            </Card>
        </section>
    )
}