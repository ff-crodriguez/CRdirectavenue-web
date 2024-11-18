import { type FC, type PropsWithChildren } from 'react';

import { HomeContext } from './home.context';

export const HomeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <HomeContext.Provider
      value={{
        title: 'Home',
      }}>
      {children}
    </HomeContext.Provider>
  );
};
