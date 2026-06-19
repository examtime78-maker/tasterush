import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Heart, Sparkles, Award, Eye, HelpCircle, Activity, Undo2 } from 'lucide-react';

export default function NordicTrackTSeriesReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2025/09/NordicTrac-T-Series-1.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/09/NordicTrac-T-Series-2-100x100.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/09/NordicTrac-T-Series-3-100x100.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/09/NordicTrac-T-Series-4.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Unfolded Dimensions', value: '68.3″ Depth × 30.5″ Width × 48.7″ Height' },
    { label: 'Running Surface Belt', value: '18″ × 55″ Smooth-Glide Belt' },
    { label: 'Maximum Speed Capacity', value: '0–10 MPH Speed Range' },
    { label: 'Maximum Custom Incline', value: '0–10% Digital Quick Incline Control' },
    { label: 'Maximum Weight Capacity', value: '300 lbs' },
    { label: 'Net Machine Weight', value: '130 lbs' },
    { label: 'Consumable Power Source', value: 'Corded Electric 120V Ground' }
  ];

  const coreFeatures = [
    {
      title: '🏃 Dynamic 0–10 MPH Speeds',
      desc: 'Seamlessly shift from relaxed recovery walks to intensive heart-rate sprints using instant, responsive speed console controls.'
    },
    {
      title: '⛰️ 10% Interactive Incline Control',
      desc: 'Increase total cardiovascular intensity and enhance calf, glute, and hamstring activation on the fly.'
    },
    {
      title: '📱 Integrated iFIT Smart Training',
      desc: 'Unlock over 10,000+ top-tier outdoor runs and studio sessions with auto-adjusting digital speed/incline configurations.'
    },
    {
      title: '🦵 FlexSelect™ Impact Deck Cushioning',
      desc: 'Dampens high-impact forces on lower joints, knees, and ankles for a vastly healthier, smooth-glide step profile.'
    },
    {
      title: '📊 5" High-Contrast LCD Display',
      desc: 'Real-time performance metrics tracking including instant speed, split distance, duration, burn rate, and heart analytics.'
    },
    {
      title: '🏠 SpaceSaver® Folding Mechanical Design',
      desc: 'Treadmill uses a fast-lifting EasyLift assist shock system for effortless upward storage in tighter home layout spots.'
    }
  ];

  const ifitBenefits = [
    'Global trainer-guided running tours',
    'High-intensity interval training (HIIT)',
    'Dynamic strength & cardio endurance sessions',
    'Active, centering yoga and structural recovery'
  ];

  const warrantyInfo = [
    { label: 'Frame Coverage', value: '10-Year Manufacturer Frame Warranty' },
    { label: 'Parts Integrity', value: '1-Year Parts Replacement Guarantee' },
    { label: 'Core Motor Sourcing', value: '1-Year Active Drive Motor Warranty' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-slate-50 min-h-screen text-slate-950 font-sans pb-32"
    >
      {/* Dynamic Top Promotion Banner */}
      <div className="bg-slate-950 border-b border-slate-900 text-amber-400 text-center py-3 text-xs font-bold px-4 tracking-wider shadow-sm uppercase">
        ⚡ SMART CARDIO VALUE: NordicTrack T Series Space-Saving Folding Treadmill. Best Price Secure Route to Amazon.
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
                  className="max-h-full max-w-full object-contain rounded-2xl duration-305 transition-all hover:scale-105" 
                  alt="NordicTrack T Series Treadmill" 
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-slate-900 text-amber-400 text-[11px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider">
                  FOLDABLE SYSTEM
                </span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-slate-50 p-1 transition-all ${activeImg === img ? 'border-slate-800 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Treadmill Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-100 text-slate-900 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-slate-200">
                  <Award className="w-3.5 h-3.5 text-slate-700" /> Interactive Foldable Cardio
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight">
                NordicTrack <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-650 to-slate-950 text-2xl md:text-3xl font-black block mt-1">T Series Treadmill</span>
              </h1>
              <p className="text-slate-600 font-semibold text-md">Smarter Cardio, FlexSelect Cushioning Deck & EasyLift Storage Setup</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">5.0 (1 Certified Cardio Athlete Review)</span>
              </div>

              <div className="py-2 border-y border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-rose-600">$599.00</span>
                  <span className="text-slate-400 text-xs font-medium block mt-1 ml-2">Secure Despatch & Heavy Box Delivery Available via Amazon</span>
                </div>
              </div>

              <p className="text-slate-655 leading-relaxed text-md font-sans">
                Upgrade your home fitness setup with the <strong>NordicTrack T Series Treadmill</strong>, a smart, compact, and foldable high-efficiency cardio machine engineered specifically for walking, jogging, running, and automated trainer-led home programs. Featuring elite iFIT software integration, quick incline controls, impact-absorbing active cushioning, and an EasyLift folding piston design, this workout deck brings professional athletic facility outputs straight to your house.
              </p>

              <div className="pt-4">
                <a 
                  href="https://amzn.to/4u1pMoF" 
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

        {/* Brand Focus and Smart Ecosystem section */}
        <div className="bg-slate-900 text-white rounded-[2rem] p-8 md:p-12 border border-slate-800 shadow-xl mb-12">
          <h2 className="text-3xl font-extrabold text-center mb-6 tracking-tight text-white">
            Smarter Home Cardio Workouts with iFIT
          </h2>
          <div className="max-w-4xl mx-auto text-slate-300 text-center space-y-6 leading-relaxed">
            <p className="text-lg">
              The NordicTrack T Series beautifully balances high mechanical output, modern digital connectivity, and joint comfort. Experience automated controls where elite athletic trainers configure your running pacing adjustments in real time.
            </p>
            <p className="text-sm text-slate-400 font-sans">
              Connect your favorite smartphone or tablet device via built-in Bluetooth to experience real-world landscape routes, scenic run schedules, and high-energy studio workouts tailored to your metabolic specifications.
            </p>
          </div>
        </div>

        {/* Detailed Spec Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-slate-900 text-white rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3 text-white">
              <Sparkles className="text-red-400" /> Key Feature Innovations
            </h2>
            <ul className="space-y-4">
              {coreFeatures.map((feat, index) => (
                <li key={index} className="flex gap-3">
                  <div className="bg-slate-800 p-2.5 rounded-lg text-red-400 shrink-0 font-bold leading-none h-10 w-10 flex items-center justify-center border border-slate-750">✓</div>
                  <div>
                    <h4 className="font-bold text-white text-base">{feat.title}</h4>
                    <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">{feat.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            {/* Technical Specifications Matrix */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-850">
                <ShieldCheck className="text-slate-700" /> Technical Data Sheets
              </h2>
              <div className="grid grid-cols-1 gap-y-3 font-semibold text-xs text-slate-650">
                {specs.map((item, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-slate-50 last:border-0 font-sans">
                    <span className="text-slate-400">{item.label}</span>
                    <span className="text-slate-900 font-bold text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Warranty Coverage Frame Card */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2 text-slate-850">
                <Activity className="text-indigo-600" /> Manufacturer Warranty Protection
              </h2>
              <div className="grid grid-cols-1 gap-y-2 text-xs font-semibold">
                {warrantyInfo.map((info, idx) => (
                  <div key={idx} className="flex justify-between py-1 border-b border-slate-50 last:border-0 font-mono">
                    <span className="text-slate-400">{info.label} :</span>
                    <span className="text-slate-900 font-bold">{info.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal application demographics */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-3">
              <h2 className="text-xl font-bold flex items-center gap-2 text-slate-850">
                <Heart className="text-rose-500 fill-rose-500 w-5 h-5" /> Who This Machine Is Perfect For
              </h2>
              <ul className="text-slate-600 font-semibold text-xs space-y-1.5 font-sans">
                <li>✔ Fast post-workout cardio, calorie burn & daily walking routines</li>
                <li>✔ Home gym owners looking for dynamic, durable cardio machinery</li>
                <li>✔ Space-saving apartments requiring vertical fold designs</li>
                <li>✔ Athletes interested in professional interactive iFIT coaching routines</li>
              </ul>
            </div>
          </div>

        </div>

        {/* iFIT program categories */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Interactive iFIT Training Categories Compatible
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {ifitBenefits.map((item, id) => (
              <div key={id} className="bg-slate-50 p-4 rounded-2xl border border-slate-100 font-bold text-sm text-slate-800 flex items-center justify-center">
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA block */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-lg text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-950 mb-4 tracking-tight">
            Train Smarter at Home
          </h2>
          <p className="text-slate-655 max-w-2xl mx-auto leading-relaxed text-md font-sans mb-8">
            The NordicTrack T Series Treadmill blends smart fitness ecosystems, joint protection comfort, and quick mechanical storage loops to keep your health schedules extremely consistent. Step on premium tread engineering today.
          </p>
          <a 
            href="https://amzn.to/4u1pMoF" 
            target="_blank" 
            rel="nofollow sponsored noopener" 
            className="inline-flex bg-gradient-to-r from-red-650 to-red-600 hover:from-red-700 hover:to-red-700 text-white font-bold text-center px-12 py-4 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all gap-2 text-md"
          >
            <ShoppingCart className="w-5 h-5 text-white" /> Get NordicTrack T Series on Amazon
          </a>
        </div>

      </div>
    </motion.div>
  );
}
