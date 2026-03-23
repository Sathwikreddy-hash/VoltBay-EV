import React from 'react';
import { motion } from 'framer-motion';

export const Partners: React.FC = () => {
  const partners = [
    { name: "CleanEnergy Hub", icon: "⚡" },
    { name: "UrbanGrid", icon: "🏙️" },
    { name: "EcoMotion", icon: "🌱" },
    { name: "PowerFlow", icon: "🔋" },
    { name: "SmartRoute", icon: "🗺️" },
    { name: "GreenLink", icon: "🔗" }
  ];

  return (
    <div className="py-16 bg-white border-y border-slate-100 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[10px] font-black text-slate-300 uppercase tracking-[0.5em] mb-12">
          Strategic Integrations & Ecosystem Partners
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {partners.map((partner, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.4 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
            >
              <span className="text-xl">{partner.icon}</span>
              <span className="text-lg md:text-xl font-black text-slate-900 tracking-tighter uppercase">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};