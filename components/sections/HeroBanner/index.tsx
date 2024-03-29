import React from 'react';
import ArticleCard from '../../cards/ArticleCard';
import SocialLinks from '../SocialLinks';
import { IPostCardProps } from '../../../interfaces';
import TitleCard from '../../cards/TitleCard';

const HeroBanner = ({ posts }: IPostCardProps) => {
  return (
    <div className="h-full lg:bg-heroBanner lg:bg-cover">
      <div className="flex justify-center sm:pt-20 bg-heroBanner bg-cover lg:bg-none">
        <div className="flex-1 flex flex-col justify-center items-center py-8 sm:py-20 md:h-60 md:items-start md:flex-none md:w-[65%] md:py-0 md:pl-3 lg:pl-16">
          <h1 className=" text-[#00CCFF] text-[50px] font-primary md:text-[60px] lg:text-[70px]">
            Merdi Kim
          </h1>
          <section className="flex">
            <span className="text-[12px] text-center mx-2 sm:mx-3 md:text-md lg:text-lg">
              Software engineer⛓
            </span>
            <span className="text-[12px] text-center mx-2 sm:mx-3 md:text-md lg:text-lg">
              Protocols builder🛠
            </span>
            <span className="text-[12px] text-center mx-2 sm:mx-3 md:text-md lg:text-lg">
              Content creator🗞
            </span>
          </section>
          <div className="md:hidden">
            <SocialLinks />
          </div>
        </div>
        <div className="hidden md:flex w-[35%] items-center justify-center h-60">
          <img
            src="/assets/images/profile.JPG"
            className="h-60 w-60 object-cover rounded-[50%]"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full tex-sm px-4 sm:px-20 md:w-1/2 flex flex-col items-center justify-center md:px-2 lg:px-16">
          <TitleCard text="About me" />
          <p className="font-light text-sm sm:text-lg">
            I am a software engineer with experience in building secure and
            scalable software. I am comfortable working with a variety of
            technologies and I am always available to learn and adapt to new
            technologies along the way. Together in teams, I have worked on
            applications with thousands of users. I always focus on providing
            users with a flawless experience.
          </p>
        </div>
        <div className="flex flex-col items-center w-full md:w-1/2 p-4 sm:p-10">
          <TitleCard text="Latest article" />
          <div className={''}>
            {/*@ts-ignore */}
            <ArticleCard post={posts[0]} />
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <SocialLinks />
      </div>
    </div>
  );
};

export default HeroBanner;
