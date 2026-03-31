import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { CONTACT } from '../constants';

export default function Contact() {
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
            
            <form className="space-y-8">
              {/* Name Field */}
              <div className="space-y-3">
                <label className="text-lg font-medium text-slate-800">Name <span className="text-red-500">*</span></label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 outline-none transition-colors" />
                    <span className="text-xs text-slate-500 ml-1">First Name</span>
                  </div>
                  <div className="space-y-1">
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 outline-none transition-colors" />
                    <span className="text-xs text-slate-500 ml-1">Last Name</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Number */}
              <div className="space-y-3">
                <label className="text-lg font-medium text-slate-800">WhatsApp Number <span className="text-red-500">*</span></label>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-1 space-y-1">
                    <input type="text" required placeholder="+91" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 outline-none transition-colors" />
                    <span className="text-xs text-slate-500 ml-1">Country Code</span>
                  </div>
                  <div className="md:col-span-3 space-y-1">
                    <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 outline-none transition-colors" />
                    <span className="text-xs text-slate-500 ml-1">Phone Number</span>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-3">
                <label className="text-lg font-medium text-slate-800">Email <span className="text-red-500">*</span></label>
                <div className="space-y-1">
                  <input type="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 outline-none transition-colors" />
                  <span className="text-xs text-slate-500 ml-1">example@example.com</span>
                </div>
              </div>

              {/* Gender */}
              <div className="space-y-3">
                <label className="text-lg font-medium text-slate-800">Select Your Gender <span className="text-red-500">*</span></label>
                <div className="space-y-1">
                  <select required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 outline-none transition-colors bg-white">
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
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 outline-none transition-colors" />
                  <span className="text-xs text-slate-500 ml-1">Enter Your Country</span>
                </div>
              </div>

              {/* Duration */}
              <div className="space-y-3">
                <label className="text-lg font-medium text-slate-800">For how many Days are you planning your Retreat programme? <span className="text-red-500">*</span></label>
                <select required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 outline-none transition-colors bg-white">
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
                <select required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 outline-none transition-colors bg-white">
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
                <select required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 outline-none transition-colors bg-white">
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
                  <input type="date" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 outline-none transition-colors" />
                  <span className="text-xs text-slate-500 ml-1">Date of Arrival</span>
                </div>
              </div>

              {/* Comments */}
              <div className="space-y-3">
                <label className="text-lg font-medium text-slate-800">Do you have any other comment or health concerns? <span className="text-red-500">*</span></label>
                <textarea rows={6} required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-600 outline-none transition-colors resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-[#006d77] text-white py-4 text-xl font-bold rounded-lg hover:bg-[#005a63] transition-colors shadow-lg">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
