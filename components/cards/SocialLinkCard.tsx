import { FC } from 'react';
import { ISocialLinkCardProps } from '../../types';

const SocialLinkCard: FC<ISocialLinkCardProps> = ({ link, image }) => {
  return (
    <a href={link} target={'_blank'} className="mx-4 hover:scale-105">
      <img
        src={image}
        alt="social image"
        className="w-5 h-5 md:w-10 md:h-10 rounded-full object-cover"
      />
    </a>
  );
};

export default SocialLinkCard;
