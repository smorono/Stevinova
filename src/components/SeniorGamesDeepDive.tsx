import React from 'react';
import { PuzzlePieceIcon, UsersIcon, LightBulbIcon, ChatBubbleLeftRightIcon, TrophyIcon, HeartIcon, ArrowTrendingUpIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const games = [
  { icon: <PuzzlePieceIcon className="h-8 w-8 text-stevinova-mint-500" />, label: 'Multiplayer Bingo' },
  { icon: <LightBulbIcon className="h-8 w-8 text-stevinova-peach-500" />, label: 'Daily Crossword & Word Hunt' },
  { icon: <HeartIcon className="h-8 w-8 text-stevinova-lavender-500" />, label: 'Memory Match' },
  { icon: <UsersIcon className="h-8 w-8 text-stevinova-sky-500" />, label: 'Solitaire & Hearts' },
  { icon: <TrophyIcon className="h-8 w-8 text-stevinova-peach-700" />, label: 'Virtual Bowling' },
  { icon: <ChatBubbleLeftRightIcon className="h-8 w-8 text-stevinova-mint-700" />, label: 'Picture Puzzles' },
  { icon: <ArrowTrendingUpIcon className="h-8 w-8 text-stevinova-sky-700" />, label: 'Trivia Battles (team vs team)' },
];

const accessibility = [
  'Large buttons, high contrast UI',
  'Calming pastel color palette',
  'No fast motions, customizable difficulty',
  'Rewards & social leaderboard',
  'Optional caregiver mode for assistance',
];

const SeniorGamesDeepDive: React.FC = () => (
  <section className="section-padding bg-stevinova-mint-50">
    <div className="container-max">
      <h2 className="text-3xl md:text-4xl font-extrabold text-stevinova-mint-700 mb-8 text-center">Bright, Friendly Games Built for Seniors</h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        {games.map((g, i) => (
          <div key={i} className="flex flex-col items-center bg-white rounded-xl shadow p-4">
            {g.icon}
            <span className="mt-2 text-lg text-stevinova-mint-900 font-medium text-center">{g.label}</span>
          </div>
        ))}
      </div>
      <div className="max-w-2xl mx-auto bg-stevinova-mint-100 rounded-xl shadow p-6">
        <h3 className="text-xl font-bold text-stevinova-mint-700 mb-4 text-center">Accessibility & Fun for All</h3>
        <ul className="text-lg text-stevinova-mint-900 space-y-2">
          {accessibility.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default SeniorGamesDeepDive; 