import React from 'react';
import { motion } from 'motion/react';
import { FileText } from 'lucide-react';

export default function TermsConditions() {
  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-16 rounded-[3rem] shadow-xl border border-orange-100"
        >
          <div className="flex items-center gap-4 mb-8 text-primary">
            <FileText size={40} />
            <h1 className="text-4xl font-serif">Terms & Conditions</h1>
          </div>

          <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
            <p className="text-lg font-medium text-slate-800">Last Updated: April 2026</p>
            
            <section>
              <h2 className="text-2xl font-serif text-slate-800 mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing our website and services, you agree to be bound by these Terms and Conditions. If you do not agree with all of these terms, then you are expressly prohibited from using the site and you must discontinue use immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-slate-800 mb-4">2. Intellectual Property Rights</h2>
              <p>
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-slate-800 mb-4">3. User Representations</h2>
              <p>
                By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-slate-800 mb-4">4. Program & Retreat Registration</h2>
              <p>
                Registration for our programs and retreats is subject to availability. We reserve the right to refuse any registration. All registrations are subject to our <a href="/refund-policy" className="text-primary hover:underline">Cancellation & Refund Policy</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-slate-800 mb-4">5. Health Disclaimer</h2>
              <p>
                Our services are holistic and wellness-oriented. They are not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-slate-800 mb-4">6. Limitation of Liability</h2>
              <p>
                In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-slate-800 mb-4">7. Contact Us</h2>
              <p>
                In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at shaktidoctoryog7@gmail.com.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
