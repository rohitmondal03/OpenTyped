"use client"

import { redirect, useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { User } from "@prisma/client";
import { PlusIcon } from "lucide-react";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";


type ProjectType = {
    description: string
    github_link: string
    owner_name: string
    userId: string
    title: string
};

export default function AddNewProject() {
    const router= useRouter();
    const [user, setUser] = useState<User>()
    const [enteredData, setEnteredData] = useState<ProjectType>({
        owner_name: "",
        title: "",
        description: "",
        github_link: "",
        userId: "",
    });


    // API call to retrieve user info
    useEffect(() => {
        async function getUser() {
            await fetch("/api/getUser")
                .then((data) => data.json())
                .then((data) => {setUser(data)})
                .catch((error) => console.error("Error getting user", error))
        }
        getUser();
    }, [user])

    useEffect(() => {
        setEnteredData(prev => ({...prev, userId: user?.id as string}))
    }, [user])
    

    // Submit the entered project details
    function submitNewProject(e: FormEvent) {
        e.preventDefault();

        fetch("/api/addNewProjects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(enteredData)
        })

        setEnteredData(
            {title: "", description: "", owner_name: "", github_link: "", userId: ""}
        )

        // to redirect to projects page after adding the project
        router.push("/projects")
    }


    return (
        <Card className="w-2/5 mx-auto my-[4rem]">
            <form onSubmit={submitNewProject}>
                <CardHeader className="space-y-3">
                    <CardTitle>Publish a new Project 🚀</CardTitle>

                    <CardDescription>
                        A place where you can add new Open-source projects to our Database and showcase it to the world
                    </CardDescription>

                    <Alert>
                        <AlertTitle className="text-red-500">⚠️ Remember !</AlertTitle>
                        <AlertDescription className="text-muted-foreground">
                            Please ensure that you write the name of owner of the project that you are adding in. Credits must be given who have made and maintaining the project.
                        </AlertDescription>
                    </Alert>
                </CardHeader>

                <CardContent className="space-y-5">
                    <div>
                        <Label htmlFor="project-title">Title of Project</Label>
                        <Input
                            id="project-title"
                            placeholder="Title..."
                            type="text"
                            required
                            autoComplete="off"
                            value={enteredData?.title}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                setEnteredData(prev => ({...prev, title: e.target.value}))
                            }}
                        />
                    </div>

                    <div>
                        <Label htmlFor="project-owner">Owner/Developer of Project</Label>
                        <Input
                            id="project-owner"
                            placeholder="Enter name of owner of project"
                            type="text"
                            required
                            autoComplete="off"
                            value={enteredData?.owner_name}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                setEnteredData(prev => ({...prev, owner_name: e.target.value}))
                            }}
                        />
                    </div>

                    <div>
                        <Label htmlFor="project-github-link">Github Link of Project</Label>
                        <Input
                            id="project-github-link"
                            placeholder="e.g. https://github.com/johndoe/opentyped"
                            type="text"
                            required
                            autoComplete="off"
                            value={enteredData?.github_link}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                setEnteredData(prev => ({...prev, github_link: e.target.value}))
                            }}
                        />
                    </div>

                    <div>
                        <Label htmlFor="project-desc">About the project</Label>
                        <Textarea
                            id="project-desc"
                            placeholder="Write something about project !! You can simply paste the github description of project also, only if that's relevant."
                            required
                            autoComplete="off"
                            value={enteredData?.description}
                            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                                setEnteredData(prev => ({...prev, description: e.target.value}))
                            }}
                        />
                    </div>
                </CardContent>

                <CardFooter>
                    <Button type="submit" className="font-bold">
                        Add Project <PlusIcon className="ml-2 scale-90" />
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}