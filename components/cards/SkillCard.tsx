import { FC, ReactNode } from 'react';

interface Props {
  title: string;
  skillsList: ReactNode;
}

const SkillCard: FC<Props> = ({ title, skillsList }) => {
  return (
    <div className="flex-1 h-full bg-gray-200 mb-10  mx-1 sm:mx-14 p-4 rounded-lg">
      <h3 className="font-semibold text-xl">{title}</h3>
      <div className="mt-3">{skillsList}</div>
    </div>
  );
};

export default SkillCard;
