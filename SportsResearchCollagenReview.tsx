import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Heart, Sparkles, Award, Coffee, RefreshCw, Sparkle, Info, ClipboardList } from 'lucide-react';

export default function SportsResearchCollagenReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2026/02/Sports-Research%C2%AE-Organic-Collagen-Peptides1.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/02/Sports-Research%C2%AE-Organic-Collagen-Peptides2.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/02/Sports-Research%C2%AE-Organic-Collagen-Peptides3.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Product Sourcing Type', value: 'USDA Organic Hydrolyzed Bovine Collagen Peptides' },
    { label: 'Total Net Weight', value: '10.58 oz (~300 g)' },
    { label: 'Protein Yield Per Serving', value: 'Approx. 9 g Pure Organic Protein' },
    { label: 'Collagen Heavy Types', value: 'Type I & Type III Bioactive Peptides' },
    { label: 'Approximate Servings', value: '30 Servings Per Container' },
    { label: 'Certifications', value: 'USDA Organic, Non-GMO Certified, Gluten-Free' },
    { label: 'Designed Intended Benefit', value: 'Skin Hydro-elasticity, Joint Comfort & Connective Support' }
  ];

  const features = [
    {
      title: '🌿 USDA Organic Certified',
      desc: 'Formulated under rigorous organic standards to deliver exceptionally clean, sustainable, and pesticide-free daily recovery nutrition.'
    },
    {
      title: '🐄 Premium Grass-Fed Bovine',
      desc: 'Sourced purely from pasture-raised cattle to guarantee unmatched peptide purity, rich amino profiles, and structural integrity.'
    },
    {
      title: '🦴 Type I & III Structural Collagen',
      desc: 'Provides the fundamental biochemical bricks that compose your skin, connective tissue, ligaments, and cartilage structure.'
    },
    {
      title: '⚡ Bioavailable Low-Molecular-Weight',
      desc: 'Enzymatic hydrolysis breaks the bovine collagen down into smaller, highly soluble peptides for easy, rapid digestion and absorption.'
    },
    {
      title: '🥤 Truly Unflavored & Multi-Compatible',
      desc: 'Stirs cleanly and dissolves completely into hot coffees, morning matcha teas, juices, protein shakes, or warm oatmeal with zero grit.'
    },
    {
      title: '🚫 Pure Clean Ingredient Standard',
      desc: 'Contains absolutely no dairy, gluten, GMOs, chemical fillers, binders, artificial colors, artificial sweeteners, or preservatives.'
    }
  ];

  const coreAesthetics = [
    'Certified USDA Organic for pristine ingredient safety',
    'Dissolves effortlessly without residual clumping',
    'Supplements vital daily cellular elastic structures',
    'Zero gamey taste or chemical aftertaste',
    'Sustainably sourced and grass-fed certified',
    'Highly compatible with Keto and Paleo dietary lifestyles'
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-emerald-50/10 min-h-screen text-stone-900 font-sans pb-32"
    >
      {/* Premium Notification Banner */}
      <div className="bg-emerald-950 text-emerald-100 text-center py-3 text-xs font-black px-4 tracking-wider shadow-md uppercase">
        🌿 ORGANIC STANDARDS: Sports Research® USDA Organic Collagen Peptides (unflavored, ~300g). Secure Route to Amazon.
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-12">
        <Link to="/" className="inline-flex items-center text-stone-500 hover:text-emerald-950 transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Review Hub
        </Link>

        {/* Product Showcase Container */}
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-emerald-100 mb-12">
          <div className="grid md:grid-cols-2 gap-12 p-8 md:p-12 items-start">
            
            {/* Gallery Section */}
            <div className="space-y-6">
              <div className="bg-emerald-50/30 rounded-3xl p-6 flex items-center justify-center border border-emerald-50/50 aspect-square overflow-hidden relative animate-fade-in">
                <img 
                  src={activeImg} 
                  className="max-h-full max-w-full object-contain rounded-2xl duration-305 transition-all hover:scale-105" 
                  alt="Sports Research Organic Collagen Peptides" 
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-emerald-900 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider shadow-sm">
                  USDA ORGANIC
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-stone-50 p-1 transition-all ${activeImg === img ? 'border-emerald-750 shadow-md' : 'border-transparent opacity-75 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Sports Research Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-emerald-250">
                  <Award className="w-3.5 h-3.5 text-emerald-900" /> USDA Organic & Non-GMO
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-emerald-950 tracking-tight font-sans">
                Sports Research® <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-teal-750 text-2xl md:text-3xl font-black block mt-1">Organic Collagen Peptides</span>
              </h1>
              <p className="text-stone-600 font-semibold text-sm">Ultra-Premium Hydrolyzed Bovine Structural Protein Sourced Sustainably</p>
              
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
                  <span className="text-3xl font-black text-rose-600">$32.95</span>
                  <span className="text-xs bg-emerald-100 text-emerald-900 font-bold px-2.5 py-1 rounded-md ml-3">Clean Bio-Uptake</span>
                </div>
              </div>

              <p className="text-stone-655 leading-relaxed text-sm md:text-base font-sans">
                Elevate your physical recovery and skin wellness with <strong>Sports Research Organic Collagen Peptides</strong>. Intended for healthcare-minded lifters demanding the highest purity standards, this premium hydrolyzed peptide powder is made strictly from pasture-raised, grass-fed bovine. Easily bioabsorbable with a lower molecular weight, it provides pristine Type I & Type III structural nutrition without artificial sweeteners, GMOs, or chemical excipients.
              </p>

              <div className="pt-4">
                <a 
                  href="https://amzn.to/4dMeONs" 
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

        {/* Intro informational description banner */}
        <div className="bg-slate-900 text-stone-100 rounded-[2rem] p-8 md:p-12 border border-slate-880 shadow-xl mb-12">
          <h2 className="text-3xl font-extrabold text-white text-center mb-6 tracking-tight">
            Premium Organic Collagen Support
          </h2>
          <div className="max-w-4xl mx-auto text-slate-300 text-center space-y-6 text-sm lg:text-base leading-relaxed">
            <p>
              Sports Research Organic Collagen Peptides deliver a pristine structural protein pool built on strict organic standards. Type I and III collagen compose the cellular lattice maintaining young skin bounce, muscle connective membranes, cartilage integrity, and nail flexibility.
            </p>
            <p className="text-xs text-emerald-400 leading-relaxed font-sans font-bold">
              ★ Enzymatically hydrolyzed for lightning-fast solubility and gastric-friendly direct biological absorption.
            </p>
          </div>
        </div>

        {/* Detailed Spec Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-slate-900 text-stone-100 rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6 border border-slate-850">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3 text-white">
              <Sparkles className="text-emerald-400" /> Sports Research Advantages
            </h2>
            <ul className="space-y-4">
              {features.map((feat, index) => (
                <li key={index} className="flex gap-3">
                  <div className="bg-slate-800 p-2 text-emerald-400 shrink-0 font-bold leading-none h-10 w-10 flex items-center justify-center rounded-lg border border-slate-750">✓</div>
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
            <div className="bg-white rounded-3xl p-8 border border-stone-200/60 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-stone-850">
                <ClipboardList className="text-stone-700" /> Certified Nutrition Sheet
              </h2>
              <div className="grid grid-cols-1 gap-y-3 font-semibold text-xs text-slate-655">
                {specs.map((item, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-stone-50 last:border-0 font-sans">
                    <span className="text-slate-400">{item.label}</span>
                    <span className="text-emerald-800 font-extrabold text-right">{item.value}</span>
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
                  <div key={idx} className="flex items-center gap-2 bg-slate-50/50 p-2.5 rounded-xl border border-stone-100">
                    <span className="text-emerald-650 font-black shrink-0">✔</span>
                    <span>{rate}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Pros & Considerations Panel */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-emerald-50/20 border border-emerald-500/15 p-8 rounded-3xl space-y-4 shadow-sm">
            <h3 className="text-emerald-900 font-black text-xl flex items-center gap-2">
              👍 Pros & Strengths
            </h3>
            <ul className="space-y-2.5 text-stone-700 text-sm">
              <li className="flex gap-2 items-start">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>USDA Certified Organic standard ensures chemical-free purity</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Highly bioassimilable hydrolyzed peptide structures</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Fully sustainable grass-fed, pasture-raised cattle sourcing</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Absolutely zero artificial flavors, chemical colors, or fillers</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Dissolves smoothly without sticky residual lumps/odor</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50/20 border border-orange-500/15 p-8 rounded-3xl space-y-4 shadow-sm">
            <h3 className="text-amber-900 font-black text-xl flex items-center gap-2">
              ⚠️ Considerations
            </h3>
            <ul className="space-y-2.5 text-stone-700 text-sm">
              <li className="flex gap-2 items-start">
                <span className="text-amber-600 font-bold shrink-0">●</span>
                <span>Collagen physical changes rebuild gradually over multi-week schedules</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-amber-600 font-bold shrink-0">●</span>
                <span>Unflavored, neutral taste can feel plain in simple tap water</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-amber-600 font-bold shrink-0">●</span>
                <span>Contains no vitamins (like Vitamin C) or hyaluronic acid complex integrations</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Dosage Instructions Frame */}
        <div className="bg-emerald-950/5 border border-emerald-950/10 rounded-[2rem] p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-emerald-950 mb-6 flex items-center gap-2 justify-center font-sans tracking-tight">
            <Coffee className="text-emerald-705 text-emerald-700 w-6 h-6" /> Pure Daily Reconstruct Protocol
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-center text-sm font-sans">
            <div className="bg-white p-6 rounded-2xl border border-stone-150 flex flex-col justify-between shadow-xs">
              <div>
                <span className="bg-emerald-900 text-white font-extrabold w-10 h-10 rounded-full flex items-center justify-center mx-auto text-lg mb-4">1</span>
                <h4 className="font-bold text-emerald-950 text-base mb-2">Blend Scoop Formula</h4>
                <p className="text-stone-605 leading-relaxed text-xs">Stir or shake exactly one level scoop of collagen powder into water, early-morning coffee, post-workout protein smoothies, dietary teas, or daily oatmeal.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-stone-150 flex flex-col justify-between shadow-xs">
              <div>
                <span className="bg-emerald-900 text-white font-extrabold w-10 h-10 rounded-full flex items-center justify-center mx-auto text-lg mb-4">2</span>
                <h4 className="font-bold text-emerald-950 text-base mb-2">Build Strict Consistency</h4>
                <p className="text-stone-605 leading-relaxed text-xs">For optimal physiological skin moisture support, joint flexibility, structural tissues, and recovery progress, ingest one serving daily without interruption.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Disclaimer and Note */}
        <div className="bg-stone-100 rounded-3xl p-6 border border-stone-200 shadow-xs max-w-4xl mx-auto mb-12">
          <h3 className="text-slate-850 font-bold mb-2 flex items-center gap-2 text-sm uppercase tracking-wide">
            <Info className="w-4 h-4 text-stone-650" /> Dietary Supplement & Sourcing Safety Note
          </h3>
          <p className="text-stone-505 text-xs font-sans leading-relaxed">
            Please make sure you utilize food supplements with active intelligence. Hydrolyzed collagen operates as clean metabolic support to nourish structural cellular protein reserves. Always seek expert advice from certified general practitioners or sports nutritionists before incorporating bovine collagen proteins if you have physical sensitivities or pre-existing clinical health conditions.
          </p>
        </div>

        {/* Final CTA Board */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-stone-100 shadow-lg text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-stone-950 mb-4 tracking-tight">
            Organic Wellness Support Made Simple
          </h2>
          <p className="text-stone-655 max-w-2xl mx-auto leading-relaxed text-md font-sans mb-8">
            Sports Research® Organic Collagen Peptides seamlessly combine certified organic standards, grass-fed purity, superb mixability, and high-bioavailability peptides to provide unrivaled structural protein efficiency.
          </p>
          <a 
            href="https://amzn.to/4dMeONs" 
            target="_blank" 
            rel="nofollow sponsored noopener" 
            className="inline-flex bg-gradient-to-r from-emerald-800 to-emerald-700 hover:from-emerald-900 hover:to-emerald-800 text-white font-bold text-center px-12 py-4 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all gap-2 text-md animate-bounce"
          >
            <ShoppingCart className="w-5 h-5 text-white" /> Get Sports Research Collagen on Amazon
          </a>
        </div>

      </div>
    </motion.div>
  );
}
