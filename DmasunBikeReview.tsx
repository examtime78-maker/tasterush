import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Award, Heart, Sparkles, Activity, Info, ClipboardList, RefreshCw, Bike } from 'lucide-react';

export default function DmasunBikeReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2025/11/DMASUN-Exercise-Bike-Magnetic-Resistance-Stationary-Bike-for-Home-with-330-LBS-Capacity-1.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/DMASUN-Exercise-Bike-Magnetic-Resistance-Stationary-Bike-for-Home-with-330-LBS-Capacity-2.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/DMASUN-Exercise-Bike-Magnetic-Resistance-Stationary-Bike-for-Home-with-330-LBS-Capacity-3.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/DMASUN-Exercise-Bike-Magnetic-Resistance-Stationary-Bike-for-Home-with-330-LBS-Capacity-4.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Structural Material', value: 'Heavy-Duty Alloy Steel Frame' },
    { label: 'Maximum User Capacity', value: '330 lbs Heavy Weight Limit' },
    { label: 'System Drive Mechanism', value: 'Silent Belt Driven System' },
    { label: 'Resistance Technology', value: 'Whisper-Quiet Multi-Level Magnetic Resistance' },
    { label: 'Flywheel Weight Capacity', value: 'Heavy-Duty 35 lbs Solid Steel Flywheel' },
    { label: 'Telemetry Monitoring Console', value: 'Battery Operated Multi-Data LCD Screen' },
    { label: 'Adjustment Capability', value: '4-Way Padded Seat & Multi-Grip Handlebars' }
  ];

  const features = [
    {
      title: '🧲 Advanced Silent Magnetic resistance',
      desc: 'Engineered with premium rare-earth magnets that slide near the 35 lb solid steel flywheel to deliver instant, continuous drag adjustments without physical wear or irritating friction noise.'
    },
    {
      title: '🚴 Ultra-Rugged Alloy Steel Structure',
      desc: 'Formed from commercial-strength alloy steel piping to ensure safe, wobble-free sprint sessions that support dedicated training loads up to 330 lbs.'
    },
    {
      title: '🤫 Silent Maintenance-Free Belt Drive',
      desc: 'Unlike traditional chain-driven engines, this belt-driven mechanism runs completely undetected in quiet apartments, eliminating chain grease or regular tensioning.'
    },
    {
      title: '🚲 4-Way Custom Ergo Adjustments',
      desc: 'Features highly detailed horizontal and vertical seat levels combined with multiple height options for non-slip handlebars to comfortably fit various heights.'
    },
    {
      title: '📊 Multi-Functional Smart LCD Console',
      desc: 'Tracks real-time speed, exercise time, distance covered, cumulative calories spent, and pulse telemetry via the integrated handle contact pads.'
    },
    {
      title: '🥤 Comfort Tablet & Bottle Holders',
      desc: 'Keeps dynamic visual entertainment or streaming training classes perfectly within view with an built-in tablet bracket, backed by quick bottle access.'
    }
  ];

  const valuesHighlight = [
    'Whisper-quiet magnetic belt mechanics suited for family environments',
    'Heavy 35 lb flywheel delivers outstanding momentum and stability',
    'Thickly cushioned anatomical seat mitigates intense pelvic strain',
    'Easily transportable throughout rooms with built-in rollers',
    'Features non-slip cage pedals with fully adjustable foot straps',
    'Provides superb lower-body endurance and low-impact caloric expenditure'
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-zinc-50 min-h-screen text-zinc-900 font-sans pb-32"
    >
      {/* Promo Bar Banner */}
      <div className="bg-zinc-950 text-white text-center py-3 text-xs font-black px-4 tracking-wider shadow-md uppercase">
        🚴 WHISPER-QUIET MOTION: DMASUN Magnetic Resistance Stationary Bike (330 lbs limit). Verified Route to Amazon.
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-12">
        <Link to="/" className="inline-flex items-center text-zinc-500 hover:text-zinc-950 transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Review Hub
        </Link>

        {/* Product Showcase Container */}
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-zinc-150 mb-12">
          <div className="grid md:grid-cols-2 gap-12 p-8 md:p-12 items-start">
            
            {/* Gallery Section */}
            <div className="space-y-6">
              <div className="bg-zinc-50 rounded-3xl p-6 flex items-center justify-center border border-zinc-100 aspect-square overflow-hidden relative">
                <img 
                  src={activeImg} 
                  className="max-h-full max-w-full object-contain rounded-2xl duration-300 transition-all hover:scale-105" 
                  alt="DMASUN Exercise Bike Stationary Indoor Cycling" 
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-zinc-900 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider shadow-sm">
                  MAGNETIC RESISTANCE
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-zinc-55 p-1 transition-all ${activeImg === img ? 'border-zinc-805 border-zinc-900 shadow-md' : 'border-transparent opacity-75 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`DMASUN Bike Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-zinc-900 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-zinc-950">
                  <Award className="w-3.5 h-3.5 text-yellow-450 text-amber-500" /> Stable Alloy Frame
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-zinc-950 tracking-tight font-sans">
                DMASUN <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-stone-800 to-amber-700 text-2xl md:text-3.5xl font-black block mt-1">Magnetic Resistance Exercise Bike</span>
              </h1>
              <p className="text-zinc-650 font-semibold text-md">Quiet Belt-Driven Home Cycle with Heavy-Duty 35 lb Flywheel & 330 lbs Capacity</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-550">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-500" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-500" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-500" />
                  <Star className="w-5 h-5 fill-amber-400 text-amber-500" />
                  <Star className="w-5 h-5 fill-zinc-200 text-zinc-200" />
                </div>
                <span className="text-zinc-400 text-sm font-semibold tracking-tight">4.0 (1 Certified Home-Gym Review)</span>
              </div>

              <div className="py-2 border-y border-zinc-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-rose-600">$209.99</span>
                  <span className="text-md text-zinc-400 line-through ml-2">$389.99</span>
                  <span className="text-xs bg-amber-100 text-amber-900 font-extrabold px-2.5 py-1 rounded-md ml-3">Save 46% Off MSRP</span>
                </div>
              </div>

              <p className="text-zinc-605 leading-relaxed text-sm md:text-base font-sans leading-relaxed">
                Elevate your residential home cardio training with the superb visual frame and silent output of the <strong>DMASUN Magnetic Resistance Exercise Bike</strong>. Specifically constructed to offer apartment dwellers and active families a studio-level spinning experience on a budget, this incredibly sturdy bike combines magnetic resistance brakes with a robust 35 lb high-momentum flywheel. Highly adjustable for multiple rider heights, it is the perfect low-maintenance aerobic machine.
              </p>

              <div className="pt-4">
                <a 
                  href="https://amzn.to/4fLzg3H" 
                  target="_blank" 
                  rel="nofollow sponsored noopener" 
                  className="bg-gradient-to-r from-[#ff9900] to-[#ffb84d] hover:from-[#e68a00] hover:to-[#e6a540] text-zinc-950 font-extrabold text-center px-10 py-5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-lg"
                >
                  <ShoppingCart className="w-5 h-5 text-zinc-950" /> Buy Now on Amazon
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Dynamic Magnetic Flyer Header Panel */}
        <div className="bg-zinc-950 text-zinc-100 rounded-[2rem] p-8 md:p-12 border border-zinc-900 shadow-xl mb-12">
          <h2 className="text-3xl font-extrabold text-white text-center mb-6 tracking-tight">
            Whisper-Quiet Magnetic Drag & Sturdy Cycling Performance
          </h2>
          <div className="max-w-4xl mx-auto text-zinc-400 text-center space-y-6 text-sm lg:text-base leading-relaxed">
            <p>
              Traditional friction bikes rely on physical felt pad wear, yielding wool crumbs, heat, and squealing noises. DMASUN completely bypasses this design pitfall by utilizing contact-free magnetic drag mechanics that deliver completely silent changes in workout intensity.
            </p>
            <p className="text-xs text-amber-400 leading-relaxed font-sans font-extrabold italic uppercase tracking-wider mb-2">
              ★ Coupled with a heavy-duty 35 lb solid steel flywheel to simulate smooth momentum for professional-grade standing sprints.
            </p>
          </div>
        </div>

        {/* Detailed Spec Panels & Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-zinc-950 text-zinc-100 rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6 border border-zinc-900 text-zinc-300">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-zinc-800 pb-3 text-white">
              <Sparkles className="text-amber-500" /> Engineering Advantages
            </h2>
            <ul className="space-y-4">
              {features.map((feat, index) => (
                <li key={index} className="flex gap-3">
                  <div className="bg-zinc-900 p-2.5 text-amber-500 shrink-0 font-bold leading-none h-10 w-10 flex items-center justify-center rounded-lg border border-zinc-800">✓</div>
                  <div>
                    <h4 className="font-bold text-white text-base font-sans">{feat.title}</h4>
                    <p className="text-zinc-400 text-xs mt-0.5 leading-relaxed font-sans font-medium">{feat.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            {/* Technical Specifications */}
            <div className="bg-white rounded-3xl p-8 border border-zinc-150 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-zinc-850">
                <ClipboardList className="text-zinc-700" /> Certified Rower Blueprint
              </h2>
              <div className="grid grid-cols-1 gap-y-3 font-semibold text-xs text-zinc-655 font-sans">
                {specs.map((item, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-zinc-50 last:border-0">
                    <span className="text-zinc-400">{item.label}</span>
                    <span className="text-zinc-950 font-extrabold text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Users Love It Box */}
            <div className="bg-white rounded-3xl p-8 border border-zinc-150 shadow-sm space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2 text-zinc-850">
                <Heart className="text-rose-500 fill-rose-500 w-5 h-5" /> Athlete Experience Points
              </h2>
              <div className="grid grid-cols-1 gap-y-2 text-zinc-705 text-xs font-semibold font-sans">
                {valuesHighlight.map((rate, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-zinc-50 p-2.5 rounded-xl border border-zinc-100">
                    <span className="text-zinc-700 font-extrabold shrink-0">✔</span>
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
              <li className="flex gap-2 items-start font-medium text-zinc-850 font-sans">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Contact-free magnetic resistance system creates whisper-silent rotation</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-zinc-850 font-sans">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Substantial 330 lbs user weight limit via reinforced alloy steel structural pipes</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-zinc-850 font-sans">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Robust 35 lb flywheel protects natural kinetic pedal momentum and sprint cycles</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-zinc-850 font-sans">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Extremely accessible price compared to costly studio bike alternatives</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-zinc-850 font-sans">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <span>Requires almost zero physical drive lubrication or brake maintenance</span>
              </li>
            </ul>
          </div>

          <div className="bg-zinc-50 border border-zinc-300 p-8 rounded-3xl space-y-4 shadow-sm">
            <h3 className="text-zinc-900 font-black text-xl flex items-center gap-2">
              ⚠️ Considerations
            </h3>
            <ul className="space-y-2.5 text-zinc-705 text-sm">
              <li className="flex gap-2 items-start font-medium text-zinc-850 font-sans font-sans">
                <span className="text-zinc-550 text-zinc-600 font-bold shrink-0">●</span>
                <span>Standard basic LCD screen lacks digital backlighting or smart app streaming integrations</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-zinc-850 font-sans font-sans">
                <span className="text-zinc-550 text-zinc-600 font-bold shrink-0">●</span>
                <span>Adjusting resistance level does not display exact percentage steps on screen</span>
              </li>
              <li className="flex gap-2 items-start font-medium text-zinc-850 font-sans font-sans">
                <span className="text-zinc-550 text-zinc-600 font-bold shrink-0">●</span>
                <span>Solid 35 lb solid steel flywheel makes initial set-up heavy for single persons</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Targeted Training Demographics Panel */}
        <div className="bg-zinc-200/50 border border-zinc-250 rounded-[2rem] p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-zinc-950 mb-6 flex items-center gap-2 justify-center font-sans tracking-tight">
            <Activity className="text-zinc-800 animate-pulse" /> Targeted Rider Groups
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center text-sm font-sans">
            <div className="bg-white p-6 rounded-2xl border border-zinc-150 flex flex-col justify-between shadow-xs">
              <div>
                <p className="font-extrabold text-zinc-900 text-base mb-2">🏙️ Apartment Dwellers</p>
                <p className="text-zinc-605 leading-relaxed text-xs">Run intense sprint sessions during early mornings or late nights without waking neighbors or sleeping infant children.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-zinc-150 flex flex-col justify-between shadow-xs">
              <div>
                <p className="font-extrabold text-zinc-900 text-base mb-2">🏅 Cardio Enthusiasts</p>
                <p className="text-zinc-605 leading-relaxed text-xs">Simulate heavy outdoor mountain climbs or rapid flat racetrack runs comfortably. Padded seat eases high-duration trials.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-zinc-150 flex flex-col justify-between shadow-xs">
              <div>
                <p className="font-extrabold text-zinc-900 text-base mb-2">🍂 Home Fitness Beginners</p>
                <p className="text-zinc-605 leading-relaxed text-xs">Get safe, extremely low-impact cardiovascular conditioning that builds heart capacity and leg strength without joint fatigue.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Clinical Disclaimer Box */}
        <div className="bg-zinc-100 rounded-3xl p-6 border border-zinc-200 shadow-xs max-w-4xl mx-auto mb-12">
          <h3 className="text-slate-850 font-bold mb-2 flex items-center gap-2 text-xs uppercase tracking-wide">
            <Info className="w-4 h-4 text-zinc-650" /> Biomechanical Sourcing & Safety Disclaimer
          </h3>
          <p className="text-zinc-505 text-xs font-sans leading-relaxed">
            Ensure that you adjust vertical handlebar height and vertical seat sliders properly to project a safe non-stressing angle for your knees and lower lumbar spine. Drink plentiful water during active cycling sessions. Consult certified sports physicians or cardiologists prior to pursuing high-intensity cycling or VO2-max heart training if you operate under active health conditions.
          </p>
        </div>

        {/* Final CTA Container */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-zinc-150 shadow-lg text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-zinc-950 mb-4 tracking-tight">
            Bring Studio Spinning Classes to the Comfort of Your Home
          </h2>
          <p className="text-zinc-655 max-w-2xl mx-auto leading-relaxed text-md font-sans mb-8 font-sans">
            The DMASUN Magnetic Resistance Exercise Bike brings world-class quiet mechanics, remarkable 330 lbs weight security, high belt-driven low-maintenance consistency, and a comfortable ergonomic frame directly to your workout hub.
          </p>
          <a 
            href="https://amzn.to/4fLzg3H" 
            target="_blank" 
            rel="nofollow sponsored noopener" 
            className="inline-flex bg-gradient-to-r from-zinc-900 to-zinc-800 hover:from-zinc-950 hover:to-zinc-900 text-white font-bold text-center px-12 py-4 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all gap-2 text-md font-sans"
          >
            <ShoppingCart className="w-5 h-5 text-white" /> Buy the DMASUN Bike on Amazon
          </a>
        </div>

      </div>
    </motion.div>
  );
}
