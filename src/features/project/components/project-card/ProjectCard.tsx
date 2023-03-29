import { FC } from 'react';
import { Link } from 'react-router-dom';
import Project from '../../projects-model';
import { TextCard } from './project-card-styled';

interface ProjectCardProps {
  projects: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ projects }) => {
  const { projectName, date, imgUrl } = projects;
  const { enterprise } = projects.resources;

  return (
    <>
      <Link className="card__link" to={'#'}>
        <div className="card__texts">
          <TextCard>{projectName}</TextCard>
          <TextCard>{date}</TextCard>
          <TextCard>{enterprise}</TextCard>
        </div>
        <div className="card__logos">
          <img
            src="/assets/img/clock.svg"
            className="card__priority-logo"
            alt="clock-priority"
          />

          <img
            src="/assets/img/delete.svg"
            className="card__delete-logo"
            alt="delete"
          />
        </div>
      </Link>
      <img src={imgUrl} className="card__img" alt="dsfsd" />
    </>
  );
};

export default ProjectCard;
