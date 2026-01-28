import { translations, type Language } from '../lib/translations';

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang].hero;

  return (
    <section className="min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-green-700 flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              {t.title}
              <span className="block text-yellow-300">{t.titleHighlight}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-xl">
              {t.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-white text-red-600 rounded-full font-bold text-lg hover:bg-yellow-300 hover:text-red-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                {t.primaryCTA}
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                {t.secondaryCTA}
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold">500K+</div>
                <div className="text-white/80">{t.stats.users}</div>
              </div>
              <div>
                <div className="text-4xl font-bold">&lt;3s</div>
                <div className="text-white/80">{t.stats.responseTime}</div>
              </div>
              <div>
                <div className="text-4xl font-bold">64/64</div>
                <div className="text-white/80">{t.stats.coverage}</div>
              </div>
            </div>
          </div>

          {/* Right - Phone Mockup Preview */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-72 h-[580px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-b from-red-500 to-red-600 rounded-[2.5rem] flex flex-col items-center justify-center relative overflow-hidden">
                  {/* Status Bar */}
                  <div className="absolute top-0 w-full py-2 px-6 flex justify-between text-white text-xs">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <span>5G</span>
                      <span>100%</span>
                    </div>
                  </div>

                  {/* SOS Button */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse-ring" />
                    <div className="w-40 h-40 bg-white rounded-full flex flex-col items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
                      <span className="text-5xl">🆘</span>
                      <span className="text-red-600 font-bold text-xl mt-1">SOS</span>
                    </div>
                  </div>

                  {/* Bottom Text */}
                  <p className="absolute bottom-8 text-white text-center px-4">
                    {lang === 'en' ? 'Tap for Emergency' : 'জরুরি জন্য ট্যাপ করুন'}
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-80" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
