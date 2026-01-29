import { useState, useEffect } from 'react';
import { type Language } from './lib/translations';
import Hero from './components/Hero';
import Features from './components/Features';
import Demo from './components/Demo';
import ForGovernment from './components/ForGovernment';
import ForPolice from './components/ForPolice';
import ForCitizens from './components/ForCitizens';
import Footer from './components/Footer';
import DemoPage from './pages/DemoPage';
import ResourcesPage from './pages/ResourcesPage';
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  const [lang, setLang] = useState<Language>('en');

  const [showDemo, setShowDemo] = useState(window.location.hash === '#demo');
  const [showResources, setShowResources] = useState(window.location.hash === '#resources');

  useEffect(() => {
    const handleHashChange = () => {
      setShowDemo(window.location.hash === '#demo');
      setShowResources(window.location.hash === '#resources');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (showDemo) {
    return (
      <>
        <DemoPage />
        <Analytics />
      </>
    );
  }

  if (showResources) {
    return (
      <>
        <ResourcesPage />
        <Analytics />
      </>
    );
  }

  return (
    <div className="min-h-screen">
      <div
        onClick={() => { window.location.hash = 'demo'; }}
        style={{
          background: '#f42a41',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '20px',
          fontWeight: 'bold',
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 9999,
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(244, 42, 65, 0.4)'
        }}
      >
        Launch Interactive Demo
      </div>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              AS
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent hidden sm:block">
              {lang === 'en' ? 'Amar Shurokkha' : 'আমার সুরক্ষা'}
            </span>
          </div>

          {/* Nav Links - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="#features" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              {lang === 'en' ? 'Features' : 'বৈশিষ্ট্য'}
            </a>
            <a href="#demo" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              {lang === 'en' ? 'Demo' : 'ডেমো'}
            </a>
            <a href="#resources" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              {lang === 'en' ? 'Resources' : 'রিসোর্স'}
            </a>
            <a href="#for-government" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              {lang === 'en' ? 'Government' : 'সরকার'}
            </a>
            <a href="#for-police" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              {lang === 'en' ? 'Police' : 'পুলিশ'}
            </a>
            <a href="#for-citizens" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              {lang === 'en' ? 'Citizens' : 'নাগরিক'}
            </a>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg font-semibold transition-colors text-sm"
            >
              {lang === 'en' ? 'বাংলা' : 'English'}
            </button>
            <button className="px-5 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all text-sm">
              {lang === 'en' ? 'Download' : 'ডাউনলোড'}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Hero lang={lang} />
        <Features lang={lang} />
        <Demo lang={lang} />
        <ForGovernment lang={lang} />
        <ForPolice lang={lang} />
        <ForCitizens lang={lang} />
        <Footer lang={lang} />
        <Analytics />
      </main>
    </div >
  );
}
