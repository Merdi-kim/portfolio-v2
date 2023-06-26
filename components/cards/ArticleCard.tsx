import React, { FC } from 'react';
import { IArticleProps } from '../../interfaces';

const ArticleCard: FC<IArticleProps> = ({ post }) => {
  return (
    <a target={'_blank'} href={`https://www.merdikim.com/post/${post?.slug}`}>
      <div className=" w-full sm:w-[55vw]  md:w-[40vw] flex flex-col lg:flex-row  bg-faded hover:bg-slate-800 shadow-lg rounded-lg p-2 sm:p-4">
        <div className="w-full max-h-[10rem] lg:w-[40%] relative overflow-hidden shadow-md">
          <img
            src={post?.featuredImage.url}
            alt={post?.title}
            className=" h-20 w-full sm:h-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
          />
        </div>
        <div className="w-full lg:w-[60%] relative">
          <h1 className="transition duration-700 text-white text-center px-2 mt-2 md:mt-0 sm:mb-2 md:mb-4 cursor-pointer text-xl sm:text-2xl font-semibold">
            {post?.title || 'Not found'}
          </h1>
          <p className="text-center lg:text-[16px] text-gray-400 font-normal px-4 xl:px-18 line-clamp-3">
            {post?.excerpt}
          </p>
        </div>
      </div>
    </a>
  );
};

export default ArticleCard;
