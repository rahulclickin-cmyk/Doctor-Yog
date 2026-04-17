import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, Facebook, Instagram, Youtube, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { CONTACT, SOCIAL } from '../constants';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { handleFirestoreError, OperationType } from '../lib/firestoreUtils';
import PageHero from '../components/PageHero';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    countryCode: '+91',
    phone: '',
    email: '',
    gender: '',
    country: '',
    duration: '',
    retreat: '',
    accommodation: '',
    arrivalDate: '',
    comments: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const socialLinks = [
    { Icon: Facebook, url: SOCIAL.facebook, label: "Facebook" },
    { Icon: Instagram, url: SOCIAL.instagram, label: "Instagram" },
    { Icon: Youtube, url: SOCIAL.youtube, label: "YouTube" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const path = 'contacts';
      await addDoc(collection(db, path), {
        ...formData,
        formType: 'Contact/Detailed Reservation',
        createdAt: serverTimestamp()
      });

      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        countryCode: '+91',
        phone: '',
        email: '',
        gender: '',
        country: '',
        duration: '',
        retreat: '',
        accommodation: '',
        arrivalDate: '',
        comments: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      handleFirestoreError(error, OperationType.CREATE, 'contacts');
    }
  };

  return (
    <div className="pb-20">
      <PageHero 
        title="Contact Us" 
        subtitle="Get in touch with us for any queries or information."
      />
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="grid lg:grid-cols-1 max-w-4xl mx-auto gap-12">
          <div className="space-y-8">
            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-orange-100">
              <h2 className="text-3xl font-serif mb-8 text-primary text-center">Get in Touch</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { icon: <Phone className="text-primary" />, title: "Contact", info: CONTACT.phone },
                  { icon: <Mail className="text-primary" />, title: "Email", info: CONTACT.email },
                  { icon: <MapPin className="text-primary" />, title: "Location", info: CONTACT.location },
                  { icon: <Clock className="text-primary" />, title: "Hours", info: "Mon - Sat: 6:00 AM - 8:00 PM" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="p-3 bg-orange-50 rounded-xl">{item.icon}</div>
                    <div>
                      <div className="font-bold text-slate-800">{item.title}</div>
                      <div className="text-slate-600">{item.info}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-xl text-center">
              <h2 className="text-3xl font-serif mb-6">Follow Us</h2>
              <p className="text-slate-400 mb-8">
                Stay updated with our latest programs and wellness tips.
              </p>
              <div className="flex justify-center gap-8">
                {socialLinks.map(({ Icon, url, label }, i) => (
                  <a 
                    key={i} 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-primary transition-colors">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs text-slate-500 group-hover:text-white transition-colors">{label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-xl">
              <h2 className="text-3xl font-serif mb-6 text-center">Visit Us</h2>
              <p className="text-slate-400 mb-8 text-center">
                Our foundation is located in the serene environment of Rishikesh, the world capital of Yoga.
              </p>
              <div className="aspect-video bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.123456789!2d78.3!3d30.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA2JzAwLjAiTiA3OMKwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890" 
                  className="w-full h-full rounded-2xl"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
