import React from 'react';
import { motion } from 'motion/react';
import { IMAGES } from '../constants';
import { Award, Users, Globe, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="lg:w-1/2">
            <h1 className="text-5xl md:text-6xl font-serif mb-8">About Dr. Shakti</h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Dr. Shakti is a world-renowned expert in Yoga Therapy and Ayurveda with over 19 years of experience. Based in the spiritual heart of Rishikesh, he has dedicated his life to bridging ancient Himalayan wisdom with modern therapeutic needs.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              {[
                { icon: <Award className="text-primary" />, label: "PhD in Yoga Science" },
                { icon: <Users className="text-primary" />, label: "5000+ Students" },
                { icon: <Globe className="text-primary" />, label: "International Presence" },
                { icon: <CheckCircle2 className="text-primary" />, label: "Certified Therapist" }
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg">{stat.icon}</div>
                  <span className="font-bold text-slate-800">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src={IMAGES.drShakti} alt="Dr. Shakti" className="rounded-[3rem] shadow-2xl border-8 border-white" referrerPolicy="no-referrer" />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-orange-100">
            <h2 className="text-3xl font-serif mb-6 text-primary">Our Mission</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              To empower individuals with the tools of self-healing and holistic wellness, rooted in the authentic traditions of the Himalayas. We strive to make ancient healing sciences accessible and practical for modern lives.
            </p>
          </div>
          <div className="bg-primary text-white p-12 rounded-[3rem] shadow-xl">
            <h2 className="text-3xl font-serif mb-6">Our Vision</h2>
            <p className="text-lg opacity-90 leading-relaxed">
              A world where every individual lives in harmony with nature, free from the burdens of modern lifestyle diseases, through the integrated practice of Yoga, Ayurveda, and conscious living.
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-slate-900 text-white p-12 md:p-20 rounded-[4rem] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-4xl font-serif mb-12 text-center">19+ Years of Transformation</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { title: "Education", desc: "PhD in Yoga Science from a premier Himalayan university, focusing on therapeutic applications." },
                { title: "Experience", desc: "Two decades of clinical practice and teaching across India, Europe, and Southeast Asia." },
                { title: "Methodology", desc: "Developer of the 'Doctor Yog' method, integrating root cause diagnosis with personalized healing." }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <h3 className="text-2xl font-serif text-primary">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
