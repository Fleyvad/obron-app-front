import styled from 'styled-components';

export const LoginPage = styled.main`
  background-color: #ffcf6a;
  display: flex;
`;

export const LoginSection = styled.section`
  width: 50%;
  text-align: center;
  padding: 13rem 0;
  height: 100vh;
  .logo__img-black {
    display: none;
  }
  @media (max-width: 1070px) {
    width: 100%;
    padding: 1rem;
    .logo__img-black {
      display: block;
      height: 2.5rem;
    }
  }
`;

export const LoginSectionGray = styled.section`
  width: 50%;
  background-color: #414141;
  position: relative;
  @media (max-width: 1070px) {
    display: none;
  }
  .logo__img-yellow {
    margin: 1rem;
    height: 3.5rem;
  }
  .sign__img {
    display: block;
    height: 70%;
    margin: 0 auto;
    position: absolute;
    bottom: 0;
    left: 30%;
  }
`;
