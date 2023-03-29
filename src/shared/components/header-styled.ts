import styled from 'styled-components';

export const NavBar = styled.header`
  height: 6rem;
  width: 100%;
  border-bottom: 1px solid black;
  background-color: #ffcf6a;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  @media (min-width: 715px) {
    padding: 0 3rem;
  }

  .header__logo-black {
    height: 2.5rem;
  }
  .header__links-container {
    display: flex;
    justify-content: space-between;
    width: 30%;
    min-width: 10rem;
    margin: 0 1rem;
    margin-top: 0.8rem;
  }
  .header__user-info {
    display: flex;
    align-items: center;
    margin-top: 0.8rem;
  }
  .header__avatar-logo {
    height: 2rem;
    border-radius: 50%;
    border: 1px solid black;
    margin: 0 1rem;
  }
  .header__text {
    text-decoration: none;
    color: black;
  }
  @media (max-width: 665px) {
    .header__user-info {
      display: none;
    }
  }
`;
