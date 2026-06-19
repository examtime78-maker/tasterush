import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Activity, ShieldCheck, Heart, Sparkles, AlertCircle, Info, Star } from 'lucide-react';

export default function ExerciseBikeReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2026/02/Foldable-Exercise-Bike-Multifunctional-Indoor-Stationary-Bike1.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/02/Foldable-Exercise-Bike-Multifunctional-Indoor-Stationary-Bike2.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/02/Foldable-Exercise-Bike-Multifunctional-Indoor-Stationary-Bike3.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Resistance Type', value: '8-Level Magnetic Resistance' },
    { label: 'Space Saving', value: 'Foldable Space-Saving Build' },
    { label: 'Monitoring', value: 'LCD Digital Performance Monitor' },
    { label: 'Safety Accessories', value: 'Pedal Straps & Stabilizer Feet' },
    { label: 'Weight Limit', value: 'Up to 260 lbs Capacity' },
    { label: 'Comfort Extras', value: 'Deep Cushion Seat & Phone Holder' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-slate-50 min-h-screen text-slate-950 font-sans pb-32"
    >
      <div className="bg-amber-50 border-b border-amber-200 text-amber-800 text-center py-3 text-xs font-semibold px-4">
        Affiliate Review Platform: Contains tracking redirects. We may earn relative credentials or margins on qualifying sales.
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
                  alt="Foldable Exercise Bike Indoor Portable" 
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
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Bike Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <span className="bg-amber-100 text-amber-850 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-amber-600" /> Cardio & Conditioning
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight">
                Foldable Exercise Bike
              </h1>
              <p className="text-amber-600 font-semibold text-lg">8-Level Magnetic Resistance Indoor Bike</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-400">
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">(4.7 out of 5 - Top Home Gym Choice)</span>
              </div>

              <div className="py-2 border-y border-slate-100">
                <span className="text-3xl font-black text-emerald-600">$139.99</span>
                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded ml-3">Free Delivery Offer</span>
              </div>

              <p className="text-slate-600 leading-relaxed text-md">
                Maximize calorie burning without sacrificing precious residence square footage. This multifunctional indoor stationary bike includes smooth magnetic mechanics, an adjustable padded seat, and a quick-release locking mechanism for effortless vertical folding storage.
              </p>

              <div className="pt-4">
                <a 
                  href="https://amzn.to/3PCaQiG" 
                  target="_blank" 
                  rel="nofollow sponsored noopener" 
                  className="bg-gradient-to-r from-[#ff9900] to-[#ff6a00] text-white font-bold text-center px-10 py-4 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 animate-pulse"
                >
                  <ShoppingCart className="w-5 h-5" /> Order on Amazon Now
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Feature Highlights & Specifications */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-10 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 border-b border-slate-800 pb-3">
              <Sparkles className="text-amber-400" /> Premium Design Perks
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-amber-400 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">Multifunctional Quiet System</h4>
                  <p className="text-slate-400 text-sm">Engineered precision flywheel produces a virtually silent indoor spinning environment absolute for late-night cardio sprints.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-amber-400 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">8-Level Level Intensity</h4>
                  <p className="text-slate-400 text-sm">Easily adjust resistance from low traction warmups up to high-intensity muscle sculpting slopes with a custom mechanical twist toggle.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-amber-400 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">Complete Cardio Metrics</h4>
                  <p className="text-slate-400 text-sm">The LCD performance readout records, organizes, and showcases real-time workout timelines, velocity levels, coverage distance, and calorie counters.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                <ShieldCheck className="text-slate-700" /> Core Specifications
              </h2>
              <div className="grid grid-cols-1 gap-y-3 font-medium">
                {specs.map((spec, i) => (
                  <div key={i} className="flex justify-between py-2.5 border-b border-slate-100 last:border-0 text-sm text-slate-700">
                    <span className="font-bold text-slate-500">{spec.label}</span>
                    <span>{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#fffbeb] rounded-3xl p-8 border border-amber-100 flex items-start gap-4">
              <AlertCircle className="text-amber-700 w-8 h-8 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-amber-950 text-lg mb-1">Our Expert Verdict</h3>
                <p className="text-amber-900 leading-relaxed text-sm">
                  Superb cost-efficiency, simple assembly, and vertical space advantages make this the absolute best multi-functional stationary system in its budget classification. Highly recommended for remote workspace cardio.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
