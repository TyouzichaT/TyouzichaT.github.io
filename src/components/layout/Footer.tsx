export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <div className="mb-4 md:mb-0">
                    <span className="font-serif text-white text-lg mr-2">You Zuo</span>
                    <span>© {new Date().getFullYear()}</span>
                </div>

                <div className="flex space-x-6">
                    <a href="https://github.com/TyouzichaT" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/you-zuo-463753166/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        LinkedIn
                    </a>
                    <a href="mailto:zuoyou1998@gmail.com" className="hover:text-white transition-colors">
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}
