/* eslint-disable react/require-default-props */
import { FC, ReactElement } from 'react';
import './hu-card.styles.scss';

interface CardProperties {
  cardHeader?: ReactElement | ReactElement[]
  cardBody?: ReactElement | ReactElement[]
  cardFooter?: ReactElement | ReactElement[]
  className?: string
}

const HuCard: FC<CardProperties> = ({
  cardHeader, cardBody, cardFooter, className = ''
}) => (
  <div className={`hu-card tw-border-none tw-p-0 tw-m-0 ${className}`}>
    {cardHeader}
    {cardBody}
    {cardFooter}
  </div>
);
export default HuCard;
