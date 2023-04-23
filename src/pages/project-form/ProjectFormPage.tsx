import ProjectForm from '../../features/project/components/project-form/ProjectForm';
import {
  ProjectsPageFormContainer,
  TitlePageProjectForm,
} from './project-form-page-styled';

const ProjectFormPage = () => {
  return (
    <ProjectsPageFormContainer>
      <TitlePageProjectForm>PROJECT FORM</TitlePageProjectForm>
      <ProjectForm></ProjectForm>
    </ProjectsPageFormContainer>
  );
};

export default ProjectFormPage;
