import { useEffect } from "react"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export function ModeToggle() {
    const { setTheme, theme } = useTheme()

    useEffect(() => {
        document.addEventListener("keydown", function (event: KeyboardEvent) {
            if (event.key === "p" && event.altKey) {
                theme === "light"
                    ? setTheme("dark")
                    : setTheme("light")
            }
        });
    }, [theme])


    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-black border-2 dark:border-white">
                    <code className="font-bold text-base mr-3">alt+p</code>
                    <SunIcon className="h-[1.2rem] w-[1.2rem] hidden transition-all dark:block" />
                    <MoonIcon className="h-[1.2rem] w-[1.2rem] block transition-all dark:hidden" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
