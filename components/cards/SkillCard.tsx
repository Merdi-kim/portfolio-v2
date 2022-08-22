import { FC, ReactNode } from 'react';

interface Props {
  title: string;
  skillsList: ReactNode;
}

const SkillCard: FC<Props> = ({ title, skillsList }) => {
  return (
    <div className="flex-none h-full w-full bg-gray-200 mb-10 mx-1 sm:w-[80%] md:mb-0  md:w-[50%] lg:w-[40%] p-4 rounded-lg">
      <h3 className="font-semibold text-[16px]">{title}</h3>
      <div className="mt-3">{skillsList}</div>
    </div>
  );
};

export default SkillCard;
