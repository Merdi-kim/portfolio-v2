import React, { FC } from 'react';

interface Props {
  right?: boolean;
}

const ProjectCard: FC<Props> = ({ right }) => {
  return (
    <div
      className={`h-80 w-80 bg-slate-500 rounded-lg relative mb-6 md:mb-0 ${
        right
          ? 'ml-[calc(50%-10rem)] md:ml-[calc(50%+4rem)]'
          : 'ml-[calc(50%-10rem)] md:ml-[calc(50%-24rem)]'
      }`}
    >
      <div></div>
      <span
        className={`hidden md:block absolute top-40 h-[2px] w-16 bg-black ${
          right ? 'right-full' : 'left-full'
        }`}
      ></span>
    </div>
  );
};

export default ProjectCard;
