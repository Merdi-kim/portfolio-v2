import { FC } from 'react';

interface Prop {
  text: string;
}

const TitleCard: FC<Prop> = ({ text }) => {
  return <h2 className="titleCard">{text}</h2>;
};

export default TitleCard;
