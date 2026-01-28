import React from 'react';
import { Shield, FileText, Image as ImageIcon, ArrowRight, Download, ExternalLink } from 'lucide-react';

const ResourcesPage: React.FC = () => {
    const [viewing, setViewing] = React.useState('/assets/safety_guide.pdf');

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-inter text-slate-900 dark:text-zinc-100 transition-colors duration-300">
            {/* Top Navigation */}
            <nav className="fixed top-0 left-0 right-0 h-16 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 z-[100] px-6 flex items-center justify-between">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.hash = ''}>
                    <Shield className="w-6 h-6 text-[#f42a41]" fill="#f42a41" />
                    <span className="font-bold text-slate-900 dark:text-zinc-100">Amar Shurokkha</span>
                </div>
                <div className="flex items-center gap-4">
                    <button onClick={() => window.location.hash = 'demo'} className="px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 text-sm font-bold hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all">
                        Open Demo
                    </button>
                    <button onClick={() => window.location.hash = ''} className="px-4 py-2 rounded-lg bg-[#f42a41] text-white text-sm font-bold hover:bg-[#d91e33] transition-all flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 rotate-180" />
                        Back to Home
                    </button>
                </div>
            </nav>

            <main className="pt-24 pb-20 px-6 max-w-7xl mx-auto space-y-12">
                <div className="space-y-4">
                    <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">Live Project Resources</h1>
                    <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl font-medium">Explore the technical architecture, safety guidelines, and national deployment layers of the Amar Shurokkha ecosystem.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Safety Guide */}
                    <ResourceCard
                        title="Instant Safety Guide"
                        description="Comprehensive manual for citizens on how to use Amar Shurokkha in emergencies."
                        icon={<FileText className="w-8 h-8 text-blue-500" />}
                        fileUrl="/assets/safety_guide.pdf"
                        type="PDF Document"
                        onView={() => setViewing('/assets/safety_guide.pdf')}
                        active={viewing === '/assets/safety_guide.pdf'}
                    />

                    {/* National Layer */}
                    <ResourceCard
                        title="National Safety Layer"
                        description="Deep dive into the infrastructure and integration with Bangladesh's national services."
                        icon={<Shield className="w-8 h-8 text-[#006A4E]" />}
                        fileUrl="/assets/safety_layer.pdf"
                        type="Technical Paper"
                        onView={() => setViewing('/assets/safety_layer.pdf')}
                        active={viewing === '/assets/safety_layer.pdf'}
                    />

                    {/* Poster */}
                    <ResourceCard
                        title="Ecosystem Blueprint"
                        description="High-resolution architecture diagram showing the end-to-end safety network."
                        icon={<ImageIcon className="w-8 h-8 text-purple-500" />}
                        fileUrl="/assets/poster.png"
                        type="System Poster"
                        onView={() => setViewing('/assets/poster.png')}
                        active={viewing === '/assets/poster.png'}
                    />
                </div>

                {/* Live Viewer Section */}
                <div className="space-y-6" id="viewer">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <ExternalLink className="w-6 h-6 text-[#f42a41]" />
                        Deep View
                    </h2>
                    <div className="bg-white dark:bg-zinc-900 rounded-[2rem] border-4 border-[#f42a41]/10 shadow-2xl overflow-hidden h-[800px] relative transition-all">
                        <iframe
                            src={viewing}
                            className="w-full h-full border-none"
                            title="Resource Viewer"
                            key={viewing}
                        />
                        <div className="absolute top-4 right-4 flex gap-2">
                            <a href={viewing} target="_blank" rel="noreferrer" className="bg-white/90 backdrop-blur p-2 rounded-lg border border-zinc-200 shadow-lg text-slate-600 hover:text-[#f42a41] transition-colors" title="Open Fullscreen">
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

const ResourceCard = ({ title, description, icon, fileUrl, type, onView, active }: any) => (
    <div
        onClick={onView}
        className={`bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border-2 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all flex flex-col group cursor-pointer ${active ? 'border-[#f42a41]' : 'border-zinc-200 dark:border-zinc-800'}`}
    >
        <div className="w-16 h-16 rounded-3xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
            {icon}
        </div>
        <div className="flex-1 space-y-2">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f42a41]">{type}</p>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">{title}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{description}</p>
        </div>
        <div className="mt-8 pt-6 border-t border-zinc-50 dark:border-zinc-800 flex items-center justify-between">
            <a href={fileUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-bold text-sm text-slate-600 dark:text-zinc-300 hover:text-[#f42a41] dark:hover:text-[#f42a41] transition-colors">
                <ExternalLink className="w-4 h-4" />
                View Full
            </a>
            <a href={fileUrl} download className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800 hover:bg-[#006A4E] hover:text-white dark:hover:bg-[#006A4E] transition-all">
                <Download className="w-5 h-5" />
            </a>
        </div>
    </div>
);

export default ResourcesPage;
