"use client"

import * as React from "react"
import Link from "next/link"
import { Monitor, Moon, Sun, Eclipse } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { ModeToggle } from "./mode-toggle"

function ThemeToggle() {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <Button variant="outline" size="sm" className="h-8 w-fit gap-2 px-3">
                <Sun className="h-4 w-4" />
                <span className="capitalize">System</span>
                <span className="sr-only">Toggle theme</span>
            </Button>
        )
    }

    return (
        <ModeToggle />
    )
}

export default function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 md:mb-12">
                    <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
                        <Link href="/" className="flex items-center gap-2">
                            {/* <Image
                                src="/optima_logo.jpeg"
                                alt="Team Optima Logo"
                                width={32}
                                height={32}
                                className="rounded-md object-cover"
                            /> */}
                            <img
                                src="https://avatars.githubusercontent.com/u/233457718?s=200&v=4"
                                alt="Team Optima Logo"
                                width={32}
                                height={32}
                                className="rounded-md object-cover"
                            />
                            <span className="font-bold text-lg">Team Optima</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Building the future of digital experiences, one component at a time.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-sm">Product</h3>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Documentation</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Changelog</Link>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-sm">Company</h3>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Careers</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
                        <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-sm">Legal</h3>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</Link>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Team Optima, Inc. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </footer>
    )
}