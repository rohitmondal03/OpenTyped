import type { Metadata } from 'next'
import { ReactNode } from 'react'

import { ThemeProvider } from '@/components/theme/theme-provider'
import { TooltipProvider } from '@/components/ui/tooltip'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'

import "./styles/globals.css"


export const metadata: Metadata = {
    title: 'Showcase Open Source Projects',
    description: 'Opentyped, an open-source platform where users can add any open source project that they like.',
    keywords: ["Opentyped", "open source"],
    robots: "index, follow",
    generator: "Next.js"
}


export default async function RootLayout(
    { children }: { children: ReactNode }
) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    <TooltipProvider>
                        <Navbar />
                        {children}
                        <Footer />
                    </TooltipProvider>
                </ThemeProvider>
            </body>
        </html >
    )
}
