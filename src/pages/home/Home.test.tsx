import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import { renderWithMuiTheme } from '../../helpers/Render-test-with-mui-theme';
import Home from './Home';

describe('Home page user testing cases', () => {
  it('Display home page', () => {
    renderWithMuiTheme(<Home />);
    screen.debug();
    const h1: Element = screen.getByText('Home');
    expect(h1).toBeInTheDocument();
  });
});
