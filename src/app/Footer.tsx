import Link from "next/link";
import {
    Computer,
    User,
    DatabaseZap,
    Database,
    StickyNote,
    ZapIcon,
    GithubIcon,
    LinkedinIcon,
    TwitterIcon
} from "lucide-react"

import { Separator } from "@/components/ui/separator";


const tech: techStackType[] = [
    {
        title: "nextJS",
        link: "https://nextjs.org/",
        icon: Computer
    },
    {
        title: "next-auth",
        link: "https://next-auth.js.org/",
        icon: User
    },
    {
        title: "Tailwind CSS",
        link: "https://tailwindcss.com/",
        icon: StickyNote
    },
    {
        title: "shadcn",
        link: "https://ui.shadcn.com/",
        icon: ZapIcon
    },
    {
        title: "Prisma",
        link: "https://www.prisma.io/",
        icon: DatabaseZap
    },
    {
        title: "Railway DB",
        link: "https://railway.app/",
        icon: Database
    },
]

const socialProfileData: socialProfileType[]= [
    {
        link: "https://github.com/rohitmondal03",
        logo: GithubIcon,
        title: "Github",
    },
    {
        link: "https://twitter.com/RohitMo62534745",
        logo: TwitterIcon,
        title: "Twitter"
    },
    {
        link: "https://www.linkedin.com/in/rohit-mondal-61662a16b/",
        logo: LinkedinIcon,
        title: "LinkedIn"
    }
]


export default function Footer() {
    return (
        <footer className="bg-zinc-900 text-white dark:bg-zinc-200 dark:text-black text-center py-8  flex flex-col gap-y-16 md:gap-0 md:flex-row md:items-center md:justify-around">
            <div className="space-y-4 md:space-y-4">
                <div>
                    <h1 className="text-lg xs:text-2xl font-bold">Developed with ❤️ by</h1>
                    <Link
                        href={`https://portfolio-ten-virid-46.vercel.app`}
                        target="_blank"
                        className="logo text-xl sm:text-3xl text-red-500 underline transition duration-200 ease-out hover:text-amber-500"
                    >
                        @rohit_mondal
                    </Link>
                </div>

                <Separator orientation="horizontal" className="hidden md:block h-1" />

                <div className="flex flex-row items-center justify-evenly md:justify-around w-full">
                    {socialProfileData.map((data) => (
                        <Link
                            key={data.title}
                            href={data.link}
                            target="_blank"
                            className="border-2 p-2 rounded-xl transition-all hover:scale-110 hover:-rotate-12 hover:rounded-lg"
                        >
                            <data.logo />
                        </Link>
                    ))}
                </div>
            </div>

            <div className="space-y-3">
                <h1 className="text-2xl font-bold">🧑‍💻 Made with -</h1>

                <div className="grid xs:grid-cols-2 sm:grid-cols-3 place-items-center gap-y-1 xs:gap-y-3">
                    {tech.map((data) => (
                        <Link
                            href={data.link}
                            target="_blank"
                            className="underline text-lg flex gap-x-2"
                        >
                            <data.icon /> {data.title}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    )
}