import React from 'react';
import { motion } from 'motion/react';
import PortfolioSection from '../sections/Portfolio';
import CTA from '../sections/CTA';
import { Link, useParams } from 'react-router-dom';
import { Code2, ShoppingBag, TrendingUp, Palette, Zap, Smartphone } from 'lucide-react';
import { SERVICES } from '../constants';
const iconMap: Record<string, any> = {
  Code2,
  ShoppingBag,
  TrendingUp,
  Palette,
  Zap,
  Smartphone,
};

const LearnMore = () => {
  const {slug} = useParams()
 console.log("slug from URL:", slug);
console.log("Matching service:", SERVICES.find(s => s.slug === slug));
  const service = SERVICES.find((s)=>s.slug===slug);
  
  if(!service){
    return <h1>Service not found</h1>
  }
const Icon = service.icon && iconMap[service.icon] ? iconMap[service.icon] : null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32"
    >
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="max-w-3xl">
         <div className="flex item-center">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary group-hover:text-white transition-colors  mx-2">
                  {Icon && <Icon size={32} className="text-brand-primary group-hover:text-white transition-colors" />}
                </div>
          <span className="text-brand-primary font-bold uppercase tracking-widest text-sm">{service.title} Page</span>
         </div>
       
          <h1 className="text-5xl md:text-7xl font-display font-extrabold mt-4 mb-8">
            Crafting <span className="text-gradient">{service.title}</span> Results.
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            {service.description}
          </p>

        </div>
       {/* package section */}
          <div className="w-full mx-auto mb-24 px-4 md:px-6 ">
  <h2 className="text-4xl font-bold mb-12 text-center ">
    Our <span className="text-gradient">Packages</span>
  </h2>

  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
    {service.packages.map((pkg, index) => (
      <div
  key={index}
  className={`w-full p-8 rounded-2xl border transition flex flex-col ${
  pkg.name === "Premium" ? "lg:scale-105 border-brand-primary bg-slate-900" : "border-slate-800 bg-slate-900"
}`}
>
  <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>

  <p className="text-4xl font-extrabold text-brand-primary mb-6">
    {pkg.price}
  </p>

  <ul className="space-y-3 mb-8">
    {pkg.features.map((feature, i) => (
      <li key={i} className="text-slate-400">
        ✓ {feature}
      </li>
    ))}
  </ul>

  {/* Push button to bottom */}
<div className="mt-auto">
  <Link to={`/contact?service=${service.slug}&package=${pkg.name}`}>
    <button className="w-full bg-brand-primary text-white py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-brand-primary/90 hover:shadow-lg cursor-pointer">
      Get Started
    </button>
  </Link>
</div>
</div>

    ))}
  </div>
</div>

      </div>

      <CTA />
    </motion.div>
  );
};

export default LearnMore;
