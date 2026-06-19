import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Heart, Sparkles, Award } from 'lucide-react';

export default function MuscleTechBcaasReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2025/11/MuscleTech-BCAA-Powder-for-Men-Women-Strawberry-Watermelon-Amino-Acids-1.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/MuscleTech-BCAA-Powder-for-Men-Women-Strawberry-Watermelon-Amino-Acids-2.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/MuscleTech-BCAA-Powder-for-Men-Women-Strawberry-Watermelon-Amino-Acids-3.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/MuscleTech-BCAA-Powder-for-Men-Women-Strawberry-Watermelon-Amino-Acids-4.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'BCAA Ratio', value: 'Scientifically Standardized 2:1:1' },
    { label: 'Active ingredients', value: 'L-Leucine, L-Isoleucine, L-Valine & Hydration Electrolytes' },
    { label: 'Primary Flavor Profile', value: 'Refreshing Strawberry Watermelon' },
    { label: 'Sugar Structure', value: 'Zero Sugar & Gluten-Free Formula' },
    { label: 'Key Objectives', value: 'Endurance Maximization, Recovery Speed, Hydration Support' },
    { label: 'Solubility Level', value: 'Instantized Ultra-Fine Mixability' },
    { label: 'Ideal Audience', value: 'Athletes, Weight Lifters, Run Specialists' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-slate-50 min-h-screen text-slate-950 font-sans pb-32"
    >
      <div className="bg-blue-950 border-b border-blue-900 text-blue-100 text-center py-3 text-xs font-bold px-4 tracking-wide shadow-sm">
        WORKOUT RECOVERY: Advanced MuscleTech 2:1:1 BCAA Complex with Hydration Electrolytes. Secure Amazon Connection.
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
                  alt="MuscleTech BCAA Powder Strawberry Watermelon Recovery Supplement" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex gap-3 justify-center flex-wrap">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-xl border-2 overflow-hidden bg-slate-50 p-1 transition-all ${activeImg === img ? 'border-blue-600 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`MuscleTech BCAA Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-blue-100">
                  <Award className="w-3.5 h-3.5 text-blue-700" /> Amino Acids & Recovery
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight">
                MuscleTech <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-800 text-2xl md:text-3xl font-black block mt-1">BCAA Powder (Strawberry Watermelon)</span>
              </h1>
              <p className="text-slate-650 font-semibold text-md">Scientifically Dosed 2:1:1 Essential Aminos + Hydration Electrolytes</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">5.0 (2 Certified Athlete Reviews)</span>
              </div>

              <div className="py-2 border-y border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-slate-400 text-lg line-through font-medium">$29.99</span>
                  <span className="text-3xl font-black text-blue-700">$23.99</span>
                  <span className="text-xs bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded-md ml-2 font-semibold">20% OFF</span>
                </div>
                <span className="text-slate-400 text-xs font-medium block mt-1">Free Shipping on qualifying Amazon orders</span>
              </div>

              <p className="text-slate-650 leading-relaxed text-md">
                Fuel your workouts with MuscleTech BCAA Powder featuring a scientifically balanced 2:1:1 amino acid ratio, electrolyte hydration support, and a refreshing Strawberry Watermelon flavor. Designed to support muscle recovery, endurance, hydration, and reduced workout fatigue.
              </p>

              <div className="pt-4">
                <a 
                  href="https://amzn.to/3PXhj7X" 
                  target="_blank" 
                  rel="nofollow sponsored noopener" 
                  className="bg-gradient-to-r from-[#ff9900] to-[#ffb84d] hover:from-[#e68a00] hover:to-[#e6a540] text-slate-950 font-bold text-center px-10 py-4.5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-lg"
                >
                  <ShoppingCart className="w-5 h-5 text-slate-950" /> Buy on Amazon
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Detailed Spec Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          <div className="bg-slate-900 text-white rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3">
              <Sparkles className="text-blue-400" /> Performance Advantages
            </h2>
            <ul className="space-y-5">
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-blue-450 shrink-0 text-amber-300 font-bold">✓</div>
                <div>
                  <h4 className="font-bold">2:1:1 BCAA Ratio</h4>
                  <p className="text-slate-400 text-sm">Packed with key muscle-building components Leucine, Isoleucine, and Valine to spark MPS (Muscle Protein Synthesis) and curb protein breakdown.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-blue-450 shrink-0 text-amber-300 font-bold">✓</div>
                <div>
                  <h4 className="font-bold">Electrolyte Replenishment</h4>
                  <p className="text-slate-400 text-sm">Enhanced with critical minerals to maintain fluid balance, prevent skeletal cramping, and maximize cellular stamina.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-blue-450 shrink-0 text-amber-300 font-bold">✓</div>
                <div>
                  <h4 className="font-bold">Zero Sugar, High Solubility</h4>
                  <p className="text-slate-400 text-sm">Integrates cleanly with normal shaker cups yielding zero chalky clumps. Fits keto, low-carb, and low-calorie macro setups perfectly.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                <ShieldCheck className="text-slate-700" /> Supplement Fact Highlights
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
