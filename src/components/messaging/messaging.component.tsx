import {
  mdiChevronDown, mdiChevronUp, mdiDotsHorizontal, mdiSquareEditOutline
} from '@mdi/js';
import Icon from '@mdi/react';
import {
  FC,
  KeyboardEvent,
  useState
} from 'react';
import profileImage from '../../assets/my-profile-image.jpeg';
import IconButton from '../icon-button/icon-button.component';
import RoundImage from '../round-image/round-image.component';
import UserMessagingItem from './components/user-messaging-item.component';
import './messaging.styles.scss';

const Messaging: FC = () => {
  const [state, setState] = useState(
    {
      expanded: false
    }
  );
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
      actionMouse: expand,
      actionKeyboard: expandKeyboard
    },
    {
      icon: mdiSquareEditOutline,
      actionMouse: expand,
      actionKeyboard: expandKeyboard
    },
    {
      icon: expanded ? mdiChevronDown : mdiChevronUp,
      actionMouse: expand,
      actionKeyboard: expandKeyboard
    }
  ];
  const mockMessagingItems = [];
  for (let index = 0; index < 20; index++) {
    mockMessagingItems.push(<UserMessagingItem key={index} />);
  }
  return (
    <div
      className={`hu-messaging hu-card tw-border-b-0 tw-rounded-b-none tw-flex tw-flex-col tw-gap-2 tw-fixed tw-bottom-0 tw-right-0 tw-p-2
  tw-cursor-pointer tw-w-72 tw-bg-white ${expanded ? 'tw-translate-y-0' : 'is-minimized'} tw-transition-all tw-ease-in tw-duration-200`}
      onClick={expand}
      onKeyDown={expandKeyboard}
      role="button"
      tabIndex={0}
    >
      <header className="tw-flex tw-gap-2 tw-items-center">
        <RoundImage imagePath={profileImage} imageWidth="32" alt="Image Felipe Marin" />
        <span className="tw-text-sm tw-font-semibold tw-flex-grow">Messaging</span>
        <section className="tw-flex tw-items-center">
          {buttonData.map(({ icon, actionMouse }) => (
            <IconButton
              buttonType="button"
              className="tw-p-1 hover:tw-bg-gray-300 tw-rounded-2xl tw-ease-in tw-duration-200"
              action={actionMouse}
              key={icon}
            >
              <Icon path={icon} size={1} className="tw-text-gray-600" />
            </IconButton>
          ))}
        </section>
      </header>
      <main>
        {mockMessagingItems}
      </main>
    </div>
  );
};
export default Messaging;
