import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Award, Heart, Sparkles, Activity, Info, ClipboardList, Zap, ShieldCheck } from 'lucide-react';

export default function PostJymActiveMatrixReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2025/11/Post-JYM-Active-Matrix-Amino-Recovery-Powder-Pure-Creatine-HCL-BCAAs-Glutamine-Carnitine-Betaine-Taurine-for-Maximum-Strength-1.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Post-JYM-Active-Matrix-Amino-Recovery-Powder-Pure-Creatine-HCL-BCAAs-Glutamine-Carnitine-Betaine-Taurine-for-Maximum-Strength-2.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Post-JYM-Active-Matrix-Amino-Recovery-Powder-Pure-Creatine-HCL-BCAAs-Glutamine-Carnitine-Betaine-Taurine-for-Maximum-Strength-3.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Post-JYM-Active-Matrix-Amino-Recovery-Powder-Pure-Creatine-HCL-BCAAs-Glutamine-Carnitine-Betaine-Taurine-for-Maximum-Strength-4.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Servings Per Container', value: '30 Servings' },
    { label: 'Creatine Core', value: 'Pure Creatine HCL (High Solubility)' },
    { label: 'BCAA Ration Matrix', value: '3:1:1 Ratio (Targeted Muscle Synthesis)' },
    { label: 'Muscle Repair Aminos', value: 'Glutamine & Carnitine Tartrate' },
    { label: 'Hydration & Power Adaptogens', value: 'Betaine Anhydrous, Taurine & Black Pepper Extract' },
    { label: 'Transparency Guarantee', value: 'Zero Proprietary Blends (Fully Disclosed Label)' },
    { label: 'Primary Formulator', value: 'Dr. Jim Stoppani' },
    { label: 'Primary Brand Scribe', value: 'JYM Supplement Science' }
  ];

  const features = [
    {
      title: '💪 3:1:1 Complete BCAA Power Matrix',
      desc: 'Provides the muscle building blocks in an ideal 3:1:1 ratio, fueling protein translation directly in skeletal tissues to shut down catabolism following heavy lifts.'
    },
    {
      title: '⚡ Ultrapure Creatine HCl (Hydrochloride)',
      desc: 'Requires no loading phase and dissolves perfectly in water. Less cellular bloating and gut disruptions than monohydrate, while driving immediate ATP cellular regeneration.'
    },
    {
      title: '🔋 Muscle Repair Glutamine & Taurine',
      desc: 'Replenishes the body\'s most depleted amino acid stores. Accelerates glycogen replenishment, balances cellular osmotic hydration, and defends joint structures.'
    },
    {
      title: '🚀 Carnitine + Betaine Performance Catalyst',
      desc: 'L-Carnitine L-Tartrate aids cellular fat transportation to fuel energy production, while Betaine promotes exceptional cellular volume, power output, and hydration.'
    },
    {
      title: '🛡️ 100% Fully Transparent Label (No Secrecy)',
      desc: 'Zero cheap hidden multi-ingredient conglomerates. Every single active element is listed with clinical, evidence-backed dosages so you know exactly what enters your body.'
    },
    {
      title: '🧬 Formulated by Dr. Jim Stoppani',
      desc: 'Crafted systematically by a world-renowned sport physiologist, uniting state-of-the-art biochemistry discoveries to elevate cellular rehabilitation to elite heights.'
    }
  ];

  const highlights = [
    'Highly bioavailable Creatine HCl is extremely gentle on sensitive stomachs',
    'Noticeably drops Delayed Onset Muscle Soreness (DOMS) for quicker training returns',
    'Supports incredible cellular hydration and robust muscular pumps post-exercise',
    'Zero useless sugar binders, chemical coloring tricks, or trace synthetic stimulants',
    'Aggressive, fully-closed amino integration is perfect for heavy lifters & crossfitters',
    'Outstanding trust value validated by thousands of elite lifters worldwide'
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-stone-50 min-h-screen text-slate-900 font-sans pb-32"
    >
      {/* Top Banner */}
      <div className="bg-slate-950 text-white text-center py-3 text-xs font-black px-4 tracking-wider shadow-md uppercase">
        ⚡ COMPLETE ANABOLIC REBUILD: JYM Active Matrix Post-Workout Formula. Save 25% Off. Secure Amazon Link.
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
                  alt="Post JYM Active Matrix Recovery Powder" 
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-red-600 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider shadow-sm">
                  SAVE 25%
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-slate-50 p-1 transition-all ${activeImg === img ? 'border-amber-600 shadow-md' : 'border-transparent opacity-75 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Post JYM Thumbnail ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-slate-200">
                  <Award className="w-3.5 h-3.5 text-slate-950" /> Fully transparent Formula
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full font-sans">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-2xl md:text-4xl font-extrabold leading-tight text-slate-950 tracking-tight font-sans">
                Post JYM Active Matrix <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-955 text-xl md:text-2.5xl font-black block mt-2">Recovery & Strength Catalyst</span>
              </h1>
              <p className="text-stone-605 font-semibold text-sm font-sans">Dr. Jim Stoppani's Legendary 8-Ingredient Recovery Blend with Pure Creatine HCL, BCAAs, Carnitine & Betaine</p>
              
              <div className="flex items-center gap-3 font-sans">
                <div className="flex text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 text-slate-200" />
                  <Star className="w-5 h-5 text-slate-200" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">3.00 out of 5 (10 Athlete Reviews)</span>
              </div>

              <div className="py-2 border-y border-stone-100 font-sans">
                <div className="flex items-baseline gap-2.5">
                  <span className="text-4xl font-black text-rose-600">$33.74</span>
                  <span className="text-sm font-medium text-slate-400 line-through">$44.99</span>
                  <span className="text-xs bg-red-100 text-red-800 font-extrabold px-3 py-1 rounded-md ml-3">Save 25% Off</span>
                </div>
              </div>

              <p className="text-stone-605 leading-relaxed text-sm md:text-base font-sans">
                Crush muscular soreness and accelerate your post-training growth using the advanced, fully transparent <strong>Post JYM Active Matrix Amino Recovery Powder</strong>. Masterfully engineered by Dr. Jim Stoppani, this formula packs 8 clinically suggested active elements including premium BCAAs in a 3:1:1 recovery ratio, stomach-safe Creatine HCL, high-dose glutamine, fat-transporting Carnitine, Betaine, and Hydramatrix Taurine. Designed for serious gym-goers needing real cellular preservation with zero proprietary secrets.
              </p>

              <div className="pt-4 font-sans">
                <a 
                  href="https://amzn.to/4ogu62b" 
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
            The Science of Post-Workout Regeneration: Creatine HCl Advantage
          </h2>
          <div className="max-w-4xl mx-auto text-slate-350 text-center space-y-6 text-sm lg:text-base leading-relaxed">
            <p>
              Standard post-workout products rely on basic, poorly soluble creatine monohydrate which commonly causes stomach cramps, gas, and subcutaneous water bloat. Post JYM breaks this mold by incorporating premium <strong>Creatine Hydrochloride (HCl)</strong>. Creatine HCl bonds with hydrochloride groups, vastly increasing its acidity and water solubility. This lets your gut assimilate the power compound rapidly, directly flooding skeletal mitochondria to rebuild ATP stores with zero gastrointestinal delay.
            </p>
            <p className="text-xs text-amber-400 leading-relaxed font-sans font-bold uppercase tracking-wider">
              ★ TRANSPARENT DOSING CONSTELLATION: EVERY SINGLE COMPOUND IS LISTED EXPLICITLY TO DELIVER MAXIMUM CLINICAL COMPLIANCE.
            </p>
          </div>
        </div>

        {/* Detailed Spec Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-slate-950 text-slate-100 rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6 border border-slate-900">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3 text-white font-sans">
              <Sparkles className="text-amber-450 text-amber-400 font-sans" /> Key Ingredient Roles
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
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm font-sans">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-850">
                <ClipboardList className="text-slate-700 font-sans" /> Advanced JYM Science Specs
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
        <div className="grid md:grid-cols-2 gap-8 mb-12 font-sans">
          <div className="bg-emerald-50/20 border border-emerald-505 border-emerald-500/15 p-8 rounded-3xl space-y-4 shadow-sm">
            <h3 className="text-emerald-900 font-black text-xl flex items-center gap-2 font-sans">
              👍 Pros & Strengths
            </h3>
            <ul className="space-y-2.5 text-stone-705 text-sm font-sans">
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Optimized 8-ingredient matrix guarantees complete recovery with zero mystery filler</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Premium stomach-friendly Creatine HCl prevents bloating and abdominal cramps</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Includes Glutamine, Taurine, & Carnitine supporting rapid metabolic rejuvenation</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Strongly reduces post-training muscle soreness, enabling quicker gym consistency</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800 text-slate-900">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Vastly competitive value point representing a full 25% discount off standard retail pricing</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50/25 border border-amber-500/15 p-8 rounded-3xl space-y-4 shadow-sm animate-fade-in font-sans">
            <h3 className="text-amber-900 font-black text-xl flex items-center gap-2 font-sans">
              ⚠️ Considerations
            </h3>
            <ul className="space-y-2.5 text-stone-705 text-sm font-sans">
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-amber-600 font-bold shrink-0">●</span>
                <span>Daily consistent usage is mandatory to saturate intramuscular stores over 2 to 4 weeks</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800 font-sans">
                <span className="text-amber-600 font-bold shrink-0 font-bold">●</span>
                <span>Requires thorough mixing for 45-60 seconds due to heavy density active amino acids</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800 font-sans">
                <span className="text-amber-600 font-bold shrink-0 font-bold">●</span>
                <span>Several athletes reporting highly rapid metabolization wish for larger, heavy-duty tub sizes</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Suggested Use & Daily Protocols */}
        <div className="bg-slate-100 rounded-[2rem] p-8 md:p-12 mb-12 font-sans">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2 justify-center font-sans tracking-tight">
            <Activity className="text-amber-600 animate-pulse font-sans" /> Suggested Use & Athlete Protocol
          </h2>
          <div className="max-w-4xl mx-auto text-slate-705 space-y-6 text-sm lg:text-base leading-relaxed text-center font-sans">
            <p className="font-semibold text-slate-800 font-sans">
              💧 Mix exactly <strong>1 scoop</strong> of Post JYM Active Matrix with cold ice water immediately after training session to support post-workout muscle repair.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-xs font-semibold uppercase text-slate-600 font-sans">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center justify-center gap-2">
                <Zap className="w-4 h-4 text-amber-500" /> Best consumed within 30 minutes following workout shutdown.
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> Tested clean of banned substances for safe sporting use.
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-150 mb-12 font-sans shadow-xs">
          <h2 className="text-2xl font-black text-slate-950 mb-8 border-b pb-4 tracking-tight">
            Certified Customer Reviews (10 Ratings Summary)
          </h2>
          <div className="space-y-6 font-sans">
            <div className="border border-slate-100 p-6 rounded-2xl bg-slate-50/50 font-sans">
              <div className="flex text-amber-400 gap-1 mb-2">
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 text-slate-200" />
              </div>
              <p className="text-slate-900 font-bold mb-1">Incredible Soreness Blaster!</p>
              <p className="text-slate-600 text-xs leading-relaxed">"Honestly, recovery feels much faster and post-gym soreness is noticeably reduced after hard compound lift workouts. Jim Stoppani doesn\'t cheat his athletes!"</p>
            </div>

            <div className="border border-slate-100 p-6 rounded-2xl bg-slate-50/50 font-sans">
              <div className="flex text-amber-400 gap-1 mb-2">
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 text-slate-200" />
                <Star className="w-4 h-4 text-slate-200" />
              </div>
              <p className="text-slate-900 font-bold mb-1">Excellent Ingredients, Wish Tub Was Larger</p>
              <p className="text-slate-600 text-xs leading-relaxed">"Great ingredient profile and perfectly clean mixability, but I wish the tub size lasted longer for those on heavy multi-session split routines."</p>
            </div>
          </div>
        </div>

        {/* Safety Disclaimer Box */}
        <div className="bg-slate-100 rounded-3xl p-6 border border-slate-200 shadow-xs max-w-4xl mx-auto mb-12 font-sans">
          <h3 className="text-slate-850 font-bold mb-2 flex items-center gap-2 text-xs uppercase tracking-wide">
            <Info className="w-4 h-4 text-slate-650" /> Endocrine & Performance Safety Disclosures
          </h3>
          <p className="text-slate-505 text-xs font-sans leading-relaxed">
            This dietary recovery matrix is formulated exclusively for healthy individuals aged 18 and older. Please do not ingest if pregnant, planning to become pregnant, or nursing. Consulting with your physician or specialized medical specialist is highly advised if you are taking cardiovascular medication or managing structural kidney, liver, or renal conditions. Discontinue use immediately if rapid physiological flutters or breathing abnormalities occur. These statements have not been evaluated by the FDA; JYM science is not formulated to diagnose, cure, mitigate, or prevent health diseases.
          </p>
        </div>

        {/* Final CTA Container */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-150 shadow-lg text-center max-w-4xl mx-auto font-sans animate-fade-in">
          <h2 className="text-3xl font-extrabold text-slate-950 mb-4 tracking-tight">
            Elevate Muscle Repair & Speed Back Stronger Tomorrow
          </h2>
          <p className="text-stone-655 max-w-2xl mx-auto leading-relaxed text-md font-sans mb-8">
            The elite Post JYM Active Matrix formulation is built upon raw sports science truths. Escape the cheap proprietary blends and unlock 8 premium clinical catalysts safely.
          </p>
          <a 
            href="https://amzn.to/4ogu62b" 
            target="_blank" 
            rel="nofollow sponsored noopener" 
            className="inline-flex bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-850 text-white font-bold text-center px-12 py-4 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all gap-2 text-md"
          >
            <ShoppingCart className="w-5 h-5 text-white" /> Get Post JYM Active Matrix on Amazon
          </a>
        </div>

      </div>
    </motion.div>
  );
}
