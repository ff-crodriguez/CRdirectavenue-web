import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Home from './Home';

describe('Home page user testing cases', () => {
  it('Display home page', () => {
    render(<Home />);
    screen.debug();
    const h1: Element = screen.getByText('Home');
    expect(h1).toBeInTheDocument();
  });
});
