import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Heart, Sparkles, Award } from 'lucide-react';

export default function OptimumNutritionWheyReview() {
  const images = [
    'https://gymusastore.com/wp-content/uploads/2025/11/Optimum-Nutrition-Gold-Standard-100-Whey-Protein-Powder-Strawberries-and-Cream-1-Pound-1.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Optimum-Nutrition-Gold-Standard-100-Whey-Protein-Powder-Strawberries-and-Cream-1-Pound2.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Optimum-Nutrition-Gold-Standard-100-Whey-Protein-Powder-Strawberries-and-Cream-1-Pound3.jpg',
    'https://gymusastore.com/wp-content/uploads/2025/11/Optimum-Nutrition-Gold-Standard-100-Whey-Protein-Powder-Strawberries-and-Cream-1-Pound4.jpg'
  ];

  const [activeImg, setActiveImg] = useState(images[0]);

  const specs = [
    { label: 'Protein Source', value: 'Whey Protein Isolate Primary Source' },
    { label: 'Protein Per Serving', value: '24g Premium Protein' },
    { label: 'BCAAs Per Serving', value: '5.5g Naturally Occurring' },
    { label: 'Flavor Profile', value: 'Strawberries & Cream (Milkshake Style)' },
    { label: 'Nutrition Facts', value: '120 Calories, 2g Fat, 3g Carbs, 2g Sugar' },
    { label: 'Sizing Option', value: '1 Pound (1 lb) Container' },
    { label: 'Safety Standards', value: 'Third-Party Tested for Banned Substances' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-slate-50 min-h-screen text-slate-950 font-sans pb-32"
    >
      <div className="bg-pink-950 border-b border-pink-905 text-pink-100 text-center py-3 text-xs font-bold px-4 tracking-wide shadow-sm">
        PREMIUM NUTRITION DEAL: Optimum Nutrition 100% Gold Standard Whey protein with naturally occurring BCAAs. Direct Amazon link.
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-12">
        <Link to="/" className="inline-flex items-center text-slate-500 hover:text-slate-950 transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Review Hub
        </Link>

        {/* Product Showcase Container */}
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-slate-100 mb-12">
          <div className="grid md:grid-cols-2 gap-12 p-8 md:p-12 items-start">
            
            {/* Gallery Section */}
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-3xl p-6 flex items-center justify-center border border-slate-100 aspect-square overflow-hidden">
                <img 
                  src={activeImg} 
                  className="max-h-full max-w-full object-contain rounded-2xl duration-305 transition-all hover:scale-105" 
                  alt="Optimum Nutrition Gold Standard Whey Protein Strawberries & Cream" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {images.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImg(img)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden bg-slate-50 p-1 transition-all ${activeImg === img ? 'border-pink-600 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <img src={img} className="w-full h-full object-cover rounded-lg" alt={`ON Whey Thumb ${i+1}`} referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="bg-pink-50 text-pink-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 border border-pink-100">
                  <Award className="w-3.5 h-3.5 text-pink-650" /> Sports Nutrition / Whey Protein
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight">
                Optimum Nutrition <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-705 text-2xl md:text-3xl font-black block mt-1">ON Gold Standard 100% Whey</span>
              </h1>
              <p className="text-slate-650 font-semibold text-md">Strawberries & Cream Flavor (1 lb) — Premium Whey Isolate Core</p>
              
              <div className="flex items-center gap-3">
                <div className="flex text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <span className="text-slate-400 text-sm font-semibold">5.0 (1 Certified Fitness Customer Review)</span>
              </div>

              <div className="py-2 border-y border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-slate-400 text-lg line-through font-medium">$24.89</span>
                  <span className="text-3xl font-black text-rose-600">$16.61</span>
                  <span className="text-xs bg-red-100 text-red-800 font-bold px-2 py-0.5 rounded-md ml-2 font-semibold">33% OFF</span>
                </div>
                <span className="text-slate-400 text-xs font-medium block mt-1">Free Delivery & Fast Shipping Slots Direct from Amazon</span>
              </div>

              <p className="text-slate-655 leading-relaxed text-md">
                Fuel your fitness journey with <strong>Optimum Nutrition Gold Standard 100% Whey – Strawberries & Cream</strong>, one of the world’s most trusted protein powders for muscle recovery, lean muscle support, and daily protein intake. Every scoop delivers <strong>24g of premium whey protein</strong> and <strong>5.5g naturally occurring BCAAs</strong> to help support muscle growth, recovery, endurance, and performance.
              </p>

              <div className="pt-4">
                <div className="flex flex-col gap-3">
                  <a 
                    href="https://amzn.to/4fHMi2a" 
                    target="_blank" 
                    rel="nofollow sponsored noopener" 
                    className="bg-gradient-to-r from-pink-650 to-pink-500 hover:from-pink-700 hover:to-pink-600 text-white font-bold text-center px-10 py-4.5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-lg"
                  >
                    <ShoppingCart className="w-5 h-5" /> Buy on Amazon Now
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Detailed Spec Panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          <div className="bg-slate-900 text-white rounded-[2rem] p-8 md:p-10 shadow-lg space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3">
              <Sparkles className="text-pink-400" /> Key Premium Advantages
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-pink-450 shrink-0 text-amber-300 font-bold">✓</div>
                <div>
                  <h4 className="font-bold">24g Pure Whey Protein</h4>
                  <p className="text-slate-400 text-sm">Primarily formulated using Whey Protein Isolates (WPI), optimized to filter out excess sugar, fat, and carbohydrates for rapid lean muscle absorption.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-pink-450 shrink-0 text-amber-300 font-bold">✓</div>
                <div>
                  <h4 className="font-bold">5.5g Naturally Occurring BCAAs</h4>
                  <p className="text-slate-400 text-sm">Enhances cellular-level workout recovery speed while lowering overall physical fatigue and preventing post-workout muscle soreness.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-pink-450 shrink-0 text-amber-300 font-bold">✓</div>
                <div>
                  <h4 className="font-bold">Third-Party Banned Substance Core Testing</h4>
                  <p className="text-slate-400 text-sm">Every batch undergoes rigorous quality-assurance checkpoints to maintain safety specifications and trust standards across elite athletic profiles.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-850">
                <ShieldCheck className="text-slate-700" /> Supplement Fact Indicators
              </h2>
              <div className="grid grid-cols-1 gap-y-3 font-semibold text-xs text-slate-650">
                {specs.map((item, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-slate-50 last:border-0 font-sans">
                    <span className="text-slate-400">{item.label}</span>
                    <span className="text-slate-900 font-bold text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Preparation Directions Panel */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-850">
                <Heart className="text-pink-500 w-5 h-5" /> Recommended Supplementation
              </h2>
              <ol className="list-decimal list-inside space-y-3 text-slate-650 text-sm font-semibold">
                <li>Add exactly <strong className="text-slate-900 font-bold">1 heaping scoop (~31g)</strong> into 6–8 oz of ice-cold water or milk.</li>
                <li>Secure your blender or shaker and agitate for approximately <strong className="text-slate-900 font-bold">30 seconds</strong>.</li>
                <li>Consume post-workout, between key meals, or anytime your nutrition plan requires extra premium protein.</li>
              </ol>
            </div>
          </div>

        </div>

        {/* Brand Authenticity & Taste Note */}
        <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-lg text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            A Strawberry Milkshake Taste Without the Guilt
          </h2>
          <p className="text-slate-655 max-w-2xl mx-auto leading-relaxed text-md">
            Say goodbye to chalky protein shakes. The Strawberries & Cream flavor delivers a smooth, creamy strawberry milkshake taste while maintaining a lean nutritional profile perfect for fitness-focused lifestyles. Mixes easily with water for a light shake or blend with milk for a richer dessert-style protein drink.
          </p>
        </div>

      </div>
    </motion.div>
  );
}
