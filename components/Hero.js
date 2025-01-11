import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 text-white h-full">
      <div className="w-full">
        <div style={{ fontSize: '1.25em', marginBottom: '10px' }}>
          Welcome to Jaouad Chakir's Portfolio
        </div>
        <div className="mt-4">
          <div style={{ fontSize: '1em', color: '#84CC16' }}>
            Software Engineer | Machine Learning Developer
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="https://github.com/jchakir" className="flex items-center space-x-2 hover:text-green-400">
              <Github className="w-5 h-5 text-green-400" />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/jchakir" className="flex items-center space-x-2 hover:text-green-400">
              <Linkedin className="w-5 h-5 text-green-400" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
