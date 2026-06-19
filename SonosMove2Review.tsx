import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Wifi, Bluetooth, Battery, Volume2, Shield } from 'lucide-react';

export default function SonosMove2Review() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-[#f6f8fb] min-h-screen font-sans text-slate-900"
    >
      <header className="bg-gradient-to-br from-slate-900 to-slate-800 text-white pt-16 pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="inline-flex items-center text-slate-400 mb-8 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Reviews
          </Link>
          <div className="flex flex-wrap items-center gap-12">
            <div className="flex-1 min-w-[300px]">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Sonos Move 2 Review</h1>
              <p className="text-xl text-slate-300 mb-8 max-w-xl">
                Premium wireless portable speaker with WiFi, Bluetooth, Alexa support, and up to 24-hour battery life.
              </p>
              <a 
                href="https://amzn.to/49ODhR5" 
                target="_blank" 
                className="bg-orange-500 text-black px-10 py-4 rounded-xl text-lg font-bold shadow-xl hover:scale-105 transition-all inline-block"
              >
                Buy on Amazon
              </a>
            </div>
            <div className="flex-1 flex justify-center">
              <img 
                src="https://m.media-amazon.com/images/I/71khoXVhFiL._SL1500_.jpg" 
                className="w-full max-w-md rounded-3xl shadow-2xl bg-white p-8" 
                alt="Sonos Move 2" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 -mt-12 pb-20">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <StatCard icon={<Volume2/>} title="Stereo Sound" desc="Dual tweeters for immersive audio." />
          <StatCard icon={<Battery/>} title="24-Hour Battery" desc="Listen all day without the dock." />
          <StatCard icon={<Wifi/>} title="WiFi + BT" desc="Seamless connectivity everywhere." />
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Consider Sonos Move 2?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-green-700 mb-4">Pros</h3>
                <ul className="space-y-2 text-green-800">
                  <li>✨ Rich premium audio</li>
                  <li>🔋 24-hour battery life</li>
                  <li>📶 Bluetooth + WiFi support</li>
                  <li>🗣️ Alexa voice assistant built-in</li>
                  <li>🌦️ Weather resistant (IP56)</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-orange-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-orange-700 mb-4">Considerations</h3>
                <ul className="space-y-2 text-orange-800">
                  <li>⚖️ Heavier than ultra-portables</li>
                  <li>💰 Premium pricing segment</li>
                  <li>🔗 Best in Sonos ecosystem</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          <div className="bg-slate-900 text-white p-6 rounded-2xl text-center shadow-lg">
            <Shield className="mx-auto mb-2 text-orange-500" />
            <h4 className="font-bold">IP56</h4>
            <p className="text-xs text-slate-400">Weather Proof</p>
          </div>
          <div className="bg-slate-900 text-white p-6 rounded-2xl text-center shadow-lg">
            <Bluetooth className="mx-auto mb-2 text-blue-500" />
            <h4 className="font-bold">Bluetooth</h4>
            <p className="text-xs text-slate-400">Easy Pair</p>
          </div>
          <div className="bg-slate-900 text-white p-6 rounded-2xl text-center shadow-lg">
            <Battery className="mx-auto mb-2 text-green-500" />
            <h4 className="font-bold">24H</h4>
            <p className="text-xs text-slate-400">Battery Life</p>
          </div>
          <div className="bg-slate-900 text-white p-6 rounded-2xl text-center shadow-lg">
            <Wifi className="mx-auto mb-2 text-purple-500" />
            <h4 className="font-bold">WiFi</h4>
            <p className="text-xs text-slate-400">Lossless Audio</p>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="https://amzn.to/49ODhR5" 
            className="bg-orange-500 text-black px-12 py-5 rounded-2xl text-xl font-bold shadow-2xl hover:scale-105 transition-all inline-block"
          >
            Buy Sonos Move 2 Now
          </a>
        </div>

        <footer className="mt-20 pt-10 border-t border-slate-200 text-center text-slate-400 text-sm">
          Affiliate Disclosure: This page may contain affiliate links. We may earn a commission at no extra cost to you.
        </footer>
      </div>
    </motion.div>
  );
}

function StatCard({ icon, title, desc }: any) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-slate-100">
      <div className="flex justify-center mb-4 text-orange-500">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-500 text-sm">{desc}</p>
    </div>
  );
}
