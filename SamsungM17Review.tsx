import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Shield, Camera, Smartphone, Cpu, Battery, Star } from 'lucide-react';

export default function SamsungM17Review() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-[#f7f7f7] min-h-screen py-12 px-4 font-sans text-slate-900"
    >
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="inline-flex items-center text-blue-600 mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Reviews
        </Link>
        
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img 
              src="https://m.media-amazon.com/images/I/7101h6htEgL._SL1500_.jpg" 
              className="w-full h-auto rounded-3xl shadow-2xl" 
              alt="Samsung Galaxy M17 5G"
              referrerPolicy="no-referrer"
            />
            <div>
              <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                Powerful 5G Smartphone
              </span>
              <h1 className="text-4xl font-bold mb-6">Samsung Galaxy M17 5G Review</h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Looking for a reliable Samsung phone with strong battery life, AI features, and solid camera performance? The Galaxy M17 5G is built for everyday users who value brand trust and longevity.
              </p>
              <a 
                href="https://amzn.to/4wvxI3P" 
                target="_blank" 
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-full text-xl font-bold shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                <ShoppingCart className="w-6 h-6" /> Buy Now on Amazon
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Star className="text-yellow-500"/> Key Features
            </h2>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-center gap-3"><Camera className="w-5 h-5 text-blue-500"/> 50MP OIS Triple Rear Camera</li>
              <li className="flex items-center gap-3"><Cpu className="w-5 h-5 text-purple-500"/> 6GB RAM + 128GB Storage</li>
              <li className="flex items-center gap-3"><Shield className="w-5 h-5 text-green-500"/> Gorilla Glass Victus Protection</li>
              <li className="flex items-center gap-3"><Smartphone className="w-5 h-5 text-red-500"/> Samsung AI + Gemini Live</li>
              <li className="flex items-center gap-3 opacity-70">✨ 6 Years OS Upgrades</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-lg prose prose-slate">
            <h2 className="text-2xl font-bold mb-6">Honest Verdict</h2>
            <p className="text-slate-600 leading-relaxed">
              The Galaxy M17 5G is designed for buyers who want long-term value. One of its biggest strengths is Samsung’s software commitment—6 years of updates is rare. 
              The camera performance is stable thanks to OIS, making it perfect for social media.
            </p>
            <p className="text-slate-600 leading-relaxed">
              If your priority is trustworthy brand support, durablity (Victus Glass!), and 5G speed, this is a very smart buy in the mid-range segment.
            </p>
          </div>
        </div>

        <footer className="text-center text-slate-400 text-sm">
          Affiliate Disclosure: This page may contain affiliate links. We may earn a commission at no extra cost to you.
        </footer>
      </div>
    </motion.div>
  );
}
