import React from 'react';
import { linksToSocials } from '../../../data/data';
import ArticleCard from '../../cards/ArticleCard';
import SocialLinkCard from '../../cards/SocialLinkCard';
import TitleCard from '../../cards/TitleCard';
import SocialLinks from '../SocialLinks';

const HeroBanner = () => {
  return (
    <div className=" h-full">
      <div className="flex justify-center">
        <div className="flex-1 flex flex-col justify-center items-center py-8 sm:py-20 md:h-60 md:items-start md:flex-none md:w-[65%] md:py-0 md:pl-3 lg:pl-16">
          <h1 className="text-[50px] font-bold md:text-[60px] lg:text-[70px]">
            Merdi Kim
          </h1>
          <section className="flex">
            <span className="text-[12px] mx-2 sm:mx-3 md:text-md lg:text-lg">
              Software engineer⛓
            </span>
            <span className="text-[12px] mx-2 sm:mx-3 md:text-md lg:text-lg">
              Protocols tester🛠
            </span>
            <span className="text-[12px] mx-2 sm:mx-3 md:text-md lg:text-lg">
              Content creator🗞
            </span>
          </section>
          <div className="md:hidden">
            <SocialLinks />
          </div>
        </div>
        <div className="hidden md:block w-[35%] h-60 border-2 border-solid">
          <iframe
            src="https://my.spline.design/roomrelaxingcopy-a72e6ba66f5ca75234e31090c70a990c/"
            frameBorder="0"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full tex-sm px-4 sm:px-20 md:w-1/2 flex flex-col items-center justify-center md:px-2 lg:px-16">
          <TitleCard text="About me" />
          <p>
            I am a software engineer with experience in secure and scalable
            software. I am comfortable working with a variety of technologies
            and I am always available to learn and adapt to new technologies
            along the way. Together in teams, I have worked on applications with
            thousands of users. I always focus on providing users with a
            flawless experience.
          </p>
        </div>
        <div className="flex flex-col items-center w-full md:w-1/2 p-10">
          <TitleCard text="Articles" />
          <div className="pt-6 h-64">
            <ArticleCard />
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
