import { useClipboard } from '../hooks';
import type { ColorInfo } from '../types';

const ColorPaletteDemo = () => {
  const { isCopied, copy, value } = useClipboard();

  const colors: ColorInfo[] = [
    {
      name: 'Ocean Blue',
      hex: '#0EA5E9',
      rgb: 'rgb(14, 165, 233)',
      hsl: 'hsl(199, 89%, 48%)',
    },
    {
      name: 'Sunset Orange',
      hex: '#F97316',
      rgb: 'rgb(249, 115, 22)',
      hsl: 'hsl(25, 95%, 53%)',
    },
    {
      name: 'Forest Green',
      hex: '#22C55E',
      rgb: 'rgb(34, 197, 94)',
      hsl: 'hsl(142, 71%, 45%)',
    },
    {
      name: 'Royal Purple',
      hex: '#A855F7',
      rgb: 'rgb(168, 85, 247)',
      hsl: 'hsl(271, 91%, 65%)',
    },
    {
      name: 'Ruby Red',
      hex: '#EF4444',
      rgb: 'rgb(239, 68, 68)',
      hsl: 'hsl(0, 84%, 60%)',
    },
    {
      name: 'Golden Yellow',
      hex: '#EAB308',
      rgb: 'rgb(234, 179, 8)',
      hsl: 'hsl(45, 93%, 47%)',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Palette de Couleurs
      </h3>

      <div className="space-y-4">
        {colors.map((color) => (
          <div
            key={color.hex}
            className="bg-gray-50 dark:bg-gray-700/50 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-600"
          >
            <div className="flex items-stretch">
              {/* Color Preview */}
              <div
                className="w-24 shrink-0"
                style={{ backgroundColor: color.hex }}
              />

              {/* Color Info */}
              <div className="flex-1 p-4">
                <h4 className="font-bold text-gray-800 dark:text-white mb-3">
                  {color.name}
                </h4>

                <div className="space-y-2">
                  <button
                    onClick={() => copy(color.hex)}
                    className={`w-full flex items-center justify-between p-2 rounded-lg transition-all ${
                      isCopied && value === color.hex
                        ? 'bg-green-100 dark:bg-green-900/20 border border-green-500'
                        : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500'
                    }`}
                  >
                    <span className="font-mono text-sm text-gray-700 dark:text-gray-300">
                      HEX: {color.hex}
                    </span>
                    <span className="text-blue-500">
                      {isCopied && value === color.hex ? '✓' : '📋'}
                    </span>
                  </button>

                  <button
                    onClick={() => copy(color.rgb)}
                    className={`w-full flex items-center justify-between p-2 rounded-lg transition-all ${
                      isCopied && value === color.rgb
                        ? 'bg-green-100 dark:bg-green-900/20 border border-green-500'
                        : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500'
                    }`}
                  >
                    <span className="font-mono text-sm text-gray-700 dark:text-gray-300">
                      RGB: {color.rgb}
                    </span>
                    <span className="text-blue-500">
                      {isCopied && value === color.rgb ? '✓' : '📋'}
                    </span>
                  </button>

                  <button
                    onClick={() => copy(color.hsl)}
                    className={`w-full flex items-center justify-between p-2 rounded-lg transition-all ${
                      isCopied && value === color.hsl
                        ? 'bg-green-100 dark:bg-green-900/20 border border-green-500'
                        : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500'
                    }`}
                  >
                    <span className="font-mono text-sm text-gray-700 dark:text-gray-300">
                      HSL: {color.hsl}
                    </span>
                    <span className="text-blue-500">
                      {isCopied && value === color.hsl ? '✓' : '📋'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="p-4 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
          <p className="text-sm text-purple-700 dark:text-purple-400">
            🎨 Cliquez sur un format de couleur pour le copier
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColorPaletteDemo;