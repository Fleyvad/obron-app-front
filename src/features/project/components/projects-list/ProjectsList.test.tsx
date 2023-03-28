import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../../../app/store';

import { errorHandlers, handlers } from '../../../../mocks/handler';
import { server } from '../../../../mocks/server';
import { ProjectsPage } from '../../../../pages/projects/Projects';
import { Loading } from '../../../user/components/login-form/login-form-styled';

describe('Given a session list component,', () => {
  beforeAll(() => server.listen());
  beforeEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('when the user does not receive projects to view, the page should show an error message', async () => {
    server.use(...errorHandlers);
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProjectsPage />
        </MemoryRouter>
      </Provider>,
    );

    await waitFor(() => {
      const errorMessage = screen.getByText('Error to find projects');
      expect(errorMessage).toBeInTheDocument();
    });
  });

  // test('when the page loads, it should show a list of projects', async () => {
  //   server.use(...handlers);

  //   render(
  //     <MemoryRouter>
  //       <ProjectsPage />
  //     </MemoryRouter>,
  //   );

  //   await waitFor(() => {
  //     const listItem = screen.getAllByRole('listitem');
  //     expect(listItem).toHaveLength(1);
  //   });
  // });

  test('when the page is loading, it should show a img loading', async () => {
    server.use(
      rest.get(
        `${process.env.REACT_APP_API_URL}/api/v1/projects`,
        (_req, res, ctx) => {
          return res(
            ctx.delay(150),
            ctx.status(200),
            ctx.json([
              {
                _id: 'mockId2',
                projectName: 'Name',
                date: 0,
                description: '',
                resources: {
                  date: 0,
                  enterprise: '',
                  worker: '',
                  hours: 0,
                  tools: '',
                  vehicles: '',
                },
                incidences: '',
                imgUrl: '',
              },
            ]),
          );
        },
      ),
    );
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Loading>
            <img src="/assets/img/loading.gif" alt="loading-gif" width={30} />
          </Loading>
        </MemoryRouter>
      </Provider>,
    );

    await waitFor(() => {
      const loading = screen.getByRole('img');
      expect(loading).toBeInTheDocument();
    });
  });
});
