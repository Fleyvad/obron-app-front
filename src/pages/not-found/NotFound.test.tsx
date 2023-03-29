import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../app/store';
import { server } from '../../mocks/server';
import { NotFoundPage } from './NotFound';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Given a not found page,', () => {
  test('when the user does not find the page they are looking for, they should see a 404 error page.', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <NotFoundPage />
        </MemoryRouter>
      </Provider>,
    );
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
