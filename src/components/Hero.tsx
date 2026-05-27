/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden bg-neutral-900" id="hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?auto=format&fit=crop&q=80&w=2000" 
          alt="Visionary Background" 
          className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto pt-20 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-black tracking-tight leading-none mb-8 text-white"
          id="hero-title"
        >
          WE BUILD <br /> <span className="text-redtail">DIGITAL DOMINANCE.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-neutral-400 max-w-2xl font-light leading-relaxed"
          id="hero-description"
        >
          Precision strategy meets high-fidelity design. We scale ambitious brands through custom digital experiences and performance-driven creative.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-12"
          id="hero-cta"
        >
          <a 
            href="#work" 
            className="bg-neutral-900 text-white px-10 py-5 rounded-full font-bold hover:bg-redtail transition duration-300 inline-block text-lg"
          >
            View Our Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
