import React, { useState, useEffect } from 'react';
import { Shield, MapPin, Mic, Share2, MessageSquare, AlertCircle, Trash2, ArrowRight, X, User, Settings, History, Users, Send, Navigation, MicOff } from 'lucide-react';
type ScreenType =
    | 'ONBOARDING'
    | 'SIGN_IN'
    | 'GUARDIAN_SETUP'
    | 'DASHBOARD'
    | 'SOS_ACTIVE'
    | 'FOLLOW_ME'
    | 'AI_CHAT'
    | 'GUARDIAN_VIEW'
    | 'POLICE_VIEW'
    | 'POSTER'
    | 'DOCUMENTS';

const DemoPage: React.FC = () => {
    const [currentScreen, setCurrentScreen] = useState<ScreenType>('ONBOARDING');
    const [language, setLanguage] = useState<'EN' | 'BN'>('EN');
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Transitions
    const next = (screen: ScreenType) => setCurrentScreen(screen);

    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-zinc-950 text-zinc-100' : 'bg-zinc-50 text-slate-900'} flex items-center justify-center p-4 font-inter transition-colors duration-300`}>
            {/* Background Decor */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-red-500 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-green-500 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 items-start">
                {/* Project Info & Controls (Left side on large screens) */}
                <div className="space-y-6">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-black tracking-tight flex items-center gap-3">
                            <Shield className="w-10 h-10 text-[#f42a41]" fill="#f42a41" />
                            Amar Shurokkha
                        </h1>
                        <p className="text-xl text-slate-500 dark:text-slate-400 font-medium">Interactive Safety Ecosystem Demo</p>
                    </div>

                    <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 space-y-4">
                        <h3 className="font-bold text-lg text-slate-900 dark:text-zinc-100">Scenario Controls</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            <button onClick={() => next('ONBOARDING')} className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${currentScreen === 'ONBOARDING' ? 'bg-[#f42a41] text-white shadow-lg' : 'bg-zinc-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'}`}>Onboarding</button>
                            <button onClick={() => next('SIGN_IN')} className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${currentScreen === 'SIGN_IN' ? 'bg-[#f42a41] text-white shadow-lg' : 'bg-zinc-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'}`}>Sign In</button>
                            <button onClick={() => next('GUARDIAN_SETUP')} className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${currentScreen === 'GUARDIAN_SETUP' ? 'bg-[#f42a41] text-white shadow-lg' : 'bg-zinc-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'}`}>Setup</button>
                            <button onClick={() => next('DASHBOARD')} className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${currentScreen === 'DASHBOARD' ? 'bg-[#f42a41] text-white shadow-lg' : 'bg-zinc-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'}`}>Dashboard</button>
                            <button onClick={() => next('SOS_ACTIVE')} className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${currentScreen === 'SOS_ACTIVE' ? 'bg-[#f42a41] text-white shadow-lg' : 'bg-zinc-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'}`}>SOS Active</button>
                            <button onClick={() => next('FOLLOW_ME')} className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${currentScreen === 'FOLLOW_ME' ? 'bg-[#f42a41] text-white shadow-lg' : 'bg-zinc-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'}`}>Follow Me</button>
                            <button onClick={() => next('AI_CHAT')} className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${currentScreen === 'AI_CHAT' ? 'bg-[#f42a41] text-white shadow-lg' : 'bg-zinc-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'}`}>Safety AI</button>
                            <button onClick={() => next('GUARDIAN_VIEW')} className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${currentScreen === 'GUARDIAN_VIEW' ? 'bg-orange-500 text-white shadow-lg' : 'bg-zinc-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'}`}>Guardian View</button>
                            <button onClick={() => next('POLICE_VIEW')} className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${currentScreen === 'POLICE_VIEW' ? 'bg-blue-600 text-white shadow-lg' : 'bg-zinc-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'}`}>Police View</button>
                            <button onClick={() => next('POSTER')} className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${currentScreen === 'POSTER' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-zinc-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'}`}>System Poster</button>
                            <button onClick={() => next('DOCUMENTS')} className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${currentScreen === 'DOCUMENTS' ? 'bg-teal-600 text-white shadow-lg' : 'bg-zinc-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'}`}>Project Deck</button>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className="px-6 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 font-bold shadow-md hover:scale-105 transition-transform text-slate-900 dark:text-zinc-100"
                        >
                            Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
                        </button>
                    </div>
                </div>

                {/* The Phone Mockup */}
                <div className="relative mx-auto w-full max-w-[380px] h-[750px] sm:h-[800px] bg-zinc-900 rounded-[3rem] p-3 shadow-[0_0_0_12px_#18181b,0_0_0_14px_#27272a,0_40px_100px_-20px_rgba(0,0,0,0.5)] border-4 border-zinc-800 overflow-hidden order-first lg:order-last">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 bg-black rounded-b-3xl z-[60] flex items-center justify-center gap-1.5 px-6">
                        <div className="w-10 h-1 bg-zinc-800 rounded-full" />
                        <div className="w-2 h-2 rounded-full bg-zinc-900 border border-zinc-800" />
                    </div>

                    {/* Screen Content */}
                    <div className={`relative w-full h-full rounded-[2.2rem] overflow-hidden ${isDarkMode ? 'bg-[#181112]' : 'bg-[#FCFDFC]'} text-slate-900 dark:text-white transition-colors duration-300`}>
                        {renderScreen(currentScreen, { language, setLanguage, next })}
                    </div>
                </div>
            </div>
        </div>
    );
};

// -- SCREEN COMPONENTS --

const renderScreen = (type: ScreenType, props: any) => {
    switch (type) {
        case 'ONBOARDING': return <OnboardingScreen {...props} />;
        case 'SIGN_IN': return <SignInScreen {...props} />;
        case 'GUARDIAN_SETUP': return <GuardianSetupScreen {...props} />;
        case 'DASHBOARD': return <DashboardScreen {...props} />;
        case 'SOS_ACTIVE': return <SOSActiveScreen {...props} />;
        case 'FOLLOW_ME': return <FollowMeScreen {...props} />;
        case 'AI_CHAT': return <AIChatScreen {...props} />;
        case 'GUARDIAN_VIEW': return <GuardianViewScreen {...props} />;
        case 'POLICE_VIEW': return <PoliceViewScreen {...props} />;
        case 'POSTER': return <PosterScreen {...props} />;
        case 'DOCUMENTS': return <DocumentsScreen {...props} />;
    }
};

const OnboardingScreen = ({ next, language, setLanguage }: any) => (
    <div className="h-full flex flex-col p-6 pt-16 relative">
        <div className="flex justify-end mb-12">
            <div className="flex bg-zinc-100 dark:bg-white/10 p-1 rounded-full cursor-pointer" onClick={() => setLanguage(language === 'EN' ? 'BN' : 'EN')}>
                <div className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${language === 'EN' ? 'bg-white dark:bg-white/20 text-[#f42a41]' : 'text-slate-400'}`}>EN</div>
                <div className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${language === 'BN' ? 'bg-white dark:bg-white/20 text-[#f42a41]' : 'text-slate-400'}`}>বাংলা</div>
            </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-8 -mt-20">
            <div className="relative">
                <div className="absolute inset-0 bg-[#f42a41]/20 rounded-full blur-2xl animate-pulse" />
                <Shield className="w-32 h-32 text-[#f42a41] relative z-10" fill="#f42a41" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 text-white">
                    <Shield className="w-12 h-12" />
                </div>
            </div>
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-black leading-tight text-slate-900 dark:text-white">One Click.<br />One Life Saved.</h1>
                <p className="text-slate-500 dark:text-slate-400 font-medium">Your personal safety ecosystem across Bangladesh.</p>
            </div>
        </div>
        <div className="pb-8 space-y-6">
            <button onClick={() => next('SIGN_IN')} className="w-full h-14 bg-[#f42a41] text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#f42a41]/20 active:scale-95 transition-all">
                Get Started <ArrowRight className="w-5 h-5" />
            </button>
            <div className="flex justify-center gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <span>Terms</span>
                <span>Privacy</span>
            </div>
        </div>
    </div>
);

const SignInScreen = ({ next, language, setLanguage }: any) => (
    <div className="h-full flex flex-col p-6 pt-16 relative">
        <div className="flex justify-between items-center mb-10">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f42a41] to-[#006A4E] rotate-45" />
            <div className="flex bg-zinc-100 dark:bg-white/10 p-1 rounded-full cursor-pointer" onClick={() => setLanguage(language === 'EN' ? 'BN' : 'EN')}>
                <div className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${language === 'EN' ? 'bg-white dark:bg-white/20 text-[#f42a41]' : 'text-slate-400'}`}>EN</div>
                <div className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${language === 'BN' ? 'bg-white dark:bg-white/20 text-[#f42a41]' : 'text-slate-400'}`}>বাংলা</div>
            </div>
        </div>
        <div className="flex-1 mt-4">
            <div className="flex flex-col items-center text-center mb-12">
                <div className="w-24 h-24 bg-green-50 dark:bg-green-900/10 rounded-[2rem] flex items-center justify-center mb-6">
                    <Shield className="w-12 h-12 text-[#006A4E]" />
                </div>
                <h2 className="text-3xl font-bold mb-2">Amar Shurokkha</h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Enter your phone to verify identity</p>
            </div>
            <div className="space-y-6">
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                    <div className="flex items-center h-16 bg-white dark:bg-zinc-800/50 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm px-4 focus-within:border-[#f42a41] transition-all">
                        <span className="font-bold text-lg border-r border-zinc-100 dark:border-zinc-800 pr-3 mr-3">+880</span>
                        <input type="tel" placeholder="1XXX-XXXXXX" className="bg-transparent border-none focus:ring-0 text-lg font-bold w-full" />
                    </div>
                </div>
                <button onClick={() => next('GUARDIAN_SETUP')} className="w-full h-14 bg-[#006A4E] text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#006A4E]/20">
                    Verify My Safety <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
        <div className="pb-8 space-y-6">
            <div className="flex justify-center gap-8 text-slate-400">
                <div className="flex flex-col items-center gap-1 group cursor-pointer">
                    <AlertCircle className="w-6 h-6" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#f42a41]">Emergency</span>
                </div>
                <div className="flex flex-col items-center gap-1 group cursor-pointer">
                    <User className="w-6 h-6" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Support</span>
                </div>
            </div>
        </div>
    </div>
);

const GuardianSetupScreen = ({ next }: any) => (
    <div className="h-full flex flex-col p-6 pt-16 relative">
        <div className="flex items-center mb-8">
            <h2 className="text-xl font-bold flex-1 text-center pr-0">Guardian Setup</h2>
        </div>
        <div className="flex justify-center gap-2 mb-8">
            <div className="h-1.5 w-8 rounded-full bg-[#f42a41]" />
            <div className="h-1.5 w-2 rounded-full bg-zinc-200 dark:bg-zinc-800" />
            <div className="h-1.5 w-2 rounded-full bg-zinc-200 dark:bg-zinc-800" />
        </div>
        <div className="flex-1 overflow-y-auto no-scrollbar space-y-6">
            <div>
                <h3 className="text-2xl font-bold mb-2">Add Your Safety Net</h3>
                <p className="text-slate-500 text-sm">Friends or family to notify in emergency.</p>
            </div>

            <div className="space-y-3">
                {[
                    { name: 'Amma (Mom)', phone: '01711-892XXX', icon: <User className="text-red-500" /> },
                    { name: 'Bhaiya (Brother)', phone: '01819-453XXX', icon: <User className="text-blue-500" /> },
                    { name: 'Shathi (Wife)', phone: '01923-112XXX', icon: <User className="text-purple-500" /> }
                ].map((g, i) => (
                    <div key={i} className="bg-white dark:bg-zinc-800/50 p-4 rounded-2xl border border-zinc-100 dark:border-zinc-800 flex items-center gap-4 shadow-sm">
                        <div className="w-12 h-12 rounded-xl bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center">
                            {g.icon}
                        </div>
                        <div className="flex-1">
                            <p className="font-bold">{g.name}</p>
                            <p className="text-xs text-slate-500">{g.phone}</p>
                        </div>
                        <Trash2 className="w-5 h-5 text-slate-300 hover:text-red-500 cursor-pointer" />
                    </div>
                ))}
                <button className="w-full py-4 rounded-2xl border-2 border-dashed border-[#f42a41]/20 flex flex-col items-center gap-2 hover:bg-[#f42a41]/5 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-[#f42a41] text-white flex items-center justify-center shadow-md">
                        <ArrowRight className="w-5 h-5 rotate-90" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Add New Contact</span>
                </button>
            </div>
        </div>
        <div className="pb-8">
            <button onClick={() => next('DASHBOARD')} className="w-full h-14 bg-[#f42a41] text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#f42a41]/20">
                Save Guardians <ArrowRight className="w-5 h-5" />
            </button>
        </div>
    </div>
);

const DashboardScreen = ({ next, language, setLanguage }: any) => (
    <div className="h-full flex flex-col relative overflow-hidden">
        {/* Background Decor within Screen */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#f42a41]/5 pointer-events-none" />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto no-scrollbar p-6 pt-16 pb-32 relative z-10">
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md p-1.5 pr-4 rounded-full border border-white/20">
                    <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center border-2 border-white dark:border-zinc-700">
                        <User className="w-6 h-6 text-slate-400" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase leading-none">Hello,</p>
                        <p className="text-sm font-bold">Nusrat</p>
                    </div>
                </div>
                <div className="flex bg-white/50 dark:bg-white/10 p-1 rounded-full cursor-pointer" onClick={() => setLanguage(language === 'EN' ? 'BN' : 'EN')}>
                    <div className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${language === 'EN' ? 'bg-white dark:bg-white/20 text-[#f42a41]' : 'text-slate-400'}`}>EN</div>
                    <div className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${language === 'BN' ? 'bg-white dark:bg-white/20 text-[#f42a41]' : 'text-slate-400'}`}>বাংলা</div>
                </div>
            </div>

            <div className="flex items-center justify-center gap-1.5 mb-6">
                <MapPin className="text-[#f42a41] w-4 h-4" />
                <span className="text-xs font-bold tracking-tight">Dhaka, Bangladesh</span>
            </div>

            <div className="flex flex-col items-center justify-center relative mb-8 min-h-[280px]">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-56 h-56 bg-[#f42a41]/10 rounded-full animate-ping" />
                </div>
                <button onClick={() => next('SOS_ACTIVE')} className="relative z-10 w-44 h-44 rounded-full bg-gradient-to-br from-[#f42a41] to-[#d91e33] flex flex-col items-center justify-center text-white shadow-2xl shadow-[#f42a41]/50 border-4 border-white/20 active:scale-95 transition-transform group">
                    <span className="text-5xl font-black mb-1">SOS</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">Hold to Alert</span>
                </button>
                <div className="mt-8 px-4 py-2 bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-full border border-white/20">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#006A4E]">Your Area: SECURE</span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/70 dark:bg-zinc-800/50 backdrop-blur-md p-4 rounded-2xl border border-zinc-100 dark:border-zinc-800 flex flex-col gap-3 group cursor-pointer hover:bg-white transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/10 flex items-center justify-center text-blue-500">
                        <Mic className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="font-bold text-sm">Voice Alert</p>
                        <p className="text-[10px] text-slate-400">Record & Send</p>
                    </div>
                </div>
                <div onClick={() => next('FOLLOW_ME')} className="bg-white/70 dark:bg-zinc-800/50 backdrop-blur-md p-4 rounded-2xl border border-zinc-100 dark:border-zinc-800 flex flex-col gap-3 group cursor-pointer hover:bg-white transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-green-900/10 flex items-center justify-center text-green-600">
                        <Share2 className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="font-bold text-sm">Follow Me</p>
                        <p className="text-[10px] text-slate-400">Live Tracking</p>
                    </div>
                </div>
                <div onClick={() => next('AI_CHAT')} className="bg-white/70 dark:bg-zinc-800/50 backdrop-blur-md p-4 rounded-2xl border border-zinc-100 dark:border-zinc-800 flex flex-col gap-3 group cursor-pointer hover:bg-white transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-900/10 flex items-center justify-center text-purple-600">
                        <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="font-bold text-sm">AI Chat</p>
                        <p className="text-[10px] text-slate-400">Safety Assistant</p>
                    </div>
                </div>
                <div className="bg-white/70 dark:bg-zinc-800/50 backdrop-blur-md p-4 rounded-2xl border border-zinc-100 dark:border-zinc-800 flex flex-col gap-3 group cursor-pointer hover:bg-white transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-900/10 flex items-center justify-center text-orange-600">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="font-bold text-sm">Safe Map</p>
                        <p className="text-[10px] text-slate-400">Safe Zones</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Fixed Bottom Navigation */}
        <div className="absolute bottom-6 left-0 right-0 px-6 z-20">
            <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-full border border-white/40 dark:border-white/10 shadow-xl h-14 flex items-center justify-around">
                <div className="text-[#f42a41]"><History className="w-6 h-6" fill="currentColor" opacity={0.2} /></div>
                <div className="text-zinc-400"><Users className="w-6 h-6" /></div>
                <div className="text-zinc-400"><History className="w-6 h-6" /></div>
                <div className="text-zinc-400"><Settings className="w-6 h-6" /></div>
            </div>
        </div>
    </div>
);

const SOSActiveScreen = ({ next }: any) => {
    const [timer, setTimer] = useState(10);

    useEffect(() => {
        if (timer > 0) {
            const t = setTimeout(() => setTimer(timer - 1), 1000);
            return () => clearTimeout(t);
        }
    }, [timer]);

    return (
        <div className="h-full bg-[#181112] text-white p-6 pt-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#f42a41]/10 animate-pulse pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex flex-col items-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f42a41]/20 rounded-full border border-[#f42a41]/30 mb-4 animate-bounce">
                        <AlertCircle className="w-5 h-5 text-[#f42a41]" />
                        <span className="text-xs font-bold tracking-widest uppercase">SOS Activated</span>
                    </div>
                    <h2 className="text-3xl font-black text-center leading-tight">POLICE & FAMILY<br />NOTIFIED</h2>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center relative">
                    <div className="relative">
                        <div className="text-[120px] font-black leading-none text-[#f42a41] drop-shadow-[0_0_50px_rgba(244,42,65,0.4)]">{timer}</div>
                        <div className="text-center text-[10px] font-bold uppercase tracking-[0.3em] opacity-50 -mt-2">Seconds</div>
                    </div>
                </div>

                <div className="space-y-3 mb-12">
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center gap-4">
                        <Mic className="text-[#f42a41] animate-pulse" />
                        <div className="flex-1">
                            <p className="text-sm font-bold">Recording Audio...</p>
                            <div className="h-1 bg-white/10 rounded-full mt-2">
                                <div className="h-full bg-[#f42a41] w-2/3 rounded-full" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center gap-4">
                        <Navigation className="text-white/60" />
                        <div className="flex-1">
                            <p className="text-sm font-bold">GPS Transmission Live</p>
                            <p className="text-[10px] opacity-40">Precision: 3m • Banasree, Dhaka</p>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    </div>
                </div>

                <button onClick={() => next('DASHBOARD')} className="w-full h-16 bg-white text-[#f42a41] rounded-2xl font-black text-xl shadow-2xl active:scale-95 transition-all">
                    CANCEL SOS
                </button>
            </div>
        </div>
    );
};

const FollowMeScreen = ({ next }: any) => (
    <div className="h-full bg-zinc-950 text-white relative overflow-hidden">
        {/* Simulated Map */}
        <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #006b1d 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
            <div className="relative">
                <div className="w-4 h-4 rounded-full bg-[#006b1d] border-2 border-white shadow-[0_0_15px_#006b1d] animate-pulse" />
                <div className="absolute -inset-8 border border-[#006b1d]/40 rounded-full animate-ping" />
            </div>
        </div>

        <div className="relative z-10 h-full flex flex-col p-6 pt-16">
            <div className="flex items-center gap-3">
                <button onClick={() => next('DASHBOARD')} className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center">
                    <X className="w-5 h-5" />
                </button>
                <div className="flex-1 inline-flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full mx-auto justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest leading-none">Live Tracking Active</span>
                </div>
                <div className="w-10 h-10" />
            </div>

            <div className="flex-1" />

            <div className="bg-black/60 backdrop-blur-xl rounded-3xl border border-white/10 p-6 space-y-6">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-800 border border-white/10 flex items-center justify-center">
                        <User className="w-8 h-8 text-zinc-500" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg leading-tight">Sharing Location with Rahat</h3>
                        <p className="text-xs text-white/40">Guardian Active • 12m away</p>
                    </div>
                </div>
                <button onClick={() => next('DASHBOARD')} className="w-full h-14 bg-[#006b1d] text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-green-950/40">
                    <MicOff className="w-5 h-5" /> Stop Tracking
                </button>
            </div>
        </div>
    </div>
);

const AIChatScreen = ({ next }: any) => (
    <div className="h-full bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden flex flex-col">
        <div className="pt-16 px-6 pb-4 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-100 dark:border-white/5 flex items-center gap-4">
            <button onClick={() => next('DASHBOARD')} className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                <X className="w-5 h-5" />
            </button>
            <div>
                <h2 className="font-bold">Surokkha AI</h2>
                <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#006A4E]">Always Protected</span>
                </div>
            </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 flex flex-col">
            <div className="self-end bg-[#f42a41] text-white px-5 py-3 rounded-2xl rounded-tr-sm text-sm font-medium max-w-[80%]">
                Is Banani Road 11 safe right now?
            </div>
            <div className="flex gap-3 max-w-[90%]">
                <div className="w-8 h-8 rounded-full bg-[#006A4E] shrink-0 border-2 border-white dark:border-zinc-800 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl rounded-tl-sm border border-zinc-100 dark:border-white/5 shadow-sm space-y-3">
                    <p className="text-sm font-medium leading-relaxed">Banani Road 11 is currently <span className="text-green-500 font-bold">SECURE</span>.</p>
                    <div className="space-y-2 pt-2 border-t border-zinc-50 dark:border-white/5">
                        <div className="flex items-center justify-between text-[11px] font-bold text-slate-400">
                            <span>REPORTS</span>
                            <span className="text-green-500">LOW</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] font-bold text-slate-400">
                            <span>POLICE DIST.</span>
                            <span className="text-slate-900 dark:text-white">400m</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="p-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-t border-zinc-100 dark:border-white/5 pb-10">
            <div className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-800 p-1.5 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-700 flex items-center justify-center text-[#f42a41]">
                    <Mic className="w-5 h-5" />
                </div>
                <input placeholder="Ask about safety..." className="flex-1 bg-transparent border-none text-sm font-medium focus:ring-0" />
                <button className="w-10 h-10 rounded-xl bg-[#006A4E] text-white flex items-center justify-center">
                    <Send className="w-5 h-5" />
                </button>
            </div>
        </div>
    </div>
);

const GuardianViewScreen = ({ next }: any) => (
    <div className="h-full bg-zinc-950 text-white relative overflow-hidden flex flex-col p-6 pt-16">
        <div className="flex flex-col items-center gap-2 mb-12">
            <Shield className="w-12 h-12 text-[#f42a41]" />
            <h1 className="text-xl font-bold tracking-tight">Lock Screen</h1>
        </div>

        <div className="flex-1 flex flex-col justify-center">
            <div className="bg-zinc-900/80 backdrop-blur-xl rounded-[2.5rem] p-6 border border-white/10 shadow-2xl space-y-6 animate-pulse">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#f42a41] flex items-center justify-center shadow-lg shadow-[#f42a41]/40">
                        <AlertCircle className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#f42a41]">Emergency SOS</p>
                        <h3 className="text-lg font-bold">Riya is in Danger</h3>
                    </div>
                </div>

                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-3xl border border-white/5">
                    <div className="w-14 h-14 rounded-full bg-zinc-800 flex items-center justify-center">
                        <User className="w-8 h-8 text-zinc-500" />
                    </div>
                    <div>
                        <p className="font-bold">Riya Ahmed</p>
                        <p className="text-xs text-white/40">Near Dhanmondi Lake</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <button onClick={() => next('FOLLOW_ME')} className="h-14 bg-[#006A4E] rounded-2xl font-bold text-sm tracking-tight shadow-lg shadow-green-950/40">Track Live</button>
                    <button onClick={() => next('POLICE_VIEW')} className="h-14 bg-[#f42a41] rounded-2xl font-bold text-sm tracking-tight shadow-lg shadow-red-950/40">Notify Police</button>
                </div>
            </div>
        </div>

        <div className="pb-12 pt-6 flex justify-center">
            <div className="w-32 h-1.5 bg-white/20 rounded-full" />
        </div>
    </div>
);

const PoliceViewScreen = ({ next }: any) => (
    <div className="h-full bg-[#120a0b] text-white flex flex-col overflow-hidden">
        <div className="pt-16 px-6 pb-4 border-b border-white/5 flex items-center justify-between">
            <h2 className="font-bold text-sm tracking-[0.2em] uppercase">Control Center</h2>
            <div className="flex items-center gap-1 bg-green-500/10 px-2 py-1 rounded border border-green-500/20">
                <div className="w-1 h-1 bg-green-500 rounded-full" />
                <span className="text-[8px] font-black text-green-500 uppercase tracking-widest">Live</span>
            </div>
        </div>

        <div className="flex-1 relative">
            <div className="absolute inset-0 bg-zinc-900/40" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 bg-red-500 rounded-full border-2 border-white shadow-[0_0_20px_#f52941] animate-ping" />
            </div>

            <div className="absolute bottom-6 left-6 right-6 space-y-3">
                <div className="bg-[#1e1415] rounded-[2rem] border border-white/10 p-5 shadow-2xl space-y-4">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-lg font-bold">Assault Reported</h3>
                            <p className="text-xs text-red-500 font-bold tracking-widest">SOS-2948 • RIYA AHMED</p>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] opacity-40 font-bold">ELAPSED</p>
                            <p className="font-mono font-bold text-lg">04:12</p>
                        </div>
                    </div>

                    <div className="bg-black/40 rounded-2xl p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <History className="text-[#f42a41] animate-pulse" />
                            <span className="text-sm font-bold">Live Evidence</span>
                        </div>
                        <div className="flex gap-0.5 items-end h-4">
                            {[0.4, 0.7, 1, 0.6, 0.3, 0.8].map((h, i) => (
                                <div key={i} className="w-1 bg-[#f42a41] rounded-full" style={{ height: `${h * 100}%` }} />
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <button className="h-12 bg-white/5 border border-white/10 rounded-xl font-bold text-xs">Call User</button>
                        <button onClick={() => next('DASHBOARD')} className="h-12 bg-[#f42a41] rounded-xl font-bold text-xs shadow-lg shadow-red-950/40">Dispatch Unit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const PosterScreen = ({ next }: any) => (
    <div className="h-full bg-zinc-900 flex flex-col relative overflow-hidden">
        <div className="pt-16 px-6 pb-4 border-b border-white/10 flex items-center justify-between relative z-10 bg-zinc-900/80 backdrop-blur-md">
            <h2 className="font-bold text-sm tracking-widest uppercase text-white">System Ecosystem</h2>
            <button onClick={() => next('DASHBOARD')} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                <X className="w-5 h-5" />
            </button>
        </div>
        <div className="flex-1 overflow-auto bg-zinc-800 flex items-center justify-center p-4">
            <img src="/assets/poster.png" alt="Safety Ecosystem Poster" className="max-w-full h-auto rounded-lg shadow-2xl" />
        </div>
        <div className="p-4 text-center bg-zinc-900 border-t border-white/10">
            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-none mb-2">Technical Blueprint</p>
            <p className="text-xs text-zinc-400">Amar Shurokkha Global Architecture v1.0</p>
        </div>
    </div>
);

const DocumentsScreen = ({ next }: any) => {
    const [doc, setDoc] = useState<'GUIDE' | 'LAYER'>('GUIDE');

    return (
        <div className="h-full bg-zinc-50 dark:bg-zinc-900 flex flex-col relative overflow-hidden text-slate-900 dark:text-white">
            <div className="pt-16 px-6 pb-4 border-b border-zinc-200 dark:border-white/10 flex items-center justify-between relative z-10 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md">
                <h2 className="font-bold text-sm tracking-widest uppercase">Project Documents</h2>
                <button onClick={() => next('DASHBOARD')} className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-white/10 flex items-center justify-center">
                    <X className="w-5 h-5" />
                </button>
            </div>

            <div className="flex p-2 gap-2 bg-zinc-100 dark:bg-black/20 mx-4 mt-4 rounded-xl">
                <button
                    onClick={() => setDoc('GUIDE')}
                    className={`flex-1 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${doc === 'GUIDE' ? 'bg-white dark:bg-white/10 shadow-sm' : 'opacity-40'}`}
                >
                    Safety Guide
                </button>
                <button
                    onClick={() => setDoc('LAYER')}
                    className={`flex-1 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${doc === 'LAYER' ? 'bg-white dark:bg-white/10 shadow-sm' : 'opacity-40'}`}
                >
                    National Layer
                </button>
            </div>

            <div className="flex-1 m-4 rounded-2xl border border-zinc-200 dark:border-white/10 overflow-hidden bg-white shadow-inner relative group">
                <iframe
                    src={doc === 'GUIDE' ? '/assets/safety_guide.pdf#toolbar=0' : '/assets/safety_layer.pdf#toolbar=0'}
                    className="w-full h-full border-none"
                    title="Slide Show"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between">
                    <p className="text-[10px] text-white font-bold uppercase tracking-widest">Interactive Preview</p>
                    <a
                        href={doc === 'GUIDE' ? '/assets/safety_guide.pdf' : '/assets/safety_layer.pdf'}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[10px] text-white underline font-bold uppercase tracking-widest"
                    >
                        Full Screen
                    </a>
                </div>
            </div>

            <div className="px-6 pb-6 text-center">
                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">Scroll to read. Click full screen to download.</p>
            </div>
        </div>
    );
};

export default DemoPage;
