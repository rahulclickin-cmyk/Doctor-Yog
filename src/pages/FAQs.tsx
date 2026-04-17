import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import PageHero from '../components/PageHero';

const faqs = [
  {
    q: "What is Integrated Yoga Therapy?",
    a: "Integrated Yoga Therapy is a holistic approach that combines traditional Yoga asanas, Pranayama, and Meditation with Ayurvedic principles and healing sciences like Marma and Acupressure to address the root cause of ailments."
  },
  {
    q: "Do I need prior experience for the retreats?",
    a: "No, our retreats are open to everyone, from absolute beginners to advanced practitioners. Each program is personalized based on your current health status and experience level."
  },
  {
    q: "What should I bring for the retreat in Rishikesh?",
    a: "We recommend comfortable yoga clothing, personal toiletries, any ongoing medications, and an open mind. We provide yoga mats and all necessary props."
  },
  {
    q: "How do I book a spot in the training program?",
    a: "You can book your spot by paying the initial booking amount of 100€ through our registration form. The remaining balance can be paid upon arrival or as per the early bird terms."
  },
  {
    q: "Is the food provided during retreats?",
    a: "Yes, we provide three nutritious Sattvic (pure and balanced) meals a day, prepared according to Ayurvedic principles to support your healing process."
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pb-20">
      <PageHero 
        title="Frequently Asked Questions" 
        subtitle="Everything you need to know about our programs and retreats."
      />
      <div className="max-w-3xl mx-auto px-4 mt-20">
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-orange-100 rounded-2xl overflow-hidden bg-white shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-orange-50 transition-colors"
              >
                <span className="font-bold text-lg text-slate-800">{faq.q}</span>
                <ChevronDown className={cn("text-primary transition-transform", openIndex === i && "rotate-180")} />
              </button>
              {openIndex === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="p-6 pt-0 text-slate-600 border-t border-orange-50"
                >
                  {faq.a}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
