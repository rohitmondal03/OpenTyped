"use client"

import { redirect } from "next/navigation";
import { ChangeEvent, useEffect, useState, useRef } from "react";
import { User } from "@prisma/client";

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
import { submitNewProject } from "@/actions/submitProject";
import SubmitBtn from "./submit-btn";


export default function AddNewProjectForm() {
  const formRef = useRef<HTMLFormElement>(null)

  const [user, setUser] = useState<User>()
  const [enteredData, setEnteredData] = useState<ProjectEntryType>({
    owner_name: "",
    title: "",
    description: "",
    github_link: "",
    userId: "",
  });


  // API call to get user info
  useEffect(() => {
    async function getUser() {
      await fetch("/api/getUser")
        .then((data) => data.json())
        .then((data) => { setUser(data) })
        .catch((error) => console.error("Error getting user", error))
    }
    getUser();
  }, [user])

  useEffect(() => {
    setEnteredData(prev => ({ ...prev, userId: user?.id as string }))
  }, [user])



  return (
    <Card className="w-[95%] sm:w-[85%] md:w-2/5 mx-auto my-[4rem] border-2 border-slate-800 dark:border-zinc-300">
      <form
        ref={formRef}
        action={async () => {
          await submitNewProject(enteredData)
          redirect("/projects")  // to redirect to projects page after adding the project
        }}
      >
        <CardHeader className="space-y-3">
          <CardTitle>Publish a new Project 🚀</CardTitle>

          <CardDescription>
            A place where you can add new Open-source projects to our Database and showcase it to the world
          </CardDescription>

          <Alert>
            <AlertTitle className="text-red-500">⚠️ Remember !</AlertTitle>
            <AlertDescription className="text-muted-foreground">
              Please ensure that you write correct name of owner / developer / organization of the project that you are adding in. Credits must be given who have made and maintaining the project.
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
                setEnteredData(prev => ({ ...prev, title: e.target.value }))
              }}
            />
          </div>

          <div>
            <Label htmlFor="project-owner">Owner / Developer / Organization of Project</Label>
            <Input
              id="project-owner"
              placeholder="Enter name of owner of project"
              type="text"
              required
              autoComplete="off"
              value={enteredData?.owner_name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setEnteredData(prev => ({ ...prev, owner_name: e.target.value }))
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
                setEnteredData(prev => ({ ...prev, github_link: e.target.value }))
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
                setEnteredData(prev => ({ ...prev, description: e.target.value }))
              }}
            />
          </div>
        </CardContent>

        <CardFooter>
          <SubmitBtn />
        </CardFooter>
      </form>
    </Card>
  )
}