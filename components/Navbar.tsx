import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#features' },
    { name: 'Early Access', href: '#app' },
    { name: 'Mission', href: '#about' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 left-0 right-0 z-[60] w-full bg-white/80 backdrop-blur-md border-b border-slate-100"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          {/* Brand & Status */}
          <div 
            className="flex items-center space-x-3 group cursor-pointer" 
            onClick={() => {
              window.scrollTo({top: 0, behavior: 'smooth'});
              setIsOpen(false);
            }}
          >
            <div className="w-10 h-10 transition-transform group-hover:scale-110">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#10b981" strokeWidth="10" strokeLinecap="round" />
                <path d="M50 20 L35 55 L50 55 L45 80 L65 40 L50 40 Z" fill="#3b82f6" />
              </svg>
            </div>
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-black text-slate-900 tracking-tighter">VoltBay</span>
              <div className="flex items-center space-x-1 px-2 py-0.5 rounded-full bg-emerald-500 border border-emerald-400">
                <div className="w-1 h-1 rounded-full bg-white animate-pulse"></div>
                <span className="text-[10px] font-black text-white uppercase tracking-widest">Live</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xs font-black text-slate-500 uppercase tracking-widest hover:text-emerald-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <motion.a 
              href="https://voltbay.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-lg shadow-slate-900/10"
            >
              Launch App
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2.5" 
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 md:hidden bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center p-6"
          >
            <div className="w-full flex flex-col space-y-8 text-center">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-black text-slate-900 tracking-tighter uppercase"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                href="mailto:myvoltbay@gmail.com"
                className="mx-auto px-10 py-5 bg-slate-900 text-white rounded-3xl text-xl font-black tracking-tighter uppercase shadow-2xl shadow-slate-900/20"
              >
                Get Support
              </motion.a>
            </div>
            
            <button 
              onClick={() => setIsOpen(false)}
              className="mt-12 p-4 text-slate-400 font-black uppercase tracking-[0.3em] text-xs"
            >
              Close Menu
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};