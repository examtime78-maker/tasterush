import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Heart, Zap, Waves, Settings } from 'lucide-react';

export default function MassageChairReview() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-[#f6f8fb] min-h-screen pb-20 font-sans text-[#111827]"
    >
      <div className="max-w-6xl mx-auto px-4 pt-12">
        <Link to="/" className="inline-flex items-center text-blue-600 mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Reviews
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-[2rem] shadow-xl mb-12">
          <div>
            <span className="inline-block bg-[#ff9900] text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
              Editor's Choice 2026
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Luxury Full Body Massage Chair Review
            </h1>
            <p className="text-lg text-[#4b5563] mb-8">
              Bring spa-level relaxation home with this premium full body massage chair featuring deep tissue massage, recliner comfort, and smart controls.
            </p>
            <div className="text-3xl font-bold text-[#b12704] mb-8">
              Check Latest Price on Amazon
            </div>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://amzn.to/4tFsb86" 
                target="_blank" 
                rel="nofollow sponsored" 
                className="bg-[#ff9900] text-white px-8 py-4 rounded-xl font-bold hover:-translate-y-1 transition-all flex items-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" /> Buy on Amazon
              </a>
              <a 
                href="https://amzn.to/4tFsb86" 
                target="_blank" 
                rel="nofollow sponsored" 
                className="bg-[#232f3e] text-white px-8 py-4 rounded-xl font-bold hover:-translate-y-1 transition-all"
              >
                View Details
              </a>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://m.media-amazon.com/images/I/71IMQG98fJL._SL1500_.jpg" 
              className="w-full h-auto rounded-3xl shadow-2xl" 
              alt="Massage Chair"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <FeatureCard 
            icon={<Heart className="w-6 h-6 text-red-500" />}
            title="Full Body"
            desc="Targets neck, shoulders, back, waist, legs, and feet."
          />
          <FeatureCard 
            icon={<Zap className="w-6 h-6 text-yellow-500" />}
            title="Zero Gravity"
            desc="Reduces spinal pressure and creates a weightless experience."
          />
          <FeatureCard 
            icon={<Waves className="w-6 h-6 text-blue-500" />}
            title="Heat Therapy"
            desc="Helps relax tight muscles and improves comfort."
          />
          <FeatureCard 
            icon={<Settings className="w-6 h-6 text-purple-500" />}
            title="Smart Controls"
            desc="Easy mode switching with multiple preset programs."
          />
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-8">Pros & Cons</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 fill-green-700" /> Pros
              </h3>
              <ul className="space-y-3 text-green-900 font-medium">
                <li>• Full body massage support</li>
                <li>• Premium modern design</li>
                <li>• Comfortable recliner style</li>
                <li>• Great for stress relief</li>
                <li>• Ideal home wellness product</li>
              </ul>
            </div>
            <div className="bg-red-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 fill-red-700" /> Things to Consider
              </h3>
              <ul className="space-y-3 text-red-900 font-medium">
                <li>• Requires space at home</li>
                <li>• Premium investment product</li>
                <li>• May feel strong for first-time users</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#111827] to-[#1f2937] text-white p-12 rounded-[2rem] text-center shadow-2xl">
          <h2 className="text-4xl font-bold mb-6">Ready for Daily Relaxation?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Check latest Amazon pricing, offers, and availability before stock changes.
          </p>
          <a 
            href="https://amzn.to/4tFsb86" 
            className="bg-[#ff9900] text-white px-12 py-5 rounded-2xl text-xl font-bold hover:scale-105 transition-all inline-block"
            target="_blank" 
            rel="nofollow sponsored"
          >
            Check Price on Amazon
          </a>
        </div>

        <footer className="mt-16 text-center text-gray-500 text-sm">
          Affiliate Disclosure: This page may contain affiliate links. We may earn a commission at no extra cost to you.
        </footer>
      </div>
    </motion.div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">{desc}</p>
    </div>
  );
}
