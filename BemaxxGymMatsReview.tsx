import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Award, Heart, Sparkles, Activity, Info, ClipboardList, Layers, Grid } from 'lucide-react';

export default function BemaxxGymMatsReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2025/11/bemaxx-Gym-Mats-Set-18-pcs-EVA-Interlocking-Foam-Floor-Tiles-12.622x12.622x0.422-18sqft-Protective-Gym-Flooring-1.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/bemaxx-Gym-Mats-Set-18-pcs-EVA-Interlocking-Foam-Floor-Tiles-12.622x12.622x0.422-18sqft-Protective-Gym-Flooring-3.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/bemaxx-Gym-Mats-Set-18-pcs-EVA-Interlocking-Foam-Floor-Tiles-12.622x12.622x0.422-18sqft-Protective-Gym-Flooring-4.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/bemaxx-Gym-Mats-Set-18-pcs-EVA-Interlocking-Foam-Floor-Tiles-12.622x12.622x0.422-18sqft-Protective-Gym-Flooring-5.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Core Material Composition', value: 'High-Density Premium EVA Solid Foam' },
    { label: 'Set Tile Quantity', value: '18 Interlocking Pieces + Full Border Edges' },
    { label: 'Individual Tile Sizing', value: '12.6" × 12.6" × 0.4"' },
    { label: 'Total Thickness Support', value: '0.4 Inches (10mm Thick Cushioning)' },
    { label: 'Total Area Floor Coverage', value: 'Approximately 18 sq ft (Square Feet)' },
    { label: 'Surface Texture & Friction', value: 'Non-slip Textured Grip Pattern' },
    { label: 'Moisture Resistance Standard', value: '100% Water-Resistant & Easy Wipe Care' }
  ];

  const features = [
    {
      title: '🧩 Highly Versatile Interlocking Design',
      desc: 'Precision puzzle tooth die cutting ensures a perfectly snug, gap-free fit. Rapid puzzle-piece assembly installs completely tool-free and glue-free within minutes.'
    },
    {
      title: '🛡️ 10mm High-Density Impact Protection',
      desc: 'Protects expensive premium home floors (hardwood, vinyl, engineered cork, tiles or cold garages) from dropping heavy steel dumbells or kettlebells.'
    },
    {
      title: '🔇 Premium Noise & Vibration Absorption',
      desc: 'Substantially deadens extreme kinetic weight-drop sound decibels and absorbs major machine motor vibration cycles from treadmills, spin bikes, or steppers.'
    },
    {
      title: '💦 Easy Wipe Down Water-Resistant Texture',
      desc: 'Highly impermeable material structure forces moisture and sweat to bead right up on the deck. Allows effortless, sanitized standard soap-and-water cleanup.'
    },
    {
      title: '👣 Soft Joint-Cushioning Ergonomics',
      desc: 'Dense physical closed-cell structure creates a highly supportive springy deck, vastly reducing stress on your bare feet, knees, pelvis, and elbows.'
    },
    {
      title: '📐 Removable Border Edging Included',
      desc: 'Comes fully packed with matching straight-cut border edge strips to yield sleek, continuous, professional-grade straight outer margins.'
    }
  ];

  const valuesHighlight = [
    'Provides highly supportive, shock-absorbing joint cushioning',
    'Perfect floor defense system standard for home and cold garage fitness setups',
    'Modular expandability enables you to buy multiple packs to cover larger rooms',
    'Excellent textured grip avoids dangerous foot slips during sweat-heavy aerobic workouts',
    'Extremely light weight lets you easily pack, move, and stow pieces quickly',
    'Maintains high surface aesthetic integration with clean, neutral styling'
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-neutral-50/10 min-h-screen text-slate-900 font-sans pb-32"
    >
      {/* Promo Bar Banner */}
      <div className="bg-slate-900 text-slate-100 text-center py-3 text-xs font-black px-4 tracking-wider shadow-md uppercase">
        🧩 MODULAR GYM FLOORING: Bemaxx 18-Piece Foam Puzzle Floor Tiles. Protected Sourced Route to Amazon.
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
                  alt="Bemaxx Gym Floor Protective Mats" 
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-slate-900 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider shadow-sm">
                  SHOCK-ABSORBING EVA
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-stone-50 p-1 transition-all ${activeImg === img ? 'border-slate-800 shadow-md' : 'border-transparent opacity-75 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Bemaxx Mats Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-slate-200">
                  <Award className="w-3.5 h-3.5 text-slate-900" /> High-Density Cushion
                </span>
                <span className="bg-green-100 text-green-850 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-950 tracking-tight font-sans">
                Bemaxx Gym Mats Set <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 text-2xl md:text-3.5xl font-black block mt-1">18 pcs EVA Interlocking Tiles</span>
              </h1>
              <p className="text-stone-600 font-semibold text-sm">Protective Home Gym & Garage Flooring (approx. 18 sq ft Coverage)</p>
              
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
                  <span className="text-3xl font-black text-rose-600">$32.99</span>
                  <span className="text-sm text-stone-400 line-through ml-2">$34.99</span>
                  <span className="text-xs bg-slate-100 text-slate-900 font-extrabold px-2.5 py-1 rounded-md ml-3">Save $2.00 Off Amazon</span>
                </div>
              </div>

              <p className="text-stone-605 leading-relaxed text-sm md:text-base font-sans leading-relaxed">
                Transform any residential garage floor, basement concrete, or bedroom hardwood into a beautifully cushioned physical training zone with the premium <strong>Bemaxx gym mats set</strong>. Intentionally engineered with 18 high-density interlocking foam tiles, this versatile protective system absorbs impact forces and decreases noise. Perfectly complete with neat, detachable border strips to guarantee clean margins, it is standard equipment for any smart modern workout builder.
              </p>

              <div className="pt-4">
                <a 
                  href="https://amzn.to/43v7q4r" 
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

        {/* Dynamic Digestive and Micronutrient Header Panel */}
        <div className="bg-slate-950 text-slate-100 rounded-[2rem] p-8 md:p-12 border border-slate-900 shadow-xl mb-12">
          <h2 className="text-3xl font-extrabold text-white text-center mb-6 tracking-tight">
            High Density Shock Deflector & Acoustic Barrier
          </h2>
          <div className="max-w-4xl mx-auto text-slate-350 text-center space-y-6 text-sm lg:text-base leading-relaxed">
            <p>
              Under extreme loading, hard concrete can send severe feedback shockwaves up through user limbs and joint cartilage. Bemaxx protective tiles leverage advanced closed-cell physical EVA foam to disperse compression vectors horizontally instead of vertically.
            </p>
            <p className="text-xs text-amber-400 leading-relaxed font-sans font-extrabold uppercase tracking-wider">
              ★ Non-toxic, phthalates-free formula ensures a safe, premium playing surface for adult bodybuilders, yoga practitioners, and children.
            </p>
          </div>
        </div>

        {/* Detailed Spec Panels & Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-slate-950 text-slate-100 rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6 border border-slate-900 text-slate-300">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3 text-white">
              <Sparkles className="text-amber-450 text-amber-500" /> Key Floor Advantages
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
                <ClipboardList className="text-slate-705 text-slate-800" /> Physical Spec Sheet
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
                <Heart className="text-rose-500 fill-rose-500 w-5 h-5" /> Why Users Love It
              </h2>
              <div className="grid grid-cols-1 gap-y-2 text-slate-705 text-xs font-semibold font-sans">
                {valuesHighlight.map((rate, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-zinc-100">
                    <span className="text-slate-750 font-extrabold shrink-0">✔</span>
                    <span>{rate}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Pros vs. Considerations Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-emerald-50/20 border border-emerald-500/15 p-8 rounded-3xl space-y-4 shadow-sm">
            <h3 className="text-emerald-900 font-black text-xl flex items-center gap-2">
              👍 Pros & Strengths
            </h3>
            <ul className="space-y-2.5 text-zinc-705 text-sm">
              <li className="flex gap-2 items-start font-medium text-slate-800 font-sans">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Interlocking puzzle structure connects easily without mess or adhesives</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800 font-sans">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Excellent 10mm high-density EVA foam cushions joints and shields floors</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800 font-sans">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Water-resistant material structure simplifies hygiene cleanups and disinfection</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800 font-sans block">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Straight cut edge boundaries deliver professional straight outer outlines</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800 font-sans">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Modular expandability allows adding more tiles as your training space grows</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 border border-slate-300 p-8 rounded-3xl space-y-4 shadow-sm">
            <h3 className="text-slate-900 font-black text-xl flex items-center gap-2">
              ⚠️ Considerations
            </h3>
            <ul className="space-y-2.5 text-zinc-705 text-sm font-medium">
              <li className="flex gap-2 items-start font-medium text-slate-800 font-sans">
                <span className="text-slate-550 text-slate-600 font-bold shrink-0">●</span>
                <span>Intensely pointed equipment legs (like heavy racks) can leave light foam depressions</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800 font-sans">
                <span className="text-slate-550 text-slate-600 font-bold shrink-0">●</span>
                <span>Best used indoors, protected from heavy direct outdoor UV sunlight degradation</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-slate-800 font-sans">
                <span className="text-slate-550 text-slate-600 font-bold shrink-0">●</span>
                <span>Initial opening may release a harmless, brief, standard plastic foam aroma</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Installation & Maintenance Routine */}
        <div className="bg-slate-950/5 border border-slate-900/10 rounded-[2rem] p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-slate-950 mb-6 flex items-center gap-2 justify-center font-sans tracking-tight">
            <Layers className="text-slate-705 animate-pulse w-6 h-6" /> Simple Assembly & Care Routine
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-center text-sm font-sans">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-between shadow-xs">
              <div>
                <span className="bg-slate-900 text-white font-extrabold w-10 h-10 rounded-full flex items-center justify-center mx-auto text-lg mb-4">1</span>
                <h4 className="font-bold text-slate-950 text-base mb-2">Interlocking Installation</h4>
                <p className="text-stone-605 leading-relaxed text-xs">Begin laying tiles in one central corner, locking puzzle tabs together sequentially. Insert matching edge boundary strips to complete outer borders cleanly.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-between shadow-xs">
              <div>
                <span className="bg-slate-900 text-white font-extrabold w-10 h-10 rounded-full flex items-center justify-center mx-auto text-lg mb-4">2</span>
                <h4 className="font-bold text-slate-950 text-base mb-2">Sweat Wipe Down Care</h4>
                <p className="text-stone-605 leading-relaxed text-xs">Sweep off residual lint or chalk dust when needed. Use neutral soaps and clean lukewarm water to wipe down sweet patches, permitting quick air drying.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Orthopedic Safety Disclaimer Box */}
        <div className="bg-slate-100 rounded-3xl p-6 border border-slate-200 shadow-xs max-w-4xl mx-auto mb-12">
          <h3 className="text-slate-850 font-bold mb-2 flex items-center gap-2 text-xs uppercase tracking-wide">
            <Info className="w-4 h-4 text-slate-650" /> Sourcing Material Safety Disclaimer
          </h3>
          <p className="text-slate-505 text-xs font-sans leading-relaxed">
            Ensure that you place puzzle foam flooring systems onto completely flat, dust-free dry surfaces to protect against sliding. While textured high-density EVA provides brilliant protective joint buffer support, it is not optimized to withstand open fire sparks, sharp spikes, or clinical orthopedic treatments. Consult physical fitness experts for appropriate custom sports conditioning advice.
          </p>
        </div>

        {/* Final CTA Container */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-150 shadow-lg text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-950 mb-4 tracking-tight">
            Protect Your Precious Floors and Joint Matrix Today
          </h2>
          <p className="text-stone-655 max-w-2xl mx-auto leading-relaxed text-md font-sans mb-8 font-sans">
            The Bemaxx Gym Mats Set combines lightweight modular puzzles, absolute non-toxic physical structures, waterproof hygiene protections, and beautiful straight border edge lines. Cushion your workout zone.
          </p>
          <a 
            href="https://amzn.to/43v7q4r" 
            target="_blank" 
            rel="nofollow sponsored noopener" 
            className="inline-flex bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-950 hover:to-slate-900 text-white font-bold text-center px-12 py-4 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all gap-2 text-md font-sans"
          >
            <ShoppingCart className="w-5 h-5 text-white" /> Get Bemaxx Floor Tiles on Amazon
          </a>
        </div>

      </div>
    </motion.div>
  );
}
