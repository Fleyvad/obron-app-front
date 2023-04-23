import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { createProjectAsync, selectProjects } from '../project-slice';
import {
  BaseButton,
  BaseInput,
  CreateProjectFeedBack,
  ProjectFormContainer,
  ResourcesContainer,
  SeparationLine,
  SubtitleSectionForm,
  TextDescription,
} from './project-form-styled';
import { Loading } from '../../../user/components/login-form/login-form-styled';

const ProjectForm = () => {
  const dispatch = useAppDispatch();
  const { createProjectStatus } = useAppSelector(selectProjects);
  const feedbackUserForm = () => {
    switch (createProjectStatus) {
      case 'success':
        return <Navigate to={'/projects'} />;
      case 'error':
        return (
          <>
            <CreateProjectFeedBack>
              your OBRON project has not been created
            </CreateProjectFeedBack>
          </>
        );
      default:
        return;
    }
  };
  return (
    <>
      <ProjectFormContainer
        data-testid="project-form"
        onSubmit={e => {
          e.preventDefault();
          dispatch(createProjectAsync(e.currentTarget));
        }}
      >
        <BaseInput
          name="date"
          id="Date"
          type="date"
          placeholder="Date"
          required
        />
        <BaseInput
          name="projectName"
          id="projectName"
          type="text"
          placeholder="Name"
          required
        />
        <TextDescription
          name="description"
          id="description"
          placeholder="Description"
          required
        />
        <SeparationLine />
        <SubtitleSectionForm>RESOURCES</SubtitleSectionForm>
        <ResourcesContainer>
          <BaseInput
            name="resources.date"
            id="ResourcesDate"
            type="date"
            placeholder="Date"
            required
          />
          <BaseInput
            role="textbox"
            name="resources.enterprise"
            id="enterprise"
            type="text"
            placeholder="Enterprise"
            required
          />
          <BaseInput
            role="textbox"
            name="resources.worker"
            id="worker"
            type="text"
            placeholder="Worker"
            required
          />
          <BaseInput
            role="textbox"
            name="resources.hours"
            id="hours"
            type="text"
            placeholder="Hours"
            required
          />
          <BaseInput
            role="textbox"
            name="resources.tools"
            id="tools"
            type="text"
            placeholder="Tools"
            required
          />
          <BaseInput
            role="textbox"
            name="resources.vehicles"
            id="vehicles"
            type="text"
            placeholder="Vehicles"
            required
          />
        </ResourcesContainer>
        <SeparationLine />
        <TextDescription
          name="Incidences"
          id="Incidences"
          placeholder="Incidences"
          required
        />
        <BaseInput
          data-testid="photo"
          type="file"
          accept="image/*"
          id="projectImage"
          name="upload"
          placeholder="imageURL"
        />
        <SeparationLine />
        <BaseButton
          className="project-form__create-button"
          type="submit"
          role={'button'}
        >
          CREATE
        </BaseButton>
        {createProjectStatus === 'loading' ? (
          <Loading>
            <img src="/assets/img/loading.gif" alt="loading-gif" width={30} />
          </Loading>
        ) : (
          feedbackUserForm()
        )}
      </ProjectFormContainer>
    </>
  );
};

export default ProjectForm;
