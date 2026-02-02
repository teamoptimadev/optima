'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"
import { Star, GitFork, ExternalLink } from "lucide-react"
import Marquee from "react-fast-marquee"

interface Repo {
    id: number
    name: string
    description: string | null
    html_url: string
    stargazers_count: number
    forks_count: number
    language: string | null
    homepage: string | null
}

const RepoCard = ({ repo }: { repo: Repo }) => (
    <div className="w-[350px] shrink-0 h-full mx-3">
        <Link href={repo.html_url} target="_blank" rel="noopener noreferrer" className="block h-full">
            <Card className="h-full bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors border-primary/10 hover:border-primary/30 group">
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <CardTitle className="text-xl font-bold truncate pr-2 group-hover:text-primary transition-colors">
                            {repo.name}
                        </CardTitle>
                        <ExternalLink size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <CardDescription className="line-clamp-2 h-10">
                        {repo.description || "No description available."}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        {repo.language && (
                            <div className="flex items-center gap-1">
                                <span className="size-3 rounded-full bg-primary/80" />
                                {repo.language}
                            </div>
                        )}
                    </div>
                </CardContent>
                <CardFooter className="flex gap-4 text-muted-foreground border-t border-border/50 pt-4 mt-auto">
                    <div className="flex items-center gap-1">
                        <Star size={14} className="fill-current" />
                        <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <GitFork size={14} />
                        <span>{repo.forks_count}</span>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    </div>
)

export function ProjectsMarquee({ repos }: { repos: Repo[] }) {
    // Distribute repos across 3 rows
    const chunkSize = Math.ceil(repos.length / 3);
    const firstRow = repos.slice(0, chunkSize);
    const secondRow = repos.slice(chunkSize, chunkSize * 2);
    const thirdRow = repos.slice(chunkSize * 2);

    // If we don't have enough repos for 3 full rows, just duplicate them for effect or handle gracefully
    // For now, assuming enough repos or that empty marquees are fine (they won't render anything)
    // If rows are empty, fallback to using all repos? 
    // Let's fallback to using all repos for each row if total is small (< 6)
    const useAll = repos.length < 6;
    const row1 = useAll ? repos : firstRow;
    const row2 = useAll ? repos : secondRow;
    const row3 = useAll ? repos : thirdRow;

    return (
        <div className="w-full relative py-10 flex flex-col gap-6 overflow-hidden">
            {/* Gradient Overlays for smooth fade out at edges */}
            <div className="absolute inset-y-0 left-0 w-32 z-10 bg-linear-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 z-10 bg-linear-to-l from-background to-transparent pointer-events-none" />

            {/* Row 1: Right to Left */}
            {row1.length > 0 && (
                <Marquee
                    gradient={false}
                    speed={30}
                    pauseOnHover={true}
                    className="py-2"
                >
                    {row1.map((repo) => (
                        <RepoCard key={repo.id} repo={repo} />
                    ))}
                </Marquee>
            )}

            {/* Row 2: Left to Right */}
            {row2.length > 0 && (
                <Marquee
                    gradient={false}
                    speed={30}
                    pauseOnHover={true}
                    direction="right"
                    className="py-2"
                >
                    {row2.map((repo) => (
                        <RepoCard key={repo.id} repo={repo} />
                    ))}
                </Marquee>
            )}

            {/* Row 3: Right to Left */}
            {row3.length > 0 && (
                <Marquee
                    gradient={false}
                    speed={30}
                    pauseOnHover={true}
                    className="py-2"
                >
                    {row3.map((repo) => (
                        <RepoCard key={repo.id} repo={repo} />
                    ))}
                </Marquee>
            )}
        </div>
    )
}
