
import { ProjectsMarquee } from "./projects-marquee"

// Re-export the client component type for use if needed
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
            next: { revalidate: 3600 } // Cache for 1 hour
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

export async function GithubProjects() {
    const repos = await getRepos()

    if (repos.length === 0) {
        return (
            <div className="text-center p-10 text-muted-foreground">
                Unable to load projects at the moment.
            </div>
        )
    }

    return (
        <div className="w-full">
            <ProjectsMarquee repos={repos} />
        </div>
    )
}
