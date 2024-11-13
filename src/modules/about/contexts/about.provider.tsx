import { type FC, type PropsWithChildren } from 'react';

import { AboutContext } from './about.context';

export const AboutProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AboutContext.Provider value={{ title: 'About' }}>
      {children}
    </AboutContext.Provider>
  );
};
