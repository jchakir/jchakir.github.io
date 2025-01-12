import React from 'react';
import { Languages as LanguagesIcon } from 'lucide-react';

const LanguageCard = ({ name, level }) => {
  const getLevelPercentage = () => {
    switch (level) {
      case 'Native':
        return 100;
      case 'Upper Intermediate':
        return 75;
      case 'Intermediate':
        return 50;
      default:
        return 25;
    }
  };

  const percentage = getLevelPercentage();

  return (
    <div className="bg-gray-900 p-4 rounded-lg text-white">
      <h3 className="font-bold text-green-400 mb-2">{name}</h3>
      <div className="relative pt-1">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-800">
          <div
            style={{ width: `${percentage}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-400"
          ></div>
        </div>
        <p className="text-sm text-right">{level}</p>
      </div>
    </div>
  );
};

const Languages = () => {
  const languages = [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'Upper Intermediate' },
    { name: 'French', level: 'Intermediate' },
  ];

  return (
    <section id="languages" className="scroll-mt-20 bg-gray-800 rounded-lg p-4 text-white h-full mt-8">
      <h2 className="flex text-2xl font-bold mb-4 text-green-400">
        <LanguagesIcon className="w-6 h-6 mr-2" />
        Languages
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {languages.map((lang) => (
          <LanguageCard key={lang.name} {...lang} />
        ))}
      </div>
    </section>
  );
};

export default Languages;
