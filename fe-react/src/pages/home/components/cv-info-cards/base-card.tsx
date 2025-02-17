/* eslint-disable react/require-default-props */
import { FC, ReactElement } from 'react';
import HuCard from '../../../../components/hu-card/hu-card.component';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BaseCard: FC<{
  title?: string;
  body?: string | ReactElement | ReactElement[];
}> = ({ title, body }) => (
  <HuCard
    cardBody={body}
    className="tw-flex tw-flex-col tw-gap-2 tw-p-3 tw-mt-2"
  />
);
export default BaseCard;
