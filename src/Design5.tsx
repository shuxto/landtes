import { 
  Search, Bell, Cpu, Activity, Globe, Zap, 
  Shield, Layers, Aperture, Command,
  ArrowRight, Check
} from 'lucide-react';

// --- Assets ---
// High-tech abstract background
const QUANTUM_BG = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2560&auto=format&fit=crop";

// --- Mock Data ---
const AI_SIGNALS = [
  { pair: "BTC/USD", signal: "STRONG BUY", conf: "98.4%", color: "text-green-400" },
  { pair: "ETH/USD", signal: "ACCUMULATE", conf: "87.2%", color: "text-blue-400" },
  { pair: "SOL/USD", signal: "HOLD", conf: "64.1%", color: "text-yellow-400" },
  { pair: "XRP/USD", signal: "SELL", conf: "91.0%", color: "text-red-400" },
];

const TERMINAL_LOGS = [
  "> Initializing Quantum Core v4.0...",
  "> Connected to 12 global liquidity pools.",
  "> AI Sentiment Analysis: BULLISH (Score: 8.2)",
  "> Scanning arbitrage opportunities...",
  "> DETECTED: Price inefficiency on BTC/EUR.",
  "> Executing Micro-Order #44291...",
  "> Success. Latency: 4ms."
];

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4 flex justify-between items-center shadow-[0_0_40px_rgba(0,0,0,0.5)]">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center animate-pulse">
        <Cpu className="text-white w-5 h-5" />
      </div>
      <span className="text-2xl font-bold text-white tracking-widest">
        VOIDNET<span className="text-cyan-400">APP</span>
      </span>
    </div>

    <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
      {['Dashboard', 'AI Signals', 'Quantum Trade', 'Staking', 'DAO'].map((item) => (
        <a key={item} href="#" className="hover:text-cyan-400 hover:scale-105 transition-all">{item}</a>
      ))}
    </div>

    <div className="flex items-center gap-4">
      <div className="hidden md:flex gap-2">
        <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"><Search className="w-5 h-5"/></button>
        <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"><Bell className="w-5 h-5"/></button>
      </div>
      <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-2 rounded-full font-bold text-sm transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)]">
        Connect Wallet
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen w-full overflow-hidden flex items-center pt-32 pb-20">
    {/* Background Image */}
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${QUANTUM_BG})` }}
    >
      <div className="absolute inset-0 bg-[#050505]/80 backdrop-blur-[2px]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
    </div>

    {/* Glowing Orbs (CSS only) */}
    <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
    <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[150px] animate-pulse delay-1000"></div>

    <div className="relative z-10 max-w-[1800px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      
      {/* Left: Content */}
      <div>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-8 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
          <Aperture className="w-4 h-4" /> AI Trading Assistant v4.0 Live
        </div>
        <h1 className="text-6xl lg:text-8xl font-black text-white leading-none mb-8 tracking-tight">
          PREDICT. <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">EXECUTE.</span> <br/>
          DOMINATE.
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-xl leading-relaxed border-l-2 border-cyan-500 pl-6">
          Harness the power of Quantum Computing and Neural Networks to predict market movements with 94% accuracy.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6">
          <button className="h-16 px-10 bg-white text-black rounded-2xl font-bold text-lg hover:bg-cyan-50 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)] group">
            Start AI Engine <Zap className="w-5 h-5 group-hover:fill-black transition-colors" />
          </button>
          <button className="h-16 px-10 bg-white/5 border border-white/10 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center gap-2">
            View Live Demo <Activity className="w-5 h-5" />
          </button>
        </div>

        {/* Stats Strip */}
        <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
          <div>
            <div className="text-3xl font-bold text-white mb-1">$42B+</div>
            <div className="text-xs text-gray-500 uppercase tracking-widest">Volume Traded</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-cyan-400 mb-1">0.02s</div>
            <div className="text-xs text-gray-500 uppercase tracking-widest">Execution</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">2M+</div>
            <div className="text-xs text-gray-500 uppercase tracking-widest">Users</div>
          </div>
        </div>
      </div>

      {/* Right: Holographic Interface */}
      <div className="relative">
        {/* Main Glass Card */}
        <div className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl relative z-20 transform hover:scale-[1.01] transition-transform duration-500">
          
          {/* Header */}
          <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-xs font-mono text-gray-500">SYSTEM.AI_CORE</div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-2 gap-6">
            {/* Chart Widget */}
            <div className="col-span-2 bg-white/5 rounded-xl p-4 border border-white/5">
              <div className="flex justify-between mb-4">
                <div className="text-white font-bold text-sm">BTC/USD Prediction</div>
                <div className="text-green-400 text-xs font-bold">+2.4% Predicted</div>
              </div>
              <div className="h-32 flex items-end gap-1">
                {[...Array(30)].map((_, i) => (
                  <div key={i} className="flex-1 bg-gradient-to-t from-cyan-500/20 to-cyan-500 rounded-t-sm" style={{ height: `${Math.random() * 100}%` }}></div>
                ))}
              </div>
            </div>

            {/* AI Signals Widget */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/5">
              <div className="text-gray-400 text-xs uppercase font-bold mb-4 flex items-center gap-2">
                <Zap className="w-3 h-3 text-yellow-500" /> AI Signals
              </div>
              <div className="space-y-3">
                {AI_SIGNALS.slice(0, 3).map((s, i) => (
                  <div key={i} className="flex justify-between items-center text-sm">
                    <span className="text-white font-bold">{s.pair}</span>
                    <span className={s.color + " font-black text-xs px-2 py-1 bg-white/5 rounded"}>{s.signal}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Circular Progress Widget */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/5 flex flex-col items-center justify-center">
              <div className="relative w-24 h-24 mb-2">
                <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 36 36">
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#333" strokeWidth="3" />
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#06b6d4" strokeWidth="3" strokeDasharray="85, 100" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-white font-bold text-xl">85%</span>
                  <span className="text-[8px] text-gray-400 uppercase">Win Rate</span>
                </div>
              </div>
              <div className="text-xs text-center text-gray-400">Past 30 Days Performance</div>
            </div>
          </div>

          {/* Terminal Logs */}
          <div className="mt-6 bg-black/50 rounded-xl p-4 border border-white/5 font-mono text-xs h-32 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/80 pointer-events-none"></div>
            {TERMINAL_LOGS.map((log, i) => (
              <div key={i} className="mb-1 text-cyan-500/80">{log}</div>
            ))}
          </div>

        </div>

        {/* Floating Glass Element Behind */}
        <div className="absolute -top-10 -right-10 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl z-10 blur-xl"></div>
        <div className="absolute -bottom-10 -left-10 w-full h-full bg-gradient-to-tr from-cyan-600/20 to-green-600/20 rounded-3xl z-10 blur-xl"></div>
      </div>
    </div>
  </section>
);

const FeatureGrid = () => (
  <section className="py-32 bg-[#050505] relative">
    <div className="max-w-[1800px] mx-auto px-6">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-4xl font-bold text-white mb-2">Advanced Modules</h2>
          <p className="text-gray-400">Modular tools designed for the modern trader.</p>
        </div>
        <button className="text-cyan-400 flex items-center gap-2 hover:text-white transition-colors font-bold">
          View All Modules <ArrowRight className="w-4 h-4"/>
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: Cpu, title: "Neural Prediction", desc: "AI forecasts price action 15s in advance.", color: "text-purple-400" },
          { icon: Shield, title: "Risk Guardian", desc: "Automated stop-loss and portfolio protection.", color: "text-green-400" },
          { icon: Globe, title: "Sentiment Scan", desc: "Scrapes 5M+ news sources for market mood.", color: "text-blue-400" },
          { icon: Layers, title: "Multi-Chain", desc: "Trade assets across 12 blockchains instantly.", color: "text-orange-400" },
        ].map((f, i) => (
          <div key={i} className="bg-white/5 border border-white/5 hover:border-cyan-500/50 p-8 rounded-3xl transition-all hover:-translate-y-2 group cursor-pointer backdrop-blur-sm">
            <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-cyan-500/50 transition-colors">
              <f.icon className={`w-6 h-6 ${f.color}`} />
            </div>
            <h3 className="text-white font-bold text-xl mb-3">{f.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const DashboardPreview = () => (
  <section className="py-20 relative overflow-hidden bg-[#050505]">
    <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]"></div>
    
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-20">
        <div className="inline-block mb-4 p-3 bg-white/5 rounded-full border border-white/10">
          <Command className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-5xl font-black text-white mb-6">Total Command.</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          The most powerful dashboard ever built for retail traders. Fully customizable, incredibly fast, and powered by AI.
        </p>
      </div>

      <div className="relative">
        {/* Main Dashboard Mockup */}
        <div className="w-full aspect-[16/9] bg-[#0F1115] rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex">
          {/* Sidebar */}
          <div className="w-20 border-r border-white/5 flex flex-col items-center py-6 gap-6 bg-[#0B0C0E]">
            <div className="w-8 h-8 bg-cyan-500 rounded-lg mb-4"></div>
            {[1,2,3,4,5].map(i => (
              <div key={i} className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 cursor-pointer transition-colors"></div>
            ))}
          </div>
          
          {/* Content */}
          <div className="flex-1 p-6 grid grid-cols-3 gap-6 bg-[#08090A]">
            <div className="col-span-2 flex flex-col gap-6">
              {/* Header */}
              <div className="h-16 bg-white/5 rounded-xl border border-white/5 flex items-center px-6 justify-between">
                <div className="w-32 h-4 bg-white/10 rounded"></div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/10"></div>
                  <div className="w-8 h-8 rounded-full bg-white/10"></div>
                </div>
              </div>
              {/* Chart */}
              <div className="flex-1 bg-white/5 rounded-xl border border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 flex items-end justify-center gap-1 px-4 pb-4 opacity-50">
                  {[...Array(50)].map((_, i) => (
                    <div key={i} className="flex-1 bg-cyan-500" style={{ height: `${Math.random() * 80 + 10}%` }}></div>
                  ))}
                </div>
              </div>
            </div>
            {/* Right Panel */}
            <div className="flex flex-col gap-6">
              <div className="h-1/3 bg-white/5 rounded-xl border border-white/5 p-4">
                <div className="w-20 h-4 bg-white/10 rounded mb-4"></div>
                <div className="space-y-2">
                  {[1,2,3].map(i => <div key={i} className="w-full h-8 bg-white/5 rounded"></div>)}
                </div>
              </div>
              <div className="h-2/3 bg-white/5 rounded-xl border border-white/5 p-4">
                <div className="w-20 h-4 bg-white/10 rounded mb-4"></div>
                <div className="w-full h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl border border-white/5 mb-4"></div>
                <div className="w-full h-10 bg-cyan-600 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Details */}
        <div className="absolute -bottom-10 -right-10 w-64 p-6 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl animate-bounce delay-700">
          <div className="flex items-center gap-3 mb-2">
            <Check className="w-5 h-5 text-green-500" />
            <span className="text-white font-bold">Trade Executed</span>
          </div>
          <div className="text-xs text-gray-400">Buy 0.5 BTC @ $48,200</div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black border-t border-white/10 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <div className="flex items-center gap-3 mb-6 md:mb-0">
          <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center">
            <Cpu className="text-white w-4 h-4" />
          </div>
          <span className="text-xl font-bold text-white tracking-widest">
            VOIDNET<span className="text-cyan-400">APP</span>
          </span>
        </div>
        <div className="flex gap-6 text-gray-400 text-sm">
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">Discord</a>
          <a href="#" className="hover:text-white">Telegram</a>
          <a href="#" className="hover:text-white">GitHub</a>
        </div>
      </div>
      <div className="text-center text-gray-600 text-xs">
        &copy; 2026 VOIDNET APP Trading Technologies. Powered by Quantum Core.
      </div>
    </div>
  </footer>
);

export default function Design5() {
  return (
    <div className="bg-[#050505] text-white font-sans selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <DashboardPreview />
      <Footer />
    </div>
  );
}