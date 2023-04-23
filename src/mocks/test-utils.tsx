import { PreloadedState } from '@reduxjs/toolkit';
import { render, RenderOptions } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { RootState, AppStore, setupStore } from '../app/store';
import { APIstatus } from '../shared/api-status';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {
      user: {
        status: APIstatus.IDLE,
        loginStatus: 'idle',
        loginMessage: '',
      },
      projects: {
        status: APIstatus.IDLE,
        propjectStatus: 'idle',
        projectMessage: '',
        projects: [],
        createProjectStatus: 'idle',
      },
    },
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
