import { useState } from 'react';
import { useClipboard } from '../hooks';

const JsonCopyDemo = () => {
  const { isCopied, copy } = useClipboard();
  const [formatted, setFormatted] = useState(true);

  const jsonData = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    address: {
      street: '123 Main St',
      city: 'Paris',
      country: 'France',
    },
    skills: ['React', 'TypeScript', 'Node.js'],
    isActive: true,
  };

  const formattedJson = JSON.stringify(jsonData, null, 2);
  const minifiedJson = JSON.stringify(jsonData);

  const handleCopy = () => {
    copy(formatted ? formattedJson : minifiedJson);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Copie de JSON
      </h3>

      <div className="space-y-6">
        {/* Format Toggle */}
        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
          <span className="font-semibold text-gray-800 dark:text-white">
            Format :
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setFormatted(true)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                formatted
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-white'
              }`}
            >
              Formaté
            </button>
            <button
              onClick={() => setFormatted(false)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                !formatted
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-white'
              }`}
            >
              Minifié
            </button>
          </div>
        </div>

        {/* JSON Display */}
        <div className="bg-gray-900 rounded-xl overflow-hidden">
          <div className="flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700">
            <span className="text-green-400 font-mono text-sm">data.json</span>
            <button
              onClick={handleCopy}
              className={`px-4 py-2 rounded-lg font-semibold transition-all transform ${
                isCopied
                  ? 'bg-green-500 text-white scale-105'
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              {isCopied ? '✓ Copié' : '📋 Copier'}
            </button>
          </div>

          <pre className="p-4 overflow-x-auto max-h-96">
            <code className="text-sm text-gray-100 font-mono">
              {formatted ? formattedJson : minifiedJson}
            </code>
          </pre>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg text-center">
            <div className="text-sm text-blue-600 dark:text-blue-400 mb-1">
              Formaté
            </div>
            <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">
              {formattedJson.length}
            </div>
            <div className="text-xs text-blue-500 dark:text-blue-500">
              caractères
            </div>
          </div>

          <div className="p-4 bg-purple-100 dark:bg-purple-900/20 rounded-lg text-center">
            <div className="text-sm text-purple-600 dark:text-purple-400 mb-1">
              Minifié
            </div>
            <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">
              {minifiedJson.length}
            </div>
            <div className="text-xs text-purple-500 dark:text-purple-500">
              caractères
            </div>
          </div>
        </div>

        <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-lg">
          <p className="text-sm text-green-700 dark:text-green-400">
            💡 Économie de {formattedJson.length - minifiedJson.length} caractères avec la version minifiée
          </p>
        </div>
      </div>
    </div>
  );
};

export default JsonCopyDemo;