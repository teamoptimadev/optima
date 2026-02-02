"use client"

import { useState, useEffect } from "react"
import { Cookie, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export function CookieNotice() {
    // Start with false to avoid hydration mismatch
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Check local storage after mount
        const consent = localStorage.getItem("cookie-consent")
        if (!consent) {
            // Small delay for animation effect
            const timer = setTimeout(() => setIsVisible(true), 1000)
            return () => clearTimeout(timer)
        }
    }, [])

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "true")
        setIsVisible(false)
    }

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "false")
        setIsVisible(false)
    }

    if (!isVisible) return null

    return (
        <div className="fixed bottom-4 right-4 z-50 w-full max-w-sm p-4 md:right-8 md:bottom-8">
            <Card className="shadow-lg border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-in slide-in-from-bottom-5 fade-in duration-500">
                <CardHeader className="flex flex-row items-center gap-2 pb-2">
                    <Cookie className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Cookie Policy</CardTitle>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-2 h-8 w-8 text-muted-foreground hover:text-foreground"
                        onClick={handleDecline}
                    >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close</span>
                    </Button>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground pb-2">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
                </CardContent>
                <CardFooter className="flex justify-end gap-2 pt-2">
                    <Button variant="outline" size="sm" onClick={handleDecline}>
                        Decline
                    </Button>
                    <Button size="sm" onClick={handleAccept}>
                        Accept
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
