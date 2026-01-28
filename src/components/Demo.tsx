import { useState } from 'react';
import { translations, type Language } from '../lib/translations';

interface DemoProps {
  lang: Language;
}

type Scenario = 'sos' | 'follow' | 'voice';

export default function Demo({ lang }: DemoProps) {
  const t = translations[lang].demo;
  const [activeScenario, setActiveScenario] = useState<Scenario>('sos');
  const [sosTriggered, setSosTriggered] = useState(false);
  const [followActive, setFollowActive] = useState(false);
  const [voiceListening, setVoiceListening] = useState(false);

  const handleSOS = () => {
    setSosTriggered(true);
    setTimeout(() => setSosTriggered(false), 3000);
  };

  const handleFollow = () => {
    setFollowActive(!followActive);
  };

  const handleVoice = () => {
    setVoiceListening(true);
    setTimeout(() => setVoiceListening(false), 2000);
  };

  return (
    <section id="demo" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Scenario Buttons */}
          <div className="flex flex-col gap-4 order-2 lg:order-1">
            <button
              onClick={() => setActiveScenario('sos')}
              className={`p-6 rounded-2xl text-left transition-all w-64 ${activeScenario === 'sos'
                  ? 'bg-red-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-800 hover:bg-red-50 border border-gray-200'
                }`}
            >
              <div className="text-3xl mb-2">🚨</div>
              <h4 className="text-xl font-bold">{t.scenarios.sos}</h4>
              <p className={activeScenario === 'sos' ? 'text-white/80' : 'text-gray-500'}>
                {t.scenarios.sosDesc}
              </p>
            </button>

            <button
              onClick={() => setActiveScenario('follow')}
              className={`p-6 rounded-2xl text-left transition-all w-64 ${activeScenario === 'follow'
                  ? 'bg-green-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-800 hover:bg-green-50 border border-gray-200'
                }`}
            >
              <div className="text-3xl mb-2">📍</div>
              <h4 className="text-xl font-bold">{t.scenarios.follow}</h4>
              <p className={activeScenario === 'follow' ? 'text-white/80' : 'text-gray-500'}>
                {t.scenarios.followDesc}
              </p>
            </button>

            <button
              onClick={() => setActiveScenario('voice')}
              className={`p-6 rounded-2xl text-left transition-all w-64 ${activeScenario === 'voice'
                  ? 'bg-purple-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-800 hover:bg-purple-50 border border-gray-200'
                }`}
            >
              <div className="text-3xl mb-2">🎤</div>
              <h4 className="text-xl font-bold">{t.scenarios.voice}</h4>
              <p className={activeScenario === 'voice' ? 'text-white/80' : 'text-gray-500'}>
                {t.scenarios.voiceDesc}
              </p>
            </button>
          </div>

          {/* Phone Mockup */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-80 h-[640px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10" />

                  {/* Status Bar */}
                  <div className="absolute top-0 w-full py-2 px-6 flex justify-between text-gray-800 text-xs z-20">
                    <span className="ml-2">9:41</span>
                    <div className="flex gap-1 mr-2">
                      <span>5G</span>
                      <span>🔋</span>
                    </div>
                  </div>

                  {/* Screen Content */}
                  <div className="w-full h-full pt-8">
                    {/* SOS Screen */}
                    {activeScenario === 'sos' && (
                      <div className="w-full h-full bg-gradient-to-b from-red-500 to-red-600 flex flex-col items-center justify-center p-6">
                        <p className="text-white/80 mb-4 text-center">
                          {lang === 'en' ? 'Tap the button in emergency' : 'জরুরি অবস্থায় বোতাম ট্যাপ করুন'}
                        </p>

                        <div className="relative">
                          {!sosTriggered && (
                            <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse-ring" style={{ width: '180px', height: '180px', marginLeft: '-10px', marginTop: '-10px' }} />
                          )}
                          <button
                            onClick={handleSOS}
                            className={`w-40 h-40 rounded-full flex flex-col items-center justify-center shadow-lg transition-all ${sosTriggered
                                ? 'bg-green-500 scale-90'
                                : 'bg-white hover:scale-105'
                              }`}
                          >
                            <span className="text-5xl">{sosTriggered ? '✓' : '🆘'}</span>
                            <span className={`font-bold text-xl mt-1 ${sosTriggered ? 'text-white' : 'text-red-600'}`}>
                              {sosTriggered ? (lang === 'en' ? 'SENT!' : 'পাঠানো!') : 'SOS'}
                            </span>
                          </button>
                        </div>

                        {sosTriggered && (
                          <div className="mt-6 bg-white/20 rounded-xl p-4 text-white text-center animate-pulse">
                            <p className="font-bold">
                              {lang === 'en' ? 'Alert Sent!' : 'সতর্কতা পাঠানো হয়েছে!'}
                            </p>
                            <p className="text-sm">
                              {lang === 'en' ? 'Notifying 3 contacts + 999' : '৩ যোগাযোগ + ৯৯৯ কে অবহিত করা হচ্ছে'}
                            </p>
                          </div>
                        )}

                        <p className="absolute bottom-8 text-white/60 text-sm">
                          {lang === 'en' ? 'Or triple-press power button' : 'অথবা পাওয়ার বোতাম তিনবার চাপুন'}
                        </p>
                      </div>
                    )}

                    {/* Follow Me Screen */}
                    {activeScenario === 'follow' && (
                      <div className="w-full h-full bg-gradient-to-b from-green-500 to-green-600 flex flex-col items-center p-6">
                        <h3 className="text-white font-bold text-xl mt-4 mb-2">
                          {lang === 'en' ? 'Follow Me Mode' : 'ফলো মি মোড'}
                        </h3>
                        <p className="text-white/80 text-sm text-center mb-4">
                          {lang === 'en' ? 'Share live location with trusted contacts' : 'বিশ্বস্ত পরিচিতদের সাথে লাইভ লোকেশন শেয়ার করুন'}
                        </p>

                        {/* Map Placeholder */}
                        <div className="w-full flex-1 bg-green-400/30 rounded-xl mb-4 relative overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-6xl">🗺️</div>
                          </div>
                          {followActive && (
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                              <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping" />
                              <div className="absolute top-0 left-0 w-4 h-4 bg-blue-600 rounded-full" />
                            </div>
                          )}
                        </div>

                        <button
                          onClick={handleFollow}
                          className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${followActive
                              ? 'bg-red-500 text-white'
                              : 'bg-white text-green-600'
                            }`}
                        >
                          {followActive
                            ? (lang === 'en' ? '⏹ Stop Sharing' : '⏹ শেয়ারিং বন্ধ করুন')
                            : (lang === 'en' ? '▶ Start Sharing' : '▶ শেয়ারিং শুরু করুন')
                          }
                        </button>

                        {followActive && (
                          <p className="mt-3 text-white/80 text-sm">
                            {lang === 'en' ? '3 contacts viewing your location' : '৩ জন আপনার লোকেশন দেখছে'}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Voice Screen */}
                    {activeScenario === 'voice' && (
                      <div className="w-full h-full bg-gradient-to-b from-purple-500 to-purple-600 flex flex-col items-center justify-center p-6">
                        <h3 className="text-white font-bold text-xl mb-2">
                          {lang === 'en' ? 'Voice Activation' : 'ভয়েস অ্যাক্টিভেশন'}
                        </h3>
                        <p className="text-white/80 text-sm text-center mb-8">
                          {lang === 'en' ? 'Say "Help" or "বাঁচাও" to trigger SOS' : '"Help" বা "বাঁচাও" বলুন এসওএস ট্রিগার করতে'}
                        </p>

                        <button
                          onClick={handleVoice}
                          className={`w-32 h-32 rounded-full flex items-center justify-center transition-all ${voiceListening
                              ? 'bg-white scale-110'
                              : 'bg-white/20 hover:bg-white/30'
                            }`}
                        >
                          <span className="text-5xl">{voiceListening ? '🔊' : '🎤'}</span>
                        </button>

                        {voiceListening && (
                          <div className="mt-6 flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className="w-2 bg-white rounded-full animate-pulse"
                                style={{
                                  height: `${20 + Math.random() * 30}px`,
                                  animationDelay: `${i * 0.1}s`
                                }}
                              />
                            ))}
                          </div>
                        )}

                        <p className="mt-8 text-white/60 text-sm text-center">
                          {voiceListening
                            ? (lang === 'en' ? 'Listening...' : 'শুনছি...')
                            : (lang === 'en' ? 'Tap microphone to test' : 'পরীক্ষা করতে মাইক্রোফোন ট্যাপ করুন')
                          }
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Decorative */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-red-200 to-green-200 rounded-full blur-3xl opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
