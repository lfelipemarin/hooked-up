import { FC, ReactElement } from 'react';
import MainLayout from '../main.layout';
import CommunityCard from './components/community-card.component';
import SummaryCard from './components/cv-info-cards/summary-card';
import PostCard from './components/post-card.component';
import ProfileCard from './components/profile-card.component';

import { cVData } from '../../constants';
import ExperienceCard from './components/cv-info-cards/experience-card';
import ProjectsCard from './components/cv-info-cards/projects-card';
import SkillsetCard from './components/cv-info-cards/skillset-card';

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
    <SummaryCard title="Summary" body={cVData[0].summary} />
    <SkillsetCard title="Skillset" body={cVData[0].skillset} />
    <ExperienceCard title="Experience" body={cVData[0].work} />
    <ProjectsCard title="Personal Projects" body={cVData[0].personalProjects} />
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
