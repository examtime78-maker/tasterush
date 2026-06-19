import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Heart, Sparkles, Award, Scale, CheckCircle2, Leaf, ClipboardList, Info } from 'lucide-react';

export default function TransparentLabsPeaProteinReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2026/02/Transparent-Labs-100-Pea-Protein-Powder1.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/02/Transparent-Labs-100-Pea-Protein-Powder2.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/02/Transparent-Labs-100-Pea-Protein-Powder3.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Protein Sourcing', value: '100% Pure Pea Isolate' },
    { label: 'Protein Yield Per Serving', value: 'Approx. 28 g High-Yield Protein' },
    { label: 'Formula Core Profile', value: '100% Plant-Based vegan Supplement' },
    { label: 'Sweetener Sourcing', value: 'Stevia Extract (Naturally Sweetened)' },
    { label: 'Artificial Complex', value: 'Zero Artificial Additives, Sweeteners, or Dyes' },
    { label: 'Allergen Design', value: 'Gluten-Free, Dairy-Free, Soy-Free, Non-GMO' },
    { label: 'Optimized Intended Use', value: 'Lean Muscle Repair, Recovery & Daily Protein Sourcing' }
  ];

  const features = [
    {
      title: '🌱 100% Plant-Based Pea Protein',
      desc: 'Top-tier, highly bioavailable vegan protein source crafted specifically to fuel intensive athletic lifestyles, lean repairs, and daily wellness schedules.'
    },
    {
      title: '💪 Substantial 28g Protein Powerhouse',
      desc: 'Delivers a robust 28 grams of pure muscle-building protein per scoop, giving you a full clinical dose for optimal synthetic protein recovery.'
    },
    {
      title: '🧬 Rich Essential Amino Acids & BCAAs',
      desc: 'Naturally loaded with a complete structural amino acid chain and BCAAs, essential for driving nitrogen retention and post-workout synthesis.'
    },
    {
      title: '🚫 Absolutely Zero Artificial Fillers',
      desc: 'Totally clean formula. Contains no artificial flavors, artificial colors, synthetic chemical sweeteners, or heavy chemical preservatives.'
    },
    {
      title: '🌾 Pure Gluten-Free Clean Labeling',
      desc: 'Perfectly allergen-safe formula for athletes and weekend warriors wanting deep, pristine plant-based nutrients devoid of junk additives.'
    },
    {
      title: '⚡ Rapid-Dissolution Instant Mixing',
      desc: 'Specially milled pea protein formulation disperses quickly and blends smoothly with water, vegan milks, or complex nutrition smoothies.'
    },
    {
      title: '🥤 Gentle & Effortless Digestive Comfort',
      desc: 'Ultra-clean plant sourcing guarantees soft digestability and zero gastric bloat for sports athletes sensitive to standard dairy whey concentrates.'
    }
  ];

  const valueAesthetics = [
    'Cleanest plant-based formula available',
    'Excellent for post-workout muscle recovery',
    'No artificial chemical sweeteners or fillers',
    'Rich in essential vegan amino acids',
    'Smooth, non-gritty mixing consistency',
    'Tailored perfectly to strict vegan lifestyles'
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-emerald-50/10 min-h-screen text-slate-900 font-sans pb-32"
    >
      {/* Top Value Banner */}
      <div className="bg-emerald-950 text-emerald-100 text-center py-3 text-xs font-black px-4 tracking-wider shadow-md uppercase">
        🌱 CLEAN VEGAN NUTRITION: Transparent Labs 100% Pea Protein (28g Per Serving). Secured Route link for Amazon.
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-12">
        <Link to="/" className="inline-flex items-center text-slate-500 hover:text-emerald-950 transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Review Hub
        </Link>

        {/* Product Showcase Container */}
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-slate-150 mb-12">
          <div className="grid md:grid-cols-2 gap-12 p-8 md:p-12 items-start">
            
            {/* Gallery Section */}
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-3xl p-6 flex items-center justify-center border border-slate-100 aspect-square overflow-hidden relative">
                <img 
                  src={activeImg} 
                  className="max-h-full max-w-full object-contain rounded-2xl duration-305 transition-all hover:scale-105" 
                  alt="Transparent Labs 100% Pea Protein Powder" 
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-emerald-700 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider shadow-sm">
                  100% PLANT ISOLATE
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-slate-50 p-1 transition-all ${activeImg === img ? 'border-emerald-600 shadow-md' : 'border-transparent opacity-75 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Pea Protein Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-emerald-100">
                  <Leaf className="w-3.5 h-3.5 text-emerald-600" /> Premium Vegan Protein
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight font-sans">
                Transparent Labs <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-teal-700 text-2xl md:text-3xl font-black block mt-1">100% Pea Protein Powder</span>
              </h1>
              <p className="text-slate-600 font-semibold text-md">Ultra-Clean Plant-Based Amino Acid Core Devoid of Artificial Preservatives</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-slate-200" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">4.0 (1 Verified Sports Nutrition Review)</span>
              </div>

              <div className="py-2 border-y border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-slate-900">$49.99</span>
                  <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-md ml-3">Non-GMO Certified</span>
                </div>
              </div>

              <p className="text-slate-655 leading-relaxed text-md font-sans">
                Fuel your body with incredibly vital, clean, plant-based recovery support using <strong>Transparent Labs 100% Pea Protein Powder</strong>. Engineered carefully to meet the highest demands of modern vegan athletes, strength bodybuilders, and health-minded fitness lifters, this pristine powder serves up high-level macro profiles with zero compromise. It digests with remarkable ease and skips artificial fillers entirely.
              </p>

              <div className="pt-4 animate-fade-in">
                <a 
                  href="https://amzn.to/4tWRpiE" 
                  target="_blank" 
                  rel="nofollow sponsored noopener" 
                  className="bg-gradient-to-r from-[#ff9900] to-[#ffb84d] hover:from-[#e68a00] hover:to-[#e6a540] text-slate-950 font-bold text-center px-10 py-5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-lg"
                >
                  <ShoppingCart className="w-5 h-5 text-slate-950" /> Buy Now on Amazon
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Informative description banner */}
        <div className="bg-slate-900 text-white rounded-[2rem] p-8 md:p-12 border border-slate-800 shadow-xl mb-12">
          <h2 className="text-3xl font-extrabold text-white text-center mb-6 tracking-tight">
            Clean Plant-Based Protein Support
          </h2>
          <div className="max-w-4xl mx-auto text-slate-300 text-center space-y-6 text-md leading-relaxed">
            <p>
              Transparent Labs Pea Protein Powder is formulated specifically for purists who want a simple, highly productive, and completely customizable plant-based recovery resource.
            </p>
            <p className="text-sm text-slate-405 font-sans">
              With zero artificial sweeteners, zero dairy, zero heavy chemical thickeners, and approximately 28 grams of highly isolated pea protein, it ensures quick nitrogen absorption for repairing hard-trained muscle fibers efficiently.
            </p>
          </div>
        </div>

        {/* Detailed Spec Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-slate-900 text-white rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6 border border-slate-800">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-850 pb-3 text-white">
              <Sparkles className="text-emerald-400" /> Transparent Labs Clean Standard
            </h2>
            <ul className="space-y-4">
              {features.map((feat, index) => (
                <li key={index} className="flex gap-3">
                  <div className="bg-slate-800 p-2.5 text-emerald-400 shrink-0 font-bold leading-none h-10 w-10 flex items-center justify-center rounded-lg border border-slate-750">✓</div>
                  <div>
                    <h4 className="font-bold text-white text-base">{feat.title}</h4>
                    <p className="text-slate-400 text-xs mt-0.5 leading-relaxed font-sans">{feat.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            {/* Technical Specifications */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-850">
                <ClipboardList className="text-slate-700" /> Precise Technical Blueprint
              </h2>
              <div className="grid grid-cols-1 gap-y-3 font-semibold text-xs text-slate-655">
                {specs.map((item, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-slate-50 last:border-0 font-sans">
                    <span className="text-slate-400">{item.label}</span>
                    <span className="text-emerald-800 font-extrabold text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Users Love It Box */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2 text-slate-850">
                <Heart className="text-rose-500 fill-rose-550 w-5 h-5" /> Why Users Love It
              </h2>
              <div className="grid grid-cols-1 gap-y-2 text-slate-705 text-xs font-semibold">
                {valueAesthetics.map((rate, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <span className="text-emerald-650 font-black shrink-0">✔</span>
                    <span>{rate}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Actionable Usage Directions */}
        <div className="bg-emerald-950/10 border border-emerald-900/10 rounded-[2rem] p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-emerald-950 mb-6 flex items-center gap-2 justify-center">
            <Scale className="text-emerald-700 w-6 h-6" /> Suggested Clean Dosage Routine
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-center text-sm font-sans">
            <div className="bg-white p-6 rounded-2xl border border-emerald-100 flex flex-col justify-between">
              <div>
                <span className="bg-emerald-900 text-white font-extrabold w-10 h-10 rounded-full flex items-center justify-center mx-auto text-lg mb-4">1</span>
                <h4 className="font-bold text-emerald-950 text-base mb-2">Mix & Shake Formulation</h4>
                <p className="text-slate-600 leading-relaxed text-xs">Mix exactly one level scoop (approx. 32g) with 6 to 12 ounces of cold mineral water, nut milks, or your preferred custom fresh beverage.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-emerald-100 flex flex-col justify-between">
              <div>
                <span className="bg-emerald-900 text-white font-extrabold w-10 h-10 rounded-full flex items-center justify-center mx-auto text-lg mb-4">2</span>
                <h4 className="font-bold text-emerald-950 text-base mb-2">Post-Workout Reconstruct</h4>
                <p className="text-slate-655 leading-relaxed text-xs">Ideally consumed within 45 minutes post-workout, between key meals, or anytime throughout the day for a high-intensity vegan protein elevation.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Safety and Dietary Note Disclaimer */}
        <div className="bg-slate-100 rounded-3xl p-6 border border-slate-200 shadow-xs max-w-4xl mx-auto mb-12">
          <h3 className="text-slate-800 font-bold mb-2 flex items-center gap-2 text-sm uppercase tracking-wide">
            <Info className="w-4 h-4 text-slate-650" /> Allergen & Workout Safety Disclaimer
          </h3>
          <p className="text-slate-505 text-xs font-sans leading-relaxed">
            Please make sure you balance clean nutritional supplements with wholesome whole-food diets. This sports supplement is manufactured to support elite athletic recovery goals in standard healthy adults. Always consult with registered certified dietary health advisors prior to starting any heavy supplement protocols.
          </p>
        </div>

        {/* Final CTA Board */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-lg text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-950 mb-4 tracking-tight">
            Clean Protein for Everyday Performance
          </h2>
          <p className="text-slate-655 max-w-2xl mx-auto leading-relaxed text-md font-sans mb-8">
            Transparent Labs 100% Pea Protein Powder elevates your plant-based game with standard-setting formulation clarity, zero artificial additives, heavy-metal safety, and rapid assimilation. Fuel your muscles with pristine integrity.
          </p>
          <a 
            href="https://amzn.to/4tWRpiE" 
            target="_blank" 
            rel="nofollow sponsored noopener" 
            className="inline-flex bg-gradient-to-r from-emerald-800 to-emerald-700 hover:from-emerald-900 hover:to-emerald-800 text-white font-bold text-center px-12 py-4 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all gap-2 text-md"
          >
            <ShoppingCart className="w-5 h-5 text-white" /> Get Transparent Labs Pea Protein on Amazon
          </a>
        </div>

      </div>
    </motion.div>
  );
}
