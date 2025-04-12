export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Welcome to My GitHub Pages
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            This is a modern Next.js site deployed on GitHub Pages
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold mb-4">About</h2>
              <p className="text-gray-300">
                Learn more about this project and its features.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <p className="text-gray-300">
                Get in touch with me through various channels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
