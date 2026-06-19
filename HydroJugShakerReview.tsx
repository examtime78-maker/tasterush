import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Award, Heart, Sparkles, Activity, Info, ClipboardList, RefreshCw, VolumeX, Grid, Droplet, Check } from 'lucide-react';

export default function HydroJugShakerReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2026/01/Hydrojug-20-oz-Noiseless-Shaker-Bottle1.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/01/Hydrojug-20-oz-Noiseless-Shaker-Bottle2.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/01/Hydrojug-20-oz-Noiseless-Shaker-Bottle4.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Volumetric Capacity', value: '20 oz (Approx. 592 ml)' },
    { label: 'Mixing Mechanism', value: 'Integrated Silent Shaker Grate (No Metal Ball)' },
    { label: 'Material Composition', value: '100% BPA-Free Tritan Plastic' },
    { label: 'Odor Resistance', value: 'High-Performance Odor Shield' },
    { label: 'Cap Mechanics', value: 'Leak-Resistant Flip-Top with Carry Loop' },
    { label: 'Dishwasher Safety', value: 'Top-Rack Dishwasher Safe' },
    { label: 'Cup Holder Compatibility', value: 'Fits Handily in Standard Holders' },
    { label: 'Primary Brand Scribe', value: 'HydroJug' }
  ];

  const features = [
    {
      title: '🔇 Integrated Silent Shaker Grate',
      desc: 'Blends and homogenizes chalky protein powders, pre-workouts, and thick supplement mixes without utilizing loud, clanging metal blender balls. Absolute whisper quiet.'
    },
    {
      title: '🌱 Clean BPA-Free Tritan Plastic',
      desc: 'Engineered with durable, medical-grade Tritan material that maintains clarity, resists heavy impact drops, and fully shields against foul, leftover stale protein smells.'
    },
    {
      title: '🚗 Universal Cup Holder Compatibility',
      desc: 'Slimmer base profile is specifically calibrated to slot cleanly into standard car cup holders, treadmill compartments, and cycling water cages without getting stuck.'
    },
    {
      title: '🚰 Spill-Guarded Flip-Top Drinking Cap',
      desc: 'Features a secure-latching flip cover that shields the drinking spout from unsanitary dust, dirt, or stray hair, while remaining extremely easy to snap open.'
    },
    {
      title: '👜 Built-In High Strength Carry Loop',
      desc: 'Allows effortless single-finger transport for gym floor pacing, morning commutes, or simple carabiner attachment to active tactical outdoor packs.'
    },
    {
      title: '🧼 Effortless Top-Rack Dishwasher Cleaning',
      desc: 'Completely modular, removable assembly allows for easy soap rinsing. Dishwasher safe components ensure deep sanitation without warping plastic layers.'
    }
  ];

  const highlights = [
    'Zero rattle noise while pacing or exercising, thanks to the grate stabilizer',
    'Perfect 20 oz size is highly optimized for precise single-dose dietary supplements',
    'Stout impact-resistant plastic body stands up to tough gym floor drops',
    'Smooth, velvety mixing that effortlessly dissolves BCAAs and protein blends alike',
    'Sleek, minimalistic profile looks modern in boardroom or training field environments',
    'Completely allergen-safe, BPA-free formulation guards long-term cellular health'
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-stone-50 min-h-screen text-slate-950 font-sans pb-32"
    >
      {/* Top Banner */}
      <div className="bg-slate-950 text-white text-center py-3 text-xs font-black px-4 tracking-wider shadow-md uppercase">
        🥤 SILENT SUPLEMENT MIXING: HydroJug 20 oz Silent Grate Tech Shaker. Lightweight Purity. Secure Amazon link.
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
                  className="max-h-full max-w-full object-contain rounded-2xl duration-300 transition-all hover:scale-105" 
                  alt="HydroJug 20 oz Noiseless Shaker Bottle" 
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-slate-950 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider shadow-sm flex items-center gap-1.5">
                  <VolumeX className="w-3.5 h-3.5 text-blue-450 text-blue-400" /> NOISELESS MIXING
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-slate-50 p-1 transition-all ${activeImg === img ? 'border-amber-600 shadow-md' : 'border-transparent opacity-75 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`HydroJug Shaker Thumbnail ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-slate-200">
                  <Award className="w-3.5 h-3.5 text-slate-950" /> Compact Gym Essential
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-950 tracking-tight font-sans">
                HydroJug <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-950 text-2xl md:text-3.5xl font-black block mt-1">20 oz Noiseless Shaker</span>
              </h1>
              <p className="text-stone-605 font-semibold text-sm font-sans px-0.5 font-sans">Odor-Resistant BPA-Free Tritan Shell with Integrated Silent Grate System for Smooth Whipped Drinks</p>
              
              <div className="flex items-center gap-3 font-sans">
                <div className="flex text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 text-slate-200" />
                  <Star className="w-5 h-5 text-slate-200" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">3.00 (1 Certified Gymgoer Review)</span>
              </div>

              <div className="py-2 border-y border-stone-100 font-sans">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-rose-600">$9.99</span>
                  <span className="text-xs bg-slate-105 bg-slate-100 text-slate-900 font-extrabold px-3 py-1 rounded-md ml-3">Patent Silent Blend Tech</span>
                </div>
              </div>

              <p className="text-stone-605 leading-relaxed text-sm md:text-base font-sans mt-2">
                Banish noisy gym locker room distractions and chemical-smelling plastic forever with the beautifully lightweight <strong>HydroJug 20 oz Noiseless Shaker Bottle</strong>. Explicitly designed to replace rattling metal balls with a silent stationary mixing grate, it whips pre-workouts and protein powders into silky-smooth consistencies. Crafted from heavy-duty, odor-resistant Tritan plastic and equipped with an ergonomic flip lid, it fits everywhere your busy active day takes you.
              </p>

              <div className="pt-4 font-sans">
                <a 
                  href="https://amzn.to/43kQygU" 
                  target="_blank" 
                  rel="nofollow sponsored noopener" 
                  className="bg-gradient-to-r from-[#ff9900] to-[#ffb84d] hover:from-[#e68a00] hover:to-[#e6a540] text-slate-950 font-bold text-center px-10 py-5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-lg"
                >
                  <ShoppingCart className="w-5 h-5 text-slate-950" /> Buy on Amazon
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Dynamic Structural integrity Description Panel */}
        <div className="bg-slate-950 text-slate-100 rounded-[2rem] p-8 md:p-12 border border-slate-900 shadow-xl mb-12 font-sans">
          <h2 className="text-3xl font-extrabold text-white text-center mb-6 tracking-tight">
            How Silent Grate Tech Defeats Clanging Metal Shaker Balls
          </h2>
          <div className="max-w-4xl mx-auto text-slate-350 text-center space-y-6 text-sm lg:text-base leading-relaxed">
            <p>
              Traditional protein shakers force users to put up with irritating, high-pitched scratching sounds caused by loose wire whisk balls bouncing inside plastic chambers. HydroJug re-engineers this layout from scratch. By locking an aerodynamic, multi-tier **silencing grate** right beneath the mouthpiece spout, fluids are forced to split and shear dynamically at high velocities when shaken. This breaks up resilient powder clusters, yielding smooth drinks with zero noise pollution.
            </p>
            <p className="text-xs text-amber-400 leading-relaxed font-sans font-bold uppercase tracking-wider">
              ★ ZERO CORROSIVE METALS inside, 100% DISHWASHER SAFE, ODOR SHIELD FOR MAXIMUM DAILY FRESHNESS.
            </p>
          </div>
        </div>

        {/* Detailed Spec Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-slate-950 text-slate-100 rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6 border border-slate-900">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3 text-white font-sans">
              <Sparkles className="text-amber-450 text-amber-400 font-sans" /> Utility Feature Overview
            </h2>
            <ul className="space-y-4 font-sans font-medium">
              {features.map((feat, index) => (
                <li key={index} className="flex gap-3">
                  <div className="bg-slate-900 p-2.5 text-amber-500 shrink-0 font-bold leading-none h-10 w-10 flex items-center justify-center rounded-lg border border-slate-800">✓</div>
                  <div>
                    <h4 className="font-bold text-white text-base font-sans">{feat.title}</h4>
                    <p className="text-slate-400 text-xs mt-0.5 leading-relaxed font-sans font-medium">{feat.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            {/* Technical Specifications */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm font-sans">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-855">
                <ClipboardList className="text-slate-700 font-sans" /> Shaker Architecture Specs
              </h2>
              <div className="grid grid-cols-1 gap-y-3 font-semibold text-xs text-slate-655 font-sans">
                {specs.map((item, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-slate-50 last:border-0">
                    <span className="text-slate-400 font-semibold">{item.label}</span>
                    <span className="text-slate-950 font-extrabold text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Users Love It Box */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-4 font-sans">
              <h2 className="text-xl font-bold flex items-center gap-2 text-slate-850">
                <Heart className="text-rose-500 fill-rose-500 w-5 h-5 font-sans" /> Daily Experience Points
              </h2>
              <div className="grid grid-cols-1 gap-y-2 text-slate-705 text-xs font-semibold font-sans">
                {highlights.map((rate, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-slate-50/50 p-2.5 rounded-xl border border-slate-100">
                    <span className="text-amber-600 font-black shrink-0 font-sans">✔</span>
                    <span>{rate}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* PROS & CONSIDERATIONS */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-emerald-50/20 border border-emerald-505 border-emerald-500/15 p-8 rounded-3xl space-y-4 shadow-sm">
            <h3 className="text-emerald-900 font-black text-xl flex items-center gap-2 font-sans">
              👍 Pros & Strengths
            </h3>
            <ul className="space-y-2.5 text-stone-705 text-sm font-sans">
              <li className="flex gap-2 items-start font-medium text-slate-850">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Completely noiseless grate system silences your shakes on the move</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-850 font-sans">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Tritan plastic resists persistent odor smells, even when left overnight</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-850 font-sans text-stone-900">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Highly compact travel size fits standard cup holders and treadmills perfectly</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-855 font-sans">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Top-rack dishwasher safe components enable rapid modular cleanup</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-850 font-sans">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Remarkably competitive under-$10 price tag delivers high daily fitness value</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50/25 border border-amber-500/15 p-8 rounded-3xl space-y-4 shadow-sm animate-fade-in font-sans">
            <h3 className="text-amber-900 font-black text-xl flex items-center gap-2 font-sans">
              ⚠️ Considerations
            </h3>
            <ul className="space-y-2.5 text-stone-705 text-sm font-sans font-medium text-stone-900">
              <li className="flex gap-2 items-start font-semibold text-slate-800">
                <span className="text-amber-600 font-bold shrink-0">●</span>
                <span>Requires precise tightening of the lid threads to prevent stray droplets during intense, vertical shakes</span>
              </li>
              <li className="flex gap-2 items-start font-semibold text-slate-800 font-sans text-stone-850">
                <span className="text-amber-700 font-bold shrink-0 font-bold">●</span>
                <span>The compact 20 oz capacity might require multiple refills for extremely long hydration sessions</span>
              </li>
              <li className="flex gap-2 items-start font-semibold text-slate-800 font-sans text-stone-850">
                <span className="text-amber-700 font-bold shrink-0 font-bold">●</span>
                <span>Integrated plastic grate may trap tiny clumps if powders are dumped first before adding water</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Practical Mixing Protocol */}
        <div className="bg-indigo-50/40 rounded-[2rem] p-8 md:p-12 mb-12 border border-indigo-150">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2 justify-center font-sans tracking-tight">
            <Activity className="text-indigo-650 animate-pulse font-sans" /> Suggested Use & Dynamic Mixing Protocol
          </h2>
          <div className="max-w-4xl mx-auto text-slate-705 space-y-6 text-sm lg:text-base leading-relaxed text-center font-sans font-medium">
            <p className="font-bold text-indigo-950 font-sans">
              💧 ALWAYS put your liquid base first (water, nut milk, juice) BEFORE dumping the powder inside to ensure zero clumping underneath the grate.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-xs font-bold uppercase text-indigo-900 font-sans">
              <div className="bg-white p-4 rounded-xl border border-indigo-100 shadow-xs flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" /> Hold the cap down firmly during vertical high-intensity shakes.
              </div>
              <div className="bg-white p-4 rounded-xl border border-indigo-100 shadow-xs flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" /> Rinse with cold soapy water immediately after drinking to maximize clean longevity.
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-slate-100 rounded-[2rem] p-8 md:p-12 mb-12 font-sans">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2 justify-center tracking-tight font-sans">
            ❓ Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-sm lg:text-base leading-relaxed font-sans text-left font-medium">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/50 shadow-xs">
              <p className="font-bold text-slate-900 mb-2">Q: Does this model contain or use standard stainless steel mixer balls?</p>
              <p className="text-stone-655 text-sm font-semibold">
                A: No — it features a specialized, non-removable silent blending slate insert positioned near the lid spout. This allows liquids to split and shear quietly instead of bouncing metal weights off plastic.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/50 shadow-xs">
              <p className="font-bold text-slate-900 mb-2">Q: Can I put hot liquids or coffee inside this Tritan bottle?</p>
              <p className="text-stone-655 text-sm font-semibold">
                A: We recommend using warm or cold liquids only. Boiling hot coffee can build massive steam pressure inside air-tight sealed shakers, which can occasionally pop the flip cap open unexpectedly.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/50 shadow-xs">
              <p className="font-bold text-slate-900 mb-2">Q: Is it safe to treat this inside modern automatic dishwashers?</p>
              <p className="text-stone-655 text-sm font-semibold">
                A: Yes — the high-grade Tritan polymer shell is highly heat-resistant. Simply place it on the top dish rack for peace of mind, automated sanitization.
              </p>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-150 mb-12 font-sans shadow-xs">
          <h2 className="text-2xl font-black text-slate-950 mb-8 border-b pb-4 tracking-tight">
            Certified Customer Reviews (1 Review)
          </h2>
          <div className="space-y-6">
            <div className="border border-slate-100 p-6 rounded-2xl bg-slate-50/50">
              <div className="flex text-amber-400 gap-1 mb-2">
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 text-slate-200" />
                <Star className="w-4 h-4 text-slate-200" />
              </div>
              <p className="text-slate-900 font-bold mb-1">Extremely quiet commute companion</p>
              <p className="text-slate-655 text-xs font-semibold leading-relaxed">"Honestly love how light and completely quiet this bottle is during my early morning train commutes. No more obnoxious shaker ball noises! Mixing is perfect, just be extra certifiable to tighten the lid down properly to avoid small droplets during heavy shakes."</p>
            </div>
          </div>
        </div>

        {/* Safety Disclaimer Box */}
        <div className="bg-slate-100 rounded-3xl p-6 border border-slate-200 shadow-xs max-w-4xl mx-auto mb-12 font-sans">
          <h3 className="text-slate-850 font-bold mb-2 flex items-center gap-2 text-xs uppercase tracking-wide">
            <Info className="w-4 h-4 text-slate-650" /> Chemical & Operational Disclosures
          </h3>
          <p className="text-slate-505 text-xs font-sans leading-relaxed">
            The HydroJug 20 oz Shaker is manufactured strictly from food-safe, non-leaching Tritan plastic raw structures completely free from BPA and phthalates. Ensure raw powder clumps are occasionally wiped from the top seal channels to maintain an airtight connection. Do not microwave the bottle or treat it with high-strength solvents. These assertions have not been validated by the FDA; HydroJug products are manufactured strictly for hydration/supplement storage and carry no therapeutic or physiological claims.
          </p>
        </div>

        {/* Final CTA Container */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-150 shadow-lg text-center max-w-4xl mx-auto font-sans">
          <h2 className="text-3xl font-extrabold text-slate-950 mb-4 tracking-tight">
            Experience Elegant, Quiet Supplement Shaking Today
          </h2>
          <p className="text-stone-655 max-w-2xl mx-auto leading-relaxed text-md font-sans mb-8">
            Stop putting up with obnoxious rattle-clanging metal balls. Keep your mornings peaceful, your sports shakes smooth, and your locker room visits pristine.
          </p>
          <a 
            href="https://amzn.to/43kQygU" 
            target="_blank" 
            rel="nofollow sponsored noopener" 
            className="inline-flex bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-850 text-white font-bold text-center px-12 py-4 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all gap-2 text-md"
          >
            <ShoppingCart className="w-5 h-5 text-white" /> Buy HydroJug Noiseless Shaker on Amazon
          </a>
        </div>

      </div>
    </motion.div>
  );
}
