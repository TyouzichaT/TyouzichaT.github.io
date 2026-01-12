"use client";

import { motion } from "framer-motion";

export default function DashboardLoader() {
    return (
        <main className="min-h-screen pt-24 pb-12 px-4 sm:px-6 flex items-center justify-center">
            <div className="relative flex flex-col items-center justify-center">
                {/* Subtle background glow */}
                <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full opacity-50"></div>

                {/* Main loading container */}
                <div className="glass-card rounded-2xl p-12 flex flex-col items-center relative z-10 border border-white/5 bg-black/40 backdrop-blur-xl">
                    {/* Animated chart-like logo */}
                    <div className="relative w-16 h-16 mb-8">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full h-full"
                        >
                            <motion.path
                                d="M3 12h3l3-9 6 15 3-6h3"
                                stroke="url(#gradient)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{
                                    pathLength: [0, 1, 1, 0],
                                    opacity: [0, 1, 1, 0],
                                    x: [0, 0, 5, 5] // Subtle shift
                                }}
                                transition={{
                                    duration: 2.5,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                    times: [0, 0.4, 0.6, 1]
                                }}
                            />
                            <defs>
                                <linearGradient id="gradient" x1="3" y1="12" x2="21" y2="12" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#60A5FA" />
                                    <stop offset="50%" stopColor="#A855F7" />
                                    <stop offset="100%" stopColor="#EC4899" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Orbiting ring */}
                        <motion.div
                            className="absolute inset-0 border border-t-blue-500/50 border-r-transparent border-b-purple-500/30 border-l-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                        />
                        <motion.div
                            className="absolute inset-2 border border-b-pink-500/50 border-l-transparent border-t-transparent border-r-transparent rounded-full"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                        />
                    </div>

                    {/* Text */}
                    <div className="text-center space-y-3">
                        <h3 className="text-lg font-medium text-white tracking-wide">
                            Loading Market Data
                        </h3>
                        <div className="flex items-center justify-center space-x-1">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-1.5 h-1.5 rounded-full bg-blue-500/50"
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
