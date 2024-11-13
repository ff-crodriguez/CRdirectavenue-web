import { type FC, type MouseEventHandler, type PropsWithChildren } from 'react';

import Styled from './link.styles';

interface ILinkProps extends PropsWithChildren {
  to: string;
  underline?: boolean | 'on-hover';
  fullWidth?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export const Link: FC<ILinkProps> = ({
  underline,
  fullWidth,
  children,
  ...rest
}) => (
  <Styled.Link $underline={underline} $fullWidth={fullWidth} {...rest}>
    {children}
  </Styled.Link>
);
