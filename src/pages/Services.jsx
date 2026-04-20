// pages/Services.jsx
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HomeIcon, BuildingOfficeIcon, ChatBubbleBottomCenterTextIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const servicesData = [
  {
    icon: HomeIcon,
    title: 'Residential Design',
    description: 'Full-service interior design for private residences, from concept to completion. We curate every element to reflect your personal aesthetic and functional needs.',
    features: ['Space Planning', 'Furniture Selection', 'Custom Millwork', 'Lighting Design'],
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageAlt: 'Luxury modern living room interior design'
  },
  {
    icon: BuildingOfficeIcon,
    title: 'Commercial Interiors',
    description: 'Elevate your brand through exceptional commercial spaces. We design offices, retail, and hospitality environments that inspire and engage.',
    features: ['Brand Integration', 'Workplace Strategy', 'FF&E Specification', 'Project Management'],
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageAlt: 'Modern office interior with glass walls and wooden desk'
  },
  {
    icon: ChatBubbleBottomCenterTextIcon,
    title: 'Consultation',
    description: 'Expert advice to guide your project. Ideal for clients seeking professional direction without full design services.',
    features: ['Color Consultations', 'Material Selection', 'Layout Review', 'Sourcing Guidance'],
    image: 'https://images.pexels.com/photos/3196886/pexels-photo-3196886.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageAlt: 'Interior designer consulting with material samples and blueprints'
  },
];

// Framer motion variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const Services = () => {
  // For subtle parallax effect on hero background
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-neutral-50 via-stone-50 to-amber-50/30">
      {/* Decorative abstract shapes for premium feel */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-stone-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-20 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl" />
      </div>

      {/* Hero Section with Glassmorphism */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative pt-32 pb-20 md:pt-40 md:pb-28"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Glassmorphism badge */}
            <div className="inline-flex items-center justify-center mb-6">
              <div className="px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-sm border border-white/50 shadow-sm">
                <span className="text-sm font-medium text-stone-700 tracking-wide">✦ Premium Interiors</span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-stone-900 leading-[1.1]">
              Our Services
            </h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent mx-auto mt-8 mb-6" />
            <p className="text-stone-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Comprehensive design solutions tailored to your vision. 
              <span className="block text-stone-500 text-base mt-2">From concept to completion — we bring spaces to life.</span>
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="relative pb-32 md:pb-48">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-32 md:space-y-48"
          >
            {servicesData.map((service, idx) => {
              const Icon = service.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    !isEven ? 'lg:grid-cols-[1.1fr_0.9fr]' : ''
                  }`}
                >
                  {/* Image Container with glassmorphism overlay on hover */}
                  <motion.div
                    className={`relative group overflow-hidden rounded-2xl shadow-2xl ${
                      !isEven ? 'lg:order-2' : ''
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <div className="relative aspect-[4/3] md:aspect-[5/4] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Glass gradient overlay on image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    {/* Subtle glass border effect */}
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 ring-inset pointer-events-none" />
                  </motion.div>

                  {/* Content Card with Glassmorphism */}
                  <motion.div
                    className={`${
                      !isEven ? 'lg:order-1' : ''
                    } relative`}
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl p-8 md:p-10 shadow-xl shadow-stone-200/50">
                      {/* Icon with glass circle */}
                      <div className="inline-flex p-3 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/70 mb-6 shadow-sm">
                        <Icon className="h-8 w-8 text-stone-800" strokeWidth={1.5} />
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-stone-900 mb-5 leading-[1.2]">
                        {service.title}
                      </h2>
                      
                      <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8 border-l-2 border-stone-300 pl-5 italic">
                        {service.description}
                      </p>
                      
                      {/* Features Grid with icons */}
                      <div className="grid grid-cols-2 gap-3 mt-6">
                        {service.features.map((feature, i) => (
                          <motion.div
                            key={i}
                            className="flex items-center space-x-2 text-sm md:text-base text-stone-800"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.05 }}
                          >
                            <CheckCircleIcon className="h-4 w-4 text-stone-600 flex-shrink-0" />
                            <span className="font-medium">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Subtle decorative line */}
                      <div className="mt-8 pt-4 border-t border-stone-200/50">
                        <div className="flex items-center justify-between text-xs text-stone-500">
                          <span>✦ Bespoke approach</span>
                          <span>✦ Attention to detail</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom CTA with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-32 text-center"
          >
            <div className="max-w-3xl mx-auto bg-white/30 backdrop-blur-md border border-white/50 rounded-3xl p-8 md:p-12 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-light text-stone-900 mb-4">
                Ready to transform your space?
              </h3>
              <p className="text-stone-700 mb-8 max-w-md mx-auto">
                Let's collaborate and create something extraordinary together.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-stone-900 text-white rounded-full text-sm font-medium tracking-wide shadow-lg shadow-stone-900/20 hover:bg-stone-800 transition-all duration-300"
              >
                Start Your Project
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;