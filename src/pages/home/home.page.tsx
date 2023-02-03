import { FC, ReactElement } from 'react';
import MainLayout from '../main.layout';
import CommunityCard from './components/community-card.component';
import PostCard from './components/post-card.component';
import ProfileCard from './components/profile-card.component';

const SectionRight: FC = () => (
  <h1>Right Section</h1>
);

const SectionLeft = (): ReactElement => (
  <>
    <ProfileCard />
    <CommunityCard />
  </>
);

const HomePage: FC = () => (
  <MainLayout
    SectionLeft={<SectionLeft />}
    SectionCenter={<PostCard />}
    SectionRight={<SectionRight />}
  />
);

export default HomePage;
