import Link from "next/link";
import { DefaultSession } from "next-auth";

import { ModeToggle } from "@/components/theme/mode-toggle";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Logo from "./logo";


type userType= {
    name: string
    image: string
}

export default async function Navbar({ session }: { session: DefaultSession | null }) {
    const { image, name } = session?.user as userType;

    // Getting the first char of name
    const firstCharOfUserName: string= name.charAt(0);


    return (
        <nav className="hidden md:flex flex-row items-center justify-around py-8">
            <Link href={`/`} className="flex flex-row gap-x-3 items-center">
                <Logo />
                <h1 className="text-4xl cursor-pointer">OpenTyped</h1>
            </Link>

            <div className="flex flex-row gap-x-3">
                <ModeToggle />

                {session ? (
                    <Avatar>
                        <AvatarImage src={image} alt="image" />
                        <AvatarFallback>{firstCharOfUserName}</AvatarFallback>
                    </Avatar>
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
