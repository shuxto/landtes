import { useState } from 'react';
import { 
  Menu, X, Globe, ChevronDown, Lock, 
  BarChart3, PieChart, TrendingUp, 
  CandlestickChart, ArrowUpRight, 
  CreditCard, Wallet, Landmark, Bitcoin, 
  Phone, Mail, CheckCircle2, Shield, 
  Zap, Headphones, Star, Quote, Award
} from 'lucide-react';

// --- IMPORT YOUR IMAGE HERE ---
// Make sure your file is named 'hero.jpg' and is inside src/assets/
// If it is a png, change .jpg to .png
import heroBg from './assets/hero.jpg'; 

// --- Mock Data (German) ---

const TICKER_DATA = [
  { symbol: "EUR/USD", price: 1.0924, change: "+0.12%" },
  { symbol: "DAX 40", price: 16921.50, change: "+0.45%" },
  { symbol: "GOLD", price: 2035.10, change: "-0.21%" },
  { symbol: "BTC/EUR", price: 45120.00, change: "+1.20%" },
  { symbol: "TSLA", price: 185.10, change: "-1.50%" },
  { symbol: "ETH/EUR", price: 2450.30, change: "+0.80%" },
  { symbol: "USD/JPY", price: 148.20, change: "+0.05%" },
];

const PROMO_BANNERS = [
  { 
    id: 1, 
    title: "Willkommensbonus", 
    desc: "Erhalten Sie bis zu 50% Bonus auf Ihre erste Einzahlung.", 
    cta: "Bonus Beanspruchen",
    color: "bg-gradient-to-r from-indigo-600 to-blue-500"
  },
  { 
    id: 2, 
    title: "Null Komissionen", 
    desc: "VOIDNETn Sie Aktien-CFDs ohne Gebühren für die ersten 30 Tage.", 
    cta: "Jetzt Starten",
    color: "bg-gradient-to-r from-emerald-500 to-teal-400"
  }
];

const TESTIMONIALS = [
  { name: "Michael S.", role: "Daytrader", text: "Die Ausführungsgeschwindigkeit ist unschlagbar. Ich habe schon viele Broker getestet, aber VOIDNETPro ist eine andere Liga." },
  { name: "Sarah Weber", role: "Investorin", text: "Endlich eine Plattform, die verständlich ist, aber trotzdem alle Profi-Tools bietet. Der deutsche Support ist erstklassig." },
  { name: "Thomas K.", role: "Krypto-Trader", text: "Die Spreads bei Bitcoin und Ethereum sind extrem eng. Auszahlungen sind meistens noch am selben Tag auf dem Konto." }
];

// --- Components ---

const TickerTape = () => (
  <div className="bg-slate-900 text-white overflow-hidden py-2 whitespace-nowrap">
    <div className="inline-flex animate-marquee space-x-8">
      {[...TICKER_DATA, ...TICKER_DATA, ...TICKER_DATA].map((item, i) => (
        <div key={i} className="flex items-center space-x-2 text-xs font-mono">
          <span className="font-bold text-slate-300">{item.symbol}</span>
          <span>{item.price}</span>
          <span className={item.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}>
            {item.change}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg transform -rotate-6">
              <TrendingUp className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
              VOIDNET<span className="text-blue-600">PRO</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <a href="#" className="text-slate-600 hover:text-blue-600 font-medium text-sm flex items-center gap-1">Märkte <ChevronDown className="w-3 h-3" /></a>
            <a href="#" className="text-slate-600 hover:text-blue-600 font-medium text-sm">Plattformen</a>
            <a href="#" className="text-slate-600 hover:text-blue-600 font-medium text-sm">Analysen</a>
            <a href="#" className="text-slate-600 hover:text-blue-600 font-medium text-sm">Lernen</a>
            <a href="#" className="text-slate-600 hover:text-blue-600 font-medium text-sm">Über Uns</a>
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium text-sm">
              <Lock className="w-4 h-4" /> Anmelden
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-blue-200 transition-transform hover:-translate-y-0.5">
              Konto Eröffnen
            </button>
            <button className="text-slate-400 hover:text-slate-600">
              <Globe className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <header className="relative bg-slate-50 overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 skew-x-12 translate-x-20"></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider mb-6">
            Neu: Krypto-Wallet Integration
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
            Die Zukunft des <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Online-VOIDNETs
            </span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            VOIDNETn Sie über 5.000 Instrumente mit extrem engen Spreads, blitzschneller Ausführung und preisgekröntem deutschen Support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
              Starten Sie Jetzt <ArrowUpRight className="w-5 h-5" />
            </button>
            <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              Demo Testen
            </button>
          </div>
          <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
            <CheckCircle2 className="w-4 h-4 text-green-500" /> Reguliert in der EU
            <span className="mx-2">•</span>
            <CheckCircle2 className="w-4 h-4 text-green-500" /> 24/7 Support
          </div>
        </div>
        
        {/* Abstract Chart Graphic */}
        <div className="relative">
          <div className="bg-white p-6 rounded-2xl shadow-2xl shadow-blue-900/10 border border-slate-100 relative z-20">
            <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
              <div className="flex gap-4">
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 font-bold uppercase">Symbol</span>
                  <span className="font-bold text-slate-900 text-lg">EUR/USD</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 font-bold uppercase">Preis</span>
                  <span className="font-bold text-green-500 text-lg">1.09245</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 bg-slate-100 rounded hover:bg-slate-200"><BarChart3 className="w-4 h-4 text-slate-600"/></button>
                <button className="p-2 bg-slate-100 rounded hover:bg-slate-200"><CandlestickChart className="w-4 h-4 text-slate-600"/></button>
              </div>
            </div>
            
            {/* Mock Chart Area */}
            <div className="h-64 bg-slate-50 rounded-lg mb-6 relative overflow-hidden flex items-end px-4 gap-2">
              {[40, 60, 45, 70, 65, 80, 55, 75, 90, 85, 95, 100, 90, 80, 85, 70, 60, 75, 85, 95].map((h, i) => (
                <div 
                  key={i} 
                  className={`flex-1 rounded-t-sm ${i % 2 === 0 ? 'bg-green-400' : 'bg-red-400'} opacity-80 hover:opacity-100 transition-opacity cursor-crosshair`}
                  style={{ height: `${h}%` }}
                ></div>
              ))}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded shadow text-xs font-mono text-slate-600 border border-slate-200">
                EMA 200 <span className="text-blue-500">1.0910</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-bold transition-colors">
                VERKAUFEN
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-bold transition-colors">
                KAUFEN
              </button>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 z-30 animate-bounce delay-1000">
             <div className="flex items-center gap-3">
               <div className="bg-green-100 p-2 rounded-full"><TrendingUp className="w-5 h-5 text-green-600" /></div>
               <div>
                 <div className="text-xs text-slate-500 font-bold">Gewinn</div>
                 <div className="font-bold text-slate-900">+ €450.00</div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const LogosSection = () => (
  <section className="py-10 border-b border-slate-100 bg-white">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Bekannt aus den Medien</p>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
        {/* Using text logos to simulate brand logos */}
        <span className="text-2xl font-serif font-bold text-slate-800">FINANZ<span className="text-blue-600">WELT</span></span>
        <span className="text-2xl font-sans font-black text-slate-800 tracking-tighter italic">BOERSE<span className="text-slate-400">DAILY</span></span>
        <span className="text-xl font-mono font-bold text-slate-800 border-2 border-slate-800 p-1">MARKET<span className="bg-slate-800 text-white px-1">WATCH</span></span>
        <span className="text-2xl font-serif font-bold text-slate-800">VOIDNETS<span className="text-orange-500">BLATT</span></span>
        <span className="text-xl font-bold text-slate-800 flex items-center gap-1"><Zap className="w-5 h-5 fill-current"/> TECHTRADER</span>
      </div>
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Warum VOIDNETPro?</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Wir setzen neue Standards in der Trading-Branche. Hier sind nur einige Gründe, warum sich tausende Trader für uns entscheiden.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
            <Zap className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Blitzschnelle Ausführung</h3>
          <p className="text-slate-500 leading-relaxed">
            Unsere Server befinden sich in den Equinix NY4 Datencentern. Ausführungszeiten unter 30ms garantieren beste Preise ohne Requotes.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 text-green-600">
            <Shield className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Höchste Sicherheit</h3>
          <p className="text-slate-500 leading-relaxed">
            Ihre Gelder werden auf segregierten Konten bei Top-Tier Banken verwahrt. Wir bieten zudem einen Negativsaldo-Schutz für alle Konten.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-purple-600">
            <Headphones className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">24/7 Deutscher Support</h3>
          <p className="text-slate-500 leading-relaxed">
            Unser preisgekröntes Support-Team spricht Ihre Sprache und ist rund um die Uhr per Chat, Telefon und E-Mail für Sie erreichbar.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// --- New Full Screen Picture Section ---
const FullScreenFeature = () => (
  <section 
    className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center bg-fixed bg-cover bg-center" 
    style={{
      // Using the uploaded image from assets
      backgroundImage: `url(${heroBg})`,
    }}
  >
    {/* Dark Overlay for text readability */}
    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
    
    <div className="relative z-10 text-center max-w-5xl px-6">
      <div className="inline-block px-4 py-1 mb-6 border border-blue-400/30 rounded-full bg-blue-500/10 backdrop-blur text-blue-300 font-bold tracking-widest text-xs uppercase">
        Next Gen Technology
      </div>
      <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-none drop-shadow-2xl">
        VOIDNETN SIE <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">OHNE GRENZEN</span>
      </h2>
      <p className="text-xl md:text-2xl text-slate-200 mb-10 font-light max-w-3xl mx-auto drop-shadow-md">
        Erleben Sie Trading auf einem neuen Level. Maximale Performance für Ihre Strategie, egal wo Sie sind.
      </p>
      <div className="flex flex-col sm:flex-row gap-5 justify-center">
        <button className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          Kostenlos Starten
        </button>
        <button className="bg-transparent border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
          Mehr Erfahren
        </button>
      </div>
    </div>
  </section>
);

const WidgetsSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Professionelle Analyse-Tools</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Nutzen Sie die Kraft von TradingView direkt in unserer Plattform. Technische Analyse war noch nie so einfach.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Widget 1: Technicals */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-2 rounded-lg"><PieChart className="w-6 h-6 text-blue-600"/></div>
            <h3 className="font-bold text-lg text-slate-900">Technische Bewertung</h3>
          </div>
          <div className="flex justify-center mb-6">
            <div className="relative w-40 h-20 overflow-hidden">
              <div className="w-40 h-40 bg-slate-100 rounded-full border-8 border-slate-200 flex items-center justify-center"></div>
              <div className="absolute bottom-0 left-1/2 w-1 h-20 bg-slate-900 origin-bottom transform -rotate-45 rounded-full"></div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-black text-green-500 mb-1">STARKER KAUF</div>
            <p className="text-xs text-slate-400">Basierend auf 24 Indikatoren</p>
          </div>
        </div>

        {/* Widget 2: Market Overview */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
              <Globe className="w-5 h-5 text-slate-400"/> Marktübersicht
            </h3>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold cursor-pointer hover:bg-slate-200">Forex</span>
              <span className="px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded-full text-xs font-bold cursor-pointer hover:border-blue-500">Krypto</span>
            </div>
          </div>
          <div className="space-y-4">
            {TICKER_DATA.slice(0, 4).map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors border-b border-slate-100 last:border-0">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                    {item.symbol.substring(0,1)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{item.symbol}</div>
                    <div className="text-xs text-slate-400">Real-Time FX Data</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-mono font-medium text-slate-900">{item.price}</div>
                  <div className={`text-xs font-bold ${item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {item.change}
                  </div>
                </div>
                <div className="w-24 h-8">
                   <svg viewBox="0 0 100 30" className="w-full h-full stroke-2 fill-none">
                     <path d={`M0,15 Q25,${item.change.startsWith('+') ? '5' : '25'} 50,15 T100,${item.change.startsWith('+') ? '5' : '25'}`} className={item.change.startsWith('+') ? 'stroke-green-500' : 'stroke-red-500'} />
                   </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-white border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Das sagen unsere Kunden</h2>
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <span className="text-slate-500 font-bold">4.9/5 auf TrustPilot</span>
          </div>
        </div>
        <button className="hidden md:flex text-blue-600 font-bold items-center hover:underline">
          Alle Bewertungen lesen <ArrowUpRight className="w-4 h-4 ml-1" />
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((review, i) => (
          <div key={i} className="bg-slate-50 p-8 rounded-2xl relative border border-slate-100 hover:shadow-lg transition-shadow">
            <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-200" />
            <div className="flex items-center gap-1 text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-slate-700 italic mb-6 leading-relaxed">"{review.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md">
                {review.name.substring(0,1)}
              </div>
              <div>
                <div className="font-bold text-slate-900 text-sm">{review.name}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wide flex items-center gap-1">
                  {review.role} <CheckCircle2 className="w-3 h-3 text-blue-500" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Banners = () => (
  <section className="py-16 bg-slate-50 border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex items-center gap-2 mb-8">
        <Award className="w-6 h-6 text-orange-500" />
        <h2 className="text-2xl font-bold text-slate-900">Aktuelle Aktionen</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {PROMO_BANNERS.map((banner) => (
          <div key={banner.id} className={`${banner.color} rounded-2xl p-8 text-white shadow-lg relative overflow-hidden group cursor-pointer`}>
            <div className="absolute top-0 right-0 p-32 bg-white/10 rounded-full transform translate-x-1/3 -translate-y-1/3 blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
            <div className="relative z-10">
              <div className="inline-block px-3 py-1 bg-white/20 rounded backdrop-blur text-xs font-bold mb-4">LIMITED TIME</div>
              <h3 className="text-3xl font-bold mb-2">{banner.title}</h3>
              <p className="text-blue-50/90 mb-8 max-w-sm font-medium">{banner.desc}</p>
              <button className="bg-white text-slate-900 px-6 py-2 rounded-lg font-bold text-sm shadow hover:bg-slate-100 transition-colors">
                {banner.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TrustFooter = () => (
  <footer className="bg-slate-900 text-slate-400 py-20 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
        <div className="col-span-2">
          <div className="text-2xl font-extrabold text-white mb-6 tracking-tight">
            VOIDNET<span className="text-blue-500">PRO</span>
          </div>
          <p className="text-sm leading-relaxed mb-6 max-w-xs">
            Ihr zuverlässiger Partner für den internationalen Finanzmarkt. Wir bieten innovative Technologie kombiniert mit erstklassiger Sicherheit.
          </p>
          <div className="flex gap-4">
             <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"><Globe className="w-4 h-4"/></div>
             <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"><Mail className="w-4 h-4"/></div>
             <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"><Phone className="w-4 h-4"/></div>
          </div>
        </div>
        
        {[
          { head: "Rechtliches", links: ["Impressum", "Datenschutz", "AGB", "Risikohinweis"] },
          { head: "Konto", links: ["Einzahlung", "Auszahlung", "Kontotypen", "Verifizierung"] },
          { head: "Hilfe", links: ["Support Center", "Status", "Kontakt", "FAQ"] }
        ].map((col, idx) => (
          <div key={idx}>
            <h4 className="text-white font-bold mb-6">{col.head}</h4>
            <ul className="space-y-4 text-sm">
              {col.links.map(l => (
                <li key={l}><a href="#" className="hover:text-blue-400 transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-800 pt-12">
        <h5 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6 text-center">Sichere Zahlungsmethoden</h5>
        <div className="flex flex-wrap justify-center gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           <div className="flex items-center gap-2 text-white"><CreditCard className="w-6 h-6"/> <span className="font-bold text-lg">VISA</span></div>
           <div className="flex items-center gap-2 text-white"><CreditCard className="w-6 h-6"/> <span className="font-bold text-lg">Mastercard</span></div>
           <div className="flex items-center gap-2 text-white"><Wallet className="w-6 h-6"/> <span className="font-bold text-lg">PayPal</span></div>
           <div className="flex items-center gap-2 text-white"><Landmark className="w-6 h-6"/> <span className="font-bold text-lg">Sofort</span></div>
           <div className="flex items-center gap-2 text-white"><Bitcoin className="w-6 h-6"/> <span className="font-bold text-lg">Bitcoin</span></div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-center leading-relaxed text-slate-500">
        <p className="mb-4">
          Risikowarnung: Der VOIDNET mit Finanzinstrumenten und/oder Kryptowährungen birgt hohe Risiken. Sie können Ihr gesamtes investiertes Kapital verlieren. 
          Stellen Sie sicher, dass Sie die damit verbundenen Risiken vollständig verstehen.
        </p>
        <p>
          © 2026 VOIDNETPro GmbH. Alle Rechte vorbehalten. Frankfurt am Main, Deutschland.
        </p>
      </div>
    </div>
  </footer>
);

// --- Main Design 2 Component ---

export default function Design2() {
  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-blue-100">
      <TickerTape />
      <Navbar />
      <Hero />
      <LogosSection />
      <WhyChooseUs />
      <FullScreenFeature />
      <WidgetsSection />
      <Testimonials />
      <Banners />
      <TrustFooter />
    </div>
  );
}