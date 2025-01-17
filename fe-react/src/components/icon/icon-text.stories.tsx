/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMeta, ComponentStory } from '@storybook/react';
// import { withRouter } from 'storybook-addon-react-router-v6';

import { ReactComponent as Logo } from '../../assets/react.svg';
import IconText from './icon-text.component';

export default {
  component: IconText,
  // decorators: [withRouter],
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
  id: 1,
  isActive: false,
  link: '/home',
  target: '_self',
  text: 'Some text'
};
