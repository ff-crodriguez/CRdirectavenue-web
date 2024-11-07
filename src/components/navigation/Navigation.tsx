import { NavLink } from 'react-router-dom';
import './Navigation.css';

const MainNavigation = (): JSX.Element => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/plan/1">Plans</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
