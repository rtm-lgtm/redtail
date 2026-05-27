/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

const projects = [
  {
    id: 'project-1',
    title: 'Velocity Finance',
    category: 'Identity / Digital Strategy',
    image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'project-2',
    title: 'Ascend Lifestyle',
    category: 'E-Commerce / Experience Design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000'
  }
];

export default function Work() {
  return (
    <section id="work" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-4 font-bold">Selected Projects</h2>
            <h3 className="text-4xl font-bold">Making an impact.</h3>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              id={project.id}
            >
              <div className="aspect-[4/5] bg-neutral-100 overflow-hidden mb-6">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-2xl font-bold italic">{project.title}</h4>
              <p className="text-neutral-500 uppercase text-xs tracking-widest mt-2">{project.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
