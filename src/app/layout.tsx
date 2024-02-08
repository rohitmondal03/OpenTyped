import type { Metadata } from 'next'
import { Montserrat } from "next/font/google"
import { ReactNode } from 'react'

import { ThemeProvider } from '@/components/theme/theme-provider'
import { TooltipProvider } from '@/components/ui/tooltip'
import AuthProvider from '@/components/shared/AuthProvider'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'

import "./styles/globals.css"


const montFont = Montserrat({
  weight: ["400", "600", "800"],
  preload: false
})


export const metadata: Metadata = {
  title: 'OpenTyped',
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
      <body className={montFont.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <AuthProvider>
              <Navbar />
              {children}
              <Footer />
            </AuthProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html >
  )
}
