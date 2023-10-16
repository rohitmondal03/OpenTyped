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

    // get user's projects
    const usersProjects = await prisma.project.findMany({
        where: {
            userId: user?.id
        }
    })

    if (!user) {
        redirect("/api/auth/signin")
    }


    return (
        <section className="py-12 md:py-20">
            <div className="py-20 flex flex-col md:flex-row items-center justify-center gap-y-20 md:gap-x-64">
                <Image
                    src={user?.image as string}
                    width={400}
                    height={400}
                    placeholder="blur"
                    blurDataURL={user?.image as string}
                    alt="Opentyped user profile image"
                    className="rounded-[15%] shadow-[20px_20px_15px] scale-90 sm:scale-100 dark:shadow-0 shadow-black md:transition-all md:duration-200 md:ease-out md:hover:-rotate-12 md:hover:scale-110 md:hover:shadow-[0px_0px_0px]"
                />

                <div className="space-y-7">
                    <div>
                        <Label htmlFor="">Name:</Label>
                        <h1 className="text-3xl sm:text-4xl font-bold">{user?.name}</h1>
                    </div>

                    <div>
                        <Label>Email:</Label>
                        <p className="text-lg sm:text-xl dark:text-zinc-300">{user?.email}</p>
                    </div>

                    <Separator orientation="horizontal" className="h-[3px] bg-zinc-700 dark:bg-white" />

                    <div className="space-x-3">
                        <Button variant={"destructive"}>Delete my Profile</Button>
                    </div>
                </div>
            </div>

            <Separator orientation="horizontal" className="h-2" />

            <div className="py-20 space-y-12">
                <h1 className="text-3xl xs:text-5xl sm:text-6xl text-center font-bold text-slate-600 dark:text-gray-200">Your contributed <br /> <span className="text-rose-500 underline">Projects</span></h1>

                <div className="px-3 xs:px-10 grid sm:grid-cols-2 md:grid-cols-3 items-center gap-7">
                    {usersProjects.map((project: Project) => (
                        <Link
                            href={`/projects/${project.id}`}
                            key={project.id}
                        >
                            <Card className="max-w-md border-black dark:border-zinc-300 transition-all duration-300 ease-out hover:scale-110 hover:shadow-zinc-900 hover:dark:shadow-zinc-400 hover:shadow-[0px_0px_50px]">
                                <CardHeader>
                                    <CardTitle className="text-3xl underline">{project.title}</CardTitle>
                                    <CardDescription className="text-lg leading-snug">{project.description}</CardDescription>
                                </CardHeader>

                                <CardContent>
                                    <p className="text-gray-500 dark:text-gray-300 font-bold">Owner / Developer -</p>
                                    <p className="text-lg underline">{project.owner_name}</p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
