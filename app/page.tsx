'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">🎤 Phubbate2</div>
          <div className="space-x-4 flex">
            <Link href="/login" className="text-gray-600 hover:text-gray-900 transition">
              Login
            </Link>
            <Link href="/register" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Master Debate Skills with AI
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Learn debate techniques, practice with AI opponents, and receive instant feedback from expert judges.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/register" className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition">
            Get Started Free
          </Link>
          <Link href="#features" className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition">
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose Phubbate2?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">AI-Powered Feedback</h3>
            <p className="text-gray-600">
              Get instant feedback from AI judges trained on debate best practices.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Structured Learning</h3>
            <p className="text-gray-600">
              Learn debate from fundamentals to advanced strategies with curated lessons.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="text-4xl mb-4">⚔️</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Practice with AI</h3>
            <p className="text-gray-600">
              Debate against intelligent AI opponents at multiple difficulty levels.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Track Progress</h3>
            <p className="text-gray-600">
              Monitor your improvement with detailed statistics and analytics.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Prep Workspace</h3>
            <p className="text-gray-600">
              Organize your arguments, examples, and notes all in one place.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Global Topics</h3>
            <p className="text-gray-600">
              Debate on topics spanning education, technology, environment, and more.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Improve Your Debate Skills?</h2>
          <p className="text-xl mb-8">Join hundreds of students learning and practicing debate.</p>
          <Link href="/register" className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition inline-block">
            Start Free Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 Phubbate2. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}