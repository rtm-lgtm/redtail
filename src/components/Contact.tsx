/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto border-t border-neutral-200 pt-20">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl font-black mb-8">READY TO <br />FLY?</h2>
            <p className="text-xl text-neutral-500">hello@redtailmarketing.com</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6"
            id="contact-form"
          >
            <input 
              type="text" 
              placeholder="Your Name" 
              className="bg-transparent border-b border-neutral-400 py-4 focus:outline-none focus:border-redtail transition-colors"
              id="input-name"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="bg-transparent border-b border-neutral-400 py-4 focus:outline-none focus:border-redtail transition-colors"
              id="input-email"
            />
            <button 
              className="w-fit bg-neutral-900 text-white px-12 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-redtail transition shadow-lg hover:shadow-redtail/20"
              id="btn-submit"
            >
              Send Inquiry
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
