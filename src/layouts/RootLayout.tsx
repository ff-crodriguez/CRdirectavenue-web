import { Outlet } from 'react-router-dom';

/**
 * RootLayout component that works as main layout for the application for nested routes.
 * @returns JSX.Element
 */
const RootLayout = (): JSX.Element => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default RootLayout;
