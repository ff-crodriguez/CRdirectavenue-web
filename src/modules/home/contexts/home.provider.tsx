import { useState, type FC, type PropsWithChildren } from 'react';

import { HomeContext } from '.';

export const HomeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [companyName] = useState('First Factory');

  return (
    <HomeContext.Provider
      value={{
        companyName,
      }}>
      {children}
    </HomeContext.Provider>
  );
};
