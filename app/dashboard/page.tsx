'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    // For now, just show a welcome message
    // In production, fetch actual user data from API
    const mockUser = { username: 'User', email: 'user@example.com' };
    setUser(mockUser);
    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">🎤 Phubbate2</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Welcome, {user?.username}!</span>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="#" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Learn</h3>
            <p className="text-gray-600">Access structured debate lessons</p>
          </Link>

          <Link href="#" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4">⚔️</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Train</h3>
            <p className="text-gray-600">Practice with AI opponents</p>
          </Link>

          <Link href="#" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Prepare</h3>
            <p className="text-gray-600">Organize your debate arguments</p>
          </Link>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">0</div>
              <p className="text-gray-600 text-sm">Lessons Completed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">0</div>
              <p className="text-gray-600 text-sm">Training Hours</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">0</div>
              <p className="text-gray-600 text-sm">Practice Score</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">0</div>
              <p className="text-gray-600 text-sm">Overall Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}