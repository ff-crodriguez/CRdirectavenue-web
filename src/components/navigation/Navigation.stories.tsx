import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import Navigation from './Navigation';

const meta: Meta<typeof Navigation> = {
  component: Navigation,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const MainNavigation: Story = {};
