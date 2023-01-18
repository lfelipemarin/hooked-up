/* eslint-disable react/jsx-props-no-spreading */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { Page } from './page';

export default {
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  },
  title: 'Example/Page'
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (arguments_) => <Page {...arguments_} />;

export const LoggedOut = Template.bind({});

export const LoggedIn = Template.bind({});

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
LoggedIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = canvas.getByRole('button', { name: /log in/i });
  userEvent.click(loginButton);
};