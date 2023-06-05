import { FC } from 'react';

interface Properties {
  status: 'online' | 'away',
  className?: string
}

const PresenceIndicator: FC<Properties> = ({ status, className = '' }) => {
  const indicatorClasses = status === 'online' ? 'tw-bg-green-700' : 'tw-bg-white tw-border-green-700 tw-border-3 tw-border-solid';
  return (
    <div className={`tw-w-3 tw-h-3 tw-rounded-md ${indicatorClasses} ${className}`} />
  );
};

export default PresenceIndicator;
