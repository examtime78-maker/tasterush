import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Award, Heart, Sparkles, Activity, Info, ClipboardList, Flame, ShieldAlert, Zap } from 'lucide-react';

export default function EvlEngnReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2025/09/evlnutrition-engn-pre-workout-1.webp',
    'https://gymusastore.com/wp-content/uploads/2025/09/evlnutrition-engn-pre-workout-5.webp',
    'https://gymusastore.com/wp-content/uploads/2025/09/evlnutrition-engn-pre-workout-7.webp'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Servings Per Container', value: '30 Servings' },
    { label: 'Premium Flavor Profile', value: 'Blue Raz (Epic Berry Fusion)' },
    { label: 'Key Energy Delivery', value: '2-Stage Extended Release Cafe-Matrix' },
    { label: 'Sustained Endurance Core', value: 'VitaShure® Caffeine & CarnoSyn® Beta-Alanine' },
    { label: 'Pump & Hydration Blend', value: 'Betaine, Agmass™ Agmatine Sulfate & L-Tyrosine' },
    { label: 'Brain Nootropic Support', value: 'Choline Bitartrate & Huperzine A' },
    { label: 'Manufacturer Integrity', value: 'Evlution Nutrition (EVL) - Certified FDA Compliant' }
  ];

  const features = [
    {
      title: '🔥 Explosive 2-Stage Smooth Energy Flow',
      desc: 'Couples instant caffeine with extended-release VitaShure to provide a powerful, surge of force that powers your workout and prevents the standard post-gym crash.'
    },
    {
      title: '🧠 Hyper-Tunnel Laser Concentration',
      desc: 'Infused with high-potency L-Tyrosine, Choline, and Huperzine A to elevate neurotransmitter levels, keeping you mentally dialed and in synchronization with every rep.'
    },
    {
      title: '💪 Advanced Pump & Blood Volume Synergy',
      desc: 'Blends CarnoSyn Beta-Alanine and Agmass Agmatine to buffer lactic acid accumulation and expand blood vessels, delivering major, vascular muscular fullness.'
    },
    {
      title: '⚡ Pure Strength & Power Synthesis',
      desc: 'Outfitted with creatine and betaine anhydrous to promote rapid ATP cell regeneration, driving heavier lifts and explosive sprint performance.'
    },
    {
      title: '🏆 Formulated by Athletes for Athletes',
      desc: 'Avoids cheap mystery proprietary blends. Provides clinically proportioned, clean active elements designed to push you beyond your physical plateaus.'
    },
    {
      title: '💧 Incredibly Clean Sensation & Flavor',
      desc: 'Stands as an industry reference for solubility and clean taste. Shakes up instantly with zero gritty powder residues or synthetic chemical back-tastes.'
    }
  ];

  const highlights = [
    'Buttery smooth, intense energy without nervous heart flutters or jitters',
    'Sharper mind-muscle connections make every physical motion fully intentional',
    'Unbeatable muscular pumps and deep vascularity that last hours post-exercise',
    'Accelerates workout recovery times so you can return to the iron sooner',
    'Incredibly delicious, sweet Blue Raz profile dissolves instantly in cold water',
    'Manufactured inside top U.S. facilities conforming to strict cGMP guidelines'
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-stone-50 min-h-screen text-slate-900 font-sans pb-32"
    >
      {/* Top Banner */}
      <div className="bg-slate-950 text-white text-center py-3 text-xs font-black px-4 tracking-wider shadow-md uppercase">
        🔥 AMPLIFIED ATHLETIC PUMPS: Evlution Nutrition ENGN 30-Servings Professional Pre-Workout. Secure Affiliate Amazon Link.
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
                  alt="Evlnutrition ENGN Pre Workout Blue Raz Flavor" 
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-slate-950 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider shadow-sm">
                  INTENSE ENERGY
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-slate-50 p-1 transition-all ${activeImg === img ? 'border-amber-600 shadow-md' : 'border-transparent opacity-75 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`EVL ENGN Thumbnail ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-slate-200">
                  <Award className="w-3.5 h-3.5 text-slate-950" /> Elite Sports Pre-Workout
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-950 tracking-tight font-sans">
                EVL ENGN <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-900 text-2xl md:text-3.5xl font-black block mt-1">High-Performance Pre-Workout</span>
              </h1>
              <p className="text-stone-605 font-semibold text-sm font-sans">Extended 2-Stage Energy Delivery, Tunnel Focus Nootropics & Explosive Muscle Pumps</p>
              
              <div className="flex items-center gap-3 font-sans">
                <div className="flex text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-slate-200 text-slate-200" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">4.0 (1 Certified Gym athlete Review)</span>
              </div>

              <div className="py-2 border-y border-stone-100 font-sans">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-rose-600">$29.99</span>
                  <span className="text-xs bg-slate-100 text-slate-900 font-extrabold px-3 py-1 rounded-md ml-3">Outstanding Performance Value</span>
                </div>
              </div>

              <p className="text-stone-605 leading-relaxed text-sm md:text-base font-sans ring-zinc-500">
                IGNITE your training sessions and surpass your cognitive ceilings with the masterfully crafted <strong>Evlution Nutrition ENGN Pre-Workout Formula</strong>. Conceived to deliver clean, crash-free energy, mind-muscle synchronization, and raw hydraulic pumps, this elite sport supplement uses a unique 2-stage energy system. Merging rapid absorption caffeine with extended-release VitaShure® and performance beta-alanine, ENGN lets you break plateaus securely.
              </p>

              <div className="pt-4 font-sans">
                <a 
                  href="https://amzn.to/3QmXQOd" 
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
        <div className="bg-slate-950 text-slate-100 rounded-[2rem] p-8 md:p-12 border border-slate-900 shadow-xl mb-12">
          <h2 className="text-3xl font-extrabold text-white text-center mb-6 tracking-tight">
            Advanced 2-Stage Stimulant Mechanics & Mind-Muscle Connectivity
          </h2>
          <div className="max-w-4xl mx-auto text-slate-350 text-center space-y-6 text-sm lg:text-base leading-relaxed">
            <p>
              Standard budget pre-workouts dump massive single-dose caffeine quantities onto your nervous system, causing violent blood pressure spikes, sweats, and total mid-workout fatigue crashes. ENGN resolves this using a proprietary multi-phase kinetic strategy. Pure anhydrous caffeine sparks immediate motivation, while active micro-encapsulated VitaShure maintains smooth cellular energy over long endurance sets.
            </p>
            <p className="text-xs text-amber-400 leading-relaxed font-sans font-bold uppercase tracking-wider">
              ★ Blended with standard-setting nootropics to create a laser mental focus required for complex routines.
            </p>
          </div>
        </div>

        {/* Detailed Spec Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-slate-950 text-slate-100 rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6 border border-slate-900">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3 text-white">
              <Sparkles className="text-amber-450 text-amber-400" /> Active Synergy Roles
            </h2>
            <ul className="space-y-4 font-sans">
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
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-850">
                <ClipboardList className="text-slate-700" /> Supplemental Ingredient Specs
              </h2>
              <div className="grid grid-cols-1 gap-y-3 font-semibold text-xs text-slate-655 font-sans">
                {specs.map((item, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-slate-50 last:border-0">
                    <span className="text-slate-400">{item.label}</span>
                    <span className="text-slate-950 font-extrabold text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Users Love It Box */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2 text-slate-850 font-sans">
                <Heart className="text-rose-500 fill-rose-500 w-5 h-5" /> Athlete Experience Points
              </h2>
              <div className="grid grid-cols-1 gap-y-2 text-slate-705 text-xs font-semibold font-sans">
                {highlights.map((rate, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-slate-50/50 p-2.5 rounded-xl border border-slate-100">
                    <span className="text-amber-600 font-black shrink-0">✔</span>
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
            <h3 className="text-emerald-900 font-black text-xl flex items-center gap-2">
              👍 Pros & Strengths
            </h3>
            <ul className="space-y-2.5 text-stone-705 text-sm font-sans">
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Unrivaled 2-stage energy delivery system prevents standard drop crashes</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Dual nootropic inclusions maximize tunnel mental concentration easily</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Outstanding muscular hydration and vascular pumps via CarnoSyn® & Agmass™</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Fabulous, award-winning Blue Raz flavor profile dissolves instantly without grittiness</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Superb, highly competitive price point at only $29.99 for 30 full workouts</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50/25 border border-amber-500/15 p-8 rounded-3xl space-y-4 shadow-sm animate-fade-in">
            <h3 className="text-amber-900 font-black text-xl flex items-center gap-2">
              ⚠️ Considerations
            </h3>
            <ul className="space-y-2.5 text-stone-705 text-sm font-sans">
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-amber-600 font-bold shrink-0 font-bold">●</span>
                <span>Contains beta-alanine, which can provoke harmless, temporary physical tingling sensations (paresthesia)</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-amber-600 font-bold shrink-0 font-bold">●</span>
                <span>Not formulated for children or users highly sensitive to active caffeine stimulants</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-amber-600 font-bold shrink-0 font-bold">●</span>
                <span>To prevent insomnia, avoid ingesting within 4-6 hours of standard sleeping schedules</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Suggested Use & directions */}
        <div className="bg-slate-100 rounded-[2rem] p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2 justify-center font-sans tracking-tight">
            <Activity className="text-amber-600 animate-pulse" /> Suggested Use & Directions
          </h2>
          <div className="max-w-4xl mx-auto text-slate-705 space-y-6 text-sm lg:text-base leading-relaxed text-center font-sans">
            <p className="font-semibold text-slate-800">
              💧 Mix exactly <strong>1 scoop</strong> of EVL ENGN Pre-Workout with <strong>8 oz (236 mL)</strong> of clean cold water and consume <strong>15–30 minutes before</strong> active exercise.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-xs font-semibold uppercase text-slate-600">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                🕑 Avoid within 4 hours of sleep to prevent sleeplessness standard.
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                ⚠️ Assess physical tolerance with half a scoop originally.
              </div>
            </div>
          </div>
        </div>

        {/* Safety Disclaimer Box */}
        <div className="bg-slate-100 rounded-3xl p-6 border border-slate-200 shadow-xs max-w-4xl mx-auto mb-12">
          <h3 className="text-slate-850 font-bold mb-2 flex items-center gap-2 text-xs uppercase tracking-wide">
            <Info className="w-4 h-4 text-slate-650" /> Medical Safety & Health Disclosures
          </h3>
          <p className="text-slate-505 text-xs font-sans leading-relaxed">
            Not intended for individuals under 18 years of age. Please do not utilize if pregnant or actively nursing. Absolutely hold consult with your cardiologist or primary care doctor prior to ingestion if you have experienced high blood pressure, thyroid issues, vascular anomalies, liver, or renal conditions. Discontinue use immediately if rapid heartbeat or dizziness occurs. These statements have not been evaluated by the FDA; ENGN is not formulated to diagnose, treat, or prevent chronic disease processes.
          </p>
        </div>

        {/* Final CTA Container */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-150 shadow-lg text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-950 mb-4 tracking-tight">
            Ignite Sensation & Dominate Every Hard Workout
          </h2>
          <p className="text-stone-655 max-w-2xl mx-auto leading-relaxed text-md font-sans mb-8">
            The Evlnutrition ENGN Pre-Workout encapsulates professional athletic safety, superb physical endurance, laser mind-muscle synchronization, and refreshing award-winning mixology. Lift your expectations.
          </p>
          <a 
            href="https://amzn.to/3QmXQOd" 
            target="_blank" 
            rel="nofollow sponsored noopener" 
            className="inline-flex bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-center px-12 py-4 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all gap-2 text-md"
          >
            <ShoppingCart className="w-5 h-5 text-white" /> Buy ENGN Pre-Workout on Amazon
          </a>
        </div>

      </div>
    </motion.div>
  );
}
