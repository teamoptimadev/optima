"use client"
import { useState } from "react"
import DitherShader from "./ui/dither-shader"

export default function HeroSection() {
    const [isImageVisible, setIsImageVisible] = useState(false)

    const handleImageToggle = () => {
        setIsImageVisible(!isImageVisible)
    }

    return (
        <section id="hero" className="px-4 sm:px-8 md:px-20 lg:px-40 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 mb-10 py-10 md:py-0 bg-[radial-gradient(ellipse_at_right,var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900">
            <div className="flex flex-col justify-center md:py-20 w-full md:w-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-2 text-center md:text-left">
                    TEAM <span className="text-primary">OPTIMA</span>
                </h1>
                <div className="h-1.5 w-20 mb-6 bg-foreground mx-auto md:mx-0" />
                <p className="text-base sm:text-lg md:text-xl max-w-lg leading-relaxed text-center md:text-left">
                    Welcome to Team Optima. <br />
                    An organization dedicated to solving complex problems through
                    innovative engineering and creative design.
                </p>
            </div>
            <div
                className="group w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] shrink-0 bg-background border border-border hover:scale-105 md:hover:scale-101 transition-all duration-300 cursor-pointer overflow-hidden rounded-xl shadow-2xl relative"
                onClick={handleImageToggle}
            >
                <DitherShader
                    src="https://avatars.githubusercontent.com/u/233457718?s=200&v=4"
                    gridSize={4}
                    ditherMode="bayer"
                    colorMode="grayscale"
                    className="w-full h-full object-cover"
                />
                <img
                    src="https://avatars.githubusercontent.com/u/233457718?s=200&v=4"
                    alt="Optima Logo"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isImageVisible ? 'opacity-100' : 'opacity-0'
                        } md:opacity-0 md:group-hover:opacity-100`}
                />
            </div>
        </section>
    )
}