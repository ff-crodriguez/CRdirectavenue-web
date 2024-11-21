import type { Meta, StoryObj } from '@storybook/react';

import ButtonProps, { IButtonProps } from '../../types/button/ButtonProps';
import Button from './Button';

/**
 * Storybook configuration for the `Button` component.
 */
const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

/**
 * Button props
 */
const buttonProps: IButtonProps = new ButtonProps('Increase');

export const Counter: Story = {
  args: buttonProps,
};
