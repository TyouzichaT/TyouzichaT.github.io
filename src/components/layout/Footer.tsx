export default function Footer() {
    return (
        <footer className="border-t border-black/[0.08] px-6 sm:px-10 py-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <span className="text-[11px] font-mono text-[#aaa] uppercase tracking-[0.15em]">
                You Zuo © {new Date().getFullYear()}
            </span>
            <div className="flex gap-6">
                <a href="https://github.com/TyouzichaT" target="_blank" rel="noopener noreferrer" className="text-[11px] font-mono text-[#888] hover:text-black transition-colors uppercase tracking-[0.1em]">
                    Github
                </a>
                <a href="https://www.linkedin.com/in/you-zuo-463753166/" target="_blank" rel="noopener noreferrer" className="text-[11px] font-mono text-[#888] hover:text-black transition-colors uppercase tracking-[0.1em]">
                    LinkedIn
                </a>
                <a href="mailto:zuoyou1998@gmail.com" className="text-[11px] font-mono text-[#888] hover:text-black transition-colors uppercase tracking-[0.1em]">
                    Email
                </a>
            </div>
        </footer>
    );
}
