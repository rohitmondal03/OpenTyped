import Link from "next/link";
import { GithubIcon } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";
import { socialProfileData } from "@/data/socialProfils";


export default function Footer() {
    return (
        <footer className="bg-zinc-900 text-white dark:bg-zinc-200 dark:text-black text-center py-11 flex flex-row items-center justify-around">
            <div className="space-y-6">
                <div>
                    <h1 className="text-2xl font-bold">Made with ❤️ by</h1>
                    <Link
                        href={`https://portfolio-ten-virid-46.vercel.app`}
                        target="_blank"
                        className="logo text-3xl text-red-500 underline transition duration-200 ease-out hover:text-amber-500"
                    >
                        @rohit_mondal
                    </Link>
                </div>

                <Separator orientation="horizontal" className="h-1" />

                <div className="flex flex-row items-center justify-evenly w-full">
                    {socialProfileData.map((data) => (
                        <Link
                            key={data.title}
                            href={data.link}
                            target="_blank"
                            className="border-2 p-2 rounded-full transition hover:scale-110"
                        >
                            <data.logo />
                        </Link>
                    ))}
                </div>
            </div>

            <div className="w-[50vw] space-y-5">
                <p className="text-lg">Join OpenTyped today and become a part of a dynamic ecosystem where open source projects and passionate individuals come together to shape the future of technology. Start exploring, contributing, and connecting with the global open source community. Let's build a better world through open source!</p>

                <Separator orientation="horizontal" className="h-1" />

                <div className="space-y-3">
                    <p className="font-bold text-2xl">Contributions to OpenTyped are welcomed.</p>

                    <Button variant={"ghost"} className="font-thin border">
                        Github<GithubIcon className="ml-2" />
                    </Button>
                </div>
            </div>
        </footer>
    )
}