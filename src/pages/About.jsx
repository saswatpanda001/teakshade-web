// pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const team = [
  { name: 'Elena Voss', role: 'Principal Designer', image: 'https://images.pexels.com/photos/3811082/pexels-photo-3811082.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Marcus Chen', role: 'Creative Director', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Sophia Laurent', role: 'Senior Architect', image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800' },
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
                  Founded in 2012, ÉLAN Studio was born from a desire to create interiors that transcend trends. We believe in the power of thoughtful design to elevate everyday life.
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
                <div className="backdrop-blur-xl bg-white/30 rounded-3xl border border-white/50 shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:bg-white/40">
                  <div className="relative overflow-hidden pt-6 px-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-48 h-48 object-cover rounded-full mx-auto mb-6 border-4 border-white/80 shadow-lg transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-center pb-8 px-4">
                    <h3 className="text-2xl font-light text-stone-800">{member.name}</h3>
                    <p className="text-sm tracking-wider text-stone-500 mt-1 uppercase">{member.role}</p>
                    <div className="w-12 h-px bg-stone-300 mx-auto mt-4" />
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