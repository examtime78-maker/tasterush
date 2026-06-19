import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Zap, Timer, Shield, Info, MapPin } from 'lucide-react';

export default function BajajChetakReview() {
  const specs = [
    { label: 'Range', value: '113 KM' },
    { label: 'Top Speed', value: '60 KM/H' },
    { label: 'Motor Power', value: '2.2 kW' },
    { label: 'Battery Capacity', value: '2.5 kWh' },
    { label: 'Charging Time', value: '0-80% in 2h 25m' },
    { label: 'Protection', value: 'IP67 Battery' },
    { label: 'Front Brake', value: 'Disc' },
    { label: 'Rear Brake', value: 'Drum' },
    { label: 'Weight', value: '107 KG' },
    { label: 'Ground Clearance', value: '170 MM' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-[#f5f7fb] min-h-screen font-sans text-slate-900"
    >
      <header className="bg-slate-900 text-white pt-12 pb-24 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="inline-flex items-center text-slate-400 mb-8 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Reviews
          </Link>
          <div className="flex flex-wrap items-center gap-12">
            <div className="flex-1 min-w-[300px]">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Bajaj Chetak C2501 <br/><span className="text-orange-500">Electric Scooter</span>
              </h1>
              <p className="text-xl text-slate-400 mb-8 max-w-2xl">
                Experience smart urban mobility with premium metal body construction, strong electric performance, connected smart features, and efficient charging.
              </p>
              <div className="bg-white text-slate-900 p-8 rounded-2xl shadow-2xl inline-block">
                <h2 className="text-xl font-bold mb-2">Available on Amazon</h2>
                <p className="text-slate-500 mb-4 font-medium">Ocean Teal Matte Edition</p>
                <a 
                  href="https://amzn.to/4unhHeU" 
                  target="_blank" 
                  className="bg-orange-500 text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition-all flex items-center gap-2 justify-center"
                >
                  <ShoppingCart className="w-5 h-5" /> Buy Now
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img 
                src="https://m.media-amazon.com/images/I/41vqlP+KfJL._SL1000_.jpg" 
                className="w-full max-w-md rounded-3xl shadow-2xl rotate-3" 
                alt="Bajaj Chetak" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 -mt-16 pb-20">
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <FeatureCard icon={<MapPin className="text-orange-500"/>} title="113 KM Range" desc="Travel confidently with 113 km per full charge." />
          <FeatureCard icon={<Zap className="text-blue-500"/>} title="60 KM/H" desc="Balanced speed performance with smooth acceleration." />
          <FeatureCard icon={<Timer className="text-purple-500"/>} title="Fast Charge" desc="0 to 80% in just 2 hours 25 minutes." />
        </div>

        <h2 className="text-3xl font-bold text-center mb-12">Technical Specifications</h2>
        <div className="bg-white rounded-3xl p-8 shadow-xl mb-20">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
            {specs.map((spec, i) => (
              <div key={i} className="flex justify-between items-center py-4 border-b border-slate-100 last:border-0">
                <span className="font-bold text-slate-500">{spec.label}</span>
                <span className="font-bold">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 text-white p-12 rounded-[2rem] text-center mb-20">
          <h2 className="text-3xl font-bold mb-6">Why Choose Bajaj Chetak C2501?</h2>
          <p className="text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            The Bajaj Chetak C2501 is designed for riders who want a stylish electric scooter with practical daily usability. Fast charging, useful smart features, and dependable Bajaj engineering make it a compelling city choice.
          </p>
          <a 
            href="https://amzn.to/4unhHeU" 
            target="_blank" 
            className="bg-orange-500 text-white px-10 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-all inline-block"
          >
            Buy Bajaj Chetak Now
          </a>
        </div>

        <footer className="text-center text-slate-500 text-sm">
          Affiliate Disclosure: This page may contain affiliate links. We may earn a commission at no extra cost to you.
        </footer>
      </div>
    </motion.div>
  );
}

function FeatureCard({ icon, title, desc }: any) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-500">{desc}</p>
    </div>
  );
}
