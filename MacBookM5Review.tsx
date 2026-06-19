import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, ExternalLink, Battery, Cpu, Monitor, Camera, ShieldCheck, Zap } from 'lucide-react';

export default function MacBookM5Review() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-slate-50 min-h-screen pb-20 font-sans"
    >
      <div className="max-w-4xl mx-auto px-4 pt-12">
        <Link to="/" className="inline-flex items-center text-blue-600 mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Reviews
        </Link>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-slate-900 text-center md:text-left">
            MacBook Air M5 Review: The Smart Fix for Slow, Frustrating Laptops
          </h1>

          <img 
            src="https://m.media-amazon.com/images/I/71f5Eu5lJSL._SL1500_.jpg" 
            className="w-full h-auto rounded-2xl shadow-lg mb-10" 
            alt="MacBook Air M5"
            referrerPolicy="no-referrer"
          />

          <div className="flex justify-center mb-10">
            <a 
              href="https://amzn.to/4uh6dcH" 
              target="_blank" 
              rel="nofollow sponsored noopener" 
              className="bg-[#FF9900] text-black px-10 py-5 text-xl font-bold rounded-2xl shadow-xl hover:-translate-y-1 transition-all flex items-center gap-3"
            >
              <ShoppingCart className="w-6 h-6" /> Buy Now on Amazon
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                If your current laptop freezes during work, drains battery quickly, or struggles with multitasking,
                you already know how expensive a bad laptop can become.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Lost time, stress, delayed work, and poor performance add up fast.
                That is where the new MacBook Air M5 changes the experience completely.
              </p>
            </div>
            <div className="bg-slate-100 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-yellow-500" /> Quick Specs
              </h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-center gap-2 font-medium"><Cpu className="w-4 h-4" /> M5 Chip</li>
                <li className="flex items-center gap-2 font-medium"><Zap className="w-4 h-4" /> 16GB Unified Memory</li>
                <li className="flex items-center gap-2 font-medium">📦 512GB SSD Storage</li>
                <li className="flex items-center gap-2 font-medium"><Monitor className="w-4 h-4" /> 13.6-inch Liquid Retina Display</li>
                <li className="flex items-center gap-2 font-medium"><Camera className="w-4 h-4" /> 12MP Center Stage Camera</li>
                <li className="flex items-center gap-2 font-medium"><ShieldCheck className="w-4 h-4" /> Touch ID Security</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-slate-900">The Problem With Cheap Laptops</h2>
          <p className="text-lg text-slate-700 mb-6">
            Many people buy based only on price. That feels smart at first. Then reality starts:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-slate-700">
            <li className="flex items-center gap-2">❌ Slow boot times</li>
            <li className="flex items-center gap-2">❌ Browser lag</li>
            <li className="flex items-center gap-2">❌ Zoom freezing</li>
            <li className="flex items-center gap-2">❌ Battery anxiety</li>
            <li className="flex items-center gap-2">❌ Weak multitasking</li>
            <li className="flex items-center gap-2">❌ Cheap build quality</li>
          </ul>

          <h2 className="text-3xl font-bold mb-6 text-slate-900">Why MacBook Air M5 Solves This</h2>
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            The M5 chip is designed for modern workflows. AI tools, browser-heavy work, and content creation become smoother. 
            The 16GB unified memory makes a major difference when running multiple applications together.
          </p>

          <img 
            src="https://m.media-amazon.com/images/I/61bwiPRcv2L._SL1500_.jpg" 
            className="w-full h-auto rounded-2xl shadow-lg mb-10" 
            alt="MacBook Lifestyle"
            referrerPolicy="no-referrer"
          />

          <div className="bg-slate-900 text-white p-10 rounded-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Battery Freedom</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Carrying chargers everywhere gets old. MacBook Air is known for efficient battery life that supports all-day productivity.
            </p>
            <a 
              href="https://amzn.to/4uh6dcH" 
              target="_blank" 
              rel="nofollow sponsored noopener" 
              className="bg-[#FF9900] text-black px-8 py-4 text-lg font-bold rounded-xl hover:scale-105 transition-transform inline-flex items-center gap-2"
            >
              Check Latest Price <ExternalLink className="w-5 h-5" />
            </a>
          </div>

          <footer className="mt-16 pt-8 border-t border-slate-200 text-center text-slate-500 text-sm">
            Affiliate Disclosure: This page may contain affiliate links. We may earn a commission at no extra cost to you.
          </footer>
        </div>
      </div>
    </motion.div>
  );
}
