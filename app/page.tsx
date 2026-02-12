import FAQ from "@/components/faq";
import Image from "next/image";
import { GithubProjects } from "@/components/github-projects";
import DitherShader from "@/components/ui/dither-shader";
import { Contributors } from "@/components/contributors";
import AboutSection from "@/components/about-section";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* <section id="about" className="flex items-center flex-col my-10">
        <h1 className="text-4xl font-bold text-center mb-10">About</h1>
        <p className="text-lg text-center max-w-2xl">We&apos;re <span className="font-bold">Optima Team</span> - a group of engineers and creators solving real-world problems with code, collaboration, and relentless execution. From open-source innovation to practical solutions, we build tools that matter.</p>
      </section> */}
      <AboutSection />


      <section id="projects" className="py-10 my-10">
        <h1 className="text-3xl font-bold flex justify-center items-center text-center">Projects</h1>
        <p className=" text-center text-muted-foreground max-w-2xl mx-auto mt-2">Explore our projects and see how we use technology to solve real-world problems.</p>
        <GithubProjects />
      </section>

      <section id="contributors" className="py-10 my-10">
        <h1 className="text-3xl font-bold flex justify-center items-center text-center">Contributors</h1>
        <p className=" text-center text-muted-foreground max-w-2xl mx-auto mt-2 mb-8">Explore our contributions and see how we use technology to solve real-world problems.</p>
        <Contributors />
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
