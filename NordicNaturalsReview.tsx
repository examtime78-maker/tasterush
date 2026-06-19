import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Heart, Sparkles, Award } from 'lucide-react';

export default function NordicNaturalsReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2026/02/Nordic-Naturals-Ultimate-Omega-2X-Lemon-Flavor1.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/02/Nordic-Naturals-Ultimate-Omega-2X-Lemon-Flavor1.jpg', // fallback duplicate for thumbnail sync
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Total Omega-3s', value: '2,150 mg per serving' },
    { label: 'EPA Concentration', value: '1,125 mg' },
    { label: 'DHA Concentration', value: '875 mg' },
    { label: 'Flavor Extract', value: 'Natural Lemon Flavor' },
    { label: 'Omega Form', value: 'Superior Triglyceride Form' },
    { label: 'Source Integrity', value: 'Wild-Caught / Sustainable' },
    { label: 'Certified By', value: 'Friend of the Sea / Non-GMO Project Verified' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-slate-50 min-h-screen text-slate-950 font-sans pb-32"
    >
      <div className="bg-blue-900 border-b border-blue-800 text-white text-center py-3 text-xs font-bold px-4 tracking-wide shadow-sm">
        ACTIVE OMEGA DISCOUNT: Premium Triglyceride Absorption Form. 100% Secure Direct Amazon Deals.
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
                  className="max-h-full max-w-full object-contain rounded-2xl duration-305 transition-all hover:scale-105" 
                  alt="Nordic Naturals Ultimate Omega 2X Lemon Softgels" 
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
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Omega Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" /> High-Intensity Ultimate 2X
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight">
                Nordic Naturals <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700 text-2xl md:text-3xl font-black block mt-1">Ultimate Omega 2X Lemon</span>
              </h1>
              <p className="text-blue-755 font-semibold text-md">High-Concentration EPA & DHA Support (Triglyceride Form)</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-400">
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">5.0 (Purity Certified Professional Grade)</span>
              </div>

              <div className="py-2 border-y border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-slate-400 text-lg line-through font-medium">$141.95</span>
                  <span className="text-3xl font-black text-green-600">$120.66</span>
                  <span className="text-xs bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded-md ml-2">SAVE 15%</span>
                </div>
                <span className="text-slate-400 text-xs font-medium block mt-1">Free Expedited Shipping Included</span>
              </div>

              <p className="text-slate-650 leading-relaxed text-md">
                Fuel cardiovascular efficiency, cognitive health, immune vigor, and joint flexibility with Nordic Naturals Ultimate Omega 2X. Delivering an ultra-potent 2,150mg of pure omega-3 fatty acids per serving, this naturally lemon-flavored extract eliminates unwanted fishy aftertastes entirely. Prepared in native triglyceride forms for industry-leading cellular absorption.
              </p>

              <div className="pt-4">
                <a 
                  href="https://amzn.to/3PLaxSx" 
                  target="_blank" 
                  rel="nofollow sponsored noopener" 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-750 text-white font-bold text-center px-10 py-4.5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-lg"
                >
                  <ShoppingCart className="w-5 h-5" /> Buy on Amazon Now
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Detailed Spec Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          <div className="bg-slate-900 text-white rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3">
              <Sparkles className="text-blue-400" /> Key Cellular Advantages
            </h2>
            <ul className="space-y-5">
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-blue-400 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">2,150 mg of Total Omega-3s</h4>
                  <p className="text-slate-400 text-sm">Provides high-intensity heart, mind, and structural support directly using concentrated wild fish oils.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-blue-400 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">1,125mg EPA + 875mg DHA Combo</h4>
                  <p className="text-slate-400 text-sm">Perfectly balanced, high-yield portions to reinforce cognitive speed, blood lipids stability, and joint flexibility.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-blue-400 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">Natural Lemon Essential Oils</h4>
                  <p className="text-slate-400 text-sm">Light, clean lemon infusion ensures optimized digestive wellness and eliminates unpleasing afterburns.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                <ShieldCheck className="text-slate-700" /> Verified Batch Purity Metrics
              </h2>
              <div className="grid grid-cols-1 gap-y-3 font-semibold text-xs text-slate-650">
                {specs.map((item, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-slate-50 last:border-0">
                    <span className="text-slate-400">{item.label}</span>
                    <span className="text-slate-900 font-bold">{item.value}</span>
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
