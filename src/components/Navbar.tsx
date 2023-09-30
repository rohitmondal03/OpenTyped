import Link from "next/link";
import { DefaultSession } from "next-auth";

import { ModeToggle } from "@/components/theme/mode-toggle";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import Logo from "./logo";


type userType = {
    name: string
    image: string
}

export default async function Navbar({ session }: { session: DefaultSession | null }) {

    // getting the session details;
    let sessionUser;

    // user image
    let userImage: string | null;

    // Getting the first char of name
    let firstCharOfUserName: string | null;

    if (session) {
        sessionUser = session?.user as userType;
        userImage = session.user?.image as string;
        firstCharOfUserName = sessionUser.name.charAt(0)
    } else {
        sessionUser = null;
        userImage = null;
        firstCharOfUserName = null
    }


    return (
        <nav className="hidden md:flex flex-row items-center justify-around py-8">
            <Link href={`/`} className="flex flex-row gap-x-3 items-center">
                <Logo />
                <h1 className="text-4xl cursor-pointer">OpenTyped</h1>
            </Link>

            <div className="flex flex-row gap-x-3">
                <ModeToggle />

                {session ? (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Avatar>
                                <AvatarImage src={userImage as string} alt="image" />
                                <AvatarFallback>{firstCharOfUserName}</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent className="py-4 space-y-4">
                            <DropdownMenuGroup>
                                <h1 className="text-lg">Welcome, <span className="font-bold">{sessionUser?.name}</span></h1>
                            </DropdownMenuGroup>

                            <DropdownMenuSeparator className="h-[1px] bg-black dark:bg-zinc-500" />

                            <DropdownMenuGroup className="flex flex-col gap-y-3 items-center justify-center">
                                <Link href={"/add-new-project"}>
                                    <Button variant={"link"} className="border-2 border-zinc-600">Add a new Project</Button>
                                </Link>

                                <Link href={"/api/auth/signout"}>
                                    <Button variant={"destructive"}>SignOut</Button>
                                </Link>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                ) : (
                    <Link href={`/api/auth/signin`}>
                        <Button>Sign In</Button>
                    </Link>
                )}

                <Link href={`/projects`}>
                    <Button>Projects</Button>
                </Link>
            </div>
        </nav>
    );
}
