import { IconTextProperties } from '../../components/navbar/navbar.component';
import { ReactComponent as Icon1 } from '../../stories/assets/code-brackets.svg';
import { ReactComponent as Icon2 } from '../../stories/assets/colors.svg';
import { ReactComponent as Icon3 } from '../../stories/assets/comments.svg';
import { ReactComponent as Icon4 } from '../../stories/assets/direction.svg';
import { ReactComponent as Icon5 } from '../../stories/assets/flow.svg';
import { ReactComponent as Icon6 } from '../../stories/assets/plugin.svg';
import { ReactComponent as Icon7 } from '../../stories/assets/repo.svg';

const navItems: IconTextProperties[] = [
  {
    Icon: Icon1,
    id: 1,
    isActive: true,
    link: '/home',
    target: '_self',
    text: 'Home'
  },
  {
    Icon: Icon2,
    id: 2,
    isActive: false,
    link: '/mynetwork',
    target: '_self',
    text: 'My Network'
  },
  {
    Icon: Icon3,
    id: 3,
    isActive: false,
    link: '/jobs',
    text: 'Jobs'
  },
  {
    Icon: Icon4,
    id: 4,
    isActive: false,
    link: '/messaging',
    text: 'Messaging'
  },
  {
    Icon: Icon5,
    id: 5,
    isActive: false,
    link: '/notifications',
    text: 'Notifications'
  },
  {
    Icon: Icon6,
    id: 6,
    isActive: false,
    link: '/me',
    text: 'Me'
  },
  {
    Icon: Icon7,
    id: 7,
    isActive: false,
    link: '/work',
    text: 'Work'
  }
];

export default navItems;
