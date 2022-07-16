import React from 'react';
import { languageImages } from '../../../data/data';
import LanguageCard from '../../cards/LanguageCard';

const Languages = () => {
  return (
    <div className="flex items-center justify-evenly h-24 w-full sm:h-32">
      {languageImages.map(link => (
        <LanguageCard key={link} link={link} />
      ))}
    </div>
  );
};

export default Languages;
