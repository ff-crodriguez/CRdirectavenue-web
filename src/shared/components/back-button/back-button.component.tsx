import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';

import Styled from './back-button.styles';

interface IBackButtonProps {
  variant?: 'primary' | 'ghost';
  disabled?: boolean;
  width?: number;
  onClick?: () => void;
}

export const BackButton: FC<IBackButtonProps> = ({
  width,
  onClick,
  ...rest
}) => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <Styled.BackButton $width={width} onClick={onClick ?? goBack} {...rest}>
      Back
    </Styled.BackButton>
  );
};
