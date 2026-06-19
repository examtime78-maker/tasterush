import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Heart, Sparkles, Flame, Award } from 'lucide-react';

export default function TransparentLabsReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2026/02/Transparent-Labs-Bulk-Pre-Workout-Powder1.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/02/Transparent-Labs-Bulk-Pre-Workout-Powder2.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/02/Transparent-Labs-Bulk-Pre-Workout-Powder3.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Servings', value: '30 Servings' },
    { label: 'Caffeine', value: '200mg Organic PurCaf®' },
    { label: 'Beta-Alanine', value: '4000mg' },
    { label: 'Citrulline Malate', value: '8000mg' },
    { label: 'Best Use', value: 'Pre Workout / Performance' },
    { label: 'Flavor', value: 'Blue Raspberry' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-slate-50 min-h-screen text-slate-950 font-sans pb-32"
    >
      <div className="bg-blue-900 border-b border-blue-800 text-white text-center py-3 text-xs font-bold px-4 tracking-wide shadow-sm">
        CLINICALLY DOSED FORMULA: 100% Label Transparency, Zero Artificial Fillers. Secure Amazon Link Verified.
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-12">
        <Link to="/" className="inline-flex items-center text-slate-500 hover:text-slate-950 transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Review Hub
        </Link>

        {/* Product Showcase Container */}
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-slate-100 mb-12">
          <div className="grid md:grid-cols-2 gap-12 p-8 md:p-12 items-start">
            
            {/* Gallery Section */}
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-3xl p-6 flex items-center justify-center border border-slate-100 aspect-square overflow-hidden">
                <img 
                  src={activeImg} 
                  className="max-h-full max-w-full object-contain rounded-2xl duration-300 transition-all hover:scale-105" 
                  alt="Transparent Labs Bulk Pre Workout Blue Raspberry" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex gap-4 justify-center">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`w-20 h-20 rounded-xl border-2 overflow-hidden bg-slate-50 p-1 transition-all ${activeImg === img ? 'border-blue-600 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Preworkout Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-blue-600" /> Premium Pre-Workout
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight">
                Transparent Labs Bulk <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 text-2xl md:text-3xl font-black block mt-1">Pre-Workout Powder</span>
              </h1>
              <p className="text-blue-600 font-semibold text-md">Blue Raspberry Clean Performance Formula</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-400">
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">5.0 (1 Verified Elite Review)</span>
              </div>

              <div className="py-2 border-y border-slate-100">
                <span className="text-3xl font-black text-slate-900">$54.99</span>
                <span className="text-slate-400 text-xs ml-2 font-medium">Free Shipping Available</span>
              </div>

              <p className="text-slate-650 leading-relaxed text-md">
                Fuel your high-intensity training with an exceptional clean pre-workout. Carefully engineered with clinically effective dosages to enhance Nitric Oxide pumps, cognitive focus, muscular endurance, and stable kinetic energy levels without synthetic crashes.
              </p>

              <div className="pt-4">
                <a 
                  href="https://amzn.to/4fI0iZL" 
                  target="_blank" 
                  rel="nofollow sponsored noopener" 
                  className="bg-[#ff9900] hover:bg-[#e68a00] text-slate-950 font-bold text-center px-10 py-4.5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-lg"
                >
                  <ShoppingCart className="w-5 h-5" /> Buy on Amazon
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Detailed Spec Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          <div className="bg-slate-900 text-white rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3">
              <Sparkles className="text-blue-400" /> Key Dosing Elements
            </h2>
            <ul className="space-y-5">
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-blue-400 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">8,000mg Citrulline Malate</h4>
                  <p className="text-slate-400 text-sm">Triggers huge Nitric Oxide pathways for larger vascular volume and blood transport.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-blue-400 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">4,000mg Beta-Alanine</h4>
                  <p className="text-slate-400 text-sm">Buffers lactic buildup to significantly extend continuous repetitions under high strain.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-blue-400 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">200mg Clean Organic Caffeine</h4>
                  <p className="text-slate-400 text-sm">PurCaf® green coffee yields focused cognitive drive without heart rate spikes or post-workout jitters.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                <ShieldCheck className="text-slate-700" /> Active Dosing Guidelines
              </h2>
              <p className="text-slate-650 leading-relaxed text-sm mb-4">
                Unlike competitive concentrates packed with artificial coloring and synthetic flavor stabilizers, Transparent Labs Bulk is naturally sweetened with stevia extract for premium refreshment.
              </p>
              <div className="grid grid-cols-2 gap-y-3 font-semibold text-xs border-t border-slate-100 pt-4 text-slate-650">
                {specs.map((item, index) => (
                  <div key={index} className="flex justify-between pr-4 py-1.5 border-b border-slate-50 last:border-0">
                    <span className="text-slate-400 capitalize">{item.label}</span>
                    <span>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
