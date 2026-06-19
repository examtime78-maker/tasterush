import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Heart, Sparkles, Award } from 'lucide-react';

export default function StairStepperReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2025/11/Stair-Stepper-for-Home-Gym-Exercise-Compact-Folding-1.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Stair-Stepper-for-Home-Gym-Exercise-Compact-Folding-2-600x600.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Stair-Stepper-for-Home-Gym-Exercise-Compact-Folding-3.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Stair-Stepper-for-Home-Gym-Exercise-Compact-Folding-4-600x600.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Storage Profile', value: 'Ultra-Compact Vertical Folding Design' },
    { label: 'Workout Type', value: 'Full-Body Cardio & Muscle Activation' },
    { label: 'Motion Axis', value: 'Smooth Low-Impact Vertical Climbing' },
    { label: 'Integrated Electronics', value: 'Multi-Function LCD Target Monitor' },
    { label: 'Frame Durability', value: 'Heavy-Duty Reinforced Steel Alloy' },
    { label: 'Safety Interfaces', value: 'Anti-Slip Oversized Textured Pedals' },
    { label: 'Comfort Grips', value: 'Sweat-Resistant Ergonomic Foam Handles' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-slate-50 min-h-screen text-slate-950 font-sans pb-32"
    >
      <div className="bg-red-950 border-b border-red-900 text-red-100 text-center py-3 text-xs font-bold px-4 tracking-wide shadow-sm">
        COMPACT FITNESS DEAL: Space-Saving Folding Vertical Stair Stepper. Fast & Secure Link to Amazon Checkout.
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
                  alt="Stair Stepper for Home Gym Exercise" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-slate-50 p-1 transition-all ${activeImg === img ? 'border-red-650 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Stair Stepper Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-red-50 text-red-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-red-100 animate-pulse">
                  <Award className="w-3.5 h-3.5 text-red-650" /> Cardio Machines / Home Gym
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight">
                Stair Stepper <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-700 text-2xl md:text-3xl font-black block mt-1">Compact folding vertical climber</span>
              </h1>
              <p className="text-slate-650 font-semibold text-md">Intense Full-Body Stimulation & Natural Low-Impact Climbing Sequence</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">5.0 (1 Certified User Review)</span>
              </div>

              <div className="py-2 border-y border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-slate-400 text-lg line-through font-medium">$99.99</span>
                  <span className="text-3xl font-black text-red-600">$84.99</span>
                  <span className="text-xs bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded-md ml-2 font-semibold">15% OFF</span>
                </div>
                <span className="text-slate-400 text-xs font-medium block mt-1">Free Delivery & Fast Shipping Slots Direct from Amazon</span>
              </div>

              <p className="text-slate-650 leading-relaxed text-md">
                Upgrade your home workout routine with the Compact Folding Stair Stepper, designed for users who want maximum cardio results with minimum space. This full-body vertical stepper combines calorie-burning intensity with a joint-friendly stepping motion — perfect for home gyms, apartments, and small workout areas.
              </p>

              <div className="pt-4">
                <a 
                  href="https://amzn.to/4dMoHem" 
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
              <Sparkles className="text-rose-400" /> Key Structural Highlights
            </h2>
            <ul className="space-y-5">
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-rose-450 shrink-0 text-amber-350 font-bold">✓</div>
                <div>
                  <h4 className="font-bold">Ultra-Compact Folding Profile</h4>
                  <p className="text-slate-400 text-sm">Folds flat within seconds to push cleanly into standard closets, slide under beds, or tuck flush against living room walls.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-rose-450 shrink-0 text-amber-350 font-bold">✓</div>
                <div>
                  <h4 className="font-bold">Natural Low-Impact Vectoring</h4>
                  <p className="text-slate-400 text-sm">Emulates true vertical stair climbing, shifting the mechanical peak tension directly into deep muscle chains instead of spinal vertebrae structure.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-rose-450 shrink-0 text-amber-350 font-bold">✓</div>
                <div>
                  <h4 className="font-bold">Full Sensory Multi-Monitor</h4>
                  <p className="text-slate-400 text-sm">Tracks stepping pacing, active calorie outputs, steps counts, and multi-mode scans on a durable crystal-clear on-board LCD screen.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                <ShieldCheck className="text-slate-700" /> Vertical Climber Engineering Mat
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
