import { FC } from 'react';
import HuCard from '../../../components/hu-card/hu-card.component';

const CardHeader: FC = () => (
  <>
    <div className="bg-section" />
    <div className="profile-pic-section" />
  </>
);
const CardBody: FC = () => (
  <h1>Card Body</h1>
);
const CardFooter: FC = () => (
  <h1>Card Footer</h1>
);

const ProfileCard: FC = () => (
  <HuCard cardHeader={<CardHeader />} cardBody={<CardBody />} cardFooter={<CardFooter />} />
);
export default ProfileCard;
