import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Award, Heart, Sparkles, Activity, Info, ClipboardList, ShieldCheck, Dumbbell } from 'lucide-react';

export default function RitFitPowerCageReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2025/11/RitFit-Upgraded-PPC-P3-Power-Cage-3-in-1-Home-Gym-with-Aluminum-Pulley-System-1.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/RitFit-Upgraded-PPC-P3-Power-Cage-3-in-1-Home-Gym-with-Aluminum-Pulley-System2.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/RitFit-Upgraded-PPC-P3-Power-Cage-3-in-1-Home-Gym-with-Aluminum-Pulley-System3.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/RitFit-Upgraded-PPC-P3-Power-Cage-3-in-1-Home-Gym-with-Aluminum-Pulley-System4.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'System Design Type', value: '3-in-1 Power Cage + Cable Station + Functional Trainer' },
    { label: 'Steel Construction', value: 'Heavy-Duty 14-Gauge Solid Steel' },
    { label: 'Weight Limit Capacity', value: 'Up to 1,000 lbs Static load rating' },
    { label: 'Pulley Assembly', value: 'Upgraded Smooth Aircraft-Grade Aluminum Pulley' },
    { label: 'Compatible Bars & Plates', value: 'Universal fits standard & Olympic hardware' },
    { label: 'Main Frame Warranty', value: '36-Month Structural Manufacturer Protection' },
    { label: 'Accessories Warranty', value: '12-Month Component Performance Warranty' }
  ];

  const features = [
    {
      title: '🏋️ Robust 3-in-1 Full-Body Hub',
      desc: 'Combines a structural free-weight power rack, dual high/low cable pulley system, and upper body functional trainer to execute squats, pulldowns, rows, and presses safely.'
    },
    {
      title: '🦾 Elite Aluminum Pulley Upgrade',
      desc: 'Bypasses cheap plastic standard pulleys, integrating upgraded solid aluminum sheaves that rotate silently with near-zero friction drag or cable fraying.'
    },
    {
      title: '🛡️ 14-Gauge Steel & 1,000 lbs Safety',
      desc: 'Precision welded from high-yield 14-gauge structural steel tubes. Ready to support extreme lifting goals up to 1,000 lbs without structural sway.'
    },
    {
      title: '🚲 Micro-Adjustable J-Hooks & Safeties',
      desc: 'Includes heavily padded, durable steel J-Hooks and long safety catches with multi-hole level spacing to safely cater to squats and bench movements of all heights.'
    },
    {
      title: '📐 Smart Compact Multi-Grip Pullbar',
      desc: 'Optimized outer footprint delivers pristine space efficiency inside garages or basements. Multi-angle pull-up bars enable close-grip and wide-grip work.'
    },
    {
      title: '🔌 Integrated Plate Storage Pegs',
      desc: 'Features useful weight plate holding pins built into the rear columns, keeping your workout flooring clean, orderly, and highly stable.'
    }
  ];

  const valueHighlights = [
    'Tremendous savings: Replaces three bulky pieces of commercial gear in one',
    'Ultra-premium aluminum pulley wheels ensure buttery smooth, quiet cable moves',
    'Highly secure commercial-grade structure tested up to 1,000 lbs limits',
    'Perfect fitment with global adjustable benches, barbell systems, and attachments',
    'Comes fully loaded with quick hooks, dip handles, plate pins, and attachments',
    'Unbeatable long-term peace of mind with the 3-year structural warranty'
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-stone-50 min-h-screen text-slate-900 font-sans pb-32"
    >
      {/* Top Banner */}
      <div className="bg-slate-950 text-white text-center py-3 text-xs font-black px-4 tracking-wider shadow-md uppercase">
        🏋️ COMMERCIAL POWER STATION: RitFit PPC-P3 3-in-1 Upgraded Multi-Gym. Verified Sourced Route to Amazon.
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
                  alt="RitFit Multi-Gym Power Cage" 
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-slate-900 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider shadow-sm">
                  3-IN-1 HOME GYM
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-slate-50 p-1 transition-all ${activeImg === img ? 'border-amber-600 shadow-md' : 'border-transparent opacity-75 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`RitFit Cage Thumbnail ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-slate-200">
                  <Award className="w-3.5 h-3.5 text-slate-900" /> Premium Upgraded Pulleys
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-950 tracking-tight font-sans">
                RitFit PPC-P3 <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-900 text-2xl md:text-3.5xl font-black block mt-1">Upgraded Power Cage Multi-Gym</span>
              </h1>
              <p className="text-stone-605 font-semibold text-sm">Comprehensive Strength Station, Linear Aluminum Pulley System & Functional Trainer</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-slate-200 text-slate-200" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">4.0 (1 Certified Gym Builder Review)</span>
              </div>

              <div className="py-2 border-y border-stone-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-rose-600">$699.99</span>
                  <span className="text-xs bg-slate-100 text-slate-900 font-extrabold px-3 py-1 rounded-md ml-3">Outstanding Multi-Gym Value</span>
                </div>
              </div>

              <p className="text-stone-605 leading-relaxed text-sm md:text-base font-sans">
                Rethink your physical capabilities and consolidate multiple bulky machines into a single structural cell with the <strong>RitFit Upgraded PPC-P3 Power Cage</strong>. Conceived and welded specifically for high-stress garage environments and premium home fitness studios, this 3-in-1 multi-gym blends a heavy weight squat cage, a functional cable dual station, and integrated dip/pull stations. Outfitted with high-durability aluminum pulleys instead of standard industry plastics, it guarantees silent performance.
              </p>

              <div className="pt-4 animate-fade-in">
                <a 
                  href="https://amzn.to/43PocLI" 
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
            Commercial-Grade 14-Gauge Steel & Smooth Gliding Cable Pulley
          </h2>
          <div className="max-w-4xl mx-auto text-slate-350 text-center space-y-6 text-sm lg:text-base leading-relaxed">
            <p>
              Standard budget garages require distinct setups for heavy lifting (like squatting) and fluid metabolic extensions (like cable flies). RitFit binds these domains beautifully. By positioning high-performance aluminum pulleys over solid steel 14-gauge framework posts, you get a buttery smooth pull with standard plate loadings.
            </p>
            <p className="text-xs text-amber-400 leading-relaxed font-sans font-bold uppercase tracking-wider">
              ★ Includes a massive 36-month steel frame coverage standard to support heavy-load benching and lifting.
            </p>
          </div>
        </div>

        {/* Detailed Spec Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-slate-950 text-slate-100 rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6 border border-slate-900">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3 text-white">
              <Sparkles className="text-amber-450 text-amber-400" /> Professional Mechanical Features
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
                <ClipboardList className="text-slate-705 text-slate-855" /> Performance Spec Sheet
              </h2>
              <div className="grid grid-cols-1 gap-y-3 font-semibold text-xs text-slate-655 font-sans">
                {specs.map((item, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-slate-50 last:border-0">
                    <span className="text-slate-400">{item.label}</span>
                    <span className="text-indigo-950 font-extrabold text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Warranty Details Card */}
            <div className="bg-amber-50/15 border border-amber-500/15 rounded-3xl p-8 outline outline-1 outline-amber-500/10 space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2 text-slate-850 font-sans">
                <ShieldCheck className="text-amber-655 text-amber-600 w-6 h-6" /> Manufacturer Support & Warranties
              </h2>
              <div className="space-y-3 text-stone-705 text-xs font-semibold font-sans">
                <p className="flex items-center gap-2">
                  <span className="text-amber-600 font-extrabold text-sm">✔</span>
                  <span><strong>36-Month Warranty</strong> on high-tensile main steel chassis frame</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-amber-600 font-extrabold text-sm">✔</span>
                  <span><strong>12-Month Warranty</strong> on accessories, cables, pull-down attachments & handles</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-amber-600 font-extrabold text-sm">✔</span>
                  <span>Complete installation hardware, detailed video manual, and setups provided</span>
                </p>
              </div>
            </div>

            {/* Quick Athletes highlights */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2 text-slate-850">
                <Heart className="text-rose-500 fill-rose-500 w-5 h-5" /> Athlete Endorsements
              </h2>
              <div className="grid grid-cols-1 gap-y-2 text-slate-705 text-xs font-semibold font-sans">
                {valueHighlights.map((rate, idx) => (
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
          <div className="bg-emerald-50/20 border border-emerald-505 border-emerald-500/15 p-8 rounded-3xl space-y-4 shadow-sm">
            <h3 className="text-emerald-900 font-black text-xl flex items-center gap-2">
              👍 Pros & Strengths
            </h3>
            <ul className="space-y-2.5 text-stone-705 text-sm">
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Unbelievable 3-in-1 multi-gym design maximizes workouts with small room footprint</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Heavy 14-gauge structural physical tube composition supports massive loads</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Smooth upgraded aluminum pulleys reduce mechanical cable friction</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800 animate-fade-in text-sans">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Built-in weight storage pegs stabilize cage frame and optimize room efficiency</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Excellent 36-month frame protection from factory ensures serious lift safety</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50/25 border border-amber-500/15 p-8 rounded-3xl space-y-4 shadow-sm">
            <h3 className="text-amber-900 font-black text-xl flex items-center gap-2">
              ⚠️ Considerations
            </h3>
            <ul className="space-y-2.5 text-stone-705 text-sm">
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-amber-600 font-bold shrink-0">●</span>
                <span>Requires complete physical assembly which takes most lifters 1.5 - 3 hours to arrange</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800 font-sans">
                <span className="text-amber-600 font-bold shrink-0">●</span>
                <span>Requires an Olympic or standard barbell which must be acquired separately</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800 font-sans">
                <span className="text-amber-600 font-bold shrink-0">●</span>
                <span>Arrives shipped across multiple cargo boxes due to massive 14-gauge steel loads</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Ideal Lifting Routines */}
        <div className="bg-slate-950/5 border border-slate-900/10 rounded-[2rem] p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2 justify-center font-sans tracking-tight">
            <Activity className="text-amber-600 animate-pulse" /> Optimal Training Protocols
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center text-sm font-sans">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-between shadow-xs">
              <div>
                <p className="font-extrabold text-amber-700 text-base mb-2"> Squats & Heavy Benching</p>
                <p className="text-stone-605 leading-relaxed text-xs">Utilize the ultra-stable 14-gauge columns and adjust hooks to bench press or back squat securely. Perfect for solo lifters.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-between shadow-xs">
              <div>
                <p className="font-extrabold text-amber-700 text-base mb-2">🧬 Lat Pulldowns & Low Rows</p>
                <p className="text-stone-605 leading-relaxed text-xs">Slide standard plates into the cable station slide, attaching pull down handles. Enjoy silent, buttery aluminum pull rotations.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-between shadow-xs">
              <div>
                <p className="font-extrabold text-amber-700 text-base mb-2">🧘 Functional Cable Warmups</p>
                <p className="text-stone-605 leading-relaxed text-xs">Set handles low to perform direct lateral shoulder raises, bicep curls, or hip extension cable stretches with precise resistance profiles.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Orthopedic Safety Disclaimer Box */}
        <div className="bg-slate-100 rounded-3xl p-6 border border-slate-200 shadow-xs max-w-4xl mx-auto mb-12">
          <h3 className="text-slate-850 font-bold mb-2 flex items-center gap-2 text-xs uppercase tracking-wide">
            <Info className="w-4 h-4 text-slate-650" /> Biomechanical Sourcing & Safety Disclaimer
          </h3>
          <p className="text-slate-505 text-xs font-sans leading-relaxed">
            Ensure that you anchor structural components and latch the pulley guide cables completely prior to execution. Always place the safety pins flat within horizontal columns to support heavy drops. We strongly recommend setting up cage machines on flat, sound-dampening rubber flooring. Consult physical coaches prior to executing high-weight training protocols.
          </p>
        </div>

        {/* Final CTA Container */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-150 shadow-lg text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-950 mb-4 tracking-tight">
            Build Your Dream Professional Gym Station at Home Today
          </h2>
          <p className="text-stone-655 max-w-2xl mx-auto leading-relaxed text-md font-sans mb-8">
            The RitFit Upgraded PPC-P3 Power Cage blends professional 3-in-1 multi-gym mechanics, high structural 1,000 lbs security, silent aircraft aluminum cable glide tracks, and a detailed 3-year factory warranty. Take control of your home strength conditioning.
          </p>
          <a 
            href="https://amzn.to/43PocLI" 
            target="_blank" 
            rel="nofollow sponsored noopener" 
            className="inline-flex bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-center px-12 py-4 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all gap-2 text-md"
          >
            <ShoppingCart className="w-5 h-5 text-white" /> Get the PPC-P3 Cage on Amazon
          </a>
        </div>

      </div>
    </motion.div>
  );
}
