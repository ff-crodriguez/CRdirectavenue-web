import { type ComponentProps, type FC } from 'react';

import { ErrorMessage } from '@shared/components';
import Styled from './input.styles';

const AUTO_COMPLETE = 'new-password';

interface IInputProps extends Omit<ComponentProps<'input'>, 'name'> {
  label?: string;
  name: string;
  errorMessage?: string;
}

export const Input: FC<IInputProps> = ({
  label,
  name,
  errorMessage,
  type = 'text',
  autoComplete = type === 'password' ? AUTO_COMPLETE : undefined,
  ...rest
}) => {
  return (
    <Styled.InputWrapper>
      {label && <Styled.Label>{label}</Styled.Label>}
      <Styled.Input autoComplete={autoComplete} type={type} {...rest} />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Styled.InputWrapper>
  );
};
