import styled from 'styled-components';

const HintText = styled.p`
  margin: ${({ theme }) => theme.spacing(0)};
  font-size: 14px;
  color: ${({ theme }) => theme.palette.text.primary};
  text-align: center;
  font-style: italic;
`;

export default {
  HintText,
};
