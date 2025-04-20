import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../api/axios';

const Home = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');
  const { user } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setShortUrl('');

    try {
      const response = await api.post('/urls', { originalUrl: url });
      setShortUrl(response.data.shortUrl);
    } catch (err) {
      setError('Failed to shorten URL. Please try again.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Shorten Your URLs
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Create short, memorable links for your long URLs. Track clicks and manage your links all in one place.
        </p>
      </div>

      <div className="mt-10">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-700">
              Enter your URL
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type="url"
                name="url"
                id="url"
                required
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                placeholder="https://example.com"
              />
            </div>
          </div>

          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">{error}</h3>
                </div>
              </div>
            </div>
          )}

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Shorten URL
            </button>
          </div>
        </form>

        {shortUrl && (
          <div className="mt-8">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Your Short URL</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Share this link with others
                </p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <div className="flex items-center space-x-4">
                  <a
                    href={shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 break-all"
                  >
                    {shortUrl}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {!user && (
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Want to track your URLs?{' '}
              <a href="/register" className="font-medium text-blue-600 hover:text-blue-500">
                Create an account
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home; 