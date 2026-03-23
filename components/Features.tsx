import React from 'react';
import { motion } from 'framer-motion';

export const Features: React.FC = () => {
  const cards = [
    {
      title: "For EV Drivers",
      subtitle: "Predictable journeys start here.",
      items: ["Real-time availability", "Instant slot booking", "Zero-friction payments"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14H11V21L20 10H13Z" />
        </svg>
      ),
      color: "emerald"
    },
    {
      title: "For Station Partners",
      subtitle: "Maximize your uptime.",
      items: ["Demand management", "Smart load balancing", "Partner dashboard"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: "blue"
    }
  ];

  return (
    <section id="features" className="py-40 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div className="max-w-2xl">
              <h2 className="text-xs font-black text-emerald-600 uppercase tracking-[0.4em] mb-6">The Ecosystem</h2>
              <p className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9]">
                Charging, <span className="text-slate-400">redefined for the electric age.</span>
              </p>
            </div>
            <div className="md:text-right">
              <p className="text-xl text-slate-500 font-bold max-w-xs md:ml-auto leading-tight">
                Engineering honest infrastructure that scales with your needs.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative p-12 rounded-[3rem] bg-slate-50 border border-slate-100 overflow-hidden hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-16">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                  card.color === 'emerald' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' : 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                } group-hover:scale-110 group-hover:rotate-6`}>
                  {card.icon}
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Module {i + 1}</p>
                  <p className="text-xs font-black text-slate-900 uppercase tracking-widest">{card.color === 'emerald' ? 'Driver' : 'Partner'} Core</p>
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">{card.title}</h3>
                <p className="text-xl text-slate-500 font-bold mb-12 leading-tight">{card.subtitle}</p>
                
                <div className="space-y-4">
                  {card.items.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-white border border-slate-100 group/item hover:border-emerald-500/30 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className={`w-2 h-2 rounded-full ${card.color === 'emerald' ? 'bg-emerald-500' : 'bg-blue-500'}`} />
                        <span className="text-sm font-black text-slate-700 uppercase tracking-widest">{item}</span>
                      </div>
                      <svg className="w-4 h-4 text-slate-300 group-hover/item:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Background Element */}
              <div className={`absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 ${
                card.color === 'emerald' ? 'bg-emerald-400' : 'bg-blue-400'
              }`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};