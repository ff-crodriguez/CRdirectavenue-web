import { Box } from '@mui/material';
import { useAuth } from '@shared/auth';
import { NavbarComponent } from '@shared/routing';
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from 'react-router-dom';

import { Routes } from '../../routing.routes';
import { PAGE_NOT_FOUND } from './utils';

export const ErrorComponent = () => {
  const { isAuthenticated } = useAuth();
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

  const goToHome = () => navigate(Routes.Home);

  return (
    <>
      {isAuthenticated && (
        <NavbarComponent rightNavbar={false} hideOrganization />
      )}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="90vh"
        gap={5}>
        <h1>404</h1>
        <h3>{errorMessage}</h3>
        <button onClick={goToHome}>Back Home</button>
      </Box>
    </>
  );
};
