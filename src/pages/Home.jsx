// pages/Home.jsx
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRightIcon, SparklesIcon, StarIcon } from '@heroicons/react/24/outline';

const services = [
  { 
    title: 'Residential Design', 
    description: 'Bespoke living spaces tailored to your lifestyle, where every detail reflects your unique story.',
    icon: '🏛️'
  },
  { 
    title: 'Commercial Interiors', 
    description: 'Elevated environments that inspire productivity and leave lasting impressions on discerning clients.',
    icon: '✨'
  },
  { 
    title: 'Consultation', 
    description: 'Expert guidance to refine your vision and transform your space into a masterpiece of design.',
    icon: '🎨'
  },
];

const projects = [
  { 
    title: 'Tribeca Penthouse', 
    category: 'Residential', 
    location: 'New York',
    year: '2024',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2'
  },
  { 
    title: 'Soho Flagship', 
    category: 'Commercial', 
    location: 'London',
    year: '2023',
    image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2'
  },
  { 
    title: 'Upper East Side', 
    category: 'Residential', 
    location: 'New York',
    year: '2024',
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2'
  },
];
const testimonials = [
  { 
    quote: "TEAK SHADE transformed our home into a serene sanctuary. Every detail was considered with impeccable taste.",
    author: "Aarav Mehta", 
    role: "Homeowner, Tribeca Penthouse",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  { 
    quote: "Their commercial design elevated our brand presence and created an unforgettable client experience.",
    author: "Priya Sharma", 
    role: "Soho Flagship",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
];

// Animated counter component
const AnimatedCounter = ({ value, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-light mb-2">
        {isInView ? value : '0'}+
      </div>
      <div className="text-sm tracking-wider text-stone-500">{label}</div>
    </motion.div>
  );
};

// Parallax section component
const ParallaxSection = ({ children, offset = 50 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  
  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};

const Home = () => {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 300], [0, 60]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.88]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 1.1]);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative h-screen min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
            alt="Luxury modern interior with elegant furniture"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
        </motion.div>
        
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 z-0 bg-black/10 backdrop-blur-[2px]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Premium badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6 md:mb-8">
                <SparklesIcon className="h-4 w-4 text-white" />
                <span className="text-white/90 text-xs md:text-sm tracking-widest">PREMIUM INTERIOR DESIGN</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.1] text-white">
                <span className="block">Where Vision</span>
                <span className="block font-medium mt-2">Meets Elegance</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl mt-6 md:mt-8 font-light text-white/90 max-w-2xl leading-relaxed">
                Bespoke interior design for the discerning. 
                <span className="hidden sm:inline"> Timeless spaces, meticulously crafted.</span>
              </p>
              
              <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/portfolio"
                  className="group bg-white text-black px-8 py-4 text-sm tracking-wider hover:bg-white/90 transition-all duration-300 text-center"
                >
                  <span className="flex items-center justify-center gap-2">
                    VIEW PORTFOLIO
                    <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  to="/contact"
                  className="group border border-white/50 bg-white/10 backdrop-blur-md text-white px-8 py-4 text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300 text-center"
                >
                  BOOK CONSULTATION
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/60 text-xs tracking-widest">SCROLL</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-white border-y border-stone-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <AnimatedCounter value={150} label="Projects Completed" />
            <AnimatedCounter value={12} label="Years Experience" />
            <AnimatedCounter value={25} label="Design Awards" />
            <AnimatedCounter value={98} label="Client Satisfaction" />
          </div>
        </div>
      </section>

      {/* Services Section with Glassmorphism */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-beige to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-stone-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-200/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ParallaxSection offset={30}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 md:mb-24"
            >
              <span className="text-xs md:text-sm tracking-[.3em] text-stone-500 uppercase">What We Do</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-black mt-4 mb-6">
                Our Expertise
              </h2>
              <div className="w-20 h-px bg-black/20 mx-auto"></div>
            </motion.div>
          </ParallaxSection>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Glassmorphism card */}
                <div className="h-full p-8 md:p-10 bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-500">
                  <div className="text-4xl md:text-5xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-light mb-4 text-black">
                    {service.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <Link 
                    to="/services" 
                    className="inline-flex items-center text-sm tracking-wider text-black border-b border-black/30 pb-2 hover:border-black transition-colors group/link"
                  >
                    <span>Discover More</span>
                    <ArrowRightIcon className="h-4 w-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20">
            <ParallaxSection offset={20}>
              <div>
                <span className="text-xs md:text-sm tracking-[.3em] text-stone-500 uppercase">Portfolio</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-black mt-4">
                  Recent Projects
                </h2>
                <div className="w-20 h-px bg-black/20 mt-6"></div>
              </div>
            </ParallaxSection>
            <Link 
              to="/portfolio" 
              className="mt-6 md:mt-0 text-sm tracking-wider border-b border-black pb-2 hover:border-stone-400 transition-colors group hidden md:inline-flex items-center"
            >
              VIEW ALL PROJECTS
              <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.15, duration: 0.7 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]"></div>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs tracking-widest bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <span className="text-xs text-white/70">{project.year}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-light mb-2">{project.title}</h3>
                    <p className="text-sm text-white/70">{project.location}</p>
                  </div>
                </div>
                
                {/* Always visible minimal info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-xl font-light text-white drop-shadow-lg">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile view all link */}
          <div className="mt-10 text-center md:hidden">
            <Link 
              to="/portfolio" 
              className="inline-flex items-center text-sm tracking-wider border-b border-black pb-2 hover:border-stone-400 transition-colors"
            >
              VIEW ALL PROJECTS
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Premium Redesign */}
      <section className="py-24 md:py-16 bg-beige relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,black_1px,transparent_0)] bg-[size:40px_40px]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <ParallaxSection offset={25}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20 md:mb-28"
            >
              <span className="text-xs md:text-sm tracking-[0.3em] text-stone-500 uppercase font-medium">
                Testimonials
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-black mt-4 mb-6">
                Words from <span className="font-medium">Our Clients</span>
              </h2>
              <p className="text-stone-600 max-w-2xl mx-auto text-base md:text-lg">
                Don't just take our word for it — hear what our discerning clients have to say.
              </p>
              <div className="w-20 h-px bg-black/20 mx-auto mt-8" />
            </motion.div>
          </ParallaxSection>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.15, duration: 0.7 }}
                className="group"
              >
                <div className="relative bg-white p-8 md:p-10 lg:p-12 shadow-lg hover:shadow-xl transition-shadow duration-500">
                  {/* Large quotation mark background */}
                  <div className="absolute top-6 right-8 text-8xl font-serif text-stone-100 select-none">"</div>
                  
                  {/* Rating Stars */}
                  <div className="flex gap-1.5 mb-6 relative z-10">
                    {[...Array(t.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="relative z-10">
                    <p className="text-xl md:text-2xl font-light leading-relaxed text-stone-800 mb-8">
                      {t.quote}
                    </p>
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4 relative z-10 pt-4 border-t border-stone-100">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-stone-200 flex-shrink-0">
                      <img 
                        src={`https://images.pexels.com/photos/${idx === 0 ? '2379004' : '1181686'}/pexels-photo-${idx === 0 ? '2379004' : '1181686'}.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2`}
                        alt={t.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-black">{t.author}</p>
                      <p className="text-sm text-stone-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        {/* Background image with parallax */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
            alt="Luxury interior design consultation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>
        
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
              Begin Your <br />
              <span className="font-medium">Design Journey</span>
            </h2>
            <p className="text-lg md:text-xl mt-6 text-white/80 max-w-2xl leading-relaxed">
              Let's create a space that reflects your unique story and elevates your everyday life.
            </p>
            
            <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="group bg-white text-black px-8 md:px-10 py-4 text-sm tracking-widest hover:bg-white/90 transition-all duration-300 text-center inline-flex items-center justify-center gap-2"
              >
                SCHEDULE CONSULTATION
                <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/12125550198"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-white/50 bg-white/10 backdrop-blur-md text-white px-8 md:px-10 py-4 text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300 text-center inline-flex items-center justify-center gap-2"
              >
                WHATSAPP US
                <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.106.55 4.173 1.59 5.96L.22 23.44a.75.75 0 0 0 .9.9l5.48-1.37A11.96 11.96 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
