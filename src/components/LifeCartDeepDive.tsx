import React from 'react';
import { ShoppingCartIcon, UserGroupIcon, CreditCardIcon, TruckIcon, CheckCircleIcon, CurrencyDollarIcon, ClockIcon } from '@heroicons/react/24/outline';

const solution = [
  { icon: <ShoppingCartIcon className="h-8 w-8 text-stevinova-peach-500" />, label: 'No inventory or stocking needed' },
  { icon: <UserGroupIcon className="h-8 w-8 text-stevinova-mint-500" />, label: 'Residents shop via tablet' },
  { icon: <CreditCardIcon className="h-8 w-8 text-stevinova-lavender-500" />, label: 'Family wallets + caregiver-assisted ordering' },
  { icon: <TruckIcon className="h-8 w-8 text-stevinova-sky-500" />, label: 'Fulfilled via Instacart, verified by staff' },
  { icon: <CurrencyDollarIcon className="h-8 w-8 text-stevinova-peach-700" />, label: 'Facility earns revenue from every order' },
];

const pricingTiers = [
  { name: 'Founding Partner', setup: '$1,000', monthly: '$149/mo', perks: ['20% lifetime discount', 'Logo on site'], color: 'bg-stevinova-peach-100', highlight: true },
  { name: 'Early Access', setup: '$1,500', monthly: '$199/mo', perks: ['Locked-in rate for 2 years'], color: 'bg-stevinova-mint-100' },
  { name: 'Beta Reservation', setup: '$0 today', monthly: '$299/mo', perks: ['Priority onboarding', 'Cancel anytime'], color: 'bg-stevinova-lavender-100' },
];

const howItWorks = [
  { step: 1, label: 'Load wallet', icon: <CreditCardIcon className="h-7 w-7 text-stevinova-peach-500" /> },
  { step: 2, label: 'Shop from tablet', icon: <ShoppingCartIcon className="h-7 w-7 text-stevinova-mint-500" /> },
  { step: 3, label: 'Order routed to Walmart/Target', icon: <TruckIcon className="h-7 w-7 text-stevinova-sky-500" /> },
  { step: 4, label: 'Instacart handles delivery', icon: <TruckIcon className="h-7 w-7 text-stevinova-lavender-500" /> },
  { step: 5, label: 'Facility verifies + distributes', icon: <CheckCircleIcon className="h-7 w-7 text-stevinova-peach-700" /> },
  { step: 6, label: 'You earn margin with no inventory', icon: <CurrencyDollarIcon className="h-7 w-7 text-stevinova-mint-700" /> },
];

const timeline = [
  { month: 'Month 1', label: 'Pre-sale open' },
  { month: 'Month 2–3', label: 'Pilot onboarding + MVP launch' },
  { month: 'Month 4', label: 'General availability' },
  { month: 'Month 6', label: 'National rollout + press' },
];

const LifeCartDeepDive: React.FC = () => (
  <section className="section-padding bg-stevinova-peach-50">
    <div className="container-max">
              <h2 className="text-3xl md:text-4xl font-extrabold text-stevinova-peach-700 mb-8 text-center">LifeCart® — The Virtual Store for Seniors</h2>
      {/* Solution Icons */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {solution.map((s, i) => (
          <div key={i} className="flex flex-col items-center bg-white rounded-xl shadow p-4 w-48">
            {s.icon}
            <span className="mt-2 text-lg text-stevinova-peach-900 font-medium">{s.label}</span>
          </div>
        ))}
      </div>
      {/* Pricing Grid */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-center mb-6 text-stevinova-peach-700">Founding Partner Offer</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, i) => (
            <div key={i} className={`rounded-2xl shadow-lg p-8 flex flex-col items-center text-center ${tier.color} ${tier.highlight ? 'ring-2 ring-stevinova-peach-500' : ''}`}>
              {tier.highlight && <div className="bg-stevinova-peach-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Most Popular</div>}
              <h4 className="text-xl font-bold mb-2">{tier.name}</h4>
              <div className="mb-2 text-2xl font-bold">{tier.setup}</div>
              <div className="mb-2 text-lg">{tier.monthly}</div>
              <ul className="mb-4 text-stevinova-peach-900">
                {tier.perks.map((perk, j) => <li key={j}>• {perk}</li>)}
              </ul>
              <button className="btn-primary w-full">{tier.name === 'Beta Reservation' ? 'Join Waitlist' : 'Reserve Now'}</button>
            </div>
          ))}
        </div>
      </div>
      {/* How It Works */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-center mb-6 text-stevinova-peach-700">How It Works</h3>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {howItWorks.map((step, i) => (
            <div key={i} className="flex flex-col items-center bg-white rounded-xl shadow p-4">
              <div className="mb-2">{step.icon}</div>
              <span className="font-semibold text-stevinova-peach-900 text-center">{step.label}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Timeline */}
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-center mb-6 text-stevinova-peach-700">Rollout Timeline</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {timeline.map((t, i) => (
            <div key={i} className="flex flex-col items-center bg-stevinova-peach-100 rounded-xl shadow p-4 w-48">
              <ClockIcon className="h-6 w-6 text-stevinova-peach-500 mb-2" />
              <span className="font-bold text-stevinova-peach-700">{t.month}</span>
              <span className="text-stevinova-peach-900">{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default LifeCartDeepDive; 