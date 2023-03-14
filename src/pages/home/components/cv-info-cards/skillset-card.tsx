/* eslint-disable react/require-default-props */
import { FC, ReactElement } from 'react';
import BaseCard from './base-card';

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

const SkillsetCard: FC<{ title?: string, body: { programmingLanguages: Array<string>, frameworks: Array<string>, databases: Array<string> } }> = ({ title, body }) => {
  const renderSkillset = (): ReactElement => (
    <div className="tw-flex tw-justify-evenly">
      {
        Object.keys(body).map((skillKey) => (
          <div key={skillKey}>
            <h3>
              {filteredSkillSet(skillKey)}
            </h3>
            <ul className="tw-list-disc tw-list-inside">
              {body[skillKey as keyof typeof body].map((skill) => (
                <li key={skill} className="tw-text-sm">{skill}</li>
              ))}
            </ul>
          </div>
        ))
      }
    </div>
  );
  return (
    <BaseCard body={(
      <div>
        <h2>{title}</h2>
        <span className="tw-h-0.5 tw-w-1/5 tw-bg-blue-400 tw-block tw-mb-2" />
        <div className="tw-text-sm">
          {renderSkillset()}
        </div>
      </div>
    )}
    />
  );
};
export default SkillsetCard;
