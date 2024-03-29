"use client"

import Link from "next/link";
import { useSession } from "next-auth/react";
import { User } from "lucide-react"

import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logo from "../logo";
import NavbarDropdown from "../navbar-dropdown";


export default function Navbar() {
  const { data: session } = useSession();


  return (
    <nav className="flex flex-row items-center justify-between px-3 sm:px-6 md:px-0 md:justify-around py-4 sm:py-8">
      <Link href={`/`} className="flex flex-row gap-x-1 sm:gap-x-3 items-center justify-center">
        <Logo />
      </Link>


      <div className="hidden md:flex md:flex-row md:items-center md:gap-x-6">
        {session?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer transition-all duration-300 ease-out hover:rotate-12 hover:scale-125">
                <AvatarImage src={session.user.image as string} alt="image" />
                <AvatarFallback>
                  {session.user.name?.toUpperCase().charAt(0)}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="py-4 space-y-4">
              <DropdownMenuGroup>
                <h1 className="text-lg text-center">
                  <span className="font-bold">{session.user.name}</span>
                </h1>
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
          <Link
            href={"/api/auth/signin"}
            className={cn(buttonVariants({
              variant: "default"
            }))}
          >
            Sign In
          </Link>
        )}

        <Link
          href={"/projects"}
          className={cn(buttonVariants({
            variant: "default"
          }))}
        >
          Projects
        </Link>

        {session ? (
          <Link
            href={"/add-new-project"}
            className={cn(buttonVariants({
              variant: "default"
            }))}
          >
            Add Project
          </Link>
        ) : (
          null
        )}

        <ModeToggle />
      </div>

      <div className="flex flex-row items-center justify-center gap-x-3 sm:gap-x-8 md:hidden">
        <ModeToggle />
        <NavbarDropdown />
      </div>
    </nav>
  );
}