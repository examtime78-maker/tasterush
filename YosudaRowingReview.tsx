import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Heart, Sparkles, Activity } from 'lucide-react';

export default function YosudaRowingReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2026/01/YOSUDA-R2-Rowing-Machine-for-Home1.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/01/YOSUDA-R2-Rowing-Machine-for-Home2.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/01/YOSUDA-R2-Rowing-Machine-for-Home3.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/01/YOSUDA-R2-Rowing-Machine-for-Home4.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Resistance Mechanism', value: 'Ultra-Quiet Magnetic (< 35dB)' },
    { label: 'Connectivity Support', value: 'Bluetooth (Kinomap / Holofit Compatible)' },
    { label: 'Display Metrics', value: 'LCD Monitor (Time, Count, Calories, Total Count)' },
    { label: 'Structural Build', value: 'Ergonomic Padded Seat & Premium Aluminum Rail' },
    { label: 'Weight Capacity', value: '350 lbs (158 kg)' },
    { label: 'Space Saving Design', value: 'Foldable Upright Easy Storage' },
    { label: 'Primary Focus', value: 'Full-Body Endurance & Cardiovascular Conditioning' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-slate-50 min-h-screen text-slate-950 font-sans pb-32"
    >
      <div className="bg-slate-900 border-b border-slate-800 text-slate-100 text-center py-3 text-xs font-bold px-4 tracking-wide shadow-sm">
        HOME GYM INNOVATION: Foldable Quiet-Drive Magnetic Row. Verification Deal Link Active.
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
                  alt="YOSUDA R2 Magnetic Rowing Machine" 
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
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Yosuda Rowing Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" /> Rowing Machines
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight">
                YOSUDA R2 <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 text-2xl md:text-3xl font-black block mt-1">Rowing Machine for Home</span>
              </h1>
              <p className="text-slate-600 font-semibold text-md">Ultra-Quiet Magnetic Resistance & Bluetooth-Enabled</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-400">
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">5.0 (1 Certified Customer Review)</span>
              </div>

              <div className="py-2 border-y border-slate-100">
                <span className="text-3xl font-black text-slate-900">$699.99</span>
                <span className="text-slate-400 text-xs ml-2 font-medium">Free Home Delivery Options Available</span>
              </div>

              <p className="text-slate-650 leading-relaxed text-md">
                Elevate your residential training experience with the YOSUDA R2 Rowing Machine. Specially engineered to offer an exceptionally silent magnetic row under 35 decibels, this premium foldable platform integrates directly with fitness apps like Kinomap and Holofit via Bluetooth, ensuring highly engaging interactive cardio routines.
              </p>

              <div className="pt-4">
                <a 
                  href="https://amzn.to/43u7pxG" 
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
              <Sparkles className="text-amber-400" /> Core Product Highlights
            </h2>
            <ul className="space-y-5">
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-amber-300 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">Whisper-Quiet Magnetic Action</h4>
                  <p className="text-slate-400 text-sm">Maintains noise levels strictly below 35dB, perfect for late-night or early-morning home workouts without disruption.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-amber-300 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">Next-Gen App Integrations</h4>
                  <p className="text-slate-400 text-sm">Seamless Bluetooth connection coordinates workouts in real-time with Kinomap, Holofit, and other top-tier training apps.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-amber-300 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">Foldable Upright Geometry</h4>
                  <p className="text-slate-400 text-sm">Space-saving physical engineering folds upright quickly with convenient built-in caster wheels for smooth mobility.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                <ShieldCheck className="text-slate-700" /> Machine Specifications
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
