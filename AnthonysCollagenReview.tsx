import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Heart, Sparkles, Award, Coffee, RefreshCw, Sparkle, Info } from 'lucide-react';

export default function AnthonysCollagenReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2026/02/Collagen-Peptide-Powder1.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/02/Collagen-Peptide-Powder2.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/02/Collagen-Peptide-Powder3.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Product Sourcing Type', value: 'Hydrolyzed Bovine Collagen Peptide Powder' },
    { label: 'Total Net Weight', value: '1 lb (454 g)' },
    { label: 'Protein Yield Per Serving', value: 'Approx. 11 g Pure Keto/Paleo Protein' },
    { label: 'Collagen Heavy Types', value: 'Type I & Type III Bioactive Peptides' },
    { label: 'Artificial Complex', value: 'None (Unflavored, Unsweetened, Single-Ingredient)' },
    { label: 'Diet Compatibility Matrix', value: 'Keto, Paleo, Gluten-Free, Non-GMO' },
    { label: 'Designed Intended Benefit', value: 'Healthy Skin Elasticity, Hair, Nails & Active Joints' }
  ];

  const features = [
    {
      title: '🐄 Pasture-Raised Grass-Fed Bovine',
      desc: 'Sourced from strictly managed pasture-raised cattle in the USA to deliver an exceptionally clean, toxicological-tested, premium quality collagen.'
    },
    {
      title: '💪 Advanced Hydrolysis Bioavailability',
      desc: 'Enzymatically broken down into light, fast-absorbing micro-peptides for optimal physical metabolic uptake and digestive tract comfort.'
    },
    {
      title: '✨ Multi-Dimensional Skin, Hair & Nails',
      desc: 'Helps naturally restore dermis moisture barrier retention, hair shaft strength, and dense nail structural matrices with daily use.'
    },
    {
      title: '🦴 Joint, Ligament & Bone Reinforcement',
      desc: 'Provides specialized Type I & Type III collagen peptides that form the structural backbone of tendons, cartilage, and supportive tissues.'
    },
    {
      title: '☕ Unflavored & Truly Instant Soluble',
      desc: 'Disperses seamlessly into early-morning espresso coffees, post-workout shakes, dietary teas, or baking recipes without altering taste.'
    },
    {
      title: '🌾 Pure Single-Ingredient Integrity',
      desc: 'Zero fillers, zero chemical flow-agents, absolutely no added sugars or zero-calorie artificial chemical sweeteners.'
    }
  ];

  const coreAesthetics = [
    'Pure, unadulterated grass-fed collagen peptides',
    'Perfect for daily coffee or keto smoothies',
    'Builds soft-tissue recovery and skin flexibility',
    'Milling standard ensures instant clump-free mixing',
    'Fully compatible with ketogenic and paleo diet guidelines',
    'No chemical additives, sweeteners or colorings'
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-orange-50/10 min-h-screen text-stone-900 font-sans pb-32"
    >
      {/* Premium Notification Banner */}
      <div className="bg-orange-950 text-orange-200 text-center py-3 text-xs font-black px-4 tracking-wider shadow-md uppercase">
        🐄 PURE GRASS-FED: Anthony's Hydrolyzed Bovine Collagen Peptides (unflavored, 1 lb). Secure Direct Route to Amazon.
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-12">
        <Link to="/" className="inline-flex items-center text-stone-500 hover:text-orange-955 transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Review Hub
        </Link>

        {/* Product Showcase Container */}
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-stone-200/60 mb-12">
          <div className="grid md:grid-cols-2 gap-12 p-8 md:p-12 items-start">
            
            {/* Gallery Section */}
            <div className="space-y-6">
              <div className="bg-stone-50 rounded-3xl p-6 flex items-center justify-center border border-stone-100 aspect-square overflow-hidden relative">
                <img 
                  src={activeImg} 
                  className="max-h-full max-w-full object-contain rounded-2xl duration-305 transition-all hover:scale-105" 
                  alt="Anthonys Collagen Peptide Powder 1 lb" 
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-orange-850 bg-orange-900 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider shadow-sm">
                  BOVINE TYPE I & III
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-stone-55 bg-stone-50 p-1 transition-all ${activeImg === img ? 'border-orange-600 shadow-md' : 'border-transparent opacity-75 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Collagen Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-50 text-orange-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-orange-100">
                  <Award className="w-3.5 h-3.5 text-orange-600" /> Grass-Fed & Pasture-Raised
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-stone-900 tracking-tight font-sans">
                Anthony’s <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-800 to-amber-700 text-2xl md:text-3xl font-black block mt-1">Collagen Peptide Powder 1 lb</span>
              </h1>
              <p className="text-stone-600 font-semibold text-md">Pure Hydrolyzed Pasture Cattle Type I & Type III Bioactive Wellness Support</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-slate-200" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">4.0 (1 Certified Dietary Review)</span>
              </div>

              <div className="py-2 border-y border-stone-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-rose-600">$25.99</span>
                  <span className="text-xs bg-orange-100 text-orange-800 font-bold px-2.5 py-1 rounded-md ml-3">Keto & Paleo Ready</span>
                </div>
              </div>

              <p className="text-stone-655 leading-relaxed text-md font-sans">
                Support your body from the deepest cellular level inside out with <strong>Anthony’s Pure Hydrolyzed Collagen Peptide Powder</strong>. Engineered carefully to support daily youthful revitalization, this completely unflavored collagen supplement is sourced purely from grass-fed, pasture-raised bovine cattle. Crafted with pristine digestion safety margins, it integrates instantly into morning coffees, tea, smoothies, hot oatmeal, or baking recipes without changing their taste.
              </p>

              <div className="pt-4 animate-fade-in">
                <a 
                  href="https://amzn.to/4nXHo3u" 
                  target="_blank" 
                  rel="nofollow sponsored noopener" 
                  className="bg-gradient-to-r from-[#ff9900] to-[#ffb84d] hover:from-[#e68a00] hover:to-[#e6a540] text-stone-950 font-bold text-center px-10 py-5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-lg"
                >
                  <ShoppingCart className="w-5 h-5 text-stone-950" /> Buy Now on Amazon
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Intro informational description banner */}
        <div className="bg-stone-900 text-stone-100 rounded-[2rem] p-8 md:p-12 border border-stone-880 shadow-xl mb-12">
          <h2 className="text-3xl font-extrabold text-white text-center mb-6 tracking-tight">
            Pure Hydrolyzed Collagen Support
          </h2>
          <div className="max-w-4xl mx-auto text-stone-300 text-center space-y-6 text-md leading-relaxed">
            <p>
              Anthony’s Collagen Peptides provide a premium, allergen-free, molecularly hydrolyzed source of Type I and Type III collagen. These types are the fundamental building blocks composing over 90% of your body's vital connective tissues, tendons, bone structures, and youthful skin firmness.
            </p>
            <p className="text-sm text-stone-400 leading-relaxed font-sans">
              Hydrolysis enzymatically cuts the complex cattle protein chain into shorter peptides, enhancing liquid dispersion and bypassing standard gastric processing limits to speed absorption when you need post-exercise recovery support.
            </p>
          </div>
        </div>

        {/* Detailed Spec Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-stone-900 text-stone-100 rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6 border border-stone-850">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-stone-800 pb-3 text-white">
              <Sparkles className="text-orange-400" /> Anthony's Key Features
            </h2>
            <ul className="space-y-4">
              {features.map((feat, index) => (
                <li key={index} className="flex gap-3">
                  <div className="bg-stone-800 p-2 text-orange-400 shrink-0 font-bold leading-none h-10 w-10 flex items-center justify-center rounded-lg border border-stone-750">✓</div>
                  <div>
                    <h4 className="font-bold text-white text-base">{feat.title}</h4>
                    <p className="text-stone-400 text-xs mt-0.5 leading-relaxed font-sans">{feat.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            {/* Technical Specifications */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200/60 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-stone-850">
                <ShieldCheck className="text-stone-700" /> Verified Ingredients Sheet
              </h2>
              <div className="grid grid-cols-1 gap-y-3 font-semibold text-xs text-stone-655">
                {specs.map((item, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-stone-50 last:border-0 font-sans">
                    <span className="text-stone-400">{item.label}</span>
                    <span className="text-orange-800 font-extrabold text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Users Love It Box */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200/60 shadow-sm space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2 text-stone-850">
                <Heart className="text-rose-500 fill-rose-500 w-5 h-5" /> Why Users Love It
              </h2>
              <div className="grid grid-cols-1 gap-y-2 text-stone-705 text-xs font-semibold">
                {coreAesthetics.map((rate, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-stone-50/50 p-2.5 rounded-xl border border-stone-100">
                    <span className="text-emerald-600 font-black shrink-0">✔</span>
                    <span>{rate}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Pros & Considerations Panel */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-emerald-50/20 border border-emerald-500/10 p-8 rounded-3xl space-y-4 shadow-sm">
            <h3 className="text-emerald-900 font-black text-xl flex items-center gap-2">
              👍 Pros & Strengths
            </h3>
            <ul className="space-y-2.5 text-stone-700 text-sm">
              <li className="flex gap-2 items-start">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Pristine, pasture-raised grass-fed cow cattle source</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Enzymatic hydrolysis for premium rapid micro-absorption</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Completely unflavored profile won't compromise taste</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Zero chemical fillers, toxic sweeteners, or preservatives</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Clean single-ingredient keto & paleo friendly compatibility</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50/25 border border-orange-500/10 p-8 rounded-3xl space-y-4 shadow-sm">
            <h3 className="text-amber-900 font-black text-xl flex items-center gap-2">
              ⚠️ Considerations
            </h3>
            <ul className="space-y-2.5 text-stone-700 text-sm">
              <li className="flex gap-2 items-start">
                <span className="text-amber-600 font-bold shrink-0">●</span>
                <span>Bovine peptide effects develop gradually over multi-week schedules</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-amber-600 font-bold shrink-0">●</span>
                <span>Standard unflavored cattle collagen may feel slightly plain in plain cold water</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-amber-600 font-bold shrink-0">●</span>
                <span>Requires strict, daily consistency to properly replenish structural storage</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Dosage Instructions Frame */}
        <div className="bg-orange-950/5 border border-orange-950/10 rounded-[2rem] p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-orange-950 mb-6 flex items-center gap-2 justify-center">
            <Coffee className="text-orange-700 w-6 h-6 animate-pulse" /> Suggested Daily Revitalizing Protocol
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-center text-sm font-sans">
            <div className="bg-white p-6 rounded-2xl border border-stone-150 flex flex-col justify-between">
              <div>
                <span className="bg-orange-850 bg-orange-900 text-white font-extrabold w-10 h-10 rounded-full flex items-center justify-center mx-auto text-lg mb-4">1</span>
                <h4 className="font-bold text-orange-950 text-base mb-2">Blend Scoop Protocol</h4>
                <p className="text-stone-605 leading-relaxed text-xs">Stir or shake exactly 1 scoop (approximately 10 to 12 g) into 8–12 oz of morning coffee, hot cocoa, herbal tea, green smoothies, or simply unflavored water.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-stone-150 flex flex-col justify-between">
              <div>
                <span className="bg-orange-850 bg-orange-900 text-white font-extrabold w-10 h-10 rounded-full flex items-center justify-center mx-auto text-lg mb-4">2</span>
                <h4 className="font-bold text-orange-950 text-base mb-2">Consistency is Absolute</h4>
                <p className="text-stone-605 leading-relaxed text-xs">For best long-term outcomes addressing skin hydration, joint elasticity, tendon recovery, and nail density, adhere to one serving daily over a continuous multi-week path.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Disclaimer and Note */}
        <div className="bg-stone-100 rounded-3xl p-6 border border-stone-200 shadow-xs max-w-4xl mx-auto mb-12">
          <h3 className="text-stone-800 font-bold mb-2 flex items-center gap-2 text-sm uppercase tracking-wide">
            <Info className="w-4 h-4 text-stone-650" /> Dietary Supplement Sourcing Disclaimer
          </h3>
          <p className="text-stone-505 text-xs font-sans leading-relaxed">
            Please make sure you utilize food supplements intelligently. Hydrolyzed bovine peptides operate as structural macro-assistance to replenish core cellular proteins. Always seek expert advice from certified doctors or registered nutritionists before incorporating bovine proteins if you have specific physical allergies or medical conditions.
          </p>
        </div>

        {/* Final CTA Board */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-stone-100 shadow-lg text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-stone-950 mb-4 tracking-tight">
            Simple, Clean & Effective Collagen Support
          </h2>
          <p className="text-stone-655 max-w-2xl mx-auto leading-relaxed text-md font-sans mb-8">
            Anthony’s Collagen Peptide Powder leverages single-ingredient bovine integrity, high-solubility processing, and dual Type I & III peptides to deliver unparalleled biological value. Jumpstart your structural wellness today.
          </p>
          <a 
            href="https://amzn.to/4nXHo3u" 
            target="_blank" 
            rel="nofollow sponsored noopener" 
            className="inline-flex bg-gradient-to-r from-[#ff9900] to-[#ffa31a] hover:from-[#e68a00] hover:to-[#e6941a] text-slate-955 text-slate-950 font-black text-center px-12 py-4 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all gap-2 text-md"
          >
            <ShoppingCart className="w-5 h-5 text-slate-950" /> Buy Anthony’s Collagen on Amazon
          </a>
        </div>

      </div>
    </motion.div>
  );
}
