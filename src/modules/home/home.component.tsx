import { type FC } from 'react';

import { useHomeContext } from './contexts';

export const Home: FC = () => {
  const { title } = useHomeContext();

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};
