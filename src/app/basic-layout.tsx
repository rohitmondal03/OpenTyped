"use client"

import { ReactNode, useEffect } from "react"
import { DefaultSession } from "next-auth"
import Lenis from "@studio-freight/lenis"

import { ThemeProvider } from "@/components/theme/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"


export default function BasicLayout({ children, session }: { children: ReactNode, session: DefaultSession | null }) {
    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: any) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }, [])


    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <TooltipProvider>
                        <Navbar session={session} />
                        {children}
                        <Footer />
                    </TooltipProvider>
                </ThemeProvider >
            </body>
        </html >
    )
}