import { linksToSocials } from '../../../data/data';
import SocialLinkCard from '../../cards/SocialLinkCard';

function SocialLinks() {
  return (
    <div className="flex justify-center items-center h-32">
      {linksToSocials.map(({ link, image }) => (
        <SocialLinkCard link={link} image={image} />
      ))}
    </div>
  );
}

export default SocialLinks;
