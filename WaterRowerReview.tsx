import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Heart, Sparkles, Activity } from 'lucide-react';

export default function WaterRowerReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2026/01/WaterRower-Water-Rower-Exercise-Machine6.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/01/WaterRower-Water-Rower-Exercise-Machine1.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/01/WaterRower-Water-Rower-Exercise-Machine2.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/01/WaterRower-Water-Rower-Exercise-Machine3.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Resistance Mechanism', value: 'Self-Regulating Water Resistance WaterFlywheel' },
    { label: 'Frame Construction', value: 'Handcrafted Solid Wood Frame' },
    { label: 'Workout Dynamics', value: 'Dynamic Speed-Based Scaling' },
    { label: 'Acoustics', value: 'Calming Water Whoosh (Extremely Quiet)' },
    { label: 'Storage Ability', value: 'Stands Vertically (Minimal Footprint)' },
    { label: 'Performance Tracker', value: 'Series 4 S4 Performance Monitor' },
    { label: 'Impact Level', value: 'Zero-Joint Strain Full-Body Cardio' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-slate-50 min-h-screen text-slate-950 font-sans pb-32"
    >
      <div className="bg-amber-950 border-b border-amber-900 text-amber-100 text-center py-3 text-xs font-bold px-4 tracking-wide shadow-sm">
        PREMIUM CRAFTSMANSHIP: Hearty Handcrafted Solid Wood WaterRower. Officially Secured Purchase Link.
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
                  alt="WaterRower Premium Water Rower Exercise Machine" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex gap-3 justify-center flex-wrap">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-xl border-2 overflow-hidden bg-slate-50 p-1 transition-all ${activeImg === img ? 'border-amber-700 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`WaterRower Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-amber-750" /> Premium Rowing Machine
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight">
                WaterRower <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-amber-900 text-2xl md:text-3xl font-black block mt-1">Water Rower Machine</span>
              </h1>
              <p className="text-slate-600 font-semibold text-md">Handcrafted Wood, Interactive Waterflywheel, Calming Acoustics</p>
              
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
                <span className="text-3xl font-black text-slate-900">$1,160.00</span>
                <span className="text-slate-400 text-xs ml-2 font-medium">Free Signature Logistics Delivery Available</span>
              </div>

              <p className="text-slate-650 leading-relaxed text-md">
                Experience authentic water-powered rowing in the comfort of your home with the handcrafted WaterRower. Combining solid wood aesthetics and functional engineering, this rower delivers self-adjusting fluid resistance through a premium WaterFlywheel, assuring a low-impact, incredibly quiet, and sensory-satisfying workout.
              </p>

              <div className="pt-4">
                <a 
                  href="https://amzn.to/4dvY4vl" 
                  target="_blank" 
                  rel="nofollow sponsored noopener" 
                  className="bg-gradient-to-r from-[#ff9900] to-[#ff6a00] hover:from-[#e68a00] hover:to-[#e65c00] text-white font-bold text-center px-10 py-4.5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-lg"
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
              <Sparkles className="text-amber-400" /> Dynamic Advantages
            </h2>
            <ul className="space-y-5">
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-amber-300 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">Authentic Fluid Resistance Feel</h4>
                  <p className="text-slate-400 text-sm">Provides standard self-regulating kinetic response matching authentic outdoor oars. Pushing harder naturally intensifies the workload.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-amber-300 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">Handcrafted Solid Hardwood Frame</h4>
                  <p className="text-slate-400 text-sm">Aesthetically pleasing wood grain patterns absorb vibration and mechanical hum, boosting room décor effortlessly.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-amber-300 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">Space-Saving Vertical Storage</h4>
                  <p className="text-slate-400 text-sm">When unused, simply tip it upright to stand seamlessly against any wall, occupying no more floor area than an ordinary dining chair.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                <ShieldCheck className="text-slate-700" /> Technical Design Metrics
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
