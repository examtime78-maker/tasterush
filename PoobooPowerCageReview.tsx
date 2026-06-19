import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Award, Heart, Sparkles, Activity, Info, ClipboardList, Dumbbell, Grid, AlertTriangle, Check } from 'lucide-react';

export default function PoobooPowerCageReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2026/01/Pooboo-Multi-Functional-Machine-Power-Cage1.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/01/Pooboo-Multi-Functional-Machine-Power-Cage2.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/01/Pooboo-Multi-Functional-Machine-Power-Cage3.jpg',
    'https://gymusastore.com/wp-content/uploads/2026/01/Pooboo-Multi-Functional-Machine-Power-Cage4.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Weight Capacity Rating', value: '2000 lbs (Structural Limit)' },
    { label: 'Frame Construction', value: 'Heavy-Duty Industrial Alloy Steel' },
    { label: 'Dimensions (Footprint)', value: 'Approx. 43.3″ D × 62.9″ W × 82.6″ H' },
    { label: 'Pulley System', value: 'Dual Pulley Crossover (Plate-Loaded)' },
    { label: 'Barbell Compatibility', value: '7ft Standard or Olympic Barbell' },
    { label: 'Plate Storage Pins', value: 'Multiple Integrated Standard Pins' },
    { label: 'Included Attachments', value: 'Lat Bar, Low Row, Landmine, J-Hooks, Dip Bars' },
    { label: 'Brand Scribe', value: 'Pooboo' }
  ];

  const features = [
    {
      title: '🛡 Heavy-Duty 2000 lb Load Rating',
      desc: 'Forged from industrial alloy steel tubing to handle extreme barbell loads during squads, bench presses, and heavy shrugs with total safety confidence.'
    },
    {
      title: '🎯 Dual Pulley Cable Crossover System',
      desc: 'Allows isolated upper and lower body movements, including cable crossovers, lat pulldowns, seated cable rows, tricep pushdowns, and dynamic cable flys.'
    },
    {
      title: '🔄 Landmine Attachment & Rowing Plate',
      desc: 'Increases dynamic rotational workout range including landmine row adapters, shoulder presses, and a dedicated non-slip footplate for heavy cable rowing.'
    },
    {
      title: '💪 Multipurpose Chin-Up & Dip Stations',
      desc: 'Features rubber-coated non-slip grip pull-up bars and easily adjustable heavy-gauge safety dip handles to target raw bodyweight back and arm progression.'
    },
    {
      title: '🧱 Replaces Multiple Gym Standalones',
      desc: 'Space-saving footprint consolidates a high-end commercial cable crossover, squat cage, pulldown rack, and manual bodyweight station into one core center.'
    },
    {
      title: '📦 Maximum Attachment Arsenal Included',
      desc: 'Shipment is heavily loaded with adjustable safety spotter arms, thick safety J-hooks, lat bar accessories, a low-row handle, and dedicated resistance band pegs.'
    }
  ];

  const highlights = [
    'Highly versatile all-in-one design replaces thousands of dollars in separate gear',
    'Massive 2000 lb structural capacity supports lifters from beginner to elite levels',
    'Built-in plate storage horns help organize the home gym space cleanly',
    'Excellent combination of safe heavy power rack locks and fluid cables',
    'Extremely rugged structural look enhances private garage or commercial ambiance',
    'Comes complete with comprehensive accessories so you can train immediately'
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-stone-50 min-h-screen text-slate-900 font-sans pb-32"
    >
      {/* Top Banner */}
      <div className="bg-slate-950 text-white text-center py-3 text-xs font-black px-4 tracking-wider shadow-md uppercase">
        🏋️ ALL-IN-ONE POWER HOUSE: Pooboo 2000LB Heavy-Duty Machine Cage. Multi-Pulley versatility. Save on Space.
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
                  alt="Pooboo Multi-Functional Machine Power Cage" 
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-slate-950 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider shadow-sm flex items-center gap-1.5">
                  <Dumbbell className="w-3.5 h-3.5 text-blue-400" /> HEAVY DUTY 2000 LBS
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-slate-50 p-1 transition-all ${activeImg === img ? 'border-amber-600 shadow-md' : 'border-transparent opacity-75 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Pooboo Cage Thumbnail ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-amber-200">
                  <Award className="w-3.5 h-3.5 text-amber-900" /> Multi-Station Core
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-950 tracking-tight font-sans">
                Pooboo Multi-Functional <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-950 text-2xl md:text-3.5xl font-black block mt-1">Machine Power Cage</span>
              </h1>
              <p className="text-stone-605 font-semibold text-sm font-sans px-0.5">Heavy-Duty Squat Cage, Independent Smart Cable System, and Functional Dip / Pull-up Gym Hub</p>
              
              <div className="flex items-center gap-3 font-sans">
                <div className="flex text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-450" />
                  <Star className="w-5 h-5 fill-amber-400/50 text-amber-450" />
                  <Star className="w-5 h-5 text-slate-200" />
                  <Star className="w-5 h-5 text-slate-200" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">2.50 Rating (2 Certified Athlete Reviews)</span>
              </div>

              <div className="py-2 border-y border-stone-100 font-sans">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-rose-600">$999.99</span>
                  <span className="text-xs bg-slate-100 text-slate-900 font-extrabold px-3 py-1 rounded-md ml-3">Replaces 4 Standalone Trainers</span>
                </div>
              </div>

              <p className="text-stone-605 leading-relaxed text-sm md:text-base font-sans">
                Elevate your residential strength programs with the completely loaded <strong>Pooboo Multi-Functional Machine Power Cage</strong>. Replicating the ultimate functional layout of professional training clubs, this machine houses J-hooks, spotting tubes, parallel dip handles, landmine adapters, dual plate-loaded pulleys, and multi-angle pull-up paths in one space-conscious footprint. Manufactured from select, durable heavy-gauge alloy steel to keep exercises safe and heavy.
              </p>

              <div className="pt-4 font-sans border-t border-slate-100">
                <a 
                  href="https://amzn.to/49HbceH" 
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

        {/* Informative Warning / Highlight Box */}
        <div className="bg-slate-950 text-slate-105 rounded-[2rem] p-8 md:p-12 border border-slate-900 shadow-xl mb-12 font-sans">
          <h2 className="text-3xl font-extrabold text-white text-center mb-6 tracking-tight">
            Comprehensive Assembly & Spatial Planning
          </h2>
          <div className="max-w-4xl mx-auto text-slate-400 text-center space-y-6 text-sm lg:text-base leading-relaxed">
            <p>
              Please note that acquiring a fully functional commercial-level system carries a logistical trade-off. This multi-pulley powerhouse is sent in several heavy cartons and contains detailed modular steel bolts. Assembly takes approximately <strong>3 to 5 hours</strong> and highly benefits from two persons carrying out the leveling process together. Ensure your garage or workout room has a ceiling height clearance exceeding 85 inches to comfortably mount training pulleys.
            </p>
            <p className="text-xs text-amber-400 leading-relaxed font-sans font-bold uppercase tracking-wider">
              ★ ALWAYS PLACE CAGE ON REINFORCED RUBBER GYM FLOOR MATS TO MAXIMIZE GRIP TRACTION AND ABSORB IMPACT.
            </p>
          </div>
        </div>

        {/* Detailed Spec Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-slate-950 text-slate-100 rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6 border border-slate-900">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3 text-white font-sans">
              <Sparkles className="text-amber-400 font-sans" /> Pure Strength Engineering Features
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
                <ClipboardList className="text-slate-750 font-sans" /> Architectural Power Specs
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

            {/* Core Values Summary Box */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-4 font-sans">
              <h2 className="text-xl font-bold flex items-center gap-2 text-slate-850">
                <Heart className="text-rose-500 fill-rose-500 w-5 h-5 font-sans" /> Home Lifting Benefits
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

        {/* Dynamic Exercise Map */}
        <div className="bg-white rounded-[2rem] p-8 border border-slate-150 mb-12 font-sans shadow-sm">
          <h2 className="text-2xl font-bold text-slate-950 mb-6 flex items-center gap-2 justify-center">
            🏋️ Dynamic Exercise Possibilities Chart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-stone-50 rounded-2xl border border-slate-100 relative">
              <h4 className="font-extrabold text-neutral-950 text-base mb-3 border-b pb-1">Compound Barbell Lifts</h4>
              <ul className="space-y-1.5 text-xs text-neutral-650 font-semibold list-disc list-inside">
                <li>Heavy Olympic Back Squats</li>
                <li>Barbell Bench & Incline Presses</li>
                <li>Standing Military Shoulder Press</li>
                <li>Secure Rack Pulls & Deadlifts</li>
              </ul>
            </div>
            <div className="p-6 bg-stone-50 rounded-2xl border border-slate-100 relative">
              <h4 className="font-extrabold text-neutral-950 text-base mb-3 border-b pb-1">Cable Crossover Pulleys</h4>
              <ul className="space-y-1.5 text-xs text-neutral-655 font-semibold list-disc list-inside">
                <li>High-Low Cable Chest Flys</li>
                <li>Lat Pulldowns & Underhand Rows</li>
                <li>Tricep Extensions & Bicep Curls</li>
                <li>Continuous Cable Face pulls</li>
              </ul>
            </div>
            <div className="p-6 bg-stone-50 rounded-2xl border border-slate-100 relative">
              <h4 className="font-extrabold text-neutral-950 text-base mb-3 border-b pb-1">Functional Calisthenics</h4>
              <ul className="space-y-1.5 text-xs text-neutral-655 font-semibold list-disc list-inside">
                <li>Wide Grip Pull-Ups & Chin-Ups</li>
                <li>Dips (Adjustable Parallel Bars)</li>
                <li>Rotational T-Bar Landmine Rows</li>
                <li>Hanging Leg Lifting Protocols</li>
              </ul>
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
                <span>Unrivaled 2000 lb rating ensures structural security during intense workouts</span>
              </li>
              <li className="flex gap-2 items-start font-semibold text-slate-800 font-sans">
                <span className="text-emerald-600 font-bold shrink-0 font-bold">✔</span>
                <span>Incredibly highly integrated design combines free weight and pulley systems together</span>
              </li>
              <li className="flex gap-2 items-start font-semibold text-slate-800 font-sans">
                <span className="text-emerald-600 font-bold shrink-0 font-bold">✔</span>
                <span>Includes a complete multi-joint landmine system and row platform out of the box</span>
              </li>
              <li className="flex gap-2 items-start font-semibold text-slate-800 font-sans">
                <span className="text-emerald-600 font-bold shrink-0 font-bold">✔</span>
                <span>High-strength multi-position pull-up bar expands calisthenics capabilities</span>
              </li>
              <li className="flex gap-2 items-start font-semibold text-slate-800 font-sans">
                <span className="text-emerald-600 font-bold shrink-0 font-bold">✔</span>
                <span>Perfect space consolidator that cuts back on commercial membership requirements</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50/25 border border-amber-500/15 p-8 rounded-3xl space-y-4 shadow-sm animate-fade-in font-sans">
            <h3 className="text-amber-900 font-black text-xl flex items-center gap-2 font-sans">
              ⚠️ Considerations
            </h3>
            <ul className="space-y-2.5 text-stone-705 text-sm font-sans font-medium text-stone-900">
              <li className="flex gap-2 items-start font-semibold text-slate-800">
                <span className="text-amber-600 font-bold shrink-0">●</span>
                <span>Extremely elaborate assembly involves many screws and parts (recommended two-person set up)</span>
              </li>
              <li className="flex gap-2 items-start font-semibold text-slate-800 font-sans">
                <span className="text-amber-700 font-bold shrink-0 font-bold">●</span>
                <span>Cables utilize a plate-loaded slide bracket, which is slightly less silky than selectorized weight stacks</span>
              </li>
              <li className="flex gap-2 items-start font-semibold text-slate-800 font-sans">
                <span className="text-amber-700 font-bold shrink-0 font-bold">●</span>
                <span>Requires substantial ceiling clearances of at least 84-85 inches for safe headroom pulley movement</span>
              </li>
              <li className="flex gap-2 items-start font-semibold text-slate-800 font-sans">
                <span className="text-amber-700 font-bold shrink-0 font-bold">●</span>
                <span>Olympic barbell and plates must be purchased separately (not standard in shipment packaging)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Practical Setup & Safety Protocol */}
        <div className="bg-orange-50/40 rounded-[2rem] p-8 md:p-12 mb-12 border border-orange-150">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2 justify-center font-sans tracking-tight">
            <AlertTriangle className="text-amber-600 font-sans" /> Critical Assembly and Maintenance Protocol
          </h2>
          <div className="max-w-4xl mx-auto text-slate-705 space-y-6 text-sm lg:text-base leading-relaxed text-center font-sans font-medium">
            <p className="font-bold text-orange-950 font-sans">
              🔩 To optimize overall safety, do NOT fully tighten structural steel bolts until the entire framework is completely assembled. This ensures perfect vertical alignment.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-xs font-bold uppercase text-orange-900 font-sans">
              <div className="bg-white p-4 rounded-xl border border-orange-100 shadow-xs flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" /> Treat slide guide rods with silicone dry spray regularly for seamless pulley feel.
              </div>
              <div className="bg-white p-4 rounded-xl border border-orange-100 shadow-xs flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" /> Leverage heavy-duty rubber mats beneath the frame to eliminate metal-on-floor skidding.
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
              <p className="font-bold text-slate-900 mb-2">Q: Does the package come with heavy weight plates and lifting bar included?</p>
              <p className="text-stone-655 text-sm font-semibold">
                A: No — standard weight plates and lifting barbells are not included and must be purchased separately. This kit includes the main alloy steel cage chassis, dual crossover cable mechanisms, and the dedicated listed attachments.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/50 shadow-xs">
              <p className="font-bold text-slate-900 mb-2">Q: Is the high-crossover cable pulleys adjustable to multiple vertical settings?</p>
              <p className="text-stone-655 text-sm font-semibold">
                A: Yes — the dual-pulleys can slide and secure at multiple positions down the front guide struts to accommodate both standing chest flys and low rows.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200/50 shadow-xs">
              <p className="font-bold text-slate-900 mb-2">Q: How difficult is the guide system assembly for one person?</p>
              <p className="text-stone-655 text-sm font-semibold">
                A: While possible, a single builder might experience holding difficulties coordinating long steel alignment pins. We strongly advice leveraging 2 people during the initial alignment phase.
              </p>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-150 mb-12 font-sans shadow-xs">
          <h2 className="text-2xl font-black text-slate-950 mb-8 border-b pb-4 tracking-tight">
            Certified Customer Reviews (2 Reviews)
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
              <p className="text-slate-900 font-bold mb-1">Excellent versatility, but set aside a full weekend for assembly</p>
              <p className="text-slate-655 text-xs font-semibold leading-relaxed">
                "This power cage has completely re-modeled my home routine. The cable crossover behaves beautifully and holds standard weights well. J-hooks lock into the steel safely for heavy benches and squats. That being said, assembly was an extensive task with tons of steel screws. Be prepared with some dry silicone spray for keeping the weight sleeve sliders smooth!"
              </p>
            </div>
            <div className="border border-slate-100 p-6 rounded-2xl bg-slate-50/50">
              <div className="flex text-amber-400 gap-1 mb-2">
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 text-slate-200" />
                <Star className="w-4 h-4 text-slate-200" />
              </div>
              <p className="text-slate-900 font-bold mb-1">Decent frame, requires some lube for smooth cable pulls</p>
              <p className="text-slate-655 text-xs font-semibold leading-relaxed">
                "The 2000lb claim feels sturdy enough for garage lifters. Cables are useful, but being plate-loaded, there is slight friction. Adding standard barbell grease or slide spray to the chrome poles makes it so much smoother. Good budget package compared to high-end commercial machines, but definitely requires a companion helper to set up."
              </p>
            </div>
          </div>
        </div>

        {/* Safety Disclaimer Box */}
        <div className="bg-slate-100 rounded-3xl p-6 border border-slate-200 shadow-xs max-w-4xl mx-auto mb-12 font-sans">
          <h3 className="text-slate-850 font-bold mb-2 flex items-center gap-2 text-xs uppercase tracking-wide">
            <Info className="w-4 h-4 text-slate-650" /> Heavy-Duty Fitness & Weight Disclosures
          </h3>
          <p className="text-slate-505 text-xs font-sans leading-relaxed">
            Safety first is paramount. Before embarking upon heavy compound lifting regimens, consult with professional physical sports coaching staff to secure correct biomechanical posture patterns. All safety spotter arms and J-hooks must be fully aligned and locked straight prior to loading free-weight barbells. The dynamic weight claims of plate-loaded pulleys apply to symmetric physical distributions only. These statements have not been appraised by healthcare agencies; Pooboo systems are designed strictly for conditioning, holding no medical therapeutic curing scopes.
          </p>
        </div>

        {/* Final CTA Container */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-150 shadow-lg text-center max-w-4xl mx-auto font-sans">
          <h2 className="text-3xl font-extrabold text-slate-950 mb-4 tracking-tight">
            Claim Your All-In-One Power Cage and Upgrade Your Space
          </h2>
          <p className="text-stone-605 max-w-2xl mx-auto leading-relaxed text-md font-sans mb-8">
            Ditch separate fitness machine clutter and multiple travel fees. Bring commercial-standard squats, crossovers, pulls, and rows under one elite alloy roof.
          </p>
          <a 
            href="https://amzn.to/49HbceH" 
            target="_blank" 
            rel="nofollow sponsored noopener" 
            className="inline-flex bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-850 text-white font-bold text-center px-12 py-4 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all gap-2 text-md"
          >
            <ShoppingCart className="w-5 h-5 text-white" /> Get Pooboo Power Cage on Amazon
          </a>
        </div>

      </div>
    </motion.div>
  );
}
