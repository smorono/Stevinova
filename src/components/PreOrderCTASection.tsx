import React from 'react';
import { useForm } from 'react-hook-form';

interface PreOrderForm {
  facility: string;
  contact: string;
  email: string;
  phone: string;
  residents: string;
}

const PreOrderCTASection: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<PreOrderForm>();
  const onSubmit = (data: PreOrderForm) => {
    alert('Thank you! We have received your request.');
  };
  return (
    <section className="section-padding bg-stevinova-peach-100">
      <div className="container-max">
        <h2 className="text-3xl md:text-4xl font-extrabold text-stevinova-peach-700 mb-8 text-center">Be a Founding Partner—Empower Your Residents Today</h2>
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-medium text-stevinova-peach-900 mb-2">Facility Name *</label>
                <input type="text" {...register('facility', { required: 'Facility name is required' })} className="w-full px-4 py-3 border border-stevinova-peach-300 rounded-lg focus:ring-2 focus:ring-stevinova-peach-500 focus:border-transparent text-lg" placeholder="Your facility name" />
                {errors.facility && <p className="text-red-500 text-sm mt-1">{errors.facility.message}</p>}
              </div>
              <div>
                <label className="block text-lg font-medium text-stevinova-peach-900 mb-2">Contact Person *</label>
                <input type="text" {...register('contact', { required: 'Contact person is required' })} className="w-full px-4 py-3 border border-stevinova-peach-300 rounded-lg focus:ring-2 focus:ring-stevinova-peach-500 focus:border-transparent text-lg" placeholder="Your name" />
                {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact.message}</p>}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-medium text-stevinova-peach-900 mb-2">Email *</label>
                <input type="email" {...register('email', { required: 'Email is required' })} className="w-full px-4 py-3 border border-stevinova-peach-300 rounded-lg focus:ring-2 focus:ring-stevinova-peach-500 focus:border-transparent text-lg" placeholder="your@email.com" />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-lg font-medium text-stevinova-peach-900 mb-2">Phone</label>
                <input type="tel" {...register('phone')} className="w-full px-4 py-3 border border-stevinova-peach-300 rounded-lg focus:ring-2 focus:ring-stevinova-peach-500 focus:border-transparent text-lg" placeholder="(555) 123-4567" />
              </div>
            </div>
            <div>
              <label className="block text-lg font-medium text-stevinova-peach-900 mb-2"># of Residents *</label>
              <input type="number" {...register('residents', { required: 'Number of residents is required' })} className="w-full px-4 py-3 border border-stevinova-peach-300 rounded-lg focus:ring-2 focus:ring-stevinova-peach-500 focus:border-transparent text-lg" placeholder="e.g. 80" />
              {errors.residents && <p className="text-red-500 text-sm mt-1">{errors.residents.message}</p>}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button type="submit" className="btn-primary text-lg px-8 py-4 flex-1">Reserve with $250 Deposit</button>
              <button type="button" className="btn-secondary text-lg px-8 py-4 flex-1">Join the Waitlist</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PreOrderCTASection; 