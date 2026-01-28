import { translations, type Language } from '../lib/translations';

interface FeaturesProps {
  lang: Language;
}

const features = [
  { icon: '🚨', title: 'One-Click SOS', titleBn: 'ওয়ান-ক্লিক এসওএস', desc: 'Instantly alert emergency services and your emergency contacts with your live location.', descBn: 'তাৎক্ষণিকভাবে জরুরি সেবা এবং আপনার জরুরি যোগাযোগগুলিকে আপনার লাইভ অবস্থান সহ সতর্ক করুন।' },
  { icon: '📍', title: 'Follow Me Mode', titleBn: 'ফলো মি মোড', desc: 'Share your real-time location with trusted contacts when traveling alone.', descBn: 'একা ভ্রমণের সময় বিশ্বস্ত পরিচিতদের সাথে আপনার রিয়েল-টাইম অবস্থান শেয়ার করুন।' },
  { icon: '🎤', title: 'Voice Activation', titleBn: 'ভয়েস অ্যাক্টিভেশন', desc: 'Trigger SOS hands-free with a voice command in Bangla or English.', descBn: 'বাংলা বা ইংরেজিতে ভয়েস কমান্ডের মাধ্যমে হ্যান্ডস-ফ্রি এসওএস ট্রিগার করুন।' },
  { icon: '👥', title: 'Emergency Contacts', titleBn: 'জরুরি যোগাযোগ', desc: 'Automatically notify up to 5 emergency contacts with one tap.', descBn: 'এক ট্যাপে স্বয়ংক্রিয়ভাবে ৫টি পর্যন্ত জরুরি যোগাযোগকে অবহিত করুন।' },
  { icon: '🗺️', title: 'Live Location', titleBn: 'লাইভ লোকেশন', desc: 'Share precise GPS coordinates and route tracking with responders.', descBn: 'সাড়াদাতাদের সাথে সুনির্দিষ্ট জিপিএস স্থানাঙ্ক এবং রুট ট্র্যাকিং শেয়ার করুন।' },
  { icon: '🛡️', title: 'Police Integration', titleBn: 'পুলিশ ইন্টিগ্রেশন', desc: 'Direct connection to nearest police station via 999 integration.', descBn: '৯৯৯ ইন্টিগ্রেশনের মাধ্যমে নিকটতম থানার সাথে সরাসরি সংযোগ।' }
];

export default function Features({ lang }: FeaturesProps) {
  const t = translations[lang].features;

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-red-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">
                {lang === 'en' ? feature.title : feature.titleBn}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {lang === 'en' ? feature.desc : feature.descBn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
