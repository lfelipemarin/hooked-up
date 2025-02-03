import { IconTextProperties } from '../../components/navbar/navbar.component';

import { ReactComponent as IconArticle } from '../../assets/article.svg';
import { ReactComponent as IconJob } from '../../assets/job.svg';
import { ReactComponent as IconPhoto } from '../../assets/photo.svg';
import { ReactComponent as IconVideo } from '../../assets/video.svg';

export const navItems: IconTextProperties[] = [
  {
    iconKey: 'codeBrackets',
    id: 1,
    isActive: true,
    link: '/home',
    target: '_self',
    text: 'Home'
  },
  {
    iconKey: 'colors',
    id: 2,
    isActive: false,
    link: '/mynetwork',
    target: '_self',
    text: 'My Network'
  },
  {
    iconKey: 'comments',
    id: 3,
    isActive: false,
    link: '/jobs',
    text: 'Jobs'
  },
  {
    iconKey: 'direction',
    id: 4,
    isActive: false,
    link: '/messaging',
    text: 'Messaging'
  },
  {
    iconKey: 'flow',
    id: 5,
    isActive: false,
    link: '/notifications',
    text: 'Notifications'
  },
  {
    iconKey: 'plugin',
    id: 6,
    isActive: false,
    link: '/me',
    text: 'Me'
  },
  {
    iconKey: 'repo',
    id: 7,
    isActive: false,
    link: '/work',
    text: 'Work'
  }
];

export const iconPostButtons = [
  {
    Icon: IconPhoto,
    iconColor: '#378fe9',
    label: 'Photo'
  },
  {
    Icon: IconVideo,
    iconColor: '#5f9b41',
    label: 'Video'
  },
  {
    Icon: IconJob,
    iconColor: 'purple',
    label: 'Job'
  },
  {
    Icon: IconArticle,
    iconColor: 'orange',
    label: 'Write Article'
  }
];
