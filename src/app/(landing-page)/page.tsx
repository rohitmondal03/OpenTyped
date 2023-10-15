import Image from 'next/image'
import Link from 'next/link'
import { Session } from 'next-auth'
import { Github, StarIcon } from 'lucide-react'

import { getAuthSession } from '@/lib/nextauth'
import { Button } from '@/components/ui/button'
import TextOpacityAnimation from './text-opacity-animations'

import img from "../../../public/img-3.jpg"


export default async function Home() {
    const session: Session | null = await getAuthSession();

    // get user data
    const user = session?.user;


    return (
        <section className="text-center">
            <div className="h-[80vh] my-5 flex flex-col gap-y-10 items-center justify-center">
                <Link
                    href={`https://github.com/rohitmondal03/opentyped`}
                    target='_blank'
                    className='logo relative text-sm border-4 w-fit border-orange-500 mx-auto px-3 py-1 rounded-3xl flex items-center gap-x-3 overflow-hidden transition-all duration-500 ease-in-out linear before:absolute before:left-0 before:-translate-x-full before:h-full before:w-full before:rounded-3xl before:bg-black hover:before:translate-x-0 before:border-white hover:text-white hover:dark:text-black hover:dark:before:bg-white hover:dark:border-white hover:border-black hover:border-4 before:-z-10 hover:shadow-[0_0_30px] hover:shadow-orange-400'
                >
                    Give a star on Github <Github />
                </Link>

                <div className='space-y-2 text-6xl'>
                    <h1 className="dark:text-zinc-200">Welcome to <span className="logo text-amber-400 underline">OpenTyped</span></h1>
                    <h1 className="text-pink-500 dark:text-pink-600 font-semibold">Gateway to the World of Open Source Projects!</h1>
                </div>

                <div className='w-[40vw] mx-auto flex flex-row justify-around items-center'>
                    <Button className='text-xl py-6 rounded-xl w-fit' variant={`default`}>
                        <Link href={`/projects`}>
                            Explore Projects
                        </Link>
                    </Button>

                    <Button className='text-xl border-2 border-black dark:border-0 py-6 rounded-xl w-fit' variant={`secondary`}>
                        {user ? (
                            <Link href={`/add-new-project`}>
                                Add new Project
                            </Link>
                        ) : (
                            <Link href={`/api/auth/signin`}>
                                Sign In
                            </Link>
                        )}
                    </Button>
                </div>
            </div>

            <TextOpacityAnimation
                content=" 'OpenTyped' is a open-sourced and vibrant community-driven platform that celebrates the power of open source projects. Whether you're a developer seeking exciting projects to contribute to or a project owner looking to showcase your work, OpenTyped is here to connect you with a world of opportunities."
                className="text-6xl h-screen dark:text-slate-300 font-bold text-left leading-tight w-[90%] mx-auto"
            />
        </section>
    )
}
