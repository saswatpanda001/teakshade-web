// pages/Contact.jsx
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircleIcon, EnvelopeIcon, MapPinIcon, PhoneIcon, XMarkIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [inquiryData, setInquiryData] = useState({ name: '', email: '', projectType: '', budget: '', details: '' });
  const [bookingData, setBookingData] = useState({ name: '', email: '', date: '', time: '', notes: '' });
  const [submissionModal, setSubmissionModal] = useState({ isOpen: false, title: '', message: '' });

  useEffect(() => {
    if (!submissionModal.isOpen) return undefined;

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSubmissionModal((current) => ({ ...current, isOpen: false }));
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [submissionModal.isOpen]);

  const openSubmissionModal = (title, message) => {
    setSubmissionModal({ isOpen: true, title, message });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    openSubmissionModal('Message Sent', 'Thank you for your message. We will respond shortly.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    openSubmissionModal('Inquiry Received', 'Project inquiry received. Our team will reach out within 24 hours.');
    setInquiryData({ name: '', email: '', projectType: '', budget: '', details: '' });
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    openSubmissionModal('Appointment Requested', 'Appointment request submitted. We will confirm your booking via email.');
    setBookingData({ name: '', email: '', date: '', time: '', notes: '' });
  };

  // Animation variants for scroll reveals
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatePresence>
        {submissionModal.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <button
              type="button"
              aria-label="Close success modal"
              className="absolute inset-0 bg-black/55 backdrop-blur-md"
              onClick={() => setSubmissionModal((current) => ({ ...current, isOpen: false }))}
            />

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-md overflow-hidden rounded-[28px] border border-white/20 bg-white/12 p-7 text-white shadow-2xl backdrop-blur-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/18 via-white/8 to-transparent pointer-events-none" />

              <button
                type="button"
                aria-label="Close modal"
                onClick={() => setSubmissionModal((current) => ({ ...current, isOpen: false }))}
                className="absolute right-4 top-4 rounded-full border border-white/15 bg-white/10 p-2 text-white/80 transition hover:bg-white/15 hover:text-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>

              <div className="relative">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400/18 ring-1 ring-emerald-300/30">
                  <CheckCircleIcon className="h-8 w-8 text-emerald-200" />
                </div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/55">Teak Shade</p>
                <h3 className="mt-3 text-3xl font-light tracking-tight">{submissionModal.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-white/78">{submissionModal.message}</p>

                <button
                  type="button"
                  onClick={() => setSubmissionModal((current) => ({ ...current, isOpen: false }))}
                  className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-white px-5 py-3.5 text-sm font-medium tracking-[0.2em] text-black transition hover:bg-stone-100"
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Image with Overlay - High-Quality Interior */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format"
          alt="Luxury modern interior"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 py-24 md:py-32 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header Section with Large Typography */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-20 md:mb-28"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white drop-shadow-lg">
              Let's Connect
            </h1>
            <div className="w-24 h-px bg-white/50 mx-auto mt-8 mb-6" />
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-light">
              Begin your journey towards exceptional interior design
            </p>
          </motion.div>

          {/* Forms Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-3 gap-8 md:gap-10"
          >
            {/* Left Card: Contact Info & Quick Message */}
            <motion.div variants={fadeUp} className="h-full">
              <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 shadow-2xl p-6 md:p-8 h-full flex flex-col transition-all duration-300 hover:bg-white/15">
                {/* Interior Image inside card */}
                <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format"
                    alt="Modern living room design"
                    className="w-full h-48 object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <h2 className="text-3xl font-light text-white mb-6">Contact</h2>
                <ul className="space-y-5 text-white/90">
                  <li className="flex items-center group">
                    <PhoneIcon className="h-5 w-5 mr-4 text-white/70 group-hover:text-white transition" />
                    <span className="text-lg">+91 6370788972</span>
                  </li>
                  <li className="flex items-center group">
                    <EnvelopeIcon className="h-5 w-5 mr-4 text-white/70 group-hover:text-white transition" />
                    <span className="text-lg">contact@teakshade.com</span>
                  </li>
                  <li className="flex items-center group">
                    <MapPinIcon className="h-5 w-5 mr-4 text-white/70 group-hover:text-white transition" />
                    <span className="text-lg">Gurgaon, India</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <a
                    href="https://wa.me/6370788972"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-600/90 backdrop-blur-sm text-white px-8 py-3.5 rounded-xl text-sm tracking-wider hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl gap-2 w-full justify-center"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.106.55 4.173 1.59 5.96L.22 23.44a.75.75 0 0 0 .9.9l5.48-1.37A11.96 11.96 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.6a9.6 9.6 0 0 1-5.16-1.5l-.36-.22-3.24.81.81-3.24-.22-.36A9.6 9.6 0 1 1 12 21.6z"/>
                      <path d="M17.5 14.5c-.3.9-1.5 1.5-2.5 1.5-2 0-4.5-1.5-6-3s-3-4-3-6c0-1 .6-2.2 1.5-2.5.3-.1.6-.1.8.2l1.5 3c.1.2.1.5 0 .7l-.8 1c.5 1 1.5 2 2.5 2.5l1-.8c.2-.1.5-.1.7 0l3 1.5c.2.2.3.5.1.8z"/>
                    </svg>
                    WhatsApp Us
                  </a>
                </div>

                {/* Quick Message Form */}
                <div className="mt-10">
                  <h3 className="text-xl font-light text-white mb-5">Quick Message</h3>
                  <form onSubmit={handleContactSubmit} className="space-y-5">
                    <input
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                      required
                    />
                    <textarea
                      placeholder="Your message"
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all resize-none"
                      required
                    ></textarea>
                    <button type="submit" className="w-full bg-white text-black font-medium py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl tracking-wide">
                      SEND MESSAGE
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Project Inquiry Form */}
            <motion.div variants={fadeUp} className="h-full">
              <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 shadow-2xl p-6 md:p-8 h-full flex flex-col transition-all duration-300 hover:bg-white/15">
                <h2 className="text-3xl font-light text-white mb-6">Project Inquiry</h2>
                <form onSubmit={handleInquirySubmit} className="space-y-5 flex-1">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1.5">Full Name *</label>
                    <input type="text" required className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50" value={inquiryData.name} onChange={(e) => setInquiryData({...inquiryData, name: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1.5">Email *</label>
                    <input type="email" required className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50" value={inquiryData.email} onChange={(e) => setInquiryData({...inquiryData, email: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1.5">Project Type</label>
                    <select className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-white/50" value={inquiryData.projectType} onChange={(e) => setInquiryData({...inquiryData, projectType: e.target.value})}>
                      <option className="text-black">Residential</option>
                      <option className="text-black">Commercial</option>
                      <option className="text-black">Consultation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1.5">Estimated Budget</label>
                    <select className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-white/50" value={inquiryData.budget} onChange={(e) => setInquiryData({...inquiryData, budget: e.target.value})}>
                      <option className="text-black">50k - 100k</option>
                      <option className="text-black">100k - 250k</option>
                      <option className="text-black">250k+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1.5">Project Details</label>
                    <textarea rows="4" className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none" value={inquiryData.details} onChange={(e) => setInquiryData({...inquiryData, details: e.target.value})}></textarea>
                  </div>
                  <button type="submit" className="w-full bg-white text-black font-medium py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl mt-4 tracking-wide">
                    SUBMIT INQUIRY
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Appointment Booking */}
            <motion.div variants={fadeUp} className="h-full">
              <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 shadow-2xl p-6 md:p-8 h-full flex flex-col transition-all duration-300 hover:bg-white/15">
                <h2 className="text-3xl font-light text-white mb-6">Book Appointment</h2>
                <form onSubmit={handleBookingSubmit} className="space-y-5 flex-1">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1.5">Name *</label>
                    <input type="text" required className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50" value={bookingData.name} onChange={(e) => setBookingData({...bookingData, name: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1.5">Email *</label>
                    <input type="email" required className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50" value={bookingData.email} onChange={(e) => setBookingData({...bookingData, email: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1.5">Preferred Date *</label>
                    <input type="date" required className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-white/50" value={bookingData.date} onChange={(e) => setBookingData({...bookingData, date: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1.5">Preferred Time</label>
                    <select className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-white/50" value={bookingData.time} onChange={(e) => setBookingData({...bookingData, time: e.target.value})}>
                      <option className="text-black">Morning (9am - 12pm)</option>
                      <option className="text-black">Afternoon (1pm - 5pm)</option>
                      <option className="text-black">Evening (6pm - 8pm)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-1.5">Additional Notes</label>
                    <textarea rows="3" className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none" value={bookingData.notes} onChange={(e) => setBookingData({...bookingData, notes: e.target.value})}></textarea>
                  </div>
                  <button type="submit" className="w-full bg-white text-black font-medium py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl mt-4 tracking-wide">
                    REQUEST APPOINTMENT
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
