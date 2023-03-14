/* eslint-disable react/require-default-props */
import { FC, ReactElement } from 'react';
import { WorkType } from '../../../../constants/mock/data';
import { parseDateOrCurrent } from '../../../../utils/date-utils';
import BaseCard from './base-card';

const ExperienceCard: FC<{ title?: string, body: WorkType[] }> = ({ title, body }) => {
  const renderJob = (): ReactElement => (
    <>
      {
        body.map((job) => (
          <div key={job.name} className="tw-mb-3">
            <h3 className="tw-text-blue-600 tw-font-medium">
              {job.position}
            </h3>
            <h4 className="tw-text-xs">
              {`${parseDateOrCurrent(job.startDate as string)} - ${parseDateOrCurrent(job.endDate as string)}`}
            </h4>
            <h3 className="tw-font-medium">
              {job.name}
            </h3>
            <ul className="tw-list-disc tw-list-inside">
              {job.description?.split('*').map((li) => (
                li.length > 0 && (
                  <li key={li} className="tw-ml-2">
                    {li}
                  </li>
                )
              ))}
            </ul>
          </div>
        ))
      }
    </>
  );
  return (
    <BaseCard body={(
      <div>
        <h2>{title}</h2>
        <span className="tw-h-0.5 tw-w-1/5 tw-bg-blue-400 tw-block tw-mb-2" />
        <div className="tw-text-sm">
          {renderJob()}
        </div>
      </div>
    )}
    />
  );
};
export default ExperienceCard;
