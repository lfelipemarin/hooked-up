/* eslint-disable react/require-default-props */
import { FC, ReactElement } from 'react';
import './hu-card.styles.scss';

interface CardProperties {
  cardHeader?: ReactElement
  cardBody?: ReactElement
  cardFooter?: ReactElement
}

const HuCard: FC<CardProperties> = ({ cardHeader, cardBody, cardFooter }) => (
  <div className="hu-card tw-border-none tw-p-0 tw-m-0">
    {cardHeader}
    {cardBody}
    {cardFooter}
  </div>
);
export default HuCard;
