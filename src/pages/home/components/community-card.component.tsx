/* eslint-disable react/no-unescaped-entities */
import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as PlusSign } from '../../../assets/plus-sign.svg';
import HuCard from '../../../components/hu-card/hu-card.component';
import './community-card.styles.scss';

const links = [
  {
    key: 0,
    text: 'Groups',
    to: '/groups'
  },
  {
    key: 1,
    text: 'Events',
    to: '/events'
  },
  {
    key: 2,
    text: 'Followed Hashtags',
    to: '/hashtags'
  }
];

const renderLiItems = (): ReactNode[] => links.map(({ key, text, to }) => {
  let plusSign: ReactNode;
  if (text === 'Events') {
    // eslint-disable-next-line no-console
    plusSign = <PlusSign className="tw-text-gray-600" onClick={(event) => { event.preventDefault(); console.log('event'); }} />;
  }
  return (
    <li key={key}>
      <Link to={to} className="tw-text-xs tw-font-semibold tw-text-blue-600 hover:tw-underline">
        <div className="tw-flex">
          <div className="tw-flex-grow">
            <span>{text}</span>
          </div>
          {plusSign}
        </div>
      </Link>
    </li>
  );
});

const CardBody: FC = () => (
  <main className="hu-community-card-main tw-p-3 tw-py-4">
    <ul className="tw-flex tw-flex-col tw-gap-5">
      {renderLiItems()}
    </ul>
  </main>
);

const CardFooter: FC = () => (
  <footer className="hu-community-card-footer tw-p-3 tw-text-center">
    <Link to="/discover" className="tw-text-sm tw-text-gray-600 tw-font-medium">Discover More</Link>
  </footer>
);

const CommunityCard: FC = () => (
  <HuCard cardBody={<CardBody />} cardFooter={<CardFooter />} className="tw-mt-2" />
);
export default CommunityCard;
