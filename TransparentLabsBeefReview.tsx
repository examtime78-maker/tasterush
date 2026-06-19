import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Heart, Sparkles, Award } from 'lucide-react';

export default function TransparentLabsBeefReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2026/02/Transparent-Labs-Grass-Fed-Beef-Isolate-Protein-Powder1.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/02/Transparent-Labs-Grass-Fed-Beef-Isolate-Protein-Powder2.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/02/Transparent-Labs-Grass-Fed-Beef-Isolate-Protein-Powder3.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Protein Per Serving', value: '24g Hydrolyzed Beef Protein' },
    { label: 'Beef Source', value: 'Swedish Grass-Fed' },
    { label: 'Allergen Status', value: '100% Dairy-Free / Gluten-Free' },
    { label: 'Artificial Sweeteners', value: 'None (Stevia Sweetened)' },
    { label: 'Best Use', value: 'Post Workout / Daily Muscle Retention' },
    { label: 'Formula Type', value: 'Ultra-Clean Hydrolyzed Peptides' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-slate-50 min-h-screen text-slate-950 font-sans pb-32"
    >
      <div className="bg-indigo-950 border-b border-indigo-900 text-white text-center py-3 text-xs font-bold px-4 tracking-wide shadow-sm">
        PREMIUM HYDROLIZED BEEF SINGLE: 100% Dairy-Free Grass-Fed Clean Beef Isolate. Buy Link Active & Verified.
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
                  alt="Transparent Labs Grass Fed Beef Isolate Protein Powder" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex gap-4 justify-center">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`w-20 h-20 rounded-xl border-2 overflow-hidden bg-slate-50 p-1 transition-all ${activeImg === img ? 'border-indigo-600 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Beef Protein Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-indigo-650" /> Swedish Grass-Fed Isolate
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight">
                Transparent Labs <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-indigo-600 text-2xl md:text-3xl font-black block mt-1">Grass-Fed Beef Isolate</span>
              </h1>
              <p className="text-indigo-650 font-semibold text-md">Dairy-Free Hydrolyzed Protein Powder</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-400">
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">5.0 (Vouched by Fitness Specialists)</span>
              </div>

              <div className="py-2 border-y border-slate-100">
                <span className="text-3xl font-black text-slate-900">$59.99</span>
                <span className="text-slate-400 text-xs ml-2 font-medium">Free Expedited Delivery Options</span>
              </div>

              <p className="text-slate-650 leading-relaxed text-md">
                Bypass bloating and dairy issues with a premier 100% hydrolyzed beef isolate. Sourced exclusively from Swedish grass-fed cattle, this hypoallergenic protein powder provides 24g of pure, highly bioavailable amino acids per scoop. Naturally sweetened with Stevia and fully free from artificial colorants, additives, or labels tricks.
              </p>

              <div className="pt-4">
                <a 
                  href="https://amzn.to/42Z7bOW" 
                  target="_blank" 
                  rel="nofollow sponsored noopener" 
                  className="bg-[#ff9900] hover:bg-[#e68a00] text-slate-950 font-bold text-center px-10 py-4.5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-lg"
                >
                  <ShoppingCart className="w-5 h-5" /> Buy on Amazon Now
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Informative Highlights */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          <div className="bg-slate-900 text-white rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3">
              <Sparkles className="text-indigo-400" /> Key Muscle Builders
            </h2>
            <ul className="space-y-5">
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-indigo-400 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">Swedish Hydrolyzed Beef Isolate</h4>
                  <p className="text-slate-400 text-sm">Finely enzymatically hydrolyzed for instant absorption, yielding high concentration amino block structures directly to fatigued muscles.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-indigo-400 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">100% Hypoallergenic & Dairy-Free</h4>
                  <p className="text-slate-400 text-sm">Completely lactose-free, preventing any digestive distress or bloating common to classic milk whey compounds.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-indigo-400 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">Impeccable Label Cleanness</h4>
                  <p className="text-slate-400 text-sm">Absolutely zero proprietary blends, artificial flavors, synthetic dyes, or hidden filler carbohydrates.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                <ShieldCheck className="text-slate-700" /> Formula & Profile Specs
              </h2>
              <div className="grid grid-cols-1 gap-y-3 font-semibold text-xs text-slate-650">
                {specs.map((item, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-slate-50 last:border-0">
                    <span className="text-slate-400">{item.label}</span>
                    <span className="text-slate-900 font-bold">{item.value}</span>
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
