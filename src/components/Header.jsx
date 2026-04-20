// components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Active route check (supports nested routes)
  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : originalOverflow;
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Add background/scrolled effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-lg shadow-black/5'
          : 'bg-white/40 backdrop-blur-sm'
      } border-b border-white/20`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link
            to="/"
            className="relative group"
            aria-label="TEAK SHADE Studios – Home"
          >
            <span className="text-2xl md:text-3xl font-light tracking-[0.2em] text-black">
              TEAK SHADE
            </span>
            <span className="text-[10px] md:text-xs tracking-[0.4em] text-stone-500 block -mt-1">
              STUDIOS
            </span>
            {/* Subtle hover effect */}
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-black/30 transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                  isActive(item.href)
                    ? 'text-black'
                    : 'text-stone-600 hover:text-black'
                }`}
              >
                {item.name}
                {/* Animated underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-black transition-all duration-300 ${
                    isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="relative overflow-hidden bg-black px-8 py-3 text-sm font-medium tracking-wider text-white transition-all duration-300 hover:bg-stone-800 hover:shadow-lg"
            >
              INQUIRE
              <span className="absolute inset-0 h-full w-full scale-0 rounded bg-white/20 transition-transform duration-500 group-hover:scale-100" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2.5 rounded-full hover:bg-black/5 transition-colors duration-200"
          >
            <Bars3Icon className="h-7 w-7 text-black" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay & Panel */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          mobileMenuOpen
            ? 'visible opacity-100'
            : 'invisible opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop with blur */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Slide-in panel */}
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-md bg-white/95 backdrop-blur-xl shadow-2xl transition-transform duration-500 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full p-6">
            {/* Panel Header */}
            <div className="flex items-center justify-between border-b border-stone-200/50 pb-4">
              <span className="text-lg font-light tracking-widest text-black">
                MENU
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-black/5 transition-colors"
              >
                <XMarkIcon className="h-6 w-6 text-black" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex-1 py-8 space-y-1 overflow-y-auto">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-4 text-lg font-light tracking-wide rounded-xl transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-black/5 text-black'
                      : 'text-stone-700 hover:bg-stone-100/50 hover:text-black'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile CTA & Contact Info */}
            <div className="border-t border-stone-200/50 pt-6 space-y-4">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full bg-black px-6 py-4 text-center text-sm font-medium tracking-widest text-white transition-colors hover:bg-stone-800"
              >
                INQUIRE NOW
              </Link>
              <div className="text-center text-xs text-stone-500 space-y-1">
                <p>hello@teakshade.com</p>
                <p>+1 (212) 555-0198</p>
                <div className="flex justify-center gap-6 pt-4">
                  <a href="#" className="text-stone-400 hover:text-black transition">
                    IG
                  </a>
                  <a href="#" className="text-stone-400 hover:text-black transition">
                    PN
                  </a>
                  <a href="#" className="text-stone-400 hover:text-black transition">
                    LI
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;