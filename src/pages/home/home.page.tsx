import { FC } from 'react';
import MainLayout from '../main.layout';
import ProfileCard from './components/profile-card.component';

const SectionCenter: FC = () => (
  <h1>Center Section</h1>
);
const SectionRight: FC = () => (
  <h1>Right Section</h1>
);

const HomePage: FC = () => (
  <MainLayout
    SectionLeft={<ProfileCard />}
    SectionCenter={<SectionCenter />}
    SectionRight={<SectionRight />}
  />
);

export default HomePage;
