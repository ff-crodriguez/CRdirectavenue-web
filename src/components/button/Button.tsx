import { Typography } from '@mui/material';
import { FC, useState } from 'react';

import type { IButtonProps } from '../../types/button/ButtonProps';
import Styled from './Button.styled';

/**
 * Represents a counter section with a button
 * @returns
 */

const Button: FC<IButtonProps> = ({
  name,
  color,
}: IButtonProps): JSX.Element => {
  const [count, setCount] = useState<number>(0);

  /**
   * Handles counter increase click action
   */
  const handleClick = (): void => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <Typography variant="bodySmallBold">Count is {count}</Typography>
      <Styled.Button onClick={handleClick}>{name}</Styled.Button> - {color}
    </>
  );
};

export default Button;
