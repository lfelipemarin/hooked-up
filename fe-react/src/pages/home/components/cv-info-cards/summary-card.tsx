/* eslint-disable react/require-default-props */
import { FC } from 'react';
import BaseCard from './base-card';

const SummaryCard: FC<{ title?: string, body?: string }> = ({ title, body }) => (
  <BaseCard body={(
    <div>
      <h2>{title}</h2>
      <span className="tw-h-0.5 tw-w-1/5 tw-bg-blue-400 tw-block tw-mb-2" />
      <p className="tw-text-sm">
        {body}
      </p>
    </div>
  )}
  />
);
export default SummaryCard;
