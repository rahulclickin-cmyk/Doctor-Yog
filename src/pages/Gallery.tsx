import React from 'react';
import { motion } from 'motion/react';
import { IMAGES } from '../constants';

const galleryImages = [
  IMAGES.gallery1, IMAGES.gallery2, IMAGES.gallery3, IMAGES.gallery4,
  IMAGES.gallery5, IMAGES.gallery6, IMAGES.gallery7, IMAGES.gallery8,
  IMAGES.yoga1, IMAGES.yoga2, IMAGES.yoga3, IMAGES.yoga4
];

export default function Gallery() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Gallery</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Glimpses of healing, transformation, and serenity at Doctor Yog.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg border border-orange-100"
            >
              <img 
                src={img} 
                alt={`Gallery ${i}`} 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
