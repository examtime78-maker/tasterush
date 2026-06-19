import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Heart, Sparkles, Award } from 'lucide-react';

export default function LegionProteinReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2026/02/LEGION-Whey-Protein-Whey-Isolate1.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/02/LEGION-Whey-Protein-Whey-Isolate2.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/02/LEGION-Whey-Protein-Whey-Isolate3.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Protein per Serving', value: '22g Whey Isolate' },
    { label: 'Flavor', value: 'Cinnamon Cereal' },
    { label: 'Servings', value: '60 Servings' },
    { label: 'Diet Type', value: 'Gluten-Free / Keto-Friendly' },
    { label: 'Sweetener', value: 'Natural Stevia' },
    { label: 'Best Use', value: 'Post Workout / Daily Protein' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-slate-50 min-h-screen text-slate-950 font-sans pb-32"
    >
      <div className="bg-[#dcfce7] border-b border-green-200 text-[#166534] text-center py-3 text-xs font-bold px-4 tracking-wide shadow-sm">
        VERIFIED INSTOCK DEAL: Grass-Fed Premium Whey Protein Isolate. 100% Verified Amazon Direct Links.
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
                  className="max-h-full max-w-full object-contain rounded-2xl duration-300 transition-all hover:scale-105" 
                  alt="LEGION Whey Protein Shake Clean Isolate" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex gap-4 justify-center">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`w-20 h-20 rounded-xl border-2 overflow-hidden bg-slate-50 p-1 transition-all ${activeImg === img ? 'border-green-600 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Legion Whey Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-[#166534] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" /> 100% Grass-Fed Whey
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight">
                LEGION Whey+ Protein Isolate <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 text-2xl md:text-3xl font-black block mt-1">Cinnamon Cereal Flavor</span>
              </h1>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-400">
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">5.0 (2 Verified Buyer Reviews)</span>
              </div>

              <div className="py-2 border-y border-slate-100">
                <span className="text-3xl font-black text-slate-900">$109.95</span>
                <span className="text-slate-400 text-xs ml-2 font-medium">Free Shipping Included</span>
              </div>

              <p className="text-slate-650 leading-relaxed text-md">
                Indulge in a premium, grass-fed whey protein isolate sourced entirely from family-owned dairy farms in Ireland. LEGION Whey+ Cinnamon Cereal offers a gourmet dessert experience without zero added sugars, artificial sweeteners, or fillers. Ideal for post-workout muscle restoration and lean macro maintenance.
              </p>

              <div className="pt-4">
                <a 
                  href="https://amzn.to/4nOpJLa" 
                  target="_blank" 
                  rel="nofollow sponsored noopener" 
                  className="bg-[#ff9900] hover:bg-[#e68a00] text-slate-950 font-bold text-center px-10 py-4.5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-lg"
                >
                  <ShoppingCart className="w-5 h-5" /> Buy on Amazon
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Informative Highlights */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          <div className="bg-slate-900 text-white rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3">
              <Sparkles className="text-green-400" /> Ultimate Advantages
            </h2>
            <ul className="space-y-5">
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-green-400 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">22g of Elite Pure Protein</h4>
                  <p className="text-slate-400 text-sm">Finely filtered grass-fed whey isolate delivering clean muscle restructuring macro portions.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-green-400 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">Zero Post-Workout Sugar Bloat</h4>
                  <p className="text-slate-400 text-sm">Pure stevia and natural sweetening ingredients keep carbohydrates low and metabolic levels crisp.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-green-400 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">Premium Cinnamon Cereal Burst</h4>
                  <p className="text-slate-400 text-sm">Crisp, delicious milk-reminiscent cinnamon flavor profiles that mix smoothly with water or plant milk brands.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                <ShieldCheck className="text-slate-700" /> Independent Purity Certifications
              </h2>
              <p className="text-slate-650 leading-relaxed text-sm mb-4">
                Every batch of Legion Whey+ is third-party tested and checked for contaminants, heavy metals, or undisclosed raw contents. Rest easy knowing what’s written on the container aligns perfectly with what flows into your shaker.
              </p>
              <div className="grid grid-cols-2 gap-y-3 font-semibold text-xs border-t border-slate-100 pt-4 text-slate-650">
                {specs.map((item, index) => (
                  <div key={index} className="flex justify-between pr-4 py-1.5 border-b border-slate-50 last:border-0">
                    <span className="text-slate-400 capitalize">{item.label}</span>
                    <span>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
