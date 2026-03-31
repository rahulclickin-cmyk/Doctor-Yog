import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronDown, Calendar, Users, GraduationCap, Euro } from 'lucide-react';
import { IMAGES } from '../constants';
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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold mb-4 uppercase tracking-wider">
            Intensive Training
          </div>
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Integrated Yoga Therapy Training</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive 11-day program combining Yoga, Ayurveda, and Healing Science for modern therapists.
          </p>
        </div>

        {/* Overview Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-serif mb-6">Overview</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              This program is designed to bridge the gap between ancient healing wisdom and modern therapeutic needs. You will learn to diagnose the root cause of ailments and apply integrated healing methods.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <CheckCircle2 className="text-primary" />, text: "Yoga + Ayurveda" },
                { icon: <CheckCircle2 className="text-primary" />, text: "Healing Science" },
                { icon: <CheckCircle2 className="text-primary" />, text: "Root Cause Diagnosis" },
                { icon: <CheckCircle2 className="text-primary" />, text: "Practical Therapy" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  {item.icon}
                  <span className="font-medium text-slate-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={IMAGES.yoga5} alt="Training" className="rounded-3xl shadow-2xl" referrerPolicy="no-referrer" />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-orange-100 hidden md:block">
              <div className="text-primary font-bold text-2xl">10 - 20 April</div>
              <div className="text-slate-500">Intensive Program</div>
            </div>
          </div>
        </div>

        {/* What You Will Learn */}
        <section className="mb-24 bg-orange-50 p-12 rounded-[3rem]">
          <h2 className="text-3xl font-serif mb-12 text-center">What You Will Learn</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Ashtanga Yoga", desc: "The eight limbs of yoga for holistic balance." },
              { title: "Disease Understanding", desc: "Deep dive into common modern ailments." },
              { title: "Marma + Acupressure", desc: "Energy point healing techniques." },
              { title: "Therapeutic Yoga", desc: "Designing custom plans for patients." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-primary">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Curriculum Accordion */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-3xl font-serif mb-8">Curriculum</h2>
            <div className="space-y-4">
              {curriculum.map((item, i) => (
                <div key={i} className="border border-orange-100 rounded-xl overflow-hidden bg-white">
                  <button 
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-orange-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="bg-primary/10 text-primary font-bold px-3 py-1 rounded-lg text-sm">{item.day}</span>
                      <span className="font-bold text-slate-800">{item.title}</span>
                    </div>
                    <ChevronDown className={cn("transition-transform", openIndex === i && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-0 text-slate-600 border-t border-orange-50">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Daily Schedule Table */}
          <div>
            <h2 className="text-3xl font-serif mb-8">Daily Schedule</h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-orange-100">
              <table className="w-full">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="p-4 text-left">Time</th>
                    <th className="p-4 text-left">Activity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-orange-50">
                  {schedule.map((item, i) => (
                    <tr key={i} className="hover:bg-orange-50 transition-colors">
                      <td className="p-4 font-bold text-primary">{item.time}</td>
                      <td className="p-4 text-slate-700">{item.activity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Who Can Join & Pricing */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-slate-900 text-white p-12 rounded-[2rem]">
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-primary" size={32} />
              <h2 className="text-3xl font-serif">Who Can Join</h2>
            </div>
            <ul className="space-y-4">
              {["Yoga teachers looking to specialize", "Therapists and healers", "Beginners with a passion for healing", "Anyone interested in self-transformation"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <GraduationCap className="text-primary w-5 h-5" />
                  <span className="text-lg opacity-90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-12 rounded-[2rem] shadow-2xl border-2 border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-white px-6 py-2 rounded-bl-2xl font-bold">
              Best Value
            </div>
            <div className="flex items-center gap-3 mb-8">
              <Euro className="text-primary" size={32} />
              <h2 className="text-3xl font-serif">Pricing</h2>
            </div>
            <div className="space-y-6 mb-10">
              <div className="flex justify-between items-center pb-4 border-b border-orange-100">
                <span className="text-slate-600">Full Program</span>
                <span className="text-3xl font-bold text-slate-800">460€</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-orange-100">
                <span className="text-primary font-bold">Early Bird (Limited)</span>
                <span className="text-3xl font-bold text-primary">400€</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Booking Amount</span>
                <span className="text-2xl font-bold text-slate-800">100€</span>
              </div>
            </div>
            <Link to="/contact#register" className="btn-primary w-full text-xl py-4 text-center block">Register Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
