import { translations, type Language } from '../lib/translations';

interface ForGovernmentProps {
  lang: Language;
}

export default function ForGovernment({ lang }: ForGovernmentProps) {
  const t = translations[lang].forGovernment;

  return (
    <section id="for-government" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-semibold mb-4">
              {lang === 'en' ? '🏛️ For Government' : '🏛️ সরকারের জন্য'}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h2>
            <p className="text-xl text-gray-300 mb-8">{t.subtitle}</p>

            <div className="space-y-6">
              {t.features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{['📊', '📈', '🎯'][index]}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{feature.title}</h4>
                    <p className="text-gray-400">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-8 px-8 py-4 bg-yellow-500 text-slate-900 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all shadow-lg">
              {t.cta}
            </button>
          </div>

          {/* Right - Dashboard Preview */}
          <div className="bg-slate-700/50 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="ml-4 text-gray-400 text-sm">Dashboard Preview</span>
            </div>

            <div className="space-y-4">
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-600/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-400">1,234</div>
                  <div className="text-xs text-gray-400">{lang === 'en' ? 'Active Alerts' : 'সক্রিয় সতর্কতা'}</div>
                </div>
                <div className="bg-slate-600/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">98.5%</div>
                  <div className="text-xs text-gray-400">{lang === 'en' ? 'Response Rate' : 'সাড়া হার'}</div>
                </div>
                <div className="bg-slate-600/50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">2.3s</div>
                  <div className="text-xs text-gray-400">{lang === 'en' ? 'Avg Time' : 'গড় সময়'}</div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-slate-600/30 rounded-xl p-4 h-40 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-4xl">🗺️</span>
                  <p className="text-gray-400 text-sm mt-2">{lang === 'en' ? 'Real-time District Map' : 'রিয়েল-টাইম জেলা মানচিত্র'}</p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-slate-600/30 rounded-xl p-4">
                <h5 className="text-sm font-semibold mb-3">{lang === 'en' ? 'Recent Activity' : 'সাম্প্রতিক কার্যকলাপ'}</h5>
                <div className="space-y-2">
                  {[
                    { district: 'Dhaka', type: 'SOS', time: '2m' },
                    { district: 'Chittagong', type: 'Follow Me', time: '5m' },
                    { district: 'Sylhet', type: 'Medical', time: '8m' }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <span className="text-gray-300">{item.district}</span>
                      <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs">{item.type}</span>
                      <span className="text-gray-500">{item.time} ago</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
