import { translations, type Language } from '../lib/translations';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang].footer;

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-green-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                AS
              </div>
              <span className="text-2xl font-bold">
                {lang === 'en' ? 'Amar Shurokkha' : 'আমার সুরক্ষা'}
              </span>
            </div>
            <p className="text-gray-400 max-w-md">{t.tagline}</p>
            <div className="mt-4 flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span>📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span>🐦</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span>📸</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">{lang === 'en' ? 'Quick Links' : 'দ্রুত লিঙ্ক'}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors">{lang === 'en' ? 'Features' : 'বৈশিষ্ট্য'}</a></li>
              <li><a href="#demo" className="hover:text-white transition-colors">{lang === 'en' ? 'Demo' : 'ডেমো'}</a></li>
              <li><a href="#for-government" className="hover:text-white transition-colors">{lang === 'en' ? 'For Government' : 'সরকারের জন্য'}</a></li>
              <li><a href="#for-police" className="hover:text-white transition-colors">{lang === 'en' ? 'For Police' : 'পুলিশের জন্য'}</a></li>
            </ul>
          </div>

          {/* Emergency */}
          <div>
            <h4 className="font-bold mb-4">{lang === 'en' ? 'Emergency' : 'জরুরি'}</h4>
            <div className="bg-red-600/20 border border-red-600/50 rounded-xl p-4">
              <div className="text-3xl font-bold text-red-400">999</div>
              <div className="text-gray-400 text-sm">{lang === 'en' ? 'National Emergency' : 'জাতীয় জরুরি'}</div>
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              {lang === 'en'
                ? 'Always call 999 in life-threatening emergencies'
                : 'জীবন-হুমকি জরুরি অবস্থায় সর্বদা ৯৯৯ এ কল করুন'
              }
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {t.copyright}</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">{lang === 'en' ? 'Privacy Policy' : 'গোপনীয়তা নীতি'}</a>
            <a href="#" className="hover:text-white transition-colors">{lang === 'en' ? 'Terms of Service' : 'সেবার শর্তাবলী'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
