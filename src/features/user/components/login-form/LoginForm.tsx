import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getNewUserTokenAsync, selectUser } from '../user-slice';
import {
  BaseInput,
  Loading,
  LogButton,
  LogInFormStyled,
  LogInTitle,
  UserFeedBack,
} from './LoginFormStyled';

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { status, loginStatus, loginMessage } = useAppSelector(selectUser);
  const feedBackUser = () => {
    switch (loginStatus) {
      case 'success':
        return (
          <UserFeedBack>
            <p>{loginMessage}</p>
          </UserFeedBack>
        );
      case 'error':
        return (
          <UserFeedBack>
            <p>{loginMessage}</p>
          </UserFeedBack>
        );
      default:
        return;
    }
  };

  return (
    <>
      <LogInFormStyled
        data-testid="login-form"
        onSubmit={e => {
          e.preventDefault();
          dispatch(getNewUserTokenAsync(e.currentTarget));
        }}
      >
        <>
          <img
            className="avatar__img"
            src="/assets/img/avatar-obron.svg"
            alt="avatar-img"
          />
          <LogInTitle>Log In</LogInTitle>
          <BaseInput
            name="email"
            type="email"
            placeholder="Email"
            required
          ></BaseInput>
          <BaseInput
            name="password"
            type="password"
            placeholder="Password"
            required
          ></BaseInput>
          <LogButton type="submit" role={'button'}>
            LOG
          </LogButton>
        </>
        {status === 'loading' ? (
          <Loading>
            <img src="/assets/img/loading.gif" alt="loading-gif" width={30} />
          </Loading>
        ) : (
          feedBackUser()
        )}
      </LogInFormStyled>
    </>
  );
};

export default LoginForm;
