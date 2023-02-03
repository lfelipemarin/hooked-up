import { FC, ReactElement } from 'react';
import profileImage from '../../../assets/my-profile-image.jpeg';
import HuCard from '../../../components/hu-card/hu-card.component';
import Button from '../../../components/icon-button/button.component';
import RoundImage from '../../../components/round-image/round-image.component';
import { iconPostButtons } from '../../../constants';

const CardBody: FC = () => (
  <div className="tw-flex tw-gap-2">
    <RoundImage imagePath={profileImage} imageWidth="48" alt="Image Felipe Marin" />
    <Button
      labelText="Start a post"
      className="tw-text-left tw-text-sm tw-text-gray-500 tw-font-semibold tw-flex-grow tw-border tw-border-solid
    tw-border-gray-500 tw-rounded-3xl tw-p-3"
    />
  </div>
);

const CardFooter = (): ReactElement => (
  <div className="tw-flex tw-justify-between tw-flex-nowrap tw-mt-2">
    {iconPostButtons.map((icon) => (
      <Button
        labelText={icon.label}
        Icon={icon.Icon}
        className="tw-flex tw-items-center tw-gap-2 tw-p-3 tw-rounded-md
        tw-text-sm tw-text-gray-500 tw-font-semibold"
        iconColor={icon.iconColor}
        key={icon.label}
      />
    ))}
  </div>
);

const PostCard: FC = () => (
  <HuCard cardBody={<CardBody />} cardFooter={<CardFooter />} className="tw-p-3" />
);
export default PostCard;
