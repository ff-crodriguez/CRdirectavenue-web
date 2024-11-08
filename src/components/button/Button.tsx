import { FC, useState } from 'react';

import type { IButtonProps } from '../../types/button/ButtonProps';

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
      <p>Count is {count}</p>
      <button onClick={handleClick}>{name}</button> - {color}
    </>
  );
};

export default Button;
