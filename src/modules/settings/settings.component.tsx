import { type FC } from 'react';

import { useSettingsContext } from './contexts';

export const Settings: FC = () => {
  const { title } = useSettingsContext();

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};
