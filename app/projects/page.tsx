
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"
import { Star, GitFork, ExternalLink } from "lucide-react"

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

async function getRepos(): Promise<Repo[]> {
    try {
        const res = await fetch('https://api.github.com/users/teamoptimadev/repos?sort=updated&per_page=100', {
            next: { revalidate: 3600 }
        })

        if (!res.ok) {
            console.error("Failed to fetch repos", res.status, res.statusText);
            return [];
        }

        const repos = await res.json()
        return repos;
    } catch (e) {
        console.error("Error fetching repos:", e)
        return []
    }
}

export default async function ProjectsPage() {
    const repos = await getRepos();

    return (
        <div className="container mx-auto px-4 pb-12">
            <h1 className="text-4xl font-bold mb-2">Projects</h1>
            <p className="text-muted-foreground mb-10">
                Explore our open source contributions and projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {repos.map((repo) => (
                    <Link key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer" className="block h-full group">
                        <Card className="h-full flex flex-col bg-card hover:bg-card/80 hover:border-primary/50 transition-all duration-300">
                            <CardHeader>
                                <div className="flex justify-between items-start gap-2">
                                    <CardTitle className="text-xl font-bold truncate group-hover:text-primary transition-colors">{repo.name}</CardTitle>
                                    <ExternalLink className="size-4 text-muted-foreground shrink-0 group-hover:text-primary transition-colors" />
                                </div>
                                <CardDescription className="line-clamp-2 min-h-[2.5rem]">
                                    {repo.description || "No description available."}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="mt-auto">
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                    {repo.language && (
                                        <div className="flex items-center gap-1">
                                            <span className="size-3 rounded-full bg-primary/80" />
                                            {repo.language}
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                            <CardFooter className="pt-0 text-muted-foreground border-t border-border/50 pt-4">
                                <div className="flex items-center gap-4 text-sm">
                                    <div className="flex items-center gap-1">
                                        <Star className="size-4 fill-current" />
                                        <span>{repo.stargazers_count}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <GitFork className="size-4" />
                                        <span>{repo.forks_count}</span>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
            {repos.length === 0 && (
                <div className="text-center py-20 text-muted-foreground">
                    Unable to load projects at the moment.
                </div>
            )}
        </div>
    )
}