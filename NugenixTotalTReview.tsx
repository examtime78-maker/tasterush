import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Award, Heart, Sparkles, Activity, Info, ClipboardList, ShieldAlert, Zap } from 'lucide-react';

export default function NugenixTotalTReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2025/10/1-1.webp',
    'https://gymusastore.com/wp-content/uploads/2025/10/Nugenix-Total-T-Free-and-Total-Testosterone-Booster-Supplement-for-Men-2.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/10/Nugenix-Total-T-Free-and-Total-Testosterone-Booster-Supplement-for-Men-1.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Primary Brand Scribe', value: 'Nugenix' },
    { label: 'Key Hormone Targets', value: 'Free & Total Testosterone' },
    { label: 'Active Herbal Catalysts', value: 'Tesnor®, Testofen® Fenugreek Extract' },
    { label: 'Cellular Energy Enhancer', value: 'elevATP® (Ancient Peat & Apple Extract)' },
    { label: 'Essential Mineral Core', value: 'Zinc (as L-OptiZinc®) & Boron' },
    { label: 'Manufacturing Facility', value: 'cGMP certified, NSF-Certified Facility' },
    { label: 'Origin of Manufacture', value: 'Proudly Formulated in Salt Lake City, Utah, USA' }
  ];

  const features = [
    {
      title: '🩸 Dual Boost Free & Total Testosterone',
      desc: 'Formulated with clinically-backed Tesnor and Testofen to stimulate organic cellular hormone release, optimizing metabolic drive, cellular stamina, and core confidence.'
    },
    {
      title: '⚡ elevATP® Mitochondrial Power Hub',
      desc: 'Backed by 5 independent clinical investigations to naturally amplify key ATP cellular energy production without causing jitters, heart flutters, or caffeine crashes.'
    },
    {
      title: '💪 Optimized Lean Muscle Development',
      desc: 'Enables athletes, older lifters, and weight builders to synthesize plant proteins more effectively, supporting structural muscle hypertrophy and fat burning.'
    },
    {
      title: '🛡️ Premium Sourced Global Ingredients',
      desc: 'Assembled inside high-standard NSF facilities with strict testing protocols, avoiding useless fillers, chemical stimulants, or proprietary mystery blends.'
    },
    {
      title: '🎯 Critical Mineral Support Matrix',
      desc: 'Equipped with highly bioavailable zinc and Boron to actively defend against androgen receptors binding, allowing high rates of free circulating hormones.'
    },
    {
      title: '🌟 Enhanced Performance & Intimate Vitality',
      desc: 'Boosts blood circulation pathways and supports core physical stamina to enhance intimate physical vigor and general male confidence.'
    }
  ];

  const highlights = [
    'Clinically validated daily dosages of high-grade Tesnor & elevATP',
    'Supports incredible cellular metabolic rate spikes and athletic output',
    'Stimulant-free formula prevents energy crashes, sleeping issues, or jitters',
    'Outstanding reputation with certified clean USA production lines',
    'Implements bioavailable microelements allowing swift digestive assimilation',
    'Vastly improves body composition goals when paired with regular weight lifts'
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-stone-50 min-h-screen text-slate-900 font-sans pb-32"
    >
      {/* Promo banner */}
      <div className="bg-slate-950 text-white text-center py-3 text-xs font-black px-4 tracking-wider shadow-md uppercase">
        ⚡ LIBIDO & HORMONAL BALANCE: Nugenix Total-T Stimulant-Free Vitality Booster. Direct Amazon Route.
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
                  alt="Nugenix Total-T Testosterone Booster" 
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-slate-900 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider shadow-sm">
                  STIMULANT FREE
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-slate-50 p-1 transition-all ${activeImg === img ? 'border-amber-600 shadow-md' : 'border-transparent opacity-75 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Nugenix Thumbnail ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-slate-200">
                  <Award className="w-3.5 h-3.5 text-slate-950" /> Award Winning Brand
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-950 tracking-tight font-sans">
                Nugenix Total-T <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-900 text-2xl md:text-3.5xl font-black block mt-1">Free & Total testosterone Booster</span>
              </h1>
              <p className="text-stone-605 font-semibold text-sm">Formulated for Male Stamina, Muscle Hypertrophy Support & Pure Mitochondrial elevATP® Energy</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-slate-200 text-slate-200" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">4.0 (1 Certified Customer Review)</span>
              </div>

              <div className="py-2 border-y border-stone-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-rose-600">$79.99</span>
                  <span className="text-xs bg-slate-100 text-slate-900 font-extrabold px-3 py-1 rounded-md ml-3">Clinically Tested Formula</span>
                </div>
              </div>

              <p className="text-stone-605 leading-relaxed text-sm md:text-base font-sans">
                Regain your physiological edge and unleash ultimate daily performance with the elite <strong>Nugenix Total-T Hormone Booster Supplement for Men</strong>. Intentionally designed to avoid hyper-stimulant jitter cycles, this premium formula pairs high-potency zinc, Boron, and Testofen® with clinically validated dose-weights of Tesnor® and ancient-peat elevATP®. Perfect for aging lifters, metabolic builders, and busy professionals needing high energy output, it is the standard in endocrine nutrition.
              </p>

              <div className="pt-4">
                <a 
                  href="https://amzn.to/4et3Qy4" 
                  target="_blank" 
                  rel="nofollow sponsored noopener" 
                  className="bg-gradient-to-r from-[#ff9900] to-[#ffb84d] hover:from-[#e68a00] hover:to-[#e6a540] text-slate-950 font-bold text-center px-10 py-5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-lg"
                >
                  <ShoppingCart className="w-5 h-5 text-slate-950" /> Purchase on Amazon
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Dynamic Structural integrity Description Panel */}
        <div className="bg-slate-950 text-slate-100 rounded-[2rem] p-8 md:p-12 border border-slate-900 shadow-xl mb-12">
          <h2 className="text-3xl font-extrabold text-white text-center mb-6 tracking-tight">
            Endocrine Synergy: Free vs. Bound Testosterone Science
          </h2>
          <div className="max-w-4xl mx-auto text-slate-350 text-center space-y-6 text-sm lg:text-base leading-relaxed">
            <p>
              Up to 98% of circulating testosterone in the human male body can remain scientifically bound to Sex Hormone-Binding Globulin (SHBG), rendering it completely inactive for muscle protein synthesis and daily physical drive. Nugenix Total-T targets this issue directly. Its advanced clinical mineral co-factors and Tesnor herbal extracts help to displace bound carriers, dramatically raising free active circulating androgens.
            </p>
            <p className="text-xs text-amber-400 leading-relaxed font-sans font-bold uppercase tracking-wider">
              ★ Utilizes 100% natural catalysts to fuel cellular energy pathways securely without subsequent hormonal back-firing.
            </p>
          </div>
        </div>

        {/* Detailed Spec Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-slate-950 text-slate-100 rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6 border border-slate-900">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3 text-white">
              <Sparkles className="text-amber-450 text-amber-400" /> Active Ingredient Roles
            </h2>
            <ul className="space-y-4">
              {features.map((feat, index) => (
                <li key={index} className="flex gap-3">
                  <div className="bg-slate-900 p-2.5 text-amber-500 shrink-0 font-bold leading-none h-10 w-10 flex items-center justify-center rounded-lg border border-slate-800">✓</div>
                  <div>
                    <h4 className="font-bold text-white text-base font-sans">{feat.title}</h4>
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
                <ClipboardList className="text-slate-700" /> Supplemental Ingredient Breakdown
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
              <h2 className="text-xl font-bold flex items-center gap-2 text-slate-850">
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
            <ul className="space-y-2.5 text-stone-705 text-sm">
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Dual free and total androgen triggers maximize muscle growth rates</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>elevATP® core formulation naturally stimulates performance without jitters</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Stimulant-free model guarantees safe ingestion at any hour of the day</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Highly bioavailable minerals directly block active SHBG bind points</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Excellent US-manufactured assembly inside certified cGMP installations</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50/25 border border-amber-500/15 p-8 rounded-3xl space-y-4 shadow-sm">
            <h3 className="text-amber-900 font-black text-xl flex items-center gap-2">
              ⚠️ Considerations
            </h3>
            <ul className="space-y-2.5 text-stone-705 text-sm">
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-amber-600 font-bold shrink-0 font-bold">●</span>
                <span>Requires consecutive daily consumption for 4-8 weeks to realize peak output</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800 font-sans">
                <span className="text-amber-600 font-bold shrink-0 font-bold">●</span>
                <span>Does not contain active synthetic hormones; relies purely on natural booster triggers</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800 font-sans">
                <span className="text-amber-600 font-bold shrink-0 font-bold">●</span>
                <span>Premium targeted ingredients carry a slightly higher nutritional investment standard</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Nutritional Verification Section */}
        <div className="bg-slate-100 rounded-[2rem] p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-slate-950 mb-6 flex items-center gap-2 justify-center font-sans tracking-tight">
            <Activity className="text-amber-600 animate-pulse" /> Verified Athlete Case Application
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center text-sm font-sans">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-between shadow-xs">
              <div>
                <p className="font-extrabold text-amber-700 text-base mb-2">⚡ Natural Vitality & Focus</p>
                <p className="text-stone-605 leading-relaxed text-xs">Wake up energized and clear-headed. elevATP® works with your mitochondria to elevate physical oxygen levels throughout the workday.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-between shadow-xs">
              <div>
                <p className="font-extrabold text-amber-700 text-base mb-2">💪 Gym Hypertrophy Spikes</p>
                <p className="text-stone-605 leading-relaxed text-xs">Accelerate structural muscle fiber recovery. High free-testosterone levels enable rapid protein consolidation post weight training.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-between shadow-xs">
              <div>
                <p className="font-extrabold text-amber-700 text-base mb-2">🌱 Intimate Confidence & Vigor</p>
                <p className="text-stone-605 leading-relaxed text-xs">Maintain dynamic blood flow and confidence. Support active hormonal processes required for peak male health.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Disclaimer Box */}
        <div className="bg-slate-100 rounded-3xl p-6 border border-slate-200 shadow-xs max-w-4xl mx-auto mb-12">
          <h3 className="text-slate-850 font-bold mb-2 flex items-center gap-2 text-xs uppercase tracking-wide">
            <Info className="w-4 h-4 text-slate-650" /> Endocrine Safety & Nutritional Disclosure
          </h3>
          <p className="text-slate-505 text-xs font-sans leading-relaxed">
            Ensure that you do not exceed the recommended daily dose of this booster. Nugenix Total-T is an ultra-premium natural dietary supplement, not formulated as an anabolic steroid substitute, endocrine replacement therapy, or medication for medical conditions. Please consult with a board-certified endocrinologist or physician prior to establishing active daily supplement routines, especially if taking prescriptions.
          </p>
        </div>

        {/* Final CTA Container */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-150 shadow-lg text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-950 mb-4 tracking-tight">
            Unlock Peak Male Potential and Mitochondrial Drive Today
          </h2>
          <p className="text-stone-655 max-w-2xl mx-auto leading-relaxed text-md font-sans mb-8">
            Nugenix Total-T brings dual testosterone booster pathways, Testofen® fenugreek extracts, mineral co-factor support, and zero toxic chemical stimulatory setups standard. Rise to your athletic expectations.
          </p>
          <a 
            href="https://amzn.to/4et3Qy4" 
            target="_blank" 
            rel="nofollow sponsored noopener" 
            className="inline-flex bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-850 text-white font-bold text-center px-12 py-4 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all gap-2 text-md"
          >
            <ShoppingCart className="w-5 h-5 text-white" /> Get Nugenix Total-T on Amazon
          </a>
        </div>

      </div>
    </motion.div>
  );
}
