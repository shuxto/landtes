import { 
  ArrowRight, ArrowUpRight, ChevronDown, 
  Shield, Zap, RefreshCw, Layers, Box, 
  Twitter, Facebook, Linkedin, Instagram, Mail,
  Smartphone, Gem, Globe, Lock, Server
} from 'lucide-react';

// --- Import Video ---
import videoBg from './assets/FP_Header_Blue.mp4'; 

// --- Mock Data ---

const CRYPTO_MARKET = [
  { rank: 1, name: "Bitcoin", symbol: "BTC", price: 48250.00, change: "+2.4%", vol: "28B", cap: "945B" },
  { rank: 2, name: "Ethereum", symbol: "ETH", price: 2490.15, change: "+1.8%", vol: "15B", cap: "298B" },
  { rank: 3, name: "Solana", symbol: "SOL", price: 108.50, change: "+5.2%", vol: "4B", cap: "47B" },
  { rank: 4, name: "XRP", symbol: "XRP", price: 0.52, change: "-0.5%", vol: "1B", cap: "28B" },
  { rank: 5, name: "Cardano", symbol: "ADA", price: 0.55, change: "+0.2%", vol: "800M", cap: "19B" },
  { rank: 6, name: "Avalanche", symbol: "AVAX", price: 38.20, change: "+4.1%", vol: "600M", cap: "14B" },
];

const AGENTS = [
  { name: "Alex Mercer", role: "VIP Crypto Broker", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
  { name: "Elena Vos", role: "DeFi Specialist", img: "https://images.unsplash.com/photo-1573496359-7013ac2bebb5?auto=format&fit=crop&q=80&w=400" },
  { name: "Marcus Thorne", role: "Institutional Sales", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
  { name: "Sarah Jenkins", role: "Account Manager", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
];

// --- Components ---

const Navbar = () => (
  <nav className="fixed w-full z-50 bg-[#0B0E14]/80 backdrop-blur-md border-b border-gray-800">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between h-20 items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
            <Box className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold text-white tracking-tight">
            VOIDNET<span className="text-blue-500">CRYPTO</span>
          </span>
        </div>

        <div className="hidden lg:flex space-x-8">
          {['Exchange', 'Markets', 'Derivatives', 'Earn', 'Institutional'].map((item) => (
            <a key={item} href="#" className="text-gray-300 hover:text-white font-medium text-sm transition-colors">{item}</a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button className="text-white hover:text-blue-400 font-medium">Log In</button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold text-sm transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const VideoHero = () => (
  <header className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center bg-[#050505]">
    {/* Video Background */}
    <div className="absolute inset-0 w-full h-full">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="w-full h-full object-cover opacity-60"
      >
        <source src={videoBg} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 animate-fade-in">
          <Zap className="w-3 h-3" /> Live Trading Now Active
        </div>
        <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          The World's Leading <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Crypto Ecosystem
          </span>
        </h1>
        <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-lg">
          Buy, trade, and hold 350+ cryptocurrencies on the fastest and most secure exchange. Trusted by 200 million users worldwide.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Email / Phone Number" 
              className="w-full sm:w-80 bg-white/5 border border-gray-700 text-white pl-4 pr-32 py-4 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-blue-600 hover:bg-blue-500 text-white px-6 rounded-md font-bold text-sm transition-colors">
              Get Started
            </button>
          </div>
        </div>

        <div className="flex items-center gap-8 text-gray-500 text-sm font-medium">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-gray-400" />
            <span>$320M Insurance Fund</span>
          </div>
          <div className="flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-gray-400" />
            <span>24/7 Live Support</span>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const LiveMarket = () => (
  <section className="bg-[#0B0E14] py-10 border-b border-gray-800">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { l: "BTC/USDT", v: "48,250.00", c: "+2.4%", up: true },
          { l: "ETH/USDT", v: "2,490.15", c: "+1.8%", up: true },
          { l: "BNB/USDT", v: "320.50", c: "-0.5%", up: false },
          { l: "SOL/USDT", v: "108.50", c: "+5.2%", up: true },
        ].map((item, i) => (
          <div key={i} className="bg-[#151921] p-4 rounded-lg border border-gray-800 hover:border-gray-600 transition-all cursor-pointer">
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-400 font-bold text-xs">{item.l}</span>
              <span className={`text-xs ${item.up ? 'text-green-400' : 'text-red-400'}`}>{item.c}</span>
            </div>
            <div className={`text-xl font-mono font-medium ${item.up ? 'text-green-400' : 'text-red-400'}`}>
              {item.v}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#151921] rounded-2xl border border-gray-800 overflow-hidden">
        <div className="p-6 border-b border-gray-800 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Market Trend</h2>
          <a href="#" className="text-blue-500 text-sm font-bold flex items-center hover:text-blue-400">
            View All Markets <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#0E1218] text-xs text-gray-500 uppercase">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">24h Change</th>
                <th className="px-6 py-4">24h Volume</th>
                <th className="px-6 py-4">Market Cap</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 text-sm text-gray-300">
              {CRYPTO_MARKET.map((coin) => (
                <tr key={coin.symbol} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold text-xs">
                      {coin.symbol[0]}
                    </div>
                    <div>
                      <span className="text-white font-bold block">{coin.symbol}</span>
                      <span className="text-gray-500 text-xs">{coin.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono">${coin.price.toLocaleString()}</td>
                  <td className={`px-6 py-4 font-bold ${coin.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                    {coin.change}
                  </td>
                  <td className="px-6 py-4 text-gray-400">${coin.vol}</td>
                  <td className="px-6 py-4 text-gray-400">${coin.cap}</td>
                  <td className="px-6 py-4">
                    <button className="text-blue-400 hover:text-white font-medium text-xs border border-blue-900 bg-blue-900/20 px-3 py-1 rounded transition-colors">
                      Trade
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
);

const EcosystemSection = () => (
  <section className="py-24 bg-[#0B0E14] border-t border-gray-900">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">Comprehensive Ecosystem</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          More than just an exchange. Explore our suite of products designed to help you grow your portfolio.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-[#151921] p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all group">
          <div className="w-14 h-14 bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
            <Smartphone className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">VOIDNET Mobile App</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Trade on the go with our award-winning mobile app. Advanced charting and notifications in your pocket.
          </p>
          <a href="#" className="text-purple-400 text-sm font-bold flex items-center hover:text-white">Download Now <ArrowRight className="w-4 h-4 ml-1"/></a>
        </div>

        <div className="bg-[#151921] p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all group">
          <div className="w-14 h-14 bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
            <Gem className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">VOIDNET NFT</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Discover, collect, and sell extraordinary NFTs. The world's first cross-chain NFT marketplace.
          </p>
          <a href="#" className="text-blue-400 text-sm font-bold flex items-center hover:text-white">Explore NFTs <ArrowRight className="w-4 h-4 ml-1"/></a>
        </div>

        <div className="bg-[#151921] p-8 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all group">
          <div className="w-14 h-14 bg-green-900/30 rounded-xl flex items-center justify-center mb-6 text-green-400 group-hover:scale-110 transition-transform">
            <Globe className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">VOIDNET Pay</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Spend your crypto anywhere VISA is accepted. Up to 8% cashback on all purchases.
          </p>
          <a href="#" className="text-green-400 text-sm font-bold flex items-center hover:text-white">Get Card <ArrowRight className="w-4 h-4 ml-1"/></a>
        </div>
      </div>
    </div>
  </section>
);

const SwapWidget = () => (
  <section className="py-24 bg-[#050505] relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-purple-600/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold text-white mb-6">Instantly Swap Tokens</h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Exchange crypto with zero slippage and low fees. Our smart router finds the best price across 50+ liquidity sources.
          </p>
          <ul className="space-y-4 mb-8">
            {['Non-custodial trading', 'Best price guarantee', '0% fee on first swap', 'Lightning fast settlement'].map((item, i) => (
              <li key={i} className="flex items-center text-gray-300">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                  <ArrowUpRight className="w-3 h-3 text-blue-400" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#151921] p-6 rounded-3xl border border-gray-800 shadow-2xl relative">
          <div className="flex justify-between items-center mb-6">
            <span className="text-white font-bold">Swap</span>
            <div className="flex gap-2">
              <span className="p-2 hover:bg-gray-800 rounded cursor-pointer text-gray-400"><RefreshCw className="w-4 h-4"/></span>
              <span className="p-2 hover:bg-gray-800 rounded cursor-pointer text-gray-400"><Layers className="w-4 h-4"/></span>
            </div>
          </div>

          <div className="bg-[#0B0E14] p-4 rounded-2xl mb-2 border border-gray-800">
            <div className="flex justify-between text-xs text-gray-500 mb-2">
              <span>You Pay</span>
              <span>Balance: 2.45 BTC</span>
            </div>
            <div className="flex justify-between items-center">
              <input type="text" defaultValue="0.5" className="bg-transparent text-3xl font-mono text-white focus:outline-none w-1/2" />
              <button className="flex items-center gap-2 bg-[#1E232F] hover:bg-[#2A3040] text-white px-4 py-2 rounded-xl transition-colors">
                <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-[8px] font-bold">B</div>
                BTC <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <div className="text-gray-500 text-xs mt-2">≈ $24,125.00</div>
          </div>

          <div className="flex justify-center -my-3 relative z-10">
            <div className="bg-[#151921] border border-gray-800 p-2 rounded-xl text-blue-500 hover:text-white hover:bg-blue-600 transition-colors cursor-pointer">
              <ArrowUpRight className="w-4 h-4 rotate-180" />
            </div>
          </div>

          <div className="bg-[#0B0E14] p-4 rounded-2xl mb-6 border border-gray-800">
            <div className="flex justify-between text-xs text-gray-500 mb-2">
              <span>You Receive</span>
              <span>Balance: 0.00 USDT</span>
            </div>
            <div className="flex justify-between items-center">
              <input type="text" defaultValue="24,125.00" className="bg-transparent text-3xl font-mono text-white focus:outline-none w-1/2" />
              <button className="flex items-center gap-2 bg-[#1E232F] hover:bg-[#2A3040] text-white px-4 py-2 rounded-xl transition-colors">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-[8px] font-bold">T</div>
                USDT <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <div className="text-gray-500 text-xs mt-2">1 BTC = 48,250.00 USDT</div>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl text-lg transition-all shadow-lg shadow-blue-600/20">
            Swap Now
          </button>
        </div>
      </div>
    </div>
  </section>
);

const SecuritySection = () => (
  <section className="py-24 bg-[#0B0E14]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-3xl p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <h2 className="text-3xl font-bold text-white mb-6 relative z-10">Bank-Grade Security</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12 relative z-10">
          We use state-of-the-art security measures to protect your assets. Your trust is our top priority.
        </p>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4 text-blue-400">
              <Lock className="w-6 h-6" />
            </div>
            <h4 className="text-white font-bold mb-2">Cold Storage</h4>
            <p className="text-gray-500 text-sm">98% of assets are stored offline.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4 text-purple-400">
              <Shield className="w-6 h-6" />
            </div>
            <h4 className="text-white font-bold mb-2">Insurance Fund</h4>
            <p className="text-gray-500 text-sm">$300M+ protection for users.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4 text-green-400">
              <Server className="w-6 h-6" />
            </div>
            <h4 className="text-white font-bold mb-2">Encrypted Data</h4>
            <p className="text-gray-500 text-sm">AES-256 military grade encryption.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AgentsSection = () => (
  <section className="py-24 bg-[#050505] border-t border-gray-900">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">Meet Our Experts</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Need help with a large transaction? Our institutional agents are here to guide you through OTC deals and complex strategies.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {AGENTS.map((agent, i) => (
          <div key={i} className="group relative bg-[#0B0E14] rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src={agent.img} 
                alt={agent.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
              />
            </div>
            <div className="p-6 absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/90 to-transparent pt-12">
              <h3 className="text-white font-bold text-lg">{agent.name}</h3>
              <p className="text-blue-400 text-sm mb-4">{agent.role}</p>
              <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                <button className="bg-white/10 hover:bg-white text-white hover:text-black p-2 rounded-full transition-colors"><Linkedin className="w-4 h-4"/></button>
                <button className="bg-white/10 hover:bg-white text-white hover:text-black p-2 rounded-full transition-colors"><Mail className="w-4 h-4"/></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black text-gray-400 py-16 border-t border-gray-900">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
        <div className="col-span-2">
          <span className="text-2xl font-bold text-white tracking-tight block mb-6">
            VOIDNET<span className="text-blue-500">CRYPTO</span>
          </span>
          <p className="text-sm mb-6 max-w-xs">
            Building the decentralized future of finance. One block at a time.
          </p>
          <div className="flex gap-4">
            <Twitter className="w-5 h-5 hover:text-white cursor-pointer" />
            <Facebook className="w-5 h-5 hover:text-white cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-white cursor-pointer" />
            <Linkedin className="w-5 h-5 hover:text-white cursor-pointer" />
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Exchange</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-blue-400">Spot Trading</a></li>
            <li><a href="#" className="hover:text-blue-400">Margin Trading</a></li>
            <li><a href="#" className="hover:text-blue-400">Convert</a></li>
            <li><a href="#" className="hover:text-blue-400">Futures</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-400">Fees</a></li>
            <li><a href="#" className="hover:text-blue-400">Security</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact Agents</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Learn</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-blue-400">Academy</a></li>
            <li><a href="#" className="hover:text-blue-400">Browse Crypto</a></li>
            <li><a href="#" className="hover:text-blue-400">Blog</a></li>
            <li><a href="#" className="hover:text-blue-400">Research</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>&copy; 2026 VOIDNET Ltd. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Cookie Settings</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main Design 3 Component ---

export default function Design3() {
  return (
    <div className="font-sans bg-[#050505] text-white selection:bg-blue-500/30">
      <Navbar />
      <VideoHero />
      <LiveMarket />
      <EcosystemSection />
      <SwapWidget />
      <SecuritySection />
      <AgentsSection />
      <Footer />
    </div>
  );
}