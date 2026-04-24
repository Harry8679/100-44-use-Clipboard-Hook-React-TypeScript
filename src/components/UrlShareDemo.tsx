import { useClipboard } from '../hooks';

const UrlShareDemo = () => {
  const { isCopied, copy } = useClipboard();

  const shareUrls = [
    {
      id: '1',
      platform: 'Site Web',
      emoji: '🌐',
      url: 'https://monsite.com/article/react-hooks-guide',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: '2',
      platform: 'GitHub',
      emoji: '💻',
      url: 'https://github.com/username/awesome-project',
      color: 'from-gray-700 to-gray-900',
    },
    {
      id: '3',
      platform: 'YouTube',
      emoji: '▶️',
      url: 'https://youtube.com/watch?v=dQw4w9WgXcQ',
      color: 'from-red-500 to-red-700',
    },
    {
      id: '4',
      platform: 'LinkedIn',
      emoji: '💼',
      url: 'https://linkedin.com/in/johndoe',
      color: 'from-blue-600 to-blue-800',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Partage d'URL
      </h3>

      <div className="space-y-4">
        {shareUrls.map((item) => (
          <div
            key={item.id}
            className="bg-gray-50 dark:bg-gray-700/50 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-600"
          >
            <div className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-12 h-12 rounded-full bg-linear-to-br ${item.color} flex items-center justify-center text-2xl`}>
                  {item.emoji}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 dark:text-white">
                    {item.platform}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                    {item.url}
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={item.url}
                  readOnly
                  className="flex-1 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-white text-sm font-mono"
                />
                <button
                  onClick={() => copy(item.url)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all transform whitespace-nowrap ${
                    isCopied
                      ? 'bg-green-500 text-white scale-105'
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  {isCopied ? '✓' : '📋'}
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
          <p className="text-sm text-blue-700 dark:text-blue-400">
            💡 Partagez facilement vos liens en un clic !
          </p>
        </div>
      </div>
    </div>
  );
};

export default UrlShareDemo;