import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Globe, 
  Shield, 
  Zap, 
  BarChart, 
  Code,
  BookOpen,
  Smartphone,
  Cloud,
  ChevronRight,
  Play,
  Menu,
  X,
  Server
} from 'lucide-react';


import businessSuite from "../assets/images/landing/business_suite.png"
import landingImage from "../assets/images/landing/landing_image.png"
import IMSPro from "../assets/images/landing/ims_pro.png"
import cloudHosting from "../assets/images/landing/cloud_hosting.png"


import testimonial1 from "../assets/images/landing/testimonial1.png"
import testimonial2 from "../assets/images/landing/testimonial2.png"
import testimonial3 from "../assets/images/landing/testimonial3.png"

// Main Landing Component
const Landing = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'products', 'features', 'testimonials', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
      {/* Navigation */}
      <Navbar 
        activeSection={activeSection} 
        scrollToSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      {/* Hero Section */}
      <HeroSection scrollToSection={scrollToSection} />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Products Section */}
      <ProductsSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* CTA Section */}
      <CTASection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

// Navbar Component
const Navbar = ({ activeSection, scrollToSection, mobileMenuOpen, setMobileMenuOpen }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'products', label: 'Products' },
    { id: 'features', label: 'Features' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Server className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                TeakShade
              </span>
              <p className="text-xs text-gray-500">Enterprise IMS & Web Services</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-left font-medium ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50 rounded'
                      : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="mx-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section Component
const HeroSection = ({ scrollToSection }) => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              <Zap className="h-4 w-4 mr-2" />
              Enterprise-Grade Solutions
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Integrated Learning &
              </span>
              <br />
              <span className="text-gray-800">Business Solutions</span>
            </h1>
                        
            <p className="text-xl text-gray-600 max-w-lg">
              We provide cutting-edge IMS/LMS systems for educational institutions and professional web presence solutions for businesses. Scalable, secure, and designed for growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('products')}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                Explore Products <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
              >
                <Play className="mr-2 h-5 w-5" /> Watch Demo
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div>
                <h3 className="text-3xl font-bold text-blue-600">50+</h3>
                <p className="text-gray-600">Colleges</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-600">200+</h3>
                <p className="text-gray-600">Businesses</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-600">99.9%</h3>
                <p className="text-gray-600">Uptime</p>
              </div>
            </div>
          </div>
          
          {/* Hero Image/Illustration */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={landingImage}
                alt="Dashboard showing IMS and web services interface"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-200">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-3">
                  <p className="font-bold">Student Portal</p>
                  <p className="text-sm text-gray-500">Live Access</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-200">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Globe className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-3">
                  <p className="font-bold">Business Sites</p>
                  <p className="text-sm text-gray-500">Online Presence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section Component
const ServicesSection = () => {
  const services = [
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: "College IMS/LMS",
      description: "Comprehensive integrated management system for educational institutions with learning management features.",
      features: ["Student Management", "Course Management", "Attendance Tracking", "Gradebook", "Online Assessments"],
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Business Web Solutions",
      description: "Professional websites and online presence solutions tailored for businesses of all sizes.",
      features: ["Responsive Design", "SEO Optimization", "E-commerce", "Content Management", "Analytics"],
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      icon: <Cloud className="h-10 w-10" />,
      title: "Cloud Hosting & Support",
      description: "Secure, scalable hosting solutions with 24/7 technical support and maintenance.",
      features: ["99.9% Uptime", "Daily Backups", "Security Monitoring", "Scalable Resources", "Technical Support"],
      gradient: "from-green-500 to-teal-600"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600">
            We provide a comprehensive suite of enterprise solutions for education and business sectors
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white mb-6`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="flex items-center text-blue-600 font-medium hover:text-blue-800">
                Learn more <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Products Section Component
const ProductsSection = () => {
  const products = [
    {
      name: "TeakShade IMS Pro",
      category: "Education",
      description: "Complete integrated management system for colleges and universities",
      features: ["Student Portal", "Faculty Management", "Course Scheduling", "Financial Management", "Library System"],
      image: IMSPro
    },
    {
      name: "Business Presence Suite",
      category: "Business",
      description: "Professional website development with marketing tools integration",
      features: ["Custom Design", "SEO Tools", "Social Media Integration", "Analytics Dashboard", "E-commerce"],
      image: businessSuite
    },
    {
      name: "Cloud Campus",
      category: "Hybrid Solution",
      description: "Cloud-based platform combining educational and business tools",
      features: ["Scalable Infrastructure", "Multi-tenant Architecture", "API Integration", "Mobile Apps", "Advanced Security"],
      image: cloudHosting
    }
  ];

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-xl text-gray-600">
            Scalable, enterprise-grade solutions designed for growth and adaptability
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src= {product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  Request Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Features Section Component
const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Security",
      description: "Bank-grade security with encryption, secure access controls, and compliance certifications."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "High Performance",
      description: "Optimized for speed and scalability to handle thousands of concurrent users seamlessly."
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Advanced Analytics",
      description: "Comprehensive dashboards and reporting tools for data-driven decision making."
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Customizable & Extendable",
      description: "Modular architecture that allows customization and integration with third-party systems."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Responsive",
      description: "Fully responsive designs that work perfectly on all devices and screen sizes."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Multi-User Collaboration",
      description: "Role-based access control enabling seamless collaboration across teams."
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Our Solutions</span>
          </h2>
          <p className="text-xl text-gray-600">
            We combine cutting-edge technology with user-centered design to deliver exceptional value
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
            <div className="text-gray-600">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
            <div className="text-gray-600">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">Integrations</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => {
  const testimonials = [
    {
    "name": "Dr. Priya Sharma",
    "role": "Principal, Chennai International School",
    "content": "The IMS system has completely revolutionized our campus administration. It's so user-friendly yet comprehensive – our faculty and students have both benefited tremendously. The support team is always available, even during exam season!",
    "avatar": testimonial1
  },
  {
    name: "Rajesh Kumar",
    "role": "Manager, Krishna College",
    content: "Our business portal developed by them increased our online admissions by 300% in just six months. They delivered exactly what we needed, on time and within budget. Highly recommended!",
    avatar: testimonial2
  },
  {
    name: "Ananya Patel",
    "role": "IT Manager, Model School",
    content: "The integration between our learning management system and fee collection module has saved us countless hours. Now parents can pay fees, check attendance, and access report cards all in one place. सचमुच शानदार system hai!",
    avatar: testimonial3
  }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            What Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by educational institutions and businesses across multiple sectors
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-gray-700 italic mb-6">"{testimonial.content}"</p>
              
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section Component
const CTASection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
            Whether you're an educational institution or a business, we have the perfect solution for your needs.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-4">For Educational Institutions</h3>
              <p className="text-blue-200 mb-6">Get a demo of our comprehensive IMS/LMS system</p>
              <button className="bg-white text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
                Request College Demo
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-4">For Businesses</h3>
              <p className="text-blue-200 mb-6">Get a free consultation for your web presence needs</p>
              <button className="bg-white text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
                Business Consultation
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Stay Updated</h3>
            <p className="text-gray-600 mb-6">Subscribe to our newsletter for product updates and industry insights</p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-grow px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 px-8 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                {submitted ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
            
            <p className="text-gray-500 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold">TeakShade</h2>
                <p className="text-xs text-gray-400">Enterprise IMS & Web Services</p>
              </div>
            </div>
            <p className="text-gray-400">
              Providing enterprise-grade solutions for educational institutions and businesses since 2015.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">IMS Pro for Colleges</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">LMS Enterprise</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Business Web Suite</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cloud Campus</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Custom Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cloud Hosting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support & Maintenance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Training</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li>contact@teakshade.com</li>
              <li>+916370788972</li>
              <li>Delhi</li>
              <li>Support: 24/7 Available</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            ©TeakShade — Grounded Technology. Scalable Futures.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Landing;