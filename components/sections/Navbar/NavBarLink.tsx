import Link from 'next/link';
import { FC } from 'react';

interface Props {
  link: string;
  text: string;
}

const NavBarLink: FC<Props> = ({ link, text }) => {
  return (
    <div className="text-blue-600 font-bold  border-solid border-b-black pb-[0.1rem] mx-4 hover:border-b-2">
      <Link href={link}>{text}</Link>
    </div>
  );
};

export default NavBarLink;
