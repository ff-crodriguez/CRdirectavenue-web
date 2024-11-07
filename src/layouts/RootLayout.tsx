import { Outlet } from 'react-router-dom';

import Navigation from '../components/navigation/Navigation';

const RootLayout = (): JSX.Element => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default RootLayout;
