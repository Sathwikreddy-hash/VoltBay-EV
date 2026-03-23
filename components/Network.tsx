import React from 'react';
import { motion } from 'framer-motion';

export const Network: React.FC = () => {
  return (
    <section className="py-40 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-xs font-black text-emerald-600 uppercase tracking-[0.5em] mb-8">Infrastructure</h2>
              <h3 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85] mb-12">
                A living, breathing <br /> <span className="text-emerald-600 italic">network.</span>
              </h3>
              <p className="text-xl md:text-2xl text-slate-400 font-bold leading-tight mb-16 max-w-xl">
                We're mapping every corner. From urban hubs to highway stretches, the VoltBay network pulses with real-time data to keep you moving.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Uptime", val: "99.98%" },
                { label: "Active Nodes", val: "Growing" }
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
                >
                   <div className="text-emerald-500 font-black text-4xl tracking-tighter mb-2 group-hover:translate-x-1 transition-transform">{stat.val}</div>
                   <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative h-[500px] md:h-[700px] flex items-center justify-center">
             {/* Abstract Network SVG */}
             <div className="absolute inset-0 flex items-center justify-center">
               <svg viewBox="0 0 400 400" className="w-full h-full opacity-10 text-slate-900">
                  <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="8 8" />
                  <circle cx="200" cy="200" r="120" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                  <circle cx="200" cy="200" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
               </svg>
             </div>

             {/* Pulsing Nodes */}
             {[
               { x: '25%', y: '35%', d: 0 },
               { x: '75%', y: '25%', d: 1.5 },
               { x: '55%', y: '55%', d: 0.5 },
               { x: '85%', y: '75%', d: 2 },
               { x: '35%', y: '85%', d: 1 }
             ].map((node, i) => (
               <motion.div
                 key={i}
                 initial={{ scale: 0, opacity: 0 }}
                 whileInView={{ scale: 1, opacity: 1 }}
                 viewport={{ once: true }}
                 style={{ left: node.x, top: node.y }}
                 className="absolute"
               >
                 <div className="relative">
                    <motion.div 
                      animate={{ scale: [1, 2.5, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity, delay: node.d }}
                      className="absolute inset-0 w-12 h-12 -left-6 -top-6 bg-emerald-500 rounded-full blur-xl"
                    />
                    <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
                 </div>
               </motion.div>
             ))}

             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
               className="w-full h-full border border-emerald-500/5 rounded-full absolute"
             />
             
             <motion.div 
               initial={{ scale: 0.8, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               viewport={{ once: true }}
               className="relative z-10 p-16 bg-white rounded-full shadow-2xl border border-slate-100"
             >
                <svg viewBox="0 0 100 100" className="w-32 h-32">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#10b981" strokeWidth="10" strokeLinecap="round" />
                  <path d="M50 20 L35 55 L50 55 L45 80 L65 40 L50 40 Z" fill="#3b82f6" />
                </svg>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};