import { type FC, type PropsWithChildren } from 'react';

import { SettingsContext } from './settings.context';

export const SettingsProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SettingsContext.Provider
      value={{
        title: 'Settings',
      }}>
      {children}
    </SettingsContext.Provider>
  );
};
