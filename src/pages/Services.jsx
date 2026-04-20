// pages/Services.jsx
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  HomeIcon,
  BuildingOfficeIcon,
  WrenchScrewdriverIcon,
  CursorArrowRaysIcon,
  MapPinIcon,
  PencilIcon,
  StarIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon as LocationIcon,
  ArrowRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

// --- Data ---
const servicesGrid = [
  { icon: HomeIcon, title: 'Residential Design', description: 'Bespoke interiors that reflect your personality and lifestyle.' },
  { icon: BuildingOfficeIcon, title: 'Commercial Spaces', description: 'Elevate your brand with functional, inspiring workplaces.' },
  { icon: WrenchScrewdriverIcon, title: 'Renovation & Remodeling', description: 'Transform existing spaces with expert craftsmanship.' },
  { icon: CursorArrowRaysIcon, title: '3D Visualization', description: 'Photorealistic renders to bring your vision to life.' },
  { icon: MapPinIcon, title: 'Space Planning', description: 'Optimized layouts for flow, function and beauty.' },
  { icon: PencilIcon, title: 'Custom Furniture Design', description: 'Unique pieces tailored to your space and style.' },
];

const detailedServices = [
  {
    title: 'Residential Interior Design',
    description: 'We create holistic, liveable luxury—from initial concept through to the final styling. Every element is curated to tell your story.',
    features: ['Personalised design concept', 'Furniture & lighting selection', 'Custom millwork & joinery', 'Soft furnishing & styling'],
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Luxury living room with beige sofa and gold accents',
  },
  {
    title: 'Commercial & Hospitality',
    description: 'Spaces that work as hard as you do. We design offices, boutiques and restaurants that enhance brand identity and user experience.',
    features: ['Brand integration', 'Workplace strategy', 'FF&E specification', 'Project management'],
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Modern office with glass partitions and warm lighting',
  },
  {
    title: 'Renovation & Remodeling',
    description: 'Breathe new life into tired spaces. From kitchens to bathrooms, we manage the entire renovation process with precision.',
    features: ['Structural planning', 'Material sourcing', 'Contractor coordination', 'Finish selection'],
    image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Luxury kitchen renovation with marble island',
  },
];

const processSteps = [
  { step: '01', title: 'Consultation', desc: 'We listen to your needs, vision, and budget.' },
  { step: '02', title: 'Concept Design', desc: 'Mood boards, layouts, and 3D visualisations.' },
  { step: '03', title: 'Execution', desc: 'Seamless project management & installation.' },
  { step: '04', title: 'Final Styling', desc: 'Art, accessories, and the perfect finishing touch.' },
];


const portfolioItems = [
  { id: 1, title: 'Tribeca Penthouse', category: 'Residential', image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 2, title: 'Soho Concept Store', category: 'Commercial', image: 'https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 3, title: 'Upper East Side Residence', category: 'Hospitality', image: 'https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 4, title: 'Creative Agency HQ', category: 'Residential', image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 5, title: 'Hamptons Retreat', category: 'Commercial', image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 6, title: 'Color Consultation', category: 'Residential', image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

const testimonials = [
  { 
    name: 'Ananya Mehra', 
    project: 'Luxury Residence, Gurgaon', 
    text: 'The attention to detail was exceptional. They truly understood our vision and turned it into something beyond expectations.', 
    rating: 5, 
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200&q=80&auto=format&fit=crop' 
  },
  { 
    name: 'Rohit Kapoor', 
    project: 'Corporate Office, Delhi', 
    text: 'Our workspace now feels premium and inspiring. The entire process was smooth and very professionally handled.', 
    rating: 5, 
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&q=80&auto=format&fit=crop' 
  },
  { 
    name: 'Neha Iyer', 
    project: 'Villa Interior, Goa', 
    text: 'Elegant design, thoughtful execution, and amazing aesthetics. Every corner of our home feels curated.', 
    rating: 5, 
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80&auto=format&fit=crop' 
  },
];
// --- Helper Components ---
const StarRating = ({ rating }) => (
  <div className="flex gap-0.5">
    {[...Array(rating)].map((_, i) => (
      <StarIcon key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
    ))}
  </div>
);

// Lightbox Modal
const Lightbox = ({ image, alt, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      className="relative max-w-5xl w-full"
      onClick={(e) => e.stopPropagation()}
    >
      <img src={image} alt={alt} className="w-full h-auto rounded-2xl shadow-2xl" />
      <button
        onClick={onClose}
        className="absolute -top-12 right-0 text-white p-2 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 transition"
      >
        <XMarkIcon className="h-6 w-6" />
      </button>
    </motion.div>
  </motion.div>
);

// --- Main Component ---
const Services = () => {
  const [lightboxOpen, setLightboxOpen] = useState(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  return (
    <div className="bg-gradient-to-b from-white via-stone-50 to-white">
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=2000"
            alt="Luxury interior design hero"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="inline-block px-6 py-2 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold tracking-widest mb-8 border border-white/40 uppercase text-white/90">
              Since 2012
            </span>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight leading-[0.95] mb-4">
              Our Services
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto my-10" />
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light text-white/85 leading-relaxed">
              Tailored interior solutions that blend timeless elegance with modern living.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgb(254 243 235)' }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 px-10 py-4 bg-white text-stone-900 rounded-full text-sm font-semibold tracking-wide shadow-2xl hover:shadow-amber-200/50 transition-all duration-500 inline-flex items-center gap-3 group backdrop-blur-sm border border-white/20"
            >
              Book a Consultation
              <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm animate-bounce">
          Scroll
        </div>
      </section>

      {/* --- SERVICES OVERVIEW GRID (3 columns) --- */}
      <section className="py-32 md:py-48">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-24"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-stone-900 mb-6">What we offer</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 mx-auto mb-8" />
            <p className="text-lg md:text-xl text-stone-600 font-light leading-relaxed">Comprehensive design services tailored to your unique vision and aspirations.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesGrid.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.6 }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="group bg-white/50 backdrop-blur-xl border border-white/70 rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:shadow-amber-100/40 transition-all duration-500 hover:bg-white/70"
                >
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-stone-100 to-stone-50 text-stone-800 group-hover:from-amber-100 group-hover:to-amber-50 transition-all duration-500"
                  >
                    <Icon className="h-7 w-7" />
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-light mt-8 mb-3 text-stone-900 tracking-tight">{service.title}</h3>
                  <p className="text-stone-600 text-base leading-relaxed font-light">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- DETAILED SERVICE SECTIONS (alternating) --- */}
      <section className="py-24 md:py-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-40 md:space-y-60">
          {detailedServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-150px' }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className={`grid md:grid-cols-2 gap-16 lg:gap-24 items-center`}
            >
              <div className={`${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="space-y-8">
                  <motion.h3 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-stone-900 leading-tight"
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="text-stone-700 leading-relaxed text-xl border-l-4 border-gradient-to-b from-amber-400 to-amber-300 pl-6 font-light"
                  >
                    {service.description}
                  </motion.p>
                  <ul className="grid grid-cols-2 gap-4 pt-4">
                    {service.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="flex items-center gap-3 text-stone-800 group"
                      >
                        <ChevronRightIcon className="h-5 w-5 text-amber-500 group-hover:translate-x-1 transition-transform" />
                        <span className="text-base md:text-lg font-light">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.button 
                    whileHover={{ x: 8 }}
                    className="mt-8 text-stone-800 font-medium text-base border-b-2 border-stone-400 pb-2 hover:border-amber-500 hover:text-amber-700 transition-all inline-flex items-center gap-2 group"
                  >
                    Learn More
                    <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                </div>
              </div>
              <motion.div 
                className={`${idx % 2 === 1 ? 'md:order-1' : ''} rounded-3xl overflow-hidden shadow-2xl shadow-black/20 group`}
                whileHover={{ y: -8 }}
              >
                <div className="relative overflow-hidden h-96 md:h-[500px]">
                  <img src={service.image} alt={service.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter group-hover:brightness-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- PROCESS SECTION (timeline) --- */}
      <section className="py-32 md:py-48 bg-gradient-to-b from-white via-stone-50/60 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-24"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-stone-900 mb-6">Our process</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 mx-auto mb-8" />
            <p className="text-lg md:text-xl text-stone-600 font-light">A seamless journey from vision to reality.</p>
          </motion.div>

          <div className="relative flex flex-wrap md:flex-nowrap justify-between gap-8">
            {/* Connecting line (hidden on mobile) */}
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px bg-stone-300" />
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative flex-1 text-center bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/70 shadow-lg hover:shadow-2xl hover:shadow-amber-100/40 transition-all duration-500 group"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12 + 0.3, type: 'spring', stiffness: 200 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-200 to-amber-100 text-amber-900 text-2xl font-light mb-6 relative z-10 group-hover:shadow-lg group-hover:shadow-amber-200/50 transition-all"
                >
                  {step.step}
                </motion.div>
                <h4 className="text-2xl md:text-3xl font-light text-stone-900 mb-2 tracking-tight">{step.title}</h4>
                <p className="text-stone-600 text-base font-light leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
      {/* --- TESTIMONIALS --- */}
      <section className="py-32 md:py-48 bg-gradient-to-b from-white via-stone-50/40 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-24"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-stone-900 mb-6">Kind words</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 mx-auto mb-8" />
            <p className="text-lg md:text-xl text-stone-600 font-light">What our clients say about working with us.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/70 shadow-lg hover:shadow-2xl hover:shadow-amber-100/30 transition-all duration-500 group"
              >
                <div className="flex items-center gap-4 md:gap-5 mb-6">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    src={t.image} 
                    alt={t.name} 
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-amber-200/50 group-hover:border-amber-300 transition-colors"
                  />
                  <div>
                    <h4 className="font-medium text-stone-900 text-lg md:text-xl">{t.name}</h4>
                    <p className="text-sm text-stone-500 font-light">{t.project}</p>
                  </div>
                </div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12 + 0.2 }}
                >
                  <StarRating rating={t.rating} />
                </motion.div>
                <p className="text-stone-700 mt-5 text-base md:text-lg leading-relaxed font-light italic">"{t.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="relative py-40 md:py-52 overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.05 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        >
          <img src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=2000" alt="Luxury interior" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/60 to-stone-900/70 backdrop-blur-sm" />
        </motion.div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight mb-6">Let's design your dream space</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto my-10" />
            <p className="text-white/85 max-w-2xl mx-auto mb-12 text-lg md:text-xl font-light leading-relaxed">Start your journey with a complimentary consultation. Let's create something exceptional together.</p>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: 'rgb(254 243 235)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-stone-900 rounded-full text-sm font-semibold shadow-2xl hover:shadow-amber-200/50 transition-all duration-500 inline-flex items-center gap-3 group backdrop-blur-sm border border-white/20"
            >
              Start Your Project
              <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

     
    </div>
  );
};

export default Services;