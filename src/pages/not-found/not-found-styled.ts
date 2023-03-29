import styled from 'styled-components';

export const NotFoundPageContainer = styled.main`
  min-height: 100vh;
  background-color: #ffcf6a;

  .not-found-page__background {
    background-color: #414141;
    text-align: center;
    min-height: 50vh;
    padding-top: 4rem;
  }

  .not-found-page__img-container {
    position: relative;
  }
  .not-found-page__text {
    text-align: center;
    font-size: 4rem;
    color: #ffcf6a;
    margin: 1rem 0;
  }
  .not-found-page__link {
    text-align: center;
    font-size: 2rem;
    color: #ffcf6a;
    text-decoration: none;
    padding: 0 10rem;
  }
  .not-found-page__img-obron {
    max-width: 100%;
    padding: 0 3rem 0 6rem;
    margin: 1rem 0;
  }
  .not-found-page__img-sign {
    max-height: 60%;
    position: absolute;
    top: 16rem;
    left: 3rem;
  }
  .not-found-page__floor {
    background-color: #ffcf6a;
    height: 5rem;
    width: 100%;
  }
  @media (max-width: 670px) {
    .not-found-page__text {
      font-size: 2rem;
    }
    .not-found-page__link {
      font-size: 1rem;
      padding: 0 3rem;
    }
    .not-found-page__background {
      background-color: #414141;
      padding: 2rem;
      min-height: 50vh;
    }
    .not-found-page__img-sign {
      top: 11rem;
      left: 1rem;
    }
    .not-found-page__img-obron {
      max-width: 100%;
      padding: 0 1rem 0;
      margin: 1rem 0;
    }
  }
`;
