import { FC } from 'react';
import MainLayout from '../main.layout';
import CommunityCard from './components/community-card.component';
import ProfileCard from './components/profile-card.component';

const SectionCenter: FC = () => (
  <h1>Center Section</h1>
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
