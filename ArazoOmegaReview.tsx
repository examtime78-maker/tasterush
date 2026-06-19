import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Heart, Sparkles, Award, RefreshCw, Sparkle, Info, ClipboardList } from 'lucide-react';

export default function ArazoOmegaReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2026/02/Arazo-Nutrition-Wild-Caught-Omega-3-Fish-Oil1.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/02/Arazo-Nutrition-Wild-Caught-Omega-3-Fish-Oil2.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/02/Arazo-Nutrition-Wild-Caught-Omega-3-Fish-Oil3.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Product Sourcing Type', value: '100% Wild-Caught Deep Sea Fish Oil' },
    { label: 'Core Nutrients', value: 'High-Strength EPA (Eicosapentaenoic Acid) & DHA (Docosahexaenoic Acid)' },
    { label: 'Count & Delivery Form', value: 'Liquid-Filled Softgels' },
    { label: 'Flavor Protection', value: 'Burpless Natural Lemon Odor-Masking' },
    { label: 'Purification Quality', value: 'Multi-Stage Molecularly Distilled & Heavy Metal Tested' },
    { label: 'Allergen Profile', value: 'Gluten-Free, Dairy-Free, Non-GMO' },
    { label: 'Designed Intended Benefit', value: 'Heart Strength, Cognitive Brain Focus, Joint Cushioning & Immune Support' }
  ];

  const features = [
    {
      title: '🦈 100% Wild-Caught & Sustainable Sourcing',
      desc: 'Sourced purely from natural ocean fisheries using sustainable practices, capturing biologically rich omega lipid reserves for unmatched efficacy.'
    },
    {
      title: '💪 High-Potency EPA && DHA Delivery',
      desc: 'Delivers clinically active concentrations of essential fatty acids to fuel cardiac strength, brain neural elasticity, and joint lubrication.'
    },
    {
      title: '🍋 Burpless Citrus Lemon-Infused Taste',
      desc: 'Infused with clean natural lemon essence to fully eliminate the dreaded "fishy repeat" or unpleasant gastrointestinal reflux.'
    },
    {
      title: '🧬 Molecularly Distilled for Absolute Purity',
      desc: 'Processed using state-of-the-art state molecular vacuum distillation to completely eradicate mercury, PCBs, heavy metals, and toxins.'
    },
    {
      title: '🛡️ Joint Lubrication & Tissue Comfort',
      desc: 'Supports cartilage cushion health, joint structural flexibility, and post-workout inflammatory response recovery.'
    },
    {
      title: '🌿 Keto & Paleo Diet Compatible Companion',
      desc: 'A premium source of clean metabolic fats, helping low-carb keto or paleo purists maintain robust cellular membranes.'
    }
  ];

  const coreAesthetics = [
    'Pristine 100% wild-caught marine oil base',
    'Advanced burpless enteric coating with lemon finish',
    'High concentrations of essential EPA & DHA',
    'Third-party tested for mercury and toxic trace elements',
    'Supports cardiovascular, cognitive, and joint matrices',
    'Perfect addition to active everyday lipid wellness paths'
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-sky-50/10 min-h-screen text-slate-900 font-sans pb-32"
    >
      {/* Premium Sourcing Banner */}
      <div className="bg-sky-950 text-sky-100 text-center py-3 text-xs font-black px-4 tracking-wider shadow-md uppercase">
        🦈 PURE MARINE SOURCE: Arazo Nutrition Wild Caught Omega-3 Fish Oil. Premium Sourced Direct Route to Amazon.
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-12">
        <Link to="/" className="inline-flex items-center text-slate-500 hover:text-sky-950 transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Review Hub
        </Link>

        {/* Product Showcase Container */}
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-sky-100 mb-12">
          <div className="grid md:grid-cols-2 gap-12 p-8 md:p-12 items-start">
            
            {/* Gallery Section */}
            <div className="space-y-6">
              <div className="bg-sky-50/20 rounded-3xl p-6 flex items-center justify-center border border-sky-50/50 aspect-square overflow-hidden relative animate-fade-in">
                <img 
                  src={activeImg} 
                  className="max-h-full max-w-full object-contain rounded-2xl duration-305 transition-all hover:scale-105" 
                  alt="Arazo Nutrition Wild Caught Omega 3 Fish Oil" 
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-sky-900 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider shadow-sm">
                  100% WILD-CAUGHT
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-stone-50 p-1 transition-all ${activeImg === img ? 'border-sky-700 shadow-md' : 'border-transparent opacity-75 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Arazo Omega Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-sky-200">
                  <Award className="w-3.5 h-3.5 text-sky-900" /> Molecularly Distilled & Burpless
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-sky-950 tracking-tight font-sans">
                Arazo Nutrition <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-850 from-sky-800 to-sky-650 text-2xl md:text-3xl font-black block mt-1">Wild Caught Omega-3 Fish Oil</span>
              </h1>
              <p className="text-stone-600 font-semibold text-sm">Clinical Strength EPA & DHA Lipid Support with Burpless Lemon Coating</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-slate-200" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">4.0 (1 Verified Customer Review)</span>
              </div>

              <div className="py-2 border-y border-stone-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-rose-650 text-rose-600">$30.95</span>
                  <span className="text-xs bg-sky-100 text-sky-900 font-bold px-2.5 py-1 rounded-md ml-3">Premium Heavy Metal Free</span>
                </div>
              </div>

              <p className="text-stone-655 leading-relaxed text-sm md:text-base font-sans">
                Support your vital heart, cognitive, and joint pathways with the exceptional strength of <strong>Arazo Nutrition Wild Caught Omega-3 Fish Oil</strong>. Crafted specifically for wellness seekers who want therapeutic-level lipid profiles, each serving delivers clean, concentrated ocean EPA and DHA support. Bypassing common fish oil drawbacks, this burpless formula is flavored with a refreshing natural lemon essence for comfortable digestability.
              </p>

              <div className="pt-4">
                <a 
                  href="https://amzn.to/3RNDFsZ" 
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

        {/* Core Informative Intro Header */}
        <div className="bg-slate-900 text-stone-100 rounded-[2rem] p-8 md:p-12 border border-slate-880 shadow-xl mb-12">
          <h2 className="text-3xl font-extrabold text-white text-center mb-6 tracking-tight">
            Premium Wild caught Ocean Fatty Acids
          </h2>
          <div className="max-w-4xl mx-auto text-slate-300 text-center space-y-6 text-sm lg:text-base leading-relaxed">
            <p>
              Arazo Nutrition wild caught Omega-3 Fish Oil delivers high concentrations of pure EPA and DHA fatty acids. Essential lipids are crucial bio-building elements used by the human body to manage arterial elasticity, cell-membrane liquidity, neural electrical pathways, visual focus, and systemic immune strength.
            </p>
            <p className="text-xs text-sky-400 leading-relaxed font-sans font-bold">
              ★ Heavy-metal purified via advanced molecular vacuum distillation to bypass ocean toxic pollutants completely.
            </p>
          </div>
        </div>

        {/* Specifications & Key Benefits Details Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-slate-900 text-stone-100 rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6 border border-slate-850">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3 text-white">
              <Sparkles className="text-sky-450 text-sky-400" /> Arazo Nutrition Standard
            </h2>
            <ul className="space-y-4">
              {features.map((feat, index) => (
                <li key={index} className="flex gap-3">
                  <div className="bg-slate-800 p-2.5 text-sky-400 shrink-0 font-bold leading-none h-10 w-10 flex items-center justify-center rounded-lg border border-slate-750">✓</div>
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
            <div className="bg-white rounded-3xl p-8 border border-sky-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-850">
                <ClipboardList className="text-slate-700" /> Certified Nutrition Sheet
              </h2>
              <div className="grid grid-cols-1 gap-y-3 font-semibold text-xs text-slate-655 font-sans">
                {specs.map((item, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-slate-50 last:border-0">
                    <span className="text-slate-400">{item.label}</span>
                    <span className="text-sky-900 font-extrabold text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Users Love It Box */}
            <div className="bg-white rounded-3xl p-8 border border-sky-100 shadow-sm space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2 text-slate-850">
                <Heart className="text-rose-500 fill-rose-500 w-5 h-5" /> Why Users Love It
              </h2>
              <div className="grid grid-cols-1 gap-y-2 text-slate-705 text-xs font-semibold">
                {coreAesthetics.map((rate, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-sky-50">
                    <span className="text-sky-700 font-black shrink-0">✔</span>
                    <span>{rate}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Pros & Considerations Split Panel */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-emerald-50/20 border border-emerald-500/15 p-8 rounded-3xl space-y-4 shadow-sm">
            <h3 className="text-emerald-900 font-black text-xl flex items-center gap-2">
              👍 Pros & Strengths
            </h3>
            <ul className="space-y-2.5 text-stone-700 text-sm">
              <li className="flex gap-2 items-start">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Theraptic-strength EPA and DHA concentrations per softgel serving</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Molecular vacuum distillation completely screens heavy metal mercury pollutants</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Burpless citrus technology completely masks unpleasant fishy aftertaste</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Supports deep bone mobility cushions, neurological elasticity and heart health</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Wild-caught, non-gmo, chemical-filler free lipid profile standard</span>
              </li>
            </ul>
          </div>

          <div className="bg-sky-50/20 border border-sky-500/15 p-8 rounded-3xl space-y-4 shadow-sm">
            <h3 className="text-sky-950 font-black text-xl flex items-center gap-2">
              ⚠️ Considerations
            </h3>
            <ul className="space-y-2.5 text-stone-700 text-sm">
              <li className="flex gap-2 items-start">
                <span className="text-sky-700 font-bold shrink-0">●</span>
                <span>Optimal cardiac, joint cushion results construct over ongoing daily use</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-sky-700 font-bold shrink-0">●</span>
                <span>Requires dry ambient environment storage to protect gelatin softgel integrity</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-sky-700 font-bold shrink-0">●</span>
                <span>Source extracted from ocean fish (highly filtered but not suitable for vegetarians)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Usage dosage Instructions frame */}
        <div className="bg-sky-950/5 border border-sky-950/10 rounded-[2rem] p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-sky-950 mb-6 flex items-center gap-2 justify-center font-sans tracking-tight">
            <RefreshCw className="text-sky-750 text-sky-700 w-6 h-6 animate-spin-slow" /> Suggested Daily Sourcing Protocol
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-center text-sm font-sans">
            <div className="bg-white p-6 rounded-2xl border border-sky-100 flex flex-col justify-between shadow-xs">
              <div>
                <span className="bg-sky-900 text-white font-extrabold w-10 h-10 rounded-full flex items-center justify-center mx-auto text-lg mb-4">1</span>
                <h4 className="font-bold text-sky-950 text-base mb-2">Mealtime Supplement Dosages</h4>
                <p className="text-stone-605 leading-relaxed text-xs">Ingest softgels daily ideally accompanied by healthy fat-containing meals (breakfast or lunch) to speed maximum systemic absorption.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-sky-100 flex flex-col justify-between shadow-xs">
              <div>
                <span className="bg-sky-900 text-white font-extrabold w-10 h-10 rounded-full flex items-center justify-center mx-auto text-lg mb-4">2</span>
                <h4 className="font-bold text-sky-950 text-base mb-2">Daily Consistency Path</h4>
                <p className="text-stone-605 leading-relaxed text-xs">For maximum long-term benefit addressing heart health, arterial elasticity, joint flexibility, and brain clarity, sustain intake without missing days.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Disclaimer and Note */}
        <div className="bg-stone-100 rounded-3xl p-6 border border-stone-200 shadow-xs max-w-4xl mx-auto mb-12">
          <h3 className="text-slate-850 font-bold mb-2 flex items-center gap-2 text-sm uppercase tracking-wide">
            <Info className="w-4 h-4 text-stone-650" /> Sourcing purity & Medical Wellness Disclaimer
          </h3>
          <p className="text-stone-505 text-xs font-sans leading-relaxed mt-1">
            Ensure you integrate dietary supplements responsibly under clinical health balance. Omega lipid profiles help provide supplemental assistance to nourish vital human structures. Consult with registered certified nutrition practitioners or primary healthcare doctors prior to beginning protocols if you take cardiac medications or possess ocean fish sensitivities.
          </p>
        </div>

        {/* Final CTA Board */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-lg text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-950 mb-4 tracking-tight">
            Clinically Distilled Lipid Support
          </h2>
          <p className="text-stone-655 max-w-2xl mx-auto leading-relaxed text-md font-sans mb-8">
            Arazo Nutrition® Wild Caught Omega-3 Fish Oil seamlessly blends sustainable marine sourcing, maximum molecular distillation clarity, delicious orange/lemon protection, and zero heavy metal impurities. Nourish your bodily matrices today.
          </p>
          <a 
            href="https://amzn.to/3RNDFsZ" 
            target="_blank" 
            rel="nofollow sponsored noopener" 
            className="inline-flex bg-gradient-to-r from-sky-850 from-sky-800 to-sky-700 hover:from-sky-900 hover:to-sky-800 text-white font-bold text-center px-12 py-4 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all gap-2 text-md"
          >
            <ShoppingCart className="w-5 h-5 text-white" /> Get Arazo Nutrition Omega-3 on Amazon
          </a>
        </div>

      </div>
    </motion.div>
  );
}
