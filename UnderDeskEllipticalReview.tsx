import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Heart, Sparkles, Award } from 'lucide-react';

export default function UnderDeskEllipticalReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2025/11/Under-Desk-Elliptical-Machine-Electric-Seated-Pedal-Exerciser-1.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Under-Desk-Elliptical-Machine-Electric-Seated-Pedal-Exerciser-2.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Under-Desk-Elliptical-Machine-Electric-Seated-Pedal-Exerciser-3.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Under-Desk-Elliptical-Machine-Electric-Seated-Pedal-Exerciser-4.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Movement Assistance', value: 'Motorized/Electric Seated Exercise' },
    { label: 'Pedaling Directions', value: 'Forward & Reverse Full Leg Activation' },
    { label: 'Workout Speed', value: 'Multiple Speed Adjustments' },
    { label: 'Deformation/Noise Level', value: 'Whisper-Quiet Smooth Transmission' },
    { label: 'Pedal Design', value: 'Large Ergonomic Anti-Slip Platform' },
    { label: 'Target Audience', value: 'Seniors, Rehabilitation Support, Office Workers' },
    { label: 'Joint Impact', value: 'Ultra Low Impact Leg Strengthening' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-slate-50 min-h-screen text-slate-950 font-sans pb-32"
    >
      <div className="bg-blue-950 border-b border-blue-900 text-blue-100 text-center py-3 text-xs font-bold px-4 tracking-wide shadow-sm">
        ACTIVE CARDIO DEAL: Electric Seated Pedal Exerciser. Whisper-Quiet Under-Desk Fit.
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
                  alt="Under Desk Elliptical Seated Pedal Exerciser" 
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
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Under Desk Elliptical Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-blue-100">
                  <Award className="w-3.5 h-3.5 text-blue-750" /> Cardio Machines / Home Fitness
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight">
                Electric Seated <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-750 to-indigo-850 text-2xl md:text-3xl font-black block mt-1">Under Desk Elliptical Machine</span>
              </h1>
              <p className="text-slate-650 font-semibold text-md">Quiet Motorized Pedal Exerciser for Leg Strength, Circulation & Rehab</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-400">
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">5.0 (1 Certified Gym Member Review)</span>
              </div>

              <div className="py-2 border-y border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-slate-400 text-lg line-through font-medium">$149.99</span>
                  <span className="text-3xl font-black text-blue-750">$99.98</span>
                  <span className="text-xs bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded-md ml-2 font-semibold">33% OFF</span>
                </div>
                <span className="text-slate-400 text-xs font-medium block mt-1">Free Shipping & Direct Delivery Available on Amazon</span>
              </div>

              <p className="text-slate-650 leading-relaxed text-md">
                Stay active while working, reading, or relaxing with this electric under desk elliptical machine. Designed for low-impact seated cardio, improved circulation, leg strengthening, rehabilitation support, and quiet daily movement without stressing your joints.
              </p>

              <div className="pt-4">
                <a 
                  href="https://amzn.to/3PNIWjA" 
                  target="_blank" 
                  rel="nofollow sponsored noopener" 
                  className="bg-gradient-to-r from-blue-600 to-indigo-650 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-center px-10 py-4.5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-lg"
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
              <Sparkles className="text-blue-400" /> Performance Advantages
            </h2>
            <ul className="space-y-5">
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-blue-450 shrink-0 text-amber-300 font-bold">✓</div>
                <div>
                  <h4 className="font-bold">Motorized Effortless Movement</h4>
                  <p className="text-slate-400 text-sm">Provides assistive forward & reverse motorized pedaling to encourage active circulation and muscular stimulation with zero joint compression.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-blue-450 shrink-0 text-amber-300 font-bold">✓</div>
                <div>
                  <h4 className="font-bold">Whisper-Quiet Working Flow</h4>
                  <p className="text-slate-400 text-sm">Runs quietly underneath your professional cubicle workspace or family TV room. Seamlessly exercise without distracting anyone nearby.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-blue-450 shrink-0 text-amber-300 font-bold">✓</div>
                <div>
                  <h4 className="font-bold">Safety Grid & Remote Support</h4>
                  <p className="text-slate-400 text-sm">Extra-wide, heavily textured security footbeds prevent slipping, while adjustable speed buttons tailor intensity levels to your rehab profile.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                <ShieldCheck className="text-slate-700" /> Equipment Specs & Details
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
