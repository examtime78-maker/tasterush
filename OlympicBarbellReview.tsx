import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Heart, Sparkles, Award } from 'lucide-react';

export default function OlympicBarbellReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2025/11/7FT-Olympic-Barbell-for-Weightlifting-and-Power-Lifting-1.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/7FT-Olympic-Barbell-for-Weightlifting-and-Power-Lifting-7.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/7FT-Olympic-Barbell-for-Weightlifting-and-Power-Lifting-2.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/7FT-Olympic-Barbell-for-Weightlifting-and-Power-Lifting-3.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Overall Length', value: '7 Feet (84 Inches / 220 cm)' },
    { label: 'Sleeve Compatibility', value: 'Fits All Standard 2-Inch Olympic Weight Plates' },
    { label: 'Grip Style', value: 'Medium-Depth Diamond Knurled Pattern' },
    { label: 'Rotation System', value: 'Professional Smooth-Spin Bearings' },
    { label: 'Material Quality', value: 'High-Tensile Alloy Steel Shaft/Sleeves' },
    { label: 'Corrosion Shield', value: 'Anti-Rust Electroplated Chrome Finish' },
    { label: 'Core Usage Scope', value: 'Squats, Deadlifts, Bench Presses, Snatch & Clean' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-slate-50 min-h-screen text-slate-950 font-sans pb-32"
    >
      <div className="bg-slate-950 border-b border-slate-900 text-slate-100 text-center py-3 text-xs font-bold px-4 tracking-wide shadow-sm">
        OLYMPIC STRENGTH UPGRADE: Heavy-Duty 7FT Structural Steel Barbell. Verified Direct Amazon Purchase Route.
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
                  alt="7FT Olympic Barbell for Weightlifting" 
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
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Olympic Barbell Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-amber-100">
                  <Award className="w-3.5 h-3.5 text-amber-650" /> Barbells & Strength
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight">
                7FT Olympic Barbell <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-655 to-yellow-600 text-2xl md:text-3xl font-black block mt-1">Weightlifting & Powerlifting Bar</span>
              </h1>
              <p className="text-slate-650 font-semibold text-md">Precision Knurling Ground Handle, Rust-Resistant Electroplated Chrome</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-400">
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">5.0 (1 Certified Powerlifter Review)</span>
              </div>

              <div className="py-2 border-y border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-slate-400 text-lg line-through font-medium">$111.11</span>
                  <span className="text-3xl font-black text-rose-600">$89.99</span>
                  <span className="text-xs bg-red-150 text-red-800 font-bold px-2 py-0.5 rounded-md ml-2 font-semibold">19% OFF</span>
                </div>
                <span className="text-slate-400 text-xs font-medium block mt-1">Free Shipping & Quick Delivery Available on Amazon</span>
              </div>

              <p className="text-slate-650 leading-relaxed text-md">
                Elevate your strength training with this robust 7FT Olympic Barbell, designed specifically for serious athletes, dedicated powerlifters, and home gym set-ups. Engineered to survive standard dynamic pressure levels, this barbell provides smooth bearing rotation and a precision-knurled grip for premium tactile control.
              </p>

              <div className="pt-4">
                <a 
                  href="https://amzn.to/4v46YG0" 
                  target="_blank" 
                  rel="nofollow sponsored noopener" 
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-655 text-white font-bold text-center px-10 py-4.5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-lg"
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
              <Sparkles className="text-amber-450" /> Elite Dynamic Highlights
            </h2>
            <ul className="space-y-5">
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-amber-450 shrink-0 text-amber-300 font-bold">✓</div>
                <div>
                  <h4 className="font-bold">Full 7FT Olympic Standard Size</h4>
                  <p className="text-slate-400 text-sm">Perfect dimensions to fit easily into wide power racks, squat racks, and bench presses, maintaining total stability and balance.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-amber-450 shrink-0 text-amber-300 font-bold">✓</div>
                <div>
                  <h4 className="font-bold">Diamond Non-Slip Knurled Shaft</h4>
                  <p className="text-slate-400 text-sm">Features medium-depth crosscut knurling pattern providing superior tactile traction even when hands are damp, without tearing calluses.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-amber-450 shrink-0 text-amber-300 font-bold">✓</div>
                <div>
                  <h4 className="font-bold">Fluid Bearing Sleeve Rotation</h4>
                  <p className="text-slate-400 text-sm">Specially designed roller bearings inside sleeves allow standard plates to spin seamlessly, reducing torsional wrist pressure during Olympic cleans.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                <ShieldCheck className="text-slate-700" /> Equipment Specs & Chemistry Mat
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
