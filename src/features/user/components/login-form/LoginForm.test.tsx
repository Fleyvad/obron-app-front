import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../../../app/store';
import { server } from '../../../../mocks/server';
import LoginForm from './LoginForm';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Given a login form component', () => {
  test('When the component loads, then it should be a avatar-log', () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  test('When the component loads, then it should be a welcome message', () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>,
    );

    expect(screen.getByText('Log In')).toBeInTheDocument();
  });

  test('When a user tries to login with a valid email and password, then he should receive his access token', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>
      </Provider>,
    );

    await userEvent.type(
      screen.getByPlaceholderText('Email'),
      'email@test.com',
    );
    await userEvent.type(screen.getByPlaceholderText('Password'), 'password');
    userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByText('You are logged in!')).toBeInTheDocument();
    });
  });

  test('When an user tries to log with incorrect email or password, then it should respond an error', async () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>,
    );

    await userEvent.type(
      screen.getByPlaceholderText('Email'),
      'email2@test.com',
    );
    await userEvent.type(screen.getByPlaceholderText('Password'), 'password');
    userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByText('Error while logging in')).toBeInTheDocument();
    });
  });
  test('When an server does not responde, then it should respond an error 500', async () => {
    server.use(
      rest.post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        (_req, res, ctx) => {
          return res(ctx.status(500), ctx.json({ msg: 'An error occurred' }));
        },
      ),
    );

    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>,
    );
    await userEvent.type(
      screen.getByPlaceholderText('Email'),
      'email@test.com',
    );
    await userEvent.type(screen.getByPlaceholderText('Password'), 'password');
    userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByText('An error occurred')).toBeInTheDocument();
    });
  });
});
