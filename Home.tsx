import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Laptop, ShoppingBag, Bike, Smartphone, Headphones, Music, Wind, Gamepad, Zap, Star, Heart, Activity, Dumbbell, Flame, Award, Candy, Brain, Droplet, Wheat, VolumeX } from 'lucide-react';

const REVIEWS = [
  { id: 'macbook-m5', title: 'MacBook Air M5', category: 'Tech', icon: <Laptop/>, img: 'https://m.media-amazon.com/images/I/71f5Eu5lJSL._SL1500_.jpg' },
  { id: 'massage-chair', title: 'Luxury Massage Chair', category: 'Lifestyle', icon: <ShoppingBag/>, img: 'https://m.media-amazon.com/images/I/71IMQG98fJL._SL1500_.jpg' },
  { id: 'bajaj-chetak', title: 'Bajaj Chetak E-Scooter', category: 'Auto', icon: <Bike/>, img: 'https://m.media-amazon.com/images/I/41vqlP+KfJL._SL1000_.jpg' },
  { id: 'samsung-m17', title: 'Samsung Galaxy M17', category: 'Mobile', icon: <Smartphone/>, img: 'https://m.media-amazon.com/images/I/7101h6htEgL._SL1500_.jpg' },
  { id: 'sonos-move-2', title: 'Sonos Move 2', category: 'Audio', icon: <Music/>, img: 'https://m.media-amazon.com/images/I/71khoXVhFiL._SL1500_.jpg' },
  { id: 'hitachi-ac', title: 'Hitachi 5-Star AC', category: 'Appliances', icon: <Wind/>, img: 'https://m.media-amazon.com/images/I/51ryyW4zORL._SL1500_.jpg' },
  { id: 'ps5-stand', title: 'Voltmi PS5 Stand', category: 'Gaming', icon: <Gamepad/>, img: 'https://m.media-amazon.com/images/I/61OgjFdK47L._SL1500_.jpg' },
  { id: 'wireless-earbuds', title: 'Amazon Budget Buds', category: 'Audio', icon: <Headphones/>, img: 'https://m.media-amazon.com/images/I/51n+XKUSplL._SL1200_.jpg' },
  { id: 'brain-song', title: 'Brain Song Original', category: 'Wellness', icon: <Zap/>, img: 'https://brainsongoriginal.com/std/images/prd-img-mini.png' },
  { id: 'electronics-deals', title: 'Top Tech Deals', category: 'Deals', icon: <Star/>, img: 'https://m.media-amazon.com/images/G/31/img25/Camera/shutterbug/722x496._CB786846700_.jpg' },
  { id: 'premium-pick', title: 'Professional Choice', category: 'Premium', icon: <ShoppingBag/>, img: 'https://m.media-amazon.com/images/I/71NZHYzkyzL._SL1500_.jpg' },
  { id: 'prostavive', title: 'ProstaVive Support', category: 'Health', icon: <Heart/>, img: 'https://prostavive.org/home-assets/images/bottles.png' },
  { id: 'squat-wedge', title: 'Squat Wedge Blocks', category: 'Fitness', icon: <Activity/>, img: 'https://gymusastore.com/wp-content/uploads/2026/02/Squat-Wedge-Blocks-Set-of-2-%E2%80%93-Non-Slip-Slant-Boards1.jpg' },
  { id: 'kaged-protein', title: 'Kaged Re-Kaged Protein', category: 'Sports Nutrition', icon: <Activity/>, img: 'https://gymusastore.com/wp-content/uploads/2026/02/Kaged-Post-Workout-Protein-Powder-Orange-Cream-1.jpg' },
  { id: 'yoga-blocks', title: 'Yoga Blocks EVA Foam', category: 'Fitness & Wellness', icon: <Heart/>, img: 'https://gymusastore.com/wp-content/uploads/2026/02/Yoga-Blocks-2-Pcs1-1.jpg' },
  { id: 'exercise-bike', title: 'Foldable Exercise Bike', category: 'Cardio Fitness', icon: <Bike/>, img: 'https://gymusastore.com/wp-content/uploads/2026/02/Foldable-Exercise-Bike-Multifunctional-Indoor-Stationary-Bike1.jpg' },
  { id: 'fitforge', title: 'FitForge USA Deals', category: 'Fitness Superstore', icon: <Dumbbell/>, img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80' },
  { id: 'legion-protein', title: 'Legion Whey+ Protein', category: 'Sports Nutrition', icon: <Zap/>, img: 'https://gymusastore.com/wp-content/uploads/2026/02/LEGION-Whey-Protein-Whey-Isolate1.jpg' },
  { id: 'transparent-labs', title: 'Transparent Labs Bulk', category: 'Pre-Workout Powder', icon: <Flame/>, img: 'https://gymusastore.com/wp-content/uploads/2026/02/Transparent-Labs-Bulk-Pre-Workout-Powder1.jpg' },
  { id: 'transparent-labs-whey', title: 'Transparent Labs Whey', category: 'Sports Nutrition', icon: <Award/>, img: 'https://gymusastore.com/wp-content/uploads/2026/02/Transparent-Labs-Grass-Fed-Whey-Protein-Isolate1-2.jpg' },
  { id: 'transparent-labs-joint', title: 'Transparent Labs Joint Support', category: 'Health & Joint Mobility', icon: <Activity/>, img: 'https://gymusastore.com/wp-content/uploads/2026/02/Transparent-Labs-Joint-Support1.jpg' },
  { id: 'transparent-labs-beef', title: 'Transparent Labs Beef Isolate', category: 'Sports Nutrition', icon: <Award/>, img: 'https://gymusastore.com/wp-content/uploads/2026/02/Transparent-Labs-Grass-Fed-Beef-Isolate-Protein-Powder1.jpg' },
  { id: 'multi-collagen', title: 'Multi Collagen Protein (2 Lbs)', category: 'Sports Nutrition', icon: <Heart/>, img: 'https://gymusastore.com/wp-content/uploads/2026/02/Multi-Collagen-Protein-Powder-2-Pounds1.jpg' },
  { id: 'nordic-omega', title: 'Nordic Naturals Omega', category: 'Sports Nutrition', icon: <Award/>, img: 'https://gymusastore.com/wp-content/uploads/2026/02/Nordic-Naturals-Ultimate-Omega-2X-Lemon-Flavor1.jpg' },
  { id: 'schwinn-airdyne', title: 'Schwinn Airdyne AD7', category: 'Premium Air Bike', icon: <Bike/>, img: 'https://gymusastore.com/wp-content/uploads/2026/01/Schwinn-Airdyne-Bike-Series1.jpg' },
  { id: 'yosuda-rower', title: 'YOSUDA R2 Rowing Machine', category: 'Rowing Machines', icon: <Bike/>, img: 'https://gymusastore.com/wp-content/uploads/2026/01/YOSUDA-R2-Rowing-Machine-for-Home1.jpg' },
  { id: 'sunny-rower', title: 'Sunny Flip & Fold Rower', category: 'Rowing Machines', icon: <Bike/>, img: 'https://gymusastore.com/wp-content/uploads/2026/01/Sunny-Health-Fitness-Flip-Foldable-Rowing-Machine1.jpg' },
  { id: 'water-rower', title: 'WaterRower Exercise Machine', category: 'Premium Rowing Machine', icon: <Bike/>, img: 'https://gymusastore.com/wp-content/uploads/2026/01/WaterRower-Water-Rower-Exercise-Machine6.jpg' },
  { id: 'cap-barbell', title: 'CAP Barbell Olympic Plate Set', category: 'Weight Plates', icon: <Dumbbell/>, img: 'https://gymusastore.com/wp-content/uploads/2026/01/CAP-Barbell-2-Inch-Olympic-Bumper-Plate-Weight-Set-with-6-Post-Rack1-1.jpg' },
  { id: 'cap-weight-set', title: 'CAP Barbell Olympic Weight Set', category: 'Weight Plates & Barbells', icon: <Dumbbell/>, img: 'https://gymusastore.com/wp-content/uploads/2026/01/CAP-Barbell-Olympic-Weight-Set1.jpg' },
  { id: 'flybird-bench', title: 'FLYBIRD Adjustable Bench', category: 'Adjustable Weight Bench', icon: <Dumbbell/>, img: 'https://gymusastore.com/wp-content/uploads/2026/01/FLYBIRD-Adjustable-Weight-Bench-Fits-up-to-651.jpg' },
  { id: 'foam-roller', title: 'Black Mountain Foam Roller', category: 'Recovery & Mobility', icon: <Heart/>, img: 'https://gymusastore.com/wp-content/uploads/2025/11/Black-Mountain-Products-High-Density-Extra-Firm-Foam-Roller-1.jpg' },
  { id: 'dr-berg-c', title: 'Dr. Berg Chewable Vitamin C', category: 'Immune Support', icon: <Heart/>, img: 'https://gymusastore.com/wp-content/uploads/2025/11/Dr.-Berg-Chewable-Vitamin-C-Complex-1.jpg' },
  { id: 'muscletech-bcaa', title: 'MuscleTech BCAA Powder', category: 'Amino Acids & Recovery', icon: <Flame/>, img: 'https://gymusastore.com/wp-content/uploads/2025/11/MuscleTech-BCAA-Powder-for-Men-Women-Strawberry-Watermelon-Amino-Acids-1.jpg' },
  { id: 'nutricost-eaa', title: 'Nutricost EAA Powder', category: 'EAA / Performance Recovery', icon: <Flame/>, img: 'https://gymusastore.com/wp-content/uploads/2025/11/Nutricost-EAA-Powder-30-Servings-Fruit-Punch-Essential-Amino-Acids-Non-GMO-1.jpg' },
  { id: 'under-desk-elliptical', title: 'Under Desk Seated Elliptical', category: 'Cardio & Home Fitness', icon: <Bike/>, img: 'https://gymusastore.com/wp-content/uploads/2025/11/Under-Desk-Elliptical-Machine-Electric-Seated-Pedal-Exerciser-1.jpg' },
  { id: 'stair-stepper', title: 'Compact Folding Stair Stepper', category: 'Cardio & Home Gym', icon: <Dumbbell/>, img: 'https://gymusastore.com/wp-content/uploads/2025/11/Stair-Stepper-for-Home-Gym-Exercise-Compact-Folding-1.jpg' },
  { id: 'stair-stepper-350', title: 'Stair Stepper 350 lbs Capacity', category: 'Cardio & Home Gym', icon: <Dumbbell/>, img: 'https://gymusastore.com/wp-content/uploads/2025/11/Stair-Stepper-for-Home-Gym-350lbs-Stepper-Climber-Machine-1.jpg' },
  { id: 'olympic-barbell', title: '7FT Olympic Barbell', category: 'Weight Plates & Barbells', icon: <Dumbbell/>, img: 'https://gymusastore.com/wp-content/uploads/2025/11/7FT-Olympic-Barbell-for-Weightlifting-and-Power-Lifting-1.jpg' },
  { id: 'optimum-nutrition-whey', title: 'ON Gold Standard Whey', category: 'Sports Nutrition', icon: <Flame/>, img: 'https://gymusastore.com/wp-content/uploads/2025/11/Optimum-Nutrition-Gold-Standard-100-Whey-Protein-Powder-Strawberries-and-Cream-1-Pound-1.jpg' },
  { id: 'optimum-nutrition-creatine', title: 'ON Micronized Creatine', category: 'Amino Acids & Recovery', icon: <Flame/>, img: 'https://gymusastore.com/wp-content/uploads/2025/11/Optimum-Nutrition-Micronized-Creatine-Monohydrate-Powder-1.jpg' },
  { id: 'schiek-gloves-710', title: 'Schiek Model 710 Gloves', category: 'Gym Accessories & Gear', icon: <Dumbbell/>, img: 'https://gymusastore.com/wp-content/uploads/2025/11/Schiek-Model-710-Classic-Training-Lifting-Gloves2.jpg' },
  { id: 'schiek-gloves-540', title: 'Schiek 540 Platinum Gloves', category: 'Gym Accessories & Gear', icon: <Dumbbell/>, img: 'https://gymusastore.com/wp-content/uploads/2025/11/Schiek-540-Platinum-Lifting-Gloves-One-Year-Warranty1.jpg' },
  { id: 'muscletech-peptides', title: 'MuscleTech Peptides Bundle', category: 'Sports Nutrition & Recovery', icon: <Flame/>, img: 'https://gymusastore.com/wp-content/uploads/2025/10/MuscleTech-Peptides-Bundle-1.webp' },
  { id: 'nutricost-isolate', title: 'Nutricost Whey Isolate', category: 'Sports Nutrition & Recovery', icon: <Flame/>, img: 'https://gymusastore.com/wp-content/uploads/2025/10/Nutricost-Whey-Protein-Isolate-Powder-5.webp' },
  { id: 'nature-made-diabetes-pack', title: 'Nature Made Diabetes Pack', category: 'Vitamins & Healthcare', icon: <Heart/>, img: 'https://gymusastore.com/wp-content/uploads/2025/10/nature-made-Diabetes-Health-Pack-Packets-1.webp' },
  { id: 'mikolo-power-cage', title: 'Mikolo 2000LB Power Cage', category: 'Strength & Home Gym', icon: <Dumbbell/>, img: 'https://gymusastore.com/wp-content/uploads/2025/09/Mikolo-Power-Cage-2000LB-Power-Rack-with-Independent-Dual-Pulley-System-1.jpg' },
  { id: 'nordictrack-treadmill', title: 'NordicTrack T Series Treadmill', category: 'Cardio & Home Gym', icon: <Bike/>, img: 'https://gymusastore.com/wp-content/uploads/2025/09/NordicTrac-T-Series-1.jpg' },
  { id: 'stanley-shaker', title: 'Stanley Vitalize Shaker', category: 'Fitness & Hydration', icon: <Flame/>, img: 'https://gymusastore.com/wp-content/uploads/2026/01/STANLEY-Vitalize-Shaker-Bottle-20-oz1.jpg' },
  { id: 'marcy-recumbent-bike', title: 'Marcy Recumbent Exercise Bike', category: 'Cardio & Home Gym', icon: <Bike/>, img: 'https://gymusastore.com/wp-content/uploads/2026/02/Marcy-Magnetic-Recumbent-Exercise-Bike1.jpg' },
  { id: 'transparent-pea-protein', title: 'Transparent Labs Pea Protein', category: 'Sports Nutrition', icon: <Flame/>, img: 'https://gymusastore.com/wp-content/uploads/2026/02/Transparent-Labs-100-Pea-Protein-Powder1.jpg' },
  { id: 'anthonys-collagen', title: 'Anthonys Collagen Peptides', category: 'Sports Nutrition', icon: <Heart/>, img: 'https://gymusastore.com/wp-content/uploads/2026/02/Collagen-Peptide-Powder1.jpg' },
  { id: 'sports-research-collagen', title: 'Sports Research Organic Collagen', category: 'Sports Nutrition', icon: <Award/>, img: 'https://gymusastore.com/wp-content/uploads/2026/02/Sports-Research%C2%AE-Organic-Collagen-Peptides1.jpg' },
  { id: 'arazo-omega', title: 'Arazo Omega-3 Fish Oil', category: 'Heart & Joint Health', icon: <Heart/>, img: 'https://gymusastore.com/wp-content/uploads/2026/02/Arazo-Nutrition-Wild-Caught-Omega-3-Fish-Oil1.jpg' },
  { id: 'concept2-rowerg', title: 'Concept2 Model D Rower', category: 'Rowing Machines', icon: <Activity/>, img: 'https://gymusastore.com/wp-content/uploads/2026/01/Concept2-Model-D-Upgraded-New-Rowing-Machine1.jpg' },
  { id: 'nutricost-multivitamin', title: 'Nutricost Multivitamin with Probiotics', category: 'Vitamins & Health Support', icon: <Heart/>, img: 'https://gymusastore.com/wp-content/uploads/2025/11/Nutricost-Multivitamin-with-Probiotics-120-Vegetarian-Capsules-1.jpg' },
  { id: 'mebak-massage-gun', title: 'Mebak 3 Massage Gun', category: 'Recovery & Mobility', icon: <Activity/>, img: 'https://gymusastore.com/wp-content/uploads/2025/11/Mebak-3-Massage-Gun-Massage-Gun-Deep-Tissue-for-Athletes-1.jpg' },
  { id: 'dmasun-bike', title: 'DMASUN Exercise Bike', category: 'Cardio & Home Gym', icon: <Bike/>, img: 'https://gymusastore.com/wp-content/uploads/2025/11/DMASUN-Exercise-Bike-Magnetic-Resistance-Stationary-Bike-for-Home-with-330-LBS-Capacity-1.jpg' },
  { id: 'bemaxx-gym-mats', title: 'Bemaxx Gym Mats Set', category: 'Gym Equipment & Flooring', icon: <Dumbbell/>, img: 'https://gymusastore.com/wp-content/uploads/2025/11/bemaxx-Gym-Mats-Set-18-pcs-EVA-Interlocking-Foam-Floor-Tiles-12.622x12.622x0.422-18sqft-Protective-Gym-Flooring-1.jpg' },
  { id: 'titan-bench', title: 'Titan Fitness Adjustable Bench', category: 'Strength & Home Gym', icon: <Dumbbell/>, img: 'https://gymusastore.com/wp-content/uploads/2025/11/Titan-Fitness-TITAN-Series-Adjustable-Bench-1.jpg' },
  { id: 'merach-bike', title: 'MERACH Exercise Bike', category: 'Cardio & Home Gym', icon: <Bike/>, img: 'https://gymusastore.com/wp-content/uploads/2025/11/MERACH-Exercise-Bike-Brake-Pad-Stationary-Bike-with-Exclusive-App-Low-Noise-Indoor-Cycling-1.jpg' },
  { id: 'treadmill-3-in-1', title: '3-in-1 Incline Treadmill', category: 'Cardio & Home Gym', icon: <Bike/>, img: 'https://gymusastore.com/wp-content/uploads/2025/11/3-in-1-Treadmill-with-15-Incline-Portable-Treadmills-for-Home-with-Handle1.jpg' },
  { id: 'ritfit-power-cage', title: 'RitFit PPC-P3 Power Cage', category: 'Strength & Home Gym', icon: <Dumbbell/>, img: 'https://gymusastore.com/wp-content/uploads/2025/11/RitFit-Upgraded-PPC-P3-Power-Cage-3-in-1-Home-Gym-with-Aluminum-Pulley-System-1.jpg' },
  { id: 'cap-barbell-rack', title: 'CAP Barbell Power Racks and Attachments', category: 'Strength & Home Gym', icon: <Dumbbell/>, img: 'https://gymusastore.com/wp-content/uploads/2025/11/CAP-Barbell-Power-Racks-and-Attachments1.jpg' },
  { id: 'nugenix-total-t', title: 'Nugenix Total-T Booster', category: 'Male Androgens & Vitality', icon: <Heart/>, img: 'https://gymusastore.com/wp-content/uploads/2025/10/1-1.webp' },
  { id: 'evl-engn', title: 'EVL ENGN Pre-Workout', category: 'Energy & Performance', icon: <Flame/>, img: 'https://gymusastore.com/wp-content/uploads/2025/09/evlnutrition-engn-pre-workout-1.webp' },
  { id: 'allmax-creatine-gummies', title: 'ALLMAX Creatine Gummies', category: 'Sports Nutrition', icon: <Candy/>, img: 'https://gymusastore.com/wp-content/uploads/2025/09/allmax-creatine-gummies-1.webp' },
  { id: 'perfect-keto-collagen', title: 'Perfect Keto Collagen & MCT', category: 'Health & Brain Boost', icon: <Brain/>, img: 'https://gymusastore.com/wp-content/uploads/2025/09/perfect-keto-Grass-Fed-Collagen-Peptides-MCT-Brain-Boost-1.webp' },
  { id: 'muscletech-eaa', title: 'MuscleTech Platinum 100% EAA+', category: 'Amino Acids & Recovery', icon: <Droplet/>, img: 'https://gymusastore.com/wp-content/uploads/2025/09/muscletech-100-EAA-1.webp' },
  { id: 'post-jym-active-matrix', title: 'Post JYM Active Matrix Recovery Powder', category: 'Amino Acids & Recovery', icon: <Zap/>, img: 'https://gymusastore.com/wp-content/uploads/2025/11/Post-JYM-Active-Matrix-Amino-Recovery-Powder-Pure-Creatine-HCL-BCAAs-Glutamine-Carnitine-Betaine-Taurine-for-Maximum-Strength-1.jpg' },
  { id: 'naked-whey-isolate', title: 'NAKED Whey Isolate Protein', category: 'Sports Nutrition & Whey', icon: <Wheat/>, img: 'https://gymusastore.com/wp-content/uploads/2026/02/NAKED-Whey-Isolate-Protein1.jpg' },
  { id: 'yufer-dumbbell-set', title: 'Yufer 6–10 Pair Rubber Dumbbell Set', category: 'Strength & Home Gym', icon: <Dumbbell/>, img: 'https://gymusastore.com/wp-content/uploads/2026/02/Yufer-6-10-Pair-Iron-and-Rubber-Coated-Dumbbell-Set1.jpg' },
  { id: 'hydrojug-noiseless-shaker', title: 'HydroJug 20 oz Noiseless Shaker', category: 'Gym Equipment & Accessories', icon: <VolumeX/>, img: 'https://gymusastore.com/wp-content/uploads/2026/01/Hydrojug-20-oz-Noiseless-Shaker-Bottle1.jpg' },
  { id: 'oceanfoam-foam-roller', title: 'Oceanfoam Sweet Spot Foam Roller', category: 'Gym Equipment & Accessories', icon: <Activity/>, img: 'https://gymusastore.com/wp-content/uploads/2025/11/Oceanfoam-Sweet-Spot-Medium-Exercise-Foam-Roller-1422x5.522-%E2%80%93-Medium-Density-Foam-Roller-for-Physical-Therapy-1.jpg' },
  { id: 'pooboo-power-cage', title: 'Pooboo Multi-Functional Power Cage', category: 'Strength Training & Racks', icon: <Dumbbell/>, img: 'https://gymusastore.com/wp-content/uploads/2026/01/Pooboo-Multi-Functional-Machine-Power-Cage1.jpg' },
  { id: 'ritfit-smith-machine-power-cage', title: 'RitFit Smith Machine Power Cage with Crossover', category: 'Strength Training & Racks', icon: <Dumbbell/>, img: 'https://gymusastore.com/wp-content/uploads/2025/11/RitFit-Smith-Machine-Power-Cage-with-LAT-Pulldown-Cable-Crossover-All-in-One-Power-Rack-Home-Gym-System1.jpg' },
];

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans pb-32">
      <header className="bg-slate-900 text-white py-24 px-4 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-6 tracking-wide uppercase"
          >
            Affiliate Review Hub
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight"
          >
            Real Reviews. <br/><span className="text-blue-500">Better Buying.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            We deep-dive into the most popular products on Amazon and beyond to help you cut through the noise and invest in quality.
          </motion.p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 -mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-white hover:shadow-2xl transition-all group"
            >
              <Link to={`/review/${review.id}`}>
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={review.img} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    alt={review.title}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-900 shadow-sm">
                    {review.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-blue-600 mb-2">
                    <div className="scale-75">{review.icon}</div>
                    <span className="text-xs font-bold uppercase tracking-widest opacity-60">Insight</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 line-clamp-1">{review.title}</h3>
                  <div className="flex justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-widest pt-4 border-t border-slate-50">
                    <span>Read Analysis</span>
                    <span className="text-blue-600">&rarr;</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="mt-32 text-center text-slate-400 max-w-2xl mx-auto px-4">
        <p className="mb-4 font-bold text-slate-900">&copy; 2026 ProReview Hub. Trusted Reviews for Smart Consumers.</p>
        <p className="text-xs italic leading-relaxed">
          Affiliate Disclosure: ProReview Hub is a participant in the Amazon Services LLC Associates Program, 
          an affiliate advertising program designed to provide a means for sites to earn advertising fees 
          by advertising and linking to Amazon.com. Some links may result in a small commission at no additional cost to you.
        </p>
      </footer>
    </div>
  );
}
