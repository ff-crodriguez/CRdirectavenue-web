import { type ComponentProps, type FC } from 'react';

import Styled from './button.styles';

interface IButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'ghost';
}

export const Button: FC<IButtonProps> = ({
  variant = 'primary',
  children,
  ...rest
}) => (
  <Styled.Button $variant={variant} {...rest}>
    {children}
  </Styled.Button>
);
