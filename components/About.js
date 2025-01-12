"use client";

import React from 'react';
import { Info } from 'lucide-react';

const About = () => {
  return (
    <div className="scroll-mt-20 bg-gray-800 rounded-lg p-4 text-white h-full">
      <h2 className="text-2xl font-bold mb-4 flex items-center text-green-400">
        <Info className="w-6 h-6 mr-2" />
        About
      </h2>
      <div className="bg-gray-900 rounded-md p-4">
        <p className="leading-relaxed mb-4">
          Jaouad Chakir is a versatile professional with expertise in software engineering and machine learning.
        </p>
        <p className="leading-relaxed mb-4">
          Specializing in building scalable applications, machine learning models, and robust backend systems
          using Python, TypeScript, and C++.
        </p>
        <p className="leading-relaxed">
          Passionate about solving real-world problems through advanced technology.
        </p>
      </div>
    </div>
  );
};

export default About;
