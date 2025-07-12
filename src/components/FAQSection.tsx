import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    q: 'What devices does this work on?',
    a: 'Stevinova works on tablets, smartphones, and desktop computers. It is optimized for iOS, Android, and modern web browsers.'
  },
  {
    q: 'Is it HIPAA-compliant?',
    a: 'Yes, Stevinova is designed with privacy and security in mind, and is fully HIPAA-compliant for all communications and data storage.'
  },
  {
    q: 'Can family join without visiting in person?',
    a: 'Absolutely! Family members can join from anywhere using secure invite links and participate in video calls, messaging, and photo sharing.'
  },
  {
    q: 'Who handles tech setup?',
    a: 'Our team provides full onboarding and remote support to ensure a smooth setup for your facility and residents.'
  },
  {
    q: 'What support do you offer?',
    a: 'We offer 24/7 support via phone, email, and live chat, plus a dedicated onboarding specialist for every facility.'
  },
];

const FAQSection: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="section-padding bg-stevinova-lavender-50">
      <div className="container-max max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-stevinova-lavender-700 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6">
              <button
                className="flex items-center justify-between w-full text-left text-xl font-semibold text-stevinova-lavender-900 focus:outline-none"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                {faq.q}
                <ChevronDownIcon className={`h-6 w-6 ml-2 transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className="mt-4 text-lg text-stevinova-lavender-800">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 