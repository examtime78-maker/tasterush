import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Award, Heart, Sparkles, Activity, Info, ClipboardList, Dumbbell, Zap, Candy } from 'lucide-react';

export default function AllmaxCreatineGummiesReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2025/09/allmax-creatine-gummies-1.webp',
    'https://gymusastore.com/wp-content/uploads/2025/09/allmax-creatine-gummies-2.webp',
    'https://gymusastore.com/wp-content/uploads/2025/09/allmax-creatine-gummies-3.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Servings Per Container', value: '30 Servings' },
    { label: 'Creatine Potency Per Gummy', value: '1,250 mg' },
    { label: 'Daily Serving Yield (3 Gummies)', value: '3,750 mg Ultrapure Monohydrate' },
    { label: 'Sweetener Integrity', value: '100% Sugar-Free Formulation' },
    { label: 'Flavor Profile', value: 'Tropical Fruit Punch' },
    { label: 'Gelling Matrix', value: 'Pectin-Free Gel (Advanced Cold Tech)' },
    { label: 'Quality Assurance', value: 'Independently Third-Party Lab Tested' },
    { label: 'Primary Brand Scribe', value: 'ALLMAX Nutrition' }
  ];

  const features = [
    {
      title: '💪 High-Potency Creatine Monohydrate',
      desc: 'Each gummy delivers 1,250 mg of ultrapure creatine monohydrate, scientifically proven to fuel ATP cellular energy, amplify intense output strength, and accelerate muscular recovery.'
    },
    {
      title: '🧪 Advanced Low-Temperature Tech',
      desc: 'Utilizes a revolutionary proprietary cold-processing method with a pectin-free gelling agent to prevent the extreme high heat that breaks down active creatine into inactive creatinine.'
    },
    {
      title: '🍬 100% Sugar-Free Formula',
      desc: 'Formulated specifically for athletes, bodybuilders, and health-conscious individuals monitoring caloric or insulin intake, keeping glycemic levels completely baseline.'
    },
    {
      title: '🌴 Convenient Tropical Taste',
      desc: 'Avoid dry clumpy powders, chalky shakers, or messy scales. Enjoy delicious, chewy, grab-and-go travel convenience in a refreshing Tropical Fruit Punch flavor.'
    },
    {
      title: '✅ Independent Third-Party Screening',
      desc: 'Every single assembly batch goes through unbiased third-party laboratory verification for heavy metals, microbial counts, and precise active creatine label claims.'
    },
    {
      title: '⚡ Instant ATP Cellular Resynthesis',
      desc: 'Quickly replenishes active muscular phosphocreatine stores during high-intensity intervals, facilitating massive explosive sprint power and structural hypertrophy.'
    }
  ];

  const highlights = [
    'Outstandingly simple grab-and-go convenience with no mixing required',
    'Mouth-watering Tropical Fruit Punch flavor satisfies sweet cravings guilt-free',
    'Advanced cold-cure gelling prevents early active substance degradation',
    'Great addition for active travelers, office gym-goers, or lifestyle athletes',
    'Superb solubility on physical absorption compared to heavy raw powder particles',
    'Ensured purity standard backed by ALLMAX Nutrition\'s gold quality stamp'
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-stone-50 min-h-screen text-slate-900 font-sans pb-32"
    >
      {/* Top Banner */}
      <div className="bg-slate-950 text-white text-center py-3 text-xs font-black px-4 tracking-wider shadow-md uppercase">
        🍬 REVOLUTIONARY CREATINE CHEWS: ALLMAX Sugar-Free 1,250mg Performance Gummies. Secure Affiliate Route.
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
                  alt="Allmax Creatine Gummies" 
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-slate-950 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider shadow-sm flex items-center gap-1">
                  <Candy className="w-3.5 h-3.5 text-amber-400" /> SUGAR FREE
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-slate-50 p-1 transition-all ${activeImg === img ? 'border-amber-600 shadow-md' : 'border-transparent opacity-75 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Creatine Thumbnail ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-slate-200">
                  <Award className="w-3.5 h-3.5 text-slate-950" /> Premium Brand Innovator
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-950 tracking-tight font-sans">
                ALLMAX Creatine <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-950 text-2xl md:text-3.5xl font-black block mt-1">Ultrapure Creatine Gummies</span>
              </h1>
              <p className="text-stone-605 font-semibold text-sm font-sans">No Shakers. No Choking Powders. Just 1,250mg of Pure Cellular ATP Fire Per Gummy.</p>
              
              <div className="flex items-center gap-3 font-sans">
                <div className="flex text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-slate-200 text-slate-200" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">4.00 (1 Verified Analytical Review)</span>
              </div>

              <div className="py-2 border-y border-stone-100 font-sans">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-rose-600">$39.99</span>
                  <span className="text-xs bg-slate-100 text-slate-900 font-extrabold px-3 py-1 rounded-md ml-3">Pectin-Free Cold Gelled</span>
                </div>
              </div>

              <p className="text-stone-605 leading-relaxed text-sm md:text-base font-sans">
                Maximize weight-room power and accelerate muscular hypertrophy using the spectacular, delicious <strong>ALLMAX Nutrition Creatine Gummies</strong>. Intentionally engineered to resolve the grainy mess, bulky jars, and gastrointestinal strain of standard raw creatine powders, each daily serving provides 3,750 mg of ultrapure creatine monohydrate. Crafted with a premium sugar-free Tropical Fruit Punch base, they let you satisfy muscle-building targets effortlessly.
              </p>

              <div className="pt-4 font-sans">
                <a 
                  href="https://amzn.to/3RJBmrb" 
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
            The Cold-Technology Revolution: Preserving Active Monohydrate
          </h2>
          <div className="max-w-4xl mx-auto text-slate-350 text-center space-y-6 text-sm lg:text-base leading-relaxed">
            <p>
              Standard candy gummy factories melt structural ingredients down at massive boiling temperatures, which completely destroys the chemical stability of high-grade creatine molecules—turning them into useless waste bi-products. ALLMAX avoids this completely by utilizing state-of-the-art <strong>Low-Temperature Technology</strong> and a custom gelling layout. This protects and preserves the 1,250mg dose per chew for peak biological workout assimilation.
            </p>
            <p className="text-xs text-amber-400 leading-relaxed font-sans font-bold uppercase tracking-wider">
              ★ 100% SUGAR FREE & PALEO INCLUSIVE FORMULA TO COMPLEMENT EXTREME FAT-LOSS AND KETO PHASES.
            </p>
          </div>
        </div>

        {/* Detailed Spec Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-slate-950 text-slate-100 rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6 border border-slate-900">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3 text-white">
              <Sparkles className="text-amber-450 text-amber-400" /> Key Product Advantages
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
                <ClipboardList className="text-slate-700" /> Ingredient & Supplemental Breakdown
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
                <span>Incredibly convenient portable format ideal for travel, offices, or campus life</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>100% Sugar-free, eliminating unwanted caloric intake and insulin spikes completely</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Cold-processing technology reliably preserves active chemical monohydrate structure</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>High-grade 1,250mg dosage density lets you intake 3.75g of pure creatine in just 3 chews</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Delicious Tropical Fruit Punch flavor satisfies sweet tooth guilt-free</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50/25 border border-amber-500/15 p-8 rounded-3xl space-y-4 shadow-sm animate-fade-in">
            <h3 className="text-amber-900 font-black text-xl flex items-center gap-2">
              ⚠️ Considerations
            </h3>
            <ul className="space-y-2.5 text-stone-705 text-sm font-sans">
              <li className="flex gap-2 items-start font-medium text-slate-800 font-sans">
                <span className="text-amber-600 font-bold shrink-0">●</span>
                <span>Slightly higher investment cost per gram compared to generic, unflavored raw powders</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800 font-sans">
                <span className="text-amber-600 font-bold shrink-0">●</span>
                <span>Chewable layout requires consistent chewing and hydration following intake to optimalize gut absorption</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-amber-600 font-bold shrink-0">●</span>
                <span>Requires daily, consecutive consumption to keep skeletal muscle cells fully saturated</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Suggested Use & Daily Saturation Protocols */}
        <div className="bg-slate-100 rounded-[2rem] p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2 justify-center font-sans tracking-tight">
            <Activity className="text-amber-600 animate-pulse" /> Suggested Use & Saturation Protocol
          </h2>
          <div className="max-w-4xl mx-auto text-slate-705 space-y-6 text-sm lg:text-base leading-relaxed text-center font-sans">
            <p className="font-semibold text-slate-800">
              🍬 Take exactly <strong>3 gummies daily</strong> (totalling 3,750 mg) at any hour to support muscle volume, strength development, ATP energy synthesis, and athletic recovery.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-xs font-semibold uppercase text-slate-600">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                💧 Remember to consume at least 12 oz of water together for digestive comfort.
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                🏋️‍♂️ Pair with structured strength training to achieve peak muscle hypertrophy.
              </div>
            </div>
          </div>
        </div>

        {/* Safety Disclaimer Box */}
        <div className="bg-slate-100 rounded-3xl p-6 border border-slate-200 shadow-xs max-w-4xl mx-auto mb-12">
          <h3 className="text-slate-850 font-bold mb-2 flex items-center gap-2 text-xs uppercase tracking-wide">
            <Info className="w-4 h-4 text-slate-650" /> Endocrine & Health Disclosures
          </h3>
          <p className="text-slate-505 text-xs font-sans leading-relaxed">
            This dietary performance product is not intended for individuals under 18 years of age. Please do not utilize if pregnant or nursing. Highly recommended to consult with your sports nutritionist or doctor prior to intake if you experience chronic kidney, renal, or metabolic health conditions. Maintain high general fluid hydration levels to ensure proper active muscle hydration processes. These statements have not been evaluated by the FDA; ALLMAX gummies are not formulated to diagnose, cure, or prevent disease.
          </p>
        </div>

        {/* Final CTA Container */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-150 shadow-lg text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-950 mb-4 tracking-tight">
            Elevate Your Skeletal Power and Structural Performance Now
          </h2>
          <p className="text-stone-655 max-w-2xl mx-auto leading-relaxed text-md font-sans mb-8">
            ALLMAX Nutrition Creatine Gummies deliver sugar-free ease, ultra-sterile third-party verification, 1,250mg density, and refreshing Tropical Fruit punch flavors standard. Upgrade your muscle saturation.
          </p>
          <a 
            href="https://amzn.to/3RJBmrb" 
            target="_blank" 
            rel="nofollow sponsored noopener" 
            className="inline-flex bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-850 text-white font-bold text-center px-12 py-4 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all gap-2 text-md"
          >
            <ShoppingCart className="w-5 h-5 text-white" /> Get ALLMAX Creatine Gummies on Amazon
          </a>
        </div>

      </div>
    </motion.div>
  );
}
