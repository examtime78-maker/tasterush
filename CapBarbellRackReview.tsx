import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Award, Heart, Sparkles, Activity, Info, ClipboardList, Shield } from 'lucide-react';

export default function CapBarbellRackReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2025/11/CAP-Barbell-Power-Racks-and-Attachments1.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/CAP-Barbell-Power-Racks-and-Attachments2.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/CAP-Barbell-Power-Racks-and-Attachments3.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Frame Material Composition', value: 'High-Tensile Heavy-Gauge 11 & 12 Gauge Steel' },
    { label: 'Weight Limit Capacity', value: '500 – 1,500 lbs (highly dependent on model)' },
    { label: 'Exterior Protective Finish', value: 'Double-Layer Scratch-Resistant Powder Coating' },
    { label: 'Physical Footprint', value: 'Compact Floor Space Optimization' },
    { label: 'Built-in Plate Organization', value: 'Olympic Plate Storage Horns (up to 300 lbs)' },
    { label: 'Compatible Attachments', value: 'LAT pulldowns, dip posts, landmines, handles' },
    { label: 'Safety Accessories Included', value: 'Padded Adjustable J-Cups & Safety Catches' }
  ];

  const features = [
    {
      title: '🏗️ Structural 11 & 12-Gauge Steel Frame',
      desc: 'Formed from premium grade structural industrial steel tubes with an electrostatic powder finish to defend against rust, scrapes, and heavy impact wear.'
    },
    {
      title: '🎯 Infinite Attachment Scaling Potential',
      desc: 'Engineered with standardized punch-hole alignment columns. Instantly accepts secondary add-ons like landmines, dip handles, or lat pulley modules.'
    },
    {
      title: '🛡️ Padded Adjustable J-Cups & Catches',
      desc: 'Equipped with heavy-duty safety blocks designed to preserve bar knurling while ensuring a safe lifting baseline during solo barbell training cycles.'
    },
    {
      title: '🧗 Overhead Multi-Grip Pull-Up Frame',
      desc: 'Sturdy upper-bound crossmember acts as a highly structural chinning arch, optimizing hand angles for pull-ups, hanging leg raises, and tactical grip holds.'
    },
    {
      title: '🔌 Integrated Rear Weight Stabilization',
      desc: 'Includes dual heavy rear Olympic weight posts holding up to 300 lbs. Stores bumper plates neatly while serving as a heavy baseline anchor.'
    },
    {
      title: '👣 Soft Floor-Protecting Rubber Feet',
      desc: 'Pioneered with heavy non-slip elastomer ground buffer pads to protect home gym flooring while preventing the rack from walking during dynamic bands work.'
    }
  ];

  const highlights = [
    'Tremendous financial efficiency: perfect entry-level professional rack setup',
    'Backed by over 30 years of elite CAP Barbell strength testing and industry legacy',
    'Highly expandable design scale lets you add heavy lifting modules over time',
    'Compact, lower height profile fits comfortably in low-ceiling garages or basements',
    'Excellent upright stability when loaded with standard storage weight plates',
    'Super fast assembly using clearly marked, high-precision industrial machine bolts'
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-stone-50 min-h-screen text-slate-900 font-sans pb-32"
    >
      {/* Top Banner */}
      <div className="bg-slate-950 text-white text-center py-3 text-xs font-black px-4 tracking-wider shadow-md uppercase">
        🏋️ BUILD YOUR FOUNDATION: CAP Barbell Heavy-Gauge Strength Architecture. Direct Affiliate Link to Amazon.
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
                  alt="CAP Barbell Power Racks with Attachments" 
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-slate-900 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider shadow-sm">
                  HEAVY-DUTY STEEL
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-slate-50 p-1 transition-all ${activeImg === img ? 'border-amber-600 shadow-md' : 'border-transparent opacity-75 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`CAP Rack Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-slate-200">
                  <Award className="w-3.5 h-3.5 text-slate-950" /> Expandable Strength Setup
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-950 tracking-tight font-sans">
                CAP Barbell <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-900 text-2xl md:text-3.5xl font-black block mt-1">Power Rack & Attachments</span>
              </h1>
              <p className="text-stone-605 font-semibold text-sm">Industrial 11-12 Gauge Steel Frame, Modular Attachment Options & Multi-Grip Chin Bar</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-slate-200 text-slate-200" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">4.0 (1 Certified Muscle-Lifting Review)</span>
              </div>

              <div className="py-2 border-y border-stone-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-rose-600">$119.99</span>
                  <span className="text-xs bg-slate-100 text-slate-900 font-extrabold px-3 py-1 rounded-md ml-3">Superb Entry-Level Value</span>
                </div>
              </div>

              <p className="text-stone-605 leading-relaxed text-sm md:text-base font-sans">
                Build a versatile, space-efficient, and rock-solid training space on a smart budget with the <strong>CAP Barbell Power Racks and Attachments Series</strong>. Purposefully engineered to serve as the structural anchor of home fitness studios, cellars, or garage cages, this heavy-gauge steel framework provides outstanding safety on squats, bench presses, and hanging bodyweight drills. Designed to expand as your strength grows, it is compatible with full attachment systems such as lat pulleys, dips, and landmines.
              </p>

              <div className="pt-4">
                <a 
                  href="https://amzn.to/4uew2t5" 
                  target="_blank" 
                  rel="nofollow sponsored noopener" 
                  className="bg-gradient-to-r from-[#ff9900] to-[#ffb84d] hover:from-[#e68a00] hover:to-[#e6a540] text-slate-950 font-bold text-center px-10 py-5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-lg"
                >
                  <ShoppingCart className="w-5 h-5 text-slate-950" /> Buy on Amazon
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Dynamic Panel */}
        <div className="bg-slate-950 text-slate-100 rounded-[2rem] p-8 md:p-12 border border-slate-900 shadow-xl mb-12">
          <h2 className="text-3xl font-extrabold text-white text-center mb-6 tracking-tight">
            Heavy-Duty 11 & 12-Gauge Modular Architecture
          </h2>
          <div className="max-w-4xl mx-auto text-slate-350 text-center space-y-6 text-sm lg:text-base leading-relaxed">
            <p>
              Many residential workout racks save production costs by thinning the chassis steel to 16-gauge tubing. This compromises structural rigidity and can lead to dangerous bending during heavy lift sessions. CAP Barbell upholds professional safety margins by utilizing dense, heavy-caliber 11-12 gauge steel tubes with robust mechanical fastening plates.
            </p>
            <p className="text-xs text-amber-400 leading-relaxed font-sans font-bold uppercase tracking-wider">
              ★ Integrated Olympic weight horns hold up to 300 lbs of heavy bumper plates to naturally stabilize the physical cage.
            </p>
          </div>
        </div>

        {/* Detailed Spec Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-slate-950 text-slate-100 rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6 border border-slate-900">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3 text-white">
              <Sparkles className="text-amber-450 text-amber-400" /> Key Engineering Benefits
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
                {highlights.map((rate, idx) => (
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
                <span>Unbelievable price point represents the highest value-for-money rack layout</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Highly reliable 11-12 gauge steel columns assure absolute structural protection</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Universal compatibility with standard post accessories and pullup grips</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Non-slip base stabilizer feet keep bedroom or garage floors safe and secure</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Compact workspace footing footprint is optimized for tight residential cell areas</span>
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
                <span>Total weight limits vary from 500 up to 1,500 lbs based on model customization chosen</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800 font-sans">
                <span className="text-amber-600 font-bold shrink-0">●</span>
                <span>Best stabilized by using plates on integration holders to balance the upright columns</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800 font-sans">
                <span className="text-amber-600 font-bold shrink-0">●</span>
                <span>Advanced functional accessories such as lat pulleys or cable cages are sold separately</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Targeted Training Demographics */}
        <div className="bg-slate-950/5 border border-slate-900/10 rounded-[2rem] p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2 justify-center font-sans tracking-tight">
            <Activity className="text-amber-600 animate-pulse" /> Optimal Routine Customizations
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center text-sm font-sans">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-between shadow-xs">
              <div>
                <p className="font-extrabold text-amber-700 text-base mb-2">💪 Entry-Level Strength Builder</p>
                <p className="text-stone-605 leading-relaxed text-xs">A perfect entry point to perform heavy squats and flat benchpresses safely. Highly scalable with accessories as you get stronger.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-between shadow-xs">
              <div>
                <p className="font-extrabold text-amber-700 text-base mb-2">🥋 Bodyweight & Calisthenics</p>
                <p className="text-stone-605 leading-relaxed text-xs">Execute pull-ups, hanging leg raises, and bands routines perfectly using the structural overhead crossbar system.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-between shadow-xs">
              <div>
                <p className="font-extrabold text-amber-700 text-base mb-2">📐 Tight Garage Fitness</p>
                <p className="text-stone-605 leading-relaxed text-xs">Maximize the efficiency of your flooring zone. Keep standard weights packed neatly on the rear storage pegs.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Biomechanical Sourcing Box */}
        <div className="bg-slate-100 rounded-3xl p-6 border border-slate-200 shadow-xs max-w-4xl mx-auto mb-12">
          <h3 className="text-slate-850 font-bold mb-2 flex items-center gap-2 text-xs uppercase tracking-wide">
            <Info className="w-4 h-4 text-slate-650" /> Biomechanical Sourcing & Safety Disclaimer
          </h3>
          <p className="text-slate-505 text-xs font-sans leading-relaxed">
            Always make sure the machinery hooks and catches are completely inserted into the frame hole configurations prior to placing heavily loaded barbells on the upright posts. Do not load plates beyond the recommended model rating limit. Use elastic heavy rubber platforms to protect your physical flooring sublayer and provide optimum orthopedic vibration dampening.
          </p>
        </div>

        {/* Final CTA Container */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-150 shadow-lg text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-950 mb-4 tracking-tight">
            Build Your Perfect Strength Blueprint Today
          </h2>
          <p className="text-stone-655 max-w-2xl mx-auto leading-relaxed text-md font-sans mb-8">
            The modular CAP Barbell Power Rack provides reliable 11-12 gauge structural steel uprights, non-slip base feet, built-in plate tidy loops, a heavy-grip chin arch, and compatibility with elite training accessories.
          </p>
          <a 
            href="https://amzn.to/4uew2t5" 
            target="_blank" 
            rel="nofollow sponsored noopener" 
            className="inline-flex bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-center px-12 py-4 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all gap-2 text-md"
          >
            <ShoppingCart className="w-5 h-5 text-white" /> Get CAP Barbell Rack on Amazon
          </a>
        </div>

      </div>
    </motion.div>
  );
}
