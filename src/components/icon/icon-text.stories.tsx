// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ReactComponent as Logo } from '../../assets/react.svg';
import './icon-text-story-styles.scss';
import IconText from './icon-text.component';

export default {
  component: IconText,
  title: 'Example/Icon Button'
} as ComponentMeta<typeof IconText>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof IconText> = (arguments_) => <IconText {...arguments_} />;

// export const IconOnly = Template.bind({});
// IconOnly.args = {
//   Icon: Logo,
//   link: 'https://google.com'
// };

export const IconWithText = Template.bind({});
IconWithText.args = {
  Icon: Logo,
  isActive: true,
  link: 'https://google.com',
  target: '_blank',
  text: 'Some text'
};
