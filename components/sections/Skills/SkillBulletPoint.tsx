import React, { FC } from 'react';
import { ISkillBulletPointProps } from '../../../interfaces';

const SkillBulletPoint: FC<ISkillBulletPointProps> = ({ text }) => {
  return (
    <div className="flex text-sm font-light ml-2 mt-1">
      <span className="float-none h-[2px] w-3 bg-gray-400 mt-2 mr-1"></span>
      <p>{text}</p>
    </div>
  );
};

export default SkillBulletPoint;
