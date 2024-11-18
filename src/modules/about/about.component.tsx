import { type FC } from 'react';

import { useAboutContext } from './contexts';

export const About: FC = () => {
  const { title } = useAboutContext();

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};
