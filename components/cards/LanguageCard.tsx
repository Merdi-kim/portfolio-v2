import React, { FC } from 'react';

interface Prop {
  link: string;
}

const LanguageCard: FC<Prop> = ({ link }) => {
  return (
    <img
      src={link}
      alt="language image"
      className="h-8 w-8 p-1 rounded-full border-[1px] border-solid border-primary sm:h-10 sm:w-10 "
    />
  );
};

export default LanguageCard;
