import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Award, Heart, Sparkles, Activity, Info, ClipboardList, Zap, Shield, HelpCircle } from 'lucide-react';

export default function Treadmill3In1Review() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2025/11/3-in-1-Treadmill-with-15-Incline-Portable-Treadmills-for-Home-with-Handle1.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/3-in-1-Treadmill-with-15-Incline-Portable-Treadmills-for-Home-with-Handle2.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/3-in-1-Treadmill-with-15-Incline-Portable-Treadmills-for-Home-with-Handle3.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/3-in-1-Treadmill-with-15-Incline-Portable-Treadmills-for-Home-with-Handle4.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Incline Level', value: '15% Automatic/Adjustable Incline' },
    { label: 'Functionality Modes', value: '3-in-1 (Under-Desk Walk, Jog, Full Sprint)' },
    { label: 'Max Weight Capacity', value: '300 Pounds (Heavy-Duty Steel)' },
    { label: 'Display Features', value: 'LED Monitor & Wireless Remote Control' },
    { label: 'Running Surface', value: 'Joint-Friendly Shock Absorption Non-slip Belt' },
    { label: 'Storage & Portability', value: 'Super Slim Foldable Design with Move Wheels' },
    { label: 'Motor Performance', value: 'Whisper-Quiet Home-optimized Motor' }
  ];

  const features = [
    {
      title: '⛰️ 15% Elevation Auto-Incline System',
      desc: 'Simulates genuine outdoor slopes to increase cardiovascular intensity, accelerate under-desk calorie burn, and tone calves, hamstrings, and glutes.'
    },
    {
      title: '🏃 Dynamic 3-in-1 Versatility',
      desc: 'Transforms seamlessly between under-desk walking pad, jogging machine, and high-temp upright sprint setups depending on your daily schedules or home office needs.'
    },
    {
      title: '🔇 Super Quiet Power-Drive Motor',
      desc: 'Runs at premium low-decibel outputs. Keeps active cardio sessions hushed so you can walk during phone calls or jog without waking the family.'
    },
    {
      title: '🩰 Pro Joint-Protecting Shock Absorption Belt',
      desc: 'Crafted with multiple structural layers and non-slip treads that shield your joints, knees, and ankles from heavy concrete rebound feedback.'
    },
    {
      title: '📏 Premium Space-Saving Folding Mechanism',
      desc: 'Folds down into a ultra-slim profile. Features built-in transport rollers so you can glide and stash it underneath a bed, couch, or in slim closet corners.'
    },
    {
      title: '🎮 Integrated LED Panel & Dynamic Remote Control',
      desc: 'Instantly monitors real-time stats including speed, elapsed time, total mileage, and calorie output. Simple to adjust speeds with the mini handheld remote.'
    }
  ];

  const userLoveHighlights = [
    'Tremendous joint relief due to the cushion absorption layers',
    'Fits seamlessly under standing desks for active focus work routines',
    'Quick automatic motorized rise to 15% incline raises heart rates quickly',
    'Compact structural frame can be tucked away vertically or horizontally',
    'Super quiet operations prevent common noise issues in apartments and offices',
    'Arrives fully pre-assembled and ready to run within minutes'
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-stone-50 min-h-screen text-slate-900 font-sans pb-32"
    >
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-red-600 to-rose-700 text-white text-center py-3 text-xs font-black px-4 tracking-wider shadow-md uppercase">
        ⚡ MASSIVE CALORIE ENGAGEMENT: Up to 15% Auto-Incline Portable Treadmill. Verified Safe Amazon Route.
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-12">
        <Link to="/" className="inline-flex items-center text-slate-500 hover:text-slate-950 transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Review Hub
        </Link>

        {/* Showcase Area */}
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-slate-100 mb-12">
          <div className="grid md:grid-cols-2 gap-12 p-8 md:p-12 items-start">
            
            {/* Left Column: Gallery */}
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-3xl p-6 flex items-center justify-center border border-slate-100 aspect-square overflow-hidden relative">
                <img 
                  src={activeImg} 
                  className="max-h-full max-w-full object-contain rounded-2xl duration-300 transition-all hover:scale-105" 
                  alt="3-in-1 Foldable Treadmill with 15% Incline" 
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-rose-600 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider shadow-sm">
                  15% AUTO INCLINE
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-slate-50 p-1 transition-all ${activeImg === img ? 'border-rose-600 shadow-md' : 'border-transparent opacity-75 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Treadmill Thumbnail ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Details */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-red-55 bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-rose-100">
                  <Award className="w-3.5 h-3.5 text-rose-700" /> Space Saver Pick
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-950 tracking-tight font-sans">
                3-in-1 Incline <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-orange-600 to-amber-700 text-2xl md:text-3.5xl font-black block mt-1">Foldable Home Treadmill</span>
              </h1>
              <p className="text-stone-605 font-semibold text-sm">Under-Desk Walking Pad, Compact Jogger & Sprint Station with Handlebar Controls</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <Star className="w-5 h-5 fill-slate-200 text-slate-200" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">4.0 (1 Certified Home Athlete Review)</span>
              </div>

              <div className="py-2 border-y border-stone-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-rose-600">$199.99</span>
                  <span className="text-md text-slate-400 line-through ml-2">$249.99</span>
                  <span className="text-xs bg-red-100 text-red-900 font-extrabold px-3 py-1 rounded-md ml-3">Save 20% ($50 Off)</span>
                </div>
              </div>

              <p className="text-stone-605 leading-relaxed text-sm md:text-base font-sans">
                Rethink your sedentary work habits or elevate your home gym with the incredibly practical <strong>3-in-1 Foldable Treadmill with 15% Auto Incline</strong>. Specially engineered for apartments, small homes, and office workstations, this quiet, multi-mode walking pad easily adjusts to add gradient slope workouts, boosting caloric burn by up to 2x without adding speed. Armed with joint-friendly shock absorbers, a reliable 300 lbs steel frame, and intuitive remote controls, it is the ultimate space-saving cardio companion.
              </p>

              <div className="pt-4">
                <a 
                  href="https://amzn.to/4uXWSqI" 
                  target="_blank" 
                  rel="nofollow sponsored noopener" 
                  className="bg-gradient-to-r from-[#ff9900] to-[#ffb84d] hover:from-[#e68a00] hover:to-[#e6a540] text-slate-950 font-bold text-center px-10 py-5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-lg"
                >
                  <ShoppingCart className="w-5 h-5 text-slate-950" /> Buy Now on Amazon
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Dynamic Structural integrity Description Panel */}
        <div className="bg-slate-950 text-slate-100 rounded-[2rem] p-8 md:p-12 border border-slate-900 shadow-xl mb-12">
          <h2 className="text-3xl font-extrabold text-white text-center mb-6 tracking-tight">
            How the 3-in-1 Mechanical Transformation Works
          </h2>
          <div className="max-w-4xl mx-auto text-slate-350 text-center space-y-6 text-sm lg:text-base leading-relaxed">
            <p>
              Rather than forcing you to settle for either a giant clunky treadmill or a basic low-speed walking pad, this unit is engineered with an adjustable multi-position design. Drop the handlebar completely flat to slide it underneath standing desks as a low-noise walking pad. Raise the safety handles to pivot into a comfortable jogger, or unlock its high-power mode for up to full speed high-slope running.
            </p>
            <p className="text-xs text-amber-400 leading-relaxed font-sans font-bold uppercase tracking-wider">
              ★ Powered by an advanced low-decibel motor that guarantees active workouts stay smooth and whisper-quiet under load.
            </p>
          </div>
        </div>

        {/* Detailed Spec Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-slate-950 text-slate-100 rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6 border border-slate-900">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3 text-white">
              <Sparkles className="text-rose-500 text-rose-500" /> Key Mechanical Benefits
            </h2>
            <ul className="space-y-4">
              {features.map((feat, index) => (
                <li key={index} className="flex gap-3">
                  <div className="bg-slate-900 p-2.5 text-rose-500 shrink-0 font-bold leading-none h-10 w-10 flex items-center justify-center rounded-lg border border-slate-800">✓</div>
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
                <ClipboardList className="text-slate-700" /> Technical Data Blueprint
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
                <Heart className="text-rose-500 fill-rose-500 w-5 h-5" /> Why Users Love It
              </h2>
              <div className="grid grid-cols-1 gap-y-2 text-slate-705 text-xs font-semibold font-sans">
                {userLoveHighlights.map((rate, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-slate-50/50 p-2.5 rounded-xl border border-slate-100">
                    <span className="text-rose-600 font-black shrink-0">✔</span>
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
              👍 Pros & Highlights
            </h3>
            <ul className="space-y-2.5 text-stone-705 text-sm animate-fade-in">
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Incredible 15% auto motorized incline dramatically optimizes fat burning</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Adaptable 3-in-1 structures function perfectly as a walking pad or full runner</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Excellent 300 lbs capacity heavy alloy frame secures massive durability</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Shock absorption running belt shields ankles and knees from feedback strain</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Highly compact, folding down slim with smart helper wheels for easy transport</span>
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
                <span>Running area is highly compact for space saving; taller sprinters may need custom stride adjustments</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-amber-600 font-bold shrink-0 font-bold">●</span>
                <span>Handheld remote controls require basic coin battery cells to sync correctly</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-amber-600 font-bold shrink-0 font-bold">●</span>
                <span>Includes a safety lanyard clip which must be securely anchored for full speed limits</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Ideal Training Scenarios */}
        <div className="bg-slate-950/5 border border-slate-900/10 rounded-[2rem] p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2 justify-center font-sans tracking-tight">
            <Activity className="text-rose-600 animate-pulse" /> Preferred Workflow Integrations
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center text-sm font-sans">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-between shadow-xs">
              <div>
                <p className="font-extrabold text-rose-700 text-base mb-2">🏢 Active Under-Desk Focus</p>
                <p className="text-stone-605 leading-relaxed text-xs">Slide the treadmill under standing desks. Set a gentle paced walk at a low 1.5 mph speed during video meetings to boost focus and productivity.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-between shadow-xs">
              <div>
                <p className="font-extrabold text-rose-700 text-base mb-2">⛰️ Slope Cardio Burn</p>
                <p className="text-stone-605 leading-relaxed text-xs">Engage the 15% auto mechanical incline to simulate mountain slopes. Build powerful athletic calves and maximize heart rate activity inside limited home workspaces.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-between shadow-xs">
              <div>
                <p className="font-extrabold text-rose-700 text-base mb-2">🏡 Compact Apartment Gyms</p>
                <p className="text-stone-605 leading-relaxed text-xs">A perfect solution for tight space constraints. Avoid bulky full-scale commercial machines and roll this slim unit behind your bedroom door when done.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Orthopedic Safety Disclaimer Box */}
        <div className="bg-slate-100 rounded-3xl p-6 border border-slate-200 shadow-xs max-w-4xl mx-auto mb-12">
          <h3 className="text-slate-850 font-bold mb-2 flex items-center gap-2 text-xs uppercase tracking-wide">
            <Info className="w-4 h-4 text-slate-650" /> Biomechanical Health & Sourcing Disclaimer
          </h3>
          <p className="text-slate-505 text-xs font-sans leading-relaxed">
            Ensure the auto incline joints are fully calibrated before start. Rest your posture comfortably, use the handrail when making abrupt speed modifications, and always wear the safety magnetic key leash to allow instant emergency stopping during rapid incline runs. Consult your localized personal physician if you utilize orthotics or suffer from chronic joint fatigue.
          </p>
        </div>

        {/* Final CTA Container */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-150 shadow-lg text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-950 mb-4 tracking-tight">
            Elevate Your Daily Cardiorespiratory Stature Today
          </h2>
          <p className="text-stone-655 max-w-2xl mx-auto leading-relaxed text-md font-sans mb-8">
            The space-friendly 3-in-1 Incline Treadmill provides a motorized 15% gradient, double-layer safety treads, silent home operations, and extremely compact folding. Do not let limited space halt your movement goals.
          </p>
          <a 
            href="https://amzn.to/4uXWSqI" 
            target="_blank" 
            rel="nofollow sponsored noopener" 
            className="inline-flex bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-bold text-center px-12 py-4 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all gap-2 text-md"
          >
            <ShoppingCart className="w-5 h-5 text-white" /> Get Your 3-in-1 Incline Treadmill on Amazon
          </a>
        </div>

      </div>
    </motion.div>
  );
}
