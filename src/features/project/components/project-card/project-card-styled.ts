import styled from 'styled-components';

export const ProjectContainer = styled.li`
  margin: 1rem auto;
  border: 1px solid black;
  border-radius: 12px;
  list-style: none;
  min-height: 5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background-color: #ffcf6a;
  box-shadow: rgb(51, 51, 51) 2px 2px 0px 0px;

  .card__link {
    text-decoration: none;
    display: flex;
    color: black;
    font-size: 1rem;
    justify-content: space-between;
  }
  .card__img {
    width: 100%;
    height: 30%;
    width: 100%;
    height: 15rem;
    border-radius: 0 0 12px 12px;
    object-fit: cover;
    object-position: 50% 50%;
    display: none;
  }
  .card__priority-logo {
    margin-right: 0.5rem;
  }

  .card__texts {
    display: flex;
  }
  .card__logos {
    display: flex;
  }
  @media (max-width: 715px) {
    padding: 0;
    .card__img {
      display: block;
      border-top: 1px solid black;
    }
    .card__link {
      padding: 1rem;
    }
    .card__texts {
      display: block;
      border-color: none;
    }
    .card__logos {
      display: flex;
      align-items: flex-start;
    }
    .card__delete-logo {
      margin-top: 0.15rem;
    }
  }
`;

export const TextCard = styled.p`
  padding: 0 2rem;
  border-right: 1px solid black;
  @media (max-width: 715px) {
    margin-bottom: 1rem;
    border-bottom: 1px solid black;
    border-right: none;
    padding: 0;
  }
`;
