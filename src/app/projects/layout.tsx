import { Metadata } from 'next'
import { ReactNode } from 'react'


export const metadata: Metadata = ({
    title: "Open source projects || Opentyped",
    description: "",
    keywords: ["open source", "opentyped", "projects of opentyped"],
    robots: "index, follow"
})

export default function layout(
    { children }: { children: ReactNode }
) {
    return (
        <>
            {children}
        </>
    )
}
