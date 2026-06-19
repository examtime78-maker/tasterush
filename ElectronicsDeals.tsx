import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Tag, Zap, Monitor, Smartphone, Camera } from 'lucide-react';

export default function ElectronicsDeals() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-slate-50 min-h-screen py-12 px-4 font-sans"
    >
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center text-blue-600 mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Reviews
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-slate-100 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500" />
          
          <img 
            src="https://m.media-amazon.com/images/G/31/img25/Camera/shutterbug/722x496._CB786846700_.jpg" 
            className="w-full h-auto rounded-2xl mb-10 shadow-lg border border-slate-100" 
            alt="Electronics Deals" 
            referrerPolicy="no-referrer"
          />

          <h1 className="text-4xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
            <Tag className="text-orange-500" /> Top Electronics Deals
          </h1>
          <p className="text-lg text-slate-500 mb-10 max-w-lg mx-auto leading-relaxed">
            Discover premium electronics, gadgets, cameras, laptops, and top Amazon offers. Expertly curated for performance and value.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            <DealCategory icon={<Monitor/>} label="Laptops" />
            <DealCategory icon={<Smartphone/>} label="Mobiles" />
            <DealCategory icon={<Camera/>} label="Cameras" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://amzn.to/4wvxI3P" 
              target="_blank" 
              className="bg-[#FFD814] text-slate-900 px-10 py-5 rounded-2xl font-bold text-xl shadow-xl hover:bg-[#F7CA00] transition-all flex items-center justify-center gap-2"
            >
              View Electronics
            </a>
            <a 
              href="https://amzn.to/4tIfOIz" 
              target="_blank" 
              className="bg-[#FFA41C] text-slate-900 px-10 py-5 rounded-2xl font-bold text-xl shadow-xl hover:bg-[#FF8F00] transition-all flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-6 h-6" /> Buy Now
            </a>
          </div>

          <footer className="mt-16 text-slate-400 text-xs italic">
            Affiliate Disclosure: This page may contain affiliate links. We may earn a commission from qualifying purchases.
          </footer>
        </div>
      </div>
    </motion.div>
  );
}

function DealCategory({ icon, label }: any) {
  return (
    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col items-center gap-2">
      <div className="text-slate-400">{icon}</div>
      <span className="font-bold text-slate-700 text-sm">{label}</span>
    </div>
  );
}
