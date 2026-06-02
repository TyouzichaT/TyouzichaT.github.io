"use client";

import Link from "next/link";
import { useLang } from "@/context/LanguageContext";

const posts = [
    {
        slug: "influence-retail-investor",
        title: { en: "The Six Weapons Aimed at Your Portfolio", zh: "六把瞄准你账户的枪" },
        subtitle: "散户投资者的影响力心理学",
        date: "2026-05-20",
        excerpt: {
            en: "Cialdini's six principles of influence — reciprocity, commitment, social proof, liking, authority, and scarcity — map with unsettling precision onto the psychology of the retail investor.",
            zh: "西奥迪尼的六大影响力原理——互惠、承诺、社会认同、喜好、权威与稀缺——以令人不安的精准度，映射出散户投资者的心理。",
        },
        tag: { en: "Behavioral Finance", zh: "行为金融" },
        index: "001",
    },
];

export default function BlogIndex() {
    const { lang } = useLang();
    const zh = lang === "zh";

    return (
        <main className="min-h-screen pt-14">

            <section className="px-6 sm:px-10 pt-20 pb-12 border-b border-black/[0.08]">
                <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#aaa] mb-14">
                    {zh ? "文章" : "Writing"}
                </p>
                <h1
                    className="text-[clamp(40px,7vw,96px)] leading-[0.92] tracking-[-0.02em] text-black"
                    style={{ fontFamily: "var(--font-faculty)" }}
                >
                    {zh ? <>洞察<br />与思考</> : <>Insights<br />&amp; Thoughts</>}
                </h1>
                <p className="text-[#888] text-sm mt-8 max-w-xs leading-relaxed">
                    {zh ? "金融、AI，以及连接两者的系统。" : "Finance, AI, and the systems that connect them."}
                </p>
            </section>

            <section className="px-6 sm:px-10 pt-12 pb-16">
                <div className="flex justify-between items-center mb-8">
                    <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#aaa]">{zh ? "所有文章" : "All Posts"}</span>
                    <span className="text-[11px] font-mono text-[#bbb]">00{posts.length}</span>
                </div>
                <div className="border-t border-black/[0.08]">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="block border-b border-black/[0.08] py-8 -mx-6 sm:-mx-10 px-6 sm:px-10 hover:bg-black/[0.02] transition-colors group"
                        >
                            <div className="flex justify-between items-start gap-6">
                                <div className="flex-1">
                                    {post.tag.en && (
                                        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#aaa] mb-3">
                                            {zh ? post.tag.zh : post.tag.en}
                                        </p>
                                    )}
                                    <h2 className="text-lg sm:text-xl font-medium text-black group-hover:text-[#555] transition-colors leading-snug">
                                        {zh ? post.title.zh : post.title.en}
                                    </h2>
                                    {post.subtitle && (
                                        <p className="text-sm text-[#aaa] mt-1">{post.subtitle}</p>
                                    )}
                                    <p className="text-sm text-[#888] mt-4 leading-relaxed max-w-xl">
                                        {zh ? post.excerpt.zh : post.excerpt.en}
                                    </p>
                                </div>
                                <div className="text-right flex-shrink-0">
                                    <span className="text-[11px] font-mono text-[#aaa] block">{post.date}</span>
                                    <span className="text-[10px] font-mono text-[#ccc] mt-1 block">{post.index}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-10">
                    <Link
                        href="/"
                        className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#888] hover:text-black transition-colors"
                    >
                        {zh ? "← 返回" : "← Back"}
                    </Link>
                </div>
            </section>

        </main>
    );
}
