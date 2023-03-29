import styled from 'styled-components';

export const ProjectsPageContainer = styled.main`
  min-height: 100vh;
  background-color: #ffcf6a;
  padding: 3rem;
  padding-top: 8rem;
  .projectsPage__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .projectsPage__create-logo {
    width: 2rem;
  }
  @media (max-width: 715px) {
    padding: 2rem 1rem;
    padding-top: 8rem;
  }
`;
export const TitlePageProjects = styled.p``;

export const CreateCard = styled.link``;
