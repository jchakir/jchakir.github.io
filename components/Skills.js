"use client";

import React from 'react';
import { Cpu } from 'lucide-react';

const Skills = () => {
  const skills = {
    'Programming Languages': ['Python', 'C++', 'TypeScript'],
    Frameworks: ['Django', 'NestJS'],
    'Machine Learning Tools': ['Keras', 'Scikit-Learn', 'XGBoost', 'Neural Networks'],
    'Tools & Technologies': ['Git', 'Docker', 'Linux', 'Bash scripting'],
    Skills: ['RESTful APIs', 'Networking', 'Model Optimization', 'Problem Solving', 'Data Preprocessing'],
  };

  return (
    <section id="skills" className="scroll-mt-20 bg-gray-800 rounded-lg p-4 text-white h-full">
      <h2 className="flex text-2xl font-bold mb-4 text-green-400">
        <Cpu className="w-6 h-6 mr-2" />
        Technical Skills
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-gray-900 p-4 rounded-lg text-white">
            <h3 className="font-bold text-green-400 mb-2">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span key={skill} className="bg-gray-800 text-sm py-1 px-2 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
