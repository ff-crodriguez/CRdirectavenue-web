import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from 'react-router-dom';

import { Box, Button } from '@shared/components';
import { ROUTES } from '@shared/routes';
import { PAGE_NOT_FOUND } from './utils';

export const ErrorComponent = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = PAGE_NOT_FOUND;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    errorMessage = 'Unknown error';
  }

  const goToHome = () => navigate(ROUTES.HOME);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      gap={4}>
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <h2>{errorMessage}</h2>
        <p>Please return to the homepage using the button below.</p>
        <Button onClick={goToHome}>Return Home</Button>
      </Box>
    </Box>
  );
};
