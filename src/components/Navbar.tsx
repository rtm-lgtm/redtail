/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Menu } from 'lucide-react';

export default function Navbar() {
  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter text-redtail"
          id="navbar-logo"
        >
          REDTAIL.
        </motion.div>
        
        <div className="hidden md:flex space-x-10 text-sm font-medium tracking-widest uppercase">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-redtail transition-colors duration-300"
              id={`nav-link-${link.name.toLowerCase()}`}
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <div className="md:hidden text-2xl" id="mobile-menu-trigger">
          <Menu className="w-6 h-6" />
        </div>
      </div>
    </nav>
  );
}
