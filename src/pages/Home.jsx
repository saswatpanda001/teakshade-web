// pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const services = [
  { title: 'Residential Design', description: 'Bespoke living spaces tailored to your lifestyle.' },
  { title: 'Commercial Interiors', description: 'Elevated environments for discerning businesses.' },
  { title: 'Consultation', description: 'Expert guidance to refine your vision.' },
];

const projects = [
  { title: 'Tribeca Loft', category: 'Residential', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { title: 'Soho Flagship', category: 'Commercial', image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { title: 'Upper East Side', category: 'Residential', image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

const testimonials = [
  { quote: "ÉLAN transformed our home into a serene sanctuary. Every detail was considered.", author: "Michael Chen", role: "Homeowner" },
  { quote: "Their commercial design elevated our brand presence and client experience.", author: "Sarah Williams", role: "CEO, Lumina Group" },
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen max-h-[900px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Luxury interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-tight">
              Where Vision <br />
              <span className="font-medium">Meets Elegance</span>
            </h1>
            <p className="text-xl md:text-2xl mt-6 font-light text-white/90 max-w-2xl">
              Bespoke interior design for the discerning. Timeless spaces, meticulously crafted.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/portfolio"
                className="bg-white text-black px-8 py-4 text-sm tracking-wider hover:bg-stone-100 transition-colors"
              >
                VIEW PORTFOLIO
              </Link>
              <Link
                to="/contact"
                className="border border-white text-white px-8 py-4 text-sm tracking-wider hover:bg-white hover:text-black transition-colors"
              >
                BOOK CONSULTATION
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-beige">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-black">Our Expertise</h2>
            <div className="w-16 h-px bg-black/30 mx-auto mt-6"></div>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-white/50 backdrop-blur-sm"
              >
                <h3 className="text-2xl font-light mb-4">{service.title}</h3>
                <p className="text-stone-600">{service.description}</p>
                <Link to="/services" className="inline-flex items-center mt-6 text-sm tracking-wider border-b border-black pb-1 hover:border-stone-400 transition">
                  Learn more <ArrowRightIcon className="h-4 w-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-black">Recent Projects</h2>
              <div className="w-16 h-px bg-black/30 mt-6"></div>
            </div>
            <Link to="/portfolio" className="text-sm tracking-wider border-b border-black pb-1 hover:border-stone-400 transition hidden md:block">
              VIEW ALL
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="text-white">
                    <p className="text-sm tracking-wider">{project.category}</p>
                    <h3 className="text-xl font-light mt-1">{project.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-light text-black mb-12">Client Reflections</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {testimonials.map((t, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-xl font-light italic text-stone-700">"{t.quote}"</p>
                  <p className="mt-6 text-sm tracking-wider">{t.author}</p>
                  <p className="text-xs text-stone-500">{t.role}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-black text-white text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light">Begin Your Journey</h2>
            <p className="text-xl mt-4 text-white/70 max-w-2xl mx-auto">
              Let's create a space that reflects your unique story.
            </p>
            <Link
              to="/contact"
              className="inline-block mt-10 bg-white text-black px-10 py-4 text-sm tracking-widest hover:bg-stone-100 transition"
            >
              SCHEDULE CONSULTATION
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;