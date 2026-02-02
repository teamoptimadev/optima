'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Twitter, User } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const contributors = [
    {
        name: "Mohan A",
        role: "UI/UX Designer",
        image: "nothing",
        socials: {
            github: "#",
            twitter: "#",
            linkedin: "#",
            personal: "https://mohan-a.me"
        }
    },
    {
        name: "Mahesha B R",
        role: "AI/ML Engineer",
        image: "https://www.mahesha.dev/_next/image?url=%2Fmahesha_b%26w.jpg&w=1080&q=75",
        socials: {
            github: "https://github.com/mahesha-br",
            twitter: "https://x.com/mahesha_br",
            linkedin: "https://www.linkedin.com/in/mahesha-br-3096822b9",
            personal: "https://mahesha.dev"
        }
    },
    {
        name: "Manoj Kumar B M",
        role: "Backend Engineer",
        image: "nothing",
        socials: {
            github: "#",
            linkedin: "#"
        }
    },
    {
        name: "Dilip D",
        role: "Project Manager",
        image: "nothing",
        socials: {
            twitter: "#",
            linkedin: "#"
        }
    },
    {
        name: "Deepak G",
        role: "DevOps Engineer",
        image: "nothing",
        socials: {
            github: "#",
            linkedin: "#"
        }
    },
    {
        name: "Jessica Taylor",
        role: "Frontend Developer",
        image: "https://i.pravatar.cc/150?u=jessica",
        socials: {
            github: "#",
            twitter: "#"
        }
    },
    {
        name: "Robert Brown",
        role: "Full Stack Developer",
        image: "https://i.pravatar.cc/150?u=robert",
        socials: {
            github: "#",
            twitter: "#",
            linkedin: "#"
        }
    },
    {
        name: "Kishore",
        role: "Full Stack Developer",
        image: "https://www.kishore-sv.me/profile-square.png",
        socials: {
            linkedin: "https://linkedin.com/in/kishore-sv",
            github: "https://github.com/kishore-sv",
            twitter: "https://twitter.com/kishore_sv",
            personal: "https://kishore-sv.me"
        }

    },
];

export function Contributors() {
    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {contributors.map((contributor, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full border bg-card/60 backdrop-blur-sm hover:border-primary/40 hover:bg-card/80 transition-all duration-300 group">
                            <CardContent className="flex flex-col items-center p-6 text-center gap-4">
                                <Avatar className="size-20 border-2 border-border group-hover:border-primary/50 transition-colors duration-300">
                                    <AvatarImage src={contributor.image} alt={contributor.name} className="object-cover" />
                                    <AvatarFallback className="text-lg">{contributor.name.charAt(0)}</AvatarFallback>
                                </Avatar>

                                <div className="space-y-1">
                                    <h3 className="font-semibold text-lg leading-none tracking-tight">{contributor.name}</h3>
                                    <p className="text-sm text-muted-foreground font-medium">{contributor.role}</p>
                                </div>

                                <div className="flex items-center gap-2 mt-2">
                                    {contributor.socials.github && (
                                        <Button variant="ghost" size="icon" className="size-8 rounded-full hover:bg-primary/10 hover:text-primary transition-colors" asChild>
                                            <Link href={contributor.socials.github} target="_blank" rel="noopener noreferrer">
                                                <Github size={16} />
                                            </Link>
                                        </Button>
                                    )}
                                    {contributor.socials.twitter && (
                                        <Button variant="ghost" size="icon" className="size-8 rounded-full hover:bg-primary/10 hover:text-primary transition-colors" asChild>
                                            <Link href={contributor.socials.twitter} target="_blank" rel="noopener noreferrer">
                                                <Twitter size={16} />
                                            </Link>
                                        </Button>
                                    )}
                                    {contributor.socials.linkedin && (
                                        <Button variant="ghost" size="icon" className="size-8 rounded-full hover:bg-primary/10 hover:text-primary transition-colors" asChild>
                                            <Link href={contributor.socials.linkedin} target="_blank" rel="noopener noreferrer">
                                                <Linkedin size={16} />
                                            </Link>
                                        </Button>
                                    )}

                                    {contributor.socials.personal && (
                                        <Button variant="ghost" size="icon" className="size-8 rounded-full hover:bg-primary/10 hover:text-primary transition-colors" asChild>
                                            <Link href={contributor.socials.personal} target="_blank" rel="noopener noreferrer">
                                                <User size={16} />
                                            </Link>
                                        </Button>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
