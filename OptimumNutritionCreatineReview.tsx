import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Heart, Sparkles, Award } from 'lucide-react';

export default function OptimumNutritionCreatineReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2025/11/Optimum-Nutrition-Micronized-Creatine-Monohydrate-Powder-1.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Optimum-Nutrition-Micronized-Creatine-Monohydrate-Powder2-100x100.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Optimum-Nutrition-Micronized-Creatine-Monohydrate-Powder3.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Optimum-Nutrition-Micronized-Creatine-Monohydrate-Powder12.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Active Compound', value: '100% Pure Creatine Monohydrate' },
    { label: 'Serving Size', value: '5g (1 Teaspoon / ~5000mg)' },
    { label: 'Formulation Profile', value: 'Micronized for Clean Mixability' },
    { label: 'Flavor Options', value: 'Unflavored / Blueberry Lemonade' },
    { label: 'Caloric Load', value: 'Zero Calories / Zero Sugars' },
    { label: 'Available Container Sizes', value: '300g, 600g & 1200g' },
    { label: 'Quality Controls', value: 'Banned Substance Tested / Third-Party Tested' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-slate-50 min-h-screen text-slate-950 font-sans pb-32"
    >
      <div className="bg-amber-950 border-b border-amber-900 text-amber-100 text-center py-3 text-xs font-bold px-4 tracking-wide shadow-sm">
        ATHLETIC RECOVERY UPGRADE: 105% Pure Micronized Creatine Monohydrate. Direct Access to Amazon Best Price.
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
              <div className="bg-slate-50 rounded-3xl p-6 flex items-center justify-center border border-slate-100 aspect-square overflow-hidden">
                <img 
                  src={activeImg} 
                  className="max-h-full max-w-full object-contain rounded-2xl duration-305 transition-all hover:scale-105" 
                  alt="Optimum Nutrition Micronized Creatine Monohydrate Powder" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-slate-50 p-1 transition-all ${activeImg === img ? 'border-amber-500 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg animate-fade-in" alt={`ON Creatine Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-amber-50 text-amber-855 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-amber-100">
                  <Award className="w-3.5 h-3.5 text-amber-600" /> Amino Acids & Strength Support
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight">
                Optimum Nutrition <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600 text-2xl md:text-3xl font-black block mt-1">Micronized Creatine Powder</span>
              </h1>
              <p className="text-slate-650 font-semibold text-md">Pure Post-Workout ATP Support, High Solubility Factor</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-400">
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">5.0 (1 Certified Performance Review)</span>
              </div>

              <div className="py-2 border-y border-slate-100">
                <span className="text-3xl font-black text-slate-900">$14.97</span>
                <span className="text-slate-400 text-xs ml-2 font-medium">Free Super-Saver Shipping with Eligible Amazon Orders</span>
              </div>

              <p className="text-slate-655 leading-relaxed text-md font-sans">
                Unleash your full strength potential with <strong>Optimum Nutrition Micronized Creatine Monohydrate Powder</strong>, the performance-focused supplement trusted by athletes, bodybuilders, and fitness enthusiasts worldwide. Each serving delivers <strong>5g of pure micronized creatine monohydrate</strong> to support muscle strength, explosive power, endurance, and workout performance.
              </p>

              <div className="pt-4">
                <a 
                  href="https://amzn.to/4fbhG9e" 
                  target="_blank" 
                  rel="nofollow sponsored noopener" 
                  className="bg-gradient-to-r from-[#ff9900] to-[#ffb84d] hover:from-[#e68a00] hover:to-[#e6a540] text-slate-950 font-bold text-center px-10 py-4.5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-lg"
                >
                  <ShoppingCart className="w-5 h-5 text-slate-950" /> Buy on Amazon Now
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Detailed Spec Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          <div className="bg-slate-900 text-white rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3">
              <Sparkles className="text-amber-400" /> Performance & Recovery Highlights
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-amber-400 shrink-0 font-bold">✓</div>
                <div>
                  <h4 className="font-bold">Supports Pure Strength & Power Blocks</h4>
                  <p className="text-slate-400 text-sm">Helps improve overall muscle performance, endurance metrics, and workload capacity during high-intensity training regimes and heavy compound lifting sessions.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-amber-400 shrink-0 font-bold">✓</div>
                <div>
                  <h4 className="font-bold">Accelerates Cellular ATP Regeneration</h4>
                  <p className="text-slate-400 text-sm">Replenishes levels of Adenosine Triphosphate (ATP) in active muscle tissue to power immediate explosive bursts of kinetic energy.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-amber-400 shrink-0 font-bold">✓</div>
                <div>
                  <h4 className="font-bold">Advanced Micronized Granular Structure</h4>
                  <p className="text-slate-400 text-sm">Engineered with highly refined micronized technology to mix effortlessly in your protein shake or pre-workout without settling at the bottom.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-amber-400 shrink-0 font-bold">✓</div>
                <div>
                  <h4 className="font-bold">Rigorous Quality Assurance & Safety</h4>
                  <p className="text-slate-400 text-sm">Fully tested for banned substances under stringent sports nutrition guidelines to maintain premium consumer security and trust.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                <ShieldCheck className="text-slate-700" /> Supplement Characteristics
              </h2>
              <div className="grid grid-cols-1 gap-y-3 font-semibold text-xs text-slate-650">
                {specs.map((item, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-slate-50 last:border-0">
                    <span className="text-slate-400">{item.label}</span>
                    <span className="text-slate-900 font-bold text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Preparation Directions Panel */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-850">
                <Heart className="text-amber-500 w-5 h-5 animate-pulse" /> Direct Strategy for Use
              </h2>
              <ol className="list-decimal list-inside space-y-3 text-slate-650 text-sm font-semibold">
                <li>Add exactly <strong className="text-slate-900 font-bold">1 level teaspoon (5g)</strong> of micronized powder directly into water, juice, or whey shakes.</li>
                <li>Stir or shake thoroughly for <strong className="text-slate-900 font-bold">20 to 30 seconds</strong> until the powder is fully suspended.</li>
                <li>Drink daily, either pre-workout or post-workout, alongside a healthy hydration routine to sustain muscular hydration loops.</li>
              </ol>
            </div>
          </div>

        </div>

        {/* Deep Dive review summary */}
        <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-lg text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Superior Mixability for Strength & Recovery Support
          </h2>
          <p className="text-slate-655 max-w-2xl mx-auto leading-relaxed text-md font-sans">
            Say goodbye to chalky, gritty residues. Optimum Nutrition’s custom micronized formula delivers superior mixability, faster absorption, and a smoother texture compared to regular creatine powders. Easily mix it into your favorite protein shake, juice, or pre-workout to support high-intensity training, muscle recovery, and next-level strength gains.
          </p>
        </div>

      </div>
    </motion.div>
  );
}
