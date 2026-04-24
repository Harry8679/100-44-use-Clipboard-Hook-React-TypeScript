import BasicClipboardDemo from './BasicClipboardDemo';
import CodeCopyDemo from './CodeCopyDemo';
import JsonCopyDemo from './JsonCopyDemo';
import UrlShareDemo from './UrlShareDemo';
import ContactCardDemo from './ContactCardDemo';
import ColorPaletteDemo from './ColorPaletteDemo';
import MultiFormatDemo from './MultiFormatDemo';

const ClipboardDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            📋 useClipboard Hook
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">
            Projet 44/100 • Clipboard Management
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            Hook avancé pour gérer le presse-papiers avec feedback visuel
          </p>
        </div>

        {/* Demos */}
        <div className="space-y-8">
          {/* Row 1 */}
          <div className="grid lg:grid-cols-2 gap-8">
            <BasicClipboardDemo />
            <CodeCopyDemo />
          </div>

          {/* Row 2 */}
          <div className="grid lg:grid-cols-2 gap-8">
            <JsonCopyDemo />
            <UrlShareDemo />
          </div>

          {/* Row 3 */}
          <div className="grid lg:grid-cols-2 gap-8">
            <ContactCardDemo />
            <ColorPaletteDemo />
          </div>

          {/* Row 4 */}
          <MultiFormatDemo />

          {/* Features */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              ✨ Fonctionnalités
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Copy Text</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Copier du texte simple
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Visual Feedback</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Retour visuel animé
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Auto-reset</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Réinitialisation auto
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Callbacks</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    onSuccess, onError
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Fallback</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Support anciens navigateurs
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Multi-Format</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Texte, HTML, JSON, etc.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Error Handling</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Gestion d'erreurs robuste
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Type-Safe</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    100% TypeScript
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Code Examples */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              💻 Exemples d'utilisation
            </h2>

            <div className="space-y-6">
              {/* Basic Usage */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Utilisation basique :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`import { useClipboard } from './hooks';

const { isCopied, copy } = useClipboard();

const handleCopy = () => {
  copy('Texte à copier');
};

return (
  <button onClick={handleCopy}>
    {isCopied ? '✓ Copié' : '📋 Copier'}
  </button>
);`}
                </pre>
              </div>

              {/* With Timeout */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Avec timeout personnalisé :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const { isCopied, copy } = useClipboard({
  timeout: 3000, // Reset après 3 secondes
});`}
                </pre>
              </div>

              {/* With Callbacks */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Avec callbacks :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const { copy, error } = useClipboard({
  onSuccess: () => {
    console.log('Copié avec succès !');
    // Afficher une notification, jouer un son, etc.
  },
  onError: (err) => {
    console.error('Erreur lors de la copie:', err);
    alert('Impossible de copier le texte');
  },
});

return (
  <div>
    <button onClick={() => copy('Mon texte')}>Copier</button>
    {error && <p>Erreur: {error.message}</p>}
  </div>
);`}
                </pre>
              </div>

              {/* Code Copy */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Copie de code :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const codeSnippet = \`const greet = (name) => {
  return \\\`Hello, \\\${name}!\\\`;
};\`;

const { isCopied, copy } = useClipboard();

return (
  <div className="code-block">
    <pre><code>{codeSnippet}</code></pre>
    <button onClick={() => copy(codeSnippet)}>
      {isCopied ? '✓ Copié' : '📋 Copier le code'}
    </button>
  </div>
);`}
                </pre>
              </div>

              {/* JSON Copy */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Copie de JSON :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const data = {
  name: 'John Doe',
  age: 30,
  email: 'john@example.com',
};

const { copy } = useClipboard();

const copyFormatted = () => {
  const json = JSON.stringify(data, null, 2);
  copy(json);
};

const copyMinified = () => {
  const json = JSON.stringify(data);
  copy(json);
};`}
                </pre>
              </div>

              {/* Multiple Copies */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Copie multiple avec tracking :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const { value, isCopied, copy } = useClipboard();

const items = [
  { id: 1, text: 'Premier item' },
  { id: 2, text: 'Deuxième item' },
  { id: 3, text: 'Troisième item' },
];

return (
  <div>
    {items.map((item) => (
      <button
        key={item.id}
        onClick={() => copy(item.text)}
        className={isCopied && value === item.text ? 'copied' : ''}
      >
        {isCopied && value === item.text ? '✓' : '📋'} {item.text}
      </button>
    ))}
  </div>
);`}
                </pre>
              </div>

              {/* Reset */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Avec reset manuel :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const { isCopied, copy, reset } = useClipboard({
  timeout: 5000,
});

return (
  <div>
    <button onClick={() => copy('Mon texte')}>
      {isCopied ? '✓ Copié' : '📋 Copier'}
    </button>
    
    {isCopied && (
      <button onClick={reset}>
        Réinitialiser
      </button>
    )}
  </div>
);`}
                </pre>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">🎯 Cas d'usage courants</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span>💻</span> Développement
                </h3>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Copie de code</li>
                  <li>• Snippets de commandes</li>
                  <li>• Tokens API</li>
                  <li>• Configuration JSON</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span>🎨</span> Design
                </h3>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Codes couleur (HEX, RGB)</li>
                  <li>• Variables CSS</li>
                  <li>• Palettes de couleurs</li>
                  <li>• Tokens de design</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span>🔗</span> Partage
                </h3>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• URLs de partage</li>
                  <li>• Liens d'invitation</li>
                  <li>• Codes promo</li>
                  <li>• Références</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span>📞</span> Contact
                </h3>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Email, téléphone</li>
                  <li>• Adresses</li>
                  <li>• vCard</li>
                  <li>• Infos de contact</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Browser Support */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              🌐 Support Navigateurs
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">
                  Clipboard API moderne (HTTPS requis)
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>✅ Chrome 66+</li>
                  <li>✅ Firefox 63+</li>
                  <li>✅ Safari 13.1+</li>
                  <li>✅ Edge 79+</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">
                  Fallback (document.execCommand)
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>✅ Internet Explorer 9+</li>
                  <li>✅ Navigateurs anciens</li>
                  <li>✅ HTTP (non-sécurisé)</li>
                  <li>⚠️ Deprecated mais fonctionnel</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClipboardDemo;