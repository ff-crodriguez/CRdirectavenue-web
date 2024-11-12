import { type FC, type PropsWithChildren } from 'react';

import Styled from './error-message.styles';

export const ErrorMessage: FC<PropsWithChildren> = ({ children }) =>
  !!children && <Styled.ErrorMessage>{children}</Styled.ErrorMessage>;
