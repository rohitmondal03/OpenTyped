import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import TextOpacityAnimation from '@/components/text-opacity-animations'
import img from "../../../public/img-3.jpg"


export default async function Home() {
    return (
        <section className="text-center">
            <div className="text-6xl pt-40 space-y-4">
                <h1 className="dark:text-zinc-200">Welcome to <span className="logo text-amber-400 underline">OpenTyped</span></h1>
                <h1 className="text-pink-500 dark:text-pink-600 font-semibold">Gateway to the World of Open Source Projects!</h1>
            </div>

            <div className="my-20 space-y-20">
                <Image
                    src={img}
                    placeholder='blur'
                    alt="image"
                    className="h-[50rem] w-[80%] mx-auto rounded-2xl border-2 border-black dark:border-0"
                    width={`500`}
                    height={`500`}
                />

                <TextOpacityAnimation
                    content=" 'OpenTyped' is a open-sourced and vibrant community-driven platform that celebrates the power of open source projects. Whether you're a developer seeking exciting projects to contribute to or a project owner looking to showcase your work, OpenTyped is here to connect you with a world of opportunities."
                    className="text-6xl dark:text-blue-100 font-bold text-left leading-tight w-[90%] mx-auto"
                />

                <div className='flex flex-col gap-y-3 items-center'>
                    <Button className='text-xl py-6 rounded-xl w-fit' variant={`default`}>
                        <Link href={`/projects`}>
                            Explore Projects
                        </Link>
                    </Button>

                    <Button className='text-xl border-2 border-black dark:border-0 py-6 rounded-xl w-fit' variant={`secondary`}>
                        <Link href={`/add-new-project`}>
                            Add new Project
                        </Link>
                    </Button>
                </div>
            </div>
        </section >
    )
}
