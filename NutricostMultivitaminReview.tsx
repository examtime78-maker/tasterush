import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Heart, Sparkles, Award, RotateCw, Activity, Info, ClipboardList, Flame, Check } from 'lucide-react';

export default function NutricostMultivitaminReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2025/11/Nutricost-Multivitamin-with-Probiotics-120-Vegetarian-Capsules-1.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Nutricost-Multivitamin-with-Probiotics-120-Vegetarian-Capsules-2.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Nutricost-Multivitamin-with-Probiotics-120-Vegetarian-Capsules-3.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Nutricost-Multivitamin-with-Probiotics-120-Vegetarian-Capsules-4.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Form Profile', value: 'Easy-to-swallow Vegetarian Capsules' },
    { label: 'Count & Sizing', value: '120 Veggie Capsules (60-Day Supply)' },
    { label: 'Probiotic Load', value: 'Multi-strain digestive health probiotics' },
    { label: 'Core Nutrients', value: 'A, C, D, E, B-Complex, Calcium, Zinc & Selenium' },
    { label: 'Special Certifications', value: 'Non-GMO, Soy-Free, Gluten-Free' },
    { label: 'Testing Regime', value: '3rd Party Tested, GMP Compliant Facility' },
    { label: 'Serving Suggestion', value: '2 Capsules Daily with water or food' }
  ];

  const features = [
    {
      title: '💊 Synergistic 2-in-1 Daily Formula',
      desc: 'Combines a powerful therapeutic multi-vitamin spectrum with premium digestive probiotics to maximize nutrient assimilation without multi-bottle expense.'
    },
    {
      title: '🌾 Clean Vegetarian Capsules',
      desc: 'Formulated completely inside plant-derived, fast-dissolving vegetarian wrappers. Zero bovine gelatin, zero soy, and non-GMO standard.'
    },
    {
      title: '🦠 Optimized Gut & Digestion Flora',
      desc: 'Injected with beneficial probiotic strains to continuously populate gut microbiomes, improving digestion and helping alleviate gastric bloating.'
    },
    {
      title: '⚡ Metobolic Energy & Immune Armor',
      desc: 'Rich in active Vitamin B-Complex, Vitamin C, Zinc, and Vitamin D3 to strengthen immune response pathways and optimize clean everyday clean cellular energy.'
    },
    {
      title: '🧪 Rigorous Third-Party Validation',
      desc: 'Every single batch undergoes rigorous standard testing for purity, ingredient concentration consistency, and heavy metal absolute elimination.'
    },
    {
      title: '🌿 Low-Allergen Sensitivity Focus',
      desc: 'A pure formula without hidden fillers, artificial colorants, dairy, or gluten, catering to highly sensitive modern digestion matrices.'
    }
  ];

  const benefitsOverview = [
    'Combines complete daily essential vitamins and active minerals',
    'Probiotic active cultures support gastrointestinal gut lining beauty',
    'Excellent 120 capsule volume matches an extensive 60-day run',
    'Highly bioavailable profiles facilitate rapid, seamless metabolism',
    'Provides superb everyday protection for cellular vitality and stress paths',
    'Perfect staple addition for home gyms, metabolic builders, and busy professionals'
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-emerald-50/10 min-h-screen text-slate-900 font-sans pb-32"
    >
      {/* Dynamic Sourcing Banner */}
      <div className="bg-emerald-950 text-emerald-100 text-center py-3 text-xs font-black px-4 tracking-wider shadow-md uppercase">
        🌿 2-in-1 Vitality Shield: Nutricost Multivitamin + Probiotics 120 Caps. Direct Verified Purchase link to Amazon.
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-12">
        <Link to="/" className="inline-flex items-center text-slate-500 hover:text-emerald-950 transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Review Hub
        </Link>

        {/* Product Showcase Container */}
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-emerald-100 mb-12">
          <div className="grid md:grid-cols-2 gap-12 p-8 md:p-12 items-start">
            
            {/* Gallery Section */}
            <div className="space-y-6">
              <div className="bg-emerald-50/20 rounded-3xl p-6 flex items-center justify-center border border-emerald-50/50 aspect-square overflow-hidden relative">
                <img 
                  src={activeImg} 
                  className="max-h-full max-w-full object-contain rounded-2xl duration-300 transition-all hover:scale-105" 
                  alt="Nutricost Multivitamin with Probiotics capsules" 
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-emerald-800 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider shadow-sm">
                  VITAMIN + PROBIOTIC
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-stone-50 p-1 transition-all ${activeImg === img ? 'border-emerald-700 shadow-md' : 'border-transparent opacity-75 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Nutricost Multivitamin Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-emerald-100 text-emerald-950 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-emerald-200">
                  <Award className="w-3.5 h-3.5 text-emerald-850" /> Gut Health & Immunity Dual Fuel
                </span>
                <span className="bg-green-100 text-green-850 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-emerald-950 tracking-tight font-sans">
                Nutricost <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-850 from-emerald-800 to-emerald-600 text-2xl md:text-3.5xl font-black block mt-1">Multivitamin with Probiotics</span>
              </h1>
              <p className="text-stone-600 font-semibold text-sm">Balanced Daily Micronutrient Spectrum + Advanced Gut Survival Flora</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-slate-200 text-slate-200" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">4.0 (1 Certified Purchase Review)</span>
              </div>

              <div className="py-2 border-y border-stone-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-rose-600">$11.16</span>
                  <span className="text-sm text-stone-400 line-through ml-2">$13.95</span>
                  <span className="text-xs bg-emerald-100 text-emerald-900 font-extrabold px-2.5 py-1 rounded-md ml-3">Save 20% Off List Price</span>
                </div>
              </div>

              <p className="text-stone-605 leading-relaxed text-sm md:text-base font-sans">
                Revitalize both metabolic fuel paths and digestion flora simultaneously with <strong>Nutricost Multivitamin with Probiotics</strong>. Offering a smart, professional-grade 2-in-1 architecture, standard daily vegetarian capsules deliver comprehensive wellness support. Designed to help fortify baseline cellular defenses, daily digestion matrices, steady energy release, and bone structure health, it provides pure supplemental luxury in a clean, high-density format.
              </p>

              <div className="pt-4">
                <a 
                  href="https://amzn.to/4nRzPuZ" 
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

        {/* Dynamic Digestive and Micronutrient Header Panel */}
        <div className="bg-emerald-950 text-emerald-100 rounded-[2rem] p-8 md:p-12 border border-emerald-900 shadow-xl mb-12">
          <h2 className="text-3xl font-extrabold text-white text-center mb-6 tracking-tight">
            Complete Essential Nutrition Matrix Meets Gut Protection
          </h2>
          <div className="max-w-4xl mx-auto text-emerald-250 text-center space-y-6 text-sm lg:text-base leading-relaxed">
            <p>
              Vitamins often fail to absorb optimally when gastrointestinal health is compromised. Nutricost bridges this biological chasm by co-delivering live probiotic microflora directly within the multivitamin dispersion profile to facilitate intestinal uptake.
            </p>
            <p className="text-xs text-yellow-400 leading-relaxed font-sans font-bold">
              ★ Maximized with clean, plant-derived vegetarian shells ensuring comfortable systemic digestion and minimum chemical toxicity trace risk.
            </p>
          </div>
        </div>

        {/* Two-Column Detail Blueprint Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-emerald-950 text-emerald-100 rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6 border border-emerald-900 text-emerald-300">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-emerald-900 pb-3 text-white">
              <Sparkles className="text-emerald-400" /> Clean Nutricost Features
            </h2>
            <ul className="space-y-4">
              {features.map((feat, index) => (
                <li key={index} className="flex gap-3">
                  <div className="bg-emerald-900 p-2.5 text-emerald-400 shrink-0 font-bold leading-none h-10 w-10 flex items-center justify-center rounded-lg border border-emerald-850">✓</div>
                  <div>
                    <h4 className="font-bold text-white text-base">{feat.title}</h4>
                    <p className="text-emerald-400 text-xs mt-0.5 leading-relaxed font-sans">{feat.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            {/* Technical Specifications */}
            <div className="bg-white rounded-3xl p-8 border border-emerald-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-850">
                <ClipboardList className="text-emerald-900" /> Supplement Nutrition Summary
              </h2>
              <div className="grid grid-cols-1 gap-y-3 font-semibold text-xs text-slate-655 font-sans">
                {specs.map((item, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-slate-50 last:border-0">
                    <span className="text-slate-400">{item.label}</span>
                    <span className="text-emerald-950 font-extrabold text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Users Love It Box */}
            <div className="bg-white rounded-3xl p-8 border border-emerald-100 shadow-sm space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2 text-slate-850">
                <Heart className="text-rose-500 fill-rose-500 w-5 h-5" /> Dual-Action Vitality Points
              </h2>
              <div className="grid grid-cols-1 gap-y-2 text-slate-705 text-xs font-semibold">
                {benefitsOverview.map((rate, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-emerald-50">
                    <span className="text-emerald-700 font-extrabold shrink-0">✔</span>
                    <span>{rate}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Pros vs. Considerations Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-emerald-50/20 border border-emerald-500/15 p-8 rounded-3xl space-y-4 shadow-sm">
            <h3 className="text-emerald-950 font-black text-xl flex items-center gap-2">
              👍 Pros & Strengths
            </h3>
            <ul className="space-y-2.5 text-stone-705 text-sm">
              <li className="flex gap-2 items-start">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Combined multivitamin structure and live bacteria cultures in one step</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Vastly improves digestive comfort, nutrient digestion and gut safety</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>100% vegetarian plant shell construction prevents animal gelatin allergies</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Generous 60-day capsule supply makes it highly cost-effective</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Soy-free, Gluten-free, and proudly constructed via GMP standards</span>
              </li>
            </ul>
          </div>

          <div className="bg-emerald-50/20 border border-emerald-500/15 p-8 rounded-3xl space-y-4 shadow-sm">
            <h3 className="text-emerald-950 font-black text-xl flex items-center gap-2">
              ⚠️ Considerations
            </h3>
            <ul className="space-y-2.5 text-stone-705 text-sm">
              <li className="flex gap-2 items-start">
                <span className="text-emerald-700 font-bold shrink-0">●</span>
                <span>Capsules must be maintained in dry environments to preserve live probiotics</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-emerald-700 font-bold shrink-0">●</span>
                <span>Best taken accompanied by lukewarm or cold liquids (hot beverages can degrade bacteria)</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-emerald-700 font-bold shrink-0">●</span>
                <span>Always requires consistent everyday dosing to experience maximal metabolic shift</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Easy Directions Dosage Routine */}
        <div className="bg-emerald-950/5 border border-emerald-900/10 rounded-[2rem] p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-emerald-950 mb-6 flex items-center gap-2 justify-center font-sans tracking-tight">
            <RotateCw className="text-emerald-700 w-6 h-6 animate-spin-slow" /> Suggested Daily Sourcing Protocol
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-center text-sm font-sans">
            <div className="bg-white p-6 rounded-2xl border border-emerald-100 flex flex-col justify-between shadow-xs">
              <div>
                <span className="bg-emerald-900 text-white font-extrabold w-10 h-10 rounded-full flex items-center justify-center mx-auto text-lg mb-4">1</span>
                <h4 className="font-bold text-emerald-950 text-base mb-2">Morning Intake Protocol</h4>
                <p className="text-stone-605 leading-relaxed text-xs">Ingest 2 vegetarian capsules daily, ideally during your breakfast window, alongside a clean glass of water to activate the nutrient metabolism cycle.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-emerald-100 flex flex-col justify-between shadow-xs">
              <div>
                <span className="bg-emerald-900 text-white font-extrabold w-10 h-10 rounded-full flex items-center justify-center mx-auto text-lg mb-4">2</span>
                <h4 className="font-bold text-emerald-950 text-base mb-2">Moisture & Temperature Caveats</h4>
                <p className="text-stone-605 leading-relaxed text-xs">Keep the secure lid tightly locked. Store in cool, dry cupboards, avoiding high steam places like bathrooms, to safeguard delicate cell viability.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Clinical Disclaimer Box */}
        <div className="bg-stone-100 rounded-3xl p-6 border border-stone-200 shadow-xs max-w-4xl mx-auto mb-12">
          <h3 className="text-slate-850 font-bold mb-2 flex items-center gap-2 text-sm uppercase tracking-wide">
            <Info className="w-4 h-4 text-stone-650" /> Purity standard & Health Disclaimer
          </h3>
          <p className="text-stone-505 text-xs font-sans leading-relaxed mt-1">
            Ensure you integrate dietary supplements responsibly under clinical health balance. Probiotics and essential multivitamins assist the human biological system build high defenses. Consult with authorized dietitians, registered wellness coaches, or primary healthcare professionals before initiating supplementation routines, particularly if you have active medical conditions.
          </p>
        </div>

        {/* Final CTA Container */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-stone-100 shadow-lg text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-950 mb-4 tracking-tight">
            Nourish Your Body and Gut in One Single Routine
          </h2>
          <p className="text-stone-655 max-w-2xl mx-auto leading-relaxed text-md font-sans mb-8">
            The Nutricost Multivitamin with Probiotic blend is the ultimate solution to balance micronutrient vitality and core digestion support. Formulated in vegetarian-friendly capsules using rigorous third-party validation standards.
          </p>
          <a 
            href="https://amzn.to/4nRzPuZ" 
            target="_blank" 
            rel="nofollow sponsored noopener" 
            className="inline-flex bg-gradient-to-r from-emerald-850 from-emerald-800 to-emerald-750 hover:from-emerald-900 hover:to-emerald-800 text-white font-bold text-center px-12 py-4 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all gap-2 text-md"
          >
            <ShoppingCart className="w-5 h-5 text-white" /> Get Nutricost Multivitamin on Amazon
          </a>
        </div>

      </div>
    </motion.div>
  );
}
