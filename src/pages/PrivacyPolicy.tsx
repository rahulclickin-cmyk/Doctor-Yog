import React from 'react';
import { motion } from 'motion/react';
import { Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-16 rounded-[3rem] shadow-xl border border-orange-100"
        >
          <div className="flex items-center gap-4 mb-8 text-primary">
            <Shield size={40} />
            <h1 className="text-4xl font-serif">Privacy Policy</h1>
          </div>

          <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
            <p className="text-lg font-medium text-slate-800">Last Updated: April 2026</p>
            
            <section>
              <h2 className="text-2xl font-serif text-slate-800 mb-4">1. Introduction</h2>
              <p>
                Welcome to Doctor Yog – Holistic Wellness Foundation. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at shaktidoctoryog7@gmail.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-slate-800 mb-4">2. Information We Collect</h2>
              <p>
                We collect personal information that you voluntarily provide to us when registering for our programs, retreats, or contacting us via our website. This may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Identifiers:</strong> Name, email address, phone number, and physical address.</li>
                <li><strong>Health & Wellness Data:</strong> Information about your health conditions, injuries, or wellness goals provided for personalized therapy sessions.</li>
                <li><strong>Payment Data:</strong> We do not store credit card details; all payments are processed through secure third-party payment gateways.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-slate-800 mb-4">3. How We Use Your Information</h2>
              <p>
                We use the information we collect or receive:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To facilitate account creation and logon process.</li>
                <li>To send you marketing and promotional communications.</li>
                <li>To fulfill and manage your orders/registrations.</li>
                <li>To deliver personalized wellness and therapy services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-slate-800 mb-4">4. Will Your Information Be Shared?</h2>
              <p>
                We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell your personal data to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-slate-800 mb-4">5. Data Security</h2>
              <p>
                We aim to protect your personal information through a system of organizational and technical security measures. However, please remember that no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-slate-800 mb-4">6. Contact Us</h2>
              <p>
                If you have questions or comments about this policy, you may email us at shaktidoctoryog7@gmail.com or visit us at our foundation in Rishikesh, India.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
