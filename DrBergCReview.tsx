import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Heart, Sparkles, Award } from 'lucide-react';

export default function DrBergCReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2025/11/Dr.-Berg-Chewable-Vitamin-C-Complex-1.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Dr.-Berg-Chewable-Vitamin-C-Complex-2.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Dr.-Berg-Chewable-Vitamin-C-Complex-3.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Dr.-Berg-Chewable-Vitamin-C-Complex-4.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Vitamin C per Serving', value: '200 mg (from Organic Acerola & Whole Foods)' },
    { label: 'Berry Complex Blend', value: 'Acerola Cherry, Acai, Blueberry, Strawberry' },
    { label: 'Delivery Format', value: 'Delicious Chewable Wafers' },
    { label: 'Primary Health Benefits', value: 'Immune Vigor, Antioxidant Shield & Collagen Synthesis' },
    { label: 'Formula Standards', value: 'Non-GMO, Vegetarian-Friendly, Whole Food Sourced' },
    { label: 'Digestive Tolerance', value: 'Gentle, Smooth, Non-Acidic Whole Berry Formulation' },
    { label: 'Servings Per Container', value: '65 Chewable Wafers' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-slate-50 min-h-screen text-slate-950 font-sans pb-32"
    >
      <div className="bg-emerald-950 border-b border-emerald-900 text-emerald-100 text-center py-3 text-xs font-bold px-4 tracking-wide shadow-sm">
        ORGANIC immune SUPPORT: Whole-Food Dr. Berg Vitamin C Chewables. Direct Verified Purchase Route.
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
                  alt="Dr. Berg Chewable Vitamin C Complex Organic" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex gap-3 justify-center flex-wrap">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-xl border-2 overflow-hidden bg-slate-50 p-1 transition-all ${activeImg === img ? 'border-[#ff9900] shadow-md' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Vitamin C Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-emerald-700" /> Immune Support Supplement
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight">
                Dr. Berg <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-700 text-2xl md:text-3xl font-black block mt-1">Chewable Vitamin C Complex Organic</span>
              </h1>
              <p className="text-slate-650 font-semibold text-md">Freeze-Dried Organic Berry Blend with Acerola Cherry & Acai</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">5.0 (1 Certified Customer Review)</span>
              </div>

              <div className="py-2 border-y border-slate-100">
                <span className="text-3xl font-black text-slate-900">$30.99</span>
                <span className="text-slate-400 text-xs ml-2 font-medium">Free Shipping Options Available on Amazon</span>
              </div>

              <p className="text-slate-650 leading-relaxed text-md">
                Dr. Berg Chewable Vitamin C Complex combines 200mg of whole-food sourced vitamin C with a premium, freeze-dried organic berry blend, including acerola cherry, acai, blueberry, and strawberry. Designed for optimal immune support, deep cellular antioxidant protection, structural collagen wellness, and easy daily chewable supplementation without swallowing bulky capsules.
              </p>

              <div className="pt-4">
                <a 
                  href="https://amzn.to/4uBKDQs" 
                  target="_blank" 
                  rel="nofollow sponsored noopener" 
                  className="bg-gradient-to-r from-[#ff9900] to-[#ffb84d] hover:from-[#e68a00] hover:to-[#e6a540] text-slate-950 font-bold text-center px-10 py-4.5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-lg"
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
              <Sparkles className="text-emerald-400" /> Core Whole-Food Benefits
            </h2>
            <ul className="space-y-5">
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-emerald-400 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">200mg Natural Vitamin C Per Serving</h4>
                  <p className="text-slate-400 text-sm">Sourced entirely from organic whole foods instead of synthetic ascorbic acid for high biological affinity.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-emerald-400 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">Freeze-Dried Berry Antioxidant Blend</h4>
                  <p className="text-slate-400 text-sm">Combines superfruits like acerola cherries, acai, blueberries, and strawberries to deliver critical cofactors, micronutrients, and bioflavonoids.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-emerald-400 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">Collagen & Skin Integrity</h4>
                  <p className="text-slate-400 text-sm">Essential cofactor for native collagen matrix synthesis, reinforcing bone joints, hair thickness, vascular health, and facial skin glow.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                <ShieldCheck className="text-slate-700" /> Ingredient Certification Matrix
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
          </div>

        </div>

      </div>
    </motion.div>
  );
}
