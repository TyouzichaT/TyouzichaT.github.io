"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/context/LanguageContext";
import { useEffect, useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    const { lang, setLang } = useLang();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 sm:px-10 h-14 border-b border-black/[0.08] bg-white">
            <Link href="/" className="font-mono text-sm text-black tracking-tight">
                YZ.
            </Link>

            <div className="flex items-center gap-6 sm:gap-8">
                <button
                    onClick={() => mounted && setLang(lang === "en" ? "zh" : "en")}
                    className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#888] hover:text-black transition-colors"
                >
                    {mounted ? (lang === "en" ? "中文" : "EN") : "EN"}
                </button>
                <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]" />
                    <span className="hidden sm:inline text-[11px] font-mono text-black uppercase tracking-[0.15em]">Available</span>
                </div>
            </div>
        </nav>
    );
}
