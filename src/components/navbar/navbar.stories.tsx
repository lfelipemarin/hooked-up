// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';

import NavBar from './navbar.component';

import navItems from '../../constants/icons';

export default {
  component: NavBar,
  title: 'Example/Navigation Bar'
} as ComponentMeta<typeof NavBar>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof NavBar> = (arguments_) => <NavBar {...arguments_} />;

export const NavigationBar = Template.bind({});
NavigationBar.args = {
  navItems
};
