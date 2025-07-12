import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/outline';

const testimonials = [
  {
    quote: 'My dad loves the games—it gives him something to look forward to every day.',
    name: 'Linda S.',
    role: 'Daughter of Resident',
    color: 'bg-stevinova-peach-100',
  },
  {
    quote: 'I finally get to send my mom pictures of the grandkids without printing!',
    name: 'Mark T.',
    role: 'Family Member',
    color: 'bg-stevinova-mint-100',
  },
  {
    quote: 'The shopping system has made our staff’s lives so much easier.',
    name: 'Sarah P.',
    role: 'Facility Director',
    color: 'bg-stevinova-lavender-100',
  },
];

const TestimonialsSection: React.FC = () => (
  <section className="section-padding bg-stevinova-sky-50">
    <div className="container-max">
      <h2 className="text-3xl md:text-4xl font-extrabold text-stevinova-sky-700 mb-8 text-center">What People Are Saying</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className={`rounded-2xl shadow-lg p-8 flex flex-col items-center text-center ${t.color}`}>
            <UserCircleIcon className="h-12 w-12 text-stevinova-sky-400 mb-4" />
            <blockquote className="text-xl italic text-stevinova-sky-900 mb-4">“{t.quote}”</blockquote>
            <div className="font-bold text-stevinova-sky-700">{t.name}</div>
            <div className="text-stevinova-sky-500 text-sm">{t.role}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection; 