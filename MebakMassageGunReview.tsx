import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Heart, Sparkles, Award, RotateCw, Activity, Info, ClipboardList, Battery, Zap, Volume2 } from 'lucide-react';

export default function MebakMassageGunReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2025/11/Mebak-3-Massage-Gun-Massage-Gun-Deep-Tissue-for-Athletes-1.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Mebak-3-Massage-Gun-Massage-Gun-Deep-Tissue-for-Athletes-2.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Mebak-3-Massage-Gun-Massage-Gun-Deep-Tissue-for-Athletes-3.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Mebak-3-Massage-Gun-Massage-Gun-Deep-Tissue-for-Athletes-4-100x100.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Device Amplitude', value: '12mm Deep-Tissue Percussion Depth' },
    { label: 'Speed Adjustment Scales', value: '5 Scientific Electronic Speed Levels' },
    { label: 'Interchangeable Attachments', value: '7 Targeted Professional Massage Heads' },
    { label: 'Battery Chemistry & Sizing', value: 'Rechargeable Long-Life Lithium-Ion' },
    { label: 'Battery Lifespan Runtime', value: 'Up to 3 Hours Continuous Operation' },
    { label: 'Weight & Handling', value: 'Ultra-Lightweight Ergonomic Portable Design' },
    { label: 'Acoustic Sound Decibels', value: 'Quiet Brushless Motor Operation' }
  ];

  const features = [
    {
      title: '⚡ 12mm Deep Tissue Percussive Strike',
      desc: 'Penetrates deep into tight, localized muscle tissues with a calculated 12mm amplitude stroke to rapidly break lactic knots and release severe spasms.'
    },
    {
      title: '🔋 Heavy-Duty Rechargeable Battery',
      desc: 'Incorporates a premium lithium-ion battery array ensuring up to 3 robust hours of cord-free, consistent motor percussive power on a single charge.'
    },
    {
      title: '🔈 Whisper-Quiet Brushless Motor Technology',
      desc: 'Combines dynamic high-torque power output with advanced acoustic dampening filters, maintaining peaceful operation in quiet living rooms or gym floors.'
    },
    {
      title: '🎯 7 Professional Interchangeable Heads',
      desc: 'Features highly specialized bullet, fork, round, and flat heads specifically constructed to treat different muscle fibers and joint zones throughout the body.'
    },
    {
      title: '🔄 5 Optimized Speed Calibration Levels',
      desc: 'Seamlessly shift between lower therapeutic muscle warmups and dense athletic muscle conditioning with the modern physical LED control panel.'
    },
    {
      title: '🎒 Compact & Gym-Ready Portability',
      desc: 'Beautifully engineered with high-traction anti-slip ergonomics that slide easily into gym lockers, travel packs, or specialized cases.'
    }
  ];

  const directAesthetics = [
    'Allows customizable muscle warmup or recovery targeting',
    'Helps immediately relieve severe post-workout muscle soreness and stiffness',
    'Increases muscular vascular circulation and overall joint mobility',
    'Whisper-quiet brushless operation won’t disrupt housemates',
    'Extremely comfortable, vibration-reducing holding grip handle',
    'Includes a complete selection of premium attachment accessories'
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-neutral-50/10 min-h-screen text-slate-900 font-sans pb-32"
    >
      {/* Top Value Banner */}
      <div className="bg-slate-900 text-slate-105 bg-slate-950 text-white text-center py-3 text-xs font-black px-4 tracking-wider shadow-md uppercase">
        ⚡ INTENSE PERCUSSION recovery: Mebak 3 Deep Tissue Massager. Direct verified access route to Amazon.
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
              <div className="bg-neutral-50/50 rounded-3xl p-6 flex items-center justify-center border border-slate-100 aspect-square overflow-hidden relative animate-fade-in">
                <img 
                  src={activeImg} 
                  className="max-h-full max-w-full object-contain rounded-2xl duration-300 transition-all hover:scale-105" 
                  alt="Mebak 3 Deep Tissue Massage Gun" 
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-slate-900 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider shadow-sm">
                  DEEP RECOVERY
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-white p-1 transition-all ${activeImg === img ? 'border-amber-500 shadow-md' : 'border-transparent opacity-75 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Mebak Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-slate-200">
                  <Award className="w-3.5 h-3.5 text-slate-900" /> Deep Tissue Percussion
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-950 tracking-tight font-sans">
                Mebak 3 <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-900 text-2xl md:text-3.5xl font-black block mt-1">Deep Tissue Percussive Massage Gun</span>
              </h1>
              <p className="text-stone-600 font-semibold text-sm">Targeted Soreness Relief, Professional Athletic Grade Recovery & Sore Joint Release</p>
              
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
                  <span className="text-4xl font-black text-rose-600">$74.79</span>
                  <span className="text-md text-slate-400 line-through ml-2">$87.99</span>
                  <span className="text-xs bg-amber-100 text-amber-900 font-extrabold px-2.5 py-1 rounded-md ml-3">Save 15% Off Amazon List</span>
                </div>
              </div>

              <p className="text-stone-605 leading-relaxed text-sm md:text-base font-sans mt-2">
                Reconstruct tired muscle tissues and eliminate persistent lactic soreness with the advanced percussive technology of the <strong>Mebak 3 Massage Gun</strong>. Built intentionally to serve weightlifters, active runners, home fitness lovers, and personal physical therapy specialists, this dynamic massager features up to five science-backed speed settings and seven uniquely targeted head adapters. It supplies smooth, high-torque vibration muscle relief with pristine cordless mobility.
              </p>

              <div className="pt-4">
                <a 
                  href="https://amzn.to/4dLIF8L" 
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

        {/* Performance Description Banner */}
        <div className="bg-slate-950 text-slate-100 rounded-[2rem] p-8 md:p-12 border border-slate-900 shadow-xl mb-12">
          <h2 className="text-3xl font-extrabold text-white text-center mb-6 tracking-tight">
            Advanced Percussive Lactic Recovery Engine
          </h2>
          <div className="max-w-4xl mx-auto text-slate-350 text-center space-y-6 text-sm lg:text-base leading-relaxed">
            <p>
              The Mebak 3 Massage Gun utilizes dynamic percussive strikes at 12mm depth to promote blood circulation, reduce physical inflammation, and release deep myofascial trigger points without costly clinical appointments.
            </p>
            <p className="text-xs text-amber-400 leading-relaxed font-sans font-bold uppercase tracking-wider">
              ★ Features 7 custom-designed therapeutic head attachments for pin-point physical joint and tendon rehabilitation.
            </p>
          </div>
        </div>

        {/* Detailed Spec Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-slate-950 text-slate-100 rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6 border border-slate-900">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3 text-white">
              <Sparkles className="text-amber-450 text-amber-400" /> Key Device Features
            </h2>
            <ul className="space-y-4">
              {features.map((feat, index) => (
                <li key={index} className="flex gap-3">
                  <div className="bg-slate-900 p-2.5 text-amber-400 shrink-0 font-bold leading-none h-10 w-10 flex items-center justify-center rounded-lg border border-slate-800">✓</div>
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
                <ClipboardList className="text-slate-700" /> Percussion Blueprint Sheet
              </h2>
              <div className="grid grid-cols-1 gap-y-3 font-semibold text-xs text-slate-655 font-sans">
                {specs.map((item, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-slate-50 last:border-0">
                    <span className="text-slate-400">{item.label}</span>
                    <span className="text-amber-805 text-amber-900 font-extrabold text-right">{item.value}</span>
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
                {directAesthetics.map((rate, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-slate-50/50 p-2.5 rounded-xl border border-slate-100">
                    <span className="text-amber-600 font-black shrink-0">✔</span>
                    <span>{rate}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Pros & Considerations Split Panel */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-emerald-50/20 border border-emerald-500/15 p-8 rounded-3xl space-y-4 shadow-sm">
            <h3 className="text-emerald-900 font-black text-xl flex items-center gap-2">
              👍 Pros & Strengths
            </h3>
            <ul className="space-y-2.5 text-stone-705 text-sm">
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Deep 12mm percussive penetration targets major deep muscle groups</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800 font-sans">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Complete 7 head configurations treat cervical, lumbar, and plantar regions</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800 font-sans">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Quiet brushless motor ensures peaceful, relaxing therapy at home</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800 font-sans">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Long runtime battery protects intensive rehabilitation sessions from interruptions</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800 font-sans">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Includes robust protective travel organization case and accessories</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50/25 border border-amber-500/15 p-8 rounded-3xl space-y-4 shadow-sm">
            <h3 className="text-amber-900 font-black text-xl flex items-center gap-2">
              ⚠️ Considerations
            </h3>
            <ul className="space-y-2.5 text-stone-705 text-sm">
              <li className="flex gap-2 items-start font-medium text-slate-800 font-sans">
                <span className="text-amber-600 font-bold shrink-0">●</span>
                <span>Requires basic physical arm control strength during vertical posterior usage</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800 font-sans">
                <span className="text-amber-600 font-bold shrink-0">●</span>
                <span>Percussion power can feel quite intense at Level 5 for muscle-sensitive individuals</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800 font-sans">
                <span className="text-amber-600 font-bold shrink-0">●</span>
                <span>Battery longevity relies on avoiding constant extreme pressure overloading</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Custom Target Audiences Panel */}
        <div className="bg-slate-950/5 border border-slate-900/10 rounded-[2rem] p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2 justify-center font-sans tracking-tight">
            <Activity className="text-amber-600 animate-pulse" /> Optimal Training Demographics
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center text-sm font-sans">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-between shadow-xs">
              <div>
                <p className="font-extrabold text-amber-700 text-base mb-2">🏃 Athletes & Gym-Goers</p>
                <p className="text-stone-605 leading-relaxed text-xs">Ideal for pre-workout metabolic vascular warm-ups and advanced post-lifting cool-downs. Breaks fascia knots cleanly.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-between shadow-xs">
              <div>
                <p className="font-extrabold text-amber-700 text-base mb-2">💼 High-Stress Professionals</p>
                <p className="text-stone-605 leading-relaxed text-xs">Instantly relieves cervical neck stiffness, upper back tight nodes, and shoulder stress resulting from long office desk posture.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-between shadow-xs">
              <div>
                <p className="font-extrabold text-amber-700 text-base mb-2">🎒 Mobility & Deep Travel Care</p>
                <p className="text-stone-605 leading-relaxed text-xs">Slip the organized travel carrying case inside your regular suitcase to enjoy luxurious, muscle-relaxing therapies on long roads.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Clinical Disclaimer Box */}
        <div className="bg-slate-100 rounded-3xl p-6 border border-slate-200 shadow-xs max-w-4xl mx-auto mb-12">
          <h3 className="text-slate-850 font-bold mb-2 flex items-center gap-2 text-xs uppercase tracking-wide">
            <Info className="w-4 h-4 text-slate-650" /> Percussive Sourcing & Biomechanical Safety Disclaimer
          </h3>
          <p className="text-slate-505 text-xs font-sans leading-relaxed">
            Ensure that you operate high-frequency percussion massage devices with smart physical caution. Never apply hard percussive forces directly to major bony matrices, spinal vertebrae columns, high-vessel throat regions, or open cuts. Consult physical therapists or athletic coordinators prior to treating severe chronic clinical pains or joint injuries.
          </p>
        </div>

        {/* Final CTA Container */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-150 shadow-lg text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-950 mb-4 tracking-tight">
            Elevate Muscle Flexibility and Physical Recovery Today
          </h2>
          <p className="text-stone-655 max-w-2xl mx-auto leading-relaxed text-md font-sans mb-8">
            The Mebak 3 Massage Gun blends premium 12mm depth amplitude, whisper-quiet brushless motor operation, versatile 7-head sets, and easy lithium battery convenience. Release physical tension on command.
          </p>
          <a 
            href="https://amzn.to/4dLIF8L" 
            target="_blank" 
            rel="nofollow sponsored noopener" 
            className="inline-flex bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-center px-12 py-4 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all gap-2 text-md"
          >
            <ShoppingCart className="w-5 h-5 text-white" /> Get Mebak 3 Massager on Amazon
          </a>
        </div>

      </div>
    </motion.div>
  );
}
