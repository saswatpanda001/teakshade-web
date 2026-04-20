// components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon 
} from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <footer className="relative bg-gradient-to-b from-stone-900 to-black text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-stone-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-stone-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants}>
            <Link to="/" className="inline-block group">
              <h3 className="text-3xl md:text-4xl font-light tracking-[0.2em] text-white mb-2">
                TEAK SHADE
              </h3>
              <span className="text-[10px] tracking-[0.4em] text-white/50 block -mt-1 mb-6">
                STUDIOS
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Crafting timeless interiors for the modern connoisseur. 
              Where vision meets elegance.
            </p>
            
            {/* Social Links - Mobile visible only */}
            <div className="flex gap-6 mt-8 lg:hidden">
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm tracking-wider">
                IG
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm tracking-wider">
                PN
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm tracking-wider">
                LI
              </a>
            </div>
          </motion.div>

          {/* Navigation Column */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white text-sm font-medium tracking-[0.2em] mb-6 uppercase">
              Navigate
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-white/60 hover:text-white text-sm tracking-wide transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white text-sm font-medium tracking-[0.2em] mb-6 uppercase">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <EnvelopeIcon className="h-5 w-5 text-white/40 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:hello@teakshade.com"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  hello@teakshade.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <PhoneIcon className="h-5 w-5 text-white/40 flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+916370788972"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  +91 63707 88972
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPinIcon className="h-5 w-5 text-white/40 flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">
                  DLF Phase 2, Gurgaon<br />
                  Haryana, India
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Follow Column + Newsletter (Desktop) */}
          <motion.div variants={itemVariants} className="lg:block hidden">
            <h4 className="text-white text-sm font-medium tracking-[0.2em] mb-6 uppercase">
              Follow
            </h4>
            <ul className="space-y-3 mb-8">
              <li>
                <a href="#" className="text-white/60 hover:text-white text-sm tracking-wide transition-all duration-300 hover:translate-x-1 inline-block">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white text-sm tracking-wide transition-all duration-300 hover:translate-x-1 inline-block">
                  Pinterest
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white text-sm tracking-wide transition-all duration-300 hover:translate-x-1 inline-block">
                  LinkedIn
                </a>
              </li>
            </ul>

            {/* Newsletter Signup (Premium touch) */}
            <div className="mt-6">
              <p className="text-white/60 text-xs tracking-wider mb-3">
                Subscribe to our newsletter
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 border border-white/20 rounded-none px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 transition-colors w-full"
                />
                <button
                  type="submit"
                  className="bg-white text-black px-4 py-2 text-sm font-medium tracking-wider hover:bg-white/90 transition-colors"
                >
                  →
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/40 text-xs tracking-wider text-center md:text-left">
            © {currentYear} TEAK SHADE STUDIOS. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-xs tracking-wider">
            <Link to="/privacy" className="text-white/40 hover:text-white/70 transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-white/40 hover:text-white/70 transition-colors">
              Terms
            </Link>
            <a href="#" className="text-white/40 hover:text-white/70 transition-colors">
              Sitemap
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;