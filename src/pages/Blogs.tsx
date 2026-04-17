import React from 'react';
import { motion } from 'motion/react';
import { IMAGES } from '../constants';
import { Calendar, User, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';

const blogs = [
  {
    title: "Understanding the Root Cause of Modern Stress",
    excerpt: "How ancient Ayurvedic principles can help us navigate the complexities of 21st-century anxiety.",
    date: "March 15, 2026",
    author: "Dr. Shakti",
    img: IMAGES.yoga1
  },
  {
    title: "The Power of Dashkarma: Yogic Detox Explained",
    excerpt: "Why seasonal cleansing is essential for maintaining long-term health and vitality.",
    date: "March 10, 2026",
    author: "Dr. Shakti",
    img: IMAGES.yoga2
  },
  {
    title: "Yoga for Chronic Pain: A Therapeutic Approach",
    excerpt: "Moving beyond physical exercise to true healing through targeted asana practice.",
    date: "March 5, 2026",
    author: "Dr. Shakti",
    img: IMAGES.yoga3
  }
];

export default function Blogs() {
  return (
    <div className="pb-20">
      <PageHero 
        title="Blogs & Insights" 
        subtitle="Deepen your understanding of holistic wellness through our latest articles."
      />
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-orange-100 flex flex-col"
            >
              <div className="h-64 overflow-hidden">
                <img src={blog.img} alt={blog.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {blog.date}</span>
                  <span className="flex items-center gap-1"><User size={14} /> {blog.author}</span>
                </div>
                <h2 className="text-2xl font-serif mb-4 text-slate-800">{blog.title}</h2>
                <p className="text-slate-600 mb-6 flex-grow">{blog.excerpt}</p>
                <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Read More <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
