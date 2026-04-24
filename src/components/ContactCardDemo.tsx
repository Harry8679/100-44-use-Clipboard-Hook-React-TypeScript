import { useClipboard } from '../hooks';
import type { ContactCard } from '../types';

const ContactCardDemo = () => {
  const { isCopied, copy } = useClipboard();

  const contact: ContactCard = {
    name: 'Jean Dupont',
    email: 'jean.dupont@example.com',
    phone: '+33 6 12 34 56 78',
    company: 'Tech Solutions',
    website: 'https://techsolutions.com',
  };

  const formatVCard = (contact: ContactCard): string => {
    return `BEGIN:VCARD
VERSION:3.0
FN:${contact.name}
ORG:${contact.company}
TEL:${contact.phone}
EMAIL:${contact.email}
URL:${contact.website}
END:VCARD`;
  };

  const formatPlainText = (contact: ContactCard): string => {
    return `${contact.name}
${contact.company}
Email: ${contact.email}
Tél: ${contact.phone}
Web: ${contact.website}`;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Carte de Contact
      </h3>

      <div className="space-y-6">
        {/* Contact Card */}
        <div className="p-6 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border-2 border-purple-300 dark:border-purple-700">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {contact.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1">
              <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                {contact.name}
              </h4>
              <p className="text-purple-600 dark:text-purple-400 font-semibold">
                {contact.company}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📧</span>
              <span className="text-gray-700 dark:text-gray-300">{contact.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📱</span>
              <span className="text-gray-700 dark:text-gray-300">{contact.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌐</span>
              <span className="text-gray-700 dark:text-gray-300">{contact.website}</span>
            </div>
          </div>
        </div>

        {/* Copy Options */}
        <div className="space-y-3">
          <h4 className="font-bold text-gray-800 dark:text-white">
            Copier les informations :
          </h4>

          <button
            onClick={() => copy(contact.email)}
            className="w-full p-4 bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-left border border-gray-200 dark:border-gray-600"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📧</span>
                <div>
                  <div className="font-semibold text-gray-800 dark:text-white">
                    Email uniquement
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {contact.email}
                  </div>
                </div>
              </div>
              <span className="text-blue-500">📋</span>
            </div>
          </button>

          <button
            onClick={() => copy(contact.phone)}
            className="w-full p-4 bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-left border border-gray-200 dark:border-gray-600"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📱</span>
                <div>
                  <div className="font-semibold text-gray-800 dark:text-white">
                    Téléphone uniquement
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {contact.phone}
                  </div>
                </div>
              </div>
              <span className="text-blue-500">📋</span>
            </div>
          </button>

          <button
            onClick={() => copy(formatPlainText(contact))}
            className="w-full p-4 bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-left border border-gray-200 dark:border-gray-600"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📝</span>
                <div>
                  <div className="font-semibold text-gray-800 dark:text-white">
                    Toutes les infos (texte)
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Format texte simple
                  </div>
                </div>
              </div>
              <span className="text-blue-500">📋</span>
            </div>
          </button>

          <button
            onClick={() => copy(formatVCard(contact))}
            className="w-full p-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-colors text-left"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">👤</span>
                <div>
                  <div className="font-semibold">
                    Copier vCard
                  </div>
                  <div className="text-sm text-white/90">
                    Format compatible contacts
                  </div>
                </div>
              </div>
              <span className="text-2xl">📋</span>
            </div>
          </button>
        </div>

        {/* Success Message */}
        {isCopied && (
          <div className="p-4 bg-green-500 text-white rounded-lg font-bold text-center animate-scale-in">
            ✓ Copié dans le presse-papiers !
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactCardDemo;