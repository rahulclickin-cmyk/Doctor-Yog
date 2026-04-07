import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, AlertCircle, Loader2, Calendar, User, Mail, Phone, MessageSquare, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { handleFirestoreError, OperationType } from '../lib/firestoreUtils';

export default function Reservation() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    date: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const path = 'reservations';
      await addDoc(collection(db, path), {
        ...formData,
        createdAt: serverTimestamp()
      });
      
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', program: '', date: '', message: '' });
    } catch (error) {
      console.error('Reservation error:', error);
      setStatus('error');
      handleFirestoreError(error, OperationType.CREATE, 'reservations');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-24 pb-20 bg-orange-50/30 min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif mb-4 text-slate-800"
          >
            Doctor Yog Reservation Form
          </motion.h1>
          <p className="text-lg text-slate-600">
            Secure your spot for our upcoming programs and retreats.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[2.5rem] shadow-2xl shadow-orange-200/50 p-8 md:p-12 border border-orange-100"
        >
          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-3xl font-serif mb-4">Reservation Received!</h2>
              <p className="text-slate-600 mb-8">
                Thank you for choosing Doctor Yog. We will contact you shortly to confirm your booking.
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="btn-primary px-8"
              >
                Make Another Reservation
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <User size={16} className="text-primary" /> Full Name
                  </label>
                  <input 
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <Mail size={16} className="text-primary" /> Email Address
                  </label>
                  <input 
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <Phone size={16} className="text-primary" /> Phone Number
                  </label>
                  <input 
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="[0-9\-\+\s\(\)]*"
                    minLength={10}
                    placeholder="+91 00000 00000"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <BookOpen size={16} className="text-primary" /> Select Program
                  </label>
                  <select 
                    required
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none"
                  >
                    <option value="">Choose a program</option>
                    <option value="Yoga Therapy">Integrated Yoga Therapy</option>
                    <option value="Ayurveda Training">Ayurveda & Healing Training</option>
                    <option value="Detox Retreat">Detox & Panchakarma Retreat</option>
                    <option value="Pain Management">Pain Management Workshop</option>
                    <option value="Online Session">One-on-One Online Session</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  <Calendar size={16} className="text-primary" /> Preferred Start Date
                </label>
                <input 
                  required
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  <MessageSquare size={16} className="text-primary" /> Additional Message
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your health goals or any specific concerns..."
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                />
              </div>

              {status === 'error' && (
                <div className="p-4 bg-red-50 text-red-600 rounded-2xl flex items-center gap-3 text-sm">
                  <AlertCircle size={20} />
                  Something went wrong. Please try again or contact us via WhatsApp.
                </div>
              )}

              <button 
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full py-5 text-lg flex items-center justify-center gap-3 shadow-xl shadow-orange-200 disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="animate-spin" /> Processing...
                  </>
                ) : (
                  <>
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Submit Reservation
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm mb-4">Need immediate help?</p>
          <a 
            href="https://wa.me/918532818447" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-600 font-bold hover:underline"
          >
            <Phone size={18} /> Chat with Dr. Shakti on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
