import {
  BaseInput,
  LogButton,
  LogInFormStyled,
  LogInTitle,
} from './LoginFormStyled';

const LoginForm = () => {
  return (
    <>
      <LogInFormStyled>
        <img
          className="avatar__img"
          src="/assets/img/avatar-obron.svg"
          alt="avatar-img"
        />
        <LogInTitle>Log In</LogInTitle>
        <BaseInput type="email" placeholder="Email" required></BaseInput>
        <BaseInput type="password" placeholder="Password" required></BaseInput>
        <LogButton type="submit">LOG</LogButton>
      </LogInFormStyled>
    </>
  );
};

export default LoginForm;
