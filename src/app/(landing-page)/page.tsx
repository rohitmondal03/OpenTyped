import Link from 'next/link'
import { Session } from 'next-auth'
import { Github } from 'lucide-react'

import { cn } from '@/lib/utils'
import { getAuthSession } from '@/lib/nextauth'
import { buttonVariants } from '@/components/ui/button'
import TextOpacityAnimation from './_components/text-opacity-animations'


export default async function Home() {
  const session: Session | null = await getAuthSession();

  // get user data
  const user = session?.user;


  return (
    <section className="text-center">
      <div className="h-[75vh] flex flex-col gap-y-6 items-center justify-center">
        <Link
          href={`https://github.com/rohitmondal03/opentyped`}
          target='_blank'
          className='logo scale-75 xs:scale:95 sm:scale-100 relative text-sm border-4 w-fit border-orange-500 dark:border-violet-600 mx-auto px-3 py-1 rounded-3xl flex items-center gap-x-3 overflow-hidden transition-all duration-500 ease-in-out linear before:absolute before:left-0 before:-translate-x-full before:h-full before:w-full before:rounded-3xl shadow-[0px_0px_30px] shadow-orange-400 dark:shadow-violet-600 md:shadow-0 before:bg-black hover:before:translate-x-0 before:border-white md:hover:text-white md:hover:dark:text-black md:hover:dark:before:bg-white hover:dark:border-white md:hover:border-black hover:border-4 before:-z-10'
        >
          Give a star on Github <Github />
        </Link>

        <div className='space-y-6 md:space-y-4'>
          <h1 className="font-bold dark:text-zinc-200 text-3xl xs:text-4xl sm:text-5xl md:text-6xl">Welcome to <span className="logo text-amber-500 underline">OpenTyped</span></h1>
          <h1 className="font-semibold text-2xl text-muted-foreground">Gateway to the World of Open Source Projects!</h1>
        </div>

        <div className='md:w-[40vw] mx-auto flex flex-row gap-x-2 sm:gap-x-5 lg:gap-x-0 justify-around items-center px-2 xs:px-0'>
          <Link
            href={`/projects`}
            className={cn(buttonVariants({
              variant: "default"
            }))}
          >
            Explore Projects
          </Link>

          <Link
            href={user ? "/add-new-project" : "/api/auth/signin"}
            className={cn(buttonVariants({
              variant: "secondary"
            }))}
          >
            {user ? 'Add New Project' : "Sign In "}
          </Link>
        </div>
      </div>


      <TextOpacityAnimation
        content=" 'OpenTyped' is a open-sourced and vibrant community-driven platform that celebrates the power of open source projects. Whether you're a developer seeking exciting projects to contribute to or a project owner looking to showcase your work, OpenTyped is here to connect you with a world of opportunities."
        className="py-12 md:py-16 dark:text-slate-300 font-bold text-left text-xl w-[90%] mx-auto"
      />
    </section>
  )
}
