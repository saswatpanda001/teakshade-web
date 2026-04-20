// components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white/80 mt-20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-xl font-light tracking-widest mb-4">ÉLAN</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Crafting timeless interiors for the modern connoisseur.
            </p>
          </div>
          <div>
            <h4 className="text-white text-sm font-medium tracking-wider mb-4">NAVIGATE</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-medium tracking-wider mb-4">CONTACT</h4>
            <ul className="space-y-2 text-sm">
              <li>contact@teakshade.com</li>
              <li>+91 6370788972</li>
              <li>Gurgaon, India</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-medium tracking-wider mb-4">FOLLOW</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition">Pinterest</a></li>
              <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-xs text-white/50">
          © 2025 TEAK SHADE. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;