// pages/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [inquiryData, setInquiryData] = useState({ name: '', email: '', projectType: '', budget: '', details: '' });
  const [bookingData, setBookingData] = useState({ name: '', email: '', date: '', time: '', notes: '' });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message. We will respond shortly.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    alert('Project inquiry received. Our team will reach out within 24 hours.');
    setInquiryData({ name: '', email: '', projectType: '', budget: '', details: '' });
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert('Appointment request submitted. We will confirm your booking via email.');
    setBookingData({ name: '', email: '', date: '', time: '', notes: '' });
  };

  return (
    <div className="bg-beige">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-light">Let's Connect</h1>
            <div className="w-16 h-px bg-black/30 mx-auto mt-6"></div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info & WhatsApp */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-light mb-6">Contact Information</h2>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <PhoneIcon className="h-5 w-5 mr-3" />
                    +91 6370788972
                  </li>
                  <li className="flex items-center">
                    <EnvelopeIcon className="h-5 w-5 mr-3" />
                    contact@teakshade.com
                  </li>
                  <li className="flex items-center">
                    <MapPinIcon className="h-5 w-5 mr-3" />
                    Gurgaon, India
                  </li>
                </ul>
              </div>
              <div>
                <a
                  href="https://wa.me/6370788972"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 text-white px-6 py-3 text-sm tracking-wider hover:bg-green-700 transition"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.106.55 4.173 1.59 5.96L.22 23.44a.75.75 0 0 0 .9.9l5.48-1.37A11.96 11.96 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.6a9.6 9.6 0 0 1-5.16-1.5l-.36-.22-3.24.81.81-3.24-.22-.36A9.6 9.6 0 1 1 12 21.6z"/>
                    <path d="M17.5 14.5c-.3.9-1.5 1.5-2.5 1.5-2 0-4.5-1.5-6-3s-3-4-3-6c0-1 .6-2.2 1.5-2.5.3-.1.6-.1.8.2l1.5 3c.1.2.1.5 0 .7l-.8 1c.5 1 1.5 2 2.5 2.5l1-.8c.2-.1.5-.1.7 0l3 1.5c.2.2.3.5.1.8z"/>
                  </svg>
                  WhatsApp Us
                </a>
              </div>

              {/* Simple Contact Form */}
              <div className="bg-white p-6 mt-8">
                <h3 className="text-xl font-light mb-4">Quick Message</h3>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full border border-gray-300 p-3 text-sm"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full border border-gray-300 p-3 text-sm"
                    required
                  />
                  <textarea
                    placeholder="Message"
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full border border-gray-300 p-3 text-sm"
                    required
                  ></textarea>
                  <button type="submit" className="bg-black text-white px-6 py-3 text-sm tracking-wider w-full hover:bg-stone-800">
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>

            {/* Project Inquiry Form */}
            <div className="bg-white p-8">
              <h2 className="text-2xl font-light mb-6">Project Inquiry</h2>
              <form onSubmit={handleInquirySubmit} className="space-y-5">
                <div>
                  <label className="block text-sm mb-1">Full Name *</label>
                  <input type="text" required className="w-full border border-gray-300 p-3 text-sm" value={inquiryData.name} onChange={(e) => setInquiryData({...inquiryData, name: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm mb-1">Email *</label>
                  <input type="email" required className="w-full border border-gray-300 p-3 text-sm" value={inquiryData.email} onChange={(e) => setInquiryData({...inquiryData, email: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm mb-1">Project Type</label>
                  <select className="w-full border border-gray-300 p-3 text-sm" value={inquiryData.projectType} onChange={(e) => setInquiryData({...inquiryData, projectType: e.target.value})}>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-1">Estimated Budget</label>
                  <select className="w-full border border-gray-300 p-3 text-sm" value={inquiryData.budget} onChange={(e) => setInquiryData({...inquiryData, budget: e.target.value})}>
                    <option>$50k - $100k</option>
                    <option>$100k - $250k</option>
                    <option>$250k+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-1">Project Details</label>
                  <textarea rows="4" className="w-full border border-gray-300 p-3 text-sm" value={inquiryData.details} onChange={(e) => setInquiryData({...inquiryData, details: e.target.value})}></textarea>
                </div>
                <button type="submit" className="bg-black text-white px-6 py-3 text-sm tracking-wider w-full hover:bg-stone-800">
                  SUBMIT INQUIRY
                </button>
              </form>
            </div>

            {/* Appointment Booking */}
            <div className="bg-white p-8">
              <h2 className="text-2xl font-light mb-6">Book Appointment</h2>
              <form onSubmit={handleBookingSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm mb-1">Name *</label>
                  <input type="text" required className="w-full border border-gray-300 p-3 text-sm" value={bookingData.name} onChange={(e) => setBookingData({...bookingData, name: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm mb-1">Email *</label>
                  <input type="email" required className="w-full border border-gray-300 p-3 text-sm" value={bookingData.email} onChange={(e) => setBookingData({...bookingData, email: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm mb-1">Preferred Date *</label>
                  <input type="date" required className="w-full border border-gray-300 p-3 text-sm" value={bookingData.date} onChange={(e) => setBookingData({...bookingData, date: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm mb-1">Preferred Time</label>
                  <select className="w-full border border-gray-300 p-3 text-sm" value={bookingData.time} onChange={(e) => setBookingData({...bookingData, time: e.target.value})}>
                    <option>Morning (9am - 12pm)</option>
                    <option>Afternoon (1pm - 5pm)</option>
                    <option>Evening (6pm - 8pm)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-1">Additional Notes</label>
                  <textarea rows="3" className="w-full border border-gray-300 p-3 text-sm" value={bookingData.notes} onChange={(e) => setBookingData({...bookingData, notes: e.target.value})}></textarea>
                </div>
                <button type="submit" className="bg-black text-white px-6 py-3 text-sm tracking-wider w-full hover:bg-stone-800">
                  REQUEST APPOINTMENT
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;