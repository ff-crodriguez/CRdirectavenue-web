import { createContext, useContext } from 'react';

interface IHomeContextData {
  title: string;
}

export const SettingsContext = createContext<IHomeContextData>({
  title: '',
});

export const useSettingsContext = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error(
      'useSettingsContext must be used within a SettingsProvider',
    );
  }
  return context;
};
