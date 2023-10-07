import { ReactNode } from 'react'
import type { Metadata } from 'next'

import { ThemeProvider } from '@/components/theme/theme-provider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import './globals.css'


export const metadata: Metadata = {
    title: 'OpenTyped',
    description: 'An open-source platform where userscan add any open source project that they like. ',
}


export default async function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navbar />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html >
    )
}
