// pages/Portfolio.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Residential', 'Commercial', 'Consultation'];

// High-quality interior images from Unsplash
const projects = [
  { 
    id: 1, 
    title: 'Tribeca Penthouse', 
    category: 'Residential', 
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=80&auto=format&fit=crop' 
  },
  { 
    id: 2, 
    title: 'Soho Concept Store', 
    category: 'Commercial', 
    image: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2' 
  },
  { 
    id: 3, 
    title: 'Upper East Side Residence', 
    category: 'Residential', 
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1000&q=80&auto=format&fit=crop' 
  },
  { 
    id: 4, 
    title: 'Creative Agency HQ', 
    category: 'Commercial', 
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&q=80&auto=format&fit=crop' 
  },
  { 
  id: 5, 
  title: 'Hamptons Retreat', 
  category: 'Residential', 
  image: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=1000&q=80&auto=format&fit=crop' 
},
{ 
  id: 6, 
  title: 'Color Consultation', 
  category: 'Consultation', 
  image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1000&q=80&auto=format&fit=crop' 
},
];

// Animation variants for scroll-triggered effects
const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } }
};

const staggerContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } }
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="bg-[#f7f5f0] overflow-x-hidden">
      {/* Hero Section with Large Typography */}
      <section className="relative pt-16 pb-20 md:pt-20 md:pb-28">
        {/* Decorative glassmorphic blur circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-20 w-72 h-72 bg-white/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-black/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="text-center"
          >
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-light tracking-tight text-gray-900 leading-[1.1]">
              Portfolio
            </h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mx-auto mt-8 mb-6"></div>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto font-light tracking-wide">
              Curated spaces that define modern luxury and timeless elegance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section with Glassmorphism */}
      <div className="container mx-auto px-6 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariant}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex flex-wrap justify-center gap-3 p-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-sm">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  px-7 py-2.5 text-sm font-medium tracking-wide rounded-full transition-all duration-300
                  ${activeCategory === cat
                    ? 'bg-black text-white shadow-lg scale-105'
                    : 'bg-white/30 backdrop-blur-sm text-gray-800 hover:bg-white/50 hover:scale-105 border border-white/20'
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Gallery Grid with Scroll Animations */}
      <section className="pb-28 md:pb-36">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            variants={staggerContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map(project => (
                <motion.div
                  key={project.id}
                  layout
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  exit="exit"
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white"
                >
                  {/* Image Container with Hover Scale */}
                  <div className="relative overflow-hidden h-80 md:h-96">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Glassmorphism Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                      <div className="w-full p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 shadow-xl">
                          <p className="text-white/90 text-xs tracking-widest font-medium uppercase">
                            {project.category}
                          </p>
                          <h3 className="text-white text-2xl md:text-3xl font-light mt-2 tracking-tight">
                            {project.title}
                          </h3>
                          <div className="w-12 h-px bg-white/50 mt-3 group-hover:w-20 transition-all duration-500"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle Gradient Border on Hover */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/20 transition-all duration-500 pointer-events-none"></div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {/* Empty State with Animation */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
