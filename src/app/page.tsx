"use client";

import Link from "next/link";
import { useLang } from "@/context/LanguageContext";

const posts = [
    {
        slug: "influence-retail-investor",
        title: { en: "The Six Weapons Aimed at Your Portfolio", zh: "六把瞄准你账户的枪" },
        subtitle: "散户投资者的影响力心理学",
        date: "2026-05-20",
        tag: { en: "Behavioral Finance", zh: "行为金融" },
        index: "001",
    },
];

const stack = ["Python", "React", "Next.js", "PyTorch", "C++", "SQL", "Tailwind"];

export default function Home() {
    const { lang } = useLang();
    const zh = lang === "zh";

    return (
        <main className="min-h-screen pt-14">

            {/* Writing */}
            <section className="px-6 sm:px-10 pt-16 pb-16">
                <div className="flex justify-between items-center mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#888]">{zh ? "文章" : "Writing"}</span>
                    <span className="text-[11px] font-mono text-[#888]">00{posts.length}</span>
                </div>
                <div className="border-t border-black/[0.08]">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="block border-b border-black/[0.08] py-7 -mx-6 sm:-mx-10 px-6 sm:px-10 hover:bg-black/[0.02] transition-colors group"
                        >
                            <div className="flex justify-between items-start gap-6">
                                <div>
                                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#888] mb-3">
                                        {zh ? post.tag.zh : post.tag.en}
                                    </p>
                                    <h2 className="text-base sm:text-lg font-medium text-black group-hover:text-[#555] transition-colors leading-snug">
                                        {zh ? post.title.zh : post.title.en}
                                    </h2>
                                    <p className="text-sm text-[#888] mt-1">{post.subtitle}</p>
                                </div>
                                <span className="text-[11px] font-mono text-[#888] flex-shrink-0 pt-0.5">{post.date}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* About */}
            <section className="px-6 sm:px-10 pt-4 pb-16 border-t border-black/[0.08]">
                <div className="flex justify-between items-center mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#888]">{zh ? "关于" : "About"}</span>
                    <span className="text-[11px] font-mono text-[#888]">002</span>
                </div>
                <p className="text-[#666] text-sm leading-relaxed max-w-md">
                    {zh
                        ? "左游 — Fintech 工程师，专注于金融领域的软件与 AI 工具开发。"
                        : "You Zuo — fintech engineer building software and AI tools for finance."}
                </p>
                <div className="flex gap-6 mt-6">
                    <a href="https://github.com/TyouzichaT" target="_blank" rel="noopener noreferrer"
                        className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#888] hover:text-black transition-colors">
                        Github ↗
                    </a>
                    <a href="https://www.linkedin.com/in/you-zuo-463753166/" target="_blank" rel="noopener noreferrer"
                        className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#888] hover:text-black transition-colors">
                        LinkedIn ↗
                    </a>
                    <a href="mailto:zuoyou1998@gmail.com"
                        className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#888] hover:text-black transition-colors">
                        {zh ? "邮件" : "Email"} ↗
                    </a>
                </div>
            </section>

            {/* Stack */}
            <section className="px-6 sm:px-10 pt-4 pb-16 border-t border-black/[0.08]">
                <div className="flex justify-between items-center mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#888]">{zh ? "技术栈" : "Stack"}</span>
                    <span className="text-[11px] font-mono text-[#888]">003</span>
                </div>
                <div className="flex flex-wrap gap-x-8 gap-y-3">
                    {stack.map((tech) => (
                        <span key={tech} className="text-sm font-mono text-[#666]">
                            {tech}
                        </span>
                    ))}
                </div>
            </section>

        </main>
    );
}
