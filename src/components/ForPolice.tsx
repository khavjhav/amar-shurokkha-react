import { translations, type Language } from '../lib/translations';

interface ForPoliceProps {
  lang: Language;
}

export default function ForPolice({ lang }: ForPoliceProps) {
  const t = translations[lang].forPolice;

  return (
    <section id="for-police" className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Police App Preview */}
          <div className="order-2 lg:order-1">
            <div className="bg-blue-800/30 rounded-2xl p-6 shadow-xl border border-blue-700/50">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-xl">👮</span>
                  </div>
                  <div>
                    <div className="font-bold">Dhanmondi PS</div>
                    <div className="text-xs text-blue-300">{lang === 'en' ? 'Online' : 'অনলাইন'} • 5 {lang === 'en' ? 'Officers' : 'অফিসার'}</div>
                  </div>
                </div>
                <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                  {lang === 'en' ? 'Active' : 'সক্রিয়'}
                </div>
              </div>

              {/* Alert Card */}
              <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-4 mb-4 animate-pulse">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🚨</span>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-bold text-red-400">{lang === 'en' ? 'NEW SOS ALERT' : 'নতুন এসওএস সতর্কতা'}</div>
                        <div className="text-sm text-gray-300">Riya Ahmed, 23F</div>
                      </div>
                      <div className="text-xs text-gray-400">30s ago</div>
                    </div>
                    <div className="mt-2 text-sm text-gray-300">
                      📍 Mirpur Road, Near Signal
                    </div>
                    <div className="mt-3 flex gap-2">
                      <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-500">
                        {lang === 'en' ? 'Accept' : 'গ্রহণ'}
                      </button>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-500">
                        {lang === 'en' ? 'View Details' : 'বিস্তারিত'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pending Alerts */}
              <div className="space-y-3">
                <h5 className="text-sm font-semibold text-gray-400">{lang === 'en' ? 'Pending Alerts' : 'অপেক্ষমাণ সতর্কতা'} (3)</h5>
                {[
                  { name: 'Kamal Hossain', type: 'Medical', time: '2m', color: 'yellow' },
                  { name: 'Fatima Begum', type: 'Follow Me', time: '5m', color: 'green' },
                  { name: 'Anonymous', type: 'Crime Report', time: '10m', color: 'orange' }
                ].map((alert, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-${alert.color}-500`} />
                      <div>
                        <div className="text-sm font-medium">{alert.name}</div>
                        <div className="text-xs text-gray-400">{alert.type}</div>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{alert.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold mb-4">
              {lang === 'en' ? '🚔 For Police' : '🚔 পুলিশের জন্য'}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h2>
            <p className="text-xl text-gray-300 mb-8">{t.subtitle}</p>

            <div className="space-y-6">
              {t.features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{['🔔', '📋', '🤝'][index]}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{feature.title}</h4>
                    <p className="text-gray-400">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-8 px-8 py-4 bg-blue-500 text-white rounded-xl font-bold text-lg hover:bg-blue-400 transition-all shadow-lg">
              {t.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
