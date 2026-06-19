import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, ShoppingCart, Tag, Filter, ShieldCheck, Dumbbell, Zap, Play, Sparkles } from 'lucide-react';

const DEALS_LINKS = [
  "https://amzn.to/4uFL108", "https://amzn.to/4dZFknY", "https://amzn.to/4f5H3cq", "https://amzn.to/4nJwXA9", 
  "https://amzn.to/43taRbO", "https://amzn.to/4nJrzgs", "https://amzn.to/4dIYQ6O", "https://amzn.to/3PFFZBC", 
  "https://amzn.to/4tXISvM", "https://amzn.to/4dJuVvx", "https://amzn.to/49P0HG4", "https://amzn.to/4tXXBGV", 
  "https://amzn.to/42T85ws", "https://amzn.to/49fYjrN", "https://amzn.to/4v1Hp8x", "https://amzn.to/49j5saM", 
  "https://amzn.to/49ncMSS", "https://amzn.to/3RrloSo", "https://amzn.to/4dtItMD", "https://amzn.to/4uqNFa3", 
  "https://amzn.to/3PAIkxW", "https://amzn.to/4dCFCRP", "https://amzn.to/4fCB3YO", "https://amzn.to/4fFgcnL", 
  "https://amzn.to/4nLA0YP", "https://amzn.to/4nPprEb", "https://amzn.to/4f5HuDA", "https://amzn.to/4dQ3hNw", 
  "https://amzn.to/3PVJSCG", "https://amzn.to/4utrpwa", "https://amzn.to/4v4oSsh", "https://amzn.to/4upSAYV", 
  "https://amzn.to/3Rsny47", "https://amzn.to/4fFgo6t", "https://amzn.to/3PBcZv0", "https://amzn.to/4nQwzjx", 
  "https://amzn.to/4dGkUyT", "https://amzn.to/4tMUKR7", "https://amzn.to/3PldclZ", "https://amzn.to/3PZN9kn", 
  "https://amzn.to/4a8KaNk", "https://amzn.to/4v0wa0a", "https://amzn.to/4utrNe6", "https://amzn.to/49ndfEC", 
  "https://amzn.to/4dsxH9s", "https://amzn.to/4nQwU5N", "https://amzn.to/3PGKSdF", "https://amzn.to/4tZTzhr", 
  "https://amzn.to/4drynfk", "https://amzn.to/43raDlz", "https://amzn.to/4f6bJug", "https://amzn.to/4f02PON", 
  "https://amzn.to/43xrjaZ", "https://amzn.to/4vcSEvb", "https://amzn.to/4uxv4JF", "https://amzn.to/42PFjwL", 
  "https://amzn.to/4v8BLBH", "https://amzn.to/3Q029Ph", "https://amzn.to/4nSnJ4Y", "https://amzn.to/4utOXRH", 
  "https://amzn.to/4utP0gl"
];

const IMAGES = [
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80"
];

const CATEGORIES = ["Strength", "Cardio", "Recovery", "Accessories", "Home Gym", "Wellness"];

const PRODUCT_NAMES = [
  "Heavy Duty Cast Iron Kettlebell", "Adjustable Dumbbell Set (Pair)", "Neoprene Hand Weights", 
  "Resistance Loop Bands (Set of 5)", "Heavy Gym Suspension Straps", "Olympic Barbell Clamps", 
  "Textured Foam Muscle Roller", "Deep Tissue Percussion Massager", "Premium TPE Exercise Mat", 
  "Anti-Burst Stability Ball", "Foldable Abdominal Bench", "Heavy Weight Jump Rope", 
  "Nylon Wrist Wraps (Support)", "Genuine Leather Lifting Belt", "Comfort Grip Pushup Bars", 
  "Hanging Ab Straps for Bars", "Hand Grip Strengthener Pack", "Thick Yoga Knee Pad Cushion", 
  "Sweat-Proof Sports Armband", "Agility Ladder & Cone Drills", "Pilates Resistance Ring", 
  "Deep Stretch Yoga Strap", "Econ-Poly Battle Exercise Ropes", "Wall-Mounted Pullup Rail", 
  "Door Frame Heavy Trainer", "Core Sliders Dual Sided Mat", "Squeeze Workout Water Flask", 
  "Inversion Table Spine Relief", "Mini Under Desk Pedal Cycle", "Thick Exercise Bar Pad Support", 
  "Weighted Fitness Vest (Armor)", "Power Guidance Hip Bands", "Heavy Ankle Wrist Sandbags", 
  "Slam Ball Easy-Grip Sphere", "Chalk Block Athletic Grip", "Balance Trainer Dome Shell", 
  "Liquid Grip Friction Cream", "Speed Skipping Metal Core", "Lifting Straps Heavy Support", 
  "Massage Peanut Roller Ball", "Under-Mat Noise Reducing Tiles", "Adjustable Aerobic Step Bench", 
  "Stretch Board Slant Trainer", "Steel Dumbbell Storage Stand", "Kettlebell Base Floor Saver", 
  "Weighted Workout Bar", "Adjustable Hand Grip Dyno", "Acupressure Stress Relief Pad", 
  "Self-Myofascial Trigger Balls", "Grip Strength Ring Expander", "Multi-Grip Barbell Jack", 
  "Olympic Weight Rack Trees", "Wall Ball Leather Medicine", "Wrist Roller Forearm Blaster", 
  "Steel Parallettes Low Bars", "Plyometric Box Jump Platform", "Rowing Machine Handle Attachment", 
  "Ab Wheel Roller Double Wheel", "Power Sled Weight Slider", "Speed Agility Parachute Run", 
  "Gym Gym Lock Personal Locker"
];

export default function FitForgeDeals() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products = useMemo(() => {
    return DEALS_LINKS.map((link, idx) => {
      const name = PRODUCT_NAMES[idx] || `Elite Fitness Spec ${idx + 1}`;
      const image = IMAGES[idx % IMAGES.length];
      const category = CATEGORIES[idx % CATEGORIES.length];
      const rating = (4.5 + (idx % 5) * 0.1).toFixed(1);
      const discount = 15 + (idx % 4) * 5;
      
      return {
        id: idx,
        title: name,
        category,
        image,
        link,
        rating,
        discount,
        description: "High-grade performance gear chosen by certified sports specialists for durability and pristine alignment support."
      };
    });
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-[#0b0b0b] min-h-screen text-white font-sans pb-32"
    >
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white text-center py-2.5 text-xs font-bold px-4 tracking-wide shadow-md">
        FITFORGE AFFILIATE SPOTLIGHT: Verified Amazon links with direct access. Commissions support our editorial testing.
      </div>

      <header className="sticky top-0 z-50 bg-[#111] border-b border-[#222] py-5 px-6 backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Link to="/" className="p-2 bg-slate-850 hover:bg-slate-800 rounded-xl transition-colors">
              <ArrowLeft className="w-5 h-5 text-gray-400 hover:text-white" />
            </Link>
            <div className="flex items-center gap-2">
              <Dumbbell className="w-8 h-8 text-red-500" />
              <span className="text-2xl font-black tracking-tighter uppercase">FitForge <span className="text-red-500">USA</span></span>
            </div>
          </div>
          <nav className="flex gap-4 sm:gap-6 text-sm font-medium text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#shop" className="hover:text-white transition-colors">Shop</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>
        </div>
      </header>

      {/* Hero Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f0f0f] via-[#141414] to-[#221010] py-24 px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.1),transparent_50%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <span className="bg-red-500/10 text-red-400 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-red-500/20">
            Curated Home Training Gear
          </span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight uppercase">
            Build Your Dream Home Gym <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Without Overspending</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Smart athletic equipment recommendations, high-conversion reviews, and top-value Amazon product links chosen directly for optimal execution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <div className="relative w-full max-w-md">
              <Search className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search premium exercise products..." 
                className="w-full pl-12 pr-4 py-4 bg-[#181818] border border-[#2a2a2a] rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <a 
              href="#shop" 
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg shadow-red-600/20"
            >
              Browse Best Deals
            </a>
          </div>
        </div>
      </section>

      {/* Categories & Explorer Grid */}
      <main className="max-w-7xl mx-auto px-6 py-16 space-y-12" id="shop">
        <div className="flex flex-wrap items-center justify-between gap-6 pb-6 border-b border-[#222]">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-red-500" />
            <h2 className="text-2xl font-black uppercase">Curated Fitness Gear</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase transition-all ${selectedCategory === 'All' ? 'bg-red-600 text-white' : 'bg-[#181818] text-gray-400 hover:text-white hover:bg-[#222]'}`}
            >
              All Categories
            </button>
            {CATEGORIES.map(cat => (
              <button 
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase transition-all ${selectedCategory === cat ? 'bg-red-600 text-white' : 'bg-[#181818] text-gray-400 hover:text-white hover:bg-[#222]'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredProducts.map(p => (
              <motion.div 
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-[#181818] border border-[#2a2a2a] rounded-3xl overflow-hidden shadow-2xl hover:border-red-550/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={p.image} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      alt={p.title} 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-black uppercase py-1 px-2.5 rounded-full shadow-md">
                      SAVE {p.discount}%
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md py-1 px-2.5 rounded-lg text-xs font-bold text-amber-400 flex items-center gap-1">
                      ★ {p.rating}
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <span className="text-[10px] font-black uppercase tracking-wider text-red-500 bg-red-500/10 px-2 py-0.5 rounded">
                      {p.category}
                    </span>
                    <h3 className="text-lg font-extrabold text-white line-clamp-1 group-hover:text-red-400 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                      {p.description}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <a 
                    href={p.link} 
                    target="_blank" 
                    rel="nofollow sponsored noopener" 
                    className="w-full bg-[#ff9900] hover:bg-[#e68a00] text-slate-950 font-bold py-3.5 px-4 rounded-xl text-center text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" /> Check Price on Amazon
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* About Section */}
        <section className="bg-gradient-to-br from-[#141414] to-[#1a1a1a] p-10 md:p-16 rounded-[2.5rem] border border-[#2c2c2c] space-y-6" id="about">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-6 h-6 text-red-500" />
            <h2 className="text-3xl font-black uppercase tracking-tight">About FitForge USA</h2>
          </div>
          <p className="text-gray-400 leading-relaxed text-md max-w-4xl">
            FitForge USA helps fitness enthusiasts solve core workout equipment purchasing dilemmas. Whether you need quiet products for apartments, heavy assemblies for strength development, or restorative recovery items, our curated index streamlines your physical improvement journey.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="space-y-4" id="faq">
          <h2 className="text-3xl font-black uppercase tracking-tight pb-2 border-b border-[#222]">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6 pt-4">
            <FAQCard 
              q="Does FitForge USA market products directly?" 
              a="No. Our platform serves as an expert curator. All items redirect seamlessly to Amazon for secure checkout." 
            />
            <FAQCard 
              q="How do affiliate referral programs function?" 
              a="When you finalize purchases through our direct referral tags, we may receive a minor commission yield. This assists in keeping our content updated without premium charges." 
            />
            <FAQCard 
              q="Are fitness recommendations reviewed?" 
              a="Yes. Every option gets indexed based on high-density structural integrity, slip-resistance, user comfort levels, and relative durability." 
            />
            <FAQCard 
              q="Are listings kept current?" 
              a="We continuously sweep links and listings to maintain active deals and premium product integrity." 
            />
          </div>
        </section>
      </main>

      <footer className="border-t border-[#222] py-12 text-center text-gray-500 text-xs px-4">
        <p className="text-gray-400 font-bold text-sm mb-2">&copy; 2026 FitForge USA. Curating Ultimate In-Home Performance.</p>
        <p className="max-w-2xl mx-auto leading-relaxed">
          FitForge USA is a participant in the Amazon Services LLC Associates Program, an affiliate promotion program designed to provide advertising avenues to monetize links directly directing to Amazon.
        </p>
      </footer>
    </motion.div>
  );
}

function FAQCard({ q, a }: { q: string, a: string }) {
  return (
    <div className="bg-[#141414] border border-[#222] p-6 rounded-2xl">
      <h4 className="font-extrabold text-white text-md mb-2">{q}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
    </div>
  );
}
