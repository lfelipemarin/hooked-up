import { FC } from 'react';
import PresenceIndicator from '../../presence-indicator/presence-indicator.component';
import RoundImage from '../../round-image/round-image.component';

interface UserMessagingItemProperties {
  profileImage: string;
  name: string;
  date: string;
  lastMessagePreview: string;
  status: 'online' | 'away';
}
const UserMessagingItem: FC<UserMessagingItemProperties> = ({
  profileImage,
  name,
  date,
  lastMessagePreview,
  status
}) => (
  <div className="hu-message-item tw-flex tw-items-center tw-gap-2 tw-relative tw-p-2">
    <RoundImage
      imagePath={profileImage}
      imageWidth="48"
      alt="Image Felipe Marin"
    />
    <PresenceIndicator
      status={status}
      className="tw-absolute tw-bottom-3 tw-left-11"
    />
    <div className="hu-message-item--info tw-relative">
      <div className="tw-flex">
        <span className="tw-text-sm tw-flex-1">{name}</span>
        <span className="tw-text-xs tw-text-gray-600">{date}</span>
      </div>
      <div className="tw-flex">
        <span className="hu-message-item--preview tw-text-xs tw-overflow-hidden tw-text-ellipsis tw-text-gray-600">
          {lastMessagePreview}
        </span>
        <div className="tw-flex-50" />
      </div>
    </div>
  </div>
);

export default UserMessagingItem;
