"use client"

import { redirect } from "next/navigation";
import { User } from "@prisma/client";
import { FormEvent, useEffect, useState } from "react";
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
    const [user, setUser] = useState<User>()
    const [enteredData, setEnteredData] = useState<ProjectType>({
        description: "",
        github_link: "",
        owner_name: "",
        userId: "",
        title: ""
    });


    // API call to retrieve user info
    useEffect(() => {
        async function getUser() {
            await fetch("/api/getUser")
                .then((data) => data.json())
                .then((data) => setUser(data))
                .catch((error) => console.error("Error getting suer", error))
        }
        getUser();
    }, [])
    console.log(user)


    // Submit the entered project details
    function submitNewProject(e: FormEvent) {
        e.preventDefault();

        // to redirect to projects page after adding the project
        redirect("/projects")
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
                        />
                    </div>

                    <div>
                        <Label htmlFor="project-owner">Owner of Project</Label>
                        <Input
                            id="project-owner"
                            placeholder="Enter name of owner of project"
                            type="text"
                            required
                            autoComplete="off"
                            value={enteredData?.owner_name}
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
                        />
                    </div>
                </CardContent>

                <CardFooter className="mx-auto w-full space-x-5 font-bold">
                    <Button variant={"secondary"} type="reset">
                        Reset
                    </Button>

                    <Button type="submit" className="font-bold">
                        Add Project <PlusIcon className="ml-2 scale-90" />
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}