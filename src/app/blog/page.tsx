import Link from 'next/link';

export default function BlogIndex() {
    const posts = [
        {
            slug: 'hello-world',
            title: 'Hello World',
            date: '2025-01-11',
            excerpt: 'Welcome to my new blog deployed on GitHub Pages!',
        },
        // Add more posts here
    ];

    return (
        <main className="min-h-screen pt-24 pb-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
                <div className="glass-card rounded-3xl p-8 mb-8 text-center">
                    <h1 className="text-4xl font-serif font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        Insights & Thoughts
                    </h1>
                    <p className="text-text-secondary"> Exploring the intersection of Finance, AI, and Technology.</p>
                </div>

                <div className="space-y-6">
                    {posts.map((post) => (
                        <div key={post.slug} className="glass-card rounded-2xl p-6 hover:bg-white/5 transition-colors border border-white/5">
                            <Link href={`/blog/${post.slug}`} className="block group">
                                <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors font-serif">
                                    {post.title}
                                </h2>
                                <div className="text-text-muted text-sm mb-4 font-mono">{post.date}</div>
                                <p className="text-text-secondary leading-relaxed">{post.excerpt}</p>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <Link href="/" className="inline-flex items-center text-primary hover:text-primary-glow transition-colors font-medium">← Back to Home</Link>
                </div>
            </div>
        </main>
    );
}
