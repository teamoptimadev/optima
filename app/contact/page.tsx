"use client"

import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
})

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        setErrorMessage("")

        const apiKey = process.env.NEXT_PUBLIC_W3FORMS_API_KEY

        if (!apiKey) {
            setErrorMessage("API Key is missing. Please check configuration.")
            setIsSubmitting(false)
            return
        }

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: apiKey,
                    ...values,
                }),
            })

            const result = await response.json()

            if (result.success) {
                setIsSuccess(true)
                form.reset()
            } else {
                setErrorMessage(result.message || "Something went wrong. Please try again.")
            }
        } catch (error) {
            setErrorMessage("Failed to send message. Please check your internet connection.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="container mx-auto flex items-center justify-center py-10 px-4">
            <Card className="w-full max-w-lg shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Contact Us</CardTitle>
                    <CardDescription>
                        {isSuccess
                            ? "Your message has been sent successfully!"
                            : "Fill out the form below to get in touch with us."}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {isSuccess ? (
                        <div className="flex flex-col items-center justify-center space-y-4 py-8 text-center animate-in fade-in slide-in-from-bottom-4">
                            <div className="rounded-full bg-green-100 p-3 text-green-600 dark:bg-green-900/20 dark:text-green-400">
                                <Send className="h-6 w-6" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-semibold text-lg">Message Sent</h3>
                                <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                                    Thank you for reaching out. We'll get back to you as soon as possible.
                                </p>
                            </div>
                            <Button
                                variant="outline"
                                className="mt-4 cursor-pointer"
                                onClick={() => setIsSuccess(false)}
                            >
                                Send Another Message
                            </Button>
                        </div>
                    ) : (
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="John Doe" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="john@example.com" type="email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Message</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="How can we help you?"
                                                    className="min-h-[120px] resize-none"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {errorMessage && (
                                    <div className="text-sm text-destructive font-medium bg-destructive/10 p-3 rounded-md">
                                        {errorMessage}
                                    </div>
                                )}

                                <Button type="submit" className="w-full cursor-pointer disabled:cursor-not-allowed disabled:opacity-50" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        "Send Message"
                                    )}
                                </Button>
                            </form>
                        </Form>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}