"use client"
import { motion } from "motion/react"

export default function AboutSection() {
    return (
        <section id="about" className="relative flex items-center -z-10 flex-col my-10 overflow-visible">

            <div className="absolute inset-0 w-screen left-1/2 -translate-x-1/2 pointer-events-none overflow-hidden" style={{ height: '200vh', top: '-50vh' }}>

                <motion.div
                    className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
                    style={{ top: '30%' }}
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-400/60 shadow-[0_0_8px_rgba(96,165,250,0.6)]" />
                </motion.div>
                <motion.div
                    className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
                    style={{ top: '50%' }}
                    animate={{ x: ['100%', '-100%'] }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                >
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-purple-400/60 shadow-[0_0_8px_rgba(192,132,252,0.6)]" />
                </motion.div>
                <motion.div
                    className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
                    style={{ top: '70%' }}
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-300/60 shadow-[0_0_8px_rgba(147,197,253,0.6)]" />
                </motion.div>


                <motion.div
                    className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"
                    style={{ left: '20%' }}
                    animate={{ y: ['-100%', '100%'] }}
                    transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                >
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-400/60 shadow-[0_0_8px_rgba(96,165,250,0.6)]" />
                </motion.div>
                <motion.div
                    className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"
                    style={{ left: '50%' }}
                    animate={{ y: ['100%', '-100%'] }}
                    transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-purple-400/60 shadow-[0_0_8px_rgba(192,132,252,0.6)]" />
                </motion.div>
                <motion.div
                    className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"
                    style={{ left: '80%' }}
                    animate={{ y: ['-100%', '100%'] }}
                    transition={{ duration: 13, repeat: Infinity, ease: 'linear' }}
                >
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-300/60 shadow-[0_0_8px_rgba(147,197,253,0.6)]" />
                </motion.div>

                <motion.div
                    className="absolute w-[200%] h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent origin-center"
                    style={{ top: '40%', left: '-50%', transform: 'rotate(45deg)' }}
                    animate={{ x: ['-50%', '50%'] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-indigo-400/60 shadow-[0_0_8px_rgba(129,140,248,0.6)]" />
                </motion.div>
                <motion.div
                    className="absolute w-[200%] h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent origin-center"
                    style={{ top: '60%', left: '-50%', transform: 'rotate(-45deg)' }}
                    animate={{ x: ['50%', '-50%'] }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                >
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-violet-400/60 shadow-[0_0_8px_rgba(167,139,250,0.6)]" />
                </motion.div>
            </div>

            <h1 className="text-4xl font-bold text-center mb-10 relative z-10">About</h1>
            <p className="text-lg text-center max-w-2xl relative z-10">
                We&apos;re <span className="font-bold">Optima Team</span> - a group of engineers and creators solving real-world problems with code, collaboration, and relentless execution. From open-source innovation to practical solutions, we build tools that matter.
            </p>
        </section>
    )
}