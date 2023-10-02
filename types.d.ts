import { type LucideIcon } from "lucide-react"

type features = {
    heading: string
    content: string
}

type user = {
    id: string;
} & {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
}