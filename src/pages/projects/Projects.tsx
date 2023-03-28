import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  getProjectsAsync,
  selectProjects,
} from '../../features/project/components/project-slice';
import ProjectsList from '../../features/project/components/projects-list/ProjecstList';
import { ProjectsPageContainer, TitlePageProjects } from './projects-styled';

export const ProjectsPage = () => {
  const dispatch = useAppDispatch();
  const projectsState = useAppSelector(selectProjects);
  useEffect(() => {
    dispatch(getProjectsAsync());
  }, [dispatch]);
  return (
    <>
      <ProjectsPageContainer>
        <TitlePageProjects>PROJECTS</TitlePageProjects>
        <ProjectsList projects={projectsState.projects} />
      </ProjectsPageContainer>
    </>
  );
};

export default ProjectsPage;
