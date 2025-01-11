import React from 'react';

const LanguageCard = ({ name, level }) => {
  const getLevelPercentage = () => {
    switch (level) {
      case 'Native':
        return 100;
      case 'Upper Intermediate (B2)':
        return 75;
      case 'Intermediate':
        return 50;
      default:
        return 25;
    }
  };

  const percentage = getLevelPercentage();

  return (
    <div className="bg-gray-800 p-4 rounded-lg text-white">
      <h3 className="font-bold text-green-400 mb-2">{name}</h3>
      <div className="relative pt-1">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-900">
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
    { name: 'English', level: 'Upper Intermediate (B2)' },
    { name: 'French', level: 'Intermediate' },
  ];

  return (
    <section id="languages" className="py-8">
      <h2 className="text-2xl font-bold mb-6 text-green-400">Languages</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {languages.map((lang) => (
          <LanguageCard key={lang.name} {...lang} />
        ))}
      </div>
    </section>
  );
};

export default Languages;
