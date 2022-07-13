import React from 'react'
import { linksToSocials } from '../../../data/data'
import ArticleCard from '../../cards/ArticleCard'
import SocialLinkCard from '../../cards/SocialLinkCard'
import TitleCard from '../../cards/TitleCard'

const HeroBanner = () => {

  return (
    <div className='h-[calc(100vh-3.5rem)] '>
        <div className='flex'>
          <div className='w-[65%] h-40 pt-20 pl-16'>
            <h1 className='text-[70px] font-bold'>Merdi Kim</h1>
            <section className='flex'>
              <span className='mx-4 text-lg'>Software engineer⛓</span>
              <span className='mx-4 text-lg'>Protocols tester🛠</span>
              <span className='mx-4 text-lg'>Content creator🗞</span>
            </section>
          </div>
          <div className='w-[35%] h-60'>
            <iframe src='https://my.spline.design/roomrelaxingcopy-a72e6ba66f5ca75234e31090c70a990c/' frameBorder='0' width='100%' height='100%'></iframe>
          </div>
        </div>
        <div className='flex'>
          <div className='w-1/2 h-80 flex flex-col justify-center px-16'>
            <TitleCard text='About me'/>
            <p>
              I am a software engineer with experience in secure and scalable software. 
              I'm comfortable working with a variety of technologies and I'm always available 
              to learn and adapt to new technologies along the way. Together in teams, 
              I have worked on applications with thousands of users. I always focus on providing users with a flawless experience.
            </p>
          </div>
          <div className='h-80 w-1/2 p-10'>
            <TitleCard text='Articles'/>
            <div className='pt-6 h-64'>
              <ArticleCard/>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center h-32'>
          { linksToSocials.map(({link, image}) => <SocialLinkCard link={link} image={image} /> )}
        </div>
        <div className='h-8 flex items-center justify-center'>^</div>
    </div>
  )
}

export default HeroBanner