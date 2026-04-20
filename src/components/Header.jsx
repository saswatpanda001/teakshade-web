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

  // Active route check
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
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Add scrolled class for header background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-beige/80 backdrop-blur-sm'
        } border-b border-black/5`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="relative group">
              <span className="text-xl md:text-2xl font-light tracking-widest text-black">
                TEAK SHADE
              </span>
              <span className="text-[10px] md:text-xs tracking-[.3em] text-stone-500 block -mt-1">
                STUDIOS
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group relative text-sm font-medium tracking-wide transition-colors duration-300 ${
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
                className="bg-black text-white px-6 py-2.5 text-sm font-medium tracking-wider hover:bg-stone-800 transition-colors duration-300"
              >
                INQUIRE
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 -mr-2 text-black hover:bg-black/5 rounded-full transition-colors"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          mobileMenuOpen
            ? 'visible opacity-100'
            : 'invisible opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Slide-in Panel - solid white for proper contrast */}
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Panel Header */}
            <div className="flex items-center justify-between p-5 border-b border-stone-100">
              <span className="text-lg font-light tracking-widest text-black">
                MENU
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-stone-100 transition-colors"
              >
                <XMarkIcon className="h-6 w-6 text-black" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 overflow-y-auto py-6 px-4">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-4 text-lg font-light rounded-lg transition-all duration-200 ${
                      isActive(item.href)
                        ? 'bg-stone-100 text-black font-medium'
                        : 'text-stone-700 hover:bg-stone-50 hover:text-black'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile CTA & Contact */}
            <div className="p-5 border-t border-stone-100 bg-stone-50/50">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full bg-black text-white text-center py-4 text-sm font-medium tracking-widest hover:bg-stone-800 transition-colors"
              >
                INQUIRE NOW
              </Link>
              <div className="mt-6 text-center space-y-2">
                <p className="text-sm text-stone-600">contact@teakshade.com</p>
                <p className="text-sm text-stone-600">+91 63707 88972</p>
                <div className="flex justify-center gap-6 pt-4">
                  <a href="#" className="text-xs tracking-wider text-stone-500 hover:text-black transition">
                    INSTAGRAM
                  </a>
                  <a href="#" className="text-xs tracking-wider text-stone-500 hover:text-black transition">
                    PINTEREST
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default Header;