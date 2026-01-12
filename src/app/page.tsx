"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[minmax(180px,auto)]">

          {/* Main Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:col-span-2 lg:col-span-2 row-span-2 glass-card rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -mr-32 -mt-32"></div>

            <div className="z-10">
              <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4 leading-tight">
                Architecting <br />
                <span className="text-gradient">Financial Intelligence</span>
              </h1>
              <p className="text-text-secondary text-lg max-w-md">
                Bridging traditional finance with AI-driven predictive modeling. Building next-gen tools for the global market.
              </p>
            </div>

            <div className="z-10 mt-8">
              <Link href="/dashboard" className="inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors">
                Explore Dashboard <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-3xl p-6 flex flex-col items-center text-center justify-center relative"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/30 mb-4 shadow-lg shadow-primary/20">
              <Image
                src="/images/profile.jpg"
                alt="You Zuo"
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="font-serif font-bold text-xl">You Zuo</h2>
            <p className="text-sm text-text-muted mt-1 font-mono">Quant Developer</p>
            <div className="flex gap-2 mt-4">
              <a href="https://github.com/TyouzichaT" target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/you-zuo-463753166/" target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-3xl p-6 flex flex-col justify-center"
          >
            <h3 className="text-text-muted text-sm font-mono uppercase tracking-wider mb-4">Core Stack</h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "React", "Next.js", "PyTorch", "Tailwind"].map(tech => (
                <span key={tech} className="px-3 py-1 bg-white/5 rounded-lg text-xs font-mono border border-white/5 text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Global Footprint Map (Stylized) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 glass-card rounded-3xl p-6 min-h-[200px] relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-no-repeat bg-center bg-contain filter invert"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-serif font-bold mb-2">Global Experience</h3>
              <p className="text-text-secondary text-sm max-w-xs">Working across time zones to deliver world-class financial infrastructure.</p>

              <div className="mt-4 flex gap-8">
                <div>
                  <div className="text-2xl font-mono font-bold text-primary">NY</div>
                  <div className="text-xs text-text-muted">USA</div>
                </div>
                <div>
                  <div className="text-2xl font-mono font-bold text-secondary">LDN</div>
                  <div className="text-xs text-text-muted">UK</div>
                </div>
                <div>
                  <div className="text-2xl font-mono font-bold text-white">HK</div>
                  <div className="text-xs text-text-muted">ASIA</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Latest Insight (Blog Teaser) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 glass-card rounded-3xl p-6 hover:bg-white/5 transition-colors cursor-pointer group"
          >
            <Link href="/blog" className="block h-full">
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 rounded-full border border-secondary/30 text-secondary text-xs font-mono bg-secondary/10">Latest Insight</span>
                <ArrowRightIcon className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Why AI is the Future of Alpha Generation</h3>
              <p className="text-text-secondary text-sm line-clamp-2">
                Exploring how large language models and predictive analytics are reshaping the landscape of quantitative trading...
              </p>
            </Link>
          </motion.div>
        </div>

        {/* Areas of Expertise / Tech Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass rounded-2xl py-8 px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <h4 className="text-3xl font-bold text-white mb-1">5+</h4>
            <p className="text-xs text-text-muted font-mono uppercase">Years Experience</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-white mb-1">Data</h4>
            <p className="text-xs text-text-muted font-mono uppercase">Science Expert</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-white mb-1">Full</h4>
            <p className="text-xs text-text-muted font-mono uppercase">Stack Dev</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-white mb-1">Quant</h4>
            <p className="text-xs text-text-muted font-mono uppercase">Finance</p>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
