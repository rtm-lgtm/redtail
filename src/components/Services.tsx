/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

const services = [
  {
    number: '01',
    title: 'Brand Strategy',
    description: 'Deep market research and competitive analysis to position your brand as the leader in your niche.'
  },
  {
    number: '02',
    title: 'Creative Direction',
    description: 'Breaking through the noise with high-end visuals and storytelling that connects with modern consumers.'
  },
  {
    number: '03',
    title: 'Digital Performance',
    description: 'Data-driven campaigns across digital channels focused on ROI, scaling your reaching, and driving conversion.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xs uppercase tracking-[0.3em] text-red-500 mb-4 font-bold">Capabilities</h2>
          <h3 className="text-5xl font-bold leading-tight">How we help <br />brands soar.</h3>
        </motion.div>
        
        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div 
              key={service.number}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              id={`service-${service.number}`}
            >
              <h4 className="text-xl font-bold mb-4 border-b border-neutral-700 pb-2 italic">
                {service.number}. {service.title}
              </h4>
              <p className="text-neutral-400 font-light">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
