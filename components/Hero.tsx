import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Ambience */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-emerald-200 rounded-full blur-[150px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.05, 1, 1.05],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-1/4 w-[900px] h-[900px] bg-blue-200 rounded-full blur-[180px]" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <h1 className="text-8xl md:text-9xl font-black text-slate-900 tracking-tighter leading-[0.85] mb-8">
            VoltBay
          </h1>
          
          <p className="text-2xl md:text-4xl font-bold text-slate-400 tracking-tight mb-16 max-w-2xl leading-tight">
            Infrastructure for <span className="text-slate-900">India's electric transition.</span>
          </p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full max-w-md p-10 rounded-[3rem] border-2 border-emerald-500/50 bg-white shadow-2xl mb-16 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
            <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em] mb-4">Visionary Leadership</div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase leading-none">
              Built by <span className="text-emerald-600">Sathwik Reddy</span>
            </h2>
          </motion.div>

          <motion.a
            href="#app"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full max-w-md py-8 bg-emerald-600 text-white rounded-full font-black text-lg uppercase tracking-widest transition-all shadow-[0_20px_50px_rgba(16,185,129,0.3)] flex items-center justify-center space-x-4 group"
          >
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span>APK IS READY — SCROLL DOWN TO DOWNLOAD</span>
          </motion.a>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30 hidden md:block"
      >
        <div className="w-px h-12 bg-slate-900 mx-auto"></div>
      </motion.div>
    </section>
  );
};