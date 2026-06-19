import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Heart, Sparkles, Award } from 'lucide-react';

export default function StairStepper350Review() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2025/11/Stair-Stepper-for-Home-Gym-350lbs-Stepper-Climber-Machine-1.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Stair-Stepper-for-Home-Gym-350lbs-Stepper-Climber-Machine-2.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Stair-Stepper-for-Home-Gym-350lbs-Stepper-Climber-Machine-3.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Stair-Stepper-for-Home-Gym-350lbs-Stepper-Climber-Machine-4.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Weight Capacity', value: 'Heavy-Duty 350 lbs Rated Support' },
    { label: 'Workout Type', value: 'Total Body Cardio + Upper & Lower Strength' },
    { label: 'Resistance Mechanism', value: 'Smooth & Quiet Hydraulic Cylinders' },
    { label: 'Resistance Training', value: 'Adjustable Resistance Bands Included' },
    { label: 'On-Board Electronics', value: 'Multi-Function LCD Tracking Monitor' },
    { label: 'Pedal Build', value: 'Non-Slip Oversized Textured Footplates' },
    { label: 'Space efficiency', value: 'Compact Home & Apartment Footprint' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-slate-50 min-h-screen text-slate-950 font-sans pb-32"
    >
      <div className="bg-rose-950 border-b border-rose-900 text-rose-100 text-center py-3 text-xs font-bold px-4 tracking-wide shadow-sm">
        HEAVY-DUTY STRENGTH DEAL: 350 lbs Capacity Hydraulic Climbing Stepper. Secure Direct Amazon Route.
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
                  alt="Stair Stepper for Home Gym 350 lbs Capacity" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-slate-50 p-1 transition-all ${activeImg === img ? 'border-rose-600 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Stair Stepper 350 Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-rose-50 text-rose-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-rose-100 animate-pulse">
                  <Award className="w-3.5 h-3.5 text-rose-650" /> Cardio Machines / Home Gym
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight">
                Stair Stepper <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-red-650 text-2xl md:text-3xl font-black block mt-1">350 lbs Stepper Climber Machine</span>
              </h1>
              <p className="text-slate-650 font-semibold text-md">Reinforced Heavy-Duty Frame, Smooth Hydraulic Resistance & Resistance Bands</p>
              
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
                <div className="flex items-baseline gap-2">
                  <span className="text-slate-400 text-lg line-through font-medium">$139.99</span>
                  <span className="text-3xl font-black text-rose-600">$89.99</span>
                  <span className="text-xs bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded-md ml-2 font-semibold">35% OFF</span>
                </div>
                <span className="text-slate-400 text-xs font-medium block mt-1">Free Delivery & Fast Shipping Slots Direct from Amazon</span>
              </div>

              <p className="text-slate-650 leading-relaxed text-md">
                Transform your home workouts with the Stair Stepper for Home Gym, a compact yet powerful climber engineered for full-body cardio, fat burning, and lower-body strength. Designed with a sturdy 350 lbs weight capacity, this heavy-duty stepper delivers smooth performance, excellent stability, and intense calorie-burning workouts without taking up valuable floor space.
              </p>

              <div className="pt-4">
                <a 
                  href="https://amzn.to/4vihqKp" 
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
              <Sparkles className="text-rose-450" /> Performance Advantages
            </h2>
            <ul className="space-y-5">
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-rose-450 shrink-0 text-amber-350 font-bold">✓</div>
                <div>
                  <h4 className="font-bold">350 lbs Weight Capacity</h4>
                  <p className="text-slate-400 text-sm">Reinforced robust steel frame specifically structuralized to support heavier users, delivering reliable, absolute stability during intense, fast-stepping regimes.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-rose-450 shrink-0 text-amber-350 font-bold">✓</div>
                <div>
                  <h4 className="font-bold">Dual-Action Training Bands</h4>
                  <p className="text-slate-400 text-sm">Features integrated adjustable elastic exercise bands, allowing you to train arms, biceps, shoulders, back, and chest lines while stepping.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-rose-450 shrink-0 text-amber-350 font-bold">✓</div>
                <div>
                  <h4 className="font-bold">Ultra-Quiet Hydraulic Transmission</h4>
                  <p className="text-slate-400 text-sm">Industrial-grade hydraulic dampening system ensures smooth transitions and ultra-quiet operation, making it ideal for standard apartments or offices.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                <ShieldCheck className="text-slate-700" /> Equipment Specs & Strength Mat
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
