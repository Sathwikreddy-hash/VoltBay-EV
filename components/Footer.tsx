import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-50/30 rounded-full blur-[120px] -mr-48 -mb-48 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-20 mb-24">
          <div className="space-y-10 max-w-sm">
            <div 
              className="flex items-center space-x-3 group cursor-pointer" 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            >
              <div className="w-12 h-12 transition-transform group-hover:scale-110">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#10b981" strokeWidth="10" strokeLinecap="round" />
                  <path d="M50 20 L35 55 L50 55 L45 80 L65 40 L50 40 Z" fill="#3b82f6" />
                </svg>
              </div>
              <span className="text-3xl font-black text-slate-900 tracking-tighter">VoltBay</span>
            </div>
            <p className="text-xl text-slate-400 font-bold leading-tight tracking-tight">
              Engineering honest infrastructure for the electric age. Built with technical excellence in India.
            </p>
            <div className="flex space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-white hover:shadow-lg transition-all cursor-pointer">
                  <div className="w-5 h-5 bg-current rounded-sm opacity-20" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-16 md:gap-24">
            <div className="space-y-8">
              <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em]">Ecosystem</div>
              <ul className="space-y-4 text-xs font-black text-slate-900 uppercase tracking-widest">
                <li><a href="#features" className="hover:text-emerald-600 transition-colors">EV Drivers</a></li>
                <li><a href="#features" className="hover:text-emerald-600 transition-colors">Station Partners</a></li>
                <li><a href="#app" className="hover:text-emerald-600 transition-colors">Mobile App</a></li>
                <li><a href="https://voltbay.lovable.app" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-500 transition-colors">Web Beta</a></li>
              </ul>
            </div>
            <div className="space-y-8">
              <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em]">Company</div>
              <ul className="space-y-4 text-xs font-black text-slate-900 uppercase tracking-widest">
                <li><a href="#about" className="hover:text-emerald-600 transition-colors">Our Mission</a></li>
                <li><a href="#about" className="hover:text-emerald-600 transition-colors">Leadership</a></li>
                <li><a href="#contact" className="hover:text-emerald-600 transition-colors">Support</a></li>
              </ul>
            </div>
            <div className="space-y-8">
              <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em]">Status</div>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                   <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Network Live</span>
                </div>
                <div className="px-3 py-1 rounded-md bg-slate-50 border border-slate-100 inline-block">
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">v1.0.4-stable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">
            © 2026 VoltBay Technologies • All Rights Reserved
          </p>
          <div className="flex space-x-10 text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">
            <span className="cursor-pointer hover:text-slate-900 transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-slate-900 transition-colors">Terms of Service</span>
            <span className="cursor-pointer hover:text-slate-900 transition-colors">Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
};