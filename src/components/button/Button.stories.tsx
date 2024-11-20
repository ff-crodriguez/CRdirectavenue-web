import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

/**
 * Storybook configuration for the `Button` component.
 */
const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Counter: Story = {
  args: {
    name: 'Button',
    color: 'blue',
  },
};
