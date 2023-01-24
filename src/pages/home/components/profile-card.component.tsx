/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as BookmarkSvg } from '../../../assets/bookmark.svg';
import ProfileImage from '../../../assets/my-profile-image.jpeg';
import { ReactComponent as PremiumSvg } from '../../../assets/premium.svg';
import HuCard from '../../../components/hu-card/hu-card.component';
import RoundImage from '../../../components/round-image/round-image.component';
import './profile-card.styles.scss';

const CardHeader: FC = () => (
  <header className="hu-profile-card-header hu-profile-info tw-p-3">
    <div className="bg-section tw-bg-cover tw-bg-center" />
    <Link to="/me" className="tw-block hover:tw-underline hover:tw-text-purple-500">
      <div className="profile-pic-section tw-p-0 tw-m-0">
        <RoundImage imagePath={ProfileImage} alt="Profile Image" border="2px solid white" />
      </div>
      <div className="tw-text-black tw-font-bold tw-mx-auto tw-text-center">Felipe Marin Velasquez</div>
    </Link>
  </header>
);
const CardBody: FC = () => (
  <main className="hu-profile-card-main tw-px-3 tw-mb-3">
    <ul className="tw-flex tw-flex-col tw-gap-2">
      <li>
        <Link to="/me" className="tw-text-xs tw-font-semibold">
          <div className="tw-flex">
            <div className="tw-flex-grow">
              <span className="tw-text-gray-600">Who's viewed your profile</span>
            </div>
            <div>
              <span className="tw-text-blue-600">19</span>
            </div>
          </div>
        </Link>
      </li>
      <li>
        <Link to="/mynetwork" className="tw-text-xs tw-font-semibold">
          <div className="tw-flex">
            <div className="tw-flex-grow">
              <span className="tw-text-gray-600">Connections</span>
            </div>
            <div>
              <span className="tw-text-blue-600 ">425</span>
            </div>
          </div>
        </Link>
      </li>
    </ul>
  </main>
);
const CardFooter: FC = () => (
  <footer className="hu-profile-card-footer tw-flex tw-flex-col tw-text-xs">
    <Link to="/premium" className="hover:tw-text-blue-600 tw-p-3">
      <span className="tw-text-gray-600">Access exclusive tools & insights</span>
      <div className="tw-flex tw-items-center tw-gap-1">
        <PremiumSvg width="16" height="16" />
        <span className="tw-underline tw-font-bold">Try Premium for free</span>
      </div>
    </Link>
    <Link to="/myitems" className="tw-flex tw-items-center tw-gap-1 tw-p-3">
      <div className="tw-flex tw-items-center tw-gap-1">
        <BookmarkSvg width="16" height="16" />
        <span>My items</span>
      </div>
    </Link>
  </footer>
);

const ProfileCard: FC = () => (
  <HuCard cardHeader={<CardHeader />} cardBody={<CardBody />} cardFooter={<CardFooter />} />
);
export default ProfileCard;
