import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 1rem;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

interface IStyledInputProps {
  $isInvalid?: boolean;
}
const Input = styled.input<IStyledInputProps>`
  background: transparent;
  border: none;
  outline: 1px solid
    ${({ theme, $isInvalid }) =>
      $isInvalid ? theme.palette.error.main : theme.palette.grey[300]};
  border-radius: 4px;
  color: ${({ theme }) => theme.palette.text.primary};
  padding: ${({ theme }) => theme.spacing(0, 2)};
  height: 40px;

  &:hover {
    outline-color: ${({ theme, $isInvalid }) =>
      $isInvalid ? theme.palette.error.main : theme.palette.common.black};
  }

  &:focus {
    outline: 2px solid
      ${({ theme, $isInvalid }) =>
        $isInvalid ? theme.palette.error.main : theme.palette.primary.main};
  }
`;

export default {
  InputWrapper,
  Label,
  Input,
};
