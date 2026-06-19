import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Award, Heart, Sparkles, Activity, Info, ClipboardList, RefreshCw, Grid, HelpCircle, Check } from 'lucide-react';

export default function OceanfoamFoamRollerReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2025/11/Oceanfoam-Sweet-Spot-Medium-Exercise-Foam-Roller-1422x5.522-%E2%80%93-Medium-Density-Foam-Roller-for-Physical-Therapy-1.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Oceanfoam-Sweet-Spot-Medium-Exercise-Foam-Roller-1422x5.522-%E2%80%93-Medium-Density-Foam-Roller-for-Physical-Therapy-2.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Oceanfoam-Sweet-Spot-Medium-Exercise-Foam-Roller-1422x5.522-%E2%80%93-Medium-Density-Foam-Roller-for-Physical-Therapy-3.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Oceanfoam-Sweet-Spot-Medium-Exercise-Foam-Roller-1422x5.522-%E2%80%93-Medium-Density-Foam-Roller-for-Physical-Therapy-4.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Dimensions', value: '14 × 5.5 × 5.5 inches' },
    { label: 'Density Rating', value: 'Medium Density (Balanced Cushion/Press)' },
    { label: 'Design Profile', value: 'Sweet Spot Wave-Sculpted Contours' },
    { label: 'Therapeutic Targets', value: 'Back, Hips, Shoulders, Calves, Hamstrings, Glutes & Quads' },
    { label: 'Material Composition', value: 'Eco-Guard Heavy-Duty Closed-Cell Foam' },
    { label: 'Best Suited For', value: 'Recovery, Rehab, Yoga, Posture Correction' },
    { label: 'Cleanliness Protocol', value: 'Wipeable & Sweat-Resistant Barrier' },
    { label: 'Primary Brand Scribe', value: 'Oceanfoam' }
  ];

  const features = [
    {
      title: '🌊 Scientifically Calibrated Medium Density',
      desc: 'Provides the precise physiological balancing point: firm enough to trigger stubborn myofascial release, yet sufficiently cushioned to bypass bone bruising.'
    },
    {
      title: '💆 Signature Wave-Sculpted Contour Design',
      desc: 'The unique geometric curves cradle muscular skeletal shapes, dispersing rolling weight evenly to safeguard sensitive spinal processes and tailbone points.'
    },
    {
      title: '🏥 Certified Rehabilitation Companion',
      desc: 'Highly recommended by clinical mobility coaches and physical therapy centers to carefully restore blood flow, flush toxic lactic layers, and align connective wraps.'
    },
    {
      title: '🧘 Adaptive Yoga & pilates Integration',
      desc: 'A magnificent postural extension for support blocks, abdominal stability workouts, decompression back bending, and peaceful physical cooldowns.'
    },
    {
      title: '💎 Ultra-Resilient Structural Shape Lock',
      desc: 'Formulated with dense, premium closed-cell polymers that aggressively resist sinkage, edge-fraying, or oval distortion under daily heavy-weight regimes.'
    },
    {
      title: '👜 Compact Lightweight Grab & Go Size',
      desc: 'At exactly 14 inches long, it fits effortlessly inside standard backpacks, duffel bags, or carry-ons, keeping therapy accessible during long commutes.'
    }
  ];

  const highlights = [
    'Ideal therapeutic middle ground that avoids pain spikes during trigger sessions',
    'Significantly releases spinal pressure and lower back stiffness overnight',
    'Boosts arterial blood microcirculation for enhanced recovery timelines',
    'Constructed from high-grade, ecological materials free of heavy chemical odors',
    'Excellent non-skid surface traction locks to yoga mats and wood floors',
    'Perfect for beginners, seniors, and elite lifters recovering from deep injuries'
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-stone-50 min-h-screen text-slate-900 font-sans pb-32"
    >
      {/* Top Banner */}
      <div className="bg-slate-950 text-white text-center py-3 text-xs font-black px-4 tracking-wider shadow-md uppercase">
        ⚡ COMFORT DRIVEN RECOVERY: Oceanfoam Sweet Spot Medium Exercise Roller. Balance Meets Muscle Relief. Secure Amazon Link.
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
                  alt="Oceanfoam Sweet Spot Medium Exercise Foam Roller" 
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-slate-950 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider shadow-sm flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" /> MOBILITY CONTROL
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-slate-50 p-1 transition-all ${activeImg === img ? 'border-amber-600 shadow-md' : 'border-transparent opacity-75 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Oceanfoam Thumbnail ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-slate-200">
                  <Award className="w-3.5 h-3.5 text-slate-950" /> Optimal Density Core
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-950 tracking-tight font-sans">
                Oceanfoam Sweet Spot <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-950 text-2xl md:text-3.5xl font-black block mt-1">Medium Exercise Foam Roller</span>
              </h1>
              <p className="text-stone-605 font-semibold text-sm font-sans px-0.5">Versatile 14″ × 5.5″ Sculpted Therapy Cylinder for Balanced Tissue Releases & Posture Rehab</p>
              
              <div className="flex items-center gap-3 font-sans">
                <div className="flex text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 text-slate-200" />
                  <Star className="w-5 h-5 text-slate-200" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">3.00 Rating (1 Certified Athlete Review)</span>
              </div>

              <div className="py-2 border-y border-stone-100 font-sans">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-rose-600">$48.00</span>
                  <span className="text-xs bg-slate-100 text-slate-900 font-extrabold px-3 py-1 rounded-md ml-3">Contour Sweet Spot Tech</span>
                </div>
              </div>

              <p className="text-stone-605 leading-relaxed text-sm md:text-base font-sans">
                Ignite your physical therapy recovery and restore optimal skeletal alignment using the uniquely balanced <strong>Oceanfoam Sweet Spot Medium Exercise Foam Roller</strong>. Calibrated explicitly to meet the dynamic demands of sensitive lats, stiff backs, and tight hamstrings, this 14″ × 5.5″ roller delivers a harmonious hybrid load. Engineered from proprietary high-density closed-cell polymers, it delivers deep tissue myofascial release without inducing tissue trauma.
              </p>

              <div className="pt-4 font-sans">
                <a 
                  href="https://amzn.to/4o92kUY" 
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

        {/* Dynamic Structural integrity Description Panel */}
        <div className="bg-slate-950 text-slate-100 rounded-[2rem] p-8 md:p-12 border border-slate-900 shadow-xl mb-12 font-sans">
          <h2 className="text-3xl font-extrabold text-white text-center mb-6 tracking-tight">
            The Physics of Myofascial Release: Medium Density Advantage
          </h2>
          <div className="max-w-4xl mx-auto text-slate-350 text-center space-y-6 text-sm lg:text-base leading-relaxed">
            <p>
              Traditional rock-hard foam rollers act with primitive blunt impact force, often triggering strong defensive muscular contraction that prevents deep tissue release. On the other hand, soft pool-noodle rollers lack the structural strength to shift tough knots. Oceanfoam occupies the perfect "Sweet Spot." By blending highly responsive internal cell polymers, it deforms precisely under physical body contours to stretch out stiff sheaths of fascia without locking the muscle into a protective spasm.
            </p>
            <p className="text-xs text-amber-400 leading-relaxed font-sans font-bold uppercase tracking-wider">
              ★ IDEAL FOR BEGINNERS, AGING ADULTS, PHYSICAL REHABILITATION, AND POST-HIIT SPINE DECOMPRESSION.
            </p>
          </div>
        </div>

        {/* Detailed Spec Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-slate-950 text-slate-100 rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6 border border-slate-900">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3 text-white font-sans">
              <Sparkles className="text-amber-455 text-amber-450 text-amber-400 font-sans" /> Pure Mobility Integrations
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
                <ClipboardList className="text-slate-700 font-sans" /> Supplemental Engineering Specs
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

            {/* Why Users Love It Box */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-4 font-sans">
              <h2 className="text-xl font-bold flex items-center gap-2 text-slate-850">
                <Heart className="text-rose-500 fill-rose-500 w-5 h-5 font-sans" /> Clinical Experience Points
              </h2>
              <div className="grid grid-cols-1 gap-y-2 text-slate-705 text-xs font-semibold font-sans">
                {highlights.map((rate, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-slate-50/50 p-2.5 rounded-xl border border-slate-100">
                    <span className="text-amber-600 font-black shrink-0 font-sans">✔</span>
                    <span>{rate}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Ideal Mobility Zones */}
        <div className="bg-white rounded-[2rem] p-8 border border-slate-150 mb-12 font-sans shadow-sm">
          <h2 className="text-2xl font-bold text-slate-950 mb-6 flex items-center gap-2 tracking-tight justify-center">
            🧘 Target Rehabilitation Practices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="p-5 bg-stone-50 rounded-2xl border border-slate-100 text-center">
              <div className="text-2xl mb-2">🌿</div>
              <h4 className="font-bold text-neutral-950 text-sm mb-1">Beginner Friendly</h4>
              <p className="text-neutral-500 text-xs text-stone-550">Allows comfortable spinal decompression without extreme pain barrier spikes.</p>
            </div>
            <div className="p-5 bg-stone-50 rounded-2xl border border-slate-100 text-center">
              <div className="text-2xl mb-2">🩹</div>
              <h4 className="font-bold text-neutral-950 text-sm mb-1">Injury Rehab</h4>
              <p className="text-neutral-500 text-xs text-stone-550">Gently increases microvascular exchange to speed up overall tissue recovery.</p>
            </div>
            <div className="p-5 bg-stone-50 rounded-2xl border border-slate-100 text-center">
              <div className="text-2xl mb-2">🧘</div>
              <h4 className="font-bold text-neutral-950 text-sm mb-1">Stretching Extension</h4>
              <p className="text-neutral-500 text-xs text-stone-550">An ideal postural cylinder to complement flexibility routines, Pilates, and yoga flows.</p>
            </div>
            <div className="p-5 bg-stone-50 rounded-2xl border border-slate-100 text-center">
              <div className="text-2xl mb-2">✈</div>
              <h4 className="font-bold text-neutral-950 text-sm mb-1">Frequent Commutes</h4>
              <p className="text-neutral-500 text-xs text-stone-550">The compact 14-inch layout fits neatly inside luggage to prevent stiff hotel bed spines.</p>
            </div>
            <div className="p-5 bg-stone-50 rounded-2xl border border-slate-100 text-center">
              <div className="text-2xl mb-2">👵</div>
              <h4 className="font-bold text-neutral-950 text-sm mb-1">Senior Safe</h4>
              <p className="text-neutral-500 text-xs text-stone-550">Balanced design prevents accidental rib cage strains or muscle soreness.</p>
            </div>
          </div>
        </div>

        {/* PROS & CONSIDERATIONS */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-emerald-50/20 border border-emerald-505 border-emerald-500/15 p-8 rounded-3xl space-y-4 shadow-sm">
            <h3 className="text-emerald-900 font-black text-xl flex items-center gap-2 font-sans">
              👍 Pros & Strengths
            </h3>
            <ul className="space-y-2.5 text-stone-705 text-sm font-sans font-medium">
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Calibrated medium-density yields comfortable pressure without overwhelming tissue</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Sculpted Sweet Spot contour channels align beautifully with natural spinal arcs</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Robust closed-cell foam prevents sweat moisture and bacteria absorption successfully</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800 text-slate-900">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Extremely lightweight yet holds structural circular integrity under heavy lifter loads</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Compact 14-inch frame is incredibly easy to pack, slotting neatly into gym gear</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50/25 border border-amber-500/15 p-8 rounded-3xl space-y-4 shadow-sm animate-fade-in font-sans">
            <h3 className="text-amber-900 font-black text-xl flex items-center gap-2 font-sans">
              ⚠️ Considerations
            </h3>
            <ul className="space-y-2.5 text-stone-705 text-sm font-sans font-medium text-slate-900">
              <li className="flex gap-2 items-start font-semibold text-slate-800">
                <span className="text-amber-600 font-bold shrink-0">●</span>
                <span>Extremely advanced lifters seeking hyper-aggressive bone-deep knot busting may find it slightly too soft</span>
              </li>
              <li className="flex gap-2 items-start font-semibold text-slate-800 font-sans">
                <span className="text-amber-600 font-bold shrink-0 font-bold">●</span>
                <span>The 14-inch compact size requires precise centering when performing complete broad lat rolls</span>
              </li>
              <li className="flex gap-2 items-start font-semibold text-slate-800 font-sans">
                <span className="text-amber-600 font-bold shrink-0 font-bold">●</span>
                <span>Eco-materials should be cleaned regularly with diluted alcohol to preserve clean exterior non-skid friction</span>
              </li>
            </ul>
          </div>
        </div>

        {/* FAQ Panel */}
        <div className="bg-slate-100 rounded-[2rem] p-8 md:p-12 mb-12 font-sans">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2 justify-center tracking-tight font-sans">
            ❓ Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-sm lg:text-base leading-relaxed font-sans text-left font-medium">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/50 shadow-xs">
              <p className="font-bold text-slate-900 mb-2">Q: Is Oceanfoam Sweet Spot roller too painful for a beginner?</p>
              <p className="text-stone-655 text-sm font-semibold">
                A: Not at all! The medium density polymer structure is specifically formulated to yield to pressure dynamically. It avoids the intense bruising sensation of rigid hollow-plastic drums while still yielding deep, effective myofascial decompression.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/50 shadow-xs">
              <p className="font-bold text-slate-900 mb-2">Q: Can I use this specific contour roller for acute lower back pain?</p>
              <p className="text-stone-655 text-sm font-semibold">
                A: Yes — the wave-sculpted indentation channels offer safe relief. However, when working on the lower spine, please keep your cores braced and consult with your physiotherapist to avoid direct hip hyper-extension stresses.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/50 shadow-xs">
              <p className="font-bold text-slate-900 mb-2">Q: Will this foam roller flatten out or deform over months of heavy use?</p>
              <p className="text-stone-655 text-sm font-semibold">
                A: No — unlike cheap open-cell packing foams, Oceanfoam is crafted from commercial-grade closed-cell polymers. This ensures it immediately bounces back to its wave-sculpted contours, maintaining circular rigidity for years.
              </p>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-150 mb-12 font-sans shadow-xs">
          <h2 className="text-2xl font-black text-slate-950 mb-8 border-b pb-4 tracking-tight">
            Certified Customer Reviews (1 Review)
          </h2>
          <div className="space-y-6">
            <div className="border border-slate-100 p-6 rounded-2xl bg-slate-50/50">
              <div className="flex text-amber-400 gap-1 mb-2">
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 text-slate-200" />
                <Star className="w-4 h-4 text-slate-200" />
              </div>
              <p className="text-slate-900 font-bold mb-1">Balanced, gentle pressure after HIIT squats</p>
              <p className="text-slate-655 text-xs font-semibold">"Superb recovery tool! The medium thickness is fantastic for rolling my lats and tight quads after gym workouts. Excellent build material, it doesn't leave aggressive marks or cause agonizing pain compared to my older solid grid roller. It is a lovely investment."</p>
            </div>
          </div>
        </div>

        {/* Safety Disclaimer Box */}
        <div className="bg-slate-100 rounded-3xl p-6 border border-slate-200 shadow-xs max-w-4xl mx-auto mb-12 font-sans">
          <h3 className="text-slate-850 font-bold mb-2 flex items-center gap-2 text-xs uppercase tracking-wide">
            <Info className="w-4 h-4 text-slate-650" /> Safe Mobility Practices Note
          </h3>
          <p className="text-slate-505 text-xs font-sans leading-relaxed">
            Avoid rolling directly over soft stomach abdominal walls, raw fractures, or active bone joints to prevent structural stresses. Keep pacing controlled and smooth, utilizing deep breathing sequences to fully activate parasympathetic muscle compliance. If you manage chronic bulging discs, spinal subluxations, or cardiovascular varicose conditions, seek dedicated clearance from your physical doctor before applying localized deep tissue rolling. These annotations have not been assessed by the FDA; Oceanfoam Sweet Spot rollers carry no direct systemic curing claims.
          </p>
        </div>

        {/* Final CTA Container */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-150 shadow-lg text-center max-w-4xl mx-auto font-sans">
          <h2 className="text-3xl font-extrabold text-slate-950 mb-4 tracking-tight">
            Flush Stiff Knots & Reclaim Soft Posture Comfort Now
          </h2>
          <p className="text-stone-655 max-w-2xl mx-auto leading-relaxed text-md font-sans mb-8">
            The Oceanfoam Sweet Spot represents the supreme middle ground in myofascial sports science, integrating wave contoured curves with balanced closed-cell density.
          </p>
          <a 
            href="https://amzn.to/4o92kUY" 
            target="_blank" 
            rel="nofollow sponsored noopener" 
            className="inline-flex bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-850 text-white font-bold text-center px-12 py-4 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all gap-2 text-md"
          >
            <ShoppingCart className="w-5 h-5 text-white" /> Get Oceanfoam Roller on Amazon
          </a>
        </div>

      </div>
    </motion.div>
  );
}
