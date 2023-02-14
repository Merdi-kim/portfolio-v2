import { FC } from 'react';
import { ISkillCardProps } from '../../types';

const SkillCard: FC<ISkillCardProps> = ({ title, skillsList }) => {
  return (
    <div className="flex-none h-full w-full bg-faded mb-10 mx-1 sm:w-[80%] md:mb-0  md:w-[50%] lg:w-[40%] p-4 rounded-lg">
      <h3 className="font-semibold text-[16px]">{title}</h3>
      <div className="mt-3">{skillsList}</div>
    </div>
  );
};

export default SkillCard;
