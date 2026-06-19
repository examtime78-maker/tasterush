import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Zap, Info } from 'lucide-react';

export default function PremiumProductReview() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-[#f5f7fb] min-h-screen py-12 px-4 font-sans text-slate-900"
    >
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="inline-flex items-center text-blue-600 mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Reviews
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
          <img 
            src="https://m.media-amazon.com/images/I/71NZHYzkyzL._SL1500_.jpg" 
            className="w-full max-h-[600px] object-cover" 
            alt="Product Review" 
            referrerPolicy="no-referrer"
          />

          <div className="p-8 md:p-16">
            <span className="bg-slate-900 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6 inline-block uppercase tracking-wider">
              Top Recommended Product
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Professional Product Review That Solves Real Buying Problems</h1>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-3xl">
              Not every product deserves your hard-earned money. This deep-dive review helps you cut through the marketing noise and make a smarter decision.
            </p>

            <div className="flex justify-center mb-12">
              <a 
                href="https://amzn.to/4eSVD7c" 
                target="_blank" 
                className="bg-gradient-to-br from-[#FF9900] to-[#ffb84d] text-black px-12 py-5 rounded-2xl text-2xl font-bold shadow-2xl hover:-translate-y-1 transition-all inline-flex items-center gap-3"
              >
                <ShoppingCart className="w-7 h-7" /> Buy Now on Amazon
              </a>
            </div>

            <div className="bg-slate-50 p-10 rounded-[2rem] border-l-8 border-orange-500 mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Info className="text-orange-500"/> The Problem Most Buyers Face
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Many products look great in professional photography but disappoint in real-world use. Poor build quality, weak performance, and zero after-sales support create buyer frustration. We analyze these issues so you don't have to.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why It Stands Out</h2>
                <div className="grid grid-cols-2 gap-4">
                  <Feature title="Premium Build" />
                  <Feature title="Reliable Tech" />
                  <Feature title="User-Friendly" />
                  <Feature title="Value Pick" />
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold border-b-2 border-slate-100 pb-4">Real Review</h2>
                <p className="text-lg text-slate-600 leading-relaxed italic">
                  "When testing this, we looked for long-term durability and practical performance. It excels in day-to-day tasks that often cause cheaper alternatives to fail."
                </p>
              </div>
            </div>

            <div className="text-center pt-8 border-t border-slate-100">
              <a 
                href="https://amzn.to/4eSVD7c" 
                target="_blank" 
                className="text-orange-600 font-bold text-xl hover:underline"
              >
                Check Latest Price & Availability &rarr;
              </a>
            </div>
          </div>
        </div>

        <footer className="text-center text-slate-400 text-sm mt-12 p-8">
          Affiliate Disclosure: This page may contain affiliate links. We may earn a commission from qualifying purchases at no extra cost to you.
        </footer>
      </div>
    </motion.div>
  );
}

function Feature({ title }: { title: string }) {
  return (
    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 font-bold text-center text-sm shadow-sm">
      {title}
    </div>
  );
}
