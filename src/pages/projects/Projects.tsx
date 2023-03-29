import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  getProjectsAsync,
  selectProjects,
} from '../../features/project/components/project-slice';
import ProjectsList from '../../features/project/components/projects-list/ProjecstList';
import { ProjectsPageContainer, TitlePageProjects } from './projects-styled';

const ProjectsPage = () => {
  const dispatch = useAppDispatch();
  const projectsState = useAppSelector(selectProjects);

  useEffect(() => {
    dispatch(getProjectsAsync());
  }, [dispatch]);
  return (
    <>
      <ProjectsPageContainer>
        <div className="projectsPage__header">
          <TitlePageProjects>PROJECTS</TitlePageProjects>
          <img
            className="projectsPage__create-logo"
            src="/assets/img/create-button.svg"
            alt="create-img"
          />
        </div>
        <ProjectsList projects={projectsState.projects} />
      </ProjectsPageContainer>
    </>
  );
};

export default ProjectsPage;
