import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { APIstatus } from '../../../shared/api-status';
import { getAllProjects } from '../projects-api';
import { ProjectResponse, ProjectStatus } from '../projects-model';

const STATE_NAME = 'projects';

const initialState: ProjectStatus = {
  status: APIstatus.IDLE,
  propjectStatus: 'idle',
  projectMessage: '',
  projects: [],
};

export const getProjectsAsync = createAsyncThunk(
  `${STATE_NAME}/getAllProjects`,
  async () => {
    const apiResponse = await getAllProjects();
    const data: ProjectResponse = await apiResponse.json();

    if (!apiResponse.ok) {
      throw new Error(data.msg);
    }

    return data;
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
        (state, action: PayloadAction<ProjectResponse>) => {
          state.status = APIstatus.IDLE;
          state.propjectStatus = 'success';
          state.projectMessage = action.payload.msg;
          state.projects = action.payload.projects;
        },
      )
      .addCase(getProjectsAsync.rejected, (state, action) => {
        state.status = APIstatus.ERROR;
        state.propjectStatus = 'error';
        state.projectMessage = action.error.message;
      });
  },
});

export const selectProjects = (state: RootState) => state.projects;
export default projectSlice.reducer;
