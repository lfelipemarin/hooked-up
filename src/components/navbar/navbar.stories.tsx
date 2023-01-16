// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';

import NavBar, { IconTextProperties } from './navbar.component';
// import './icon-text-story-styles.scss';

import { ReactComponent as Icon1 } from '../../stories/assets/code-brackets.svg';
import { ReactComponent as Icon2 } from '../../stories/assets/colors.svg';
import { ReactComponent as Icon3 } from '../../stories/assets/comments.svg';
import { ReactComponent as Icon4 } from '../../stories/assets/direction.svg';
import { ReactComponent as Icon5 } from '../../stories/assets/flow.svg';

export default {
  component: NavBar,
  title: 'Example/Navigation Bar'
} as ComponentMeta<typeof NavBar>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof NavBar> = (arguments_) => <NavBar {...arguments_} />;

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
    link: '/my-network',
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
  }
];

export const NavigationBar = Template.bind({});
NavigationBar.args = {
  navItems
};
