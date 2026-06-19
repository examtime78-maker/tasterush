import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Heart, Sparkles, Award } from 'lucide-react';

export default function MultiCollagenReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2026/02/Multi-Collagen-Protein-Powder-2-Pounds1.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/02/Multi-Collagen-Protein-Powder-2-Pounds1.jpg', // we can use the same image as a fallback thumb
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Collagen per Serving', value: '10–11g Collagen Peptides' },
    { label: 'Collagen Types Included', value: 'Types I, II, III, V & X' },
    { label: 'Key Bioactives', value: 'Biotin, Hyaluronic Acid, Vitamin C' },
    { label: 'Dietary Compatibility', value: 'Keto / Paleo / Non-GMO Friendly' },
    { label: 'Flavor Profile', value: 'Pure Unflavored & Easy to Mix' },
    { label: 'Size', value: '2 Pounds (Bulk Tub)' },
    { label: 'Best Use', value: 'Daily Skin, Joint, Hair & Nail Health' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-slate-50 min-h-screen text-slate-950 font-sans pb-32"
    >
      <div className="bg-amber-100 border-b border-amber-200 text-amber-900 text-center py-3 text-xs font-bold px-4 tracking-wide shadow-sm">
        ACTIVE DEALS: Multi-Sourced Bioactive Collagen Peptides. 100% Direct Amazon Link Verified.
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
                  alt="Multi Collagen Protein Powder 2 Lbs Premium Complex" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex gap-4 justify-center">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`w-20 h-20 rounded-xl border-2 overflow-hidden bg-slate-50 p-1 transition-all ${activeImg === img ? 'border-amber-500 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Collagen Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" /> Types I, II, III, V & X
                </span>
                <span className="bg-green-100 text-[#166534] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight">
                Multi Collagen <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 text-2xl md:text-3xl font-black block mt-1">Protein Powder (2 Lbs)</span>
              </h1>
              <p className="text-amber-750 font-semibold text-md">Hydrolyzed Collagen Peptides + Biotin, Hyaluronic Acid, Vitamin C</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-400">
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">5.0 (Daily Wellness Standard)</span>
              </div>

              <div className="py-2 border-y border-slate-100">
                <span className="text-3xl font-black text-green-600">$49.95</span>
                <span className="text-slate-400 text-xs ml-2 font-medium">Free Shipping Options Available</span>
              </div>

              <p className="text-slate-650 leading-relaxed text-md">
                Fortify your structural health, encourage youthful skin elasticities, and support joint cartilage with this premium multi-source hydrolyzed collagen powder. Compounded with Bioactive Types I, II, III, V, and X, this unflavored blend mixes effortlessly into hot or cold morning beverages/recipes without any thick texture.
              </p>

              <div className="pt-4">
                <a 
                  href="https://amzn.to/4dtsaj0" 
                  target="_blank" 
                  rel="nofollow sponsored noopener" 
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-650 text-white font-bold text-center px-10 py-4.5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-lg"
                >
                  <ShoppingCart className="w-5 h-5" /> Buy on Amazon
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Detailed Spec Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          <div className="bg-slate-900 text-white rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3">
              <Sparkles className="text-amber-400" /> Complete Wellness Matrix
            </h2>
            <ul className="space-y-5">
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-amber-400 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">10-11g Collagen Peptides</h4>
                  <p className="text-slate-400 text-sm">Provides standard-dosed essential peptides to support bone and muscle connection structures.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-amber-400 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">Hair, Skin & Nail Complex</h4>
                  <p className="text-slate-400 text-sm">Packed with therapeutic Biotin, Hyaluronic Acid, and Vitamin C to stimulate absolute beauty and collagen synthesis.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-amber-400 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">Pure & Highly Dissolvable</h4>
                  <p className="text-slate-400 text-sm">Completely unflavored, easily digested, zero carbohydrates, keto/paleo compatible formula designed for everyday routines.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                <ShieldCheck className="text-slate-700" /> Batch Specifications
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
