import { FC } from 'react';
import { useAppSelector } from '../../../../app/hooks';
import { Loading } from '../../../user/components/login-form/login-form-styled';
import Project from '../../projects-model';

import { ProjectContainer } from '../project-card/project-card-styled';
import ProjectCard from '../project-card/ProjectCard';
import { selectProjects } from '../project-slice';
import { ProjectsListContainer } from './projects-list-styled';

interface projectCardProps {
  projects: Project[];
}
const ProjectsList: FC<projectCardProps> = ({ projects }) => {
  const { status } = useAppSelector(selectProjects);
  const createProjectsList = () => {
    switch (status) {
      case 'loading':
        return (
          <>
            <Loading>
              <img src="/assets/img/loading.gif" alt="loading-gif" width={30} />
            </Loading>
          </>
        );
      case 'failed':
        return <h1>Error to find projects</h1>;
      default:
        return (
          <ProjectsListContainer>
            {projects.map(project => (
              <ProjectContainer key={project._id}>
                <ProjectCard projects={project} />
              </ProjectContainer>
            ))}
          </ProjectsListContainer>
        );
    }
  };
  return <>{createProjectsList()}</>;
};

export default ProjectsList;
