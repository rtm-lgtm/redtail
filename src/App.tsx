/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Menu, ArrowRight, Instagram, Linkedin, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Shared Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 border-b border-neutral-100' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`text-2xl font-black tracking-tighter ${isScrolled ? 'text-redtail' : 'text-white'}`}
        >
          REDTAIL.
        </motion.div>
        <div className={`hidden md:flex space-x-10 text-xs font-bold tracking-widest uppercase ${isScrolled ? 'text-neutral-900' : 'text-white'}`}>
          <a href="#work" className="hover:text-redtail transition-colors">Work</a>
          <a href="#services" className="hover:text-redtail transition-colors">Services</a>
          <a href="#about" className="hover:text-redtail transition-colors">About</a>
          <a href="#contact" className="hover:text-redtail transition-colors">Contact</a>
        </div>
        <div className="md:hidden">
          <Menu className={`w-6 h-6 ${isScrolled ? 'text-neutral-900' : 'text-white'}`} />
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center px-6 overflow-hidden bg-neutral-900">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?auto=format&fit=crop&q=80&w=2000" 
        className="w-full h-full object-cover opacity-40 grayscale"
        alt="Background" 
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/60 to-transparent" />
    </div>
    <div className="max-w-7xl mx-auto relative z-10">
      <motion.h1 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="text-7xl md:text-[120px] font-black tracking-tighter leading-[0.9] text-white mb-10"
      >
        WE BUILD <br /> <span className="text-redtail">DIGITAL <br className="md:hidden" /> DOMINANCE.</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="text-xl md:text-2xl text-neutral-300 max-w-2xl font-light leading-relaxed mb-12"
      >
        Precision strategy meets high-fidelity design. We scale ambitious brands through custom digital experiences and performance-driven creative.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <a href="#work" className="group flex items-center space-x-4 bg-white text-neutral-900 px-10 py-6 rounded-full font-black uppercase tracking-widest text-sm hover:bg-redtail hover:text-white transition-all duration-300">
          <span>View Our Work</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </a>
      </motion.div>
    </div>
  </section>
);

const Work = () => {
  const projects = [
    { title: 'Velocity Finance', category: 'Identity / Strategy', img: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&q=80&w=1000' },
    { title: 'Ascend Lifestyle', category: 'Digital / Commerce', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000' },
    { title: 'Nexus Tech', category: 'Branding / UIUX', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000' },
    { title: 'Vanguard Corp', category: 'Growth / Media', img: 'https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=1000' }
  ];

  return (
    <section id="work" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
          <div>
            <h2 className="text-xs uppercase tracking-[0.4em] text-neutral-400 font-black mb-4">Selected Work</h2>
            <h3 className="text-5xl font-bold tracking-tight italic">Making an impact.</h3>
          </div>
          <a href="#" className="hidden md:flex items-center space-x-2 text-sm font-bold uppercase tracking-widest text-neutral-400 hover:text-redtail transition-colors group">
            <span>View All</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-16">
          {projects.map((p, i) => (
            <motion.div 
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden bg-neutral-100 mb-8">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 scale-105 group-hover:scale-110" referrerPolicy="no-referrer" />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-2xl font-black italic mb-1">{p.title}</h4>
                  <p className="text-xs uppercase tracking-widest text-neutral-400 font-bold">{p.category}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-redtail group-hover:border-redtail group-hover:text-white transition-all duration-300">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => (
  <section id="services" className="py-32 px-6 bg-neutral-900 text-white overflow-hidden">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-redtail font-black text-xs uppercase tracking-[0.5em] mb-6 block">Capabilities</span>
        <h2 className="text-6xl font-black tracking-tighter leading-none mb-8">HOW WE HELP <br /> BRANDS SOAR.</h2>
        <p className="text-neutral-400 text-xl font-light leading-relaxed max-w-md">
          A full-service digital laboratory focused on high-conversion design and aggressive growth strategies.
        </p>
      </motion.div>
      <div className="space-y-16">
        {[
          { title: 'Brand Strategy', desc: 'Deep market research and positioning to define your unique competitive advantage.' },
          { title: 'Creative Direction', desc: 'Breaking through the noise with visuals that command attention and drive desire.' },
          { title: 'Digital Performance', desc: 'Data-driven campaigns across digital channels focused on aggressive ROI and global scale.' }
        ].map((s, i) => (
          <motion.div 
            key={s.title}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="flex items-start space-x-8">
              <span className="text-redtail font-black text-xl italic opacity-50 group-hover:opacity-100 transition-opacity">0{i+1}</span>
              <div>
                <h4 className="text-2xl font-black italic mb-4 pb-2 border-b border-neutral-800 group-hover:border-redtail transition-colors">{s.title}</h4>
                <p className="text-neutral-400 font-light leading-relaxed">{s.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-32 px-6 bg-white overflow-hidden">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-12 italic leading-tight">
          "Good marketing makes the company look smart. Great marketing makes the customer feel smart."
        </h2>
        <p className="text-2xl text-neutral-500 font-light max-w-2xl mx-auto">
          Redtail Marketing was founded on the principle that agencies should be partners, not vendors. We operate as your in-house growth team.
        </p>
      </motion.div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-32 px-6 bg-neutral-50">
    <div className="max-w-7xl mx-auto border-t border-neutral-200 pt-24">
      <div className="grid md:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-7xl md:text-9xl font-black tracking-[ -0.05em] leading-[0.8] mb-12">READY <br /> TO FLY?</h2>
          <div className="space-y-2">
            <p className="text-xs uppercase font-black tracking-[0.3em] text-neutral-400">Collaborate</p>
            <a href="mailto:hello@redtailmarketing.org" className="text-2xl font-black border-b-2 border-redtail pb-1 hover:text-redtail transition-colors tracking-tight">
              hello@redtailmarketing.org
            </a>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col space-y-10"
        >
          <div className="space-y-12">
            <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b-2 border-neutral-200 py-4 focus:outline-none focus:border-redtail transition-colors text-xl font-bold placeholder:text-neutral-300" />
            <input type="email" placeholder="Your Email" className="w-full bg-transparent border-b-2 border-neutral-200 py-4 focus:outline-none focus:border-redtail transition-colors text-xl font-bold placeholder:text-neutral-300" />
            <textarea placeholder="Your Message" rows={4} className="w-full bg-transparent border-b-2 border-neutral-200 py-4 focus:outline-none focus:border-redtail transition-colors text-xl font-bold placeholder:text-neutral-300 resize-none" />
          </div>
          <button className="bg-neutral-900 text-white px-16 py-6 rounded-full font-black uppercase tracking-widest text-sm hover:bg-redtail transition-all duration-300 self-start shadow-xl hover:shadow-redtail/30">
            Send Inquiry
          </button>
        </motion.div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-16 px-6 bg-white border-t border-neutral-100">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <p className="text-xs font-black tracking-[0.4em] uppercase text-redtail mb-2">REDTAIL.</p>
        <p className="text-[10px] uppercase font-bold tracking-widest text-neutral-400">© {new Date().getFullYear()} Redtail Marketing Group</p>
      </div>
      <div className="flex space-x-12">
        <a href="#" className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.3em] hover:text-redtail transition-colors group">
          <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
          <span>Instagram</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.3em] hover:text-redtail transition-colors group">
          <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

