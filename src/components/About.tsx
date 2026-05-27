/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-10 italic"
          id="about-quote"
        >
          "Good marketing makes the company look smart. Great marketing makes the customer feel smart."
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-neutral-600 font-light"
          id="about-text"
        >
          Redtail Marketing was founded on the principle that agencies should be partners, not vendors. We operate as your in-house growth team.
        </motion.p>
      </div>
    </section>
  );
}
