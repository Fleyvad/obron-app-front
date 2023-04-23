import { APIstatus } from '../../shared/api-status';

export interface ProjectStatus {
  status: APIstatus;
  propjectStatus: 'idle' | 'success' | 'error' | 'loadind';
  projectMessage: string | undefined;
  projects: Project[];
  createProjectStatus: 'loading' | 'success' | 'error' | 'idle';
}

type Project = {
  _id: string;
  projectName: string;
  date: Date;
  description: string;
  resources: {
    date: Date;
    enterprise: string;
    worker: string;
    hours: number;
    tools: string;
    vehicles: string;
  };
  incidences: string;
  imgUrl: string;
};

export interface CreateProjectResponse {
  msg: string;
  travels: Project;
}

export type ErrorAPI = { msg: string };
export type ProjectResponseData = { projects: Project[] };

export type ProjectResponse = ErrorAPI | ProjectResponseData;

export default Project;
