import Link from "next/link";
import { DefaultSession } from "next-auth";
import { User, Plus, Github } from "lucide-react"

import { getAuthSession } from "@/lib/nextauth";
import { ModeToggle } from "@/components/theme/mode-toggle";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Logo from "../logo";


export default async function Navbar() {
    const session: DefaultSession | null = await getAuthSession();

    // user image
    const userImage = session?.user?.image

    // user name
    const userName = session?.user?.name;

    // first char in name of user
    const firstCharOfUserName = userName?.charAt(0);


    return (
        <nav className="flex flex-row items-center justify-around py-8">
            <Link href={`/`} className="flex flex-row gap-x-3 items-center justify-center">
                <Logo />
                <h1 className="text-4xl cursor-pointer">OpenTyped</h1>
            </Link>


            <div className="flex flex-row items-center gap-x-6">
                <ModeToggle />

                {session ? (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Avatar className="cursor-pointer transition-all duration-300 ease-out hover:rotate-12 hover:scale-125">
                                <AvatarImage src={userImage as string} alt="image" />
                                <AvatarFallback>{firstCharOfUserName}</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent className="py-4 space-y-4">
                            <DropdownMenuGroup>
                                <h1 className="text-lg text-center"><span className="font-bold">{userName}</span></h1>
                            </DropdownMenuGroup>

                            <DropdownMenuSeparator className="h-[1px] bg-black dark:bg-zinc-500" />

                            <DropdownMenuGroup className="flex flex-col items-center gap-y-1 justify-center">
                                <Link href={"/your-profile"}>
                                    <DropdownMenuItem className="space-x-2">
                                        <User />
                                        <h1>Your Profile and Projects</h1>
                                    </DropdownMenuItem>
                                </Link>

                                <Link href={"/api/auth/signout"}>
                                    <DropdownMenuItem className="bg-white dark:bg-slate-950">
                                        <Button variant={"destructive"}>SignOut</Button>
                                    </DropdownMenuItem>
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

                {session ? (
                    <Link href={"/add-new-project"}>
                        <Button variant={"secondary"} className="flex gap-x-2">
                            Add Project <Plus />
                        </Button>
                    </Link>
                ) : (
                    null
                )}
            </div>
        </nav>
    );
}
