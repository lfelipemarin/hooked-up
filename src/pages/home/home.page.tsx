import { FC, ReactElement } from 'react';
import MainLayout from '../main.layout';
import CommunityCard from './components/community-card.component';
import CvCard from './components/cv-card.component';
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

const SectionCenter = (): ReactElement => (
  <>
    <PostCard />
    <CvCard />
  </>
);

const HomePage: FC = () => (
  <MainLayout
    SectionLeft={<SectionLeft />}
    SectionCenter={<SectionCenter />}
    SectionRight={<SectionRight />}
  />
);

export default HomePage;
