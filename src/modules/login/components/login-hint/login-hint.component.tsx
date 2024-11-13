import { type FC } from 'react';

import Styled from './login-hint.styles';

export const LoginHint: FC = () => (
  <div>
    <Styled.HintText>For login into the base project use:</Styled.HintText>
    <Styled.HintText>username: super-admin or admin or user </Styled.HintText>
    <Styled.HintText>password: pass</Styled.HintText>
  </div>
);
