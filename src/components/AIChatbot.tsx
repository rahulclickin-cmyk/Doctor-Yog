import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: 'Namaste! I am your Doctor Yog assistant. How can I help you with your wellness journey today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const model = "gemini-3-flash-preview";
      const response = await ai.models.generateContent({
        model,
        contents: [
          { role: 'user', parts: [{ text: `You are a helpful, warm, and professional assistant for "Doctor Yog", a holistic wellness foundation in Rishikesh, India. 
          
          Context:
          - Founder: Dr. Shakti (PhD in Yoga Science, 19+ years experience).
          - Location: Rishikesh, India (Himalayas).
          - Core Philosophy: Integrated Yoga Therapy combining Yoga, Ayurveda, Marma, and Acupressure.
          - Services: 
            * Retreats: Detox (Dashkarma), Panchakarma, Stress Healing, Diabetes Healing, Pain Management.
            * Training: 11-day Intensive Integrated Yoga Therapy Training (10-20 April).
            * Personalized Therapy: One-on-one sessions (Online & Offline).
          - Contact: Phone/WhatsApp: +91 85328 18447, Email: shaktidoctoryog7@gmail.com.
          - Registration: Users can register via the form on the Contact page.
          
          User asked: ${userMessage}` }] }
        ],
        config: {
          systemInstruction: "You are a professional, warm, and knowledgeable assistant for Doctor Yog. Keep responses concise, helpful, and focused on wellness. Always encourage users to book a retreat or contact us via WhatsApp for personalized care."
        }
      });

      const botText = response.text || "I'm sorry, I couldn't process that. Please try again or contact us directly.";
      setMessages(prev => [...prev, { role: 'model', text: botText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Namaste. I'm having a bit of trouble connecting. Please reach out via WhatsApp for immediate assistance!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([{ role: 'model', text: 'Namaste! I am your Doctor Yog assistant. How can I help you with your wellness journey today?' }]);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-primary text-white p-3 md:p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <Bot size={24} className="w-6 h-6 md:w-7 md:h-7" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-medium whitespace-nowrap text-sm md:text-base">
          AI Assistant
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-[60] w-[90vw] md:w-[400px] h-[600px] bg-white rounded-3xl shadow-2xl border border-orange-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Bot size={20} />
                </div>
                <div>
                  <div className="font-bold">Doctor Yog AI</div>
                  <div className="text-xs opacity-80">Online • Holistic Expert</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={clearChat} className="hover:bg-white/20 p-1 rounded-lg text-xs font-medium px-2">
                  Clear
                </button>
                <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-lg">
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-orange-50/30">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary text-white rounded-tr-none' 
                      : 'bg-white text-slate-700 shadow-sm border border-orange-50 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl shadow-sm border border-orange-50 rounded-tl-none">
                    <Loader2 size={18} className="animate-spin text-primary" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-orange-100 bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about yoga, retreats..."
                  className="flex-grow px-4 py-2 rounded-xl border border-orange-100 focus:border-primary outline-none text-sm"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  className="bg-primary text-white p-2 rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-50"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
