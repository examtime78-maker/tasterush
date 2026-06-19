import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Sparkles, AlertCircle, Heart, Star, CheckCircle } from 'lucide-react';

export default function YogaBlocksReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2026/02/Yoga-Blocks-2-Pcs1-1.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/02/Yoga-Blocks-2-Pcs2-1.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-slate-50 min-h-screen text-slate-950 font-sans pb-32"
    >
      <div className="bg-amber-50 border-b border-amber-200 text-amber-800 text-center py-3 text-xs font-semibold px-4">
        Affiliate Review Platform: Contains tracking redirects. We may earn minor earnings relative to eligible orders.
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
                  alt="Yoga Blocks EVA Foam Set" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex gap-4 justify-center">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`w-20 h-20 rounded-xl border-2 overflow-hidden bg-slate-50 p-1 transition-all ${activeImg === img ? 'border-indigo-500 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Yoga Block Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <span className="bg-indigo-100 text-indigo-850 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-indigo-600" /> Yoga & Meditation
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight">
                Yoga Blocks EVA Foam <span className="text-xl md:text-2xl text-slate-400 block mt-2">(Set of 2 Pieces)</span>
              </h1>
              <p className="text-indigo-600 font-semibold text-lg">Stretching & Meditation Support</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-400">
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">(4.9 out of 5 - Top Rated Support)</span>
              </div>

              <div className="py-2 border-y border-slate-100">
                <span className="text-3xl font-black text-emerald-600">$11.99</span>
                <span className="text-slate-400 text-xs ml-2 font-medium">VAT inclusive</span>
              </div>

              <p className="text-slate-600 leading-relaxed text-md">
                Find stability, ease difficult balances, and deepen your stretches with this set of 2 ultralight high-density yoga blocks. Made of supportive closed-cell EVA foam, they provide a reliable, clean, non-absorbent surface for customized restorative alignment.
              </p>

              <div className="pt-4">
                <a 
                  href="https://amzn.to/49fsXSc" 
                  target="_blank" 
                  rel="nofollow sponsored noopener" 
                  className="bg-gradient-to-r from-[#ff9900] to-[#ff6a00] text-white font-bold text-center px-10 py-4 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" /> Grab Now on Amazon
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Alignment & Stability Advantages */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-10 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 border-b border-slate-800 pb-3">
              <Sparkles className="text-indigo-400" /> Core Strengths
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-indigo-400 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">Heavy-Duty Closed-Cell Foam</h4>
                  <p className="text-slate-400 text-sm">Resists indentations and compression while preserving structural integrity during bodyweight poses.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-indigo-400 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">Moisture-Resistant Surfaces</h4>
                  <p className="text-slate-400 text-sm">Odor-free, anti-microbial material repels sweat, making sanitization fast and straightforward post-session.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-indigo-400 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">Beveled Comfort Edges</h4>
                  <p className="text-slate-400 text-sm">Ergonomically contoured slip-free rounded corners prevent pressure pinches or palm slips during intense weight transfers.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-800">
                <CheckCircle className="text-slate-700" /> Multi-Angle Utility
              </h2>
              <p className="text-slate-650 leading-relaxed text-sm">
                Each block can be positioned vertically, flat, or sideways to adjust the auxiliary ground height support of 3-inches, 4-inches, or 6-inches. Allows deep yoga postures to fit physical flexibility curves comfortably.
              </p>
            </div>

            <div className="bg-[#eef2ff] rounded-3xl p-8 border border-indigo-100 flex items-start gap-4">
              <AlertCircle className="text-indigo-700 w-8 h-8 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-indigo-950 text-lg mb-1">Our Quick Verdict</h3>
                <p className="text-indigo-900 leading-relaxed text-sm">
                  At under $12, this high-density material set offers premium stability support. It remains a fundamental asset for novices, veteran yogis, and standard hamstring routines.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
