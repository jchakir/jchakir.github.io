import React from 'react';
import { Building2 } from 'lucide-react';

const Experience = () => {
  const experienceDetails = [
    {
      title: 'AI Intern at Sofrecom Morocco',
      years: 'Feb 2024 - Aug 2024',
      details: [
        'Explored AI model training and data optimization workflows.',
        'Developed an automated tag prediction system using XGBoost.',
        'Improved machine learning algorithms and neural networks to increase accuracy.',
      ],
    },
    {
      title: 'Backend Developer Intern at Sofrecom Morocco',
      years: 'Feb 2023 - Sep 2023',
      details: [
        'Built scalable RESTful APIs with Django and optimized query performance.',
        'Integrated AI/ML models into applications to generate predictions.',
      ],
    },
  ];

  return (
    <div id="experience" className="scroll-mt-20 bg-gray-800 rounded-lg p-4 text-white h-full">
      <h2 className="flex text-2xl font-bold mb-4 text-green-400">
        <Building2 className="w-6 h-6 mr-2" />
        Experience
      </h2>
      <div className="space-y-4">
        {experienceDetails.map((exp, index) => (
          <div key={index} className="bg-gray-900 rounded-md p-4">
            <h3 className="text-xl font-bold text-green-400 mb-2">{exp.title}</h3>
            <p className="mb-1">{exp.years}</p>
            <ul className="list-disc list-inside space-y-2"> {/* Added space-y-2 */}
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
