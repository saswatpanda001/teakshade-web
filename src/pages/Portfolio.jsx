// pages/Portfolio.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Residential', 'Commercial', 'Consultation'];

const projects = [
  { id: 1, title: 'Tribeca Penthouse', category: 'Residential', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 2, title: 'Soho Concept Store', category: 'Commercial', image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 3, title: 'Upper East Side Residence', category: 'Residential', image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 4, title: 'Creative Agency HQ', category: 'Commercial', image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 5, title: 'Hamptons Retreat', category: 'Residential', image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 6, title: 'Color Consultation', category: 'Consultation', image: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="bg-beige">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-light">Portfolio</h1>
            <div className="w-16 h-px bg-black/30 mx-auto mt-6"></div>
          </motion.div>

          {/* Category Filter */}
          <div className="flex justify-center flex-wrap gap-4 mb-16">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 text-sm tracking-wider transition-all ${
                  activeCategory === cat
                    ? 'bg-black text-white'
                    : 'bg-transparent text-black border border-black hover:bg-black hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProjects.map(project => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="group relative overflow-hidden cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="text-white">
                      <p className="text-xs tracking-widest">{project.category}</p>
                      <h3 className="text-xl font-light mt-1">{project.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;