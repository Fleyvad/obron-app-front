import LoginForm from '../../features/user/components/login-form/LoginForm';
import { LoginPage, LoginSection, LoginSectionGray } from './LoginStyled';

const Login = () => {
  return (
    <LoginPage>
      <LoginSectionGray>
        <img
          className="logo__img-yellow"
          src="/assets/img/logo-yellow.svg"
          alt="logo-obron"
        />
        <img className="sign__img" src="/assets/img/sign.svg" alt="sign-img" />
      </LoginSectionGray>
      <LoginSection>
        <img
          className="logo__img-black"
          src="/assets/img/logo-black.svg"
          alt="sign-img"
        />
        <LoginForm />
      </LoginSection>
    </LoginPage>
  );
};

export default Login;
