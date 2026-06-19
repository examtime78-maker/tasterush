import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Heart, Sparkles, Award, CupSoda, Zap, RefreshCw, Layers } from 'lucide-react';

export default function StanleyVitalizeShakerReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2026/01/STANLEY-Vitalize-Shaker-Bottle-20-oz1.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/01/STANLEY-Vitalize-Shaker-Bottle-20-oz2.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/01/STANLEY-Vitalize-Shaker-Bottle-20-oz3.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/01/STANLEY-Vitalize-Shaker-Bottle-20-oz4.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Fluid Capacity', value: '20 oz Perfect Volume' },
    { label: 'Chassis Material', value: '18/8 Recycled Stainless Steel' },
    { label: 'Thermal Insulation', value: 'Double-Wall Vacuum Insulation' },
    { label: 'Cold Retention', value: 'Up to 8 Hours Cold / 30 Hours Iced' },
    { label: 'Bottom Storage', value: '3 oz Dry Supplement Compartment' },
    { label: 'Health Safety', value: '100% BPA-Free Construction' },
    { label: 'Cleansing Guideline', value: 'Fully Dishwasher Safe System' }
  ];

  const features = [
    {
      title: '🧋 20 oz Perfect Gym Capacity',
      desc: 'Sized ideally for everyday protein recovery, amino acid hydration, cold-brew coffee, and all-day water intake.'
    },
    {
      title: '❄️ Double-Wall Vacuum Insulation',
      desc: 'Keeps liquids deeply chilled for up to 8 continuous hours and iced for an astonishing 30 hours.'
    },
    {
      title: '💪 Recycled 18/8 Stainless Steel',
      desc: 'Engineered from heavy-grade recycled stainless steel for incredible durability, dent resistance, and premium hand-feel.'
    },
    {
      title: '🔒 Spill-Proof Tritan Lid System',
      desc: 'Tough, crystal-clear Tritan slider lid blocks drips and messy spills inside your gym bags or cars.'
    },
    {
      title: '🥤 Fast-Flow Ergonomic Spout',
      desc: 'Provides a smooth, unrestricted sipping path for rapid rehydration between exhausting lifting sets.'
    },
    {
      title: '⚡ Removable Strainer Grid Mixer',
      desc: 'Specially designed interior mixing element breaks up dense proteins and hydration powders without clumpy debris.'
    },
    {
      title: '📦 Built-In 3 oz Dry Storage Pot',
      desc: 'Convenient interlocking dry compartment on the bottom holds protein powder scoops, capsules, or simple snacks.'
    }
  ];

  const ratings = [
    'Keeps recovery shakes ice-cold for hours',
    'Sleek, highly portable design fits in car cupholders',
    'Zero leaks when tossed inside heavy gym duffel bags',
    'Removable strainer blends thick isolates easily',
    'Integrated powder storage provides top modularity',
    'Indestructible Stanley steel construction style'
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-stone-50 min-h-screen text-slate-900 font-sans pb-32"
    >
      {/* Stanley Premium Top Notification Banner */}
      <div className="bg-stone-900 border-b border-stone-880 text-stone-100 text-center py-3 text-xs font-bold px-4 tracking-wider shadow-sm uppercase">
        🥤 LEGENDARY TOUGHNESS: Stanley Vitalize Insulated 20 oz Shaker. Secured Route for Best Price on Amazon.
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-12">
        <Link to="/" className="inline-flex items-center text-stone-500 hover:text-stone-900 transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Review Hub
        </Link>

        {/* Product Showcase Container */}
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-stone-200/60 mb-12">
          <div className="grid md:grid-cols-2 gap-12 p-8 md:p-12 items-start">
            
            {/* Gallery Section */}
            <div className="space-y-6">
              <div className="bg-stone-100 rounded-3xl p-6 flex items-center justify-center border border-stone-200/50 aspect-square overflow-hidden relative">
                <img 
                  src={activeImg} 
                  className="max-h-full max-w-full object-contain rounded-2xl duration-305 transition-all hover:scale-105" 
                  alt="STANLEY Vitalize Shaker Bottle 20 oz" 
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-stone-900 text-[#ff9900] text-[11px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider shadow-xs">
                  DOUBLE-WALL INSULATED
                </span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-stone-50 p-1 transition-all ${activeImg === img ? 'border-stone-900 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Stanley Shaker Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-stone-100 text-stone-850 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-stone-200">
                  <Award className="w-3.5 h-3.5 text-stone-700" /> Premium Performance Shaker
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-stone-900 tracking-tight">
                STANLEY Vitalize <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-800 to-amber-600 text-2xl md:text-3xl font-black block mt-1 font-sans">Shaker Bottle 20 oz</span>
              </h1>
              <p className="text-stone-600 font-semibold text-md">legendary Toughness Meets Modular Gymnasium Hydration Excellence</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-100" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">4.67 (3 Certified Athlete Reviews)</span>
              </div>

              <div className="py-2 border-y border-stone-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-stone-900">$40.00</span>
                  <span className="text-slate-400 text-xs font-medium block mt-1 ml-2">Guaranteed Original Product Dispatch via Amazon Prime</span>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed text-md font-sans">
                Upgrade your daily wellness routine with the <strong>STANLEY Vitalize Shaker Bottle 20 oz</strong>, a professional insulated performance beverage flask engineered painstakingly for protein isolates, electrolytes, delicious smoothies, pre-workouts, and ice-cold water. Crafted with Stanley's legendary 18/8 stainless steel structure, specialized zero-leak Tritan lid system, and built-in suplement canister, it's the premium gym hydration choice.
              </p>

              <div className="pt-4 animate-fade-in">
                <a 
                  href="https://amzn.to/4uDhPam" 
                  target="_blank" 
                  rel="nofollow sponsored noopener" 
                  className="bg-gradient-to-r from-[#ff9900] to-[#ffb84d] hover:from-[#e68a00] hover:to-[#e6a540] text-stone-950 font-bold text-center px-10 py-5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-lg"
                >
                  <ShoppingCart className="w-5 h-5 text-stone-950" /> Buy Now on Amazon
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Brand Focus Banner */}
        <div className="bg-stone-900 text-stone-100 rounded-[2rem] p-8 md:p-12 shadow-xl mb-12">
          <h2 className="text-3xl font-extrabold text-center mb-6 tracking-tight text-white">
            Premium Insulated Fitness Shaker
          </h2>
          <div className="max-w-4xl mx-auto text-stone-300 text-center space-y-6 text-md leading-relaxed">
            <p>
              The Stanley Vitalize Shaker is carefully engineered for active lifestyles. Integrating superior vacuum wall systems, leak-proof lids, and seamless powder dissolution metrics.
            </p>
            <p className="text-xs text-[#ff9900] font-mono leading-relaxed">
              * Perfect for Gym, Work, Travel commutes, Cycling layouts, Cardio sessions & Out-of-door adventures.
            </p>
          </div>
        </div>

        {/* Detailed Spec Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-[#fcfbf9] text-stone-900 rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6 border border-stone-200">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-stone-200 pb-3 text-stone-900">
              <Sparkles className="text-amber-500" /> Key Mechanical Features
            </h2>
            <ul className="space-y-4">
              {features.map((feat, index) => (
                <li key={index} className="flex gap-3">
                  <div className="bg-stone-900 p-2 text-stone-100 shrink-0 font-bold leading-none h-9 w-9 rounded-full flex items-center justify-center">✓</div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-base">{feat.title}</h4>
                    <p className="text-stone-500 text-xs mt-0.5 leading-relaxed">{feat.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-850">
                <ShieldCheck className="text-stone-700" /> Technical Data Sheet
              </h2>
              <div className="grid grid-cols-1 gap-y-3 font-semibold text-xs text-slate-650">
                {specs.map((item, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-stone-50 last:border-0 font-sans">
                    <span className="text-stone-400">{item.label}</span>
                    <span className="text-[#ff9900] font-black text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why People Love It - Reviews List */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2 text-stone-850">
                <Heart className="text-rose-500 fill-rose-500 w-5 h-5" /> Why People Love It
              </h2>
              <div className="grid grid-cols-1 gap-y-2.5 text-slate-700 text-xs font-semibold">
                {ratings.map((rate, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-stone-50 p-2 rounded-xl border border-stone-200">
                    <span className="text-green-600 font-extrabold shrink-0">✔</span>
                    <span>{rate}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Structured Application Suggestions */}
        <div className="bg-stone-150 border border-stone-200 rounded-[2rem] p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2 justify-center">
            <CupSoda className="text-amber-600 w-6 h-6" /> Perfect For Everyday Use
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <div className="bg-white p-4 rounded-2xl shadow-xs border border-stone-200 font-bold text-xs text-stone-850">
              Protein Shakes & Recovery Drinks
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-xs border border-stone-200 font-bold text-xs text-stone-850">
              Pre-workouts & Hydration Blends
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-xs border border-stone-200 font-bold text-xs text-stone-850">
              Iced Cold Matchas & Smoothies
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-xs border border-stone-200 font-bold text-xs text-stone-850">
              Workplace Commutes & Travel
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-xs border border-stone-200 font-bold text-xs text-stone-850">
              Daily Cold Water Hydration
            </div>
          </div>
        </div>

        {/* Final CTA Board */}
        <div className="bg-stone-905 bg-stone-900 text-white rounded-[2rem] p-8 md:p-12 border border-stone-950 shadow-2xl text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#ff9900] mb-4 tracking-tight">
            Premium Hydration Meets Fitness Convenience
          </h2>
          <p className="text-stone-300 max-w-2xl mx-auto leading-relaxed text-md font-sans mb-8">
            The STANLEY Vitalize Shaker Bottle 20 oz beautifully aggregates heavy-duty double-wall steel thermal performance, zero-spill lids, custom modular mixers, and secure powder storage compartments. Hydrate with confidence everywhere.
          </p>
          <a 
            href="https://amzn.to/4uDhPam" 
            target="_blank" 
            rel="nofollow sponsored noopener" 
            className="inline-flex bg-gradient-to-r from-[#ff9900] to-[#ffa31a] hover:from-[#e68a00] hover:to-[#e6941a] text-slate-950 font-black text-center px-12 py-4 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all gap-2 text-md"
          >
            <ShoppingCart className="w-5 h-5 text-slate-950" /> Order Your Stanley Vitalize Shaker on Amazon
          </a>
        </div>

      </div>
    </motion.div>
  );
}
