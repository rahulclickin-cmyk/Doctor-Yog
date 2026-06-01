import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronDown, Calendar, Users, GraduationCap, Euro } from 'lucide-react';
import { IMAGES, CONTACT } from '../constants';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageHero from '../components/PageHero';

const curriculum = [
  { day: "Day 1-2", title: "Foundations of Yoga Therapy", content: "Introduction to healing science, history of yoga therapy, and basic anatomical principles." },
  { day: "Day 3-4", title: "Ayurvedic Diagnosis", content: "Learning Dosha analysis, face reading, and root cause identification through ancient methods." },
  { day: "Day 5-6", title: "Marma & Acupressure", content: "Practical training in energy points, pressure techniques, and immediate relief methods." },
  { day: "Day 7-8", title: "Disease-Specific Protocols", content: "Designing therapy plans for diabetes, hypertension, and chronic pain management." },
  { day: "Day 9-10", title: "Practical Application", content: "Live case studies, student-led therapy sessions, and refinement of techniques." },
  { day: "Day 11", title: "Certification & Closing", content: "Final assessment, certification ceremony, and integration of learning into professional practice." }
];

const schedule = [
  { time: "06:00 - 07:30", activity: "Morning Yoga & Pranayama" },
  { time: "08:00 - 09:00", activity: "Sattvic Breakfast" },
  { time: "09:30 - 11:30", activity: "Theory: Yoga & Ayurveda Science" },
  { time: "12:00 - 13:00", activity: "Nutritious Lunch" },
  { time: "14:30 - 16:30", activity: "Practical: Marma & Healing" },
  { time: "17:00 - 18:30", activity: "Evening Meditation & Chanting" },
  { time: "19:00 - 20:00", activity: "Dinner & Reflection" }
];

export default function Programs() {
  const { t, i18n } = useTranslation();
  
  const getPrice = (baseINR: number) => {
    return `₹${baseINR.toLocaleString('en-IN')}`;
  };

  const programs = [
    {
      id: 'yoga-therapy',
      title: "Integrated Yoga & Ayurveda Therapy Course",
      desc: "Intensive 11-day program combining Classical Yoga, Ayurveda, Marma Point Stimulation, and Acupressure for holistic healing and disease prevention.",
      image: IMAGES.yoga1,
      duration: "11 Days",
      price: "Offline: 550€ (₹49,500) | Online: 370€ (₹33,000)"
    },
    {
      id: 'ayurveda',
      title: "7 Days Ayurveda & Marma Therapy",
      desc: "Learn Tridosha rules, body imbalance diagnosis, Ayurvedic cooking/nutrition, daily routine lifestyle for longevity, and vital Marma point stimulation.",
      image: IMAGES.yoga2,
      duration: "7 Days",
      price: "280 Euro (₹25,200)"
    },
    {
      id: 'detox',
      title: "Detox & Holistic Healing",
      desc: "Use ancient Shatkarma, detox diet, physical alignment, acupressure, Marma therapy, and sacred Havan fire ceremony to fully rejuvenate body & mind.",
      image: IMAGES.retreat1,
      duration: "5 / 10 / 14 Days",
      price: "200€ (₹18k) / 400€ (₹36k) / 520€ (₹46.8k)"
    },
    {
      id: 'pain-management',
      title: "Therapeutic Pain Management",
      desc: "Heal chronic joint, spine, and muscle pain naturally under expert guidance using structural body alignment, acupressure, and Ayurveda techniques.",
      image: IMAGES.yoga4,
      duration: "10 Days",
      price: "Offline: 480 Euro (₹43,200)"
    },
    {
      id: '100hr-ttc',
      title: "100 Hour Yoga Teacher Training Course",
      desc: "Intense foundational training in traditional Hatha, Ashtanga Vinyasa, pranayama, and yogic philosophy.",
      image: IMAGES.gallery2,
      duration: "11 Days",
      price: "Offline: ₹55,000 | Online: ₹37,000"
    },
    {
      id: '200hr-ttc',
      title: "200 Hour Yoga Teacher Training Course",
      desc: "Professional certification course covers deep asana alignment, anatomy, ancient textbooks, pranayama, and professional teaching methodology.",
      image: IMAGES.gallery3,
      duration: "22 Days",
      price: "Offline: ₹85,000 | Online: ₹50,000"
    }
  ];

  return (
    <div className="pb-20 bg-slate-50">
      <PageHero 
        title={t('programs.title')} 
        subtitle={t('programs.subtitle')}
      />
      <div className="max-w-7xl mx-auto px-4 mt-20">
        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, i) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-orange-50 group hover:shadow-2xl transition-all"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/5 relative h-64 lg:h-auto overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                </div>
                <div className="lg:w-3/5 p-8 md:p-10 flex flex-col">
                  <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-4">
                    <Calendar size={16} />
                    <span>{program.duration}</span>
                  </div>
                  <h2 className="text-3xl font-serif mb-4 text-slate-800">{program.title}</h2>
                  <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                    {program.desc}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <span className="text-sm text-slate-400 block uppercase tracking-tighter">{t('common.startingFrom')}</span>
                      <span className="text-2xl font-bold text-slate-800">{program.price}</span>
                    </div>
                    <Link 
                      to={`/programs/${program.id}`}
                      className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-100"
                    >
                      {t('common.viewDetails')}
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-slate-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">{t('programs.notSureTitle')}</h2>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
              {t('programs.notSureDesc')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary px-10">{t('common.contactUs')}</Link>
              <a 
                href={`https://wa.me/${CONTACT.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline border-white text-white hover:bg-white hover:text-slate-900 px-10"
              >
                {t('programs.talkExpert')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
