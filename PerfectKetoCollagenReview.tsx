import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Award, Heart, Sparkles, Activity, Info, ClipboardList, Brain, Coffee, Zap } from 'lucide-react';

export default function PerfectKetoCollagenReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2025/09/perfect-keto-Grass-Fed-Collagen-Peptides-MCT-Brain-Boost-1.webp',
    'https://gymusastore.com/wp-content/uploads/2025/09/perfect-keto-Grass-Fed-Collagen-Peptides-MCT-Brain-Boost-3.webp',
    'https://gymusastore.com/wp-content/uploads/2025/09/perfect-keto-Grass-Fed-Collagen-Peptides-MCT-Brain-Boost-2.webp'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Source Integrity', value: '100% Grass-Fed Bovine Collagen' },
    { label: 'Brain Boosting Compound', value: 'Medium Chain Triglyceride (MCT) Oil Powder' },
    { label: 'Carb count per Serving', value: '0g Net Carbs' },
    { label: 'Sweetener / Sugar', value: 'Sugar-Free, No Artificial Additives' },
    { label: 'Solubility Standard', value: 'Agglomerated Powder (Instant dissolution)' },
    { label: 'Allergen Profile', value: 'Gluten-Free, Dairy-Free, Soy-Free' },
    { label: 'Primary Brand Scribe', value: 'Perfect Keto' }
  ];

  const features = [
    {
      title: '🐄 Premium 100% Grass-Fed Collagen Peptides',
      desc: 'Provides highly bioavailable Type I and Type III collagen hydrolysate to support cellular skin repair, stronger nail layers, thicker hair shafts, and structural joint cartilage health.'
    },
    {
      title: '🧠 Pure MCT (Medium Chain Triglycerides) Brain Boost',
      desc: 'Infused with healthy fats that rapidly convert into clean ketone body energy inside the liver, bypassing standard carb pathways to deliver instant mental focus and cognitive clarity.'
    },
    {
      title: '🥑 Perfect Keto & Paleo Macro Harmony',
      desc: 'Completely free of artificial sweeteners, soy, gluten, or dairy. Formulated specifically to prevent blood glucose spikes, making it an ideal companion for low-carb lifestyles.'
    },
    {
      title: '☕ Effortless Solubility & Hot-Cold Versatility',
      desc: 'Formulated to blend completely into coffee, smoothies, shakes, baking recipes, or desserts without creating annoying clumps, gritty residues, or heavy separation.'
    },
    {
      title: '🛡️ Structural Joint, Cartilage, & Gut Care',
      desc: 'Naturally supplies essential amino acids like glycine, proline, and hydroxyproline that help repair intestinal lining barriers and cushion worn-down skeletal joints.'
    },
    {
      title: '⚡ Clean Sustainable Energy (No Caffeine Crash)',
      desc: 'Unlike standard caffeinated pre-workouts or high-carb energy drinks, the MCT-to-Ketone conversion cycle delivers baseline stamina and mental focus without jitters or fatigue drops.'
    }
  ];

  const highlights = [
    'Combines optimal cosmetic beauty benefits with intense cognitive performance focus',
    'Superb, buttery-smooth mixability into black coffee, acting as a clean keto creamer',
    'Carefully sourced exclusively from grass-fed and pasture-raised cattle',
    'No artificial fillers, fibers, junk binding agents, or sugar compounds',
    'Great support block for active athletes recovering from structural joint wear',
    'Independently tested for purity, quality assurance, and allergen safety'
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-stone-50 min-h-screen text-slate-900 font-sans pb-32"
    >
      {/* Top Banner */}
      <div className="bg-slate-950 text-white text-center py-3 text-xs font-black px-4 tracking-wider shadow-md uppercase">
        🧠 CLEAN BODY & BRAIN SYNERGY: Perfect Keto Premium Grass-Fed Collagen + MCT Powder. Fast Amazon Checkout.
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
                  alt="Perfect Keto Collagen Peptides & MCT Brain Boost" 
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-slate-950 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider shadow-sm flex items-center gap-1">
                  <Brain className="w-3.5 h-3.5 text-amber-400" /> KETO & COGNITION
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-slate-50 p-1 transition-all ${activeImg === img ? 'border-amber-600 shadow-md' : 'border-transparent opacity-75 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Perfect Keto Thumbnail ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-slate-200">
                  <Award className="w-3.5 h-3.5 text-slate-950" /> Premium Wellness Brand
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-950 tracking-tight font-sans">
                Perfect Keto <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-950 text-2xl md:text-3.5xl font-black block mt-1">Collagen & MCT Brain Boost</span>
              </h1>
              <p className="text-stone-605 font-semibold text-sm font-sans px-0.5">Grass Fed Collagen Hydrolysate paired with Medium Chain Triglycerides for Cellular Restoration & Mental Energy</p>
              
              <div className="flex items-center gap-3 font-sans">
                <div className="flex text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-slate-200 text-slate-200" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">4.0 (1 Certified Customer Review)</span>
              </div>

              <div className="py-2 border-y border-stone-100 font-sans">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-rose-600">$43.99</span>
                  <span className="text-xs bg-slate-100 text-slate-900 font-extrabold px-3 py-1 rounded-md ml-3">Clean Bioavailable Peptides</span>
                </div>
              </div>

              <p className="text-stone-605 leading-relaxed text-sm md:text-base font-sans">
                Revitalize structural body systems and unlock clean, long-lasting mental stamina using the award-winning <strong>Perfect Keto Grass Fed Collagen Peptides & MCT Brain Boost</strong>. Purposefully formulated to feed physical beauty systems (such as hair volume, glowing skin moisture, and joint elasticity) while supporting deep cognitive clarity, this dual-action formula harnesses raw pasture-raised bovine collagen and pristine medium-chain triglycerides. Simple, delicious, and easy to dissolve, it is the standard in ketogenic structural care.
              </p>

              <div className="pt-4 font-sans">
                <a 
                  href="https://amzn.to/3SrqlL9" 
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
            The Double Synergy Solution: Body, Beauty & Brain Performance
          </h2>
          <div className="max-w-4xl mx-auto text-slate-350 text-center space-y-6 text-sm lg:text-base leading-relaxed">
            <p>
              Standard collagen powders only supply active amino acids to rebuild cartilage, nails, or skin layers—but provide zero cognitive or metabolic benefits. Perfect Keto breaks this mold. By blending pristine hydrolyzed bovine collagen peptides directly with premium <strong>Medium Chain Triglyceride (MCT)</strong> powder, your liver gains a rapid, sugar-free fat substrate that efficiently metabolizes into active ketones. This delivers a reliable mental focus "creamer" effect that preserves fasting states and promotes sustainable energy.
            </p>
            <p className="text-xs text-amber-400 leading-relaxed font-sans font-bold uppercase tracking-wider">
              ★ ZERO ADDED SUGARS, NO CORN STARCHES OR GLYCO-SPIKING FILLERS — DESIGNED AND BUILT FOR PURE MOLECULAR METABOLIC TRUTHS.
            </p>
          </div>
        </div>

        {/* Detailed Spec Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-slate-950 text-slate-100 rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6 border border-slate-900">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3 text-white font-sans">
              <Sparkles className="text-amber-450 text-amber-400 font-sans" /> Key Benefit Spheres
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
                <ClipboardList className="text-slate-700 font-sans" /> Supplemental Nutrition Specs
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
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Dual-action formula targets joint structure, hair, nails, skin, and core cognition</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Supplies highly purified MCT oil powder that acts as a quick-acting brain fuel</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Outstanding mixability in morning hot coffee with zero clumping or sand-like texture</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Agglomerated sugar-free composition prevents unwanted blood glucose or insulin spikes</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Clean label structure completely avoids dairy, gluten, soy, artificial flavors, or filler fibers</span>
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
                <span>Requires consecutive daily consumption to allow collagen peptide chains to fully saturate joint tissues</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800 font-sans">
                <span className="text-amber-600 font-bold shrink-0 font-bold">●</span>
                <span>Unflavored/Standard keto variants contain negligible carbs but may carry a mild natural bovine peptide note</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800 font-sans">
                <span className="text-amber-600 font-bold shrink-0 font-bold">●</span>
                <span>Contains active MCT fats—individuals with highly sensitive digestive tracts should start with half-scoops first</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Suggested Use & Daily Protocols */}
        <div className="bg-slate-100 rounded-[2rem] p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2 justify-center font-sans tracking-tight">
            <Activity className="text-amber-600 animate-pulse font-sans" /> Suggested Use & Coffee Blend Protocol
          </h2>
          <div className="max-w-4xl mx-auto text-slate-705 space-y-6 text-sm lg:text-base leading-relaxed text-center font-sans">
            <p className="font-semibold text-slate-800 font-sans">
              ☕ Mix exactly <strong>1 scoop</strong> of Perfect Keto Collagen & MCT with <strong>8-12 oz</strong> of warm coffee, tea, smoothies, nut milk, or keto baking recipes.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-xs font-semibold uppercase text-slate-600 font-sans">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center justify-center gap-2">
                <Coffee className="w-4 h-4 text-amber-700" /> Great as a bulletproof coffee companion.
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center justify-center gap-2">
                <Zap className="w-4 h-4 text-amber-500" /> Drink over morning typing blocks to maximize ketone focus.
              </div>
            </div>
          </div>
        </div>

        {/* Safety Disclaimer Box */}
        <div className="bg-slate-100 rounded-3xl p-6 border border-slate-200 shadow-xs max-w-4xl mx-auto mb-12 font-sans">
          <h3 className="text-slate-850 font-bold mb-2 flex items-center gap-2 text-xs uppercase tracking-wide">
            <Info className="w-4 h-4 text-slate-650" /> Health, Beauty, & Fasting Disclosures
          </h3>
          <p className="text-slate-505 text-xs font-sans leading-relaxed">
            Perfect Keto Grass Fed Collagen Peptides & MCT Brain Boost is formulated as a pure wellness dietary supplement, not as an endocrine medicine or synthetic hormone compound. Consult with your private doctor or specialist doctor before incorporating new high-density fatty supplements if you are managing cardiovascular conditions, elevated serum lipid measurements, or gut absorptive sensitivities. These statements have not been screened or validated by the FDA; this dietary blend is not formulated to diagnose, cure, mitigate, or prevent chronic disease processes.
          </p>
        </div>

        {/* Final CTA Container */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-150 shadow-lg text-center max-w-4xl mx-auto font-sans">
          <h2 className="text-3xl font-extrabold text-slate-950 mb-4 tracking-tight">
            Unlock Full Bio-Beauty Power & Immediate Ketone Energy Today
          </h2>
          <p className="text-stone-655 max-w-2xl mx-auto leading-relaxed text-md font-sans mb-8">
            The Perfect Keto formulation is the golden bridge between pasture-raised structural amino profiles and clean, liver-derived energy pathways. Advance your day.
          </p>
          <a 
            href="https://amzn.to/3SrqlL9" 
            target="_blank" 
            rel="nofollow sponsored noopener" 
            className="inline-flex bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-850 text-white font-bold text-center px-12 py-4 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all gap-2 text-md"
          >
            <ShoppingCart className="w-5 h-5 text-white" /> Get Perfect Keto Collagen + MCT on Amazon
          </a>
        </div>

      </div>
    </motion.div>
  );
}
