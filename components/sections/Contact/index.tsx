import React from 'react';
import TitleCard from '../../cards/TitleCard';
import SocialLinks from '../SocialLinks';

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col items-center p-4">
      <TitleCard text="Contact" />
      <p className="mt-4 mb-8">
        Want to talk about something, anything or just say hi... I would like to
        hear from you. Email me at <b>merdikimuha1@gmail.com</b> 📩{' '}
      </p>

      <div className="my-6 text-center">
        <p>Or, let us connect on:</p>
        <SocialLinks />
        <p>
          Made with love by @
          <span className="font-bold p-1 border-solid border-b-2 border-b-primary text-blue-500">
            Merdi Kim
          </span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
