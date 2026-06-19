import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Award, Heart, Sparkles, Activity, Info, ClipboardList, Zap, Droplet } from 'lucide-react';

export default function MuscleTechEaaReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2025/09/muscletech-100-EAA-1.webp',
    'https://gymusastore.com/wp-content/uploads/2025/09/muscletech-100-EAA-3-600x600.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/09/muscletech-100-EAA-4-600x600.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Servings Per Container', value: '30 Servings' },
    { label: 'Essential Amino Acids (EAAs)', value: '7.4 g' },
    { label: 'Branched-Chain Amino Acids (BCAAs)', value: '4.5 g' },
    { label: 'Anabolic Trigger (L-Leucine)', value: '3.0 g' },
    { label: 'Hydration Catalyst', value: 'Electrolyte & Mineral Blend' },
    { label: 'Gluten Status', value: 'Gluten-Free & Clean Formulation' },
    { label: 'Primary Brand Scribe', value: 'MuscleTech®' }
  ];

  const features = [
    {
      title: '💪 7.4g Full Spectrum Essential Amino Acids',
      desc: 'Delivers a comprehensive dose of all 9 essential amino acids that your body cannot synthesize internally. Critical for triggering muscle protein synthesis and stopping muscle breakdown.'
    },
    {
      title: '⚡ 3g L-Leucine Anabolic Trigger Focus',
      desc: 'Formulated with a clinical dose of high-purity L-Leucine, the single most powerful amino acid responsible for turning on the mTOR pathway to build muscle and enhance recovery.'
    },
    {
      title: '💧 Advanced Mineral & Electrolyte Matrix',
      desc: 'Replenishes critical trace elements and key electrolytes lost through sweat. Supports muscle fiber hydration, cellular fluid balance, and intense muscle contraction power.'
    },
    {
      title: '🧪 Clinically Proven Strength Formula',
      desc: 'Based on gold-standard sports nutrition and clinical research. Key ingredients are shown in 12-week trials to dramatically boost squat, leg press, and bench press outputs.'
    },
    {
      title: '🍓 Mouthwatering Refreshing Taste Profile',
      desc: 'Engineered for delicious daily use with instant solubility. Shakes up effortlessly in ice water with no sand-like residues, chemical bitterness, or chalky clumps.'
    },
    {
      title: '🔄 Peak Anti-Catabolic Muscle Preservation',
      desc: 'Ideal for taking intra-workout or during fasting windows. Floods the bloodstream with active free-form aminos to preserve lean mass during grueling caloric deficits.'
    }
  ];

  const highlights = [
    'Complete full-spectrum EAA profiles work better than generic, standalone BCAAs',
    'Enables incredibly fast recovery and alleviates delayed onset muscle soreness (DOMS)',
    'Keeps skeletal muscles hydrated and functioning at high output for longer sets',
    'Ultra-clean formula mixology is light, refreshing, and highly bioavailable',
    'Backed by MuscleTech\'s legendary, award-winning sports science pedigree',
    'Independently tested and manufactured under pristine quality standards'
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-stone-50 min-h-screen text-slate-900 font-sans pb-32"
    >
      {/* Top Action Banner */}
      <div className="bg-slate-950 text-white text-center py-3 text-xs font-black px-4 tracking-wider shadow-md uppercase">
        ⚡ OPTIMIZED RECOVERY: MuscleTech Platinum 100% EAA+ Hydration & Recovery Formula. Secure Affiliate Link.
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
                  alt="MuscleTech Platinum 100% EAA+" 
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-slate-950 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider shadow-sm flex items-center gap-1">
                  <Droplet className="w-3.5 h-3.5 text-amber-400" /> RECOVERY & HYDRATION
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-slate-50 p-1 transition-all ${activeImg === img ? 'border-amber-600 shadow-md' : 'border-transparent opacity-75 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`MuscleTech Thumbnail ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-slate-200">
                  <Award className="w-3.5 h-3.5 text-slate-950" /> Award Winning Recovery Core
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-950 tracking-tight font-sans">
                MuscleTech 1500 <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-950 text-2xl md:text-3.5xl font-black block mt-1">100% EAA+ Recovery Formula</span>
              </h1>
              <p className="text-stone-605 font-semibold text-sm font-sans px-0.5">Dual Recovery & Mineral Hydration Matrix with Complete spectrum Amino Acids & 3,000mg Leucine</p>
              
              <div className="flex items-center gap-3 font-sans">
                <div className="flex text-amber-500">
                  <Star className="w-5 h-5 fill-amber-450 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <div className="relative inline-block w-5 h-5 text-slate-200">
                    <Star className="absolute w-5 h-5 text-slate-200" />
                    <div className="absolute w-2.5 overflow-hidden">
                      <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                    </div>
                  </div>
                  <Star className="w-5 h-5 text-slate-200" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">3.50 out of 5 (2 Verified Athlete Reviews)</span>
              </div>

              <div className="py-2 border-y border-stone-100 font-sans">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-rose-600">$34.99</span>
                  <span className="text-xs bg-slate-100 text-slate-900 font-extrabold px-3 py-1 rounded-md ml-3">Clinically Inspired Ratio</span>
                </div>
              </div>

              <p className="text-stone-605 leading-relaxed text-sm md:text-base font-sans">
                Ignite your physical recovery and buffer painful muscle breakdown using the scientifically optimized <strong>MuscleTech Platinum 100% EAA+</strong>. Painstakingly engineered according to elite athletic tests, this unique post-workout power-blend supplies 7.4g of pure free-form Essential Amino Acids (EAAs), including 4.5g of BCAAs and a staggering 3g leucine dosage. Complemented by active minerals and hydrating electrolytes, it fuels your tissues rapidly without heavy sugar crashes.
              </p>

              <div className="pt-4 font-sans">
                <a 
                  href="https://amzn.to/43SwrGV" 
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
            Understanding the mTOR Anabolic Trigger & Hydration Synergy
          </h2>
          <div className="max-w-4xl mx-auto text-slate-350 text-center space-y-6 text-sm lg:text-base leading-relaxed">
            <p>
              Standard post-workout supplements only contain Branched-Chain Amino Acids (BCAAs: Leucine, Isoleucine, Valine) but miss the remaining 6 essential amino acids (EAAs) required to successfully reconstruct muscular fibers. Platinum 100% EAA+ delivers the entire 9-factor EAA spectrum in clinically validated ratios. Combined with high-grade minerals, it creates the ultimate cellular environment for anabolic protein synthesis and rapid, pain-free recovery.
            </p>
            <p className="text-xs text-amber-400 leading-relaxed font-sans font-bold uppercase tracking-wider">
              ★ REPLENISHES VITAL MINERAL STORES SPENT DURING HIGH-STRESS RESISTANCE SESSIONS COMPREHENSIVELY.
            </p>
          </div>
        </div>

        {/* Detailed Spec Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-slate-950 text-slate-100 rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6 border border-slate-900">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3 text-white font-sans">
              <Sparkles className="text-amber-450 text-amber-400 font-sans" /> Recovery Integration Benefits
            </h2>
            <ul className="space-y-4 font-sans">
              {features.map((feat, index) => (
                <li key={index} className="flex gap-3">
                  <div className="bg-slate-900 p-2.5 text-amber-500 shrink-0 font-bold leading-none h-10 w-10 flex items-center justify-center rounded-lg border border-slate-800 font-sans">✓</div>
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
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-850">
                <ClipboardList className="text-slate-700 font-sans" /> Supplemental Recovery Specs
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
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-4 font-sans">
              <h2 className="text-xl font-bold flex items-center gap-2 text-slate-850">
                <Heart className="text-rose-500 fill-rose-500 w-5 h-5 font-sans" /> Athlete Experience Points
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
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Optimized 7.4g full specter EAA matrices build muscle tissue successfully</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Substantial 3g leucine payload unleashes rapid cellular protein synthesis</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Integrated electrolytes keep hard muscles perfectly hydrated post-workout</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Ultra-clean, sugar-free profile acts as an excellent fasting-friendly support</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Dissolves thoroughly and cleanly inside any typical shaker bottle instantly</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50/25 border border-amber-500/15 p-8 rounded-3xl space-y-4 shadow-sm animate-fade-in font-sans">
            <h3 className="text-amber-900 font-black text-xl flex items-center gap-2 font-sans">
              ⚠️ Considerations
            </h3>
            <ul className="space-y-2.5 text-stone-705 text-sm font-sans">
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-amber-600 font-bold shrink-0 font-bold">●</span>
                <span>Requires daily hydration discipline to achieve full muscle volumizing benefits</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800 font-sans">
                <span className="text-amber-600 font-bold shrink-0 font-bold">●</span>
                <span>Free-form amino acids have a naturally distinct herbal aroma, requiring flavored matrix setup</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800 font-sans">
                <span className="text-amber-600 font-bold shrink-0 font-bold">●</span>
                <span>Average rating is slightly lower due to mild flavor intensity feedback from select lifters</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Clinical Insight Panel */}
        <div className="bg-amber-50/40 border border-slate-200 rounded-[2rem] p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4 text-center tracking-tight flex items-center justify-center gap-2 font-sans">
            <Activity className="text-amber-600 animate-pulse" /> Gold Standard Clinical Trials
          </h2>
          <div className="max-w-4xl mx-auto text-slate-705 space-y-4 text-sm font-sans text-center">
            <p className="font-semibold text-slate-800">
              In a rigorous peer-reviewed 12-week sports training study, participants supplementing their program with key compounds found inside Platinum 100% EAA+ achieved magnificent strength performance boosts:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mt-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs">
                <p className="text-4xl font-extrabold text-amber-600 mb-1">~40%</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-black leading-tight">Bench Press 5-Rep Max Improvement</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs">
                <p className="text-4xl font-extrabold text-amber-600 mb-1">~37%</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-black leading-tight">Leg Press 5-Rep Max Improvement</p>
              </div>
            </div>
            <p className="text-[10px] text-slate-400 italic mt-4">
              *Real physical outcomes vary based on individual workout schedules, general caloric setups, consistency levels, and hydration discipline.
            </p>
          </div>
        </div>

        {/* Suggested Use & Daily Protocols */}
        <div className="bg-slate-100 rounded-[2rem] p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2 justify-center font-sans tracking-tight">
            <Activity className="text-amber-600 animate-pulse font-sans" /> Suggested Use & Mixing Directions
          </h2>
          <div className="max-w-4xl mx-auto text-slate-705 space-y-6 text-sm lg:text-base leading-relaxed text-center font-sans">
            <p className="font-semibold text-slate-800 font-sans">
              💧 Shake or mix exactly <strong>1 scoop</strong> of MuscleTech Platinum 100% EAA+ with <strong>10 oz (300 mL)</strong> of cold ice water.
            </p>
            <p className="font-sans leading-relaxed text-sm text-stone-605">
              Consume <strong>1–2 times daily</strong>, ideally post-workout or intra-workout during physical training blocks.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-xs font-semibold uppercase text-slate-600 font-sans">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center justify-center gap-2">
                <Zap className="w-4 h-4 text-amber-500" /> Ideal fuel for heavy intra-workout training sets.
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center justify-center gap-2">
                <Droplet className="w-4 h-4 text-amber-600" /> Drink following weights to kick off tissue protein synthesis.
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-150 mb-12 font-sans shadow-xs">
          <h2 className="text-2xl font-black text-slate-950 mb-8 border-b pb-4 tracking-tight">
            Certified Customer Reviews (2)
          </h2>
          <div className="space-y-6">
            <div className="border border-slate-100 p-6 rounded-2xl bg-slate-50/50">
              <div className="flex text-amber-400 gap-1 mb-2">
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 text-slate-200" />
              </div>
              <p className="text-slate-900 font-bold mb-1">Excellent DOMS recovery blocker!</p>
              <p className="text-slate-600 text-xs">"Great recovery drink after workouts. Helps with muscle soreness and daily hydration levels throughout the physical tasks."</p>
            </div>

            <div className="border border-slate-100 p-6 rounded-2xl bg-slate-50/50">
              <div className="flex text-amber-400 gap-1 mb-2">
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 text-slate-200" />
                <Star className="w-4 h-4 text-slate-200" />
              </div>
              <p className="text-slate-900 font-bold mb-1">Good formula, slightly mild flavoring</p>
              <p className="text-slate-600 text-xs">"Good EAA formula and mixes relatively well in ice water. Recovering faster than before, but the flavor profile could be a bit stronger in my opinion."</p>
            </div>
          </div>
        </div>

        {/* Safety Disclaimer Box */}
        <div className="bg-slate-100 rounded-3xl p-6 border border-slate-200 shadow-xs max-w-4xl mx-auto mb-12 font-sans">
          <h3 className="text-slate-850 font-bold mb-2 flex items-center gap-2 text-xs uppercase tracking-wide">
            <Info className="w-4 h-4 text-slate-650" /> Medical Safety & Health Disclosures
          </h3>
          <p className="text-slate-505 text-xs font-sans leading-relaxed">
            Ensure that you do not exceed the recommended daily servings of EAA+. Supplying complete amino chains is important for cellular life, but does not substitute for structured protein programs, dynamic meal diets, or targeted medical treatments. Please construct clear clinical consultation with your primary sports doctor prior to implementing recovery programs, especially if you manage pre-existing renal conditions. These statements have not been screen-verified by the FDA; Platinum EAA+ is not formulated to treat, diagnose, cure, or prevent disease.
          </p>
        </div>

        {/* Final CTA Container */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-150 shadow-lg text-center max-w-4xl mx-auto font-sans">
          <h2 className="text-3xl font-extrabold text-slate-950 mb-4 tracking-tight">
            Stop Muscle Soreness & Master Performance Recovery Now
          </h2>
          <p className="text-stone-655 max-w-2xl mx-auto leading-relaxed text-md font-sans mb-8">
            The Platinum 100% EAA+ formulation is the standard in high-grade recovery, combining full Essential Amino profiles, clinical leucine dosage weights, hydration blends, and MuscleTech excellence.
          </p>
          <a 
            href="https://amzn.to/43SwrGV" 
            target="_blank" 
            rel="nofollow sponsored noopener" 
            className="inline-flex bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-850 text-white font-bold text-center px-12 py-4 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all gap-2 text-md"
          >
            <ShoppingCart className="w-5 h-5 text-white" /> Buy Platinum EAA+ on Amazon
          </a>
        </div>

      </div>
    </motion.div>
  );
}
