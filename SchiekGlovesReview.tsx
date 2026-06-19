import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Heart, Sparkles, Award } from 'lucide-react';

export default function SchiekGlovesReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2025/11/Schiek-Model-710-Classic-Training-Lifting-Gloves2.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Schiek-Model-710-Classic-Training-Lifting-Gloves3.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Schiek-Model-710-Classic-Training-Lifting-Gloves4-600x600.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Schiek-Model-710-Classic-Training-Lifting-Gloves5-100x100.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Palm Material', value: 'Breathable Amara™ Synthetic Leather' },
    { label: 'Gel Cushioning', value: '1/8″ Extra-Thick Precision Padding' },
    { label: 'Glove Removal', value: 'Patented Easy-Removal Fins' },
    { label: 'Wrist Fastener', value: 'Secure Hook-and-Loop Velcro Closure' },
    { label: 'Care Instructions', value: '100% Machine Washable & Colorfast' },
    { label: 'Primary Use Scope', value: 'Weightlifting, CrossFit, Gym, HIIT & Bar Work' },
    { label: 'Structural Feel', value: 'Durability Matching Genuine Animal Leather' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-slate-50 min-h-screen text-slate-950 font-sans pb-32"
    >
      <div className="bg-amber-950 border-b border-amber-900 text-amber-100 text-center py-3 text-xs font-bold px-4 tracking-wide shadow-sm">
        SPECIAL ACCESSORY PROMO: Original Schiek Model 710 Professional Weightlifting Gloves. Instant Click to Amazon Marketplace.
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
                  alt="Schiek Model 710 Classic Training Gloves" 
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
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Schiek Gloves Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-amber-50 text-amber-855 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-amber-100">
                  <Award className="w-3.5 h-3.5 text-amber-600" /> Gloves & Lifting Accessories
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight">
                Schiek Model 710 <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800 text-2xl md:text-3xl font-black block mt-1">Classic Training Lifting Gloves</span>
              </h1>
              <p className="text-slate-655 font-semibold text-md">Confidence. Comfort. Control. Professional Multi-Discipline Gym Armor.</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-405">
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
                  <span className="text-slate-400 text-lg line-through font-medium">$24.95</span>
                  <span className="text-3xl font-black text-rose-600">$20.00</span>
                  <span className="text-xs bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded-md ml-2 font-semibold">20% OFF</span>
                </div>
                <span className="text-slate-400 text-xs font-medium block mt-1">Free Delivery Option & Immediate Shipping via Amazon</span>
              </div>

              <p className="text-slate-655 leading-relaxed text-md font-sans">
                Step into your next workout with <strong>Schiek Model 710 Classic Training Lifting Gloves</strong>, engineered for athletes who demand comfort, grip, durability, and protection during intense gym sessions. Whether you’re lifting heavy weights, training for strength, or powering through high-volume workouts, these gloves provide the confidence and control needed to perform at your best.
              </p>

              <div className="pt-4 animate-fade-in">
                <a 
                  href="https://amzn.to/4fbpaZW" 
                  target="_blank" 
                  rel="nofollow sponsored noopener" 
                  className="bg-gradient-to-r from-[#ff9900] to-[#ffb84d] hover:from-[#e68a00] hover:to-[#e6a540] text-slate-950 font-bold text-center px-10 py-4.5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-lg"
                >
                  <ShoppingCart className="w-5 h-5 text-slate-950" /> Buy Now on Amazon
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Detailed Spec Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          <div className="bg-slate-900 text-white rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3">
              <Sparkles className="text-amber-400" /> Engineered Advantage
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-amber-400 shrink-0 font-bold">✓</div>
                <div>
                  <h4 className="font-bold">Breathable Amara™ Synthetic Leather</h4>
                  <p className="text-slate-400 text-sm">Lightweight and durable material designed to mimic genuine animal leather while remaining fully breathable, highly flexible, and tear-resistant.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-amber-400 shrink-0 font-bold">✓</div>
                <div>
                  <h4 className="font-bold">1/8″ Thick Cushioning Gel Pad</h4>
                  <p className="text-slate-400 text-sm">Strategically covers standard high-pressure friction spots to soften grip impact, completely preventing ugly blisters and painful calluses.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-amber-400 shrink-0 font-bold">✓</div>
                <div>
                  <h4 className="font-bold">Patented Easy-Removal Fin Channels</h4>
                  <p className="text-slate-400 text-sm">Features custom built-in finger fin pull tabs to easily slip off sweated-on gloves inside three seconds flat.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-amber-400 shrink-0 font-bold">✓</div>
                <div>
                  <h4 className="font-bold">Machine Washable & Colorfast Integrity</h4>
                  <p className="text-slate-400 text-sm">No color shedding or shrinking after washing. Simply wash clean inside standard laundry machines, retaining absolute tactile friction characteristics.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                <ShieldCheck className="text-slate-700" /> Glove Anatomy & Form Factor
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

            {/* Why users love it */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2 text-slate-850">
                <Heart className="text-rose-500 w-5 h-5 text-red-500 fill-red-500" /> Elite Performance Scope
              </h2>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-slate-655 text-sm font-semibold">
                <li className="flex items-center gap-2">✔ Weightlifting Gym Sets</li>
                <li className="flex items-center gap-2">✔ CrossFit Routines</li>
                <li className="flex items-center gap-2">✔ Heavy Kettlebell Drills</li>
                <li className="flex items-center gap-2">✔ High-Intensity HIIT</li>
                <li className="flex items-center gap-2">✔ Preventing Palm Fatigues</li>
                <li className="flex items-center gap-2">✔ Anti-abrasive Bar Work</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Brand Authenticity & Deep Dive */}
        <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-lg text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Built for Long-Term Performance
          </h2>
          <p className="text-slate-655 max-w-2xl mx-auto leading-relaxed text-md font-sans">
            Tough yet flexible, the premium Amara material resists stretching, tearing, and wear over typical years of high-frequency use while maintaining its original shape and performance. Train harder with gloves trusted for comfort, durability, and reliable grip support session after session.
          </p>
        </div>

      </div>
    </motion.div>
  );
}
