import { type FC } from 'react';

import { useLoginContext } from './contexts';

export const Login: FC = () => {
  const { title } = useLoginContext();

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};
