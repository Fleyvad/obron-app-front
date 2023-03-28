import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Projects from './Projects';

describe('Given a projects page', () => {
  test('When the home is used, then it should render a div element', () => {
    render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>,
    );
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
