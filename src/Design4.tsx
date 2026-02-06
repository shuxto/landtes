import { 
  ChevronRight, Zap, Trophy, 
  Gauge, TrendingUp, 
  TrendingDown, ShieldCheck, Globe, Play,
  Activity, Flag, BarChart2
} from 'lucide-react';

// --- Assets (New Verified F1 Images) ---
// Hero: McLaren F1 Car on track
const F1_HERO_BG = "https://images.unsplash.com/photo-1610892329380-60b8b939c3e9?q=80&w=2670&auto=format&fit=crop";
// Parallax: Red Racing Car / High Speed
const F1_PARALLAX_BG = "https://images.unsplash.com/photo-1574786780373-c6c747653240?q=80&w=2600&auto=format&fit=crop";

// --- Components ---

const GlassNavbar = () => (
  <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-black/40 backdrop-blur-xl border-b border-white/10">
    <div className="max-w-[1800px] mx-auto px-8 h-24 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center skew-x-[-12deg] shadow-[0_0_15px_rgba(234,88,12,0.5)]">
          <Zap className="text-white w-6 h-6 skew-x-[12deg] fill-current" />
        </div>
        <span className="text-3xl font-black tracking-tighter text-white italic">
          TURBO<span className="text-orange-500">TRADER</span>
        </span>
      </div>

      <div className="hidden lg:flex gap-12 text-sm font-bold uppercase tracking-widest text-white/90">
        {['Trading', 'Analysis', 'Tournaments', 'VIP', 'F1 Racing'].map((item) => (
          <a key={item} href="#" className="hover:text-orange-500 transition-colors relative group">
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
          </a>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <button className="text-white font-bold hover:text-orange-500 transition-colors uppercase text-sm tracking-wider">
          Log In
        </button>
        <button className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-3 rounded text-sm font-black uppercase tracking-wider skew-x-[-12deg] transition-all hover:scale-105 shadow-[0_0_20px_rgba(234,88,12,0.4)]">
          <span className="block skew-x-[12deg]">Sign Up</span>
        </button>
      </div>
    </div>
  </nav>
);

const F1Hero = () => (
  <section className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-center">
    {/* Background Image */}
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
      style={{ backgroundImage: `url(${F1_HERO_BG})` }}
    >
      {/* Carbon Fiber Overlay (CSS Only - Always Visible) */}
      <div className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none" 
           style={{
             backgroundImage: 'radial-gradient(black 15%, transparent 16%), radial-gradient(black 15%, transparent 16%)',
             backgroundSize: '4px 4px',
             backgroundPosition: '0 0, 2px 2px'
           }}>
      </div>
      
      {/* Dark Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
    </div>

    <div className="relative z-10 max-w-[1800px] mx-auto px-8 w-full">
      <div className="max-w-4xl">
        <div className="flex items-center gap-3 mb-8 animate-fade-in-up">
          <div className="px-4 py-1 border border-orange-500/50 bg-orange-500/10 rounded backdrop-blur-md text-orange-500 font-bold uppercase tracking-[0.2em] text-xs shadow-[0_0_10px_rgba(234,88,12,0.2)]">
            Official Partner
          </div>
          <div className="h-px w-20 bg-orange-500/50"></div>
          <span className="text-white/80 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
            <Flag className="w-4 h-4 text-white" /> Scuderia Speed Team
          </span>
        </div>

        <h1 className="text-7xl lg:text-9xl font-black text-white leading-[0.9] italic mb-10 drop-shadow-2xl">
          TRADE <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 filter drop-shadow-[0_0_20px_rgba(234,88,12,0.3)]">
            FASTER
          </span>
        </h1>

        <div className="flex items-center gap-6 mb-12 p-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl w-fit">
           <div className="text-center px-4 border-r border-white/10">
             <div className="text-orange-500 font-black text-2xl italic">0.05s</div>
             <div className="text-[10px] uppercase text-gray-400 font-bold">Latency</div>
           </div>
           <div className="text-center px-4 border-r border-white/10">
             <div className="text-white font-black text-2xl italic">500:1</div>
             <div className="text-[10px] uppercase text-gray-400 font-bold">Leverage</div>
           </div>
           <div className="text-center px-4">
             <div className="text-white font-black text-2xl italic">24/7</div>
             <div className="text-[10px] uppercase text-gray-400 font-bold">Support</div>
           </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          <button className="h-16 px-12 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white rounded font-black text-xl uppercase tracking-wider transition-all duration-300 skew-x-[-12deg] shadow-[0_0_30px_rgba(234,88,12,0.4)] group">
            {/* Fixed conflict: Removed 'block' class, keeping 'flex' */}
            <span className="skew-x-[12deg] flex items-center gap-3">
              Start Engine <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </span>
          </button>
          
          <button className="h-16 px-10 flex items-center gap-4 text-white hover:text-orange-500 transition-colors group backdrop-blur-sm bg-white/5 rounded skew-x-[-12deg] border border-white/10 hover:border-orange-500/50">
            <div className="skew-x-[12deg] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-orange-500 transition-colors">
                <Play className="w-4 h-4 fill-current ml-1" />
                </div>
                <span className="font-bold uppercase tracking-wider text-sm">Watch The Film</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </section>
);

const GlassTradingInterface = () => (
  <section className="py-32 bg-[#050505] relative overflow-hidden">
    {/* Dynamic Background Elements */}
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
         style={{
             backgroundImage: 'linear-gradient(45deg, #222 25%, transparent 25%, transparent 75%, #222 75%, #222), linear-gradient(45deg, #222 25%, transparent 25%, transparent 75%, #222 75%, #222)',
             backgroundSize: '20px 20px',
             backgroundPosition: '0 0, 10px 10px'
         }}>
    </div>
    <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[150px] pointer-events-none"></div>
    <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>

    <div className="max-w-[1600px] mx-auto px-8 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div>
            <h2 className="text-5xl font-black text-white italic mb-4 tracking-tight">THE COCKPIT</h2>
            <p className="text-gray-400 text-lg max-w-xl">
            A professional-grade interface designed for speed. Customize your workspace with over 100 indicators and widgets.
            </p>
        </div>
        <div className="flex gap-4 mt-8 md:mt-0">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded border border-white/10 text-xs font-mono text-green-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> SYSTEM OPTIMAL
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded border border-white/10 text-xs font-mono text-orange-400">
                PING: 12ms
            </div>
        </div>
      </div>

      {/* The UI Mockup Container */}
      <div className="w-full bg-[#0F1115]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-1 shadow-2xl relative overflow-hidden group">
        
        {/* Top Bar */}
        <div className="bg-[#181B21] px-4 py-3 flex justify-between items-center rounded-t-[20px]">
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-white font-bold cursor-pointer hover:text-orange-500 transition-colors">
                    <span className="text-orange-500">EUR/USD</span> <ChevronRight className="w-4 h-4"/>
                </div>
                <div className="h-4 w-px bg-white/10"></div>
                <div className="text-green-500 font-mono text-sm font-bold">1.09245 (+0.45%)</div>
            </div>
            <div className="flex gap-2">
                {['1M', '5M', '15M', '1H', '4H', '1D'].map(tf => (
                    <button key={tf} className="px-3 py-1 rounded hover:bg-white/10 text-xs font-bold text-gray-400 hover:text-white transition-colors">{tf}</button>
                ))}
            </div>
        </div>

        <div className="grid grid-cols-12 h-[650px] bg-[#0F1115]">
          {/* Left Panel: Assets */}
          <div className="col-span-2 border-r border-white/5 p-2 flex flex-col gap-1">
            {[1,2,3,4,5,6,7,8].map((_, i) => (
              <div key={i} className="flex justify-between items-center p-3 rounded hover:bg-white/5 cursor-pointer group/item transition-colors">
                <div>
                  <div className="text-white font-bold text-sm group-hover/item:text-orange-500 transition-colors">EUR/USD</div>
                  <div className="text-[10px] text-gray-500 uppercase font-bold">Forex</div>
                </div>
                <div className={`text-xs font-mono font-bold ${i % 2 === 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {i % 2 === 0 ? '+0.45%' : '-0.12%'}
                </div>
              </div>
            ))}
          </div>

          {/* Center: Chart */}
          <div className="col-span-8 relative overflow-hidden bg-[#0B0C0E]">
            {/* Subtle Grid */}
            <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
            
            {/* Fake Candles */}
            <div className="absolute bottom-20 left-4 right-20 h-96 flex items-end gap-[2px] opacity-90">
              {[...Array(60)].map((_, i) => {
                const height = Math.random() * 80 + 10;
                const isGreen = Math.random() > 0.48;
                return (
                  <div key={i} className="flex-1 flex flex-col justify-end items-center group/candle hover:opacity-100 opacity-80 transition-opacity">
                    <div className={`w-[1px] h-full ${isGreen ? 'bg-green-500/30' : 'bg-red-500/30'} mb-[-10px]`}></div>
                    <div 
                      className={`w-full ${isGreen ? 'bg-green-500' : 'bg-red-500'} rounded-[1px] relative shadow-[0_0_10px_rgba(0,0,0,0.5)]`} 
                      style={{ height: `${height}%` }}
                    ></div>
                  </div>
                );
              })}
            </div>
            
            {/* Moving Average Line */}
            <svg className="absolute bottom-20 left-4 right-20 w-full h-96 pointer-events-none opacity-50" preserveAspectRatio="none">
                <path d="M0,300 Q100,250 200,280 T400,200 T600,150 T800,100" fill="none" stroke="#F97316" strokeWidth="2" />
            </svg>

            {/* Current Price Label */}
            <div className="absolute top-[30%] right-0 bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded-l shadow-[0_0_10px_rgba(234,88,12,0.5)]">
                1.09245
            </div>
            <div className="absolute top-[30%] left-0 right-0 border-t border-dashed border-orange-500/30 pointer-events-none"></div>
          </div>

          {/* Right Panel: Trade Controls */}
          <div className="col-span-2 border-l border-white/5 bg-[#121418] p-4 flex flex-col gap-4">
            <div className="flex-1">
                <div className="text-xs font-bold text-gray-500 uppercase mb-2">Order Type</div>
                <div className="flex bg-black/40 rounded p-1 mb-4">
                    <button className="flex-1 py-1 text-xs font-bold bg-white/10 text-white rounded">Market</button>
                    <button className="flex-1 py-1 text-xs font-bold text-gray-500 hover:text-white">Limit</button>
                </div>

                <div className="mb-4">
                    <label className="text-gray-500 text-[10px] uppercase font-bold mb-1 block">Amount ($)</label>
                    <input type="text" value="1,000" className="w-full bg-black/40 border border-white/10 rounded p-3 text-white font-mono font-bold text-right focus:border-orange-500 outline-none transition-colors" readOnly />
                </div>

                <div className="mb-6">
                    <label className="text-gray-500 text-[10px] uppercase font-bold mb-1 block">Multiplier</label>
                    <div className="grid grid-cols-4 gap-1">
                        {['10x', '20x', '50x', '100x'].map(m => (
                            <button key={m} className="bg-white/5 hover:bg-orange-500/20 hover:text-orange-500 text-gray-400 text-xs font-bold py-2 rounded transition-colors">{m}</button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-auto grid gap-3">
              <button className="bg-green-600 hover:bg-green-500 text-white font-black py-4 rounded shadow-[0_4px_0_rgb(21,128,61)] active:shadow-none active:translate-y-[4px] transition-all uppercase tracking-wider flex justify-between px-4 items-center group">
                <span className="group-hover:scale-105 transition-transform">Buy</span>
                <TrendingUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
              <button className="bg-red-600 hover:bg-red-500 text-white font-black py-4 rounded shadow-[0_4px_0_rgb(185,28,28)] active:shadow-none active:translate-y-[4px] transition-all uppercase tracking-wider flex justify-between px-4 items-center group">
                <span className="group-hover:scale-105 transition-transform">Sell</span>
                <TrendingDown className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FeatureGrid = () => (
  <section className="py-32 bg-[#080808] border-y border-white/5 relative">
    <div className="max-w-[1600px] mx-auto px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: Gauge, title: "Microsecond Execution", desc: "Our engine processes orders in under 50 microseconds.", color: "text-orange-500" },
          { icon: Trophy, title: "Champion's Rewards", desc: "Monthly trading tournaments with F1 grand prix tickets.", color: "text-yellow-500" },
          { icon: ShieldCheck, title: "Titanium Security", desc: "Military-grade encryption and segregated tier-1 accounts.", color: "text-blue-500" },
          { icon: Globe, title: "Global Access", desc: "Trade from 180 countries with local payment methods.", color: "text-green-500" },
        ].map((feature, i) => (
          <div key={i} className="bg-gradient-to-b from-white/5 to-transparent border border-white/5 p-10 rounded-3xl hover:border-white/20 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden">
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-8 skew-x-[-6deg] group-hover:skew-x-0 transition-transform border border-white/10 shadow-lg relative z-10">
              <feature.icon className={`w-8 h-8 ${feature.color}`} />
            </div>
            <h3 className="text-white font-bold text-2xl mb-4 italic relative z-10">{feature.title}</h3>
            <p className="text-gray-400 leading-relaxed relative z-10">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const F1Parallax = () => (
  <section 
    className="relative h-[800px] bg-fixed bg-cover bg-center flex items-center"
    style={{ backgroundImage: `url(${F1_PARALLAX_BG})` }}
  >
    {/* Heavy Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
    {/* Carbon pattern (CSS Only) */}
    <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{
             backgroundImage: 'radial-gradient(black 15%, transparent 16%), radial-gradient(black 15%, transparent 16%)',
             backgroundSize: '4px 4px',
             backgroundPosition: '0 0, 2px 2px'
           }}>
    </div>
    
    <div className="relative z-10 max-w-[1600px] mx-auto w-full px-8 grid grid-cols-1 lg:grid-cols-2 gap-20">
      
      {/* Left Side: Telemetry Data (Filling the void) */}
      <div className="hidden lg:block pt-20">
        <div className="bg-black/60 backdrop-blur-md border border-white/10 p-8 rounded-2xl max-w-md ml-auto transform translate-y-12 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
                <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">Live Telemetry</span>
                <div className="flex gap-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-200"></div>
                </div>
            </div>
            <div className="space-y-6">
                <div>
                    <div className="flex justify-between text-xs font-bold text-gray-400 mb-1">
                        <span>Speed</span>
                        <span className="text-white">324 km/h</span>
                    </div>
                    <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                        <div className="w-[85%] h-full bg-orange-600"></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-xs font-bold text-gray-400 mb-1">
                        <span>RPM</span>
                        <span className="text-white">12,400</span>
                    </div>
                    <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                        <div className="w-[92%] h-full bg-orange-600"></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-xs font-bold text-gray-400 mb-1">
                        <span>G-Force</span>
                        <span className="text-white">4.2 G</span>
                    </div>
                    <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                        <div className="w-[60%] h-full bg-orange-600"></div>
                    </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-white/5 p-3 rounded border border-white/5">
                        <Activity className="w-5 h-5 text-green-500 mb-2" />
                        <div className="text-lg font-black text-white">98%</div>
                        <div className="text-[10px] uppercase text-gray-500 font-bold">Engine Health</div>
                    </div>
                    <div className="bg-white/5 p-3 rounded border border-white/5">
                        <BarChart2 className="w-5 h-5 text-blue-500 mb-2" />
                        <div className="text-lg font-black text-white">45ms</div>
                        <div className="text-[10px] uppercase text-gray-500 font-bold">Reaction Time</div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Right Side: Text Content */}
      <div className="flex flex-col justify-center">
        <div className="inline-block px-4 py-1 mb-6 border border-orange-500/50 bg-orange-500/10 rounded text-orange-500 font-bold tracking-widest text-xs uppercase w-fit">
            Performance DNA
        </div>
        <h2 className="text-6xl lg:text-8xl font-black text-white italic mb-8 leading-none drop-shadow-lg">
            DRIVEN BY <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">ADRENALINE</span>
        </h2>
        <p className="text-xl text-gray-300 mb-10 font-light leading-relaxed max-w-lg border-l-4 border-orange-600 pl-6 bg-gradient-to-r from-white/5 to-transparent p-4 rounded-r-lg">
            "In trading, just like in racing, hesitation is not an option. You need the best machine to win."
        </p>
        <button className="h-14 px-8 bg-white text-black hover:bg-orange-500 hover:text-white rounded font-bold text-lg uppercase tracking-wider transition-all duration-300 w-fit">
            Join The Race
        </button>
      </div>

    </div>
  </section>
);

const GlassFooter = () => (
  <footer className="bg-[#050505] border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
    {/* Footer ambient light */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none"></div>

    <div className="max-w-[1600px] mx-auto px-8 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center mb-16">
        <div className="flex items-center gap-3 mb-8 md:mb-0">
          <div className="w-10 h-10 bg-orange-600 rounded flex items-center justify-center">
            <Zap className="text-white w-6 h-6 fill-current" />
          </div>
          <span className="text-3xl font-black text-white italic">TURBO<span className="text-orange-600">TRADER</span></span>
        </div>
        
        <div className="flex gap-8">
          {['Instagram', 'Twitter', 'YouTube', 'LinkedIn'].map((social) => (
            <a key={social} href="#" className="text-gray-500 hover:text-white font-bold uppercase text-sm tracking-wider transition-colors">
              {social}
            </a>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/5 pt-16 mb-16">
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Platform</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li><a href="#" className="hover:text-orange-500 transition-colors">Download App</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Web Trader</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Desktop</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Markets</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li><a href="#" className="hover:text-orange-500 transition-colors">Forex</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Stocks</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Crypto</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Company</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li><a href="#" className="hover:text-orange-500 transition-colors">About F1 Team</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Sponsorships</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Support</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li><a href="#" className="hover:text-orange-500 transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Live Chat</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Status</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-600 text-xs font-mono">
        <p>&copy; 2026 TurboTrader Racing Ltd. Official Partner of the Racing League. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// --- Main Component ---

export default function Design4() {
  return (
    <div className="bg-black text-white font-sans selection:bg-orange-500 selection:text-white">
      <GlassNavbar />
      <F1Hero />
      <FeatureGrid />
      <GlassTradingInterface />
      <F1Parallax />
      <GlassFooter />
    </div>
  );
}