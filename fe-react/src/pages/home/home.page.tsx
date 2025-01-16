import { FC, ReactElement, useState } from 'react';
import MainLayout from '../main.layout';
import CommunityCard from './components/community-card.component';
import SummaryCard from './components/cv-info-cards/summary-card';
import PostCard from './components/post-card.component';
import ProfileCard from './components/left-section/profile-card.component';

import { cVData } from '../../constants';
import ExperienceCard from './components/cv-info-cards/experience-card';
import ProjectsCard from './components/cv-info-cards/projects-card';
import SkillsetCard from './components/cv-info-cards/skillset-card';
import Modal from '../../components/modal/modal.component';
import CodingInterests from './components/right-section/coding-interests.component';

const SectionRight: FC = () => <CodingInterests />;

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

const HomePage: FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(true);
  const handleCloseModal = (): void => setModalOpen(false);
  return (
    <>
      <MainLayout
        SectionLeft={<SectionLeft />}
        SectionCenter={<SectionCenter />}
        SectionRight={<SectionRight />}
      />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Reminder">
        This is a replica of a LinkedIn page. It&apos;s used for educational
        purposes and for showing my information only.
      </Modal>
    </>
  );
};

export default HomePage;
