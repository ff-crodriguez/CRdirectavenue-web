import { type FC } from 'react';

import { Box } from '@shared/components';
import { useHomeContext } from './contexts/home.context';

export const Home: FC = () => {
  const { companyName } = useHomeContext();

  return (
    <Box padding={4}>
      <h1>Welcome to the {companyName}'s React base project</h1>
    </Box>
  );
};
