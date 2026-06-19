import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Heart, Sparkles, Award, Zap, CheckCircle2 } from 'lucide-react';

export default function NutricostWheyIsolateReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2025/10/Nutricost-Whey-Protein-Isolate-Powder-5.webp',
    'https://gymusastore.com/wp-content/uploads/2025/10/Nutricost-Whey-Protein-Isolate-Powder-2.webp',
    'https://gymusastore.com/wp-content/uploads/2025/10/Nutricost-Whey-Protein-Isolate-Powder-3.webp'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Available Sizes', value: '2 lb & 5 lb Sizing Options' },
    { label: 'Protein Content', value: '30g Premium Protein Per Scoop' },
    { label: 'Serving Size', value: '1 Scoop' },
    { label: 'Protein Source', value: '100% Pure Whey Isolate Core' },
    { label: 'Digestion Profile', value: 'Low Lactose Fast-Absorbing Formula' },
    { label: 'Facility Standard', value: 'GMP Compliant & FDA Registered' },
    { label: 'Safety Verification', value: 'Independently Third-Party Tested' }
  ];

  const features = [
    {
      title: '💪 30g Protein Per Serving',
      desc: 'Supports muscle building, accelerated recovery, and complete lean muscle maintenance profile.'
    },
    {
      title: '🧬 High-Quality Whey Protein Isolate',
      desc: 'Ultra-pure protein source micro-filtered for rapid absorption and immediate physical support post-workout.'
    },
    {
      title: '🥛 Low Lactose Formula',
      desc: 'Meticulously crafted for easier digestion and stomach comfort, ideal for those sensitive to standard proteins.'
    },
    {
      title: '🍫 Delicious Flavor Options',
      desc: 'Available in highly soluble, tasty flavors that mix easily with milk or ice-cold water without chalky residue.'
    },
    {
      title: '🏭 GMP Compliant Manufacturing',
      desc: 'Produced carefully in a registered facility utilizing state-of-the-art sterile machinery and strict protocols.'
    },
    {
      title: '✅ Third-Party Tested Integrity',
      desc: 'Rigorous independent testing guarantees precise purity, clean potency, and premium product quality.'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-slate-50 min-h-screen text-slate-950 font-sans pb-32"
    >
      {/* Promo banner matching the Nutricost clean blue vibe */}
      <div className="bg-blue-950 border-b border-blue-900 text-blue-100 text-center py-3 text-xs font-bold px-4 tracking-wider shadow-sm uppercase">
        ⚡ PREMIUM ISOLATE DEAL: Nutricost 100% Whey Isolate (30g Protein). Fast Dispatch & Free Shipping on Amazon.
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
              <div className="bg-slate-50 rounded-3xl p-6 flex items-center justify-center border border-slate-100 aspect-square overflow-hidden relative">
                <img 
                  src={activeImg} 
                  className="max-h-full max-w-full object-contain rounded-2xl duration-305 transition-all hover:scale-105" 
                  alt="Nutricost Whey Isolate Protein Powder" 
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider shadow-xs">
                  30G PROTEIN
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-slate-50 p-1 transition-all ${activeImg === img ? 'border-blue-600 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Nutricost Isolate Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-blue-105">
                  <Award className="w-3.5 h-3.5 text-blue-600" /> Sports Nutrition & Recovery
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight">
                Nutricost <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800 text-2xl md:text-3xl font-black block mt-1 font-sans">Whey Protein Isolate Powder</span>
              </h1>
              <p className="text-slate-655 font-semibold text-md">Premium Pure Protein for Rapid Post-Workout Muscle Growth & Recovery</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">5.0 (2 Certified Athlete Reviews)</span>
              </div>

              <div className="py-2 border-y border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-rose-600">$72.95</span>
                  <span className="text-slate-400 text-xs font-medium block mt-1 ml-2">Fast, Safe & Free Ground Shipping via Amazon Prime</span>
                </div>
              </div>

              <p className="text-slate-655 leading-relaxed text-md font-sans">
                Support your professional fitness goals with <strong>Nutricost Whey Protein Isolate Powder</strong>, a premium-quality pure isolate supplement specifically designed for muscle accretion, accelerated recovery, and versatile daily nutrition. Each scoop delivers <strong>30 grams of pure, micro-filtered Whey Protein Isolate</strong>, guaranteeing quick absorption, clean digestion, and premium flavor profiles.
              </p>

              <div className="pt-4">
                <a 
                  href="https://amzn.to/49RRAo8" 
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

        {/* Detailed Spec Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          <div className="bg-slate-900 text-white rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3">
              <Sparkles className="text-blue-400" /> Key Feature Highlights
            </h2>
            <ul className="space-y-4">
              {features.map((feat, index) => (
                <li key={index} className="flex gap-3">
                  <div className="bg-slate-800 p-2.5 rounded-lg text-blue-400 shrink-0 font-bold leading-none h-10 w-10 flex items-center justify-center">✓</div>
                  <div>
                    <h4 className="font-bold text-md text-white">{feat.title}</h4>
                    <p className="text-slate-400 text-sm mt-0.5">{feat.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm font-sans">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-850">
                <ShieldCheck className="text-slate-700" /> Nutricost Analytical Specs
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

            {/* Ideal target demographics */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2 text-slate-850">
                <Heart className="text-red-500 w-5 h-5 fill-red-500" /> Perfect Target Match
              </h2>
              <ul className="grid grid-cols-1 gap-y-2.5 text-slate-655 text-sm font-semibold">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>Individuals targeting rapid recovery, strength gains, and muscle building</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>Post-workout recovery routines requiring high-speed amino acid delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>Active athletes, fitness enthusiasts, and those with dynamic lifestyles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>Anyone looking to cleanly raise daily protein intake with low lactose profile</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Preparation guidelines note */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-sm mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2 justify-center">
            <Zap className="text-yellow-500 w-6 h-6 fill-yellow-500" /> Easy Solution Guide: Mixer Instructions
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center text-sm font-sans">
            <div className="space-y-2">
              <div className="bg-blue-50 text-blue-700 font-extrabold w-10 h-10 rounded-full flex items-center justify-center mx-auto text-lg shadow-xs">1</div>
              <h4 className="font-bold text-slate-800 text-base">Add Liquid Base</h4>
              <p className="text-slate-500 leading-relaxed">Fill your shaker with 8 to 12 ounces of cold water, skim milk, or your favorite juice beverage.</p>
            </div>
            <div className="space-y-2">
              <div className="bg-blue-50 text-blue-700 font-extrabold w-10 h-10 rounded-full flex items-center justify-center mx-auto text-lg shadow-xs">2</div>
              <h4 className="font-bold text-slate-800 text-base">Add One Scoop</h4>
              <p className="text-slate-500 leading-relaxed">Drop exactly one leveled scoop of premium Nutricost Whey Isolate powder into the storage canister.</p>
            </div>
            <div className="space-y-2">
              <div className="bg-blue-50 text-blue-700 font-extrabold w-10 h-10 rounded-full flex items-center justify-center mx-auto text-lg shadow-xs">3</div>
              <h4 className="font-bold text-slate-800 text-base">Shake & Enjoy</h4>
              <p className="text-slate-500 leading-relaxed">Vigorously shake for 20 to 30 seconds until dissolved completely. Enjoy post-workout or throughout the day.</p>
            </div>
          </div>
        </div>

        {/* Brand Authenticity & Final Summary */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-lg text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-950 mb-4 tracking-tight">
            Clean Protein. Real Results.
          </h2>
          <p className="text-slate-655 max-w-2xl mx-auto leading-relaxed text-md font-sans mb-8">
            Whether you’re training for high-performance strength, looking to build solid lean muscle, or simply optimizing your overall daily nutrition profile, Nutricost Whey Protein Isolate delivers pure, clean, third-party tested quality you can trust in every scoop.
          </p>
          <a 
            href="https://amzn.to/49RRAo8" 
            target="_blank" 
            rel="nofollow sponsored noopener" 
            className="inline-flex bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-center px-12 py-4 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all gap-2"
          >
            <ShoppingCart className="w-5 h-5 text-white" /> Get Nutricost Whey Protein Isolate on Amazon
          </a>
        </div>

      </div>
    </motion.div>
  );
}
