import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Heart, Sparkles, Award, RotateCw, Activity, Info, ClipboardList } from 'lucide-react';

export default function Concept2RowErgReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2026/01/Concept2-Model-D-Upgraded-New-Rowing-Machine1.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/01/Concept2-Model-D-Upgraded-New-Rowing-Machine2.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/01/Concept2-Model-D-Upgraded-New-Rowing-Machine3.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/01/Concept2-Model-D-Upgraded-New-Rowing-Machine4.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Resistance Type', value: 'Dynamic Air Resistance Flywheel' },
    { label: 'Console Performance Monitor', value: 'PM5 with Bluetooth & ANT+ Wireless Connectivity' },
    { label: 'Structural Track Construction', value: 'Extruded Aluminum with Stainless Steel Monorail' },
    { label: 'Damper Adjustments', value: 'Spiral Damper Settings (Scale 1–10)' },
    { label: 'Maximum Weight Capacity', value: 'Heavy Duty 500 lbs Limit' },
    { label: 'Storage Optimization', value: 'Framelock Quick-Release Mechanism (Divides into 2 parts)' },
    { label: 'Machine Footprint', value: '8 ft × 2 ft (96 in × 24 in)' }
  ];

  const features = [
    {
      title: '🌀 Smooth Responsive Air Resistance',
      desc: 'Flywheel responds directly to your muscular pulling intensity on every single stroke, placing total control of the effort and pace inside your fingertips.'
    },
    {
      title: '📊 State-of-the-Art PM5 Performance Monitor',
      desc: 'The gold standard console. Accurately tracks stroke rate, split 500m pacing, meters rowed, wattage, calories, and pairs wirelessly with HR heart rate straps.'
    },
    {
      title: '💪 Semi-Commercial Structural Integrity',
      desc: 'Tough, extruded aluminum monorail capped with stainless steel provides ultra-reliable structural support holding weight limits up to 500 lbs.'
    },
    {
      title: '🌬️ Spiral Damper for Adjustable Comfort',
      desc: 'Enables quick adjustments of airflow to the flywheel cage, allowing you to easily simulate a sleek, light racing boat or a heavy, robust vessel.'
    },
    {
      title: '🔒 Quick Framelock Divide & Storage',
      desc: 'Splits effortlessly into two sections in seconds for modular, space-saving upright placement, avoiding awkward heavy machinery footprint struggles.'
    },
    {
      title: '👣 Custom Flex-Foot Pedals',
      desc: 'Features highly adjustable heel-rest platforms and durable quick-release straps to securely stabilize training alignment.'
    }
  ];

  const valueAesthetics = [
    'Recognized worldwide as the ultimate rowing machine standard',
    'Provides low-impact, highly metabolic 86% full-body conditioning',
    'Extremely rugged construction built to endure 10+ years of abuse',
    'Retains absolute top-tier resale value across fitness equipment',
    'Includes zero-backlash ergonomic handle and seat rollers',
    'Perfect addition for elite home setups and professional cross-training'
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-slate-50 min-h-screen text-slate-900 font-sans pb-32"
    >
      {/* Top Value Banner */}
      <div className="bg-slate-950 text-slate-100 text-center py-3 text-xs font-black px-4 tracking-wider shadow-md uppercase">
        🚣 THE GOLD STANDARD: Concept2 RowErg Upgraded Model D. Verified Amazon Purchase Route.
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-12">
        <Link to="/" className="inline-flex items-center text-slate-500 hover:text-slate-950 transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Review Hub
        </Link>

        {/* Product Showcase Container */}
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-slate-150 mb-12">
          <div className="grid md:grid-cols-2 gap-12 p-8 md:p-12 items-start">
            
            {/* Gallery Section */}
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-3xl p-6 flex items-center justify-center border border-slate-100 aspect-square overflow-hidden relative animate-fade-in animate-duration-300">
                <img 
                  src={activeImg} 
                  className="max-h-full max-w-full object-contain rounded-2xl duration-300 transition-all hover:scale-105" 
                  alt="Concept2 Model D RowErg Rowing Machine" 
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-red-650 bg-red-600 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider shadow-sm">
                  GOLD STANDARD
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-slate-50 p-1 transition-all ${activeImg === img ? 'border-red-650 shadow-md' : 'border-transparent opacity-75 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Concept2 Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-900 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-slate-950">
                  <Award className="w-3.5 h-3.5 text-red-500" /> Commercial Grade Cardio
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-950 tracking-tight font-sans">
                Concept2 Model D <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-650 from-red-600 to-slate-900 text-2xl md:text-3.5xl font-black block mt-1">Upgraded Rowing Machine</span>
              </h1>
              <p className="text-slate-650 font-semibold text-md">The #1 Indoor Rower in the World with Smart PM5 Backlit LCD Console</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-500 font-bold">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <Star className="w-5 h-5 fill-slate-200 text-slate-200" />
                </div>
                <span className="text-slate-400 text-sm font-semibold tracking-tight">4.0 (1 Certified Gym Owner Review)</span>
              </div>

              <div className="py-2 border-y border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-rose-600">$1,399.00</span>
                  <span className="text-xs bg-slate-150 text-slate-700 font-bold px-2.5 py-1 rounded-md ml-3">Smart Bluetooth & ANT+</span>
                </div>
              </div>

              <p className="text-slate-655 leading-relaxed text-sm md:text-base font-sans">
                The absolute benchmark in anaerobic conditioning and joint-friendly endurance, the <strong>Concept2 Model D RowErg</strong> is recognized globally as the gold standard of indoor rowing machines. Thoughtfully engineered to serve home gym architects, cross-fit athletes, commercial training spaces, and elite olympic crews alike, this outstanding machine guarantees a smooth, low-impact exercise cycle that engages 86% of the body's skeletal musculature with pure, heavy-duty capability.
              </p>

              <div className="pt-4 animate-fade-in">
                <a 
                  href="https://amzn.to/3RtUrNS" 
                  target="_blank" 
                  rel="nofollow sponsored noopener" 
                  className="bg-gradient-to-r from-[#ff9900] to-[#ffb84d] hover:from-[#e68a00] hover:to-[#e6a540] text-slate-955 text-slate-950 font-bold text-center px-10 py-5 rounded-xl shadow-lg hover:gradient-light hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-lg"
                >
                  <ShoppingCart className="w-5 h-5 text-slate-950" /> Buy Now on Amazon
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Informative Intro section */}
        <div className="bg-slate-950 text-slate-100 rounded-[2rem] p-8 md:p-12 border border-slate-800 shadow-xl mb-12">
          <h2 className="text-3xl font-extrabold text-white text-center mb-6 tracking-tight">
            Premium Full-Body Air Resistance Conditioning
          </h2>
          <div className="max-w-4xl mx-auto text-slate-350 text-center space-y-6 text-sm lg:text-base leading-relaxed">
            <p>
              Concept2 Model D is highly acclaimed for providing clean, multi-plane conditioning without severe, jarring kinetic impact on back lumbar zones, leg knees, or weight-bearing spinal joints.
            </p>
            <p className="text-xs text-red-400 font-sans font-extrabold leading-normal">
              ★ Used worldwide by competitive athletic centers, physical rehab facilities, and first-responders for high-intensity cardiorespiratory fitness metrics.
            </p>
          </div>
        </div>

        {/* Two-Column details panel */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-slate-950 text-slate-105 rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6 border border-slate-900 text-slate-300">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-850 pb-3 text-white">
              <Sparkles className="text-red-400" /> Engineering Advantages
            </h2>
            <ul className="space-y-4 text-xs font-semibold">
              {features.map((feat, index) => (
                <li key={index} className="flex gap-3">
                  <div className="bg-slate-900 p-2.5 text-red-400 shrink-0 font-bold leading-none h-10 w-10 flex items-center justify-center rounded-lg border border-slate-800">✓</div>
                  <div>
                    <h4 className="font-bold text-white text-md">{feat.title}</h4>
                    <p className="text-slate-400 text-xs mt-0.5 leading-relaxed font-sans font-medium">{feat.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            {/* Technical Specifications */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-900">
                <ClipboardList className="text-slate-750 text-slate-800" /> Technical Rower Blueprint
              </h2>
              <div className="grid grid-cols-1 gap-y-3 font-semibold text-xs text-slate-655 font-sans">
                {specs.map((item, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-slate-50 last:border-0">
                    <span className="text-slate-400">{item.label}</span>
                    <span className="text-slate-900 font-black text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Users Love It Box */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2 text-slate-900">
                <Heart className="text-red-500 fill-red-500 w-5 h-5" /> Why Athletes Choose Concept2
              </h2>
              <div className="grid grid-cols-1 gap-y-2 text-slate-705 text-xs font-semibold">
                {valueAesthetics.map((rate, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <span className="text-red-650 font-black shrink-0">✔</span>
                    <span>{rate}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Who it fits box */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center flex items-center justify-center gap-2">
            <Activity className="text-red-500 animate-pulse" /> Targeted Sports Demographics
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-105 font-medium text-slate-800 text-xs">
              <p className="font-extrabold text-red-650 mb-1 text-sm">🏋️ Elite Sports & Cross-Training</p>
              Provides accurate PM5 mechanical feedback, so you can track intervals, drag factor settings, and watt pacing safely.
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-105 font-medium text-slate-800 text-xs">
              <p className="font-extrabold text-red-650 mb-1 text-sm">🏠 Home Gym Longevity Architects</p>
              Constructed to survive decades of use. Separates cleanly using smart framelocks, allowing effortless vertical wall-storage.
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-105 font-medium text-slate-800 text-xs">
              <p className="font-extrabold text-red-650 mb-1 text-sm">🏥 Low-Impact Rehabilitation</p>
              Delivers fully smooth air mechanics to restore back, knee, shoulder, core, and glute muscle balance safely.
            </div>
          </div>
        </div>

        {/* Workout Guidance Disclaimer */}
        <div className="bg-slate-100 rounded-3xl p-6 border border-slate-200 shadow-xs max-w-4xl mx-auto mb-12">
          <h3 className="text-slate-850 font-bold mb-2 flex items-center gap-2 text-xs uppercase tracking-wide">
            <Info className="w-4 h-4 text-slate-650" /> Sports Sourcing & Biomechanical Guidance
          </h3>
          <p className="text-slate-505 text-xs font-sans leading-relaxed">
            Ensure you maintain proper kinetic rowing technique (legs, core, then arms) while using intense air flywheel machines. Keep your spine in correct neutral alignment and adapt spiral flywheel damper settings to your proven physical target constraints. Consult athletic coaches or orthopedic advisors before starting high-velocity interval protocols.
          </p>
        </div>

        {/* Final CTA Board */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-lg text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-950 mb-4 tracking-tight">
            Smooth, Quiet & Complete Conditioning at Home
          </h2>
          <p className="text-slate-655 max-w-2xl mx-auto leading-relaxed text-md font-sans mb-8">
            The Concept2 Model D RowErg seamlessly integrates world-class PM5 console analytics, dynamic spiral damper versatility, quick framelock separation, and premium structural durability. Take control of your cardiac engine with absolute trust.
          </p>
          <a 
            href="https://amzn.to/3RtUrNS" 
            target="_blank" 
            rel="nofollow sponsored noopener" 
            className="inline-flex bg-gradient-to-r from-slate-950 to-slate-850 hover:from-slate-900 hover:to-slate-800 text-white font-bold text-center px-12 py-4 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all gap-2 text-md"
          >
            <ShoppingCart className="w-5 h-5 text-white" /> Buy the Concept2 RowErg on Amazon
          </a>
        </div>

      </div>
    </motion.div>
  );
}
