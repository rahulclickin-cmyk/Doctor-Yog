import React from 'react';
import { motion } from 'motion/react';
import { Zap } from 'lucide-react';

export default function ScrollingAnnouncement() {
  return (
    <div className="bg-primary py-3 overflow-hidden whitespace-nowrap border-y border-orange-400/30 relative z-20">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="inline-flex items-center gap-12"
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-4 text-white font-bold uppercase tracking-widest text-sm md:text-base">
            <Zap size={18} className="text-orange-200 fill-orange-200" />
            <span>New Batch Starting: 10th April 2026</span>
            <span className="opacity-50">•</span>
            <span>Integrated Yoga Therapy Training</span>
            <span className="opacity-50">•</span>
            <span>Limited Seats Available</span>
            <Zap size={18} className="text-orange-200 fill-orange-200" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
