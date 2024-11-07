import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom'
import Plan from './Plan';

describe('Plan page', () => {
  test('renders the plan ID from the URL parameter', async () => {
    render(
      <MemoryRouter initialEntries={['/plan/1']}>
        <Routes>
          <Route path="/plan/:id" element={<Plan />} />
        </Routes>
      </MemoryRouter>
    );

    const text: Element = screen.getByText((content) => content.includes('Plan 1'));
    expect(text).toBeInTheDocument();
  });
});
