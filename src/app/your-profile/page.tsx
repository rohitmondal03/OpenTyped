import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { getAuthSession } from "@/lib/nextauth"
import { Session } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";


export default async function ProfilePage() {
    const session: Session | null = await getAuthSession();

    // get user
    const user = session?.user;
    console.log(user)

    if (!user) {
        redirect("/api/auth/signin")
    }

    return (
        <section className="py-20 flex flex-row items-center justify-center gap-x-64">
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
        </section>
    )
}
