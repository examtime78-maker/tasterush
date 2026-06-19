import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Award, Heart, Sparkles, Dumbbell, ShieldAlert, BadgeCheck, Shield, ChevronRight, HelpCircle, VolumeX, Grid, Layers, ClipboardList, Info, Check } from 'lucide-react';

export default function YuferDumbbellSetReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2026/02/Yufer-6-10-Pair-Iron-and-Rubber-Coated-Dumbbell-Set1.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/02/Yufer-6-10-Pair-Iron-and-Rubber-Coated-Dumbbell-Set2.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/02/Yufer-6-10-Pair-Iron-and-Rubber-Coated-Dumbbell-Set3.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/02/Yufer-6-10-Pair-Iron-and-Rubber-Coated-Dumbbell-Set4.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Weight Range Included', value: '5 lb to 50 lb pairs (in 5 lb increments)' },
    { label: 'Total Combined Weight', value: 'Up to 550 lbs total' },
    { label: 'Dumbbell Design Type', value: 'Hexagonal Anti-Roll Shape' },
    { label: 'Core Material Composition', value: 'High-Density Cast Iron' },
    { label: 'Exterior Protective Shell', value: 'Vantage Rubber Coating' },
    { label: 'Storage Rack Architecture', value: 'A-Frame Vertical Heavy-Duty Steel Rack' },
    { label: 'Grip Ergonomics', value: 'Contoured Textured Chrome Handles' },
    { label: 'Brand Scribe & Integrity', value: 'Yufer' }
  ];

  const features = [
    {
      title: '🎯 Ultra Space-Saving Vertical A-Frame',
      desc: 'The engineering of this vertical tower safely holds multiple pairs of dumbbells off the floor, using minimal footspace and making it excellent for tight apartments or home gyms.'
    },
    {
      title: '💎 Premium Coated Hexagonal Ends',
      desc: 'Wrapped in rugged rubber, these hexagonal ends prevent weights from rolling away mid-set and considerably mute clanging noise while cushioning your floor surfaces.'
    },
    {
      title: '✋ Perfect Contoured Ergonomic Handles',
      desc: 'The chrome-plated steel grip has a custom-engineered knurled surface that ensures a slip-free grasp, even under heavy perspiration during high-intensity circuits.'
    },
    {
      title: '🔥 Complete Progression Range (5 to 50 lbs)',
      desc: 'Supplying a multi-tiered package from 5 lbs up to 50 lbs in matching pairs, this system accommodates light tone-up routines, core stabilization work, or heavy presses.'
    }
  ];

  const highlights = [
    'Excellent floor protection that absorbs and reduces dropping shock and noise',
    'Perfect hex design facilitates renegade rows, pushups, and multi-plane compound movements',
    'Heavy-duty commercial-grade thick steel vertical rack won\'t wobble or tip over',
    'Corrosion-resistant contoured chrome handles provide consistent tactical grip comfort',
    'Ships securely in multiple packages to prevent transit damage or box ruptures',
    'Ideal gym centerpiece for both high-grade strength sets and lightweight aerobic conditioning'
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-neutral-50 min-h-screen text-stone-900 font-sans pb-32"
    >
      {/* Top Banner */}
      <div className="bg-stone-950 text-white text-center py-3 text-xs font-black px-4 tracking-wider shadow-md uppercase">
        🏋️ HEAVY DUTY FITNESS: Yufer Premium Dumbbell Set & Vertical Organizer Tower. Ultimate Home Strength System.
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-12">
        <Link to="/" className="inline-flex items-center text-stone-500 hover:text-stone-950 transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Review Hub
        </Link>

        {/* Product Showcase Container */}
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-neutral-200/50 mb-12">
          <div className="grid md:grid-cols-2 gap-12 p-8 md:p-12 items-start">
            
            {/* Gallery Section */}
            <div className="space-y-6">
              <div className="bg-stone-50 rounded-3xl p-6 flex items-center justify-center border border-neutral-100 aspect-square overflow-hidden relative">
                <img 
                  src={activeImg} 
                  className="max-h-full max-w-full object-contain rounded-2xl duration-300 transition-all hover:scale-105" 
                  alt="Yufer Dumbbell Set with Vertical Rack" 
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-stone-950 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider shadow-sm flex items-center gap-1.5">
                  <Dumbbell className="w-3.5 h-3.5 text-amber-500" /> STRENGTH ENGINE
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-stone-50 p-1 transition-all ${activeImg === img ? 'border-amber-600 shadow-md' : 'border-transparent opacity-75 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Yufer Dumbbell Set Thumbnail ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-indigo-50 text-indigo-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-indigo-100">
                  <Grid className="w-3.5 h-3.5 text-indigo-700" /> Space Saver Vertical Solution
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4.5xl font-extrabold leading-tight text-stone-950 tracking-tight font-sans">
                Yufer 6–10 Pair Iron <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-stone-900 text-2xl md:text-3xl font-black block mt-1">and Rubber Coated Dumbbell Set</span>
              </h1>
              <p className="text-stone-500 font-semibold text-sm">Contoured Knurled Grips, Odor-Resistant Coating, and a Heavy Duty A-Frame Storage Rack</p>
              
              <div className="flex items-center gap-3 font-sans">
                <div className="flex text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-500" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-500" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-500" />
                  <Star className="w-5 h-5 text-stone-200" />
                  <Star className="w-5 h-5 text-stone-200" />
                </div>
                <span className="text-stone-500 text-sm font-semibold">3.00 Based on 1 Certified Owner Review</span>
              </div>

              <div className="py-2 border-y border-stone-100 font-sans">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-rose-600">$529.99</span>
                  <span className="text-xs bg-stone-100 text-stone-600 font-extrabold px-3 py-1 rounded-md ml-3">Complete 550 lb Structural Pack</span>
                </div>
              </div>

              <p className="text-stone-605 leading-relaxed text-sm md:text-base font-sans">
                Turn any compact room into a professional personal training environment. The <strong>Yufer 6–10 Pair Rubber Coated Dumbbell Set</strong> provides complete fixed weight flexibility ranging from <strong>5 lb to 50 lb pairs</strong> nested smartly inside an ultra-stable, space saving vertical tower rack. Built from heavy-duty cast iron and enveloped in impact-absorbing vulcanized rubber, these weights are shaped in an anti-rolling hex design to promote exercises like pushups, renegade rows, and compound floor routines.
              </p>

              <div className="pt-4 font-sans">
                <a 
                  href="https://amzn.to/43jXN8M" 
                  target="_blank" 
                  rel="nofollow sponsored noopener" 
                  className="bg-gradient-to-r from-[#ff9900] to-[#ffb84d] hover:from-[#e68a00] hover:to-[#e6a540] text-slate-950 font-bold text-center px-10 py-5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all inline-flex items-center justify-center gap-2 text-lg w-full md:w-auto"
                >
                  <ShoppingCart className="w-5 h-5 text-slate-950" /> Buy on Amazon
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Space Efficiency Architecture Panel */}
        <div className="bg-stone-950 text-stone-150 rounded-[2rem] p-8 md:p-12 border border-stone-900 shadow-xl mb-12 font-sans">
          <h2 className="text-3xl font-extrabold text-white text-center mb-6 tracking-tight">
            Vertical Storage: Organising Your Power Efficiently
          </h2>
          <div className="max-w-4xl mx-auto text-stone-300 text-center space-y-6 text-sm lg:text-base leading-relaxed">
            <p>
              Traditional dumbbell systems use horizontal racks that devour precious horizontal square feet in your living spaces or home garage. Yufer utilizes an advanced, high-gauge upright structure that channels structural stress downward, preserving vast room space while keeping raw power cleanly within reach. This heavy-duty frame features custom protective contact shields on every side to protect handle plating and prevent direct steel scratching.
            </p>
            <p className="text-xs text-amber-400 leading-relaxed font-sans font-bold uppercase tracking-wider">
              ★ MAX VERTICAL LOAD CAPACITY SAFETY RATINGS: TESTED UP TO 550 LBS WITHOUT STRUCTURAL TORSION.
            </p>
          </div>
        </div>

        {/* Detailed Spec Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-stone-950 text-stone-105 rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6 border border-stone-900">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-stone-800 pb-3 text-white font-sans">
              <Sparkles className="text-amber-450 text-amber-500 font-sans" /> Pure Utility Features
            </h2>
            <ul className="space-y-4 font-sans">
              {features.map((feat, index) => (
                <li key={index} className="flex gap-3">
                  <div className="bg-stone-900 p-2.5 text-amber-500 shrink-0 font-bold leading-none h-10 w-10 flex items-center justify-center rounded-lg border border-stone-850">✓</div>
                  <div>
                    <h4 className="font-bold text-white text-base-md font-sans">{feat.title}</h4>
                    <p className="text-stone-400 text-xs mt-0.5 leading-relaxed font-sans font-medium">{feat.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            {/* Technical Specifications */}
            <div className="bg-white rounded-3xl p-8 border border-neutral-200/50 shadow-sm font-sans">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-stone-950">
                <ClipboardList className="text-stone-800 font-sans" /> Commercial Specifications
              </h2>
              <div className="grid grid-cols-1 gap-y-3 font-semibold text-xs text-stone-605 font-sans">
                {specs.map((item, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-stone-100 last:border-0">
                    <span className="text-stone-400">{item.label}</span>
                    <span className="text-stone-950 font-extrabold text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Highlights Box */}
            <div className="bg-white rounded-3xl p-8 border border-neutral-200/50 shadow-sm space-y-4 font-sans">
              <h2 className="text-xl font-bold flex items-center gap-2 text-stone-950 col-span-2">
                <Heart className="text-rose-500 fill-rose-500 w-5 h-5 font-sans" /> Ergonomic Safeguards
              </h2>
              <div className="grid grid-cols-1 gap-y-2 text-stone-705 text-xs font-semibold font-sans">
                {highlights.map((rate, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                    <span className="text-emerald-600 font-black shrink-0 font-sans">✔</span>
                    <span>{rate}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Best Use Cases Grid */}
        <div className="bg-white rounded-[2rem] p-8 border border-neutral-200/50 shadow-sm mb-12 font-sans">
          <h2 className="text-2xl font-bold text-stone-950 mb-6 flex items-center gap-2 tracking-tight justify-center">
            🏠 Ideal Workout Scenarios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-100 text-center">
              <div className="text-2xl mb-2">🏢</div>
              <h4 className="font-bold text-stone-950 text-sm mb-1">Apartments & Lofts</h4>
              <p className="text-stone-500 text-xs">Vertical tower takes isolated floor area without cluttering walking lanes.</p>
            </div>
            <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-100 text-center">
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="font-bold text-stone-950 text-sm mb-1">Progressive Lifters</h4>
              <p className="text-stone-500 text-xs">A comprehensive range for clean increment jumps and system overload training.</p>
            </div>
            <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-100 text-center">
              <div className="text-2xl mb-2">🔄</div>
              <h4 className="font-bold text-stone-950 text-sm mb-1">Functional Fitness</h4>
              <p className="text-stone-500 text-xs">Hex ends provide solid platform support for floor pushups and core rows.</p>
            </div>
            <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-100 text-center">
              <div className="text-2xl mb-2">🤐</div>
              <h4 className="font-bold text-stone-950 text-sm mb-1">Noise Reduction</h4>
              <p className="text-stone-500 text-xs">Rubberized coatings reduce standard metal clanging sounds for family/pals.</p>
            </div>
            <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-100 text-center">
              <div className="text-2xl mb-2">💪</div>
              <h4 className="font-bold text-stone-950 text-sm mb-1">Target Training</h4>
              <p className="text-stone-500 text-xs">Ergonomics and weight variety suit chest curls, raises, and lunges cleanly.</p>
            </div>
          </div>
        </div>

        {/* PROS & CONSIDERATIONS */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 font-sans">
          <div className="bg-emerald-50/20 border border-emerald-500/15 p-8 rounded-3xl space-y-4 shadow-sm">
            <h3 className="text-emerald-900 font-black text-xl flex items-center gap-2 font-sans">
              👍 Pros & Strengths
            </h3>
            <ul className="space-y-2.5 text-stone-750 text-sm font-sans">
              <li className="flex gap-2 items-start font-medium text-stone-850">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>The upright vertical rack significantly optimizes home floor real estate</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-stone-850">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Hexagonal weight end design offers exceptional structural safety and stops rolling</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-stone-850">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Premium thick rubber dampens shock, protects subfloors, and lowers impact sound</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-stone-850">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Chrome contour knurling yields an outstanding comfortable, robust, slip-free grasp</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-stone-850">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Comprehensive physical load incrementation allows fine adjustments to your routine</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50/25 border border-amber-500/15 p-8 rounded-3xl space-y-4 shadow-sm font-sans">
            <h3 className="text-amber-900 font-black text-xl flex items-center gap-2 font-sans">
              ⚠️ Considerations
            </h3>
            <ul className="space-y-2.5 text-stone-750 text-sm font-sans">
              <li className="flex gap-2 items-start font-medium text-stone-850">
                <span className="text-amber-600 font-bold shrink-0 font-bold">●</span>
                <span>Upright heavy-duty vertical rack assembly requires approximately 20 to 30 minutes of setup</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-stone-850 font-sans font-medium">
                <span className="text-amber-600 font-bold shrink-0 font-bold">●</span>
                <span>Vulcanized coating emits a mild protective rubber scent Initially (highly recommended to air out)</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-stone-850 font-sans font-medium">
                <span className="text-amber-600 font-bold shrink-0 font-bold">●</span>
                <span>Super heavy lifter sets might eventually require additional custom weights exceeding 50 lbs</span>
              </li>
            </ul>
          </div>
        </div>

        {/* FAQ Panel */}
        <div className="bg-stone-100 rounded-[2rem] p-8 md:p-12 mb-12 font-sans">
          <h2 className="text-2xl font-bold text-stone-900 mb-8 flex items-center gap-2 justify-center tracking-tight font-sans">
            ❓ Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-sm lg:text-base leading-relaxed font-sans text-left">
            <div className="bg-white p-6 rounded-2xl border border-neutral-200/50 shadow-xs">
              <p className="font-bold text-stone-900 mb-2">Q: Does the package include all weight groups from 5 lbs up to 50 lbs?</p>
              <p className="text-stone-605 text-sm">
                A: Yes — the fully structured shipment delivers a comprehensive set of weights in 5-lb incremental pairs (5, 10, 15, 20, 25, 30, 35, 40, 45, and 50 lb sets) alongside the primary vertical organizer rack.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-neutral-200/50 shadow-xs">
              <p className="font-bold text-stone-900 mb-2">Q: How robust is the vertical steel rack during full load capacity?</p>
              <p className="text-stone-605 text-sm">
                A: It is exceptionally rugged. Constructed from commercial-grade thick-walled industrial steel, the vertical A-frame base spreads structural gravity downward to prevent any tipping or dynamic wobbles when hosting over 500 lbs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-neutral-200/50 shadow-xs">
              <p className="font-bold text-stone-900 mb-2">Q: How do you eliminate the initial rubber odor?</p>
              <p className="text-stone-605 text-sm">
                A: Because the dumbbells use vulcanized safety rubber to cover the deep cast-iron core, they carry a standard initial new-rubber scent. Wiping them down with diluted dish wash liquid and placing them in a well-ventilated space or garage for 24-48 hours breaks down this factory protective coating, dissipating the odor rapidly.
              </p>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-neutral-200/50 mb-12 font-sans shadow-xs">
          <h2 className="text-2xl font-black text-stone-950 mb-8 border-b pb-4 tracking-tight">
            Certified Customer Reviews (1 Review)
          </h2>
          <div className="space-y-6">
            <div className="border border-neutral-100 p-6 rounded-2xl bg-stone-50/50 font-sans">
              <div className="flex text-amber-400 gap-1 mb-2">
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 text-stone-200" />
                <Star className="w-4 h-4 text-stone-200" />
              </div>
              <p className="text-stone-900 font-bold mb-1">Splendid weight variety, setup takes focus</p>
              <p className="text-stone-600 text-sm">"Extremely solid gym setup and superb space-saving layout. The textured grip chrome knurling feels highly professional in the palms. Putting the vertical rack towers together takes about 25 minutes and requires a wrench, but everything is incredibly sturdy once complete."</p>
            </div>
          </div>
        </div>

        {/* Safety Disclaimer Box */}
        <div className="bg-stone-100 rounded-3xl p-6 border border-neutral-200 shadow-xs max-w-4xl mx-auto mb-12 font-sans">
          <h3 className="text-stone-850 font-bold mb-2 flex items-center gap-2 text-xs uppercase tracking-wide">
            <Info className="w-4 h-4 text-stone-600" /> Safe Training Practices Note
          </h3>
          <p className="text-stone-500 text-xs font-sans leading-relaxed">
            Always implement proper spinal and pelvic bracing mechanics when deadlifting, squatting, or lifting heavy weights from the storage rack. Keep children and household pets clear from the training zones. Ensure all rack joining hardware is checked and firmly fastened weekly. Do not drop dumbbells onto thin wood laminates or tile flooring. The Yufer brand recommends consultation with certified physical trainers prior to performing new fitness regimens.
          </p>
        </div>

        {/* Final CTA Container */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-neutral-200 shadow-lg text-center max-w-4xl mx-auto font-sans">
          <h2 className="text-3xl font-extrabold text-stone-950 mb-4 tracking-tight">
            Elevate Your Home Strength Progression To Commercial Standards
          </h2>
          <p className="text-stone-605 max-w-2xl mx-auto leading-relaxed text-md font-sans mb-8">
            Stop letting bulky fitness products clutter your floor space. Own the perfect, extremely durable, and compact vertical dumbbell layout from Yufer and reach your personal training goals.
          </p>
          <a 
            href="https://amzn.to/43jXN8M" 
            target="_blank" 
            rel="nofollow sponsored noopener" 
            className="inline-flex bg-gradient-to-r from-stone-900 to-stone-850 hover:from-stone-950 hover:to-neutral-900 text-white font-bold text-center px-12 py-4 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all gap-2 text-md"
          >
            <Dumbbell className="w-5 h-5 text-white" /> Get Yufer Dumbbell Set on Amazon
          </a>
        </div>

      </div>
    </motion.div>
  );
}
