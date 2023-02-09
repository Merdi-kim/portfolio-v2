import { FC } from 'react';
import { ITitleCardProp } from '../../types';

const TitleCard: FC<ITitleCardProp> = ({ text }) => {
  return <h2 className="titleCard">{text}</h2>;
};

export default TitleCard;
