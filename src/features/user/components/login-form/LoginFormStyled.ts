import styled from 'styled-components';

export const LogInTitle = styled.h3`
  margin: 1rem;
`;

export const LogInFormStyled = styled.form`
  margin: 0 auto;
  width: 100%;
  padding: 3rem 0;
  font-weight: 400;
  max-width: 500px;
  .avatar__img {
    border: 1px solid black;
    border-radius: 100%;
  }
`;

export const BaseInput = styled.input`
  margin: 2rem auto;
  border-radius: 10px;
  background-color: #ffcf6a;
  min-height: 58px;
  min-width: 226px;
  border: 1px solid black;
  padding-left: 1rem;
  font-family: 'Inria Sans', sans-serif;
  box-shadow: rgb(51, 51, 51) 2px 2px 0px 0px;
  display: block;
  ::placeholder {
    padding: 0.5rem;
  }
`;

export const LogButton = styled.button`
  min-height: 46px;
  min-width: 78px;
  background-color: #ffcf6a;
  border-radius: 10px;
  border: 1px solid black;
  box-shadow: rgb(51, 51, 51) 2px 2px 0px 0px;
`;

export const UserFeedBack = styled.div`
  margin: 1rem auto;
`;

export const Loading = styled.div`
  padding: 1rem;
`;
