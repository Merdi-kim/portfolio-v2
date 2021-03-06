import { FC } from 'react';

interface Props {
  link: string;
  image: string;
}

const SocialLinkCard: FC<Props> = ({ link, image }) => {
  return (
    <a href={link} target={'_blank'} className="mx-4 hover:scale-105">
      <img
        src={image}
        alt="social image"
        className="w-5 h-5 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full object-cover"
      />
    </a>
  );
};

export default SocialLinkCard;
