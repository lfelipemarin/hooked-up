/* eslint-disable react/require-default-props */
import { FC, ReactElement } from 'react';
import './hu-card.styles.scss';

interface CardProperties {
  cardHeader?: ReactElement
  cardBody?: ReactElement
  cardFooter?: ReactElement
}

const HuCard: FC<CardProperties> = ({ cardHeader, cardBody, cardFooter }) => (
  <div className="hu-card">
    <header className="hu-card-header">
      {cardHeader}
    </header>
    <main>
      {cardBody}
    </main>
    <footer>
      {cardFooter}
    </footer>
  </div>
);
export default HuCard;
