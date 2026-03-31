import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { IMAGES, CONTACT } from '../constants';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Retreats', path: '/retreats' },
  { name: 'About Us', path: '/about' },
  { name: 'Book a Class', path: '/book' },
  { 
    name: 'Programs', 
    path: '/programs',
    subLinks: [
      { name: 'Classes', path: '/programs/classes' },
      { name: 'Groups', path: '/programs/groups' },
      { name: 'Members', path: '/programs/members' },
      { name: 'Events', path: '/programs/events' },
    ]
  },
  { 
    name: 'Contact Us', 
    path: '/contact',
    subLinks: [
      { name: 'Gallery', path: '/contact/gallery' },
      { name: 'Blogs', path: '/contact/blogs' },
      { name: 'FAQs', path: '/contact/faqs' },
    ]
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3",
      scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={IMAGES.logo} alt="Doctor Yog" className="h-12 w-auto" referrerPolicy="no-referrer" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                to={link.path}
                className={cn(
                  "flex items-center gap-1 font-medium transition-colors",
                  scrolled ? "text-slate-700 hover:text-primary" : "text-white hover:text-orange-200 drop-shadow-md"
                )}
              >
                {link.name}
                {link.subLinks && <ChevronDown size={16} />}
              </Link>

              {link.subLinks && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-xl overflow-hidden border border-orange-100"
                    >
                      {link.subLinks.map((sub) => (
                        <Link 
                          key={sub.name}
                          to={sub.path}
                          className="block px-4 py-3 text-sm text-slate-700 hover:bg-orange-50 hover:text-primary transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          <Link to="/contact#register" className="btn-primary py-2 px-6 text-sm">
            Register Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn("lg:hidden p-2", scrolled ? "text-primary" : "text-white")}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white mt-2 rounded-2xl shadow-2xl overflow-hidden border border-orange-100"
          >
            <div className="p-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link 
                    to={link.path}
                    className="block p-3 font-medium text-slate-700 hover:bg-orange-50 rounded-lg"
                  >
                    {link.name}
                  </Link>
                  {link.subLinks && (
                    <div className="pl-6 border-l-2 border-orange-100 ml-3 flex flex-col gap-1 mt-1">
                      {link.subLinks.map((sub) => (
                        <Link 
                          key={sub.name}
                          to={sub.path}
                          className="block p-2 text-sm text-slate-500 hover:text-primary"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-orange-100 flex flex-col gap-3">
                <Link to="/contact#register" className="btn-primary text-center">
                  Register Now
                </Link>
                <a 
                  href={`https://wa.me/${CONTACT.whatsapp.replace('+', '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 text-green-600 font-medium p-3 border-2 border-green-600 rounded-full hover:bg-green-50"
                >
                  <Phone size={18} /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
