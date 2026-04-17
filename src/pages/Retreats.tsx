import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Wind, Heart, ShieldCheck, Activity, Zap } from 'lucide-react';
import { IMAGES } from '../constants';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const retreats = [
  {
    title: "Detox Retreat",
    img: IMAGES.retreat1,
    desc: "Yogic detox (Dashkarma), Ayurvedic cleansing, and breath correction to reset your system.",
    benefits: ["Remove toxins", "Reset digestion", "Clear skin", "Mental clarity"],
    icon: <Wind className="text-primary" />
  },
  {
    title: "Panchakarma",
    img: IMAGES.retreat2,
    desc: "The ultimate Ayurvedic purification and rejuvenation therapy for body, mind, and soul.",
    benefits: ["Deep tissue detox", "Immunity boost", "Stress relief", "Longevity"],
    icon: <Heart className="text-primary" />
  },
  {
    title: "Stress Healing",
    img: IMAGES.yoga2,
    desc: "Specialized techniques to calm the nervous system and restore inner peace.",
    benefits: ["Anxiety reduction", "Better sleep", "Emotional balance", "Focus"],
    icon: <ShieldCheck className="text-primary" />
  },
  {
    title: "Diabetes Treatment / Chronic Disease",
    img: IMAGES.yoga3,
    desc: "Integrated approach combining specific asanas, diet, and Ayurvedic support.",
    benefits: ["Blood sugar control", "Weight management", "Organ health", "Energy"],
    icon: <Activity className="text-primary" />
  },
  {
    title: "Pain Management",
    img: IMAGES.yoga4,
    desc: "Targeted therapy for chronic pain, joint issues, and postural corrections.",
    benefits: ["Reduced inflammation", "Better mobility", "Posture fix", "Drug-free relief"],
    icon: <Zap className="text-primary" />
  }
];

export default function Retreats() {
  return (
    <div className="pb-20">
      <PageHero 
        title="Healing Retreats" 
        subtitle="Experience deep therapeutic healing in the serene lap of the Himalayas."
      />
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="space-y-16">
          {retreats.map((retreat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(
                "flex flex-col lg:flex-row gap-12 items-center",
                i % 2 !== 0 && "lg:flex-row-reverse"
              )}
            >
              <div className="lg:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] blur-2xl group-hover:bg-primary/20 transition-all" />
                  <img 
                    src={retreat.img} 
                    alt={retreat.title} 
                    className="relative z-10 rounded-[2rem] shadow-2xl w-full h-[400px] object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-orange-100 rounded-2xl">{retreat.icon}</div>
                  <h2 className="text-3xl md:text-4xl font-serif">🌿 {retreat.title}</h2>
                </div>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {retreat.desc}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {retreat.benefits.map((benefit, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" />
                      <span className="font-medium text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Link to="/reserve" className="btn-primary inline-flex items-center gap-2">
                  Register Now <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
