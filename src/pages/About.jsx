// pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const team = [
  { name: 'Elena Voss', role: 'Principal Designer', image: 'https://images.pexels.com/photos/3811082/pexels-photo-3811082.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Marcus Chen', role: 'Creative Director', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Sophia Laurent', role: 'Senior Architect', image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

const About = () => {
  return (
    <div className="bg-beige">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-light tracking-tight"
          >
            Our Story
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-3xl font-light mb-6">Philosophy of Simplicity</h2>
              <div className="w-12 h-px bg-black/30 mb-6"></div>
              <p className="text-stone-700 leading-relaxed mb-4">
                Founded in 2012, ÉLAN Studio was born from a desire to create interiors that transcend trends. We believe in the power of thoughtful design to elevate everyday life.
              </p>
              <p className="text-stone-700 leading-relaxed">
                Our approach marries timeless elegance with modern sensibility, always prioritizing quality, light, and the unique narrative of each client.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/271805/pexels-photo-271805.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Design philosophy"
                className="w-full h-96 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light">The Visionaries</h2>
            <div className="w-16 h-px bg-black/30 mx-auto mt-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 object-cover rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-light">{member.name}</h3>
                <p className="text-sm tracking-wider text-stone-500">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;