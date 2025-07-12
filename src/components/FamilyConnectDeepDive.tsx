import React from 'react';
import { VideoCameraIcon, CalendarIcon, PhotoIcon, ChatBubbleLeftRightIcon, BellAlertIcon, UserGroupIcon, SparklesIcon } from '@heroicons/react/24/outline';

const features = [
  { icon: <VideoCameraIcon className="h-8 w-8 text-stevinova-lavender-500" />, label: 'Video call scheduler with calendar sync' },
  { icon: <PhotoIcon className="h-8 w-8 text-stevinova-peach-500" />, label: 'Share family albums, milestone alerts' },
  { icon: <ChatBubbleLeftRightIcon className="h-8 w-8 text-stevinova-mint-500" />, label: 'Group messaging (residents + approved family)' },
  { icon: <SparklesIcon className="h-8 w-8 text-stevinova-sky-500" />, label: '“Grandchild View” for kids to send simple updates' },
  { icon: <BellAlertIcon className="h-8 w-8 text-stevinova-peach-700" />, label: 'Custom notifications for birthdays, holidays' },
];

const FamilyConnectDeepDive: React.FC = () => (
  <section className="section-padding bg-stevinova-lavender-50">
    <div className="container-max">
      <h2 className="text-3xl md:text-4xl font-extrabold text-stevinova-lavender-700 mb-8 text-center">Keep Families Close—Even From Afar</h2>
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center bg-white rounded-xl shadow p-4 w-64">
            {f.icon}
            <span className="mt-2 text-lg text-stevinova-lavender-900 font-medium text-center">{f.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FamilyConnectDeepDive; 