import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Heart, Sparkles, Award, Dumbbell, Shield, Grid, Layers, HelpCircle } from 'lucide-react';

export default function MikoloPowerCageReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2025/09/Mikolo-Power-Cage-2000LB-Power-Rack-with-Independent-Dual-Pulley-System-1.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/09/Mikolo-Power-Cage-2000LB-Power-Rack-with-Independent-Dual-Pulley-System-2.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/09/Mikolo-Power-Cage-2000LB-Power-Rack-with-Independent-Dual-Pulley-System-3.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/09/Mikolo-Power-Cage-2000LB-Power-Rack-with-Independent-Dual-Pulley-System-4.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Weight Capacity', value: '2,000 lbs (Heavy Duty)' },
    { label: 'Tubing Thickness', value: 'Premium 2mm High-Alloy Steel' },
    { label: 'Upright Profile', value: 'Reinforced 2" × 2" Uprights' },
    { label: 'Height Levels', value: '30 Laser-Marked Post Positions (1" Spacing)' },
    { label: 'Pulley Ratio', value: 'True 1:1 Independent Dual Pulley Systems' },
    { label: 'Net / Gross Weight', value: '205 lbs Structural Weight' },
    { label: 'Assembly Blueprint', value: 'Required — Professional Tools & Guide Included' }
  ];

  const features = [
    {
      title: '🏋️ Independent Dual Pulley System',
      desc: 'Features a true 1:1 pulley ratio on both sides, allowing precise unilateral or bilateral resistance training, supersets, drop sets, and dual-user workouts.'
    },
    {
      title: '💪 4-in-1 Compact Gym Integration',
      desc: 'Combines a structural power rack, fully functional cable crossover machine, multi-grip chin/pull-up station, and a 360° rotational landmine attachment unit.'
    },
    {
      title: '🔥 Heavy-Duty 2,000LB Structural Strength',
      desc: 'Constructed from premium heavy-duty 2mm alloy steel tubing with reinforced structural weldments for maximum lifter security and lasting performance.'
    },
    {
      title: '📏 30 Laser-Marked Height Positions',
      desc: 'Allows users to instantly swap safety arms, pulley settings, and J-hooks with 30 laser-numbered adjustments detailed at 1-inch increments.'
    },
    {
      title: '🏠 Space-Saving Compact Footprint',
      desc: 'A structural half-rack layout optimized to fit inside residential spare rooms, low-clearance basements, and multi-use garages without sacrificing versatility.'
    },
    {
      title: '⚡ Whisper-Quiet Dual Sliding Sleeves',
      desc: 'Upgraded sliding sleeves glide seamlessly over guide rods, offering friction-free cable alignment, minimal noise, and durable cable longevity.'
    }
  ];

  const attachments = [
    'Multi-grip pull-up bar',
    'Dual pulley cable system',
    '360° landmine attachment',
    'Safety spotter arms',
    'Dip bars',
    'J-hooks',
    'T-bar row attachment',
    'Four cable handle attachments'
  ];

  const exercises = [
    {
      category: 'Heavy Compound Lift Station',
      items: ['Barbell Back Squats', 'Conventional Deadlifts', 'Flat/Incline Bench Press']
    },
    {
      category: 'Cable Work & Fly Crossover',
      items: ['Lat Pull-Downs', 'Chest Cable Crossovers', 'Seated Cable Rows']
    },
    {
      category: 'Bodyweight & Functional Fit',
      items: ['Pull-Ups & Chin-Ups', 'Serrated Dip Sets', 'T-Bar Corner Rows']
    },
    {
      category: 'Accessory Isolation Station',
      items: ['Cable Bicep Curls', 'Tricep Overhead Extensions', '360° Landmine Presses']
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-slate-950 min-h-screen text-slate-100 font-sans pb-32"
    >
      {/* Top Banner Alert */}
      <div className="bg-amber-500 text-slate-950 text-center py-3 text-xs font-black px-4 tracking-wider shadow-md uppercase">
        🔥 PREMIUM CLUB EQUIPMENT: Mikolo Structural 2000LB Multi-Function HR05 Home Gym. Verified Direct Amazon Route.
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-12">
        <Link to="/" className="inline-flex items-center text-slate-400 hover:text-white transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Review Hub
        </Link>

        {/* Product Showcase Container */}
        <div className="bg-slate-900 rounded-[2rem] shadow-2xl overflow-hidden border border-slate-800 mb-12">
          <div className="grid md:grid-cols-2 gap-12 p-8 md:p-12 items-start">
            
            {/* Gallery Section */}
            <div className="space-y-6">
              <div className="bg-slate-950 rounded-3xl p-6 flex items-center justify-center border border-slate-800 aspect-square overflow-hidden relative">
                <img 
                  src={activeImg} 
                  className="max-h-full max-w-full object-contain rounded-2xl duration-305 transition-all hover:scale-105" 
                  alt="Mikolo Power Cage HR05 Home Gym System" 
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-amber-500 text-slate-950 text-[11px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider">
                  2,000LB MAXIMUM
                </span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-slate-950 p-1 transition-all ${activeImg === img ? 'border-amber-500 shadow-md' : 'border-slate-800 opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-md" alt={`Mikolo Cage Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-amber-955/40 text-amber-400 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-amber-500/30">
                  <Award className="w-3.5 h-3.5 text-amber-500" /> Commercial Strength Racks
                </span>
                <span className="bg-green-900/30 text-green-400 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-green-800/20">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white tracking-tight">
                Mikolo Power Cage <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 text-2xl md:text-3xl font-black block mt-1">HR05 with Dual Pulley System</span>
              </h1>
              <p className="text-slate-300 font-semibold text-md leading-relaxed">Complete Multi-Function Full-Body Structural Gym Center with 1:1 Pulley Ratio</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-400">
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">5.0 (1 Certified Gym Builder Review)</span>
              </div>

              <div className="py-3 border-y border-slate-800">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-white">$799.99</span>
                  <span className="text-emerald-400 text-xs bg-emerald-950/40 border border-emerald-900/30 px-2.5 py-1 rounded-md ml-3 font-semibold">Immediate Shipping Available</span>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed text-md font-sans">
                Upgrade your home gym with the <strong>Mikolo HR05 Power Cage</strong>, a professional-grade multi-function training system designed for heavy strength training, high-tension cable workouts, powerlifting, and total-body fitness. Combining a heavy-duty power rack, independent dual pulley system, cable crossover station, pull-up system, and 360° landmine attachment, this compact home gym delivers commercial-level performance in a space-saving design.
              </p>

              <div className="pt-4 animate-fade-in">
                <a 
                  href="https://amzn.to/3POC3yx" 
                  target="_blank" 
                  rel="nofollow sponsored noopener" 
                  className="bg-gradient-to-r from-[#ff9900] to-[#ffb84d] hover:from-[#e68a00] hover:to-[#e6a540] text-slate-950 font-black text-center px-10 py-5 rounded-xl shadow-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-lg"
                >
                  <ShoppingCart className="w-5 h-5 text-slate-950" /> Buy Now on Amazon
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Complete Functional Home Gym System Intro Banner */}
        <div className="bg-slate-900 rounded-[2rem] p-8 md:p-12 border border-slate-800 shadow-xl mb-12">
          <h2 className="text-3xl font-extrabold text-white text-center mb-6 tracking-tight">
            Complete Multi-Function Home Gym System
          </h2>
          <div className="max-w-4xl mx-auto text-slate-300 text-center space-y-6 text-md leading-relaxed">
            <p>
              The Mikolo HR05 is engineered specifically for competitive athletes, powerlifters, and fitness enthusiasts who demand ultimate exercise versatility without cluttering their floor space.
            </p>
            <p className="text-sm text-slate-400">
              Perform heavy barbell squats, flat bench chest presses, cable crossovers, high-velocity lat pull-downs, isolated seated pulley rows, bodyweight pull-ups, dips, and heavy landmine rotations on a single integrated fortress.
            </p>
          </div>
        </div>

        {/* Detailed Spec Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-slate-900 text-white rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6 border border-slate-800">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-850 pb-3 text-white">
              <Sparkles className="text-amber-400" /> Advanced Engineering Features
            </h2>
            <ul className="space-y-4">
              {features.map((feat, idx) => (
                <li key={idx} className="flex gap-3">
                  <div className="bg-slate-850 p-2.5 rounded-lg text-amber-400 shrink-0 font-bold h-10 w-10 flex items-center justify-center border border-slate-800">✓</div>
                  <div>
                    <h4 className="font-bold text-white text-base">{feat.title}</h4>
                    <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">{feat.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
                <Shield className="text-amber-500 w-5 h-5" /> Structural Specifications
              </h2>
              <div className="grid grid-cols-1 gap-y-3 font-semibold text-xs text-slate-350">
                {specs.map((item, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-slate-850 last:border-0 font-sans">
                    <span className="text-slate-400">{item.label}</span>
                    <span className="text-white font-bold text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Included Attachments Grid Card */}
            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-sm space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2 text-white">
                <Layers className="text-amber-500" /> Included Attachments & Accessories
              </h2>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-slate-300 text-xs font-semibold">
                {attachments.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-slate-950/50 p-2.5 rounded-xl border border-slate-850">
                    <span className="text-amber-400 font-bold shrink-0">✔</span>
                    <span className="text-slate-205">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Workout Possibilities Bento Grid */}
        <div className="bg-slate-900 rounded-[2rem] p-8 md:p-10 border border-slate-800 mb-12 shadow-md">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Dumbbell className="text-amber-400 w-6 h-6" /> Workout Versatility Matrix
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {exercises.map((cat, index) => (
              <div key={index} className="bg-slate-950 rounded-2xl p-5 border border-slate-850 space-y-3 flex flex-col justify-between">
                <div>
                  <h3 className="text-amber-450 text-xs font-mono font-bold tracking-wider uppercase mb-1">{cat.category}</h3>
                  <div className="h-0.5 w-10 bg-amber-500 rounded-full mb-3" />
                </div>
                <ul className="space-y-1.5 text-slate-300 text-sm font-medium">
                  {cat.items.map((item, id) => (
                    <li key={id} className="flex items-center gap-1.5">
                      <span className="text-slate-400 font-bold text-xs">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Perfect For Segment */}
        <div className="bg-slate-900 rounded-[2rem] p-8 md:p-10 border border-slate-800 mb-12 flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="space-y-2 max-w-lg">
            <h2 className="text-2xl font-extrabold text-white">Ideally Built For:</h2>
            <p className="text-slate-400 text-sm">Professional home garage gyms, complete strength layouts, small footprint athletic training spots, and heavy loading lifters wanting top security.</p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300 font-semibold shrink-0">
            <li className="flex items-center gap-2">✔ Premium House setups</li>
            <li className="flex items-center gap-2">✔ High-Tension Garage gyms</li>
            <li className="flex items-center gap-2">✔ Advanced Powerlifting gyms</li>
            <li className="flex items-center gap-2">✔ Spaceconscious garage fitness</li>
          </ul>
        </div>

        {/* Final CTA / Brand Authenticity summary */}
        <div className="bg-slate-900 rounded-[2rem] p-8 md:p-12 border border-slate-800 shadow-2xl text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4 tracking-tight">
            Build a Professional Home Gym Experience
          </h2>
          <p className="text-slate-350 max-w-2xl mx-auto leading-relaxed text-md font-sans mb-8">
            The Mikolo HR05 Power Rack delivers elite commercial-level performance, magnificent training safety, and extreme durability for heavy structural lifts in the comfort of your house or garage gym space. Experience full training liberation.
          </p>
          <a 
            href="https://amzn.to/3POC3yx" 
            target="_blank" 
            rel="nofollow sponsored noopener" 
            className="inline-flex bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-center px-12 py-4 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all gap-2 text-md"
          >
            <ShoppingCart className="w-5 h-5 text-slate-950" /> Order Your Mikolo HR05 Gym Center Now
          </a>
        </div>

      </div>
    </motion.div>
  );
}
