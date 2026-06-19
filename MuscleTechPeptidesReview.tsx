import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Heart, Sparkles, Award, Zap, CheckCircle2 } from 'lucide-react';

export default function MuscleTechPeptidesReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2025/10/MuscleTech-Peptides-Bundle-1.webp',
    'https://gymusastore.com/wp-content/uploads/2025/10/MuscleTech-Peptides-Bundle-2.webp',
    'https://gymusastore.com/wp-content/uploads/2025/10/MuscleTech-Peptides-Bundle-3.webp',
    'https://gymusastore.com/wp-content/uploads/2025/10/MuscleTech-Peptides-Bundle-4.webp'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Formulation Technology', value: 'Advanced Bioactive Peptide Systems' },
    { label: 'Bundle Contents', value: 'Complete Synergistic Peptide Formulations' },
    { label: 'Primary Benefit', value: 'Accelerated Muscle Recovery & Signaling' },
    { label: 'Secondary Benefit', value: 'Optimized Workload Capacity & Output' },
    { label: 'Stack Integrity', value: 'Designed to Complement/Work Together' },
    { label: 'Target Audience', value: 'Serious Athletes, Lifters & Competitors' },
    { label: 'Production Standard', value: 'Rigorous Multi-Phase Quality Testing' }
  ];

  const benefits = [
    { name: 'Faster Recovery', desc: 'Recover quicker between intense workouts and training sessions so you can stay consistent.' },
    { name: 'Strength Support', desc: 'Helps support muscular power, force production, and peak physical intensity.' },
    { name: 'Enhanced Training', desc: 'Supports more effective, high-yield, and highly productive training sessions.' },
    { name: 'Smart Supplement Stack', desc: 'Formulas meticulously designed to operate together without complex guesswork.' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-slate-950 min-h-screen text-slate-100 font-sans pb-32"
    >
      {/* Top Banner Alert */}
      <div className="bg-red-650 text-white text-center py-3 text-xs font-bold px-4 tracking-wider shadow-md uppercase">
        ⚡ SCIENCE-DRIVEN RECOVERY: MuscleTech Premium Peptide Bundle Stack. Secured Direct Route to Amazon.
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
                  alt="MuscleTech Peptides Bundle" 
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider">
                  PEPTIDE STACK
                </span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-slate-950 p-1 transition-all ${activeImg === img ? 'border-red-500 shadow-lg' : 'border-slate-800 opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-md" alt={`MuscleTech Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-red-950/50 text-red-400 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-red-900/40">
                  <Award className="w-3.5 h-3.5 text-red-500" /> Premium Performance Stack
                </span>
                <span className="bg-green-900/30 text-green-400 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-green-800/30">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white tracking-tight">
                MuscleTech <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300 text-2xl md:text-4xl font-black block mt-1">Peptides Bundle</span>
              </h1>
              <p className="text-slate-300 font-semibold text-lg leading-relaxed">Push harder. Recover faster. Reach farther with MuscleTech peptide technology.</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-400">
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">5.0 (1 Certified Athlete Review)</span>
              </div>

              <div className="py-4 border-y border-slate-800">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-white">$170.97</span>
                  <span className="text-slate-400 text-xs ml-2 font-medium">Free Super Saver Shipping Included Direct from Amazon</span>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed text-md font-sans">
                The <strong>MuscleTech Peptides Bundle</strong> is an advanced, science-driven supplement stack engineered to support muscle recovery, strength gains, endurance, and overall training performance. Designed for serious athletes and dedicated gym-goers, this peptide-powered system helps optimize recovery, muscular output, and training adaptation for next-level results.
              </p>

              <div className="pt-4">
                <a 
                  href="https://amzn.to/4nSYzCX" 
                  target="_blank" 
                  rel="nofollow sponsored noopener" 
                  className="bg-gradient-to-r from-red-650 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold text-center px-10 py-4.5 rounded-xl shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2.5 text-lg"
                >
                  <ShoppingCart className="w-5 h-5" /> Buy Now on Amazon
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Science and Technology Section */}
        <div className="bg-slate-900 rounded-[2rem] p-8 md:p-12 border border-slate-800 shadow-xl mb-12">
          <h2 className="text-3xl font-extrabold text-white mb-6 tracking-tight text-center">
            Engineered for Optimal Recovery, Strength & Performance
          </h2>
          <div className="max-w-4xl mx-auto text-slate-300 space-y-6 text-center leading-relaxed">
            <p className="text-lg">
              Every product in the MuscleTech Peptide Series is formulated with a specific purpose—supporting cellular-level muscle signaling, physical recovery, performance enhancement, and workout endurance.
            </p>
            <p className="text-md">
              Use each formula individually according to your training block, or combine them together for an integrated training support system engineered to maximize your complete bio-athletic fitness potential.
            </p>
          </div>
        </div>

        {/* Detailed Spec Panels & Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-slate-900 text-white rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6 border border-slate-800">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-850 pb-3 text-white">
              <Sparkles className="text-red-550 className=w-6 h-6" /> Key Biotech Features
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-red-500 shrink-0 font-bold">✓</div>
                <div>
                  <h4 className="font-bold text-white">Advanced Bioactive Peptides</h4>
                  <p className="text-slate-400 text-sm">Precision-selected peptide molecular weights for optimized signaling, cell repair, and muscle performance adaptation loop.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-red-500 shrink-0 font-bold">✓</div>
                <div>
                  <h4 className="font-bold text-white">Peak Strength & Power Blocks</h4>
                  <p className="text-slate-400 text-sm">Maintains active muscle fibers, supporting superior total workload, explosive power outputs, and overall workout volume.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-red-500 shrink-0 font-bold">✓</div>
                <div>
                  <h4 className="font-bold text-white">High-Speed Recovery Protocols</h4>
                  <p className="text-slate-400 text-sm font-sans">Helps minimize painful soreness, reducing recovery windows between heavy lifting sets so you can train with elite frequency.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-red-500 shrink-0 font-bold">✓</div>
                <div>
                  <h4 className="font-bold text-white">Seamless Synergistic Stacking</h4>
                  <p className="text-slate-400 text-sm">Engineered without competitive pathways, allowing all formulas to work together beautifully in the digestive system.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
                <ShieldCheck className="text-red-500" /> Analytical Spec Sheet
              </h2>
              <div className="grid grid-cols-1 gap-y-3 font-semibold text-xs text-slate-350">
                {specs.map((item, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-slate-850 last:border-0">
                    <span className="text-slate-400">{item.label}</span>
                    <span className="text-white font-bold text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal target profile lists */}
            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-sm space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2 text-white">
                <Heart className="text-red-500 w-5 h-5 fill-red-500" /> Ideal Target Demographics
              </h2>
              <ul className="grid grid-cols-1 gap-y-2.5 text-slate-300 text-sm font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Competitive athletic profiles and strength trainers requiring optimal support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Serious bodybuilders seeking elite-tier physiological recovery response</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Lifters tracking high muscular work metrics, powerlifting blocks, and endurance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Anyone seeking a complete and clean performance-enabling stack</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Benefits Matrix Table */}
        <div className="bg-slate-900 rounded-[2rem] p-8 md:p-10 border border-slate-800 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Zap className="text-yellow-500 w-6 h-6" /> Benefits You'll Feel
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full border-collapse text-left text-sm text-slate-300">
              <thead className="bg-slate-950 text-slate-400 text-xs uppercase tracking-wider font-bold">
                <tr>
                  <th className="p-4 border-b border-slate-800">Key Benefit Area</th>
                  <th className="p-4 border-b border-slate-800">Real-World Outcome For You</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-850">
                {benefits.map((benefit, index) => (
                  <tr key={index} className="hover:bg-slate-950/40 transition-colors">
                    <td className="p-4 font-bold text-white">{benefit.name}</td>
                    <td className="p-4">{benefit.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Direct Usage Strategy */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-sm">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
              <Award className="text-red-500 w-5 h-5" /> Direct Strategical Protocol
            </h2>
            <ol className="list-decimal list-inside space-y-4 text-slate-300 text-sm font-medium">
              <li>
                <span className="text-white font-bold ml-1">Follow Exact Dose Timings:</span> Follow each product’s serving instructions meticulously for optimal timing and dosage cycles.
              </li>
              <li>
                <span className="text-white font-bold ml-1">Stack Strategically:</span> Stack ingredients seamlessly as instructed to build synergistic performance and signal loops.
              </li>
              <li>
                <span className="text-white font-bold ml-1">Maintain Core Routine:</span> Sustain high-consistency physical training programs, clean whole-food nutrition, correct sleep patterns, and daily hydration.
              </li>
            </ol>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
                <Sparkles className="text-yellow-500 w-5 h-5" /> What Makes MuscleTech Stand Out?
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Unlike unverified peptide components, MuscleTech commits to advanced sports science. With raw ingredient quality standards, third-party laboratory verification, and research-backed concentration metrics, you get elite-level physiological support.
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-2 text-xs font-bold text-red-400">
              <li className="flex items-center gap-1">✓ Premium Raw Purity</li>
              <li className="flex items-center gap-1">✓ Advanced Bio-Signaling</li>
              <li className="flex items-center gap-1">✓ Non-GMO Complex</li>
              <li className="flex items-center gap-1">✓ Gold Standard Athletics</li>
            </ul>
          </div>
        </div>

        {/* Brand Authenticity & Final Summary */}
        <div className="bg-slate-900 rounded-[2rem] p-8 md:p-12 border border-slate-800 shadow-2xl text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4 tracking-tight">
            Train Smarter. Recover Faster. Perform Better.
          </h2>
          <p className="text-slate-350 max-w-2xl mx-auto leading-relaxed text-md font-sans mb-8">
            Elevate every workout with a peptide-powered system built for athletes who demand more from their training. The MuscleTech Peptides Bundle gives you the tools to maximize performance, support recovery, and unlock your full fitness potential.
          </p>
          <a 
            href="https://amzn.to/4nSYzCX" 
            target="_blank" 
            rel="nofollow sponsored noopener" 
            className="inline-flex bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-center px-12 py-4 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all gap-2"
          >
            <ShoppingCart className="w-5 h-5" /> Order Your Peptide Stack Now
          </a>
        </div>

      </div>
    </motion.div>
  );
}
