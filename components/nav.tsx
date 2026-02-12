"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

export default function NavBar() {
    const [open, setOpen] = React.useState(false)

    return (
        <div className="flex w-full fixed z-50 top-0 items-center justify-between gap-4 md:gap-6 px-4 md:px-8 py-4 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="flex items-center gap-4 md:gap-6">

                <Link href="/" className="flex items-center gap-2 shrink-0">
                    {/* <Image
                        src="/optima_logo.jpeg"
                        alt="Team Optima Logo"
                        width={40}
                        height={40}
                        className="rounded-md object-cover"
                        /> */}
                    <img
                        src="https://avatars.githubusercontent.com/u/233457718?s=200&v=4"
                        alt="Team Optima Logo"
                        width={40}
                        height={40}
                        className="rounded-md object-cover"
                    />
                </Link>
                <NavigationMenu className="hidden md:block">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="w-96">
                                    <ListItem href="/blog" title="Introduction">
                                        Blog
                                    </ListItem>
                                    <ListItem href="/blog/welcome" title="Welcome">
                                        Welcome to our blog.
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        {/* <NavigationMenuItem className="hidden md:flex">
                            <NavigationMenuTrigger>Contributors</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                    {components.map((component) => (
                                        <ListItem
                                            key={component.title}
                                            title={component.title}
                                            href={component.href}
                                        >
                                            {component.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem> */}
                        <NavigationMenuItem>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                                <Link href="/projects">Projects</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                                <Link href="/blog">Blog</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="hidden md:flex items-center gap-6">
                <ModeToggle />
                <Link href="/contact">
                    <Button className="cursor-pointer">Contact</Button>
                </Link>
            </div>

            {/* Mobile Menu */}
            <div className="flex md:hidden items-center gap-3">
                <ModeToggle />
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[280px] sm:w-[350px] px-6">
                        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                        <nav className="flex flex-col gap-4 mt-8">
                            <div className="flex flex-col gap-2">
                                <h3 className="font-semibold text-base mb-2">Getting Started</h3>
                                <Link
                                    href="/blog"
                                    className="text-sm py-2 px-3 rounded-md hover:bg-accent transition-colors"
                                    onClick={() => setOpen(false)}
                                >
                                    Introduction - Blog
                                </Link>
                                <Link
                                    href="/blog/welcome"
                                    className="text-sm py-2 px-3 rounded-md hover:bg-accent transition-colors"
                                    onClick={() => setOpen(false)}
                                >
                                    Welcome
                                </Link>
                            </div>

                            <div className="h-px bg-border my-2" />

                            <Link
                                href="/projects"
                                className="text-sm font-medium py-2 px-3 rounded-md hover:bg-accent transition-colors"
                                onClick={() => setOpen(false)}
                            >
                                Projects
                            </Link>
                            <Link
                                href="/blog"
                                className="text-sm font-medium py-2 px-3 rounded-md hover:bg-accent transition-colors"
                                onClick={() => setOpen(false)}
                            >
                                Blog
                            </Link>

                            <div className="h-px bg-border my-2" />

                            <Link href="/contact" onClick={() => setOpen(false)}>
                                <Button className="w-full">Contact</Button>
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </div >
    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="flex flex-col gap-1 text-sm">
                        <div className="leading-none font-medium">{title}</div>
                        <div className="text-muted-foreground line-clamp-2">{children}</div>
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}