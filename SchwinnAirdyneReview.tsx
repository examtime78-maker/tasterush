import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Heart, Sparkles, Activity } from 'lucide-react';

export default function SchwinnAirdyneReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2026/01/Schwinn-Airdyne-Bike-Series1.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/01/Schwinn-Airdyne-Bike-Series1.jpg', // Falback duplicate for structural symmetry
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Resistance Type', value: 'Unlimited Air Resistance' },
    { label: 'Drive System', value: 'Single-Stage Belt Drive' },
    { label: 'Max User Weight', value: '350 lbs (158 kg)' },
    { label: 'Display Console', value: 'High-Resolution LCD' },
    { label: 'Workout Programs', value: 'HIIT Intervals, Heart Rate, Target Goals' },
    { label: 'Handlebars', value: 'Multi-Position Grip Dual Action' },
    { label: 'Core Metrics', value: 'RPM, Speed, Watts, Calories, Time, Distance' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-slate-50 min-h-screen text-slate-950 font-sans pb-32"
    >
      <div className="bg-emerald-950 border-b border-emerald-900 text-emerald-100 text-center py-3 text-xs font-bold px-4 tracking-wide shadow-sm">
        PREMIUM MEK MECHANICAL OUTLET: Unlimited Scaling Wind Resistance Core. Secure Direct Amazon Purchase Verified.
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
                  alt="Schwinn Airdyne AD7 Air Bike Dual Action Cardio" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex gap-4 justify-center">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`w-20 h-20 rounded-xl border-2 overflow-hidden bg-slate-50 p-1 transition-all ${activeImg === img ? 'border-emerald-600 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Airdyne Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-emerald-650" /> Premium Air Bike
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight">
                Schwinn Airdyne <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 text-2xl md:text-3xl font-black block mt-1">AD7 Air Bike</span>
              </h1>
              <p className="text-emerald-700 font-semibold text-md">High-Performance Full-Body Metabolic Conditioning</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-400">
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">5.0 (Vouched by Fitness Coaches)</span>
              </div>

              <div className="py-2 border-y border-slate-100">
                <span className="text-3xl font-black text-slate-900">$1,299.00</span>
                <span className="text-slate-400 text-xs ml-2 font-medium">Free Shipping & Heavy Delivery Support Available</span>
              </div>

              <p className="text-slate-650 leading-relaxed text-md">
                Experience high-performance, full-body cardiovascular training with the legendary Schwinn Airdyne AD7. Featuring an unlimited wind resistance system that dynamically increases as you pedal and push harder, this commercial-grade air bike is meticulously engineered for high-intensity HIIT sessions, continuous endurance conditioning, and efficient metabolic recovery.
              </p>

              <div className="pt-4">
                <a 
                  href="https://amzn.to/4e2Mesy" 
                  target="_blank" 
                  rel="nofollow sponsored noopener" 
                  className="bg-gradient-to-r from-[#ff9900] to-[#e68a00] hover:from-[#e68a00] hover:to-[#cc7a00] text-slate-950 font-bold text-center px-10 py-4.5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-lg"
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
              <Sparkles className="text-emerald-400" /> Active Performance Advantages
            </h2>
            <ul className="space-y-5">
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-emerald-400 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">Unlimited Resistance Potential</h4>
                  <p className="text-slate-400 text-sm">Features a robust perimeter-weighted fan that delivers linear wind resistance scaling in direct proportion to your effort levels.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-emerald-400 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">Total Upper & Lower Body Workout</h4>
                  <p className="text-slate-400 text-sm">Synchronized multi-position handlebars engage your core, arms, and back while building intense cardiovascular power.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-emerald-400 shrink-0">✓</div>
                <div>
                  <h4 className="font-bold">Heavy-Duty Frame & Custom Seats</h4>
                  <p className="text-slate-400 text-sm">Industrial powder-coated solid steel chassis supports up to 350 lbs with dynamic adjustable seating arrangements.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                <ShieldCheck className="text-slate-700" /> Complete Performance Specs
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
