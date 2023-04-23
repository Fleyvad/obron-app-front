import styled from 'styled-components';

export const ProjectFormContainer = styled.form`
  margin: 1rem auto;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: rgb(51, 51, 51) 2px 2px 0px 0px;
  padding: 5rem 2rem 2rem 2rem;
  .project-form__create-button {
    margin: 0 auto;
  }

  @media (max-width: 715px) {
    padding: 4rem 1rem 1rem 1rem;
  }
`;

export const BaseInput = styled.input`
  margin: 0.5rem 0;
  margin-right: 0.5rem;
  border-radius: 5px;
  background-color: #ffcf6a;
  min-height: 2rem;
  /* max-height: 2rem; */
  min-width: 192px;
  border: 1px solid black;
  padding: 0 0.5rem;

  font-family: 'Inria Sans', sans-serif;
  /* box-shadow: rgb(51, 51, 51) 2px 2px 0px 0px; */
  display: block;
  ::placeholder {
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const TextDescription = styled.textarea`
  margin: 0.5rem 0;
  border-radius: 5px;
  background-color: #ffcf6a;
  min-height: 175px;
  width: 65%;

  border: 1px solid black;
  padding: 0.5rem 0.5rem;

  font-family: 'Inria Sans', sans-serif;
  /* box-shadow: rgb(51, 51, 51) 2px 2px 0px 0px; */
  display: block;
  ::placeholder {
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const BaseButton = styled.button`
  margin: 0.5rem 0;
  margin-right: 0.5rem;
  border-radius: 5px;
  background-color: #ffcf6a;
  min-height: 2rem;
  /* max-height: 2rem; */
  min-width: 192px;
  border: 1px solid black;
  padding: 0 0.5rem;

  font-family: 'Inria Sans', sans-serif;
  box-shadow: rgb(51, 51, 51) 2px 2px 0px 0px;
  display: block;
  ::placeholder {
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const ResourcesContainer = styled.div`
  display: flex;
  justify-content: left;
  @media (max-width: 1340px) {
    flex-wrap: wrap;
  }
`;

export const SeparationLine = styled.div`
  border-bottom: 1px solid black;
  margin: 2rem 0;
`;

export const SubtitleSectionForm = styled.p`
  font-size: 1rem;
`;

export const CreateProjectFeedBack = styled.h3``;
