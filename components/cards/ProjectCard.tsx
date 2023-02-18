import Link from 'next/link';
import React, { FC } from 'react';
import { IProjectCardProps } from '../../types';

const ProjectCard: FC<IProjectCardProps> = ({ right, project }) => {
  return (
    <div
      className={`h-80 w-80 bg-imageOne bg-cover bg-no-repeat rounded-lg relative mt-8 ${
        right
          ? 'ml-[calc(50%-10rem)] md:ml-[calc(50%+4rem)]'
          : 'ml-[calc(50%-10rem)] md:ml-[calc(50%-24rem)]'
      }`}
    >
      <div className="h-7/12 w-full absolute bottom-0 px-2 py-4 rounded-lg bg-faded  text-white opacity-95">
        <h3 className=" font-bold mb-4 text-lg">{project.name}</h3>
        <p className="w-full mb-4 text-gray-400 line-clamp-3">
          {project.description}
        </p>
        <div className="h-[2rem] flex justify-between w-full">
          <Link href={`${project.website}`}>
            <span className="h-11/12 w-5/12 cursor-pointer flex justify-center items-center rounded-lg bg-main hover:bg-blue-600 ">
              Live
            </span>
          </Link>
          <Link href={`${project.github}`}>
            <span className="h-11/12 w-5/12 cursor-pointer flex justify-center items-center rounded-lg bg-main hover:bg-blue-600 ">
              Code
            </span>
          </Link>
        </div>
      </div>
      <span
        className={`hidden md:block absolute top-40 h-[2px] w-16 bg-faded ${
          right ? 'right-full' : 'left-full'
        }`}
      ></span>
    </div>
  );
};

export default ProjectCard;
