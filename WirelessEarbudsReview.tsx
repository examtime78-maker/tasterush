import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Headset, Zap, Star, ShieldCheck } from 'lucide-react';

export default function WirelessEarbudsReview() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-[#f5f5f5] min-h-screen py-12 px-4 font-sans text-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <Link to="/" className="inline-flex items-center text-blue-600 mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Reviews
        </Link>
        
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 p-10 flex justify-center bg-white">
            <img 
              src="https://m.media-amazon.com/images/I/51n+XKUSplL._SL1200_.jpg" 
              className="w-full max-w-md h-auto rounded-2xl shadow-lg" 
              alt="Wireless Earbuds" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full lg:w-1/2 p-10 md:p-16">
            <h1 className="text-4xl font-bold mb-4 leading-tight">Wireless Earbuds Review: Budget Amazon Bestseller Worth Buying?</h1>
            <div className="flex items-center gap-2 text-orange-500 text-2xl mb-6">
              <Star className="fill-orange-500" /><Star className="fill-orange-500" /><Star className="fill-orange-500" /><Star className="fill-orange-500" /><Star className="fill-orange-500/30" />
              <span className="text-slate-500 text-sm font-bold ml-2">4.5/5 User Rating</span>
            </div>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Looking for affordable wireless earbuds for music, calls, and workouts? These Amazon bestselling Bluetooth earbuds offer strong battery life, comfortable in-ear fit, and stable connectivity.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center gap-3">
                <Zap className="text-blue-500 w-5 h-5"/>
                <span className="font-bold text-sm">Deep Bass</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center gap-3">
                <ShieldCheck className="text-green-500 w-5 h-5"/>
                <span className="font-bold text-sm">IPX5 Rated</span>
              </div>
            </div>
            <a 
              href="https://amzn.to/4uT1dej" 
              target="_blank" 
              className="bg-[#ff9900] text-black px-12 py-4 rounded-xl font-bold hover:scale-105 transition-all inline-flex items-center gap-2 shadow-lg"
            >
              <ShoppingCart className="w-5 h-5" /> Check Price on Amazon
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12 mb-12">
          <div className="bg-white p-10 rounded-3xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Key Highlights</h2>
            <ul className="space-y-4 text-slate-600">
              <li className="flex gap-2">✅ True wireless Bluetooth connectivity</li>
              <li className="flex gap-2">✅ Compact charging case for easy carry</li>
              <li className="flex gap-2">✅ Deep bass audio tuning for music lovers</li>
              <li className="flex gap-2">✅ Built-in mic for clear calling</li>
              <li className="flex gap-2">✅ Smart touch controls</li>
            </ul>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">The Verdict</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              For buyers searching for high-conversion tech items, these earmuds are a strong pick. They solve clear everyday needs like wire-free music and portable calls.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium">
              Great for students, commuters, and fitness enthusiasts on a budget.
            </p>
          </div>
        </div>

        <footer className="text-center text-slate-400 text-sm mt-20 p-8 border-t border-slate-200">
          Affiliate Disclosure: This page may contain affiliate links. We may earn a commission at no extra cost to you.
        </footer>
      </div>
    </motion.div>
  );
}
