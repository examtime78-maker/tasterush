import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Heart, Sparkles, Award } from 'lucide-react';

export default function Schiek540GlovesReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2025/11/Schiek-540-Platinum-Lifting-Gloves-One-Year-Warranty1.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Schiek-540-Platinum-Lifting-Gloves-One-Year-Warranty7.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Schiek-540-Platinum-Lifting-Gloves-One-Year-Warranty2.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Schiek-540-Platinum-Lifting-Gloves-One-Year-Warranty3-100x100.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Wrist Support', value: 'Integrated Adjustable Heavy-Duty Wrist Wraps' },
    { label: 'Palm Cushioning', value: 'Thick Specialized Gel-Padded Non-Slip Palm' },
    { label: 'Glove Removal', value: 'Patented Easy-Removal FIN System' },
    { label: 'Finger Profile', value: '3/4 Professional Finger Length' },
    { label: 'Leather Integrity', value: 'Washable Amara™ Synthetic Leather' },
    { label: 'Manufacturer Warranty', value: 'Full One-Year Quality Warranty' },
    { label: 'Core Fitness Path', value: 'Strength Training, Bodybuilding, Heavy Bench Press' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-slate-50 min-h-screen text-slate-950 font-sans pb-32"
    >
      <div className="bg-amber-950 border-b border-amber-900 text-amber-100 text-center py-3 text-xs font-bold px-4 tracking-wide shadow-sm">
        PLATINUM PERFORMANCE DEAL: Schiek Model 540 Lifting Gloves with Integrated Wrist Wraps. Direct Secured Link to Amazon.
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
                  alt="Schiek 540 Platinum Lifting Gloves" 
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
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Schiek 540 Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-amber-50 text-amber-855 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-amber-100">
                  <Award className="w-3.5 h-3.5 text-amber-600" /> Professional Gear / Wristwrap Gloves
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight">
                Schiek 540 Platinum <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-805 text-2xl md:text-3xl font-black block mt-1">Lifting Gloves with Wrist Wraps</span>
              </h1>
              <p className="text-slate-655 font-semibold text-md">Ultimate Grip, Integrated Wrist Support & One Year Full Warranty</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-400">
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">5.0 (1 Certified Athlete Review)</span>
              </div>

              <div className="py-2 border-y border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-slate-400 text-lg line-through font-medium">$39.95</span>
                  <span className="text-3xl font-black text-rose-600">$37.00</span>
                  <span className="text-xs bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded-md ml-2 font-semibold">7% OFF</span>
                </div>
                <span className="text-slate-400 text-xs font-medium block mt-1">Eligible for Free Delivery & Fast Despatch on Amazon</span>
              </div>

              <p className="text-slate-655 leading-relaxed text-md font-sans">
                Take your strength training to the next level with the <strong>Schiek 540 Platinum Lifting Gloves</strong>, engineered for elite athletes who demand premium grip, exceptional wrist stability, comfort, and absolute durability. Whether you’re training heavy with bars, dumbbells, or pull-up gear, these gloves provide high-tier wristwrap support to help you lift with ultimate control.
              </p>

              <div className="pt-4 animate-fade-in">
                <a 
                  href="https://amzn.to/3RKeAz9" 
                  target="_blank" 
                  rel="nofollow sponsored noopener" 
                  className="bg-gradient-to-r from-[#ff9900] to-[#ffb84d] hover:from-[#e68a00] hover:to-[#e6a540] text-slate-950 font-bold text-center px-10 py-4.5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-lg"
                >
                  <ShoppingCart className="w-5 h-5 text-slate-950" /> Buy on Amazon Now
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Detailed Spec Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          <div className="bg-slate-900 text-white rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3">
              <Sparkles className="text-amber-400" /> Platinum Structural Advantages
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-amber-400 shrink-0 font-bold">✓</div>
                <div>
                  <h4 className="font-bold">Integrated Wrist Wrap Support System</h4>
                  <p className="text-slate-400 text-sm">Features built-in wrap fasteners that hold your carpometacarpal joint in strict anatomical alignment, resisting strain during heavy presses.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-amber-400 shrink-0 font-bold">✓</div>
                <div>
                  <h4 className="font-bold">Gel-Padded Non-Slip Contact Palm</h4>
                  <p className="text-slate-400 text-sm">Industrial gel formulation dampens compressive pressures on the palm, increasing friction on metal surfaces without sacrificing bar-feel.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-amber-400 shrink-0 font-bold">✓</div>
                <div>
                  <h4 className="font-bold">Patented Custom Removal FIN Loops</h4>
                  <p className="text-slate-400 text-sm">Built with Schiek's dynamic removal pull tabs, making it incredibly simple to peel the gloves off after exhausting, sweated-out sessions.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-amber-400 shrink-0 font-bold">✓</div>
                <div>
                  <h4 className="font-bold">Washable Amara Synthetic Leather & Warranty</h4>
                  <p className="text-slate-400 text-sm">Supports machines washes without fading, weakening, or splitting. Fully guaranteed by Schiek's authentic One-Year Manufacturer Warranty.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm font-sans">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                <ShieldCheck className="text-slate-700" /> Material & Construction Matrix
              </h2>
              <div className="grid grid-cols-1 gap-y-3 font-semibold text-xs text-slate-650 font-sans">
                {specs.map((item, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-slate-50 last:border-0">
                    <span className="text-slate-400">{item.label}</span>
                    <span className="text-slate-900 font-bold text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance target scope list */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2 text-slate-850">
                <Heart className="text-rose-500 w-5 h-5 text-red-500 fill-red-500" /> Ideal Application Profiles
              </h2>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-slate-655 text-sm font-semibold">
                <li className="flex items-center gap-2">✔ Bodybuilding Compound Sets</li>
                <li className="flex items-center gap-2">✔ High-Tension Pressing</li>
                <li className="flex items-center gap-2">✔ Heavy Dumbbell Movements</li>
                <li className="flex items-center gap-2">✔ High-Rep Gym Machine Drills</li>
                <li className="flex items-center gap-2">✔ Preventing Grip Fatigues</li>
                <li className="flex items-center gap-2">✔ Joint & Wrist Stability</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Deep Dive brand review summary */}
        <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-lg text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Train Harder with Premium Wrist Support
          </h2>
          <p className="text-slate-655 max-w-2xl mx-auto leading-relaxed text-md font-sans">
            Don’t let grip fatigue or weak wrist support limit your performance. The Schiek 540 Platinum Gloves help you train harder, lift safer, and stay focused on your training targets. Crafted with resilient materials and high-precision sewing, they are built for serious athletes who demand elite comfort and reliable defense against calluses.
          </p>
        </div>

      </div>
    </motion.div>
  );
}
