import React, { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-orange-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Healing Stories</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Hear from those who have experienced transformation through the ancient wisdom of Doctor Yog.
          </p>
        </div>

        <div className="relative">
          <div 
            className="flex transition-transform duration-1000 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentIndex * (100 / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1))}%)` }}
          >
            {TESTIMONIALS.map((testimonial, i) => (
              <div 
                key={i} 
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 bg-white rounded-3xl shadow-xl shadow-orange-200/20 p-8 border border-orange-100 flex flex-col"
              >
                <Quote size={32} className="text-primary/20 mb-4" />
                <p className="text-lg text-slate-700 italic mb-8 flex-grow">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-10">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-colors ${i === currentIndex ? 'bg-primary' : 'bg-orange-200'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
