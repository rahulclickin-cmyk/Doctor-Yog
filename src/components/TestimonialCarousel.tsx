import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-20 bg-orange-50/50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Healing Stories</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Hear from those who have experienced transformation through the ancient wisdom of Doctor Yog.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden bg-white rounded-3xl shadow-xl shadow-orange-200/20 p-8 md:p-12 border border-orange-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center text-center"
              >
                <Quote size={48} className="text-primary/20 mb-6" />
                <p className="text-xl md:text-2xl text-slate-700 italic mb-8 leading-relaxed">
                  "{TESTIMONIALS[currentIndex].quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={TESTIMONIALS[currentIndex].image} 
                    alt={TESTIMONIALS[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                    referrerPolicy="no-referrer"
                  />
                  <div className="text-left">
                    <h4 className="font-bold text-slate-900">{TESTIMONIALS[currentIndex].name}</h4>
                    <p className="text-sm text-primary font-medium">{TESTIMONIALS[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prev}
              className="p-3 rounded-full bg-white border border-orange-200 text-primary hover:bg-primary hover:text-white transition-colors shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="p-3 rounded-full bg-white border border-orange-200 text-primary hover:bg-primary hover:text-white transition-colors shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
