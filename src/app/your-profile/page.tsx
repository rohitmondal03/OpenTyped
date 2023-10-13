import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Session } from "next-auth";
import { Project } from "@prisma/client";

import { getAuthSession } from "@/lib/nextauth"
import { prisma } from "@/lib/db";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";


export default async function ProfilePage() {
    const session: Session | null = await getAuthSession();

    // get user
    const user = session?.user;
    // console.log(user)

    // get users projects
    const usersProjects = await prisma.project.findMany({
        where: {
            userId: user?.id
        }
    })

    if (!user) {
        redirect("/api/auth/signin")
    }


    return (
        <section className="py-20">
            <div className="py-20 flex flex-row items-center justify-center gap-x-64">
                <Image
                    src={user?.image as string}
                    width={400}
                    height={400}
                    placeholder="blur"
                    blurDataURL={user?.image as string}
                    alt="Opentyped user profile image"
                    className="rounded-[15%] shadow-[20px_20px_15px] dark:shadow-slate-700 shadow-black transition-all duration-200 ease-out hover:-rotate-12 hover:scale-110 hover:shadow-[0px_0px_0px]"
                />

                <div className="space-y-7">
                    <div>
                        <Label htmlFor="">Name:</Label>
                        <h1 className="text-4xl font-bold">{user?.name}</h1>
                    </div>

                    <div>
                        <Label>Email:</Label>
                        <p className="text-xl dark:text-zinc-300">{user?.email}</p>
                    </div>

                    <Separator orientation="horizontal" className="h-[10px] bg-zinc-700 dark:bg-zinc-500" />

                    <div className="space-x-3">
                        <Button variant={"destructive"}>Delete user</Button>
                        <Button variant={"outline"}>Edit info</Button>
                    </div>
                </div>
            </div>

            <Separator orientation="horizontal" className="h-2" />

            <div className="py-20 space-y-12">
                <h1 className="text-6xl text-center font-bold text-slate-600 dark:text-gray-200">Your contributed <br /> <span className="text-rose-500 underline">Projects</span></h1>

                <div className="px-10 flex flex-row flex-wrap items-center justify-center gap-5">
                    {usersProjects.map((project: Project) => (
                        <Link
                            href={`/projects/${project.id}`}
                            key={project.id}
                        >
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
            </div>
        </section>
    )
}
