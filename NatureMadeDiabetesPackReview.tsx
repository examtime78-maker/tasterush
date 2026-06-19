import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Heart, Sparkles, Award, ClipboardList, Info } from 'lucide-react';

export default function NatureMadeDiabetesPackReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2025/10/nature-made-Diabetes-Health-Pack-Packets-1.webp',
    'https://gymusastore.com/wp-content/uploads/2025/10/nature-made-Diabetes-Health-Pack-Packets-2.webp',
    'https://gymusastore.com/wp-content/uploads/2025/10/nature-made-Diabetes-Health-Pack-Packets-3.webp',
    'https://gymusastore.com/wp-content/uploads/2025/10/nature-made-Diabetes-Health-Pack-Packets-4-100x100.webp'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Container Supply Size', value: '60 Convenient Daily Packets' },
    { label: 'Formulation Design', value: 'Vitamins, Clean Minerals & Omega-3 Support' },
    { label: 'Suggested Usage', value: '2 packets daily' },
    { label: 'Gluten Suitability', value: '105% Gluten-Free Formula' },
    { label: 'Artificial Complex', value: 'No Synthetic Dyes & No Artificial Flavors' },
    { label: 'Target Audience Profile', value: 'Adults managing diabetes or prediabetes' },
    { label: 'Verification Sourcing', value: 'Scientifically Formulated Daily Nutrition' }
  ];

  const itemsInside = [
    {
      title: '💊 Multivitamin Core Blend',
      desc: 'Includes essential Vitamins A, C, D, E, and B-complex vitamins for reliable, complete daily nutritional baseline support.'
    },
    {
      title: '🐟 Premium Fish Oil + Vitamin D3',
      desc: 'Delivers healthy cardiovascular omega-3 fatty acids alongside Vitamin D to support overall wellness parameters.'
    },
    {
      title: '⚡ Essential Elemental Magnesium',
      desc: 'Assists high-yield muscle contraction patterns, cellular ATP processes, and healthy nervous system functions.'
    },
    {
      title: '🍊 High-Strength Vitamin C',
      desc: 'Provides reliable, high-bioavailability antioxidant activity designed specifically to help support immune system health.'
    },
    {
      title: '🧬 Alpha Lipoic Acid Co-Factor',
      desc: 'A premium, bioactive antioxidant support system designed to sustain overall physiological wellness indicators.'
    },
    {
      title: '🔄 Trace Mineral Chromium',
      desc: 'Directly supports correct carbohydrate metabolism routines and efficient glycemic glucose utilization.'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-amber-50/20 min-h-screen text-slate-900 font-sans pb-32"
    >
      {/* Nature Made Trustworthy Top Alert Banner */}
      <div className="bg-emerald-950 border-b border-emerald-900 text-emerald-100 text-center py-3 text-xs font-bold px-4 tracking-wider shadow-sm uppercase">
        🌿 ESSENTIAL NUTRITION SUPPORT: Complete 60 Packet All-In-One Diabetes Health Pack. Secured Link for Amazon Best Price.
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-12">
        <Link to="/" className="inline-flex items-center text-slate-500 hover:text-emerald-950 transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Review Hub
        </Link>

        {/* Product Showcase Container */}
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-slate-100 mb-12">
          <div className="grid md:grid-cols-2 gap-12 p-8 md:p-12 items-start">
            
            {/* Gallery Section */}
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-3xl p-6 flex items-center justify-center border border-slate-100 aspect-square overflow-hidden relative">
                <img 
                  src={activeImg} 
                  className="max-h-full max-w-full object-contain rounded-2xl duration-305 transition-all hover:scale-105" 
                  alt="Nature Made Diabetes Health Pack Packets" 
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-emerald-650 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider shadow-xs">
                  DAILY PACETS
                </span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-slate-50 p-1 transition-all ${activeImg === img ? 'border-emerald-600 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Diabetes Pack Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-emerald-100">
                  <Award className="w-3.5 h-3.5 text-emerald-600" /> Daily Wellness Packets
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight">
                Nature Made <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-amber-700 text-2xl md:text-3xl font-black block mt-1 font-sans">Diabetes Health Pack</span>
              </h1>
              <p className="text-slate-600 font-semibold text-md">Trustworthy Daily All-In-One Supplementation Solutions</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">5.0 (1 Certified Dietary Review)</span>
              </div>

              <div className="py-2 border-y border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-slate-400 text-lg line-through font-medium">$23.39</span>
                  <span className="text-3xl font-black text-rose-600">$20.98</span>
                  <span className="text-xs bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded-md ml-2 font-semibold">10% OFF</span>
                </div>
                <span className="text-slate-400 text-xs font-medium block mt-1">Fast Prime Shipping & Guaranteed Fresh Delivery via Amazon</span>
              </div>

              <p className="text-slate-655 leading-relaxed text-md font-sans">
                Support your daily wellness routine with the <strong>Nature Made Diabetes Health Pack Packets</strong>, an all-in-one nutritional supplement system specially designed for adults managing diabetes or prediabetes. Each convenient packet combines essential vitamins, minerals, antioxidants, and omega-3 nutrients to help support overall health, daily vitality, active carbon metabolic rates, and precise nutritional balance.
              </p>

              <div className="pt-4 animate-fade-in">
                <a 
                  href="https://amzn.to/3Rwq09M" 
                  target="_blank" 
                  rel="nofollow sponsored noopener" 
                  className="bg-gradient-to-r from-[#ff9900] to-[#ffb84d] hover:from-[#e68a00] hover:to-[#e6a540] text-slate-950 font-bold text-center px-10 py-4.5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-lg"
                >
                  <ShoppingCart className="w-5 h-5" /> Buy on Amazon Now
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* What's Inside & Complex Specifications */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-slate-900 text-white rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3 text-white">
              <ClipboardList className="text-emerald-400" /> What’s Inside Each Packet
            </h2>
            <ul className="space-y-4">
              {itemsInside.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <div className="bg-slate-800 p-2 text-emerald-400 shrink-0 font-bold leading-none h-9 w-9 rounded-full flex items-center justify-center">✓</div>
                  <div>
                    <h4 className="font-bold text-white text-base">{item.title}</h4>
                    <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-850">
                <ShieldCheck className="text-slate-700" /> Daily Nutritional Analytics
              </h2>
              <div className="grid grid-cols-1 gap-y-3 font-semibold text-xs text-slate-650">
                {specs.map((item, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-slate-50 last:border-0 font-sans">
                    <span className="text-slate-400">{item.label}</span>
                    <span className="text-slate-900 font-bold text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal demographic matching */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2 text-slate-850">
                <Heart className="text-red-500 w-5 h-5 fill-red-400 animate-pulse" /> Who It's Engineered For
              </h2>
              <ul className="grid grid-cols-1 gap-y-2 text-slate-655 text-sm font-semibold">
                <li className="flex items-center gap-2">🔹 Adults currently managing diabetes or prediabetes</li>
                <li className="flex items-center gap-2">🔹 Consistent support for daily wellness routines</li>
                <li className="flex items-center gap-2">🔹 Active, busy lifestyles needing clean, convenient packets</li>
                <li className="flex items-center gap-2">🔹 Anyone seeking a complete and balanced daily mineral supply</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Preparation Guidelines and Strategy */}
        <div className="bg-emerald-950/10 border border-emerald-900/10 rounded-[2rem] p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-emerald-950 mb-6 flex items-center gap-2 justify-center">
            <Sparkles className="text-amber-600 w-6 h-6" /> Optimized Clean Wellness Routine
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center text-sm font-sans">
            <div className="space-y-2">
              <div className="bg-emerald-900 text-white font-extrabold w-10 h-10 rounded-full flex items-center justify-center mx-auto text-lg shadow-sm">1</div>
              <h4 className="font-bold text-emerald-950 text-base">Meal integration</h4>
              <p className="text-slate-650 leading-relaxed">Take exactly one convenient packet daily with plenty of clean water and a robust, healthy meal.</p>
            </div>
            <div className="space-y-2">
              <div className="bg-emerald-900 text-white font-extrabold w-10 h-10 rounded-full flex items-center justify-center mx-auto text-lg shadow-sm">2</div>
              <h4 className="font-bold text-emerald-950 text-base">Two-packet program</h4>
              <p className="text-slate-655 leading-relaxed">Consume up to two packets daily for full-potency vitamin saturation according to your metabolic requirements.</p>
            </div>
            <div className="space-y-2">
              <div className="bg-emerald-900 text-white font-extrabold w-10 h-10 rounded-full flex items-center justify-center mx-auto text-lg shadow-sm">3</div>
              <h4 className="font-bold text-emerald-950 text-base">Sustainable habits</h4>
              <p className="text-slate-655 leading-relaxed">Pair daily supplement packets with wholesome nutrition, dynamic compound exercise, and clean lifestyle habits.</p>
            </div>
          </div>
        </div>

        {/* Critical Information Box */}
        <div className="bg-slate-100 rounded-3xl p-6 border border-slate-200 shadow-xs max-w-4xl mx-auto mb-12">
          <h3 className="text-slate-800 font-bold mb-2 flex items-center gap-2 text-sm uppercase tracking-wide">
            <Info className="w-4 h-4 text-slate-600" /> Important Nutritional Disclaimer
          </h3>
          <p className="text-slate-655 text-xs font-sans leading-relaxed">
            This high-quality product is crafted carefully to support general, trace-level daily nutritional wellness indices. It is not designed or intended to diagnose, treat, prevent, or cure any serious disease states. Always consult with registered general healthcare practitioners prior to initializing new nutritional programs, especially if taking regular prescription drugs.
          </p>
        </div>

        {/* Core Review Deep Dive */}
        <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-lg text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Convenient Daily Wellness Support Simplify Your Routine
          </h2>
          <p className="text-slate-655 max-w-2xl mx-auto leading-relaxed text-md font-sans mb-8">
            Stop sorting through dozens of individual bottles. Nature Made aggregates six scientific supplements into one convenient packet so you can stay consistent with your physical wellness goals cleanly.
          </p>
          <a 
            href="https://amzn.to/3Rwq09M" 
            target="_blank" 
            rel="nofollow sponsored noopener" 
            className="inline-flex bg-gradient-to-r from-emerald-800 to-emerald-700 hover:from-emerald-900 hover:to-emerald-800 text-white font-bold text-center px-12 py-4 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all gap-2"
          >
            <ShoppingCart className="w-5 h-5 text-white" /> Get Daily Nature Made Diabetes Packs on Amazon
          </a>
        </div>

      </div>
    </motion.div>
  );
}
