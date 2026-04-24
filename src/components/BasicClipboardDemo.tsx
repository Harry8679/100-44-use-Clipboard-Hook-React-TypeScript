import { useClipboard } from '../hooks';

const BasicClipboardDemo = () => {
  const { isCopied, copy } = useClipboard({
    timeout: 2000,
  });

  const sampleText = 'Bonjour ! Ceci est un texte d\'exemple à copier. 👋';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Copie Basique
      </h3>

      <div className="space-y-6">
        {/* Text Display */}
        <div className="p-6 bg-linear-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border-2 border-dashed border-blue-300 dark:border-blue-700">
          <p className="text-gray-800 dark:text-white text-lg">
            {sampleText}
          </p>
        </div>

        {/* Copy Button */}
        <button
          onClick={() => copy(sampleText)}
          className={`w-full px-6 py-4 rounded-lg font-semibold transition-all transform ${
            isCopied
              ? 'bg-green-500 text-white scale-105'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          {isCopied ? (
            <span className="flex items-center justify-center gap-2">
              <span className="text-2xl">✓</span>
              Copié !
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <span className="text-2xl">📋</span>
              Copier le texte
            </span>
          )}
        </button>

        {/* Info */}
        <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
          <p className="text-sm text-blue-700 dark:text-blue-400">
            💡 Cliquez sur le bouton pour copier le texte dans le presse-papiers
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasicClipboardDemo;