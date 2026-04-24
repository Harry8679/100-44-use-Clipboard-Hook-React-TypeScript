import { useState } from 'react';
import { useClipboard } from '../hooks';

type CopyFormat = 'plain' | 'html' | 'markdown' | 'json';

const MultiFormatDemo = () => {
  const { isCopied, copy } = useClipboard();
  const [selectedFormat, setSelectedFormat] = useState<CopyFormat>('plain');

  const content = {
    title: 'Guide React Hooks',
    description: 'Apprenez à maîtriser les hooks React avec ce guide complet.',
    url: 'https://example.com/react-hooks-guide',
  };

  const formats = {
    plain: `${content.title}

${content.description}

Lien: ${content.url}`,

    html: `<article>
  <h1>${content.title}</h1>
  <p>${content.description}</p>
  <a href="${content.url}">En savoir plus</a>
</article>`,

    markdown: `# ${content.title}

${content.description}

[En savoir plus](${content.url})`,

    json: JSON.stringify(content, null, 2),
  };

  const formatLabels: Record<CopyFormat, { label: string; emoji: string; color: string }> = {
    plain: { label: 'Texte brut', emoji: '📝', color: 'bg-gray-500' },
    html: { label: 'HTML', emoji: '🌐', color: 'bg-orange-500' },
    markdown: { label: 'Markdown', emoji: '📄', color: 'bg-blue-500' },
    json: { label: 'JSON', emoji: '{ }', color: 'bg-green-500' },
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Multi-Format
      </h3>

      <div className="space-y-6">
        {/* Format Selector */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Choisir un format :
          </label>
          <div className="grid grid-cols-2 gap-3">
            {(Object.keys(formats) as CopyFormat[]).map((format) => (
              <button
                key={format}
                onClick={() => setSelectedFormat(format)}
                className={`p-4 rounded-lg font-semibold transition-all transform ${
                  selectedFormat === format
                    ? `${formatLabels[format].color} text-white scale-105`
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <div className="text-2xl mb-1">{formatLabels[format].emoji}</div>
                <div className="text-sm">{formatLabels[format].label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Preview */}
        <div className="bg-gray-900 rounded-xl overflow-hidden">
          <div className="flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{formatLabels[selectedFormat].emoji}</span>
              <span className="text-white font-semibold">
                {formatLabels[selectedFormat].label}
              </span>
            </div>
            <button
              onClick={() => copy(formats[selectedFormat])}
              className={`px-6 py-2 rounded-lg font-semibold transition-all transform ${
                isCopied
                  ? 'bg-green-500 text-white scale-105'
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              {isCopied ? '✓ Copié' : '📋 Copier'}
            </button>
          </div>

          <pre className="p-4 overflow-x-auto">
            <code className="text-sm text-gray-100 font-mono whitespace-pre-wrap">
              {formats[selectedFormat]}
            </code>
          </pre>
        </div>

        {/* Info */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg text-center">
            <div className="text-sm text-blue-600 dark:text-blue-400 mb-1">
              Longueur
            </div>
            <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">
              {formats[selectedFormat].length}
            </div>
            <div className="text-xs text-blue-500 dark:text-blue-500">
              caractères
            </div>
          </div>

          <div className="p-4 bg-purple-100 dark:bg-purple-900/20 rounded-lg text-center">
            <div className="text-sm text-purple-600 dark:text-purple-400 mb-1">
              Lignes
            </div>
            <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">
              {formats[selectedFormat].split('\n').length}
            </div>
            <div className="text-xs text-purple-500 dark:text-purple-500">
              lignes
            </div>
          </div>
        </div>

        <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-lg">
          <p className="text-sm text-green-700 dark:text-green-400">
            💡 Le même contenu dans différents formats pour tous vos besoins !
          </p>
        </div>
      </div>
    </div>
  );
};

export default MultiFormatDemo;