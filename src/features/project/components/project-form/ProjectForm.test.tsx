import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../../../app/store';
import { server } from '../../../../mocks/server';

import userEvent from '@testing-library/user-event';
import ProjectForm from './ProjectForm';
import { renderWithProviders } from '../../../../mocks/test-utils';

describe('Given a CreateProject form component', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  test('When the component is rendered, then it should show the form', async () => {
    render(
      <MemoryRouter initialEntries={['/projects/create']}>
        <Provider store={store}>
          <ProjectForm />
        </Provider>
      </MemoryRouter>,
    );

    const inputElements = await screen.findAllByRole('textbox');
    expect(inputElements.length).toEqual(8);
  });
  test('When the user clicks create button, then it should call a function', async () => {
    render(
      <MemoryRouter initialEntries={['/create']}>
        <Provider store={store}>
          <ProjectForm />
        </Provider>
      </MemoryRouter>,
    );
    const createFn = jest.fn();
    const createElement = screen.getByRole('button');
    userEvent.click(createElement, createFn());
    await waitFor(() => {
      expect(createFn).toHaveBeenCalled();
    });
  });
});
describe('When the user tries create a project with wrong data', () => {
  test('Then its should recived a error', async () => {
    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: jest.fn().mockResolvedValue({
        msg: 'your OBRON project has not been created',
      }),
    });
    renderWithProviders(
      <MemoryRouter>
        <ProjectForm />
      </MemoryRouter>,
    );
    const inputProjectName = screen.getByPlaceholderText('Name');
    await userEvent.type(inputProjectName, 'Luis');
    // await userEvent.selectOptions(screen.getByRole('combobox'), 'Asia');
    await userEvent.upload(
      screen.getByTestId('photo'),
      new File([''], 'obron.webp'),
    );

    userEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      const errorMsg = screen.getByText(
        'your OBRON project has not been created',
      );
      expect(errorMsg).toBeInTheDocument();
    });
  });
});
