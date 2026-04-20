// pages/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { HomeIcon, BuildingOfficeIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

const servicesData = [
  {
    icon: HomeIcon,
    title: 'Residential Design',
    description: 'Full-service interior design for private residences, from concept to completion. We curate every element to reflect your personal aesthetic and functional needs.',
    features: ['Space Planning', 'Furniture Selection', 'Custom Millwork', 'Lighting Design'],
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: BuildingOfficeIcon,
    title: 'Commercial Interiors',
    description: 'Elevate your brand through exceptional commercial spaces. We design offices, retail, and hospitality environments that inspire and engage.',
    features: ['Brand Integration', 'Workplace Strategy', 'FF&E Specification', 'Project Management'],
    image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: ChatBubbleBottomCenterTextIcon,
    title: 'Consultation',
    description: 'Expert advice to guide your project. Ideal for clients seeking professional direction without full design services.',
    features: ['Color Consultations', 'Material Selection', 'Layout Review', 'Sourcing Guidance'],
    image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
];

const Services = () => {
  return (
    <div className="bg-beige">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-light">Our Services</h1>
            <div className="w-16 h-px bg-black/30 mx-auto mt-6"></div>
            <p className="text-stone-600 max-w-2xl mx-auto mt-6">
              Comprehensive design solutions tailored to your vision.
            </p>
          </motion.div>

          <div className="space-y-24">
            {servicesData.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    idx % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                    <Icon className="h-12 w-12 text-black mb-6" />
                    <h2 className="text-3xl font-light mb-4">{service.title}</h2>
                    <p className="text-stone-700 leading-relaxed mb-6">{service.description}</p>
                    <ul className="grid grid-cols-2 gap-2 text-sm">
                      {service.features.map((f, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;