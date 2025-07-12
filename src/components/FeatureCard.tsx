import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string[];
  bgColor?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, bgColor }) => (
  <div className={`rounded-2xl shadow-lg p-8 flex flex-col items-center text-center ${bgColor || 'bg-white'}`}>
    <div className="mb-4">{icon}</div>
    <h3 className="text-2xl font-bold mb-3 text-stevinova-sky-700">{title}</h3>
    <ul className="text-lg text-stevinova-peach-900 space-y-1">
      {description.map((line, idx) => (
        <li key={idx}>{line}</li>
      ))}
    </ul>
  </div>
);

export default FeatureCard; 