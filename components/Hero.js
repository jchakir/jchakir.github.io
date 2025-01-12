import React from 'react';
import { Github, Linkedin, Twitter, CloudDownload } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex-1 bg-gray-800 rounded-lg p-4 text-white">
        <div className="flex items-center justify-center">
          <TypeAnimation
            sequence={[
              'Jaouad Chakir',
              1000, // Wait 1s after type
            ]}
            speed={1}
            style={{ fontSize: '1.25em', marginBottom: '10px' }}
            repeat={false}
          />
        </div>
        <div className="flex items-center justify-center">
          <TypeAnimation
            sequence={[
              'Software Engineer',
              2000,
              // 'Machine Learning Developer | Software Engineer',
              // 1000,
              'Machine Learning Developer',
              2000,
              // 'Software Engineer | Machine Learning Developer',
              // 1000,
            ]}
            speed={1}
            style={{ fontSize: '1em', color: '#84CC16' }}
            repeat={Infinity}
          />
        </div>
      </div>
      <div className="flex flex-1 space-x-4 bg-gray-800 rounded-lg mt-2 pb-2 text-white flex-wrap items-center justify-center h-screen">
        <div className="bg-gray-900 rounded-md p-4 mt-2">
          <a href="https://github.com/jchakir" target="_blank" className="flex items-center space-x-2 hover:text-green-400">
            <Github className="w-5 h-5 text-green-400" />
            <span>GitHub</span>
          </a>
        </div>
        <div className="bg-gray-900 rounded-md p-4 mt-2">
          <a href="https://linkedin.com/in/jchakir" target="_blank" className="flex items-center space-x-2 hover:text-green-400">
            <Linkedin className="w-5 h-5 text-green-400" />
            <span>LinkedIn</span>
          </a>
        </div>
        <div className="bg-gray-900 rounded-md p-4 mt-2">
          <a href="https://x.com/jchakir_" target="_blank" className="flex items-center space-x-2 hover:text-green-400">
            <Twitter className="w-5 h-5 text-green-400" />
            <span>Twitter</span>
          </a>
        </div>
      </div>
      <div className="flex flex-1 space-x-4 bg-gray-800 rounded-lg mt-2 pb-2 text-white flex-wrap items-center justify-center h-screen">
        <div className="bg-gray-900 rounded-md p-4 mt-2">
          <a href="/resume/	Software_Engineer_Jaouad_CHAKIR.pdf" className="flex items-center space-x-2 hover:text-green-400" download>
            <CloudDownload className="w-5 h-5 text-green-400" />
            <span>Resume: Software-Engineer</span>
          </a>
        </div>
        <div className="bg-gray-900 rounded-md p-4 mt-2">
          <a href="/resume/Machine_learning_Developer_Jaouad_CHAKIR.pdf" className="flex items-center space-x-2 hover:text-green-400" download>
            <CloudDownload className="w-5 h-5 text-green-400" />
            <span>Resume: Machine-learning</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
