import React from 'react';
import { motion } from 'framer-motion';

export const AppDownload: React.FC = () => {
  return (
    <section id="app" className="py-40 bg-slate-900 relative overflow-hidden scroll-mt-24">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-xs font-black text-emerald-400 uppercase tracking-[0.5em] mb-8">Mobile Experience</h2>
              <h3 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-12">
                The charging <br /> <span className="text-emerald-500">command center.</span>
              </h3>
              <p className="text-xl md:text-2xl text-slate-400 font-bold leading-tight mb-16 max-w-xl">
                Real-time booking, station health checks, and seamless navigation. Built to be the fastest tool in your EV toolkit.
              </p>
            </motion.div>
            
            <div className="flex flex-col sm:flex-row items-start gap-8">
              <motion.a 
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                href="https://drive.google.com/file/d/1n58OZPh9hfD9xftpmr1hIKSLWBdnJYFR/view" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group px-10 py-6 bg-white text-slate-900 rounded-[2rem] flex items-center shadow-2xl shadow-emerald-500/10 transition-all hover:bg-emerald-50"
              >
                <div className="w-12 h-12 mr-6 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-1">Direct Download</div>
                  <div className="text-xl font-black tracking-tight">Get the APK</div>
                </div>
              </motion.a>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <span className="text-xs font-black text-slate-300 uppercase tracking-widest">v1.0.4 Stable Build</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                  </div>
                  <span className="text-xs font-black text-slate-300 uppercase tracking-widest">Android 8.0+ Required</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            {/* Phone Mockup Frame */}
            <motion.div 
              initial={{ rotate: 5, y: 100, opacity: 0 }}
              whileInView={{ rotate: -5, y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 mx-auto w-80 h-[650px] bg-slate-800 rounded-[4rem] p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] border-[12px] border-slate-700"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-slate-700 rounded-b-3xl z-20 flex items-center justify-center">
                <div className="w-12 h-1 bg-slate-600 rounded-full" />
              </div>
              <div className="w-full h-full bg-slate-900 rounded-[3rem] overflow-hidden flex flex-col items-center justify-center relative p-8">
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-24 h-24 mb-12 relative"
                >
                  <div className="absolute inset-0 bg-emerald-500 blur-2xl opacity-20 animate-pulse" />
                  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl relative z-10">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#10b981" strokeWidth="10" strokeLinecap="round" />
                    <path d="M50 20 L35 55 L50 55 L45 80 L65 40 L50 40 Z" fill="#3b82f6" />
                  </svg>
                </motion.div>
                <div className="space-y-6 w-full">
                  <div className="h-1 w-2/3 bg-slate-800 rounded-full mx-auto" />
                  <div className="h-12 w-full bg-slate-800/50 rounded-2xl border border-white/5" />
                  <div className="h-12 w-full bg-slate-800/50 rounded-2xl border border-white/5" />
                  <div className="h-14 w-full bg-emerald-600 rounded-2xl shadow-lg shadow-emerald-500/20 flex items-center justify-center">
                    <div className="w-6 h-1 bg-white/30 rounded-full" />
                  </div>
                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-slate-800 rounded-full" />
              </div>
            </motion.div>
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-emerald-500 blur-[180px] opacity-20 -z-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};