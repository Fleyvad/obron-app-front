import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { APIstatus } from '../../../shared/api-status';
import { createProject, getAllProjects } from '../projects-api';
import {
  CreateProjectResponse,
  ErrorAPI,
  ProjectResponse,
  ProjectResponseData,
  ProjectStatus,
} from '../projects-model';

const STATE_NAME = 'projects';

const initialState: ProjectStatus = {
  status: APIstatus.IDLE,
  propjectStatus: 'idle',
  projectMessage: '',
  projects: [],
  createProjectStatus: 'idle',
};

export const createProjectAsync = createAsyncThunk(
  `${STATE_NAME}/createProject`,
  async (form: HTMLFormElement) => {
    const newProjectForm = new FormData(form);
    const apiResponse = await createProject(newProjectForm);
    const data: CreateProjectResponse = await apiResponse.json();
    if (!apiResponse.ok) {
      throw new Error(data.msg);
    }
    return data;
  },
);

export const getProjectsAsync = createAsyncThunk(
  `${STATE_NAME}/getAllProjects`,
  async () => {
    const apiResponse = await getAllProjects();
    const data: ProjectResponse = await apiResponse.json();

    if (!apiResponse.ok) {
      throw new Error((data as ErrorAPI).msg);
    }

    return data as ProjectResponseData;
  },
);

export const projectSlice = createSlice({
  name: STATE_NAME,
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProjectsAsync.pending, state => {
        state.status = APIstatus.LOADING;
        state.propjectStatus = 'loadind';
      })
      .addCase(
        getProjectsAsync.fulfilled,
        (state, action: PayloadAction<ProjectResponseData>) => {
          state.status = APIstatus.IDLE;
          state.propjectStatus = 'success';
          state.projects = action.payload.projects;
        },
      )
      .addCase(getProjectsAsync.rejected, (state, action) => {
        state.status = APIstatus.ERROR;
        state.propjectStatus = 'error';
        state.projectMessage = action.error.message;
      })
      .addCase(createProjectAsync.pending, state => {
        state.status = APIstatus.LOADING;
        state.createProjectStatus = 'loading';
      })
      .addCase(
        createProjectAsync.fulfilled,
        (state, action: PayloadAction<CreateProjectResponse>) => {
          state.status = APIstatus.IDLE;
          state.createProjectStatus = 'success';
          state.projectMessage = action.payload.msg;
        },
      )
      .addCase(createProjectAsync.rejected, (state, action) => {
        state.status = APIstatus.ERROR;
        state.createProjectStatus = 'error';
        state.projectMessage = action.error.message;
      });
  },
});

export const selectProjects = (state: RootState) => state.projects;
export default projectSlice.reducer;
