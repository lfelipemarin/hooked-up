import { FC } from 'react';
import profileImage from '../../assets/my-profile-image.jpeg';
import Button from '../../components/icon-button/button.component';
import RoundImage from '../../components/round-image/round-image.component';
import { iconButtons } from '../../constants/icons/icons';
import MainLayout from '../main.layout';
import CommunityCard from './components/community-card.component';
import ProfileCard from './components/profile-card.component';

const SectionCenter: FC = () => (
  <>
    <div className="tw-flex tw-gap-2">
      <RoundImage imagePath={profileImage} imageWidth="48" alt="Image Felipe Marin" />
      <Button
        labelText="Start a post"
        className="tw-text-left tw-flex-grow tw-border tw-border-solid
      tw-border-gray-500 tw-rounded-3xl tw-p-3"
      />
    </div>
    <Button
      labelText="Photo"
      Icon={iconButtons[0]}
      className="tw-flex tw-items-center tw-gap-2 tw-bg-red-500 tw-p-3 tw-rounded-md
     tw-text-sm tw-text-black tw-font-bold"
      iconColor="blue"
    />
  </>
);
const SectionRight: FC = () => (
  <h1>Right Section</h1>
);

const HomePage: FC = () => (
  <MainLayout
    SectionLeft={[<ProfileCard key={0} />, <CommunityCard key={1} />]}
    SectionCenter={<SectionCenter />}
    SectionRight={<SectionRight />}
  />
);

export default HomePage;
