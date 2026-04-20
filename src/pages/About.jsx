// pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

import dir1 from "../assets/images/about/dir1.png";
import dir2 from "../assets/images/about/dir2.png";
import dir3 from "../assets/images/about/dir3.png";

const team = [
  { 
    name: 'Ananya Sharma', 
    role: 'Principal Designer', 
    image: dir1,
    bio: '15+ years of experience in luxury residential and hospitality design'
  },
  { 
    name: 'Vikram Mehta', 
    role: 'Creative Director', 
    image: dir2,
    bio: 'Award-winning designer specializing in contemporary Indian aesthetics'
  },
  { 
    name: 'Rahul Joshi', 
    role: 'Senior Architect', 
    image: dir3,
    bio: 'Specializes in smart home integration and technical design'
  },
];
const About = () => {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-stone-50">
      {/* Background subtle pattern or gradient? We'll keep clean but add a soft texture */}
      <div className="fixed inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-white to-stone-200" />
      </div>

      {/* Hero Section with Glassmorphism */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* High-quality background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Design studio interior"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
        </div>

        {/* Glass card overlay for hero text */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="backdrop-blur-md bg-white/10 rounded-3xl border border-white/30 p-8 md:p-12 inline-block shadow-2xl"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white drop-shadow-lg">
              Our Story
            </h1>
            <div className="w-24 h-px bg-white/60 mx-auto mt-6 mb-4" />
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-light">
              Crafting timeless interiors with soul and precision
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 md:gap-20 items-center"
          >
            {/* Text side with glass card */}
            <motion.div variants={fadeUp} className="order-2 md:order-1">
              <div className="backdrop-blur-xl bg-white/60 rounded-3xl border border-white/40 shadow-2xl p-8 md:p-10">
                <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-6">
                  Philosophy of Simplicity
                </h2>
                <div className="w-16 h-px bg-stone-400 mb-6" />
                <p className="text-stone-700 leading-relaxed mb-5 text-lg">
                  Founded in 2012, TEAK SHADE was born from a desire to create interiors that transcend trends. We believe in the power of thoughtful design to elevate everyday life.
                </p>
                <p className="text-stone-700 leading-relaxed text-lg">
                  Our approach marries timeless elegance with modern sensibility, always prioritizing quality, light, and the unique narrative of each client.
                </p>
              </div>
            </motion.div>

            {/* Image side with glass effect overlay */}
            <motion.div variants={fadeUp} className="order-1 md:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/271805/pexels-photo-271805.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Design philosophy"
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section with Glassmorphism Cards */}
      <section className="relative py-24 bg-white/40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-light text-stone-900">The Visionaries</h2>
            <div className="w-20 h-px bg-stone-400 mx-auto mt-6 mb-4" />
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Meet the creative minds behind our award-winning designs
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 lg:gap-12"
          >
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="group"
              >
               <div className="group relative backdrop-blur-xl bg-white/30 rounded-3xl border border-white/50 shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:bg-white/40 hover:-translate-y-2">
  {/* Decorative gradient orb */}
  <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl transition-all duration-700 group-hover:bg-amber-500/20" />
  <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-stone-500/10 rounded-full blur-2xl transition-all duration-700 group-hover:bg-stone-500/20" />
  
  {/* Image Container with ornate border inspiration */}
  <div className="relative overflow-hidden pt-8 px-6">
    <div className="relative inline-block mx-auto block text-center">
      {/* Decorative ring - inspired by Indian rangoli */}
      <div className="absolute inset-0 rounded-full border-2 border-dashed border-amber-400/50 animate-spin-slow" style={{ width: '192px', height: '192px', left: '50%', transform: 'translateX(-50%)' }} />
      
      <img
        src={member.image}
        alt={member.name}
        className="w-48 h-48 object-cover rounded-full mx-auto mb-6 border-4 border-white/90 shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:border-amber-400/50"
      />
      
      {/* Subtle shine overlay */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ width: '192px', height: '192px', left: '50%', transform: 'translateX(-50%)' }} />
    </div>
  </div>
  
  {/* Content */}
  <div className="text-center pb-8 px-6 relative z-10">
    <h3 className="text-2xl md:text-3xl font-light text-stone-800 tracking-tight">
      {member.name}
    </h3>
    <p className="text-sm tracking-wider text-amber-600/80 mt-2 uppercase font-medium">
      {member.role}
    </p>
    
    {/* Decorative divider - Indian inspired */}
    <div className="flex items-center justify-center gap-2 mt-5 mb-3">
      <div className="w-3 h-px bg-amber-400/60" />
      <div className="w-12 h-px bg-gradient-to-r from-amber-400/60 via-stone-400 to-amber-400/60" />
      <div className="w-3 h-px bg-amber-400/60" />
    </div>
    
    {/* Optional bio if available */}
    {member.bio && (
      <p className="text-stone-600 text-sm mt-3 leading-relaxed font-light">
        {member.bio}
      </p>
    )}
    
    {/* Social/Contact icons - optional */}
    <div className="flex items-center justify-center gap-3 mt-5 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
      <a href="#" className="text-stone-500 hover:text-amber-600 transition-colors">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
        </svg>
      </a>
      <a href="#" className="text-stone-500 hover:text-amber-600 transition-colors">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
        </svg>
      </a>
      <a href="#" className="text-stone-500 hover:text-amber-600 transition-colors">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      </a>
    </div>
  </div>
</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Optional CTA or extra interior image to enhance premium feel */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format"
              alt="Luxury interior"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-center p-8">
              <div className="backdrop-blur-md bg-white/20 rounded-2xl p-6 text-center max-w-2xl">
                <p className="text-white text-xl md:text-2xl font-light italic">
                  "Design is not just what it looks like and feels like. Design is how it works."
                </p>
                <p className="text-white/80 text-sm mt-3 tracking-wide">— Steve Jobs</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;