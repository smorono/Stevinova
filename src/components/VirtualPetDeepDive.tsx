import React from 'react';
import { PuzzlePieceIcon, ChatBubbleLeftRightIcon, BellAlertIcon, AdjustmentsHorizontalIcon, UserIcon } from '@heroicons/react/24/outline';

const features = [
  'Choose your pet (dog, cat, bird, etc.)',
  'Chat and interact with your pet',
  'AI-powered conversation and companionship',
  'Reminders for medication, hydration, and activities',
  'Daily games and mood check-ins',
  'Customizable appearance and name',
];

const VirtualPetDeepDive: React.FC = () => (
  <section className="section-padding bg-stevinova-sky-50">
    <div className="container-max flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-stevinova-sky-700 mb-8 text-center">Meet Your Virtual Pet Companion</h2>
      {/* Pet Avatar and Chat Bubble */}
      <div className="flex flex-col items-center mb-8">
        <div className="bg-stevinova-sky-200 rounded-full w-32 h-32 flex items-center justify-center mb-4 shadow-lg">
          <PuzzlePieceIcon className="h-20 w-20 text-stevinova-sky-500" />
        </div>
        <div className="bg-white rounded-2xl shadow p-4 max-w-xs text-lg text-stevinova-sky-900 mb-2">
          <span className="font-semibold">Buddy:</span> Hi! I'm your virtual pet. Let's play a game or chat about your day!
        </div>
        <div className="bg-stevinova-peach-100 rounded-2xl shadow p-4 max-w-xs text-lg text-stevinova-peach-900 self-end">
          <span className="font-semibold">You:</span> Remind me to take my medicine at 2pm.
        </div>
      </div>
      {/* Feature List */}
      <div className="max-w-2xl mx-auto bg-stevinova-sky-100 rounded-xl shadow p-6">
        <h3 className="text-xl font-bold text-stevinova-sky-700 mb-4 text-center">Features</h3>
        <ul className="text-lg text-stevinova-sky-900 space-y-2">
          {features.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default VirtualPetDeepDive; 