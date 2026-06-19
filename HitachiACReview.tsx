import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Wind, Zap, Thermometer, ShieldCheck, Settings } from 'lucide-react';

export default function HitachiACReview() {
  const features = [
    '1.5 Ton capacity for rooms up to 150 sq ft',
    '5 Star energy-efficient inverter compressor',
    'Copper condenser for durability',
    '4-Way swing airflow distribution',
    'Cooling performance up to 54°C',
    'Ice Clean self-clean technology',
    'Anti-bacterial air filtration',
    'Low noise operation',
    '24 meter long air throw',
    'Smart View display',
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-[#f4f7fb] min-h-screen text-slate-900 font-sans pb-20"
    >
      <div className="max-w-6xl mx-auto px-4 pt-12">
        <Link to="/" className="inline-flex items-center text-blue-600 mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Reviews
        </Link>

        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden mb-12 lg:flex">
          <div className="lg:w-1/2 p-8 md:p-12 flex items-center justify-center bg-white">
            <img 
              src="https://m.media-amazon.com/images/I/51ryyW4zORL._SL1500_.jpg" 
              className="w-full max-w-md h-auto rounded-xl" 
              alt="Hitachi 1.5 Ton AC" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="lg:w-1/2 p-8 md:p-12 bg-slate-50">
            <span className="bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold mb-4 inline-block">
              Top Cooling Bestseller
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Hitachi 1.5 Ton 5 Star Inverter Split AC Review</h1>
            <div className="flex gap-1 text-orange-500 mb-6">
              <Star/><Star/><Star/><Star/><Star/>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 mb-8">
              <h3 className="text-xl font-bold mb-2">Efficient Cooling for Indian Summers</h3>
              <p className="text-slate-500">Built for medium-sized rooms with powerful airflow and energy savings.</p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 mb-10">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm font-medium">
                  <ShieldCheck className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> {f}
                </li>
              ))}
            </ul>
            <a 
              href="https://amzn.to/4tL6Rya" 
              target="_blank" 
              className="bg-orange-500 text-black px-10 py-4 rounded-xl font-bold hover:scale-105 transition-all inline-flex items-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" /> Check Price on Amazon
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <SpecCard icon={<Wind/>} title="Performance" desc="Fast cooling with load adjustment." />
          <SpecCard icon={<Zap/>} title="Efficiency" desc="5 Star rating reduces costs." />
          <SpecCard icon={<Settings/>} title="Ice Clean" desc="Self-clean tech for hygiene." />
          <SpecCard icon={<Thermometer/>} title="Extreme Cool" desc="Works up to 54°C ambient." />
        </div>

        <div className="bg-white p-10 md:p-16 rounded-[2rem] shadow-lg leading-relaxed prose prose-slate max-w-none">
          <h2 className="text-3xl font-bold mb-8">Detailed Review</h2>
          <p className="text-lg text-slate-600 mb-6">
            Indian summers are unforgiving. A normal air conditioner may cool the room, but efficient cooling, lower electricity bills, quieter operation, and long-term durability are what actually matter. 
            The inverter compressor intelligently adjusts cooling output instead of switching fully on and off repeatedly.
          </p>
          <p className="text-lg text-slate-600 mb-8">
            One standout feature is the ability to maintain cooling performance even at extreme temperatures up to 54°C. 
            The 4-way swing airflow system helps distribute cool air evenly instead of creating hot and cold zones.
          </p>
          <div className="bg-slate-900 text-white p-12 rounded-3xl text-center">
            <h3 className="text-2xl font-bold mb-4 underline decoration-orange-500 underline-offset-8">Verdict</h3>
            <p className="text-slate-300 max-w-3xl mx-auto mb-0">
              For hygiene-conscious users, the Ice Clean technology helps reduce internal dust buildup. The copper condenser improves heat transfer efficiency and offers better durability.
            </p>
          </div>
        </div>

        <footer className="mt-16 text-center text-slate-400 text-sm">
          Affiliate Disclosure: This page may contain affiliate links. We may earn a commission at no extra cost to you.
        </footer>
      </div>
    </motion.div>
  );
}

function Star() { return <span className="text-xl">★</span>; }

function SpecCard({ icon, title, desc }: any) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center">
      <div className="flex justify-center mb-4 text-orange-500">{icon}</div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-xs text-slate-500">{desc}</p>
    </div>
  );
}
