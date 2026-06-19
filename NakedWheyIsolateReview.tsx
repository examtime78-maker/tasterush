import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Award, Heart, Sparkles, Activity, Info, ClipboardList, Wheat, Settings, ShieldCheck, Check } from 'lucide-react';

export default function NakedWheyIsolateReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2026/02/NAKED-Whey-Isolate-Protein1.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/02/NAKED-Whey-Isolate-Protein2.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/02/NAKED-Whey-Isolate-Protein3.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Servings Per Container', value: 'Approx. 28 Servings' },
    { label: 'Protein Density Per Serving', value: '30 g Pure Isolate' },
    { label: 'BCAA Content Per Serving', value: '8.4 g Branched-Chain Aminos' },
    { label: 'Caloric Load', value: '120 Calories (0g Fat, 0g Carbs, 0g Sugar)' },
    { label: 'Lactose Content', value: '< 0.1 g (Ultra-Low Trace)' },
    { label: 'Cow Feed Integrity', value: '100% Grass-Fed, Non-GMO Farms' },
    { label: 'Additives & Fillers', value: 'None (Unflavored, Pure)' },
    { label: 'Primary Brand Scribe', value: 'Naked' }
  ];

  const features = [
    {
      title: '🥛 Pure Pasture-Fed Whey Isolate',
      desc: 'Sourced from strictly grass-fed and pasture-raised cows on local non-GMO farms, delivering a pristine and premium amino acid profile for maximum physical repair.'
    },
    {
      title: '💪 Unrivaled High-Grade 30g Protein Density',
      desc: 'Each 32g serving floods muscles with approximately 30 grams of cold-filtered, fast-absorbing whey protein isolate to immediately support nitrogen balance.'
    },
    {
      title: '🥑 Perfect Zero Carbs & Zero Sugar Profile',
      desc: 'Ideal for ketogenic lifestyles, strict contest prep phases, or daily weight management plans, allowing full macronutrient customization with absolute accuracy.'
    },
    {
      title: '🥛 Extremely Easy Digestibility (<0.1g Lactose)',
      desc: 'Undergoes meticulous multi-phase microfiltration to strip out lactose, casein, fat, and starches, leaving a product that is extremely light on sensitive stomachs.'
    },
    {
      title: '🌱 Only Two Total Ingredients',
      desc: 'We list everything directly on the label: ultra-pure grass-fed whey isolate and a tiny touch of non-GMO sunflower lecithin for clean, chunk-free mixability.'
    },
    {
      title: '⚡ Massively Packed with 8.4g BCAAs',
      desc: 'Naturally abundant in branch-chain amino acids, helping protect lean structural muscles from stress degradation and significantly reducing DOMS.'
    }
  ];

  const highlights = [
    'Zero artificial sweeteners, chemical flavors, gums, or preservative additives',
    'Unflavored formulation allows absolute recipe versatility for smoothies and cooking',
    'Excellent cold-filtered process preserves active protein microfractions intact',
    'Extremely low lactose content helps eliminate post-shake flatulence and gas bloating',
    'Cleanest possible protein source for athletes, fitness experts, and busy lifestyles',
    'Sourced from certified US farms completely free of synthetic rBGH or rBST hormones'
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-stone-50 min-h-screen text-slate-900 font-sans pb-32"
    >
      {/* Top Banner */}
      <div className="bg-slate-950 text-white text-center py-3 text-xs font-black px-4 tracking-wider shadow-md uppercase">
        🥛 THE PURITY PATHWAY: 100% Grass-Fed NAKED Whey Isolate Protein. 0g Sugar & 0g Carbs. Standard Amazon Link.
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
                  alt="NAKED Whey Isolate Protein" 
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-slate-950 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider shadow-sm flex items-center gap-1">
                  <Wheat className="w-3.5 h-3.5 text-amber-400" /> GRASS-FED PURITY
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-slate-50 p-1 transition-all ${activeImg === img ? 'border-amber-600 shadow-md' : 'border-transparent opacity-75 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Naked Whey Isolate Thumbnail ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-slate-200">
                  <Award className="w-3.5 h-3.5 text-slate-950" /> Clean Label Champion
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-950 tracking-tight font-sans">
                NAKED Whey <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-950 text-2xl md:text-3.5xl font-black block mt-1">Isolate Protein Powder</span>
              </h1>
              <p className="text-stone-605 font-semibold text-sm font-sans">100% Pure Pasture-Fed Bovine Whey Isolate with No Sweeteners, Flavors, or Processing Junk</p>
              
              <div className="flex items-center gap-3 font-sans">
                <div className="flex text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 text-slate-200" />
                  <Star className="w-5 h-5 text-slate-200" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">3.00 (1 Certified Analytical Review)</span>
              </div>

              <div className="py-2 border-y border-stone-100 font-sans">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-rose-600">$51.99</span>
                  <span className="text-xs bg-slate-100 text-slate-900 font-extrabold px-3 py-1 rounded-md ml-3">Only 2 Pure Ingredients</span>
                </div>
              </div>

              <p className="text-stone-605 leading-relaxed text-sm md:text-base font-sans">
                Eliminate nutritional mystery and satisfy daily protein requirements systematically using the spectacularly clean <strong>NAKED Whey Isolate Protein</strong>. Consciously processed without chemical sweeteners, masking colors, thickening gums, or cheap fillers, this unflavored powder supplies exactly 30 grams of fast-acting bovine whey isolate and a touch of sunflower lecithin. Sourced exclusively from healthy pasture-fed cattle on certified non-GMO farms, it offers premier quality and ultimate recipe flexibility.
              </p>

              <div className="pt-4 font-sans">
                <a 
                  href="https://amzn.to/3RTEnVR" 
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
            The Naked Difference: Cold Microfiltration Nutrition
          </h2>
          <div className="max-w-4xl mx-auto text-slate-350 text-center space-y-6 text-sm lg:text-base leading-relaxed">
            <p>
              Traditional flavored protein powders are packed with standard synthetic sweeteners (like sucralose, acesulfame potassium, or aspartame) and bulky binding gums that cause chronic stomach inflammation, abdominal gas flares, and overall toxic chemical burden. NAKED Whey Isolate strips all of this away. Using cold-processed, chemical-free cross-flow microfiltration, this isolate maintains natural immunoglobulins and growth factors with near-zero trace carbs, fats, or lactose.
            </p>
            <p className="text-xs text-amber-400 leading-relaxed font-sans font-bold uppercase tracking-wider">
              ★ NO CHEMICAL BLEACHING or ADDED rBST HORMONES — SOURCE CERTIFIED FROM LOCAL US DAIRY FARMS.
            </p>
          </div>
        </div>

        {/* Detailed Spec Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-slate-950 text-slate-100 rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6 border border-slate-900">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3 text-white font-sans">
              <Sparkles className="text-amber-450 text-amber-400 font-sans" /> Key Pure Core Spheres
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
                <ClipboardList className="text-slate-700 font-sans" /> Pure Composition breakdown
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

        {/* Nutrition Table Panel */}
        <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm mb-12 font-sans">
          <h2 className="text-2xl font-bold text-slate-950 mb-6 flex items-center gap-2 tracking-tight">
            <ClipboardList className="text-slate-800" /> Nutritional Metrics (Per Serving)
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-100">
            <table className="w-full text-sm text-left text-slate-650">
              <thead className="text-xs text-slate-700 uppercase bg-slate-50 border-b border-slate-100">
                <tr>
                  <th scope="col" className="px-6 py-4 font-bold">Nutrient Factor</th>
                  <th scope="col" className="px-6 py-4 font-bold">Measured Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 font-medium">
                <tr className="bg-white">
                  <td className="px-6 py-4 font-bold text-slate-900">Protein</td>
                  <td className="px-6 py-4 text-emerald-600 font-extrabold">30 g</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-bold text-slate-900">Calories</td>
                  <td className="px-6 py-4 text-slate-900 font-bold">~120 cal</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-bold text-slate-900">Carbohydrates</td>
                  <td className="px-6 py-4 text-slate-500">0 g</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-bold text-slate-900">Sugar</td>
                  <td className="px-6 py-4 text-slate-500">0 g</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-bold text-slate-900">Total Fat</td>
                  <td className="px-6 py-4 text-slate-500">0 g</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-bold text-slate-900">BCAAs</td>
                  <td className="px-6 py-4 text-slate-900 font-bold">~8.4 g</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-bold text-slate-900">Lactose Trace</td>
                  <td className="px-6 py-4 text-slate-800 font-semibold font-mono">&lt; 0.1 g</td>
                </tr>
              </tbody>
            </table>
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
                <span>Unflavored nature is highly adaptive for smoothies, clean coffee, protein baking, or savory soups</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Exceptional grass-fed bovine source provides rich immunoglobulins and complete microfractions</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Extremely light gastrointestinal profile prevents standard bloating, nausea, and gut cramping</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Substantial 30g protein macro payload per scoop is standard-leading for lean building profiles</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Contains sunflower lecithin instead of soy, avoiding typical hormonal triggers</span>
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
                <span>Flavor profile is perfectly neutral and chalky if taken strictly in tap water without adding flavors</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800 font-sans">
                <span className="text-amber-600 font-bold shrink-0 font-bold">●</span>
                <span>Requires active shaking or blender blending because it lacks industrial thickening chemical agents</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800 font-sans">
                <span className="text-amber-600 font-bold shrink-0 font-bold">●</span>
                <span>Precision weighing with scales is advised to monitor your daily nitrogen recovery with maximum accuracy</span>
              </li>
            </ul>
          </div>
        </div>

        {/* FAQ Panel */}
        <div className="bg-slate-100 rounded-[2rem] p-8 md:p-12 mb-12 font-sans">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2 justify-center tracking-tight font-sans">
            ❓ Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-sm lg:text-base leading-relaxed font-sans text-left">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/50 shadow-xs">
              <p className="font-bold text-slate-900 mb-2">Q: Is this isolate suitable for lactose-intolerant athletes?</p>
              <p className="text-stone-655 text-sm">
                A: Yes — NAKED Whey Isolate goes through advanced microfiltration which strips lactose down to less than 0.1g per serving. This is significantly below typical thresholds and is highly tolerated compared to standard whey concentrate.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/50 shadow-xs">
              <p className="font-bold text-slate-900 mb-2">Q: How should I integrate this into my daily program?</p>
              <p className="text-stone-655 text-sm">
                A: Simply mix exactly 2 scoops (~32 g) with 6–10 oz of cold water, milk, or non-dairy milk. Because it is unflavored, we highly recommend blending it inside morning smoothies with banana, frozen fruit berries, or unsweetened cocoa powder.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/50 shadow-xs">
              <p className="font-bold text-slate-900 mb-2">Q: Is NAKED Whey Isolate efficient during fat loss or cutting cycles?</p>
              <p className="text-stone-655 text-sm">
                A: Absolutely — with 120 calories, 30g protein, 0g carbohydrates, 0g fat, and 0g sugar per serving, you receive pure high-grade structural nutrition to feed muscles during calorie-restricted phases while helping burn visceral fat cleanly.
              </p>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-150 mb-12 font-sans shadow-xs">
          <h2 className="text-2xl font-black text-slate-950 mb-8 border-b pb-4 tracking-tight">
            Certified Customer Reviews (1 Review)
          </h2>
          <div className="space-y-6">
            <div className="border border-slate-100 p-6 rounded-2xl bg-slate-50/50">
              <div className="flex text-amber-400 gap-1 mb-2">
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 text-slate-200" />
                <Star className="w-4 h-4 text-slate-200" />
              </div>
              <p className="text-slate-900 font-bold mb-1">Extremely clean premium isolate, neutral profile</p>
              <p className="text-slate-600 text-xs">"Superb ingredients and great overall protein clean quality, but the flavor is very plain unless mixed with other ingredients like berries, cocoa, or vanilla extract."</p>
            </div>
          </div>
        </div>

        {/* Safety Disclaimer Box */}
        <div className="bg-slate-100 rounded-3xl p-6 border border-slate-200 shadow-xs max-w-4xl mx-auto mb-12 font-sans">
          <h3 className="text-slate-850 font-bold mb-2 flex items-center gap-2 text-xs uppercase tracking-wide">
            <Info className="w-4 h-4 text-slate-650" /> Heavy Metal & Hormone Disclosures
          </h3>
          <p className="text-slate-505 text-xs font-sans leading-relaxed">
            NAKED Isolate is processed without synthetic growth hormones (rBGH/rBST), chemical processing solvents, or artificial flavoring compounds. Maintain professional hydration habits when intaking heavy protein loads to maximize metabolic clearing. Consult with your sports nutritionist if you manage chronic medical conditions or specialized kidney diets. These statements have not been evaluated by the FDA; NAKED Isolate is not formulated to treat, diagnose, cure, or prevent health disease.
          </p>
        </div>

        {/* Final CTA Container */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-150 shadow-lg text-center max-w-4xl mx-auto font-sans">
          <h2 className="text-3xl font-extrabold text-slate-950 mb-4 tracking-tight">
            Feed Your Recovery With Purity & Integrity Today
          </h2>
          <p className="text-stone-655 max-w-2xl mx-auto leading-relaxed text-md font-sans mb-8">
            The unflavored NAKED Whey Isolate is the absolute standard in clinical performance and simplicity. Settle for nothing less than 30g pure grass-fed protein with zero hidden secrets.
          </p>
          <a 
            href="https://amzn.to/3RTEnVR" 
            target="_blank" 
            rel="nofollow sponsored noopener" 
            className="inline-flex bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-850 text-white font-bold text-center px-12 py-4 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all gap-2 text-md"
          >
            <ShoppingCart className="w-5 h-5 text-white" /> Get NAKED Whey Isolate on Amazon
          </a>
        </div>

      </div>
    </motion.div>
  );
}
