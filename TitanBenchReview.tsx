import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Award, Heart, Sparkles, Activity, Info, ClipboardList, Shield, Dumbbell } from 'lucide-react';

export default function TitanBenchReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2025/11/Titan-Fitness-TITAN-Series-Adjustable-Bench-1.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Titan-Fitness-TITAN-Series-Adjustable-Bench-2.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Titan-Fitness-TITAN-Series-Adjustable-Bench-3.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Titan-Fitness-TITAN-Series-Adjustable-Bench-4.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Structural Frame Material', value: 'Commercial-Grade Heavy-Duty Steel' },
    { label: 'Weight Limit Capacity (Flat Position)', value: '1,000 lbs Rock-Solid Peak Rating' },
    { label: 'Weight Limit Capacity (Incline Position)', value: '600 lbs Heavy Duty Duty Rating' },
    { label: 'Adjustment Drive Type', value: 'Ladder-Style Bracket Locking System' },
    { label: 'Compatible Training Styles', value: 'Flat, Multiple Incline Degrees & Upright 90°' },
    { label: 'Upper Padding Composition', value: 'Thick High-Density Dual-Fusion Sponge' },
    { label: 'Footprint Clearance Base', value: 'Single-Post Front Legs for Foot Liberty' }
  ];

  const features = [
    {
      title: '🏋️ Massive 1,000 lbs Flat Lifting Capacity',
      desc: 'Formed with dense commercial steel tubing that prevents structural twist or flexing during high-load bench presses or heavy dumbbell routines.'
    },
    {
      title: '🪜 Secure Ladder-Style Backrest Tuning',
      desc: 'Enables safe, instant back-angle calibrations with zero locking pins to lose. Adjust dynamically from flat to steep incline in under two seconds.'
    },
    {
      title: '🦶 Single-Post Front Foot Clearance',
      desc: 'Bypasses standard bulky wide metal bases, giving your feet absolute freedom to secure a perfect, medically sound arch and powerful leg drive.'
    },
    {
      title: '☁️ Ergonomic Ultra-Dense Dual Foam Pad',
      desc: 'Wraps premium high-traction non-slip vinyl around specialized heavy foam to fully support the spine and shoulder blades during heavy lifts.'
    },
    {
      title: '📦 Space-Saving Footprint & Mobilizer wheels',
      desc: 'Built with integrated heavy-duty transport wheels and a comfortable lift handle so you can easily wheel the bench out of active rack space.'
    },
    {
      title: '⚙️ Extreme Precision Anti-Wobble Fitment',
      desc: 'Maintains strict tolerance standards to minimize lateral wiggle or play at standard junction joints, assuring clinical-level lifting stability.'
    }
  ];

  const userLoveHighlights = [
    'Outstanding unyielding commercial-grade structural steel safety',
    'Provides perfect pelvic and upper back shoulder blade stabilization',
    'Extremely customizable for flat, chest-inclines, shoulder presses & upright presses',
    'Single-post front leg prevents common footwear clutter/tripping hazards',
    'Saves physical room space: moves around comfortably on high-performance wheels',
    'Highly durable, sweat-resistant cover vinyl cleans up effortlessly with standard gym wipes'
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-stone-50 min-h-screen text-slate-900 font-sans pb-32"
    >
      {/* Top Warning/Promo Banner */}
      <div className="bg-slate-950 text-white text-center py-3 text-xs font-black px-4 tracking-wider shadow-md uppercase">
        🏋️ COMMERCIAL STABILITY ZONE: Titan Fitness adjustable bench tested up to 1,000 lbs. Secure Route to Amazon.
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
              <div className="bg-slate-50 rounded-3xl p-6 flex items-center justify-center border border-slate-100 aspect-square overflow-hidden relative">
                <img 
                  src={activeImg} 
                  className="max-h-full max-w-full object-contain rounded-2xl duration-300 transition-all hover:scale-105" 
                  alt="Titan Fitness Adjusted FID Weightlifting Bench" 
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-slate-900 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider shadow-sm">
                  1,000 LBS CAPACITY
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-slate-50 p-1 transition-all ${activeImg === img ? 'border-amber-600 shadow-md' : 'border-transparent opacity-75 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Titan Bench Thumbnail ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-slate-200">
                  <Award className="w-3.5 h-3.5 text-slate-950" /> Commercial Strength
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-950 tracking-tight font-sans animate-fade-in">
                TITAN Series <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-900 text-2xl md:text-3.5xl font-black block mt-1">Adjustable Bench Assembly</span>
              </h1>
              <p className="text-stone-605 font-semibold text-sm">Professional Grade Heavy Duty Flat / Incline / Upright Benchpress Station</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">5.0 (2 Certified Gym Owner Reviews)</span>
              </div>

              <div className="py-2 border-y border-stone-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-rose-600">$574.99</span>
                  <span className="text-xs bg-slate-100 text-slate-900 font-extrabold px-3 py-1 rounded-md ml-3">Unyielding Lifetime Quality</span>
                </div>
              </div>

              <p className="text-stone-605 leading-relaxed text-sm md:text-base font-sans">
                Experience maximum structural safety during intensive heavy iron movements with the elite <strong>Titan Fitness TITAN Series Adjustable Bench</strong>. Built intentionally to meet the robust needs of high-stress garage lifting cells, active physical therapy stations, and commercial powerlifting gyms, this exceptionally sturdy bench delivers a rock-solid 1000 lbs weight rating. Featuring a precise, ultra-fast ladder tilt system and elegant single-post base legs to protect your footing, it is a master class in lifting ergonomics.
              </p>

              <div className="pt-4">
                <a 
                  href="https://amzn.to/4nTHk4G" 
                  target="_blank" 
                  rel="nofollow sponsored noopener" 
                  className="bg-gradient-to-r from-[#ff9900] to-[#ffb84d] hover:from-[#e68a00] hover:to-[#e6a540] text-slate-950 font-bold text-center px-10 py-5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-lg"
                >
                  <ShoppingCart className="w-5 h-5 text-slate-950" /> Purchase on Amazon
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Dynamic Structural integrity Description Panel */}
        <div className="bg-slate-950 text-slate-100 rounded-[2rem] p-8 md:p-12 border border-slate-900 shadow-xl mb-12">
          <h2 className="text-3xl font-extrabold text-white text-center mb-6 tracking-tight">
            Commercial-Grade Steel Frame & Single-Post Comfort
          </h2>
          <div className="max-w-4xl mx-auto text-slate-350 text-center space-y-6 text-sm lg:text-base leading-relaxed">
            <p>
              Standard flat/incline benches often feature a bulky dual-post front support system. When set up inside a power cage, this design limits your stance and ruins the foot arch required for standard bench pressing. The Titan Series Bench resolves this with its high-clearance single-post front leg structure.
            </p>
            <p className="text-xs text-amber-400 leading-relaxed font-sans font-bold uppercase tracking-wider">
              ★ Features an ultra-stable ladder adjustment system to rapidly customize angles for flat, incline, or upright training.
            </p>
          </div>
        </div>

        {/* Detailed Spec Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-slate-950 text-slate-100 rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6 border border-slate-900">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3 text-white">
              <Sparkles className="text-amber-450 text-amber-400" /> Premium Steel Features
            </h2>
            <ul className="space-y-4">
              {features.map((feat, index) => (
                <li key={index} className="flex gap-3">
                  <div className="bg-slate-900 p-2.5 text-amber-500 shrink-0 font-bold leading-none h-10 w-10 flex items-center justify-center rounded-lg border border-slate-800">✓</div>
                  <div>
                    <h4 className="font-bold text-white text-base font-sans">{feat.title}</h4>
                    <p className="text-slate-400 text-xs mt-0.5 leading-relaxed font-sans">{feat.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            {/* Technical Specifications */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-850">
                <ClipboardList className="text-slate-700" /> Blueprint Dimensions & Specs
              </h2>
              <div className="grid grid-cols-1 gap-y-3 font-semibold text-xs text-slate-655 font-sans">
                {specs.map((item, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-slate-50 last:border-0">
                    <span className="text-slate-400">{item.label}</span>
                    <span className="text-slate-950 font-extrabold text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Users Love It Box */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2 text-slate-850">
                <Heart className="text-rose-500 fill-rose-500 w-5 h-5" /> Athlete Experience Points
              </h2>
              <div className="grid grid-cols-1 gap-y-2 text-slate-705 text-xs font-semibold font-sans">
                {userLoveHighlights.map((rate, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-slate-50/50 p-2.5 rounded-xl border border-slate-100">
                    <span className="text-amber-600 font-black shrink-0">✔</span>
                    <span>{rate}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* PROS & CONSIDERATIONS */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-emerald-50/20 border border-emerald-500/15 p-8 rounded-3xl space-y-4 shadow-sm">
            <h3 className="text-emerald-900 font-black text-xl flex items-center gap-2">
              👍 Pros & Strengths
            </h3>
            <ul className="space-y-2.5 text-stone-705 text-sm">
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Unmatchable heavy 1,000 lbs flat weight capacity supports elite powerlifting</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Ladder back adjustments enable lighting-fast position changes</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Space-saving single-post front leg layout dramatically optimizes leg drive</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>High-density, wide foam pad provides ergonomic biomechanical backing</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Included transport wheels and heavy mobility handle let you relocate it inside a cage</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50/25 border border-amber-500/15 p-8 rounded-3xl space-y-4 shadow-sm">
            <h3 className="text-amber-900 font-black text-xl flex items-center gap-2">
              ⚠️ Considerations
            </h3>
            <ul className="space-y-2.5 text-stone-705 text-sm">
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-amber-600 font-bold shrink-0 font-bold">●</span>
                <span>At approximately 85-90 lbs, the frame is incredibly solid and heavy to lift vertically</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-amber-600 font-bold shrink-0 font-bold">●</span>
                <span>Premium professional construction carries a higher baseline investment cost</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-amber-600 font-bold shrink-0 font-bold">●</span>
                <span>Does not integrate support legs for negative decline angles</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Ideal Lifting Protocols */}
        <div className="bg-slate-950/5 border border-slate-900/10 rounded-[2rem] p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2 justify-center font-sans tracking-tight">
            <Activity className="text-amber-600 animate-pulse" /> Recommended Training Routines
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center text-sm font-sans">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-between shadow-xs">
              <div>
                <p className="font-extrabold text-amber-700 text-base mb-2">💪 Powerlifting / Bench Presses</p>
                <p className="text-stone-605 leading-relaxed text-xs">Set flat under any heavy barbell squat rack. The single-column leg footprint lets you set up optimal arch drives for absolute maximum output.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-between shadow-xs">
              <div>
                <p className="font-extrabold text-amber-700 text-base mb-2">🎯 Shoulder & Incline Dumbbells</p>
                <p className="text-stone-605 leading-relaxed text-xs">Instantly move to 45° or upright to perform heavy shoulder presses. The durable dual-foam pad cradles thoracic and spinal structures comfortably.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-between shadow-xs">
              <div>
                <p className="font-extrabold text-amber-700 text-base mb-2">🏡 Premium Home & Garage Racks</p>
                <p className="text-stone-605 leading-relaxed text-xs">Build a professional, zero-compromise home training station. Easily roll it out of physical active barbell zones using the high-performance rollers.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Orthopedic Safety Disclaimer Box */}
        <div className="bg-slate-100 rounded-3xl p-6 border border-slate-200 shadow-xs max-w-4xl mx-auto mb-12">
          <h3 className="text-slate-850 font-bold mb-2 flex items-center gap-2 text-xs uppercase tracking-wide">
            <Info className="w-4 h-4 text-slate-650" /> Heavy Iron Lifting & Biomechanical safety Disclosure
          </h3>
          <p className="text-slate-505 text-xs font-sans leading-relaxed">
            Ensure you always verify the ladder bracket teeth are fully seated, locked, and completely flush prior to loading deep weights onto the system. To avoid crushing fingers, hold only designated grip zones while adjusting structural incline notches. Please utilize experienced lifting spotters and heavy safety bars during elite-level maximum stress bench training.
          </p>
        </div>

        {/* Final CTA Container */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-150 shadow-lg text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-950 mb-4 tracking-tight">
            Invest in Commercial Strength Safety Today
          </h2>
          <p className="text-stone-655 max-w-2xl mx-auto leading-relaxed text-md font-sans mb-8">
            The Titan Fitness TITAN Series Adjustable Bench provides high commercial-grade steel frames, rock-solid stable bases, elegant single-post front structures, and high-traction, comfortable dual-padding. Never settle for shaking home benches.
          </p>
          <a 
            href="https://amzn.to/4nTHk4G" 
            target="_blank" 
            rel="nofollow sponsored noopener" 
            className="inline-flex bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-center px-12 py-4 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all gap-2 text-md"
          >
            <ShoppingCart className="w-5 h-5 text-white" /> Buy the TITAN Series Bench on Amazon
          </a>
        </div>

      </div>
    </motion.div>
  );
}
