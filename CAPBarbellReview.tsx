import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Heart, Sparkles, Award } from 'lucide-react';

export default function CAPBarbellReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2026/01/CAP-Barbell-2-Inch-Olympic-Bumper-Plate-Weight-Set-with-6-Post-Rack1-1.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/01/CAP-Barbell-2-Inch-Olympic-Bumper-Plate-Weight-Set-with-6-Post-Rack2-1.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/01/CAP-Barbell-2-Inch-Olympic-Bumper-Plate-Weight-Set-with-6-Post-Rack3-1.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/01/CAP-Barbell-2-Inch-Olympic-Bumper-Plate-Weight-Set-with-6-Post-Rack4-1.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Barbell Sleeve Compatibility', value: 'Standard 2-Inch Olympic Barbells' },
    { label: 'Outer Shell Material', value: 'Durable Solid Rubber-Coated Protective Finish' },
    { label: 'Structural Insert', value: 'Reinforced Solid Steel Internal Hub' },
    { label: 'Diameter Standard', value: 'Uniform Outer Diameter for Solid Alignment' },
    { label: 'Primary Use Cases', value: 'Deadlifts, Squats, Clearing, Bench & Snatch' },
    { label: 'Floor Impact Protection', value: 'High Shock Absorption Elasticity' },
    { label: 'Included Configuration', value: 'Multi-Weight Plates Combination Options' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-slate-50 min-h-screen text-slate-950 font-sans pb-32"
    >
      <div className="bg-slate-900 border-b border-slate-800 text-slate-100 text-center py-3 text-xs font-bold px-4 tracking-wide shadow-sm">
        GARAGE STRENGTH UPGRADES: Premium Rubber Bumper Plates. Verified Direct Amazon Purchase Route.
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
                  alt="CAP Barbell Economy Olympic Bumper Plate Set" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex gap-3 justify-center flex-wrap">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-xl border-2 overflow-hidden bg-slate-50 p-1 transition-all ${activeImg === img ? 'border-amber-500 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`CAP Barbell Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-150 text-slate-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-slate-200">
                  <Award className="w-3.5 h-3.5" /> Weight Plates
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight">
                CAP Barbell <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-650 to-amber-600 text-2xl md:text-3xl font-black block mt-1">Economy Olympic Bumper Set</span>
              </h1>
              <p className="text-slate-600 font-semibold text-md">High-Durability Solid Rubber, Steel Center Hub Insertion</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-400">
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">5.0 (1 Certified Gym Custom Review)</span>
              </div>

              <div className="py-2 border-y border-slate-100">
                <span className="text-3xl font-black text-slate-900">Price Varies</span>
                <span className="text-slate-400 text-xs ml-2 font-medium">Click to select bundle setup options</span>
              </div>

              <p className="text-slate-650 leading-relaxed text-md">
                Refine and safeguard your lifting progression with the CAP Barbell Economy Olympic Bumper Plate Set. Highlighting dense, shatterproof natural rubber compounds bonded carefully to standard 2-inch steel center sleeves, this lineup ensures optimal balance, excellent shock reduction, and absolute safety for your home gym setup.
              </p>

              <div className="pt-4">
                <a 
                  href="https://amzn.to/3RJQAfw" 
                  target="_blank" 
                  rel="nofollow sponsored noopener" 
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-650 text-white font-bold text-center px-10 py-4.5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-lg"
                >
                  <ShoppingCart className="w-5 h-5" /> Buy on Amazon Now
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Detailed Spec Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          <div className="bg-slate-900 text-white rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3">
              <Sparkles className="text-red-400" /> Professional Heavy-Duty Highlights
            </h2>
            <ul className="space-y-5">
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-amber-300 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">Standard 2-Inch Sleeves</h4>
                  <p className="text-slate-400 text-sm">Engineered with a solid steel inner bushing that slides seamlessly onto classic Olympic barbells without friction.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-amber-300 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">Elastic Rubber Bounce Control</h4>
                  <p className="text-slate-400 text-sm">Resilient rubber compound formulation protects subfloor surfaces and isolates noise during heavy dropped lifts.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-amber-300 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">Consistent Exterior Profiles</h4>
                  <p className="text-slate-400 text-sm">Perfectly standardized exterior diameters enable flat loading distribution across bar sleeves for proper form mechanics.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                <ShieldCheck className="text-slate-700" /> Physical Spec Matrix
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
