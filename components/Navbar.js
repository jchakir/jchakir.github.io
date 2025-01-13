"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Terminal } from 'lucide-react';

const Navbar = () => {

  const [activeSection, setActiveSection] = useState('home');

  const handleClick = (section) => { setActiveSection(section); };

  return (
    <nav className="fixed top-0 w-full bg-gray-900 border-b border-gray-800 z-50 text-green-400">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Terminal className="w-6 h-6" />
              <Link href="#home" className="inline">
                <span className="text-xl font-bold">
                  jchakir
                  <span className="text-white text-2xl">@</span>
                  portfolio
                  <span className="text-white">:</span>
                  ~$</span>
              </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            {['home', 'education', 'experience', 'projects', 'skills', 'languages'].map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                onClick={() => handleClick(section)}
                className={`hover:text-white transition-colors ${
                  activeSection === section ? 'text-white' : ''
                }`}
              >
                {section}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
