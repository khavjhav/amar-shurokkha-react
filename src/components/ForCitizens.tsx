import { translations, type Language } from '../lib/translations';

interface ForCitizensProps {
  lang: Language;
}

export default function ForCitizens({ lang }: ForCitizensProps) {
  const t = translations[lang].forCitizens;

  return (
    <section id="for-citizens" className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            {lang === 'en' ? '👨‍👩‍👧‍👦 For Citizens' : '👨‍👩‍👧‍👦 নাগরিকদের জন্য'}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {t.features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-green-100 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">{['🛡️', '👨‍👩‍👧', '🤝'][index]}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* App Store Buttons */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            {lang === 'en' ? 'Available on all platforms' : 'সমস্ত প্ল্যাটফর্মে উপলব্ধ'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all">
              <span className="text-2xl">🍎</span>
              <div className="text-left">
                <div className="text-xs text-gray-400">Download on the</div>
                <div className="font-semibold">App Store</div>
              </div>
            </button>
            <button className="flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all">
              <span className="text-2xl">▶️</span>
              <div className="text-left">
                <div className="text-xs text-gray-400">Get it on</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </button>
          </div>

          <button className="mt-8 px-10 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full font-bold text-lg hover:from-green-500 hover:to-green-600 transition-all shadow-lg transform hover:-translate-y-1">
            {t.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
