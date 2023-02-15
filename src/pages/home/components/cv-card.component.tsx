/* eslint-disable react/require-default-props */
import { FC, ReactElement } from 'react';
import ProfileImage from '../../../assets/my-profile-image.jpeg';
import HuCard from '../../../components/hu-card/hu-card.component';
import RoundImage from '../../../components/round-image/round-image.component';

import { cVData } from '../../../constants';
import { DataType } from '../../../constants/mock/data';

type CardBodyInfo = Omit<DataType, 'name' | 'phone' | 'linkedInUrl' | 'githubUrl'>

const CardHeader = ({ name, careerTitles }: { name: string, careerTitles?: Array<string> }): ReactElement => (
  <div className="tw-flex tw-items-center tw-gap-2">
    <RoundImage imagePath={ProfileImage} alt="Profile Image" imageWidth="48" />
    <div className="tw-flex tw-flex-col">
      <p className="tw-text-sm tw-font-semibold">{name}</p>
      <p className="tw-text-xs">
        {careerTitles?.join(',')}
      </p>
    </div>
  </div>
);

const filteredSkillSet = (skill: string): string => {
  switch (skill) {
    case 'programmingLanguages': {
      return 'Languages';
    }
    case 'frameworks': {
      return 'Frameworks';
    }
    case 'databases': {
      return 'Databases';
    }
    default: {
      return '';
    }
  }
};

const CardBody = ({ data }: { data: CardBodyInfo }): ReactElement => {
  const { summary, skillset } = data;
  const renderSkillset = (): ReactElement => (
    <div className="tw-flex tw-justify-evenly">
      {
        Object.keys(skillset).map((skillKey) => (
          <div key={skillKey}>
            <h3>
              {filteredSkillSet(skillKey)}
            </h3>
            <ul className="tw-list-disc tw-list-inside">
              {skillset[skillKey as keyof typeof skillset].map((skill) => (
                <li key={skill} className="tw-text-sm">{skill}</li>
              ))}
            </ul>
          </div>
        ))
      }
    </div>
  );
  return (
    <>
      <div>
        <h2>Summary</h2>
        <span className="tw-h-0.5 tw-w-1/5 tw-bg-blue-400 tw-block tw-mb-2" />
        <p className="tw-text-sm">
          {summary}
        </p>
      </div>
      <div>
        <h2>Skillset</h2>
        <span className="tw-h-0.5 tw-w-1/5 tw-bg-blue-400 tw-block tw-mb-2" />
        {renderSkillset()}
      </div>
    </>
  );
};

const CvCard: FC = () => (
  <>
    {cVData.map((cv) => {
      const { name, id, careerTitles } = cv;
      const data: CardBodyInfo = cv;
      return (
        <HuCard
          cardHeader={(
            <CardHeader
              name={name}
              careerTitles={careerTitles}
            />
          )}
          cardBody={<CardBody data={data} />}
          key={id}
          className="tw-flex tw-flex-col tw-gap-2 tw-p-3 tw-mt-2"
        />
      );
    })}
  </>
);
export default CvCard;
