import React from 'react';

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
    <div className="bg-gray-800 rounded-lg p-6 text-white h-full">
      <h2 className="text-2xl font-bold mb-6 text-green-400">Education</h2>
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
