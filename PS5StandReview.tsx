import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Zap, Wind, Laptop, Gamepad2, Layers } from 'lucide-react';

export default function PS5StandReview() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-[#0b0f1a] min-h-screen font-sans text-white overflow-hidden pb-20"
    >
      <header className="relative py-24 px-4 flex justify-center items-center overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ x: -50, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }}
            className="flex justify-center"
          >
            <img 
              src="https://m.media-amazon.com/images/I/61OgjFdK47L._SL1500_.jpg" 
              className="w-full max-w-lg rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] float-animation" 
              alt="PS5 Cooling Stand" 
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div>
            <Link to="/" className="inline-flex items-center text-blue-400 mb-8 hover:text-blue-300 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Reviews
            </Link>
            <h1 className="text-5xl font-bold mb-6 leading-tight">Voltmi PS5 Cooling Stand Review</h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              Organize your PS5 setup with cooling airflow, dual controller charging, game storage, and a cleaner gaming desk.
            </p>
            <a 
              href="https://amzn.to/4wB8ZLx" 
              target="_blank" 
              className="bg-orange-500 text-white px-10 py-4 rounded-xl text-lg font-bold shadow-[0_0_20px_rgba(255,153,0,0.4)] hover:scale-105 transition-all inline-block"
            >
              Buy Now on Amazon
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 space-y-20">
        <div className="grid md:grid-cols-4 gap-6">
          <Feature icon={<Wind className="text-blue-400"/>} title="Cooling Fan" desc="Built-in airflow for long sessions." />
          <Feature icon={<Gamepad2 className="text-orange-400"/>} title="Dual Charging" desc="Charge two controllers at once." />
          <Feature icon={<Layers className="text-purple-400"/>} title="10 Game Slots" desc="Keep your cases organized." />
          <Feature icon={<Laptop className="text-green-400"/>} title="Space Saving" desc="Cleaner gaming station setup." />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 p-10 rounded-3xl backdrop-blur-xl border border-white/10">
            <h3 className="text-2xl font-bold text-green-400 mb-6">Pros</h3>
            <ul className="space-y-4 text-slate-300 font-medium">
              <li>🔋 All-in-one charging station</li>
              <li>🌀 Active cooling system</li>
              <li>📦 Integrated game storage</li>
              <li>🎨 Premium modern aesthetics</li>
              <li>🧹 Cleaner cabling setup</li>
            </ul>
          </div>
          <div className="bg-white/5 p-10 rounded-3xl backdrop-blur-xl border border-white/10">
            <h3 className="text-2xl font-bold text-red-400 mb-6">Considerations</h3>
            <ul className="space-y-4 text-slate-300 font-medium">
              <li>📏 Adds footprint to your desk</li>
              <li>⚡ Requires dedicated USB power</li>
              <li>🎧 Best for physical disc users</li>
            </ul>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-slate-900 to-slate-800 p-16 rounded-[3rem] shadow-2xl border border-white/5">
          <h2 className="text-4xl font-bold mb-6">Elevate Your PS5 Experience</h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Ready for a cleaner setup? Check the latest pricing and availability on Amazon.
          </p>
          <a 
            href="https://amzn.to/4wB8ZLx" 
            target="_blank" 
            className="bg-orange-500 text-white px-12 py-5 rounded-2xl text-xl font-bold shadow-2xl hover:scale-105 transition-all inline-block"
          >
            Check Price on Amazon
          </a>
        </div>
      </div>

      <style>{`
        .float-animation {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </motion.div>
  );
}

function Feature({ icon, title, desc }: any) {
  return (
    <div className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors text-center">
      <div className="flex justify-center mb-4 scale-125">{icon}</div>
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-sm text-slate-400">{desc}</p>
    </div>
  );
}
