import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, ShieldCheck, Zap, Heart, Droplets, CheckCircle2 } from 'lucide-react';

export default function ProstaViveReview() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-[#f8fafc] min-h-screen text-[#1f2937] font-sans pb-32"
    >
      <header className="bg-white py-6 shadow-md sticky top-0 z-50 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-[#0f766e] flex items-center gap-2">
            <Heart className="w-8 h-8 fill-[#0f766e]" /> ProstaVive
          </Link>
          <a 
            href="https://hop.clickbank.net/?affiliate=aleem4&vendor=provive&pid=20&tid=track" 
            target="_blank" 
            rel="nofollow sponsored" 
            className="bg-[#16a34a] text-white px-6 py-2.5 rounded-xl font-bold hover:bg-[#15803d] transition-all"
          >
            Order Now
          </a>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 mt-12">
        <Link to="/" className="inline-flex items-center text-blue-600 mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Reviews
        </Link>

        {/* Hero Section */}
        <section className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12">
          <div className="md:flex items-center">
            <div className="md:w-1/2 p-8 md:p-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Fast Acting Support For Prostate Health & Strong Flow
              </h1>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                Advanced natural formula designed to support healthy prostate function, comfort, and urinary flow.
              </p>
              <a 
                href="https://hop.clickbank.net/?affiliate=aleem4&vendor=provive&pid=20&tid=track" 
                target="_blank" 
                rel="nofollow sponsored" 
                className="bg-[#16a34a] text-white px-10 py-4 rounded-2xl text-xl font-bold hover:scale-105 shadow-xl transition-all inline-flex items-center gap-3"
              >
                <ShoppingCart className="w-6 h-6" /> Get ProstaVive Today
              </a>
              <div className="flex flex-wrap gap-4 mt-8">
                <Badge text="Natural Formula" />
                <Badge text="Fast Acting" />
                <Badge text="Money Back" />
              </div>
            </div>
            <div className="md:w-1/2 bg-[#ecfeff] p-12 flex justify-center">
              <img 
                src="https://prostavive.org/home-assets/images/bottles.png" 
                className="w-full max-w-sm drop-shadow-2xl" 
                alt="ProstaVive Bottles" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Feature 
            icon={<ShieldCheck className="text-[#0f766e]"/>} 
            title="Healthy Prostate Support" 
            desc="Helps maintain normal prostate wellness and comfort." 
          />
          <Feature 
            icon={<Droplets className="text-blue-500"/>} 
            title="Improved Flow Support" 
            desc="Designed to support smoother urinary flow and daily comfort." 
          />
          <Feature 
            icon={<Zap className="text-yellow-500"/>} 
            title="Natural Ingredients" 
            desc="Formulated with carefully selected wellness-support ingredients." 
          />
        </div>

        {/* Pricing */}
        <div className="bg-[#ecfeff] p-10 md:p-20 rounded-[3rem] mb-20">
          <h2 className="text-4xl font-bold text-center mb-16 underline decoration-[#0f766e] underline-offset-8">Choose Your Package</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <PriceCard 
              bottles="1 Bottle" 
              price="$69" 
              supply="30 Day Supply" 
              link="https://provive.pay.clickbank.net/?cbitems=PROVIVE-001-1&cbfid=57914&cbskin=45218" 
            />
            <PriceCard 
              bottles="3 Bottles" 
              price="$177" 
              supply="90 Day Supply" 
              link="https://provive.pay.clickbank.net/?cbitems=PROVIVE-003-1&cbfid=57914&cbskin=45219" 
              isBest={true}
            />
            <PriceCard 
              bottles="6 Bottles" 
              price="$294" 
              supply="180 Day Supply" 
              link="https://provive.pay.clickbank.net/?cbitems=PROVIVE-006&cbfid=57914&cbskin=45220" 
            />
          </div>
        </div>

        {/* Guarantee */}
        <div className="bg-white p-12 rounded-[2.5rem] shadow-xl flex flex-wrap md:flex-nowrap items-center gap-12 border-2 border-slate-100">
          <img 
            src="https://prostavive.org/home-assets/images/money-back-guarantee.png" 
            className="w-48 mx-auto md:mx-0" 
            alt="Guarantee" 
            referrerPolicy="no-referrer"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">100% Satisfaction Guarantee</h2>
            <p className="text-xl text-slate-500 leading-relaxed">
              Order with confidence. Your purchase is protected by our global refund guarantee policy. If you're not satisfied, we'll make it right.
            </p>
          </div>
        </div>

        <footer className="mt-32 text-center text-slate-400">
          <p className="mb-4 font-bold text-slate-900">© 2026 ProReview Hub - ProstaVive Independent Review</p>
          <div className="text-xs italic leading-relaxed max-w-2xl mx-auto border-t border-slate-200 pt-8">
            Disclaimer: This page is for promotional/affiliate purposes. Individual results may vary. 
            These statements have not been evaluated by the FDA. ProstaVive is a supplement, not a medical treatment.
          </div>
        </footer>
      </div>
    </motion.div>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <div className="bg-slate-50 px-4 py-2 rounded-xl text-sm font-bold border border-slate-100 shadow-sm flex items-center gap-2">
      <CheckCircle2 className="w-4 h-4 text-[#16a34a]" /> {text}
    </div>
  );
}

function Feature({ icon, title, desc }: any) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-50 text-center hover:-translate-y-2 transition-transform">
      <div className="flex justify-center mb-6 scale-150">{icon}</div>
      <h3 className="text-xl font-bold mb-4 text-[#0f766e]">{title}</h3>
      <p className="text-slate-500 font-medium leading-relaxed">{desc}</p>
    </div>
  );
}

function PriceCard({ bottles, price, supply, isBest = false, link }: any) {
  return (
    <div className={`bg-white rounded-3xl p-10 text-center shadow-xl relative overflow-hidden transition-all hover:scale-105 ${isBest ? 'ring-4 ring-[#16a34a]' : ''}`}>
      {isBest && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full bg-[#16a34a] text-white py-2 text-xs font-bold uppercase tracking-widest">
          Recommended
        </div>
      )}
      <div className="pt-4">
        <h3 className="text-2xl font-bold mb-4">{bottles}</h3>
        <div className="text-5xl font-black text-[#16a34a] mb-2">{price}</div>
        <p className="text-slate-400 font-bold text-sm uppercase mb-10">{supply}</p>
        <a 
          href={link} 
          target="_blank" 
          rel="nofollow sponsored" 
          className="bg-[#16a34a] text-white w-full py-4 rounded-xl font-bold text-lg hover:bg-[#15803d] transition-all inline-block shadow-lg"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
}
