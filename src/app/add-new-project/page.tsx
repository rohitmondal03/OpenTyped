import { redirect } from "next/navigation";
import { PlusIcon } from "lucide-react";

import { getAuthSession } from "@/lib/nextauth";
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


export default async function AddNewProject() {
    const session = await getAuthSession();

    // get user
    const user = session?.user

    if (!user) redirect("/api/auth/signin")


    function submitProject() {}


    return (
        <Card className="w-2/5 mx-auto my-[4rem]">
            <form>
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
                        />
                    </div>

                    <div>
                        <Label htmlFor="project-owner">Owner of Project</Label>
                        <Input
                            id="project-owner"
                            placeholder="Enter name of owner of project"
                            type="text"
                        />
                    </div>

                    <div>
                        <Label htmlFor="project-desc">About the project</Label>
                        <Textarea
                            id="project-desc"
                            placeholder="Write about the project !! Something like, tech stacks used, how it is beneficial, etc."
                            required
                        />
                    </div>
                </CardContent>

                <CardFooter className="mx-auto w-full">
                    <Button className="text-base font-bold">
                        Add Project <PlusIcon className="ml-2 scale-90" />
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}