// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';

import RoundImage from './round-image.component';

export default {
  component: RoundImage,
  title: 'Example/Round Image'
} as ComponentMeta<typeof RoundImage>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof RoundImage> = (arguments_) => <RoundImage {...arguments_} />;

export const Default = Template.bind({});
Default.args = {
  imagePath: '../../assets/react.svg',
  alt: 'Alt text'
};

// export const IconWithText = Template.bind({});
// IconWithText.args = {
//   Icon: Logo,
//   link: 'https://google.com',
//   target: '_blank',
//   text: 'Some text'
// };
