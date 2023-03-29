import { APIstatus } from '../../shared/api-status';

export interface ProjectStatus {
  status: APIstatus;
  propjectStatus: 'idle' | 'success' | 'error' | 'loadind';
  projectMessage: string | undefined;
  projects: Project[];
}

type Project = {
  _id: string;
  projectName: string;
  date: number;
  description: string;
  resources: {
    date: number;
    enterprise: string;
    worker: string;
    hours: number;
    tools: string;
    vehicles: string;
  };
  incidences: string;
  imgUrl: string;
};

export type ErrorAPI = { msg: string };
export type ProjectResponseData = { projects: Project[] };

export type ProjectResponse = ErrorAPI | ProjectResponseData;

export default Project;
