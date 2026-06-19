import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Heart, Sparkles, Award, Activity, Info } from 'lucide-react';

export default function MarcyRecumbentBikeReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2026/02/Marcy-Magnetic-Recumbent-Exercise-Bike1.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/02/Marcy-Magnetic-Recumbent-Exercise-Bike2.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/02/Marcy-Magnetic-Recumbent-Exercise-Bike3.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Model Number', value: 'NS-1206R Precision Recumbent' },
    { label: 'Resistance Mechanism', value: '8-Level Manual Magnetic System' },
    { label: 'Built-in Display', value: 'High-Contrast Digital LCD Console' },
    { label: 'Performance Tracker', value: 'Time, Speed, Distance, and Burned Calories' },
    { label: 'Maximum Weight Capacity', value: '300 lbs Custom Weight Limit' },
    { label: 'Product Dimensions', value: 'Approx. 55" L × 25" W × 38" H' },
    { label: 'Mobility Sourcing', value: 'Built-In Front Rolling Transport Wheels' }
  ];

  const coreFeatures = [
    {
      title: '🔄 8-Level Magnetic Resistance',
      desc: 'Quickly modify your cycling workout intensity with a simple manual click-dial, ranging from easy recovery spins to moderate cardio grinds.'
    },
    {
      title: '🪑 Ergonomic Back-Support Seat',
      desc: 'Specially reclined recumbent saddle distributes bodyweight evenly and removes stressful vertical load from the spine, hips, and lower lumbar.'
    },
    {
      title: '📊 Clean LCD Workout Monitor',
      desc: 'Tracks core fitness accomplishments in real time. Effortlessly monitor session speed, duration, estimated calorie burn, and cumulative odometer.'
    },
    {
      title: '🔇 Ultra-Quiet Magnetic Flywheel',
      desc: 'Soothe and quiet your workouts utilizing smooth non-contact magnetic flywheels. Extremely perfect for shared living spaces, apartments, and bedrooms.'
    },
    {
      title: '👣 Secure Gripped Safety Pedals',
      desc: 'Counterbalanced weighted foot pedals include quick-adjust locking rubber straps to keep feet properly positioned and safe during high speeds.'
    },
    {
      title: '💪 Reinforced Structural Frame',
      desc: 'Heavy-duty commercial-grade tubular steel structure comfortably accommodates fitness enthusiasts up to 300 lbs with pure stability.'
    }
  ];

  const benefitsList = [
    'Reclined low-stress riding posture to prevent back fatigue',
    'Whisper-quiet magnetic belt system won\'t disturb family members',
    'Highly recommended for seniors, rehabilitation, and beginners',
    'Zero complicated software, plugins, or registration needed',
    'Saves space in compact rooms and is easily moved with wheels',
    'Includes premium padded seat cushion for prolonged sessions'
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-slate-50 min-h-screen text-slate-950 font-sans pb-32"
    >
      {/* Marcy Banner Alert */}
      <div className="bg-red-950 border-b border-red-900 text-red-100 text-center py-3 text-xs font-bold px-4 tracking-wider shadow-sm uppercase">
        ⚡ LOW-IMPACT SPECIALIST: Marcy Silent Recumbent (300lb Rating). Verified Secure Direct Route to Amazon.
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-12">
        <Link to="/" className="inline-flex items-center text-slate-500 hover:text-red-900 transition-colors mb-8 font-medium">
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
                  alt="Marcy Magnetic Recumbent Exercise Bike" 
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-red-600 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider">
                  LOW-IMPACT CARDIO
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-slate-50 p-1 transition-all ${activeImg === img ? 'border-red-600 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Marcy Bike Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-red-50 text-red-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-red-100">
                  <Award className="w-3.5 h-3.5 text-red-600" /> Compact Cardio & Rehabilitation
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight">
                Marcy Magnetic <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-slate-900 text-2xl md:text-3xl font-black block mt-1">Recumbent Bike NS-1206R</span>
              </h1>
              <p className="text-slate-600 font-semibold text-md">Quiet Magnetic Cardio with Ergonomic Supportive Backrest Design</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-slate-200" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">4.0 (3 Certified Customer Reviews)</span>
              </div>

              <div className="py-2 border-y border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-rose-600">$239.99</span>
                  <span className="text-slate-400 text-xs font-medium block mt-1 ml-2">Fast Direct Prime Despatch & Delivery Sourced on Amazon</span>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed text-md font-sans">
                Enjoy incredibly comfortable, low-impact cardio workouts from home with the <strong>Marcy Magnetic Recumbent Exercise Bike NS-1206R</strong>. Thoughtfully engineered for absolute beginners, active seniors, physical therapists, rehabilitation patients, and everyday fitness enthusiasts, this recumbent bike combines robust spinal back-support, quiet magnetic drive operations, and simple tracking in one budget-friendly home machine.
              </p>

              <div className="pt-4">
                <a 
                  href="https://amzn.to/49osXPK" 
                  target="_blank" 
                  rel="nofollow sponsored noopener" 
                  className="bg-gradient-to-r from-[#ff9900] to-[#ffb84d] hover:from-[#e68a00] hover:to-[#e6a540] text-slate-950 font-bold text-center px-10 py-4.5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-lg"
                >
                  <ShoppingCart className="w-5 h-5" /> Buy Now on Amazon
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Informative Intro text matching instructions */}
        <div className="bg-slate-900 text-white rounded-[2rem] p-8 md:p-12 border border-slate-800 shadow-xl mb-12">
          <h2 className="text-3xl font-extrabold text-center mb-6 tracking-tight text-white">
            Comfortable Low-Impact Home Cardio
          </h2>
          <div className="max-w-4xl mx-auto text-slate-350 text-center space-y-6 leading-relaxed">
            <p className="text-lg">
              The Marcy NS-1206R is structurally engineered to deliver ultra-smooth, silent, and joint-friendly workouts. Its reclined recumbent frame promotes a relaxed riding posture that drastically reduces downward pressure on the spine, hips, and knees. 
            </p>
            <p className="text-sm text-slate-400 font-sans">
              Whether you are focused on building cardiovascular endurance, burning casual calories, maintaining stable mobility, or actively recovering from lower-body orthopedic procedures, this indoor exercise bike delivers a safe, accessible route.
            </p>
          </div>
        </div>

        {/* Detailed Spec Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-slate-900 text-white rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-850 pb-3 text-white">
              <Sparkles className="text-red-400" /> Key Features & Perks
            </h2>
            <ul className="space-y-4">
              {coreFeatures.map((feat, index) => (
                <li key={index} className="flex gap-3">
                  <div className="bg-slate-805 bg-slate-800 p-2 text-red-400 shrink-0 font-bold leading-none h-9 w-9 rounded-full flex items-center justify-center border border-slate-750">✓</div>
                  <div>
                    <h4 className="font-bold text-white text-base">{feat.title}</h4>
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
                <ShieldCheck className="text-slate-700" /> Mechanical Specs Sheet
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

            {/* Why Users Love It Section */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2 text-slate-850">
                <Heart className="text-red-500 fill-red-500 w-5 h-5" /> Why Users Love This Bike
              </h2>
              <div className="grid grid-cols-1 gap-y-2.5 text-slate-700 text-xs font-semibold">
                {benefitsList.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <span className="text-emerald-600 font-extrabold shrink-0">✔</span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Demographics checklist */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center flex items-center justify-center gap-2">
            <Activity className="text-red-500" /> Who It is Perfect For
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            <div className="bg-slate-55 bg-slate-50 p-6 rounded-2xl border border-slate-100 font-medium text-slate-800 text-sm">
              <p className="font-extrabold text-red-650 mb-1">🏠 Seniors & Rehabilitation</p>
              Provides safe reclining access, very low step-through height, and excellent physical lumbar support options during joint-friendly cycles.
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 font-medium text-slate-800 text-sm">
              <p className="font-extrabold text-red-650 mb-1">🚲 Entry-Level Cardio Focus</p>
              Excellent for absolute beginners and casual home workout schedules looking to safely jumpstart a healthier physical routine.
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 font-medium text-slate-800 text-sm">
              <p className="font-extrabold text-red-650 mb-1">🔑 Compact Apartment Spaces</p>
              Designed with a consolidated frame, silent magnetic flywheels, and convenient roller wheels to easily tuck into corner areas.
            </div>
          </div>
        </div>

        {/* Important Guidelines Disclaimer */}
        <div className="bg-slate-150 bg-slate-100 rounded-3xl p-6 border border-slate-200 shadow-xs max-w-4xl mx-auto mb-12">
          <h3 className="text-slate-800 font-bold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
            <Info className="w-4 h-4 text-slate-600" /> Workout Safety Sourcing Note
          </h3>
          <p className="text-slate-500 text-xs font-sans leading-relaxed">
            Ensure you tailor workouts to your professional physiological thresholds. When utilizing for clinical rehabilitation or advanced recovery routines, seek guidance from certified physical therapists or healthcare practitioners to align therapeutic resistance dial settings.
          </p>
        </div>

        {/* Final CTA Board */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-lg text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-950 mb-4 tracking-tight">
            Smooth, Quiet & Comfortable Cardio at Home
          </h2>
          <p className="text-slate-655 max-w-2xl mx-auto leading-relaxed text-md font-sans mb-8">
            The Marcy Magnetic Recumbent Exercise Bike NS-1206R impeccably integrates complete lumbar protection, highly responsive manual magnetic dial controls, and whisper-silent belt mechanics. Take a comfortable step towards your everyday physical health goals with confidence.
          </p>
          <a 
            href="https://amzn.to/49osXPK" 
            target="_blank" 
            rel="nofollow sponsored noopener" 
            className="inline-flex bg-gradient-to-r from-[#ff9900] to-[#ffa31a] hover:from-[#e68a00] hover:to-[#e6941a] text-slate-950 font-black text-center px-12 py-4 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all gap-2 text-md"
          >
            <ShoppingCart className="w-5 h-5 text-slate-950" /> Get Your Marcy Recumbent Bike on Amazon
          </a>
        </div>

      </div>
    </motion.div>
  );
}
