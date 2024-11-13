import styled from 'styled-components';

import { Button } from '@shared/components/button/button.component';

interface IStyledBackButtonProps {
  $width?: number;
}
const BackButton = styled(Button)<IStyledBackButtonProps>`
  width: ${({ $width }) =>
    typeof $width === 'number' ? `${$width}px` : undefined};
`;

export default {
  BackButton,
};
