import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronDown, Calendar, Users, GraduationCap, Euro } from 'lucide-react';
import { IMAGES, CONTACT } from '../constants';
import { Link } from 'react-router-dom';

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
  const programs = [
    {
      id: 'yoga-therapy',
      title: "Integrated Yoga Therapy",
      desc: "11-day intensive program combining Yoga, Ayurveda, and Healing Science.",
      image: IMAGES.yoga1,
      duration: "11 Days",
      price: "460€"
    },
    {
      id: 'ayurveda',
      title: "Ayurveda & Marma Science",
      desc: "Master the ancient art of Ayurvedic healing and vital energy points.",
      image: IMAGES.yoga2,
      duration: "7 Days",
      price: "350€"
    },
    {
      id: 'detox',
      title: "Detox & Holistic Healing",
      desc: "Purify your body and mind with traditional Himalayan detox methods.",
      image: IMAGES.retreat1,
      duration: "5 Days",
      price: "280€"
    },
    {
      id: 'pain-management',
      title: "Therapeutic Pain Management",
      desc: "Scientific yoga protocols for chronic pain and structural alignment.",
      image: IMAGES.yoga4,
      duration: "10 Days",
      price: "420€"
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif mb-6">Our Training Programs</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional certification courses rooted in authentic Himalayan wisdom and modern therapeutic science.
            </p>
          </motion.div>
        </div>

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
                      <span className="text-sm text-slate-400 block uppercase tracking-tighter">Starting from</span>
                      <span className="text-2xl font-bold text-slate-800">{program.price}</span>
                    </div>
                    <Link 
                      to={`/programs/${program.id}`}
                      className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-100"
                    >
                      View Details
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
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Not sure which program is right for you?</h2>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
              Our experts can help you choose the best path based on your goals and experience level.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary px-10">Contact Us</Link>
              <a 
                href={`https://wa.me/${CONTACT.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline border-white text-white hover:bg-white hover:text-slate-900 px-10"
              >
                Talk to an Expert
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
