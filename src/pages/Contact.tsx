import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, Facebook, Instagram, Youtube, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { CONTACT, SOCIAL } from '../constants';

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

    const apiUrl = import.meta.env.VITE_API_URL || '';

    try {
      const response = await fetch(`${apiUrl}/api/reserve`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'Contact/Detailed Reservation'
        }),
      });

      if (response.ok) {
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
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Contact Us</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get in touch with us for any queries or information.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-orange-100">
              <h2 className="text-3xl font-serif mb-8 text-primary">Get in Touch</h2>
              <div className="space-y-6">
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
            
            <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-xl">
              <h2 className="text-3xl font-serif mb-6">Follow Us</h2>
              <p className="text-slate-400 mb-8">
                Stay updated with our latest programs and wellness tips.
              </p>
              <div className="flex gap-6">
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
              <h2 className="text-3xl font-serif mb-6">Visit Us</h2>
              <p className="text-slate-400 mb-8">
                Our foundation is located in the serene environment of Rishikesh, the world capital of Yoga.
              </p>
              <div className="aspect-video bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                <span className="text-slate-500">Google Maps Embed Placeholder</span>
              </div>
            </div>
          </div>

          <div id="register" className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl border border-orange-100 scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif mb-2 text-slate-900">Doctor Yog Reservation Form</h2>
              <p className="text-slate-600">Book Your Visit For Holistic Healing Today!</p>
            </div>
            
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl font-serif mb-4">Form Submitted!</h2>
                <p className="text-slate-600 mb-8">
                  Thank you for your interest. We have received your details and will get back to you soon.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="btn-primary px-8"
                >
                  Fill Again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name Field */}
                <div className="space-y-3">
                  <label className="text-lg font-medium text-slate-800">Name <span className="text-red-500">*</span></label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required 
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 outline-none transition-colors" 
                      />
                      <span className="text-xs text-slate-500 ml-1">First Name</span>
                    </div>
                    <div className="space-y-1">
                      <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required 
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 outline-none transition-colors" 
                      />
                      <span className="text-xs text-slate-500 ml-1">Last Name</span>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Number */}
                <div className="space-y-3">
                  <label className="text-lg font-medium text-slate-800">WhatsApp Number <span className="text-red-500">*</span></label>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="md:col-span-1 space-y-1">
                      <input 
                        type="text" 
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        required 
                        placeholder="+91" 
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 outline-none transition-colors" 
                      />
                      <span className="text-xs text-slate-500 ml-1">Country Code</span>
                    </div>
                    <div className="md:col-span-3 space-y-1">
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required 
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 outline-none transition-colors" 
                      />
                      <span className="text-xs text-slate-500 ml-1">Phone Number</span>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-3">
                  <label className="text-lg font-medium text-slate-800">Email <span className="text-red-500">*</span></label>
                  <div className="space-y-1">
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 outline-none transition-colors" 
                    />
                    <span className="text-xs text-slate-500 ml-1">example@example.com</span>
                  </div>
                </div>

                {/* Gender */}
                <div className="space-y-3">
                  <label className="text-lg font-medium text-slate-800">Select Your Gender <span className="text-red-500">*</span></label>
                  <div className="space-y-1">
                    <select 
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 outline-none transition-colors bg-white"
                    >
                      <option value="">Please Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    <span className="text-xs text-slate-500 ml-1">Enter Your Gender</span>
                  </div>
                </div>

                {/* Country */}
                <div className="space-y-3">
                  <label className="text-lg font-medium text-slate-800">Country <span className="text-red-500">*</span></label>
                  <div className="space-y-1">
                    <input 
                      type="text" 
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 outline-none transition-colors" 
                    />
                    <span className="text-xs text-slate-500 ml-1">Enter Your Country</span>
                  </div>
                </div>

                {/* Duration */}
                <div className="space-y-3">
                  <label className="text-lg font-medium text-slate-800">For how many Days are you planning your Retreat programme? <span className="text-red-500">*</span></label>
                  <select 
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 outline-none transition-colors bg-white"
                  >
                    <option value="">Please Select</option>
                    <option value="7">7 Days</option>
                    <option value="14">14 Days</option>
                    <option value="21">21 Days</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Retreat Choice */}
                <div className="space-y-3">
                  <label className="text-lg font-medium text-slate-800">Choose Your Retreat <span className="text-red-500">*</span></label>
                  <select 
                    name="retreat"
                    value={formData.retreat}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 outline-none transition-colors bg-white"
                  >
                    <option value="">Please Select</option>
                    <option value="detox">Detox Retreat</option>
                    <option value="panchakarma">Panchakarma</option>
                    <option value="stress">Stress Healing</option>
                    <option value="diabetes">Diabetes Healing</option>
                    <option value="pain">Pain Management</option>
                  </select>
                </div>

                {/* Accommodation */}
                <div className="space-y-3">
                  <label className="text-lg font-medium text-slate-800">Which Accommodation Would you like to Choose? <span className="text-red-500">*</span></label>
                  <select 
                    name="accommodation"
                    value={formData.accommodation}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 outline-none transition-colors bg-white"
                  >
                    <option value="">Please Select</option>
                    <option value="single">Single Room</option>
                    <option value="shared">Shared Room</option>
                    <option value="deluxe">Deluxe Room</option>
                  </select>
                </div>

                {/* Arrival Date */}
                <div className="space-y-3">
                  <label className="text-lg font-medium text-slate-800">Select Your Arrival Date <span className="text-red-500">*</span></label>
                  <div className="space-y-1">
                    <input 
                      type="date" 
                      name="arrivalDate"
                      value={formData.arrivalDate}
                      onChange={handleChange}
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 outline-none transition-colors" 
                    />
                    <span className="text-xs text-slate-500 ml-1">Date of Arrival</span>
                  </div>
                </div>

                {/* Comments */}
                <div className="space-y-3">
                  <label className="text-lg font-medium text-slate-800">Do you have any other comment or health concerns? <span className="text-red-500">*</span></label>
                  <textarea 
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    rows={6} 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-xl flex items-center gap-3 text-sm">
                    <AlertCircle size={20} />
                    Something went wrong. Please try again or contact us via WhatsApp.
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-[#006d77] text-white py-4 text-xl font-bold rounded-lg hover:bg-[#005a63] transition-colors shadow-lg flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={20} /> Submit
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
