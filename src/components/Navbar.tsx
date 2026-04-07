import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { IMAGES, CONTACT } from '../constants';
import { cn } from '../lib/utils';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' }
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [langDropdown, setLangDropdown] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.retreats'), path: '/retreats' },
    { name: t('nav.about'), path: '/about' },
    { 
      name: t('nav.programs'), 
      path: '/programs',
      subLinks: [
        { name: 'Yoga Therapy', path: '/programs/yoga-therapy' },
        { name: 'Ayurveda Training', path: '/programs/ayurveda' },
        { name: 'Detox Healing', path: '/programs/detox' },
        { name: 'Pain Management', path: '/programs/pain-management' },
        { name: '100 Hour TTC', path: '/programs/100hr-ttc' },
        { name: '200 Hour TTC', path: '/programs/200hr-ttc' },
      ]
    },
    { 
      name: t('nav.contact'), 
      path: '/contact',
      subLinks: [
        { name: 'Gallery', path: '/contact/gallery' },
        { name: 'Blogs', path: '/contact/blogs' },
        { name: 'FAQs', path: '/contact/faqs' },
      ]
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setLangDropdown(false);
  }, [location]);

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setLangDropdown(false);
  };

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 py-4",
      scrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-white p-1 rounded-xl shadow-sm transition-transform group-hover:scale-105">
            <img src={IMAGES.logo} alt="Doctor Yog" className="h-10 md:h-12 w-auto" referrerPolicy="no-referrer" />
          </div>
          <div className={cn(
            "flex flex-col leading-tight transition-colors",
            scrolled ? "text-slate-800" : "text-white"
          )}>
            <span className="font-serif font-bold text-lg md:text-xl tracking-tight">Doctor Yog</span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-80">Holistic Wellness</span>
          </div>
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
                  "flex items-center gap-1 font-medium transition-all duration-300 relative py-2",
                  scrolled ? "text-slate-700 hover:text-primary" : "text-white hover:text-orange-200 drop-shadow-md",
                  location.pathname === link.path && "text-primary"
                )}
              >
                {link.name}
                {link.subLinks && <ChevronDown size={14} className={cn("transition-transform duration-300", activeDropdown === link.name && "rotate-180")} />}
                {location.pathname === link.path && (
                  <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>

              {link.subLinks && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div 
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white shadow-2xl rounded-2xl overflow-hidden border border-orange-50 p-2"
                    >
                      {link.subLinks.map((sub) => (
                        <Link 
                          key={sub.name}
                          to={sub.path}
                          className="block px-4 py-3 text-sm font-medium text-slate-600 hover:bg-orange-50 hover:text-primary rounded-xl transition-all"
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

          {/* Language Switcher */}
          <div 
            className="relative"
            onMouseEnter={() => setLangDropdown(true)}
            onMouseLeave={() => setLangDropdown(null)}
          >
            <button className={cn(
              "flex items-center gap-2 font-medium transition-all duration-300 py-2",
              scrolled ? "text-slate-700 hover:text-primary" : "text-white hover:text-orange-200 drop-shadow-md"
            )}>
              <Globe size={18} />
              <span>{currentLang.code.toUpperCase()}</span>
              <ChevronDown size={14} className={cn("transition-transform duration-300", langDropdown && "rotate-180")} />
            </button>
            <AnimatePresence>
              {langDropdown && (
                <motion.div 
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.95 }}
                  className="absolute top-full right-0 mt-2 w-40 bg-white shadow-2xl rounded-2xl overflow-hidden border border-orange-50 p-2"
                >
                  {languages.map((lang) => (
                    <button 
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={cn(
                        "w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all",
                        i18n.language === lang.code ? "bg-primary/10 text-primary" : "text-slate-600 hover:bg-orange-50 hover:text-primary"
                      )}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/reserve" className="btn-primary py-2.5 px-8 text-sm shadow-orange-200 shadow-lg hover:shadow-orange-300 transition-all active:scale-95">
            {t('hero.register')}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <div className="relative">
            <button 
              onClick={() => setLangDropdown(!langDropdown)}
              className={cn(
                "p-2 rounded-full transition-colors",
                scrolled ? "bg-orange-50 text-primary" : "bg-white/20 text-white backdrop-blur-sm"
              )}
            >
              <Globe size={20} />
            </button>
            <AnimatePresence>
              {langDropdown && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full right-0 mt-2 w-40 bg-white shadow-2xl rounded-2xl overflow-hidden border border-orange-50 p-2"
                >
                  {languages.map((lang) => (
                    <button 
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={cn(
                        "w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all",
                        i18n.language === lang.code ? "bg-primary/10 text-primary" : "text-slate-600 hover:bg-orange-50 hover:text-primary"
                      )}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a 
            href={`https://wa.me/${CONTACT.whatsapp.replace('+', '')}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={cn(
              "p-2 rounded-full transition-colors",
              scrolled ? "bg-green-50 text-green-600" : "bg-white/20 text-white backdrop-blur-sm"
            )}
          >
            <Phone size={20} />
          </a>
          <button 
            className={cn(
              "p-2 rounded-xl transition-all active:scale-90", 
              scrolled ? "bg-primary/10 text-primary" : "bg-white/20 text-white backdrop-blur-sm"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 lg:hidden bg-white flex flex-col"
          >
            <div className="p-6 flex items-center justify-between border-b border-orange-50">
              <Link to="/" className="flex items-center gap-2">
                <img src={IMAGES.logo} alt="Doctor Yog" className="h-10 w-auto" referrerPolicy="no-referrer" />
                <span className="font-serif font-bold text-xl text-slate-800">Doctor Yog</span>
              </Link>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 bg-slate-100 rounded-full text-slate-600 active:scale-90 transition-transform"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name} className="space-y-1">
                  <Link 
                    to={link.path}
                    className={cn(
                      "flex items-center justify-between p-4 rounded-2xl transition-all",
                      location.pathname === link.path ? "bg-primary/10 text-primary font-bold" : "text-slate-700 hover:bg-orange-50"
                    )}
                  >
                    <span className="text-lg">{link.name}</span>
                    {link.subLinks && <ChevronDown size={18} className="opacity-50" />}
                  </Link>
                  {link.subLinks && (
                    <div className="grid grid-cols-1 gap-1 pl-4">
                      {link.subLinks.map((sub) => (
                        <Link 
                          key={sub.name}
                          to={sub.path}
                          className={cn(
                            "p-3 text-sm rounded-xl transition-all",
                            location.pathname === sub.path ? "text-primary font-bold bg-primary/5" : "text-slate-500 hover:text-primary hover:bg-orange-50/50"
                          )}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-orange-50 bg-orange-50/30">
              <Link to="/reserve" className="btn-primary w-full py-4 text-center text-lg shadow-xl shadow-orange-200">
                {t('hero.register')}
              </Link>
              <p className="text-center text-slate-400 text-xs mt-6 uppercase tracking-widest font-medium">
                Himalayan Healing Foundation
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
