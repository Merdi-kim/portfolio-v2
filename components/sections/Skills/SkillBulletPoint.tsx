import React, { FC } from 'react';

interface Props {
  text: string;
}

const SkillBulletPoint: FC<Props> = ({ text }) => {
  return (
    <div className="flex text-sm font-light ml-2 mt-1">
      <span className="float-none h-[2px] w-3 bg-black mt-2 mr-1"></span>
      <p>{text}</p>
    </div>
  );
};

export default SkillBulletPoint;
