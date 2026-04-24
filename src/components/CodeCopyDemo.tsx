import { useClipboard } from '../hooks';
import type { CodeSnippet } from '../types';

const CodeCopyDemo = () => {
  const { isCopied, copy } = useClipboard();

  const codeSnippets: CodeSnippet[] = [
    {
      id: '1',
      language: 'javascript',
      title: 'Fonction fléchée',
      code: `const greet = (name) => {
  return \`Hello, \${name}!\`;
};

console.log(greet('World'));`,
    },
    {
      id: '2',
      language: 'typescript',
      title: 'Interface TypeScript',
      code: `interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const user: User = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  isActive: true,
};`,
    },
    {
      id: '3',
      language: 'css',
      title: 'Gradient CSS',
      code: `.gradient-bg {
  background: linear-gradient(
    135deg,
    #667eea 0%,
    #764ba2 100%
  );
}`,
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Copie de Code
      </h3>

      <div className="space-y-4">
        {codeSnippets.map((snippet) => (
          <div
            key={snippet.id}
            className="bg-gray-50 dark:bg-gray-700/50 rounded-xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded">
                  {snippet.language}
                </span>
                <span className="font-semibold text-gray-800 dark:text-white">
                  {snippet.title}
                </span>
              </div>
              <button
                onClick={() => copy(snippet.code)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all transform ${
                  isCopied
                    ? 'bg-green-500 text-white scale-105'
                    : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-500'
                }`}
              >
                {isCopied ? '✓ Copié' : '📋 Copier'}
              </button>
            </div>

            {/* Code Block */}
            <pre className="p-4 overflow-x-auto">
              <code className="text-sm text-gray-800 dark:text-gray-100 font-mono">
                {snippet.code}
              </code>
            </pre>
          </div>
        ))}

        <div className="p-4 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
          <p className="text-sm text-purple-700 dark:text-purple-400">
            💡 Format de code préservé avec espaces et indentation
          </p>
        </div>
      </div>
    </div>
  );
};

export default CodeCopyDemo;