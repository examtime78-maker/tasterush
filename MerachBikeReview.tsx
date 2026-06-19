import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Award, Heart, Sparkles, Activity, Info, ClipboardList, RefreshCw, Bike, ShieldCheck, Dumbbell } from 'lucide-react';

export default function MerachBikeReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2025/11/MERACH-Exercise-Bike-Brake-Pad-Stationary-Bike-with-Exclusive-App-Low-Noise-Indoor-Cycling-1.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/MERACH-Exercise-Bike-Brake-Pad-Stationary-Bike-with-Exclusive-App-Low-Noise-Indoor-Cycling-2.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/MERACH-Exercise-Bike-Brake-Pad-Stationary-Bike-with-Exclusive-App-Low-Noise-Indoor-Cycling-3.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/MERACH-Exercise-Bike-Brake-Pad-Stationary-Bike-with-Exclusive-App-Low-Noise-Indoor-Cycling-4.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Item Weight', value: '28 Kilograms (Approx. 61.7 lbs)' },
    { label: 'Frame Material', value: 'Heavy Duty Alloy Steel' },
    { label: 'Resistance Mechanism', value: 'Precision Brake Pad / Magnetic Friction Hybrid' },
    { label: 'Physical Dimensions', value: '38.37”D x 11.41”W x 30.11”H' },
    { label: 'Maximum Weight Capacity', value: '300 Pounds' },
    { label: 'Drive Mechanism', value: 'Low-Noise Belt Drive' },
    { label: 'Digital Monitor & Connectivity', value: 'LCD Display (Time, Speed, Distance, Calories, Pulse)' },
  ];

  const features = [
    {
      title: '📱 Exclusive App Connectivity & Training',
      desc: 'Seamlessly pairs with the MERACH proprietary fitness application. Access guided cycling courses, live telemetry tracking, and personalized fat-burning routines.'
    },
    {
      title: '🛑 Smooth Adjustable Brake Pad Resistance',
      desc: 'Advanced friction-adjusting system enables multi-gradient scaling of resistance. From relaxing cardio warmups to intense leg-sculpting mountain climbs.'
    },
    {
      title: '🤫 Low-Noise Belt Driven Mechanism',
      desc: 'Precision engineered belt drive ensures smooth revolutions. Runs extremely quiet under heavy sprints, keeping home/apartment environments undisturbed.'
    },
    {
      title: '⚙️ Fully Customizable Riding Ergonomics',
      desc: 'Tailor your position with vertically and horizontally adjustable seat positioning, paired with multi-grip comfortable anti-slip handlebars.'
    },
    {
      title: '🏗️ Ultra-Stable Commercial Alloy Frame',
      desc: 'Durable, double-triangular industrial steel tube frame. Confidently supports standing sprints and rapid tempo shifts for users up to 300 lbs.'
    },
    {
      title: '💗 Real-time Heart & Telemetry Tracking',
      desc: 'Equipped with dynamic contact pulse sensors on the handlebars. Instantly logs physical performance indicators onto the central digital LCD monitor.'
    }
  ];

  const highlights = [
    'Enables easy app-guided courses keeping indoor cardio fresh and competitive',
    'Features infinite adjustable friction brake pad tension control',
    'Sturdy, double-triangulated high-tensile frame layout ensures zero frame wobble',
    'Compact home footprint slides beautifully into corners, bedrooms, or garage cells',
    'Vastly superior road-like flywheel kinetic feel compared to light budget spinners',
    'Extremely straightforward assembly gets you cycling in under 30 minutes'
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-neutral-50/10 min-h-screen text-slate-900 font-sans pb-32"
    >
      {/* Top Value Banner */}
      <div className="bg-slate-900 text-slate-100 text-center py-3 text-xs font-black px-4 tracking-wider shadow-md uppercase">
        🚴 LIVE APP CONNECTED: MERACH Interactive Low-Noise Indoor Spinning. Direct affiliate route to Amazon.
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
              <div className="bg-slate-50 rounded-3xl p-6 flex items-center justify-center border border-slate-100 aspect-square overflow-hidden relative">
                <img 
                  src={activeImg} 
                  className="max-h-full max-w-full object-contain rounded-2xl duration-300 transition-all hover:scale-105" 
                  alt="MERACH Low Noise Exercise Bike" 
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-slate-900 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider shadow-sm">
                  APP INTEGRATED
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-stone-55 p-1 transition-all ${activeImg === img ? 'border-amber-600 shadow-md' : 'border-transparent opacity-75 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`MERACH Bike Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-150 bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-flex items-center gap-1.5 border border-slate-200">
                  <Award className="w-3.5 h-3.5 text-slate-900" /> Professional Road Ride
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-950 tracking-tight font-sans">
                MERACH Stationary <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-amber-700 text-2xl md:text-3.5xl font-black block mt-1">Gym Spinning Exercise Bike</span>
              </h1>
              <p className="text-stone-600 font-semibold text-sm">Interactive App Synergy, Silent Belt Drive & Smooth Brake Pad Friction</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-slate-200 text-slate-200" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">4.0 (1 Certified Athlete Review)</span>
              </div>

              <div className="py-2 border-y border-stone-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-rose-600">$664.99</span>
                  <span className="text-md text-slate-400 line-through ml-2">$699.99</span>
                  <span className="text-xs bg-amber-100 text-amber-900 font-extrabold px-2.5 py-1 rounded-md ml-3">Save 5% Off MSRP</span>
                </div>
              </div>

              <p className="text-stone-605 leading-relaxed text-sm md:text-base font-sans ring-zinc-500">
                Transform your home cardio routine into an interactive fitness program with the beautifully engineered <strong>MERACH Exercise Bike Brake Pad Stationary Bike</strong>. Strategically built for low-noise operations, this heavy-duty alloy steel machine offers deep, muscle-building resistance and professional road-like kinetic stability. Featuring full vertical and horizontal micro-adjustments and exclusive app coursework sync, it provides a premium indoor cycling experience.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://amzn.to/49sH8n0" 
                  target="_blank" 
                  rel="nofollow sponsored noopener" 
                  className="bg-gradient-to-r from-[#ff9900] to-[#ffb84d] hover:from-[#e68a00] hover:to-[#e6a540] text-slate-950 font-bold text-center px-10 py-5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-lg flex-1"
                >
                  <ShoppingCart className="w-5 h-5 text-slate-950" /> Buy Now on Amazon
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Dynamic Digestive and Micronutrient Header Panel */}
        <div className="bg-slate-950 text-slate-100 rounded-[2rem] p-8 md:p-12 border border-slate-900 shadow-xl mb-12">
          <h2 className="text-3xl font-extrabold text-white text-center mb-6 tracking-tight">
            High-Performance Direct App Integration & Friction Mechanics
          </h2>
          <div className="max-w-4xl mx-auto text-slate-350 text-center space-y-6 text-sm lg:text-base leading-relaxed">
            <p>
              Unlike typical passive cardio equipment, MERACH integrates state-of-the-art interactive program systems that coordinate perfectly with their custom app. Bike sensors log cadence, heart metrics, and distance to track your health and maximize output.
            </p>
            <p className="text-xs text-amber-400 leading-relaxed font-sans font-bold uppercase tracking-wider">
              ★ Tailor your stance using the fully customizable seat heights, slider depths, and multi-grip handlebars.
            </p>
          </div>
        </div>

        {/* Detailed Spec Panels & Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-slate-950 text-slate-100 rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6 border border-slate-900 text-slate-300">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3 text-white">
              <Sparkles className="text-amber-450 text-amber-400" /> Engineering Advantages
            </h2>
            <ul className="space-y-4">
              {features.map((feat, index) => (
                <li key={index} className="flex gap-3">
                  <div className="bg-slate-900 p-2.5 text-amber-500 shrink-0 font-bold leading-none h-10 w-10 flex items-center justify-center rounded-lg border border-slate-800">✓</div>
                  <div>
                    <h4 className="font-bold text-white text-base font-sans">{feat.title}</h4>
                    <p className="text-slate-400 text-xs mt-0.5 leading-relaxed font-sans font-medium">{feat.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            {/* Technical Specifications */}
            <div className="bg-white rounded-3xl p-8 border border-slate-150 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-850">
                <ClipboardList className="text-slate-705 text-slate-800" /> Engineering Spec Sheet
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
            <div className="bg-white rounded-3xl p-8 border border-slate-150 shadow-sm space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2 text-slate-850">
                <Heart className="text-rose-500 fill-rose-500 w-5 h-5" /> Athlete Experience Points
              </h2>
              <div className="grid grid-cols-1 gap-y-2 text-slate-705 text-xs font-semibold font-sans">
                {highlights.map((rate, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-zinc-100">
                    <span className="text-slate-755 font-extrabold shrink-0">✔</span>
                    <span>{rate}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Pros vs. Considerations Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-emerald-50/20 border border-emerald-505 border-emerald-500/15 p-8 rounded-3xl space-y-4 shadow-sm">
            <h3 className="text-emerald-900 font-black text-xl flex items-center gap-2">
              👍 Pros & Strengths
            </h3>
            <ul className="space-y-2.5 text-zinc-705 text-sm">
              <li className="flex gap-2 items-start font-medium text-slate-805 font-sans">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Direct connectivity with the MERACH app unlocks elite digital trainers</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-805 font-sans">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Low-noise belt driven mechanism keeps workout sessions completely hushed</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-805 font-sans">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Heavy alloy steel frame guarantees outstanding structural security up to 300 lbs</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-805 font-sans block">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Fully adjustable seat and handle setup fits users of all heights perfectly</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-805 font-sans">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Compact physical footprint fits easily into standard bedrooms or living rooms</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 border border-slate-300 p-8 rounded-3xl space-y-4 shadow-sm">
            <h3 className="text-slate-900 font-black text-xl flex items-center gap-2">
              ⚠️ Considerations
            </h3>
            <ul className="space-y-2.5 text-zinc-705 text-sm font-medium">
              <li className="flex gap-2 items-start font-medium text-slate-805 font-sans">
                <span className="text-slate-550 text-slate-600 font-bold shrink-0">●</span>
                <span>Brake pad friction systems require high-duration wear monitoring over years of use</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-805 font-sans">
                <span className="text-slate-550 text-slate-600 font-bold shrink-0">●</span>
                <span>Full access route benefits from standard tablet mount placement during streaming</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-805 font-sans">
                <span className="text-slate-550 text-slate-600 font-bold shrink-0">●</span>
                <span>Requires basic alignment calibration during original assembly step</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Target Demographics */}
        <div className="bg-slate-950/5 border border-slate-900/10 rounded-[2rem] p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-slate-950 mb-6 flex items-center gap-2 justify-center font-sans tracking-tight">
            <Activity className="text-red-650 text-red-600 animate-pulse w-6 h-6" /> Preferred Exerciser Demographics
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center text-sm font-sans">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-between shadow-xs">
              <div>
                <p className="font-extrabold text-slate-950 text-base mb-2">📹 Digital Training Fans</p>
                <p className="text-stone-605 leading-relaxed text-xs">Instantly sync your daily health metrics to the smart tablet/app console to enjoy trainer-led cardio programs.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-between shadow-xs">
              <div>
                <p className="font-extrabold text-slate-950 text-base mb-2">🤫 Quiet-conscious Homes</p>
                <p className="text-stone-605 leading-relaxed text-xs">Perform high-calorie sprint sessions early in the morning without disturbing roommates or family members.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-between shadow-xs">
              <div>
                <p className="font-extrabold text-slate-950 text-base mb-2">🏃 High-Intensity Spinners</p>
                <p className="text-stone-605 leading-relaxed text-xs">Rely on the heavy double-triangular steel support chassis for aggressive stand-up cycling workouts.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Clinical Disclaimer Box */}
        <div className="bg-slate-100 rounded-3xl p-6 border border-slate-200 shadow-xs max-w-4xl mx-auto mb-12">
          <h3 className="text-slate-850 font-bold mb-2 flex items-center gap-2 text-xs uppercase tracking-wide">
            <Info className="w-4 h-4 text-slate-650" /> Sourcing Material Safety Disclaimer
          </h3>
          <p className="text-slate-505 text-xs font-sans leading-relaxed">
            Ensure you adjust your back upright alignments and horizontal seat margins to support comfortable spinal placement. Protect your knees from excessive mechanical stress by warming up appropriately prior to high friction climbs. Consult licensed physicians or sports physical therapists if you operate under chronic knee or metabolic conditions.
          </p>
        </div>

        {/* Final CTA Container */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-150 shadow-lg text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-950 mb-4 tracking-tight">
            Reinvent Your Home Aerobic Health Matrix Today
          </h2>
          <p className="text-stone-655 max-w-2xl mx-auto leading-relaxed text-md font-sans mb-8 font-sans">
            The MERACH Exercise Bike Stationary Bike combines lightweight interactive connected apps, elite noiseless belt systems, heavy structural alloys, and highly customizable sizing. Lift your athletic standard.
          </p>
          <a 
            href="https://amzn.to/49sH8n0" 
            target="_blank" 
            rel="nofollow sponsored noopener" 
            className="inline-flex bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-center px-12 py-4 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all gap-2 text-md font-sans"
          >
            <ShoppingCart className="w-5 h-5 text-white" /> Get MERACH Bike on Amazon
          </a>
        </div>

      </div>
    </motion.div>
  );
}
