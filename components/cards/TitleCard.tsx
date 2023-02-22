import { FC } from 'react';
import { ITitleCardProp } from '../../interfaces';

const TitleCard: FC<ITitleCardProp> = ({ text }) => {
  return <h2 className="titleCard">{text}</h2>;
};

export default TitleCard;
