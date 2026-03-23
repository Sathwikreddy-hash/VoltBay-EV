import React from 'react';
import { motion } from 'framer-motion';

export const Roadmap: React.FC = () => {
  const steps = [
    { phase: "Phase 01", title: "Core Stability", status: "Completed", desc: "Hardening real-time booking engines and station handshake protocols." },
    { phase: "Phase 02", title: "Early Access", status: "Live", desc: "Direct APK rollout for power users in select South Indian hubs." },
    { phase: "Phase 03", title: "Grid Sync", status: "Coming Q3", desc: "Deep integration with utility providers for smart load management." },
    { phase: "Phase 04", title: "National Link", status: "Planned", desc: "Expanding the booking mesh to major highway corridors pan-India." }
  ];

  return (
    <section className="py-40 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-32 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.5em] mb-8"
          >
            Development Roadmap
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85]"
          >
            The honest <br /> <span className="text-emerald-600 italic">path.</span>
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] group-hover:text-emerald-500 transition-colors">
                  {step.phase}
                </div>
                <div className={`px-3 py-1 rounded-md text-[8px] font-black uppercase tracking-widest ${
                  step.status === 'Live' ? 'bg-emerald-500 text-white' : 
                  step.status === 'Completed' ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-500'
                }`}>
                  {step.status}
                </div>
              </div>
              
              <h4 className="text-2xl font-black text-slate-900 mb-6 tracking-tighter leading-tight group-hover:translate-x-1 transition-transform">
                {step.title}
              </h4>
              
              <p className="text-slate-400 font-bold leading-tight tracking-tight text-lg">
                {step.desc}
              </p>

              {/* Connector line for desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-slate-100 z-10 group-hover:bg-emerald-200 transition-colors"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};