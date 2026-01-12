"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home" },
        { href: "/dashboard", label: "Dashboard" },
        { href: "/blog", label: "Blog" },
    ];

    return (
        <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
            <div className="glass rounded-full px-6 py-3 flex items-center space-x-1 sm:space-x-4 shadow-lg shadow-blue-500/5">
                <Link href="/" className="font-serif font-bold text-xl tracking-tight mr-4 sm:mr-8 text-white">
                    YZ<span className="text-blue-500">.</span>
                </Link>

                {links.map((link) => {
                    const isActive = pathname === link.href;

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="relative px-3 py-1.5 text-sm font-medium transition-colors"
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="active-nav"
                                    className="absolute inset-0 bg-white/10 rounded-full"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className={isActive ? "text-white" : "text-gray-400 hover:text-white"}>
                                {link.label}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
