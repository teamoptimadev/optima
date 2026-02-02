import FAQ from "@/components/faq";
import Image from "next/image";
import { GithubProjects } from "@/components/github-projects";
import DitherShader from "@/components/ui/dither-shader";

export default function Home() {
  return (
    <div className="min-h-screen">


      <section id="hero" className="px-40 flex justify-between mb-10 bg-[radial-gradient(ellipse_at_right,var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900">
        <div className="flex flex-col justify-center py-20">
          <h1 className="text-7xl font-black tracking-tighter mb-2">
            TEAM <span className="text-primary">OPTIMA</span>
          </h1>
          <div className="h-1.5 w-20 mb-6 bg-foreground" />
          <p className="text-xl max-w-lg leading-relaxed">
            Welcome to Team Optima. <br />
            An organization dedicated to solving complex problems through
            innovative engineering and creative design.
          </p>
        </div>
        <div className="group size-100 bg-background border border-border hover:scale-101 transition-all duration-300 cursor-pointer overflow-hidden rounded-xl shadow-2xl relative">
          <DitherShader
            src="/optima_logo.jpeg"
            gridSize={4}
            ditherMode="bayer"
            colorMode="grayscale"
            className="w-full h-full object-cover"
          />
          <Image
            src="/optima_logo.jpeg"
            alt="Optima Logo"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            width={1000}
            height={1000}
          />
        </div>
      </section>


      <section id="about" className="flex items-center flex-col my-10">
        <h1 className="text-4xl font-bold text-center mb-10">About</h1>
        <p className="text-lg text-center max-w-2xl">We&apos;re <span className="font-bold">Optima Team</span> - a group of engineers and creators solving real-world problems with code, collaboration, and relentless execution. From open-source innovation to practical solutions, we build tools that matter.</p>
      </section>

      <section id="projects" className="py-10 my-10">
        <h1 className="text-3xl font-bold flex justify-center items-center text-center">Projects</h1>
        <p className=" text-center text-muted-foreground max-w-2xl mx-auto mt-2">Explore our projects and see how we use technology to solve real-world problems.</p>
        <GithubProjects />
      </section>
      <section id="faq" className="flex items-center flex-col my-10">
        <h1 className="text-3xl text-center font-bold flex max-w-xl items-center mb-6">Frequently Asked Questions</h1>
        <div className="flex justify-center items-center w-full max-w-3xl">
          <FAQ />
        </div>
      </section>
    </div>
  );
}
