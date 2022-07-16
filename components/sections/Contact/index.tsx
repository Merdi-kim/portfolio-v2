import React from 'react';
import TitleCard from '../../cards/TitleCard';
import SocialLinks from '../SocialLinks';

const Contact = () => {
  const inputStyle =
    'h-8 w-11/12 mb-4 rounded-lg border-none outline-none pl-2';

  return (
    <div className="flex flex-col items-center p-4">
      <TitleCard text="Contact" />
      <p className="mt-4 mb-8">
        Want to talk about something, anything or just say hi... I would like to
        hear from you 📩{' '}
      </p>
      <form className="flex flex-col items-center w-full p-4 rounded-xl sm:w-10/12 md:w-1/2 lg:w-5/12 bg-gray-300">
        <input type="text" placeholder="Your name" className={inputStyle} />
        <input
          type="email"
          placeholder="Email address"
          className={inputStyle}
        />
        <input
          type="text"
          placeholder="Message subject"
          className={inputStyle}
        />
        <textarea
          placeholder=""
          className="min-h-[5rem] w-11/12 mb-4 rounded-lg border-none outline-none p-2"
        />
        <button
          type="submit"
          className="bg-primary text-white rounded-lg px-4 py-2 mt-8"
        >
          Send message
        </button>
      </form>
      <div className="my-6 text-center">
        <p>Or, let us connect on:</p>
        <SocialLinks />
        <p>
          Made with love by @
          <span className="font-bold p-1 border-solid border-b-2 border-b-primary ">
            Merkim
          </span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
