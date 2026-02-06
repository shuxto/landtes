import { useState, useEffect } from 'react';
import { 
  Zap, Globe, Phone, Mail, ChevronDown, 
  Layers, Monitor, Smartphone, Cpu, Server, 
  Calendar, Calculator, TrendingUp, Shield, 
  CreditCard, Bitcoin, ArrowRight, X, Menu,
  MessageCircle
} from 'lucide-react';

// --- Types & Interfaces ---

interface MarketData {
  symbol: string;
  name: string;
  bid: number;
  ask: number;
  spread: string;
}

interface ContractSpec {
  instrument: string;
  minSpreadStd: string;
  minSpreadRaw: string;
  leverage: string;
  swapLong: string;
  swapShort: string;
  hours: string;
}

// --- Mock Data ---

const INITIAL_MARKET_DATA: MarketData[] = [
  { symbol: "EUR/USD", name: "Euro vs US Dollar", bid: 1.09245, ask: 1.09246, spread: "0.1" },
  { symbol: "GBP/USD", name: "Great Britain Pound", bid: 1.26302, ask: 1.26308, spread: "0.6" },
  { symbol: "XAU/USD", name: "Gold Spot", bid: 2034.50, ask: 2034.65, spread: "15" },
  { symbol: "BTC/USD", name: "Bitcoin CFD", bid: 48230.00, ask: 48235.50, spread: "Fixed" },
  { symbol: "US500", name: "S&P 500 Index", bid: 4780.25, ask: 4780.75, spread: "0.5" },
];

const FOREX_SPECS: ContractSpec[] = [
  { instrument: "EURUSD", minSpreadStd: "0.6", minSpreadRaw: "0.0", leverage: "1:500", swapLong: "-5.4", swapShort: "+2.1", hours: "24/5" },
  { instrument: "GBPUSD", minSpreadStd: "0.8", minSpreadRaw: "0.1", leverage: "1:500", swapLong: "-3.2", swapShort: "+1.5", hours: "24/5" },
  { instrument: "USDJPY", minSpreadStd: "0.7", minSpreadRaw: "0.0", leverage: "1:500", swapLong: "+4.5", swapShort: "-8.2", hours: "24/5" },
  { instrument: "AUDUSD", minSpreadStd: "1.0", minSpreadRaw: "0.2", leverage: "1:400", swapLong: "-2.1", swapShort: "+0.5", hours: "24/5" },
];

const CRYPTO_SPECS: ContractSpec[] = [
  { instrument: "BTCUSD", minSpreadStd: "15.0", minSpreadRaw: "5.0", leverage: "1:100", swapLong: "-10.0", swapShort: "-5.0", hours: "24/7" },
  { instrument: "ETHUSD", minSpreadStd: "2.0", minSpreadRaw: "0.5", leverage: "1:100", swapLong: "-8.0", swapShort: "-4.0", hours: "24/7" },
  { instrument: "SOLUSD", minSpreadStd: "0.1", minSpreadRaw: "0.05", leverage: "1:50", swapLong: "-2.0", swapShort: "-1.0", hours: "24/7" },
];

// --- Components ---

const TopBar = () => (
  <div className="bg-[#0B1120] border-b border-gray-800 text-xs py-2 hidden lg:block">
    <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-gray-400">
      <div className="flex space-x-6">
        <span className="flex items-center hover:text-white cursor-pointer"><Globe className="w-3 h-3 mr-1" /> Global (EN)</span>
        <span className="flex items-center hover:text-white cursor-pointer"><Phone className="w-3 h-3 mr-1" /> +44 20 1234 5678</span>
        <span className="flex items-center hover:text-white cursor-pointer"><Mail className="w-3 h-3 mr-1" /> institutional@apextrade.com</span>
      </div>
      <div className="flex space-x-6">
        <a href="#" className="hover:text-white transition-colors">News & Analysis</a>
        <a href="#" className="hover:text-white transition-colors">Help Center</a>
        <a href="#" className="hover:text-white transition-colors">Legal Documents</a>
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#020617]/95 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center shadow-lg shadow-blue-900/20">
              <Layers className="text-white w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white leading-none">TRADE<span className="text-blue-500">Pro</span></h1>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Institutional</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            <div className="group relative px-4 py-2 cursor-pointer hover:bg-gray-800/50 rounded-md">
              <span className="text-sm font-medium text-gray-300 group-hover:text-white flex items-center gap-1">
                Markets <ChevronDown className="w-3 h-3" />
              </span>
              {/* Mega Menu */}
              <div className="absolute top-full left-0 w-64 bg-[#0F172A] border border-gray-800 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-1 p-4 z-50">
                <a href="#" className="block py-2 hover:text-blue-400 text-sm text-gray-400 hover:pl-2 transition-all">Forex (Major/Minor)</a>
                <a href="#" className="block py-2 hover:text-blue-400 text-sm text-gray-400 hover:pl-2 transition-all">Cryptocurrency CFDs</a>
                <a href="#" className="block py-2 hover:text-blue-400 text-sm text-gray-400 hover:pl-2 transition-all">Indices & Futures</a>
                <a href="#" className="block py-2 hover:text-blue-400 text-sm text-gray-400 hover:pl-2 transition-all">Commodities</a>
                <a href="#" className="block py-2 hover:text-blue-400 text-sm text-gray-400 hover:pl-2 transition-all">Global Stocks</a>
              </div>
            </div>
            {['Platforms', 'Accounts', 'Tools', 'Academy'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors">
                {item}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a href="#" className="text-sm font-semibold text-gray-300 hover:text-white">Log In</a>
            <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-md text-sm font-semibold transition-all shadow-lg shadow-blue-900/30 border border-blue-500/50 hover:-translate-y-0.5">
              Open Account
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-gray-300" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-[#0F172A] border-b border-gray-800 p-4 space-y-4">
          <a href="#" className="block text-gray-300 hover:text-white font-medium">Markets</a>
          <a href="#" className="block text-gray-300 hover:text-white font-medium">Platforms</a>
          <a href="#" className="block text-gray-300 hover:text-white font-medium">Accounts</a>
          <div className="border-t border-gray-800 pt-4 flex flex-col gap-3">
            <button className="w-full py-3 bg-gray-800 rounded text-white font-medium">Log In</button>
            <button className="w-full py-3 bg-blue-600 rounded text-white font-medium">Open Account</button>
          </div>
        </div>
      )}
    </nav>
  );
};

const MarketWidget = () => {
  const [data, setData] = useState(INITIAL_MARKET_DATA);

  // Simulate WebSocket updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => prevData.map(item => {
        const change = (Math.random() - 0.5) * 0.0005;
        // Only update some items to look realistic
        if (Math.random() > 0.7) {
          return {
            ...item,
            bid: item.bid + change,
            ask: item.ask + change
          };
        }
        return item;
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-[#0F172A] border border-gray-700 rounded-xl overflow-hidden shadow-2xl">
      <div className="bg-[#1E293B] px-4 py-3 border-b border-gray-700 flex justify-between items-center">
        <span className="text-sm font-semibold text-gray-200">Market Watch</span>
        <div className="flex gap-2 items-center">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs text-green-500 font-mono">Live Feed</span>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-4 px-4 py-2 bg-[#020617] text-xs text-gray-500 font-semibold uppercase">
          <div className="col-span-1">Symbol</div>
          <div className="text-right">Bid</div>
          <div className="text-right">Ask</div>
          <div className="text-right">Spread</div>
        </div>
        {data.map((item, idx) => (
          <div key={item.symbol} className="grid grid-cols-4 px-4 py-3 border-b border-gray-800 items-center hover:bg-gray-800/30 transition-colors cursor-pointer group">
            <div className="col-span-1">
              <div className="font-bold text-white text-sm group-hover:text-blue-400 transition-colors">{item.symbol}</div>
              <div className="text-[10px] text-gray-500 truncate">{item.name}</div>
            </div>
            <div className={`text-right font-mono text-sm ${idx % 2 === 0 ? 'text-blue-400' : 'text-red-400'}`}>
              {item.bid.toFixed(item.spread === 'Fixed' ? 2 : 5)}
            </div>
            <div className={`text-right font-mono text-sm ${idx % 2 === 0 ? 'text-blue-400' : 'text-red-400'}`}>
              {item.ask.toFixed(item.spread === 'Fixed' ? 2 : 5)}
            </div>
            <div className="text-right font-mono text-gray-300 text-xs">{item.spread}</div>
          </div>
        ))}
        <div className="p-4 bg-gray-900/50">
          <a href="#" className="text-center text-xs text-blue-500 hover:text-blue-400 font-semibold uppercase tracking-wide flex items-center justify-center">
            View Full Market Depth <ArrowRight className="w-3 h-3 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

const MarketSpecs = () => {
  const [activeTab, setActiveTab] = useState<'Forex' | 'Crypto' | 'Indices'>('Forex');
  const specs = activeTab === 'Forex' ? FOREX_SPECS : activeTab === 'Crypto' ? CRYPTO_SPECS : FOREX_SPECS;

  return (
    <section className="py-20 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Comprehensive Market Coverage</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            One account gives you access to the world's most liquid markets. Competitive pricing, transparent execution, and no hidden fees.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center border-b border-gray-800 mb-8 overflow-x-auto gap-2">
          {['Forex', 'Crypto', 'Indices', 'Commodities', 'Shares'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-6 py-4 text-sm font-semibold transition-all border-b-2 ${
                activeTab === tab 
                  ? 'border-blue-500 text-blue-500 bg-blue-500/5' 
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg border border-gray-800 bg-[#0F172A]">
          <table className="w-full text-left min-w-[800px]">
            <thead className="bg-gray-900/50 text-xs text-gray-500 uppercase font-semibold">
              <tr>
                <th className="px-6 py-4">Instrument</th>
                <th className="px-6 py-4">Min. Spread (Standard)</th>
                <th className="px-6 py-4">Min. Spread (Raw)</th>
                <th className="px-6 py-4">Leverage</th>
                <th className="px-6 py-4">Swap Long</th>
                <th className="px-6 py-4">Swap Short</th>
                <th className="px-6 py-4">Hours</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 text-sm">
              {specs.map((spec, i) => (
                <tr key={i} className="hover:bg-gray-800/30 transition-colors">
                  <td className="px-6 py-4 font-semibold text-white flex items-center gap-2">
                    {spec.instrument}
                  </td>
                  <td className="px-6 py-4 text-gray-300">{spec.minSpreadStd}</td>
                  <td className="px-6 py-4 text-blue-400 font-bold">{spec.minSpreadRaw}</td>
                  <td className="px-6 py-4 text-gray-300">{spec.leverage}</td>
                  <td className="px-6 py-4 text-red-400">{spec.swapLong}</td>
                  <td className="px-6 py-4 text-green-400">{spec.swapShort}</td>
                  <td className="px-6 py-4 text-gray-400">{spec.hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const Platforms = () => (
  <section id="platforms" className="py-24 relative bg-[#020617]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition-all cursor-pointer group">
              <Monitor className="text-blue-500 w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-white mb-2">Desktop Trader</h3>
              <p className="text-sm text-gray-400">Advanced charting package, EA support, and multi-screen capability.</p>
            </div>
            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition-all cursor-pointer group">
              <Smartphone className="text-blue-500 w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-white mb-2">Mobile App</h3>
              <p className="text-sm text-gray-400">Trade on the go. Full order management and price alerts.</p>
            </div>
            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition-all cursor-pointer group">
              <Globe className="text-blue-500 w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-white mb-2">Web Trader</h3>
              <p className="text-sm text-gray-400">No download required. Access markets from any browser.</p>
            </div>
            <div className="bg-[#0F172A] p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition-all cursor-pointer group">
              <Cpu className="text-blue-500 w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-white mb-2">FIX API</h3>
              <p className="text-sm text-gray-400">Direct market access for HFT and algorithmic trading.</p>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl font-bold text-white mb-6">Trading Platforms for Every Style</h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Whether you are a scalper, day trader, or long-term investor, our technology adapts to you. We support the world's most popular platforms including MetaTrader 4, MetaTrader 5, and our proprietary Apex WebTrader.
          </p>
          <ul className="space-y-4 mb-8">
            {['50+ Technical Indicators built-in', 'One-click trading from charts', 'Automated trading support (Expert Advisors)', 'Customizable interface and layouts'].map((item, i) => (
              <li key={i} className="flex items-center text-gray-400">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3"></div>
                {item}
              </li>
            ))}
          </ul>
          <a href="#" className="inline-flex items-center text-blue-500 font-bold hover:text-white transition-colors group">
            Compare Platforms <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Accounts = () => (
  <section id="accounts" className="py-24 bg-[#0B1120]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">Transparent Account Pricing</h2>
        <p className="text-gray-400">Choose the account structure that fits your trading volume and strategy.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Standard */}
        <div className="bg-[#0F172A] rounded-2xl p-8 border border-gray-800 hover:border-gray-600 transition-all flex flex-col">
          <h3 className="text-2xl font-bold text-white mb-2">Standard</h3>
          <p className="text-sm text-gray-400 mb-6">Perfect for new traders.</p>
          <div className="text-3xl font-bold text-white mb-1">$0</div>
          <div className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-8">Commission</div>
          <ul className="space-y-4 text-sm text-gray-300 mb-8 flex-1">
            <li className="flex justify-between border-b border-gray-800 pb-2"><span>Spreads From</span> <span className="text-white font-bold">1.0 pips</span></li>
            <li className="flex justify-between border-b border-gray-800 pb-2"><span>Platform</span> <span className="text-white">MT4 / MT5</span></li>
            <li className="flex justify-between border-b border-gray-800 pb-2"><span>Min. Deposit</span> <span className="text-white">$100</span></li>
          </ul>
          <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-bold transition-colors">Open Standard</button>
        </div>

        {/* Raw Spread */}
        <div className="bg-[#0F172A] rounded-2xl p-8 border-2 border-blue-600 relative transform md:-translate-y-4 shadow-2xl shadow-blue-900/20 flex flex-col">
          <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">MOST POPULAR</div>
          <h3 className="text-2xl font-bold text-white mb-2">Raw Spread</h3>
          <p className="text-sm text-gray-400 mb-6">For EA's and Scalpers.</p>
          <div className="text-3xl font-bold text-white mb-1">$3.50</div>
          <div className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-8">Commission per lot</div>
          <ul className="space-y-4 text-sm text-gray-300 mb-8 flex-1">
            <li className="flex justify-between border-b border-gray-800 pb-2"><span>Spreads From</span> <span className="text-green-400 font-bold">0.0 pips</span></li>
            <li className="flex justify-between border-b border-gray-800 pb-2"><span>Platform</span> <span className="text-white">MT4 / MT5 / cTrader</span></li>
            <li className="flex justify-between border-b border-gray-800 pb-2"><span>Min. Deposit</span> <span className="text-white">$500</span></li>
          </ul>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition-colors shadow-lg">Open Raw Spread</button>
        </div>

        {/* VIP */}
        <div className="bg-[#0F172A] rounded-2xl p-8 border border-gray-800 hover:border-gray-600 transition-all flex flex-col">
          <h3 className="text-2xl font-bold text-white mb-2">VIP</h3>
          <p className="text-sm text-gray-400 mb-6">High volume institutional.</p>
          <div className="text-3xl font-bold text-white mb-1">Custom</div>
          <div className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-8">Commission</div>
          <ul className="space-y-4 text-sm text-gray-300 mb-8 flex-1">
            <li className="flex justify-between border-b border-gray-800 pb-2"><span>Spreads From</span> <span className="text-white font-bold">0.0 pips</span></li>
            <li className="flex justify-between border-b border-gray-800 pb-2"><span>Platform</span> <span className="text-white">FIX API</span></li>
            <li className="flex justify-between border-b border-gray-800 pb-2"><span>Min. Deposit</span> <span className="text-white">$50,000</span></li>
          </ul>
          <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-bold transition-colors">Contact Sales</button>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#020617] pt-20 pb-10 border-t border-gray-800 text-sm">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
        <div className="col-span-2 lg:col-span-2">
          <h4 className="text-white font-bold text-lg mb-6">Apex<span className="text-blue-500">Pro</span></h4>
          <p className="text-gray-500 mb-6 max-w-sm">
            ApexPro is a multi-asset brokerage offering superior trading conditions. We are dedicated to providing low costs, superior execution, and best-in-class support.
          </p>
        </div>
        {[
          { title: "Markets", links: ["Forex Trading", "Commodities", "Indices", "Cryptocurrency", "Shares CFDs"] },
          { title: "Trading", links: ["Account Types", "Platforms", "Funding", "Execution Policy", "Margin Req"] },
          { title: "Tools", links: ["Economic Calendar", "Market News", "Video Tutorials", "Glossary", "Webinars"] },
          { title: "Company", links: ["About Us", "Careers", "Contact Us", "Regulation", "Partnership / IB"] }
        ].map((col) => (
          <div key={col.title}>
            <h5 className="text-white font-bold mb-4">{col.title}</h5>
            <ul className="space-y-3 text-gray-500">
              {col.links.map(link => (
                <li key={link}><a href="#" className="hover:text-blue-500 transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-800 pt-10">
        <p className="text-[10px] text-gray-600 mb-6 leading-relaxed text-justify">
          <strong>RISK WARNING:</strong> Trading Foreign Exchange (Forex) and Contracts for Differences (CFDs) is highly speculative, carries a high level of risk and may not be suitable for all investors. You may lose some or all of your invested capital. 76% of retail investor accounts lose money when trading CFDs with this provider.
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2026 ApexTrade Pro Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {['Privacy Policy', 'Terms & Conditions', 'Cookie Policy', 'AML Policy'].map(item => (
              <a key={item} href="#" className="hover:text-white underline">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main App Component ---

const App = () => {
  return (
    <div className="bg-[#020617] min-h-screen font-sans text-gray-200">
      <TopBar />
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-20" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-800 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
                <Zap className="w-3 h-3" /> Ultra-Low Latency Execution
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Access <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Global Liquidity</span>.
                <br />Trade with Precision.
              </h1>
              <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
                Trade 12,000+ instruments across Forex, Crypto, Stocks, and Commodities. Experience raw spreads from 0.0 pips, institutional-grade execution speeds, and deep liquidity pools.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3.5 rounded-lg font-bold text-base transition-colors flex items-center justify-center gap-2">
                  Start Trading Now
                </button>
                <button className="bg-transparent border border-gray-700 hover:border-gray-500 text-white px-8 py-3.5 rounded-lg font-bold text-base transition-colors flex items-center justify-center gap-2">
                  Try Free Demo
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 border-t border-gray-800 pt-8">
                {[
                  { val: '0.0', label: 'Spreads from (Pips)' },
                  { val: '<30ms', label: 'Execution Speed' },
                  { val: '1:500', label: 'Max Leverage' },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold text-white mb-1">{stat.val}</div>
                    <div className="text-xs text-gray-500 uppercase font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content: Market Widget */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-2xl opacity-20"></div>
              <MarketWidget />
            </div>
          </div>
        </div>
      </header>

      <MarketSpecs />
      <Platforms />
      <Accounts />

      {/* Tools Section */}
      <section id="tools" className="py-24 relative overflow-hidden bg-[#020617]">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Tools of the Trade</h2>
            <p className="text-gray-400">Gain an edge with our integrated suite of analysis tools.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Calendar, title: "Economic Calendar", desc: "Track market-moving events in real-time.", color: "text-blue-400" },
              { icon: TrendingUp, title: "Autochartist", desc: "Automated technical analysis scanning.", color: "text-purple-400" },
              { icon: Server, title: "Free VPS", desc: "Run your EAs 24/7 with low latency.", color: "text-green-400" },
              { icon: Calculator, title: "Calculators", desc: "Calculate margins and swaps instantly.", color: "text-orange-400" },
            ].map((tool, i) => (
              <div key={i} className="bg-[#1E293B]/50 p-6 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors group cursor-pointer">
                <tool.icon className={`w-8 h-8 mb-4 ${tool.color}`} />
                <h4 className="font-bold text-white mb-2">{tool.title}</h4>
                <p className="text-xs text-gray-400 mb-4">{tool.desc}</p>
                <div className="text-xs text-blue-500 font-bold uppercase flex items-center group-hover:gap-2 transition-all">
                  Launch <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-[#0B1120] border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">Secure & Instant Funding Methods</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Using text representations or generic icons for reliability */}
            <div className="flex items-center gap-2"><CreditCard className="w-8 h-8" /><span className="text-xl font-bold">VISA</span></div>
            <div className="flex items-center gap-2"><CreditCard className="w-8 h-8" /><span className="text-xl font-bold">Mastercard</span></div>
            <div className="flex items-center gap-2"><Shield className="w-8 h-8" /><span className="text-xl font-bold">Wire Transfer</span></div>
            <div className="flex items-center gap-2"><Bitcoin className="w-8 h-8" /><span className="text-xl font-bold">Crypto</span></div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Floating Chat Button */}
      <button className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 rounded-full shadow-lg shadow-blue-900/50 flex items-center justify-center transition-transform hover:scale-110">
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default App;