import React from 'react';
import { motion } from 'framer-motion';

export const MVPLive: React.FC = () => {
  return (
    <motion.section 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="relative bg-emerald-600 overflow-hidden py-4 z-[70]"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: ['-100%', '100%'],
            opacity: [0, 0.3, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent w-1/2 skew-x-12"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-12">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 px-2 py-1 rounded-md bg-white/20 border border-white/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span className="text-[10px] font-black text-white uppercase tracking-widest">
                BETA ACCESS LIVE
              </span>
            </div>
            <p className="text-white text-sm md:text-base font-black tracking-tight">
              The future of EV charging is here. Try the VoltBay Beta today.
            </p>
          </div>
          
          <motion.a
            href="https://voltbay.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-2.5 bg-slate-900 text-white rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-black/20 flex items-center space-x-2 group"
          >
            <span>Launch Beta App</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14H11V21L20 10H13Z" />
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};
