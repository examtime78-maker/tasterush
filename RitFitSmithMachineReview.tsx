import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Award, Heart, Sparkles, Activity, Info, ClipboardList, Dumbbell, Grid, AlertTriangle, Check, ShieldCheck, Hammer, HelpCircle } from 'lucide-react';

export default function RitFitSmithMachineReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2025/11/RitFit-Smith-Machine-Power-Cage-with-LAT-Pulldown-Cable-Crossover-All-in-One-Power-Rack-Home-Gym-System1.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/RitFit-Smith-Machine-Power-Cage-with-LAT-Pulldown-Cable-Crossover-All-in-One-Power-Rack-Home-Gym-System3.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/RitFit-Smith-Machine-Power-Cage-with-LAT-Pulldown-Cable-Crossover-All-in-One-Power-Rack-Home-Gym-System4.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/RitFit-Smith-Machine-Power-Cage-with-LAT-Pulldown-Cable-Crossover-All-in-One-Power-Rack-Home-Gym-System5-100x100.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Structural Steel Gauge', value: '11-Gauge Heavy-Duty Steel Core' },
    { label: 'Weight Capacity Limit', value: 'Up to 1000 lbs (Structural Strength)' },
    { label: 'Multi-Training Systems', value: 'Smith Machine, Dual Cable Crossover, Power Rack, LAT Pulldown' },
    { label: 'Guide Bearings', value: 'Commercial Grade Sealed Linear Bearings' },
    { label: 'Cabling Infrastructure', value: 'Nylon-Coated Aircraft-Grade Performance Cables' },
    { label: 'Physical Dimensions', value: 'Requires substantial floor & overhead clearing' },
    { label: 'Accessories Packaging', value: 'Multi-Grip Bar, Landmine Adaptor, J-Hooks, Safety Arms' },
    { label: 'Manufacturer Scribe', value: 'RitFit (M1 Pro Series)' },
    { label: 'Structural Warranty', value: '3-Year Frame Cover & 1-Year Accessory Support' }
  ];

  const features = [
    {
      title: '🏋️ Guided Smith Bar System',
      desc: 'An ultra-safe guided path using dual commercial linear bearings. Excellent for solo lifters to bench press, squat, and shoulder press safely without a live spotter.'
    },
    {
      title: '🛡 Industrial 11-Gauge Steel Skeleton',
      desc: 'Forged from premier thick-walled 11-gauge commercial alloy tubing supporting massive barbell weights up to 1000 lbs with zero dynamic sway.'
    },
    {
      title: '🔄 Dual Adjustable Cable Crossover',
      desc: 'A plate-loaded double pulley framework that scales vertically, empowering you to perform custom standing cable flys, single arm curls, extensions, and core rotations.'
    },
    {
      title: '🎯 High Lat Pulldown & Low Row Center',
      desc: 'Contains dedicated low and high pulling stations to develop vast lats, upper back thickness, and functional rowing extensions effortlessly.'
    },
    {
      title: '🚀 Complete Landmine & Bodyweight Station',
      desc: 'Outfitted with an multidirectional landmine adaptor, multi-grip overhead chinning points, and customizable safety spotter pins for versatile training styles.'
    },
    {
      title: '🧱 Built-In Olympic Plate Storage',
      desc: 'Saves your space from clutter with strategic heavy plate holding pegs integrated directly on the back corners, acting as natural stabilizers.'
    }
  ];

  const highlights = [
    'A genuine powerhouse combination that merges five commercial systems in one room',
    'Guiles linear steel rails make Squatting and Pressing exceptionally safe',
    'Heavy-gauge frame delivers superior durability and commercial style aesthetics',
    'Aircraft-grade cables transmit weights smoothly when aligned correctly',
    'Comprehensive active package includes standard accessories, pull bars, and landmine',
    'Unbeatable value compared to buying individual crossover, smith, and rack systems'
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-stone-50 min-h-screen text-slate-900 font-sans pb-32"
    >
      {/* Top Banner */}
      <div className="bg-slate-950 text-white text-center py-3 text-xs font-black px-4 tracking-wider shadow-md uppercase">
        🏋️ ALL-IN-ONE HYBRID GYM: RitFit M1 Pro Smith Machine & Cable Crossover. Five-in-One Professional Power Core.
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
                  alt="RitFit Smith Machine Power Cage" 
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-slate-950 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider shadow-sm flex items-center gap-1.5">
                  <Dumbbell className="w-3.5 h-3.5 text-amber-500" /> HYBRID POWER RACK
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-slate-50 p-1 transition-all ${activeImg === img ? 'border-amber-600 shadow-md' : 'border-transparent opacity-75 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`RitFit Thumbnail ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-rose-50 text-rose-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-rose-100">
                  <Activity className="w-3.5 h-3.5 text-rose-700" /> Professional 5-In-1 Core
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-950 tracking-tight font-sans">
                RitFit Smith Machine <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-950 text-2xl md:text-3.5xl font-black block mt-1 font-sans">Power Cage & Crossover</span>
              </h1>
              <p className="text-stone-605 font-semibold text-sm font-sans px-0.5">Commercial 11-Gauge Heavy-Duty Steel Frame with Guided Smith Bar, High/Low Pulley, and Back Lat Center</p>
              
              <div className="flex items-center gap-3 font-sans">
                <div className="flex text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 text-slate-200" />
                  <Star className="w-5 h-5 text-slate-200" />
                  <Star className="w-5 h-5 text-slate-200" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">2.13 Rating (8 Certified Owner Reviews)</span>
              </div>

              <div className="py-2 border-y border-stone-100 font-sans">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-rose-600">$3,199.99</span>
                  <span className="text-xs bg-slate-100 text-slate-900 font-extrabold px-3 py-1 rounded-md ml-3">Structural 11-Gauge Build</span>
                </div>
              </div>

              <p className="text-stone-605 leading-relaxed text-sm md:text-base font-sans">
                Consolidate your entire fitness checklist into one high-performance, monumental piece of training equipment. The <strong>RitFit Smith Machine Power Cage with LAT Pulldown & Cable Crossover</strong> merges a highly stable guided bench bar system, independent sliding high-low pulleys, manual safety spotters, and lat rowing tools into one master hub. Forged from thick-walled 11-gauge steel to easily lock down heavy 1000 lb exercises.
              </p>

              <div className="pt-4 font-sans">
                <a 
                  href="https://amzn.to/4olE1n6" 
                  target="_blank" 
                  rel="nofollow sponsored noopener" 
                  className="bg-gradient-to-r from-[#ff9900] to-[#ffb84d] hover:from-[#e68a00] hover:to-[#e6a540] text-slate-950 font-bold text-center px-10 py-5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-lg animate-pulse"
                >
                  <ShoppingCart className="w-5 h-5 text-slate-950" /> Buy on Amazon
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Analytical Break Down of the 2.13 Customer rating */}
        <div className="bg-amber-50 border border-amber-200 rounded-[2rem] p-8 md:p-12 mb-12 font-sans relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 text-amber-100 opacity-20 pointer-events-none transform translate-x-8 -translate-y-8">
            <AlertTriangle className="w-full h-full" />
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-amber-950 mb-6 flex items-center gap-2 tracking-tight">
            <AlertTriangle className="text-amber-700 shrink-0" /> Analytical Critical Overview: Why the 2.13 out of 5 Rating?
          </h2>
          <div className="space-y-6 text-sm md:text-base leading-relaxed text-amber-900 font-medium">
            <p>
              With a high-ticket price of **$3,199.99**, expectations from home gym owners are incredibly high. An analysis of customer reviews highlights three main roadblocks that resulted in the average **2.13 out of 5** rating:
            </p>
            <div className="grid md:grid-cols-3 gap-6 pt-4 text-xs font-sans text-stone-900 leading-normal">
              <div className="bg-white p-5 rounded-2xl border border-amber-250 shadow-sm space-y-2">
                <h4 className="font-extrabold text-amber-950 text-sm flex items-center gap-1.5">
                  <Hammer className="w-4 h-4 text-amber-700 shrink-0" /> 1. Extremely Tedious Assembly
                </h4>
                <p className="text-stone-605">
                  The multiple crates, thousands of hardware nuts, bolts, and cable routes require <strong>6 to 10 hours</strong> of complex positioning. Instructions are sparse, leaving buyers highly frustrated.
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-amber-250 shadow-sm space-y-2">
                <h4 className="font-extrabold text-amber-950 text-sm flex items-center gap-1.5">
                  <Dumbbell className="w-4 h-4 text-amber-700 shrink-0" /> 2. Plate-Loaded Slide Friction
                </h4>
                <p className="text-stone-605">
                  Instead of commercial solid weights, it relies on sliding plate storage brackets. If the vertical columns are slightly uneven or lack adequate lubricant, the slide can feel sticky.
                </p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-amber-250 shadow-sm space-y-2">
                <h4 className="font-extrabold text-amber-950 text-sm flex items-center gap-1.5">
                  <Grid className="w-4 h-4 text-amber-700 shrink-0" /> 3. Huge Spatial Demand
                </h4>
                <p className="text-stone-605">
                  Many users miscalculated their room overhead bounds. The overhead pulleys and wide Smith barbell require massive clearances, leading to return or installation failures.
                </p>
              </div>
            </div>
            <p className="text-xs font-bold text-amber-800 uppercase tracking-widest pt-2">
              👉 VERDICT: A masterfully versatile gym core IF you survive the assembly and frequently grease the linear rods.
            </p>
          </div>
        </div>

        {/* Detailed Spec Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-slate-950 text-slate-100 rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6 border border-slate-900">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3 text-white font-sans">
              <Sparkles className="text-amber-400 font-sans" /> Home Trainer Master Features
            </h2>
            <ul className="space-y-4 font-sans font-medium">
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
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm font-sans">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-855">
                <ClipboardList className="text-slate-750 font-sans" /> Engineering & Capacity Specs
              </h2>
              <div className="grid grid-cols-1 gap-y-3 font-semibold text-xs text-slate-655 font-sans">
                {specs.map((item, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-slate-50 last:border-0">
                    <span className="text-slate-400 font-semibold">{item.label}</span>
                    <span className="text-slate-950 font-extrabold text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Advantages Box */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-4 font-sans">
              <h2 className="text-xl font-bold flex items-center gap-2 text-slate-850">
                <Heart className="text-rose-505 text-rose-500 fill-rose-500 w-5 h-5 font-sans" /> Ideal Training Possibilities
              </h2>
              <div className="grid grid-cols-1 gap-y-2 text-slate-705 text-xs font-semibold font-sans">
                {highlights.map((rate, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-slate-50/50 p-2.5 rounded-xl border border-slate-100">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-900 font-black shrink-0 font-sans">✔</span>
                    <span>{rate}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Exercise Chart */}
        <div className="bg-white rounded-[2rem] p-8 border border-slate-150 mb-12 font-sans shadow-sm">
          <h2 className="text-2xl font-bold text-slate-950 mb-6 flex items-center gap-2 tracking-tight justify-center">
            🏋️ Dynamic Multi-System Exercise Matrix
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="p-5 bg-stone-50 rounded-2xl border border-slate-100">
              <div className="text-3xl mb-2">🛑</div>
              <h4 className="font-extrabold text-neutral-950 text-sm mb-1.5 border-b pb-1">Smith Machine</h4>
              <p className="text-neutral-500 text-xs text-stone-550 leading-relaxed font-semibold">Guided Squats, Bench Press, Lunge Extensions, Shoulder Shrugs.</p>
            </div>
            <div className="p-5 bg-stone-50 rounded-2xl border border-slate-100">
              <div className="text-3xl mb-2">🧬</div>
              <h4 className="font-extrabold text-neutral-950 text-sm mb-1.5 border-b pb-1">Cable Crossover</h4>
              <p className="text-neutral-500 text-xs text-stone-550 leading-relaxed font-semibold">Chest Flys, Single Arm Curls, Pushdowns, Standing Extensions.</p>
            </div>
            <div className="p-5 bg-stone-50 rounded-2xl border border-slate-100">
              <div className="text-3xl mb-2">🌴</div>
              <h4 className="font-extrabold text-neutral-950 text-sm mb-1.5 border-b pb-1">Lat Pulldowns</h4>
              <p className="text-neutral-500 text-xs text-stone-550 leading-relaxed font-semibold">Underhand Lat Pools, Low Seated Rows, Straight Arm Pressdowns.</p>
            </div>
            <div className="p-5 bg-stone-50 rounded-2xl border border-slate-100">
              <div className="text-3xl mb-2">🪵</div>
              <h4 className="font-extrabold text-neutral-950 text-sm mb-1.5 border-b pb-1">Landmine & Body</h4>
              <p className="text-neutral-500 text-xs text-stone-550 leading-relaxed font-semibold">T-Bar Rows, Shoulder Landmine Presses, Multi-grip Pull-ups.</p>
            </div>
          </div>
        </div>

        {/* PROS & CONSIDERATIONS */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-emerald-50/20 border border-emerald-500/15 p-8 rounded-3xl space-y-4 shadow-sm">
            <h3 className="text-emerald-900 font-black text-xl flex items-center gap-2 font-sans">
              👍 Pros & Strengths
            </h3>
            <ul className="space-y-2.5 text-stone-705 text-sm font-sans font-medium text-stone-900">
              <li className="flex gap-2 items-start font-semibold text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Unrivaled structural integration replaces 5 complex standalone machines</span>
              </li>
              <li className="flex gap-2 items-start font-semibold text-slate-800 font-sans">
                <span className="text-emerald-600 font-bold shrink-0 font-bold">✔</span>
                <span>Guided Smith bar path renders solo high-load bench presses completely safe</span>
              </li>
              <li className="flex gap-2 items-start font-semibold text-slate-800 font-sans">
                <span className="text-emerald-600 font-bold shrink-0 font-bold">✔</span>
                <span>Premium 11-gauge thick steel tubes build a lifetime home-gym anchor</span>
              </li>
              <li className="flex gap-2 items-start font-semibold text-slate-800 font-sans">
                <span className="text-emerald-600 font-bold shrink-0 font-bold">✔</span>
                <span>Highly fluid aircraft-rated cables survive thousands of pulley workouts</span>
              </li>
              <li className="flex gap-2 items-start font-semibold text-slate-800 font-sans">
                <span className="text-emerald-600 font-bold shrink-0 font-bold">✔</span>
                <span>Comes with a direct 3-year warranty covering the primary steel frame</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50/25 border border-amber-500/15 p-8 rounded-3xl space-y-4 shadow-sm animate-fade-in font-sans">
            <h3 className="text-amber-900 font-black text-xl flex items-center gap-2 font-sans">
              ⚠️ Considerations & Cruxes
            </h3>
            <ul className="space-y-2.5 text-stone-705 text-sm font-sans font-medium text-slate-900">
              <li className="flex gap-2 items-start font-semibold text-slate-800">
                <span className="text-amber-600 font-bold shrink-0">●</span>
                <span>Extremely difficult assembly demands 6-10 hours, space, and a helper</span>
              </li>
              <li className="flex gap-2 items-start font-semibold text-slate-800 font-sans">
                <span className="text-amber-700 font-bold shrink-0 font-bold">●</span>
                <span>Slide tubes must be heavily greased frequently to prevent slide friction noise</span>
              </li>
              <li className="flex gap-2 items-start font-semibold text-slate-800 font-sans">
                <span className="text-amber-700 font-bold shrink-0 font-bold">●</span>
                <span>Premium $3,199.99 ticket represents a major physical commitment</span>
              </li>
              <li className="flex gap-2 items-start font-semibold text-slate-800 font-sans">
                <span className="text-amber-700 font-bold shrink-0 font-bold">●</span>
                <span>Olympic plate weights are not included natively and must be added separately</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Practical Setup & Safety Protocol */}
        <div className="bg-sky-50/50 rounded-[2rem] p-8 md:p-12 mb-12 border border-sky-150">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2 justify-center font-sans tracking-tight">
            <ShieldCheck className="text-sky-700 font-sans" /> Absolute Structural Safety & Alignment Protocol
          </h2>
          <div className="max-w-4xl mx-auto text-slate-705 space-y-6 text-sm lg:text-base leading-relaxed text-center font-sans font-medium">
            <p className="font-bold text-sky-950 font-sans">
              🔧 ALIGNMENT RULE: Ensure all cross beams are perfectly level using an industrial bubble tool BEFORE locking final bolts down. Uneven rails cause structural frame skewing and drag the linear bearings.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-xs font-bold uppercase text-sky-900 font-sans">
              <div className="bg-white p-4 rounded-xl border border-sky-100 shadow-xs flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" /> Liberally treat sliding guide rods with synthetic silicone grease every month.
              </div>
              <div className="bg-white p-4 rounded-xl border border-sky-100 shadow-xs flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" /> Tighten all pulley wheel hardware after the initial 3 workout hours.
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-slate-100 rounded-[2rem] p-8 md:p-12 mb-12 font-sans">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2 justify-center tracking-tight font-sans">
            ❓ Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-sm lg:text-base leading-relaxed font-sans text-left font-medium">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/50 shadow-xs">
              <p className="font-bold text-slate-900 mb-2">Q: Why did this machine score a 2.13 out of 5 customer rating?</p>
              <p className="text-stone-655 text-sm font-semibold">
                A: The low average is caused almost entirely by the complex delivery process and frustration during the lengthy 8-hour assembly. Once fully finished, properly aligned and lubricated, the actual workout performance is highly praised by garage gym users.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/50 shadow-xs">
              <p className="font-bold text-slate-900 mb-2">Q: Does the system include weight plates or barbells out of the box?</p>
              <p className="text-stone-655 text-sm font-semibold">
                A: No — weight plates and stand alone olympic barbells are sold separately. The guided Smith Bar, double cable pulleys, lat attachments, pulling bars, safety hooks, and accessory bars are fully included in the core shipment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/50 shadow-xs">
              <p className="font-bold text-slate-900 mb-2">Q: What ceiling height is required to comfortably store and use the system?</p>
              <p className="text-stone-655 text-sm font-semibold">
                A: We recommend an absolute minimum ceiling height of **85 inches** (approx. 7.1 feet), with 90 inches preferred to comfortably stand on top plate stations and easily execute high-grip chin ups.
              </p>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-150 mb-12 font-sans shadow-xs">
          <h2 className="text-2xl font-black text-slate-950 mb-8 border-b pb-4 tracking-tight">
            Certified Customer Reviews (2 out of 8 reviews displayed)
          </h2>
          <div className="space-y-6">
            <div className="border border-slate-100 p-6 rounded-2xl bg-slate-50/50">
              <div className="flex text-amber-400 gap-1 mb-2">
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 text-slate-200" />
                <Star className="w-4 h-4 text-slate-200" />
                <Star className="w-4 h-4 text-slate-200" />
              </div>
              <p className="text-slate-900 font-bold mb-1">Incredible machine, but assembly is an absolute nightmare</p>
              <p className="text-slate-655 text-xs font-semibold leading-relaxed">
                "Let me start by saying the M1 Pro is extremely stable. Frame-wise, the 11-gauge steel is beautiful and holds heavy weight squating. But please, set aside multiple days for assembly. It is packaged in several heavy boxes with hundreds of bolts and terrible instructions. Highly advise hiring professional assembly service or grabbing a very patient friend."
              </p>
            </div>
            <div className="border border-slate-100 p-6 rounded-2xl bg-slate-50/50">
              <div className="flex text-amber-400 gap-1 mb-2">
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 text-slate-200" />
                <Star className="w-4 h-4 text-slate-200" />
                <Star className="w-4 h-4 text-slate-200" />
                <Star className="w-4 h-4 text-slate-200" />
              </div>
              <p className="text-slate-900 font-bold mb-1">Linear slide gets sticky unless greased constantly</p>
              <p className="text-slate-655 text-xs font-semibold leading-relaxed">
                "Honestly quite disappointed for over three grand. While the cable layout and Smith functions have high versatility, the sliding weight sleeves are tricky. If your floor or columns are even 1 degree off-level, there is sticky sliding drag. Ensure you lubricate the rails with silicone daily to make it feel smooth. It works, but expects constant maintenance."
              </p>
            </div>
          </div>
        </div>

        {/* Safety Disclaimer Box */}
        <div className="bg-slate-100 rounded-3xl p-6 border border-slate-200 shadow-xs max-w-4xl mx-auto mb-12 font-sans">
          <h3 className="text-slate-850 font-bold mb-2 flex items-center gap-2 text-xs uppercase tracking-wide">
            <Info className="w-4 h-4 text-slate-650" /> Chemical & Physical Stress Disclosures
          </h3>
          <p className="text-slate-505 text-xs font-sans leading-relaxed">
            Ensure all safety spotters and guided hook points are tightly anchored before testing heavy raw lifting loads on the guided Smith Bar. The nylon-covered aircraft cables will require modular tension checks over physical workout months to ensure zero slack under high pulley flys. Consult professional athletic coaches to prevent back subluxations during compound lifts. These statements have not been evaluated by therapeutic doctors; RitFit products carry zero clinical medical curing claims.
          </p>
        </div>

        {/* Final CTA Container */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-150 shadow-lg text-center max-w-4xl mx-auto font-sans">
          <h2 className="text-3xl font-extrabold text-slate-950 mb-4 tracking-tight">
            Build the Supreme Professional Garage Gym Today
          </h2>
          <p className="text-stone-655 max-w-2xl mx-auto leading-relaxed text-md font-sans mb-8">
            Why spend thousands on commercial memberships? Bring the ultimate combination of squat rack, guided smith, cable crossovers, and lat pulls straight onto your home floor.
          </p>
          <a 
            href="https://amzn.to/4olE1n6" 
            target="_blank" 
            rel="nofollow sponsored noopener" 
            className="inline-flex bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-850 text-white font-bold text-center px-12 py-4 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all gap-2 text-md"
          >
            <ShoppingCart className="w-5 h-5 text-white" /> Get RitFit Smith Machine on Amazon
          </a>
        </div>

      </div>
    </motion.div>
  );
}
