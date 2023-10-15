import { LucideIcon, Computer, User, DatabaseZap, Database, LucideStickyNote } from "lucide-react"

type techType = {
    title: string
    link: string
    icon: LucideIcon
}

export const tech: techType[] = [
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
        icon: LucideStickyNote
    },
    {
        title: "shadcn",
        link: "https://ui.shadcn.com/",
        icon: LucideStickyNote
    },
    {
        title: "Prisma",
        link: "https://www.prisma.io/",
        icon: DatabaseZap
    },
    {
        title: "Neon DB",
        link: "https://neon.tech/",
        icon: Database
    },
]