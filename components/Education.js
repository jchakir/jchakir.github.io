import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const educationDetails = [
    {
      title: '1337 Coding School',
      years: '2021 - 2024',
      description: 'Learned advanced problem-solving and collaboration skills through peer-based challenges.',
    },
    {
      title: 'BTS Al Khawarizmi',
      years: '2017 - 2019',
      description: 'Gained in-depth knowledge in Linux, network design, and CCNA 200-301 fundamentals.',
    },
  ];

  return (
    <div id="education" className="scroll-mt-20 bg-gray-800 rounded-lg p-4 text-white h-full">
      <h2 className="flex text-2xl font-bold mb-4 text-green-400">
        <GraduationCap className="w-6 h-6 mr-2" />
        Education
      </h2>
      <div className="space-y-4">
        {educationDetails.map((edu, index) => (
          <div key={index} className="bg-gray-900 rounded-md p-4">
            <h3 className="text-xl font-bold text-green-400 mb-2">{edu.title}</h3>
            <p className="mb-1">{edu.years}</p>
            <p>{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
