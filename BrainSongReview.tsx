import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, Info, CheckCircle2, Clock, Smartphone, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function BrainSongReview() {
  const [timeLeft, setTimeLeft] = useState(21600); // 6 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-[#f5f8fc] min-h-screen text-slate-900 font-sans pb-32"
    >
      <div className="bg-[#fff4d6] p-4 text-center text-sm font-medium border-b border-yellow-200">
        Affiliate Disclosure: This page may contain affiliate links. We may earn a commission at no extra cost to you.
      </div>

      <header className="bg-gradient-to-br from-[#0d1b2a] to-[#1b263b] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-12">
          <div className="flex-1 min-w-[300px]">
            <Link to="/" className="inline-flex items-center text-slate-400 mb-8 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Reviews
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">The Brain Song Original Review</h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
              Discover a neuroscience-inspired audio experience designed to support relaxation, focus, learning, and mental wellness.
            </p>
            <a 
              href="https://ba69f-xzk85odt74v4oi4lte84.hop.clickbank.net" 
              target="_blank" 
              className="bg-[#ff6b00] text-white px-10 py-5 rounded-2xl text-xl font-bold shadow-[0_10px_25px_rgba(255,107,0,0.35)] hover:scale-105 transition-all inline-flex items-center gap-2"
            >
              <Play className="w-6 h-6 fill-white" /> Begin Your Experience
            </a>
          </div>
          <div className="flex-1 flex justify-center">
            <img 
              src="https://brainsongoriginal.com/std/images/prd-img-mini.png" 
              className="w-full max-w-xs rounded-[2rem] shadow-2xl rotate-3" 
              alt="Brain Song Original" 
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 space-y-20 mt-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Struggling With Focus or Mental Fatigue?</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Many people feel distracted, mentally tired, or overwhelmed. Audio-based relaxation programs are a popular way to create calm focus and improve daily mental routines.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card 
            icon={<Zap className="text-orange-500"/>} 
            title="Relaxation Support" 
            desc="Designed to create a calming audio environment for better mental clarity."
          />
          <Card 
            icon={<Clock className="text-blue-500"/>} 
            title="Focus Routine" 
            desc="Users often explore sound-based programs as part of concentration routines."
          />
          <Card 
            icon={<Smartphone className="text-purple-500"/>} 
            title="Simple Access" 
            desc="Digital format means quick access from home without complicated setup."
          />
        </div>

        <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Pros & Considerations</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-green-600 flex items-center gap-2">
                <CheckCircle2/> Pros
              </h3>
              <ul className="space-y-4 text-slate-600 font-medium">
                <li>✨ Instant digital access</li>
                <li>🎧 Simple listening experience</li>
                <li>🗓️ Can fit into daily routines</li>
                <li>📦 No physical product shipping</li>
                <li>🎓 Beginner friendly</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-500 flex items-center gap-2">
                <Info/> Considerations
              </h3>
              <ul className="space-y-4 text-slate-600 font-medium">
                <li>💻 Digital product only</li>
                <li>🧠 Results are subjective</li>
                <li>⏳ Requires consistent use</li>
                <li>🏥 Not a medical treatment</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center bg-white p-12 rounded-[2rem] shadow-lg border-t-4 border-orange-500">
          <h2 className="text-2xl font-bold mb-4">Limited-Time Access Window</h2>
          <p className="text-slate-500 mb-6 font-medium">Explore the official offer while availability remains active.</p>
          <div className="text-5xl font-mono font-bold text-orange-500">
            {formatTime(timeLeft)}
          </div>
        </div>

        <div className="bg-slate-900 p-12 rounded-[3.5rem] text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/10 to-transparent pointer-events-none"/>
          <h2 className="text-4xl font-bold mb-6">Ready To Try It?</h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            See the official offer and decide if it fits your daily routine for better mental wellness and focus.
          </p>
          <a 
            href="https://ba69f-xzk85odt74v4oi4lte84.hop.clickbank.net" 
            target="_blank" 
            className="bg-[#ff6b00] text-white px-12 py-5 rounded-2xl text-2xl font-bold shadow-2xl hover:scale-105 transition-all inline-block"
          >
            Buy Now
          </a>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-[#0d1b2a] p-4 text-center z-50 shadow-2xl border-t border-white/10">
        <a 
          href="https://ba69f-xzk85odt74v4oi4lte84.hop.clickbank.net" 
          target="_blank"
          className="bg-orange-500 text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors"
        >
          Begin Your Experience
        </a>
      </div>
    </motion.div>
  );
}

function Card({ icon, title, desc }: any) {
  return (
    <div className="bg-white p-10 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform text-center">
      <div className="flex justify-center mb-6 scale-125">{icon}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-slate-500 font-medium leading-relaxed">{desc}</p>
    </div>
  );
}
