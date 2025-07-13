import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-stevinova-sky-100 text-stevinova-sky-900 py-12 mt-12">
    <div className="container-max flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex flex-col items-center md:items-start">
        <div className="font-extrabold text-2xl mb-2">Stevinova<span className="text-sm ml-1">®</span></div>
        <div className="text-stevinova-sky-700 mb-2">support@stevinova.com</div>
        <div className="flex gap-4 text-stevinova-sky-500 text-lg">
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Refund Policy</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <span className="bg-stevinova-peach-200 text-stevinova-peach-900 rounded-full px-4 py-2 font-semibold text-lg mb-2">Built with ❤️ by Stevinova<span className="text-sm ml-1">®</span></span>
        {/* Optional: Add social icons here */}
      </div>
    </div>
            <div className="text-center text-stevinova-sky-400 text-sm mt-8">&copy; {new Date().getFullYear()} Stevinova<span className="text-xs ml-1">®</span>. All rights reserved.</div>
  </footer>
);

export default Footer; 