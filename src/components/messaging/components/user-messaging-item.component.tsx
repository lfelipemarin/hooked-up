import { FC } from 'react';
import RoundImage from '../../round-image/round-image.component';

interface UserMessagingItemProperties {
  profileImage: string,
  name: string,
  date: string,
  lastMessagePreview: string,
  status?: 'online' | 'away',
  statusIcon?: string
}
const UserMessagingItem: FC<UserMessagingItemProperties> = ({
  profileImage, name, date, lastMessagePreview, status, statusIcon
}) => (
  <div className="hu-message-item tw-flex tw-items-center tw-gap-2 tw-relative tw-p-2">
    <RoundImage imagePath={profileImage} imageWidth="48" alt="Image Felipe Marin" />
    <div className="hu-message-item--info tw-relative">
      <div className="tw-flex">
        <span className="tw-text-sm tw-flex-1">{name}</span>
        <span className="tw-text-xs">{date}</span>
      </div>
      <div className="tw-flex">
        <span className="hu-message-item--preview tw-text-xs tw-overflow-hidden tw-text-ellipsis">{lastMessagePreview}</span>
        <div className="tw-flex-50" />
      </div>
    </div>
  </div>
);

export default UserMessagingItem;
