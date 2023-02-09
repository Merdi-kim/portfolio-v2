import Link from 'next/link';
import React, { FC } from 'react';
import { IProjectCardProps } from '../../types';

const ProjectCard: FC<IProjectCardProps> = ({ right }) => {
  return (
    <div
      className={`h-80 w-80 bg-imageOne bg-cover bg-no-repeat rounded-lg relative mb-6 md:mb-0 ${
        right
          ? 'ml-[calc(50%-10rem)] md:ml-[calc(50%+4rem)]'
          : 'ml-[calc(50%-10rem)] md:ml-[calc(50%-24rem)]'
      }`}
    >
      <div className="h-full w-full absolute top-0 px-2 py-4 rounded-lg bg-gray-900 border-[1px] border-blue-200 text-white opacity-95">
        <h3 className=" font-bold mt-[40%] mb-4 text-lg">
          Filecoin name service
        </h3>
        <p className="w-full mb-4 text-gray-300 line-clamp-3">
          Name service on the filecoin blockchain. All names are computed,
          mapped to addresses and stored on-chain
          kvbhenjbhvuefinjifvnjvedghfuvfhvnhbjfhieibuibibbiuiuifhjvhefbvuhbvhve
        </p>
        <div className="h-[2rem] flex justify-between w-full">
          <Link href={'/hi'}>
            <span className="h-11/12 w-5/12 cursor-pointer flex justify-center items-center rounded-lg bg-main border-[0.5px] border-blue-600 hover:bg-blue-500">
              Live
            </span>
          </Link>
          <Link href={'/yo'}>
            <span className="h-11/12 w-5/12 cursor-pointer flex justify-center items-center rounded-lg bg-main border-[0.5px] border-blue-600 hover:bg-blue-500">
              Code
            </span>
          </Link>
        </div>
      </div>
      <span
        className={`hidden md:block absolute top-40 h-[2px] w-16 bg-fading ${
          right ? 'right-full' : 'left-full'
        }`}
      ></span>
    </div>
  );
};

export default ProjectCard;
