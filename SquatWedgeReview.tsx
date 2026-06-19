import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Activity, ShieldCheck, Heart, Sparkles, AlertCircle } from 'lucide-react';

export default function SquatWedgeReview() {
  const features = [
    { title: 'Improved Mobility', desc: 'Allows deeper squat depth by elevating the heels, reducing load on lower back and ankles.' },
    { title: 'Non-Slip Grip', desc: 'Textured rubberized surface guarantees absolute traction even under heavy athletic loads.' },
    { title: 'Multi-Functional', desc: 'Perfect for calf stretching, physical therapy, Achilles rehab, yoga, and lunges.' },
    { title: 'Ultra Durable', desc: 'Heavy-duty construction engineered to hold up to 1,000 lbs without compressing.' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-[#fcfdfd] min-h-screen text-[#1a202c] font-sans pb-32"
    >
      <div className="bg-amber-50 border-b border-amber-200 text-amber-800 text-center py-3 text-xs font-medium px-4">
        Affiliate Disclosure: This reviews platform contains direct links to products. We may earn a small qualifying commission.
      </div>

      <div className="max-w-5xl mx-auto px-4 pt-12">
        <Link to="/" className="inline-flex items-center text-slate-500 hover:text-slate-950 transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Reviews Hub
        </Link>

        {/* Premium Product Header */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            <div className="flex justify-center">
              <img 
                src="https://gymusastore.com/wp-content/uploads/2026/02/Squat-Wedge-Blocks-Set-of-2-%E2%80%93-Non-Slip-Slant-Boards1.jpg" 
                className="w-full max-w-sm rounded-2xl shadow-md border border-slate-50 object-cover" 
                alt="Squat Wedge Blocks Premium Set" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-6">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Highly Rated Fitness Gear
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
                Squat Wedge Blocks <br/>
                <span className="text-slate-500 text-2xl md:text-3xl font-medium">(Set of 2)</span>
              </h1>
              <div className="text-3xl font-black text-emerald-600 flex items-baseline gap-2">
                $27.99 <span className="text-slate-400 text-sm font-normal">Regular retail price</span>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                Engineered non-slip slant boards designed to upgrade your squats, lunges, calf stretching, and overall joint mobility.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://amzn.to/49ntMZ8" 
                  target="_blank" 
                  rel="nofollow sponsored noopener" 
                  className="bg-[#FF9900] text-slate-950 hover:bg-[#e68a00] font-bold text-center px-8 py-4 rounded-xl shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-md"
                >
                  <ShoppingCart className="w-5 h-5" /> Buy Now on Amazon
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits & Specifications */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-10 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 border-b border-slate-800 pb-3">
              <Activity className="text-emerald-400" /> Active Advantages
            </h2>
            <div className="space-y-6">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 bg-slate-800 p-2 rounded-lg text-emerald-400 shrink-0 h-9 w-9 flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{f.title}</h3>
                    <p className="text-slate-400 text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <ShieldCheck className="text-slate-700" /> Why Form Matters
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Poor ankle flexion leads to compromised squat alignment, causing rounded backs and unstable knees. By creating an optimal 20-degree incline, these premium blocks help stabilize your kinetic chain instantly.
              </p>
            </div>

            <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100 flex items-start gap-4">
              <AlertCircle className="text-emerald-700 w-8 h-8 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-emerald-950 text-lg mb-1">Our Quick Verdict</h3>
                <p className="text-emerald-900 leading-relaxed text-sm">
                  At under $30, this high-density set belongs in every home gym setup. It provides instant results for joint posture, mobility relief, and posture conditioning.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-12 text-center shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(52,211,153,0.1),transparent_40%)]" />
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative z-10">Maximize Your Mobility Set</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8 text-md relative z-10">
            Secure your non-slip incline wedges to unlock comfortable squats, stretch deeper, and support long-term alignment.
          </p>
          <a 
            href="https://amzn.to/49ntMZ8" 
            target="_blank" 
            rel="nofollow sponsored noopener" 
            className="bg-[#FF9900] text-slate-950 font-bold px-10 py-5 rounded-2xl text-lg hover:scale-105 shadow-2xl transition-all inline-flex items-center gap-2 relative z-10"
          >
            <ShoppingCart className="w-5 h-5" /> Grab Best Amazon Deal
          </a>
        </div>
      </div>
    </motion.div>
  );
}
