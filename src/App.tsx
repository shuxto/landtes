import { useState } from 'react';
import { Layers, ArrowRight, LayoutTemplate, X, Hexagon, Zap } from 'lucide-react';import Design1 from './Design1';
import Design2 from './Design2';
import Design3 from './Design3';
import Design4 from './Design4';
import Design5 from './Design5'; 

// --- Background Asset ---
// A deep, premium abstract background
const MAIN_BG = "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=2574&auto=format&fit=crop";

// --- Placeholder Component for Empty Designs ---
const PlaceholderPage = ({ id }: { id: number }) => (
  <div className="min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
    <div className="w-24 h-24 bg-gray-800/50 backdrop-blur-xl border border-white/10 rounded-3xl flex items-center justify-center mb-8 animate-pulse shadow-[0_0_30px_rgba(255,255,255,0.1)]">
      <LayoutTemplate className="w-10 h-10 text-gray-400" />
    </div>
    <h1 className="text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-500">
      Concept {id}
    </h1>
    <p className="text-gray-400 text-xl font-light">This template is currently in the lab.</p>
  </div>
);

// --- Main Hub Component ---
export default function App() {
  const [currentView, setCurrentView] = useState<'menu' | 'design1' | 'design2' | 'design3' | 'design4' | 'design5' | 'design6'>('menu');

  const renderContent = () => {
    switch (currentView) {
      case 'design1': return <Design1 />;
      case 'design2': return <Design2 />;
      case 'design3': return <Design3 />;
      case 'design4': return <Design4 />;
      case 'design5': return <Design5 />;
      case 'design6': return <PlaceholderPage id={6} />;
      default: return <MenuScreen setView={setCurrentView} />;
    }
  };

  return (
    <div className="relative">
      {currentView !== 'menu' && (
        <button
          onClick={() => setCurrentView('menu')}
          className="fixed bottom-6 left-6 z-[100] bg-black/60 backdrop-blur-md text-white px-6 py-3 rounded-full shadow-2xl border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all flex items-center gap-3 group"
        >
          <div className="bg-white/10 p-1 rounded-full group-hover:bg-white/20 transition-colors">
            <X className="w-4 h-4" />
          </div>
          <span className="text-sm font-bold uppercase tracking-wider pr-1">Exit Preview</span>
        </button>
      )}
      
      {renderContent()}
    </div>
  );
}

// --- The Menu Screen ---
const MenuScreen = ({ setView }: { setView: (view: any) => void }) => {
  const options = [
    { id: 'design1', title: "Institutional Pro", desc: "Dark mode, data-heavy, professional interface.", status: "Ready", color: "from-blue-600 to-indigo-600" },
    { id: 'design2', title: "Modern Retail (DE)", desc: "German language, light mode, widget-rich layout.", status: "Ready", color: "from-emerald-500 to-teal-500" },
    { id: 'design3', title: "VOIDNET Crypto", desc: "Video header, Neon aesthetics, Agents & Live Swap.", status: "Ready", color: "from-purple-600 to-pink-600" },
    { id: 'design4', title: "Turbo Trader (F1)", desc: "High-speed glassmorphism with IQ-Option aesthetics.", status: "Ready", color: "from-orange-500 to-red-600" },
    { id: 'design5', title: "VOIDNET APP (Quantum)", desc: "Holographic dashboard, glassmorphism, AI Widgets.", status: "Ready", color: "from-cyan-500 to-blue-500" },
    { id: 'design6', title: "High Frequency", desc: "Technical grid layout for algorithmic traders.", status: "Coming Soon", color: "from-gray-600 to-gray-800" },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-blue-500/30 relative overflow-hidden flex items-center justify-center py-20">
      
      {/* Premium Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${MAIN_BG})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617]/80 to-[#020617]"></div>
      
      {/* Animated Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>

      <div className="max-w-[1600px] mx-auto px-6 relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-gray-300 text-xs font-bold uppercase tracking-[0.2em] mb-8 shadow-2xl">
            <Zap className="w-4 h-4 text-yellow-400 fill-current" /> Premium Collection
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 drop-shadow-2xl">
            TRADING PLATFORM <br/> TEMPLATES
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Select a high-performance design concept below to launch the interactive experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setView(opt.id)}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-1 text-left transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col h-full overflow-hidden"
            >
              {/* Inner Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${opt.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              <div className="relative bg-[#0a0a0a]/80 backdrop-blur-md rounded-[20px] p-8 h-full border border-white/5 group-hover:border-white/10 transition-colors flex flex-col">
                
                <div className="flex justify-between items-start mb-8">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${opt.color} p-[1px] shadow-lg group-hover:shadow-${opt.color.split('-')[1]}-500/50 transition-shadow`}>
                    <div className="w-full h-full bg-black/50 rounded-[15px] backdrop-blur-sm flex items-center justify-center">
                      <Layers className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {opt.status === "Ready" ? (
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-wider">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                      Ready
                    </div>
                  ) : (
                    <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-500 text-[10px] font-bold uppercase tracking-wider">
                      Dev
                    </div>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                  {opt.title}
                </h3>
                <p className="text-gray-400 mb-8 flex-grow leading-relaxed font-light">{opt.desc}</p>
                
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">v1.7.2</span>
                  <div className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300`}>
                    <ArrowRight className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>

              </div>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-24 text-center border-t border-white/5 pt-10 flex flex-col items-center gap-4">
          <Hexagon className="w-8 h-8 text-white/20 animate-spin-slow" />
          <p className="text-gray-500 text-xs font-mono tracking-widest uppercase">
            Internal Development Build • 2026
          </p>
        </div>
      </div>
    </div>
  );
};