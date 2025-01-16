/* eslint-disable sort-keys */
import {
  mdiChevronDown,
  mdiChevronUp,
  mdiDotsHorizontal,
  mdiSquareEditOutline
} from '@mdi/js';
import Icon from '@mdi/react';
import { FC, KeyboardEvent, ReactNode, useState } from 'react';
import IconButton from '../icon-button/icon-button.component';
import RoundImage from '../round-image/round-image.component';
import SearchBar from '../search-bar/search-bar.component';
import './messaging.styles.scss';

interface MessagingProperties {
  headerImage: string;
  title: string;
  messageItems: ReactNode[];
  className?: string;
}

const Messaging: FC<MessagingProperties> = ({
  headerImage,
  title,
  messageItems,
  className = ''
}) => {
  const [state, setState] = useState({
    expanded: false
  });
  const { expanded } = state;

  const expand = (): void => {
    setState({ ...state, expanded: !expanded });
  };
  const expandKeyboard = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (event.type === 'keydown' && event.key && event.key !== 'Enter') {
      return;
    }
    setState({ ...state, expanded: !expanded });
  };

  const buttonData = [
    {
      icon: mdiDotsHorizontal,
      iconSize: 1,
      actionMouse: (): void => {
        console.log('options');
      },
      actionKeyboard: expandKeyboard
    },
    {
      icon: mdiSquareEditOutline,
      iconSize: 1,
      actionMouse: (): void => {
        console.log('new message');
      },
      actionKeyboard: expandKeyboard
    },
    {
      icon: expanded ? mdiChevronDown : mdiChevronUp,
      iconSize: 1,
      actionMouse: expand,
      actionKeyboard: expandKeyboard
    }
  ];

  return (
    <div
      className={`hu-messaging hu-card tw-border-b-0 tw-rounded-b-none tw-flex
        tw-flex-col tw-gap-2 tw-fixed tw-bottom-0 tw-right-4 tw-p-2
        tw-pt-0 ${expanded ? 'tw-translate-y-0' : 'is-minimized'}
        tw-transition-all tw-ease-in tw-duration-200 ${className}`}
      style={{ backgroundColor: 'var(--card-bg-color)' }}
    >
      <header className="tw-flex tw-gap-2 tw-items-center tw-sticky tw-top-0 tw-p-2 tw-cursor-pointer">
        <section
          className="tw-flex tw-items-center tw-gap-2 tw-flex-1"
          onClick={expand}
          onKeyDown={expandKeyboard}
          role="button"
          tabIndex={0}
        >
          <RoundImage
            imagePath={headerImage}
            imageWidth="32"
            alt="Image Felipe Marin"
          />
          <span className="tw-text-sm tw-font-semibold tw-flex-grow">
            {title}
          </span>
        </section>
        <section className="tw-flex tw-items-center">
          {buttonData.map(({ icon, iconSize, actionMouse }) => (
            <IconButton
              buttonType="button"
              className="tw-p-1 hover:tw-bg-gray-300 tw-rounded-2xl tw-ease-in tw-duration-200"
              action={actionMouse}
              key={icon}
            >
              <Icon path={icon} size={iconSize} className="tw-text-gray-600" />
            </IconButton>
          ))}
        </section>
      </header>
      <SearchBar />
      <main className="tw-flex tw-flex-col tw-gap-2 tw-relative tw-overflow-y-auto tw-overflow-x-hidden">
        {messageItems}
      </main>
    </div>
  );
};
export default Messaging;
