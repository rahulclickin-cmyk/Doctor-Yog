import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Calendar, ArrowRight, CheckCircle2, Award, Users, Globe, MapPin, Heart, Shield, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { IMAGES, CONTACT, HERO_SLIDES } from '../constants';
import { Link } from 'react-router-dom';
import ScrollingAnnouncement from '../components/ScrollingAnnouncement';
import TestimonialCarousel from '../components/TestimonialCarousel';
import YogaPoses from '../components/YogaPoses';

export default function Home() {
  const { t } = useTranslation();

  const drShaktiImages = [
    IMAGES.drShakti,
    IMAGES.yoga1,
    IMAGES.yoga2,
    IMAGES.yoga3,
    IMAGES.yoga4,
    IMAGES.yoga5,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % drShaktiImages.length);
    }, 4000);
    const heroTimer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => {
      clearInterval(timer);
      clearInterval(heroTimer);
    };
  }, [drShaktiImages.length]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentHeroSlide}
              src={HERO_SLIDES[currentHeroSlide]} 
              alt="Himalayan Yoga" 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif mb-6 drop-shadow-lg">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl font-light mb-10 text-orange-50 drop-shadow-md">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/reserve" className="btn-primary text-lg px-10">
                {t('hero.register')}
              </Link>
              <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-10 flex items-center gap-2">
                {t('common.contactUs')}
              </Link>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </div>
      </section>

      <ScrollingAnnouncement />

      {/* Highlight Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 md:p-16 text-white flex flex-col justify-center">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold mb-6 tracking-wider uppercase">
                {t('featured.badge')}
              </div>
              <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
                🌿 {t('featured.title')}
              </h2>
              <div className="flex items-center gap-3 mb-8 text-xl font-medium bg-black/10 p-4 rounded-xl border border-white/10">
                <Calendar className="text-orange-100" />
                <span>{t('featured.date')}</span>
              </div>
              
              <ul className="space-y-4 mb-10">
                {(t('featured.bullets', { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-orange-100 mt-1 flex-shrink-0" />
                    <span className="text-lg opacity-90">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/programs" className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-orange-50 transition-colors shadow-lg">
                  {t('common.learnMore')}
                </Link>
                <a href="/brochure.pdf" download className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors text-center">
                  {t('featured.brochure')}
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 relative min-h-[400px]">
              <img 
                src={IMAGES.yoga1} 
                alt="Yoga Training" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Dr. Shakti (Moved to 3rd Section) */}
      <section className="py-24 bg-tertiary text-white relative overflow-hidden">
        {/* Chakra Animation Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 pointer-events-none">
          <motion.svg 
            viewBox="0 0 200 200" 
            className="w-full h-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="8 8" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <line 
                key={angle}
                x1="100" y1="100" 
                x2={100 + 90 * Math.cos((angle * Math.PI) / 180)} 
                y2={100 + 90 * Math.sin((angle * Math.PI) / 180)} 
                stroke="currentColor" strokeWidth="0.2" 
              />
            ))}
            <path d="M100 20 L110 40 L90 40 Z" fill="currentColor" transform="rotate(0 100 100)" />
            <path d="M100 20 L110 40 L90 40 Z" fill="currentColor" transform="rotate(60 100 100)" />
            <path d="M100 20 L110 40 L90 40 Z" fill="currentColor" transform="rotate(120 100 100)" />
            <path d="M100 20 L110 40 L90 40 Z" fill="currentColor" transform="rotate(180 100 100)" />
            <path d="M100 20 L110 40 L90 40 Z" fill="currentColor" transform="rotate(240 100 100)" />
            <path d="M100 20 L110 40 L90 40 Z" fill="currentColor" transform="rotate(300 100 100)" />
          </motion.svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
              
              <div className="relative z-10 rounded-3xl shadow-2xl border-2 border-white/10 w-full h-[400px] md:h-[500px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={drShaktiImages[currentImageIndex]}
                    alt="Dr. Shakti"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
                
                {/* Image Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {drShaktiImages.map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === currentImageIndex ? "bg-white w-6" : "bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-serif mb-8">{t('home.shaktiTitle')}</h2>
              <p className="text-xl text-orange-100 mb-10 leading-relaxed italic">
                "{t('home.shaktiQuote')}"
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                {(t('home.shaktiStats', { returnObjects: true }) as string[]).map((statLabel, i) => {
                  const icons = [<Award className="text-primary" />, <Globe className="text-primary" />, <Users className="text-primary" />, <CheckCircle2 className="text-primary" />];
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <div className="p-2 bg-white/5 rounded-lg">{icons[i]}</div>
                      <span className="font-medium">{statLabel}</span>
                    </div>
                  );
                })}
              </div>
              
              <Link to="/about" className="btn-primary inline-block">
                {t('common.knowMore')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Integrated Yoga Therapy? */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">{t('why.title')}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t('why.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(t('why.items', { returnObjects: true }) as any[]).map((item, i) => {
              const icons = [<Heart className="text-primary" />, <Award className="text-primary" />, <Zap className="text-primary" />, <Shield className="text-primary" />];
              return (
                <div key={i} className="p-8 bg-orange-50 rounded-3xl border border-orange-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    {icons[i]}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Unique Positioning */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-slate-800">Doctor Yog Healing Method</h2>
          <p className="text-lg text-slate-600 mb-16 max-w-2xl mx-auto">A systematic approach to holistic transformation rooted in ancient wisdom.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "Step 1",
                title: "Root Cause Diagnosis",
                desc: "Face reading • Body alignment • Energy analysis",
                icon: "🔍"
              },
              {
                step: "Step 2",
                title: "Personalized Plan",
                desc: "Yoga • Ayurveda • Detox • Meditation • Yajna",
                icon: "📋"
              },
              {
                step: "Step 3",
                title: "Transformation",
                desc: "7 / 14 / 21 Days Programs",
                icon: "🦋"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl shadow-xl border border-orange-100 flex flex-col items-center"
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <div className="text-primary font-bold uppercase tracking-widest text-sm mb-2">{item.step}</div>
                <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Retreats Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Retreats Preview</h2>
              <p className="text-lg text-slate-600">Experience deep healing in the serene lap of the Himalayas.</p>
            </div>
            <Link to="/retreats" className="btn-outline flex items-center gap-2">
              View All Retreats <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Detox Retreat", img: IMAGES.retreat1 },
              { title: "Panchakarma", img: IMAGES.retreat2 },
              { title: "Stress Healing", img: IMAGES.yoga2 },
              { title: "Diabetes Treatment / Chronic Disease", img: IMAGES.yoga3 },
              { title: "Pain Management", img: IMAGES.yoga4 }
            ].map((retreat, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.03 }}
                className="group relative h-[400px] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              >
                <img 
                  src={retreat.img} 
                  alt={retreat.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{retreat.title}</h3>
                  <div className="h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personalized Yoga Therapy Section (New) */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Animated Background Elements for Highlight */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 p-8 md:p-12 bg-orange-50/30 rounded-[3rem] border border-orange-100 shadow-inner relative"
            >
              <div className="absolute top-0 right-0 p-8">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 border-2 border-dashed border-primary/20 rounded-full flex items-center justify-center"
                >
                  <Zap className="text-primary/30" size={24} />
                </motion.div>
              </div>

              <div className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-bold mb-8 shadow-lg animate-pulse">
                {t('home.availableOnline')}
              </div>
              <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight text-slate-900">
                {t('home.therapyTitle')} – <span className="text-primary">{t('nav.home')}</span>
              </h2>
              <p className="text-xl text-primary font-medium mb-8">{t('home.therapySubtitle')}</p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                {["1 hr", "Mae Sa", "Online", "Rishikesh"].map((tag, i) => (
                  <button key={i} className="px-4 py-2 border border-orange-200 rounded-lg text-slate-600 font-medium italic hover:bg-primary hover:text-white hover:border-primary transition-colors focus:bg-primary focus:text-white focus:border-primary">
                    {tag}
                  </button>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/reserve" className="btn-primary px-10 py-4 text-lg">
                  {t('common.register')}
                </Link>
                <Link to="/reserve?trial=true" className="btn-outline border-primary text-primary hover:bg-primary hover:text-white px-10 py-4 text-lg">
                  {t('common.bookTrial')}
                </Link>
              </div>

              <div className="mt-12 pt-12 border-t border-orange-100">
                <h3 className="text-2xl font-serif mb-4">{t('home.serviceDescTitle')}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {t('home.serviceDesc')}
                </p>
              </div>
            </motion.div>
            
            <div className="lg:w-1/2 bg-orange-50/50 p-8 md:p-12 rounded-[3rem] border border-orange-100">
              <h3 className="text-2xl font-serif mb-8">{t('home.benefitsTitle')}</h3>
              <div className="space-y-6">
                {(t('home.benefits', { returnObjects: true }) as any[]).map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-orange-50">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-primary font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">{benefit.title}</h4>
                      <p className="text-sm text-slate-500">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ayurveda & Healing Section (New) */}
      <section className="py-20 bg-orange-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-serif mb-6">{t('home.ayurvedaTitle')}</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {t('home.ayurvedaDesc')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {(t('home.ayurvedaItems', { returnObjects: true }) as any[]).map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-800">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/programs" className="btn-primary">
                {t('common.viewDetails')}
              </Link>
            </div>
            <div className="lg:w-1/2">
              <img 
                src={IMAGES.yoga4} 
                alt="Ayurveda Healing" 
                className="rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience the Himalayas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <img src={IMAGES.gallery1} alt="Rishikesh" className="rounded-2xl shadow-lg h-64 w-full object-cover" referrerPolicy="no-referrer" />
              <img src={IMAGES.gallery2} alt="Yoga Session" className="rounded-2xl shadow-lg h-64 w-full object-cover mt-8" referrerPolicy="no-referrer" />
              <img src={IMAGES.gallery3} alt="Meditation" className="rounded-2xl shadow-lg h-64 w-full object-cover -mt-8" referrerPolicy="no-referrer" />
              <img src={IMAGES.gallery4} alt="Nature" className="rounded-2xl shadow-lg h-64 w-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-serif mb-6">{t('home.himalayasTitle')}</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {t('home.himalayasDesc')}
              </p>
              <div className="space-y-4 mb-10">
                {[
                  "Serene riverside meditation spots",
                  "Organic Sattvic meals prepared with local herbs",
                  "Traditional Himalayan healing atmosphere",
                  "Quiet spaces for self-reflection and study"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/reserve" className="btn-primary inline-block">
                {t('hero.register')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TestimonialCarousel />

      <YogaPoses />

      {/* Who is this for? */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">{t('home.whoTitle')}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t('home.whoSubtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(t('home.whoItems', { returnObjects: true }) as any[]).map((item, i) => {
              const icons = ["🌱", "🧘‍♀️", "⚖️", "✨"];
              return (
                <div key={i} className="p-8 bg-orange-50 rounded-3xl border border-orange-100 text-center hover:-translate-y-2 transition-transform">
                  <div className="text-5xl mb-4">{icons[i]}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
