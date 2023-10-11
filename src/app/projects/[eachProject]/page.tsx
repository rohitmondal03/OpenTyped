"use client"

import { useParams } from "next/navigation"
import Link from "next/link";
import { useEffect, useState } from "react";
import { Project, User } from "@prisma/client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import LoadingState from "@/components/loadingState";


export default function SingleProjectPage() {
    const [project, setProject] = useState<Project>();
    const [user, setUser] = useState<User>();
    
    const params = useParams();

    // project id
    const projectId = params.eachProject;

    // get project
    useEffect(() => {
        async function getProject() {
            await fetch("/api/getEachProject", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    projectId: projectId
                })
            })
                .then((data) => data.json())
                .then((data) => setProject(data))
        }

        getProject();
    }, [])

    // console.log(project)
    const userId= project?.userId;

    // useEffect(() => {
    //     async function getUserFromId() {
    //         await fetch("/api/getUserFromId", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify({
    //                 projectId: projectId
    //             })
    //         })
    //             .then((data) => data.json())
    //             .then((data) => console.log(data))
    //     }

    //     getUserFromId();
    // }, [])

    if (!project) {
        return (
            <div className="flex items-center justify-center my-48 space-x-4">
                <LoadingState />
            </div>
        )
    } 

    return (
        <Card className="w-[45vw] mx-auto my-24">
            <CardHeader>
                <CardTitle className="text-center text-4xl">{project?.title}</CardTitle>
                <CardDescription className="text-lg">{project?.description}</CardDescription>
            </CardHeader>

            <CardContent>
                <h1>Uploaded by: Rohit</h1>

                <Link
                    href={`${project?.github_link}`}
                    target="_blank"
                >
                    Github
                </Link>
            </CardContent>
        </Card>
    )
}
