import React from 'react';
import { motion } from 'motion/react';
import { RefreshCcw } from 'lucide-react';

export default function RefundPolicy() {
  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-16 rounded-[3rem] shadow-xl border border-orange-100"
        >
          <div className="flex items-center gap-4 mb-8 text-primary">
            <RefreshCcw size={40} />
            <h1 className="text-4xl font-serif">Cancellation & Refund Policy</h1>
          </div>

          <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
            <p className="text-lg font-medium text-slate-800">Last Updated: April 2026</p>
            
            <section>
              <h2 className="text-2xl font-serif text-slate-800 mb-4">1. Cancellation Policy</h2>
              <p>
                At Doctor Yog – Holistic Wellness Foundation, we understand that plans can change. However, as our programs and retreats have limited capacity and require significant preparation, we have established the following cancellation policy:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cancellations made more than 30 days before the program start date: 75% of the total fee will be refunded.</li>
                <li>Cancellations made between 15 to 30 days before the program start date: 50% of the total fee will be refunded.</li>
                <li>Cancellations made less than 15 days before the program start date: No refund will be provided.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-slate-800 mb-4">2. Refund Process</h2>
              <p>
                To request a refund, please send an email to shaktidoctoryog7@gmail.com with your registration details and reason for cancellation. Once approved, refunds will be processed within 7-10 business days via the original payment method.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-slate-800 mb-4">3. Program Postponement or Rescheduling</h2>
              <p>
                If you are unable to attend a program due to unforeseen circumstances, you may request to transfer your registration to a future batch (subject to availability). A rescheduling fee of 10% may apply.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-slate-800 mb-4">4. Cancellations by Doctor Yog</h2>
              <p>
                In the rare event that Doctor Yog – Holistic Wellness Foundation cancels a program or retreat due to unforeseen circumstances (e.g., natural disasters, government restrictions), participants will be offered a full refund or the option to transfer to a future date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-slate-800 mb-4">5. No-Show Policy</h2>
              <p>
                Participants who do not show up for the program or retreat without prior notification will not be eligible for any refund or credit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-slate-800 mb-4">6. Contact Us</h2>
              <p>
                If you have any questions regarding our Cancellation & Refund Policy, please contact us at:
                <br />
                <strong>Email:</strong> shaktidoctoryog7@gmail.com
                <br />
                <strong>Phone:</strong> +91 85328 18447
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
