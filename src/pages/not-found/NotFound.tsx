import { Link } from 'react-router-dom';
import { NotFoundPageContainer } from './not-found-styled';

export const NotFoundPage = () => {
  return (
    <NotFoundPageContainer>
      <div className="not-found-page__img-container">
        <div className="not-found-page__background">
          <img
            className="not-found-page__img-sign"
            src="/assets/img/sign-404.svg"
            alt="sign-404"
          />
          <h3 className="not-found-page__text">Dont find this OBRON!</h3>
          <Link className="not-found-page__link" to={'/projects'}>
            Go to PROJECTS
          </Link>
          <img
            className="not-found-page__img-obron"
            src="/assets/img/obron-404.svg"
            alt="obron-404"
          />
        </div>
        {/* <div className="not-found-page__floor"></div> */}
      </div>
    </NotFoundPageContainer>
  );
};

export default NotFoundPageContainer;
