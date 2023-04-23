import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
  PreloadedState,
} from '@reduxjs/toolkit';
import userReducer from '../features/user/components/user-slice';
import projectsReducer from '../features/project/components/project-slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    projects: projectsReducer,
  },
});

const rootReducer = combineReducers({
  user: userReducer,
  projects: projectsReducer,
});
export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
