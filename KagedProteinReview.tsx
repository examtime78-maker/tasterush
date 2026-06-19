import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Zap, Star, Shield, Info, Dumbbell } from 'lucide-react';

export default function KagedProteinReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2026/02/Kaged-Post-Workout-Protein-Powder-Orange-Cream-1.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/02/Kaged-Post-Workout-Protein-Powder-Orange-Cream-2.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/02/Kaged-Post-Workout-Protein-Powder-Orange-Cream-3.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-slate-50 min-h-screen text-slate-950 font-sans pb-32"
    >
      <div className="bg-amber-50 border-b border-amber-200 text-amber-800 text-center py-3 text-xs font-semibold px-4">
        Affiliate Review Board: Contains direct affiliate redirect links. We may earn commissions on qualifying purchases.
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-12">
        <Link to="/" className="inline-flex items-center text-slate-500 hover:text-slate-950 transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Product Hub
        </Link>

        {/* Product Showcase */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 mb-12">
          <div className="grid md:grid-cols-2 gap-12 p-8 md:p-12 items-start">
            
            {/* Gallery View */}
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-2xl p-4 flex items-center justify-center border border-slate-100 aspect-square overflow-hidden">
                <img 
                  src={activeImg} 
                  className="max-h-full max-w-full object-contain rounded-xl duration-300 transition-all hover:scale-105" 
                  alt="Kaged Protein Orange Cream Powder" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex gap-4 justify-center">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`w-20 h-20 rounded-xl border-2 overflow-hidden bg-slate-50 p-1 transition-all ${activeImg === img ? 'border-orange-500 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Kaged Protein Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <span className="bg-orange-100 text-orange-850 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
                <Dumbbell className="w-3.5 h-3.5 text-orange-600" /> Premium Post-Workout
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight">
                Kaged Re-Kaged Protein
              </h1>
              <p className="text-orange-600 text-lg font-bold">Orange Cream Recovery Formula</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-400">
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">(4.8 out of 5 based on athletes' ratings)</span>
              </div>

              <div className="flex items-baseline gap-3 py-2 border-y border-slate-100">
                <span className="text-slate-400 line-through text-lg font-medium">$47.99</span>
                <span className="text-3xl font-black text-rose-600">$39.99</span>
                <span className="bg-rose-100 text-rose-800 text-xs font-bold px-2 py-1 rounded">Save 17%</span>
              </div>

              <p className="text-slate-600 leading-relaxed text-md">
                Accelerate your recovery cycle with 28g of premium Whey Protein Isolate blended with key digestive enzymes and athletic recovery minerals. The decadent Orange Cream flavour makes post-workout shakes something to genuinely look forward to.
              </p>

              <div className="pt-4">
                <a 
                  href="https://amzn.to/4nTkNoI" 
                  target="_blank" 
                  rel="nofollow sponsored noopener" 
                  className="bg-gradient-to-r from-[#ff9900] to-[#ff6a00] text-white font-bold text-center px-10 py-4 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" /> Buy on Amazon Now
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Nutritional & Build Breakdown */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-10 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 border-b border-slate-800 pb-3">
              <Zap className="text-orange-400" /> Athletic Advantages
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-orange-400 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">Fast-Absorbing Whey Isolate</h4>
                  <p className="text-slate-400 text-sm">28g of highly filtered protein designed for direct absorption to trigger hypertrophic repair instantly.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-orange-400 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">Prohydrolase Enzyme Technology</h4>
                  <p className="text-slate-400 text-sm">Patented protease enzyme blend that rapidly breaks down peptide bonds for cleaner digestion without bloating.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-orange-400 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">Delicious Orange Cream Taste</h4>
                  <p className="text-slate-400 text-sm">Unlike chalky chocolate blends, this unique formula tastes refreshing and delicious shake after shake.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-800">
                <Shield className="text-slate-700" /> Third-Party Certified Safe
              </h2>
              <p className="text-slate-650 leading-relaxed text-sm">
                Clean athletic nutrition requires clean ingredients. Re-Kaged has been rigorously tested for quality and purity, carrying the Informed-Choice certified banner confirming zero banned substances. 
              </p>
            </div>

            <div className="bg-amber-50 rounded-3xl p-8 border border-amber-100 flex items-start gap-4">
              <Info className="text-amber-700 w-8 h-8 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-amber-950 text-lg mb-1">Our Verdict</h3>
                <p className="text-amber-900 leading-relaxed text-sm">
                  With premium fast-recovery peptides, digestive ease, and refreshing Orange Cream premium taste, Re-Kaged delivers first-class professional recovery status at an incredibly reasonable price point.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
