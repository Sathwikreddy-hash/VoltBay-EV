import React from 'react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-40 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-xs font-black text-emerald-600 uppercase tracking-[0.5em] mb-12">Direct Support</h2>
          <h3 className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter leading-[0.8] mb-16">
            Let's <span className="text-emerald-600 italic">connect.</span>
          </h3>
          <p className="text-2xl md:text-3xl text-slate-400 font-bold max-w-2xl mx-auto leading-tight tracking-tight">
            Whether you're a driver with feedback or a station owner ready for the future, we're one email away.
          </p>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.02, y: -4 }}
          whileTap={{ scale: 0.98 }}
          className="relative inline-block group"
        >
          <div className="absolute -inset-8 bg-emerald-500 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-10 transition duration-700"></div>
          <a 
            href="mailto:myvoltbay@gmail.com" 
            className="relative px-12 py-8 bg-slate-900 text-white rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8 shadow-2xl transition-all group-hover:bg-emerald-600"
          >
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-emerald-400 group-hover:text-white transition-colors">
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
               </svg>
            </div>
            <div className="text-left">
               <div className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 mb-1">Technical Support & Partnerships</div>
               <div className="text-2xl md:text-5xl font-black tracking-tighter">myvoltbay@gmail.com</div>
            </div>
          </a>
        </motion.div>
        
        <div className="mt-40 pt-12 border-t border-slate-50 flex flex-col items-center space-y-8">
           <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-14 h-14 rounded-full border-4 border-white bg-slate-50 flex items-center justify-center overflow-hidden shadow-sm">
                  <div className={`w-full h-full ${i === 1 ? 'bg-emerald-100' : i === 2 ? 'bg-blue-100' : i === 3 ? 'bg-slate-200' : 'bg-emerald-50'}`}></div>
                </div>
              ))}
           </div>
           <div className="flex flex-col items-center space-y-2">
             <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">Global Support Infrastructure</span>
             <div className="flex items-center space-x-2">
               <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
               <span className="text-xs font-black text-slate-900 uppercase tracking-widest">Average Response Time: &lt; 2 Hours</span>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};