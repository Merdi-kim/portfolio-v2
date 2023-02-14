import React, { FC } from 'react';
import Link from 'next/link';
import { IArticleProps } from '../../types';

const ArticleCard: FC<IArticleProps> = ({ post }) => {
  return (
    <div className="h-[24rem] w-full sm:h-[20rem] lg:h-60 sm:w-[55vw]  md:w-[40vw] flex flex-col lg:flex-row  bg-faded shadow-lg rounded-lg p-2 sm:p-4">
      <div className="w-full h-[10rem] lg:h-full lg:w-[40%] relative overflow-hidden shadow-md">
        <img
          src={post?.featuredImage.url}
          alt={post?.title}
          className="w-full h-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <div className="w-full lg:w-[60%] relative">
        <h1 className="transition duration-700 text-white text-center px-2 mt-2 md:mt-0 sm:mb-2 md:mb-4 cursor-pointer text-xl sm:text-2xl font-semibold">
          <Link href={`/post/${post?.slug}`}>{post?.title || 'Not found'}</Link>
        </h1>
        <p className="text-center lg:text-sm text-gray-400 font-normal px-4 xl:px-18 line-clamp-3">
          {post?.excerpt}
        </p>
        <div className="text-right mt-4">
          <Link href={`post/${post?.slug}`}>
            <span className="transition text-white duration-500 transform hover:-translate-y-1 inline-block text-main-color lg:text-sm xl:text-lg font-medium rounded-lg border-b-2 cursor-pointer hover:font-bold">
              Read more
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
