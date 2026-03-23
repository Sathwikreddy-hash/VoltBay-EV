import React from 'react';
import { motion } from 'framer-motion';

export const Onboarding: React.FC = () => {
  return (
    <section className="py-40 bg-slate-900 relative overflow-hidden">
      {/* Cinematic grid background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }}></div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-slate-800/50 backdrop-blur-3xl p-16 md:p-32 rounded-[4rem] text-center border border-white/5 shadow-2xl shadow-black/50"
        >
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-8 py-3 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-[0.5em] mb-16 border border-emerald-500/20"
          >
            Exclusive Infrastructure Access
          </motion.div>
          
          <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-16 leading-[0.85]">
            Invite-Only <br /> <span className="text-emerald-500 italic">Network.</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-16">
            <p className="text-2xl md:text-3xl text-slate-400 font-bold leading-tight tracking-tight">
              To maintain absolute reliability, station onboarding is strictly controlled. Every partner is manually vetted to ensure your journey is never compromised.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              {[
                { label: "Vetting", val: "Manual verification of every station hardware." },
                { label: "Quality", val: "Strict adherence to 99.9% uptime standards." }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="p-10 rounded-[2.5rem] bg-slate-900/50 border border-white/5 group hover:border-emerald-500/30 transition-all"
                >
                  <div className="text-emerald-500 font-black uppercase tracking-[0.3em] text-[10px] mb-6 group-hover:translate-x-1 transition-transform">{item.label}</div>
                  <div className="text-white text-xl font-bold leading-snug tracking-tight">{item.val}</div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="pt-12"
            >
              <a 
                href="mailto:myvoltbay@gmail.com" 
                className="inline-flex items-center space-x-4 px-12 py-6 bg-emerald-600 text-white rounded-[2rem] font-black uppercase tracking-[0.3em] text-xs shadow-xl shadow-emerald-600/20 hover:bg-emerald-500 transition-all"
              >
                <span>Apply for Partnership</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};